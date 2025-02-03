"use client";
import { IoLogOutOutline } from "react-icons/io5";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { useState } from "react";


const LoginInfo = () => {
    const [logged, setLogged] = useState(false)

    const handleLogin = () => {
        setLogged(!logged)
    }

    return (
        <>

            {logged ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className="cursor-pointer">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={handleLogin} className="cursor-pointer" ><IoLogOutOutline /> Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu >
            ) : (
                <Button onClick={handleLogin} className="text-white inline-flex items-center justify-center px-7 py-2 text-sm font-medium bg-pink-700 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-shadow hover:bg-pink-500">Login</Button>)}
        </>

    )
}
export default LoginInfo