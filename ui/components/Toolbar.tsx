'use client'

import { cn } from "@/lib/utils"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./InputGroup"
import { IconAdd, IconSearch } from "../icons"
import { Button } from "./Button"
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar"

export const Toolbar = ({ className, ...props }: React.ComponentProps<"nav">) => {
    return (
        <nav className={cn(
            "bg-background border-b border-secondary-btn-border",
            "flex px-8 py-4 justify-between",
            className
        )} {...props}>
            <InputGroup className="w-[320px]">
                <InputGroupInput placeholder="Search" />
                <InputGroupAddon>
                    <IconSearch />
                </InputGroupAddon>
            </InputGroup>
            <div className="flex items-center gap-4">
                <Button contentLeft={<IconAdd />} contentRight="Add Bookmark" />
                <Avatar className="size-10">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </nav>
    )
}