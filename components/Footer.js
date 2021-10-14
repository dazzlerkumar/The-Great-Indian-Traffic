
import Image from "next/image"
import github from "/public/github.png"
export default function Footer() {
    return (
        <div className="grid py-10 cool-gradient max-w-full place-items-center mt-20">
            <div className="mx-auto">
                <p className="text-4xl font-bold text-center text-neela font-link">Thank You!</p>
                <p className="text-2xl font-semilbold text-center text-neela">Do share if you enjoyed reading!</p>
            </div>
            <a className="mx-1 mt-3" href="https://github.com/dazzlerkumar/The-Great-Indian-Traffic" target="_blank" rel="noopener noreferrer">
                <Image src={github} alt="Github" width={48} height={48} />
            </a>
        </div>
    )
}