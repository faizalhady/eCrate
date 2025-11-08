// Centralized list of all protected route prefixes
export const protectedPaths = ["/calendar", "/booking"]

// Utility function to check if a given path is protected
export function isProtectedPath(pathname: string): boolean {
    return protectedPaths.some((p) => pathname.startsWith(p))
}
