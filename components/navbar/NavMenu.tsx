import Link from "next/link"

type LinkType = {
    name: string,
    href: string
}
type Props = {
    links: LinkType[]
}

const NavMenu = ({ links }: Props) => {
    return (
        <div className="flex">
            <div className="flex bg-white rounded-sm border-2 border-black  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className="py-2 px-3 hover:bg-gray-50 rounded-sm">{link.name}</Link>
                ))}
            </div>
        </div>
    )
}
export default NavMenu