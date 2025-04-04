'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
    label: string;
    link: string;
    icon: React.ReactNode;
}

const NavItem:React.FC<NavItemProps> = ({
    label,link,icon
}) => {
    const pathname = usePathname()
    return (
        <Link href={link} className={`flex p-4 items-center w-full hover:bg-rose-300 font-medium ${pathname === link ? 'bg-rose-500 border-r-8 border-r-yellow-300' :''}`}>
            <div className="mr-1">{icon}</div>
            <div>{label}</div>
        </Link>
    )
}

export default NavItem