

// ---- replacement for next/navigation ----
export function useRouter() {
  return {
    push: (url: string) => (window.location.href = url),
    replace: (url: string) => window.location.replace(url),
    back: () => window.history.back(),
  };
}
