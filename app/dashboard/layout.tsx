import { SidebarProvider } from "@/ui/components"

const DashboardLayout = ({ children, sidebar }: {
    children: React.ReactNode,
    sidebar: React.ReactNode
}) => {
    return (
        <>
            <SidebarProvider>
                <div className="min-h-screen flex w-full">
                    {sidebar}
                    {children}
                </div>
            </SidebarProvider>
        </>
    )
}

export default DashboardLayout