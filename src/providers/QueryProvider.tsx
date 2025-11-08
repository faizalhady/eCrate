// src/providers/QueryProvider.tsx
import { devLog } from "@/lib/devLog"
import { getQueryMessage } from "@/lib/getQueryMessage"
import {
  MutationCache,
  Query,
  QueryCache,
  QueryClient,
  QueryClientProvider,
  type QueryCacheNotifyEvent,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import axios from "axios"
import React, { useEffect } from "react"
import { toast } from "sonner"


/* -------------------------------------------------
   Deduped Toast Notifications
---------------------------------------------------*/
const errorThrottle = new Set<string>()
function showErrorToast(title: string, message: string) {
  const key = `${title}:${message}`
  if (errorThrottle.has(key)) return
  errorThrottle.add(key)

  toast.error(title, { description: message })

  setTimeout(() => errorThrottle.delete(key), 4000)
}

const successThrottle = new Set<string>()
function showSuccessToast(title: string) {
  if (successThrottle.has(title)) return
  successThrottle.add(title)
  toast.success(title)
  setTimeout(() => successThrottle.delete(title), 3000)
}


/* -------------------------------------------------
   Helper — Extract readable error message
---------------------------------------------------*/
function extractErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || error.message
  }
  if (error instanceof Error) {
    return error.message
  }
  return "An unexpected error occurred."
}

/* -------------------------------------------------
   Global QueryClient Setup
---------------------------------------------------*/
export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      const message = extractErrorMessage(error)
      const title = getQueryMessage(query.queryKey, "error")
      showErrorToast(title, message)
      console.error("[QueryProvider] ❌ Query Error:", query.queryKey, message)
    },
  }),
  mutationCache: new MutationCache({
    onError: (error, _vars, _ctx, mutation) => {
      const message = extractErrorMessage(error)
      const title = getQueryMessage(mutation.options.mutationKey, "error")
      showErrorToast(title, message)
      console.error("[QueryProvider] ❌ Mutation Error:", mutation.options.mutationKey, message)
    },
    onSuccess: (_data, _vars, _ctx, mutation) => {
      const title = getQueryMessage(mutation.options.mutationKey, "success")
      showSuccessToast(title)
      devLog("QueryProvider", "✅ Mutation Success:", mutation.options.mutationKey)

    },
  }),
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 2, // 2 minutes
    },
  },
})

/* -------------------------------------------------
   Dev Cache Logger — Realtime State Monitor
---------------------------------------------------*/
function useQueryCacheLogger() {
  useEffect(() => {
    if (import.meta.env.MODE !== "development") return

    const unsubscribe = queryClient.getQueryCache().subscribe((event: QueryCacheNotifyEvent) => {
      if (event.type === "updated" && (event as any).query) {
        const query = (event as any).query as Query
        const status = query.state.status

        if (status === "error") {
          devLog("🧩 Cache Event: Error", {
            key: query.queryKey,
            error: query.state.error,
          })
        }

        if (status === "success") {
          devLog("QueryProvider", "🧩 Cache Event: Success", query.queryKey)

        }
      }
    })

    return () => unsubscribe()
  }, [])
}

/* -------------------------------------------------
   Provider Wrapper
---------------------------------------------------*/
export function QueryProvider({ children }: { children: React.ReactNode }) {
  useQueryCacheLogger()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
