import { ModalSpinner, SkeletonTable, Spinner } from "@/components/loader"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useState } from "react"

export default function LoaderDemoPage() {
    // ---------- 1️⃣ Simulate query for skeleton ----------
    const query = useQuery({
        queryKey: ["demoData"],
        queryFn: async () => {
            await new Promise((r) => setTimeout(r, 2000)) // simulate delay
            return ["Apple", "Banana", "Cherry"]
        },
    })

    // ---------- 2️⃣ Simulate mutation for button spinner ----------
    const mutation = useMutation({
        mutationFn: async () => {
            await new Promise((r) => setTimeout(r, 1500)) // simulate save delay
            return "Saved"
        },
    })

    // ---------- 3️⃣ Modal state & mutation ----------
    const [open, setOpen] = useState(false)
    const modalMutation = useMutation({
        mutationFn: async () => {
            await new Promise((r) => setTimeout(r, 2000))
            setOpen(false)
        },
    })

    return (
        <div className="p-8 space-y-8">
            <h1 className="text-2xl font-bold mb-4">🧩 Loader Demo Page</h1>

            {/* 1️⃣ Skeleton demo */}
            <section className="space-y-3">
                <h2 className="text-xl font-semibold">1️⃣ Page Skeleton (query.isLoading)</h2>
                {query.isLoading ? (
                    <SkeletonTable />
                ) : (
                    <ul className="list-disc list-inside">
                        {query.data?.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                )}
            </section>

            {/* 2️⃣ Spinner demo */}
            <section className="space-y-3">
                <h2 className="text-xl font-semibold">2️⃣ Button Spinner (mutation.isPending)</h2>
                <Button disabled={mutation.isPending} onClick={() => mutation.mutate()}>
                    {mutation.isPending ? <Spinner className="text-white" /> : "Simulate Save"}
                </Button>

            </section>

            {/* 3️⃣ Modal spinner demo */}
            <section className="space-y-3">
                <h2 className="text-xl font-semibold">3️⃣ Modal Spinner (mutation.isPending)</h2>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent
                        className="max-w-md w-[90vw] sm:w-full max-h-[90vh] overflow-y-auto"
                    >
                        {modalMutation.isPending && <ModalSpinner />}

                        <DialogHeader>
                            <DialogTitle>Modal Submit Test</DialogTitle>
                        </DialogHeader>

                        <p className="text-sm text-muted-foreground mt-2">
                            Click “Save Changes” to see modal overlay spinner in action.
                        </p>

                        <div className="mt-6 flex justify-end">
                            <Button
                                disabled={modalMutation.isPending}
                                onClick={() => modalMutation.mutate()}
                            >
                                {modalMutation.isPending ? <Spinner /> : "Save Changes"}
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>

            </section>
        </div>
    )
}
