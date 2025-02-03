import Image from "next/image";
import LogoSrc from "@/public/logo.svg";

const Logo = () => {
    return (
        <div className="flex items-center ">
            <div className="text-xl">book<span className="font-bold text-pink-700">Crush</span></div>
            <Image src={LogoSrc} alt="BookCrush Logo" width={20} height={20} />
        </div>
    )
}
export default Logo