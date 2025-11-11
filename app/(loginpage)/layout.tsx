import { cn } from "@/lib/utils";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={cn(
            "min-h-screen flex justify-center items-center", 
            "*:w-full px-4",
            "*:tablet:w-md"
        )}>
            {children}
        </div>
    )
}

export default LoginLayout;