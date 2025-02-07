import Image from "next/image"
import { VscPercentage } from "react-icons/vsc";
import { IoBookOutline } from "react-icons/io5";
import { MdCalendarToday } from "react-icons/md";
import { Button } from "./ui/button";

const CurrentBook = () => {
    const TESTTags = [
        "Ciencia Ficción",
        "Space Opera",
        "Política",
        "Imperio",
        "Espacio",
        "Intriga",
        "Alienígenas",
    ]
    return (
        <div className="min-h-80 bg-yellow-400 border-b-8 border-black border-t-2">
            <div className="mx-auto container p-10">
                <div className="flex justify-center">
                    <div className="w-[620px] bg-background2 px-5 py-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2  border-black">
                        <div className="">
                        </div>
                        <div className="flex gap-5 pb-3">
                            <div className="relative h-[250px] w-[180px] flex-shrink-0">
                                <Image src="/images/test.jpg" fill alt="Book" className="border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-cover" />
                            </div>
                            <div className="">
                                <div>Leyendo...</div>
                                <div className="text-2xl font-medium tracking-tight mb-2">Una memoria llamada imperio</div>
                                <div className="flex justify-between">
                                    <div className="px-2 py-1 rounded-sm border-2 border-black tracking-tight bg-pink-700 inline-block text-white shadow-neoblack ">Arkady Martine</div>
                                    <Button className="bg-blue-700 border-black border-2 shadow-neoblack hover:shadow-neoblack-hover  transition-all">Editar</Button>
                                </div>
                                <div className="flex gap-2 flex-wrap mt-4">
                                    {TESTTags.map((tag, index) => (
                                        <div key={index} className="text-sm py-1 px-2 rounded-sm border border-slate-900 tracking-tight bg-lime-500 text-black">{tag}</div>
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-3">
                                    <div className="py-1 px-2 rounded-sm border border-slate-900 bg-white shadow-neoblack flex gap-2 items-center">
                                        <div className="text-xl bg-blue-700 text-white border-black rounded-full p-1 border "><VscPercentage /></div>
                                        <div className="text-xl tracking-tight">10%</div>
                                    </div>
                                    <div className="py-1 px-2 rounded-sm border border-slate-900 bg-white shadow-neoblack flex gap-2 items-center">
                                        <div className="text-xl bg-orange-700 text-white rounded-full p-1 border border-black "><IoBookOutline /></div>
                                        <div className="text-xl tracking-tight">300</div>
                                    </div>
                                    <div className="py-1 px-2 rounded-sm border border-slate-900 bg-white shadow-neoblack flex gap-2 items-center">
                                        <div className="text-lg bg-purple-700 text-white rounded-full p-1 border border-black"><MdCalendarToday /></div>
                                        <div className="text-xl tracking-tight">Ene</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center w-full justify-center">

                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
export default CurrentBook