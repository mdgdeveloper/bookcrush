import Image from "next/image"

const CurrentBook = () => {
    return (
        <div className="min-h-80 bg-yellow-400 border-b-8 border-black border-t-2">
            <div className="mx-auto container p-10">
                <div className="flex justify-center">
                    <div className="w-[600px] bg-white p-5 rounded-lg shadow-lg border-2 border-black">
                        <div className="">
                            <div className="text-xl mb-5 font-medium">Leyendo actualmente</div>
                        </div>
                        <div className="flex gap-5">
                            <div className="relative h-[230px] w-[170px]">
                                <Image src="/images/test.jpg" fill alt="Book" className="border-2 border-black rounded-sm" />
                            </div>
                            <div>
                                <div className="text-3xl font-medium tracking-tight mb-2">Una memoria llamada imperio</div>
                                <div className="text-lg px-2 py-1 rounded-sm border-2 border-black tracking-tight bg-pink-700 inline-block text-white ">Arkady Martine</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CurrentBook