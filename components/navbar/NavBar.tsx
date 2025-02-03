import Logo from "@/components/Logo"
import NavMenu from "@/components/navbar/NavMenu"
import LoginInfo from "./LoginInfo"

const NavBar = () => {

    const Links = [
        { name: "Inicio", href: "/" },
        { name: "Biblioteca", href: "/library" },
        { name: "Novedades", href: "/newcomers" },
        { name: "Citas", href: "/quotes" },
        { name: "Recomienda", href: "/suggest" },
    ]

    return (
        <div className="flex justify-between items-center py-4 px-6 h-16">
            <Logo />
            <div className="ml-14 flex-grow">
                <NavMenu links={Links} />
            </div>
            <LoginInfo />
        </div>
    )
}
export default NavBar