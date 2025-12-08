import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "./Sidebar";
import { Logo } from "./Logo";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "./Item";
import { IconArchive, IconHome } from "../icons";
import { NavItem } from "./NavItem";
import { cn } from "@/lib/utils";
import { Checkbox } from "./Checkbox";
import { Count } from "./Count";

const meta = {
    title: 'Components/Sidebar',
    component: Sidebar
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <SidebarProvider>
            <div className="flex">
                <Sidebar className="p-4">
                    <SidebarHeader>
                        <Logo />
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup className="p-0">
                            <ItemGroup>
                                <NavItem icon={<IconHome />} title="Home" href="/" />
                                <NavItem icon={<IconArchive />} title="Archive" href="/" />
                            </ItemGroup>
                        </SidebarGroup>
                        <SidebarGroup className="p-0">
                            <SidebarGroupLabel>
                                TAGS
                            </SidebarGroupLabel>
                            <ItemGroup>
                                <Item>
                                    <ItemActions>
                                        <Checkbox/>
                                    </ItemActions>
                                    <ItemContent>
                                        <ItemDescription>Tag1</ItemDescription>
                                    </ItemContent>
                                    <ItemContent>
                                        <ItemDescription>
                                            <Count label="6"/>
                                        </ItemDescription>
                                    </ItemContent>
                                </Item>
                            </ItemGroup>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
                <main>
                    <SidebarTrigger />
                </main>
            </div>
        </SidebarProvider>
    )
}