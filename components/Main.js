import Image from "next/image"
import Fade from "react-reveal/Fade"
import Bounce from "react-reveal/Bounce"

export default function Main() {
    return (
        <div className="MainPage place-items-center">
            <Bounce top delay={1000} duration={1500}>
            <div className=" mx-auto">
                <Image src="/main-img.png" width={300} height={300} quality={75}/>
            </div>
            </Bounce>
            <div className="mx-auto">
                <Fade right cascade duration={2000}>
            <h1 className="text-main text-5xl font-bold mx-2 sm:text-center font-link">THE GREAT INDIAN TRAFFIC</h1>
                </Fade>
            <h3 className="subtitle text-2xl font- md:text-center mx-2">Indian Traffic Jams are all about filling the gaps.</h3>
            </div>
           
        </div>
    )
}
