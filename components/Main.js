import Image from "next/image"


export default function Main() {
    return (
        <div className="MainPage place-items-center">
            <div className=" mx-auto hover:rotate-180">
                <Image src="/main-img.png" width={300} height={300}/>
            </div>
            <div className="mx-auto">
            <h1 className="text-main text-5xl font-bold mx-2 sm:text-center">The Great Indian Traffic</h1>
            <h3 className="subtitle text-2xl font- md:text-center mx-2">Indian Traffic Jams are all about filling the gaps.</h3>
            </div>
           
        </div>
    )
}
