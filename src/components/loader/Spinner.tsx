import { Loader2 } from "lucide-react";

export function Spinner({ size = 18, className = "" }: { size?: number; className?: string }) {
    return (
        <Loader2
            size={size}
            className={`animate-spin ${className || "text-primary"}`}
        />
    )
}



// <Button disabled={mutation.isPending} onClick={() => mutation.mutate()}>
//     {mutation.isPending ? <Spinner className="text-white" /> : "Simulate Save"}
// </Button>
