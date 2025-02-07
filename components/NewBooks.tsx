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
            <div className="flex flex-col mb-5">
                <div className="-mb-2 z-10 w-fit ml-4 text-sm uppercase bg-pink-400 px-2 py-1 border-2 border-black shadow-neoblack font-semibold rounded">
                    New
                </div>
                <h2 className="text-3xl bg-yellow-400 font-semibold inline-block px-3 py-2 border-2 border-black shadow-neoblack">
                    Novedades en la biblioteca
                </h2>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="relative h-[250px] w-[180px] flex-shrink-0">
                            <Image src="/images/test.jpg" fill alt="Book" className="border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-cover" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="relative h-[250px] w-[180px] flex-shrink-0">
                            <Image src="/images/test.jpg" fill alt="Book" className="border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-cover" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="relative h-[250px] w-[180px] flex-shrink-0">
                            <Image src="/images/test.jpg" fill alt="Book" className="border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-cover" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="relative h-[250px] w-[180px] flex-shrink-0">
                            <Image src="/images/test.jpg" fill alt="Book" className="border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-cover" />
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                        <div className="relative h-[250px] w-[180px] flex-shrink-0">
                            <Image src="/images/test.jpg" fill alt="Book" className="border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] object-cover" />
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