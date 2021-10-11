import Image from "next/image"


export default function Main() {
    return (
        <div className="MainPage place-items-center">
            <div className=" mx-auto">
                <Image src="/main-img.png" width={300} height={300}/>
            </div>
            <div className="mx-auto">
            <h1 className="text-main text-5xl font-bold">The Great Indian Traffic</h1>
            <h3 className="subtitle text-2xl font- text-center">Indian Traffic Jams are all about filling the gaps.</h3>
            </div>
           
        </div>
    )
}
