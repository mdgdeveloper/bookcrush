import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const NewBooks = () => {
    return (
        <div className="container mx-auto p-10 max-w-[1000px] mt-5">
            <h2 className="mb-12 text-3xl text-center bg-yellow-400 font-semibold inline-block px-3 py-2 border-2 border-black shadow-neoblack">Novedades en la base de datos</h2>

            <Carousel

                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="relative h-[250px] w-[180px] flex-shrink-0">
                            <Image src="/images/test.jpg" fill alt="Book" className="border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-contain" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="relative h-[250px] w-[180px] flex-shrink-0">
                            <Image src="/images/test.jpg" fill alt="Book" className="border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-contain" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="relative h-[250px] w-[180px] flex-shrink-0">
                            <Image src="/images/test.jpg" fill alt="Book" className="border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-contain" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="relative h-[250px] w-[180px] flex-shrink-0">
                            <Image src="/images/test.jpg" fill alt="Book" className="border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-contain" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="relative h-[250px] w-[180px] flex-shrink-0">
                            <Image src="/images/test.jpg" fill alt="Book" className="border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-contain" />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
export default NewBooks