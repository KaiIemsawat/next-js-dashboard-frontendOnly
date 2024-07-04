import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import logo from "../img/logo.png";

const Navbar = () => {
    return (
        <div className="bg-primary dark:bg-slate-300 py-2 px-5 flex justify-between text-slate-300 dark:text-slate-800">
            <Link href="/">
                <Image src={logo} alt="CompanyLogo" width={40} />
            </Link>

            <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none">
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                        />
                        <AvatarFallback className="text-slate-900 bg-rose-400">
                            K
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/auth">Logout</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
export default Navbar;
