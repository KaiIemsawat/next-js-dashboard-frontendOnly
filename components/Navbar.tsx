import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import logo from "../img/logo.png";

const Navbar = () => {
    return (
        <div className="bg-primary dark:bg-slate-300 py-2 px-5 flex justify-between text-slate-300 dark:text-slate-800">
            <Link href="/">
                <Image src={logo} alt="CompanyLogo" width={40} />
            </Link>
            <Avatar>
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                />
            </Avatar>
        </div>
    );
};
export default Navbar;
