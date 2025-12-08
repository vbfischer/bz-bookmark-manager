'use client'

import { Tag } from "@/db"
import { useState } from "react"
import useQueryParams from "@/hooks/use-query-params"
import { Sidebar, SidebarHeader, Logo, SidebarContent, SidebarGroup, ItemGroup, SidebarGroupLabel } from "@/ui/components"
import { NavItem } from "@/ui/components/NavItem"
import { TagItem } from "@/ui/components/TagItem"
import { IconHome, IconArchive } from "@/ui/icons"

interface SidebarClientProps {
    tags: Tag[];
    selectedTags?: string[];
    archived?: boolean;
}
export const SidebarClient = ({ tags, selectedTags = [], archived = false }: SidebarClientProps) => {
    const { updateQueryParams } = useQueryParams();
    const [optimisticTags, setOptimisticTags] = useState<string[]>(selectedTags);

    const handleSidebarChange = (checked: boolean, tagName: string) => {
        const newSelectedTags = checked
            ? [...optimisticTags, tagName]
            : optimisticTags.filter(tag => tag !== tagName);
        setOptimisticTags(newSelectedTags); // Optimistic UI update
        updateQueryParams({ tags: newSelectedTags }); // Update query params
    };

    return (
        <Sidebar className="bg-background p-4">
            <SidebarHeader>
                <Logo />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="p-0">
                    <ItemGroup>
                        <NavItem active={!archived} icon={<IconHome />} title="Home" href="/" />
                        <NavItem active={archived} icon={<IconArchive />} title="Archive" href="/" />
                    </ItemGroup>
                </SidebarGroup>
                <SidebarGroup className="p-0">
                    <SidebarGroupLabel>
                        TAGS
                    </SidebarGroupLabel>
                    <ItemGroup>
                        {tags.map(t => (
                            <TagItem
                                key={t.id}
                                name={t.name}
                                count={t.tagBookmarks.length}
                                checked={optimisticTags.includes(t.name)}
                                onCheckedChange={(e) => handleSidebarChange(e, t.name)} />
                        ))}
                    </ItemGroup>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}