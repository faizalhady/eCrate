import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function LoginButton() {
    const navigate = useNavigate()

    return (
        <div className="w-full px-2 pb-3">
            <Button
                onClick={() => navigate("/login")}
                className="w-full justify-center font-medium rounded-lg"
            >
                Login
            </Button>
        </div>
    )
}
