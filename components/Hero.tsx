const Hero = () => {
    return (
        <div className="container mx-auto mt-20">
            <div className="flex justify-center">
                <div className="flex flex-col justify-center items-center w-[600px]">
                    <div className="w-full mb-2 ml-36">
                        <div className="text-center text-white rounded-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-pink-700 w-14">Beta</div>
                    </div>
                    <div className="text-5xl font-medium">Tu universo <span className="relative inline-block">
                        <span className="absolute inset-0 bg-yellow-400 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-2"></span>
                        <span className="relative z-10 px-3 py-1">literario</span>
                    </span>,</div>
                    <div className="text-5xl font-medium">en un solo lugar</div>
                    <div className="mt-3 text-xl text-center text-slate-600">Desde tus lecturas actuales hasta las citas que dejan huella, organiza y vive tus historias</div>
                </div>
            </div>
        </div>
    )
}
export default Hero