import { Spinner } from "./Spinner"

export function ModalSpinner() {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm z-50">
            <Spinner size={32} />
        </div>
    )
}
