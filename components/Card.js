//LIBS
import Image from "next/image"
import Zoom from 'react-reveal/Zoom';


import post from "../content/data.json";
import twitter from "/public/twitter.png"
import whatsapp from "/public/whatsapp.png"
import fb from "/public/facebook.png"


export default function Card() {
    return (
        <div className="grid md:container mx-auto justify-center">
            <Zoom bottom duration={2000}>
            {post.map((x, i) => (
                <div
                    className="grid grid-row-3 bg-safed max-w-4xl my-4 mx-2 rounded-md shadow-2xl p-5 divide-y-2 divide-hararang hover:border-subtitle"
                    key={i}
                >
                    <div className="text-laalrang font-bold py-2">
                        Post #{i + 1}
                    </div>
                    <div className=" text-para2 py-4 px-2 ">{x}</div>
                    <div className="py-2">
                        <a className="mx-1 " href="https://twitter.com/intent/tweet?text=Check+out+this+cool+website&url=https%3A%2F%2Ftgit.vercel.app%2F" target="_blank"  rel="noopener noreferrer">
                        <Image src={twitter} alt="twitter" width={32} height={32}/>
                        </a>
                        <a className="mx-1" href="whatsapp://send?text=Check+out+this+cool+website+https%3A%2F%2Ftgit.vercel.app" target="_blank"  rel="noopener noreferrer">
                        <Image src={whatsapp} alt="WhatsApp" width={32} height={32}/>
                        </a>
                        <a className="mx-1" href="https://www.facebook.com/dialog/feed?app_id=935877643951242&display=popup&link=https%3A%2F%2Ftgit.vercel.app%2F" target="_blank"  rel="noopener noreferrer">
                        <Image src={fb} alt="Facebook" width={32} height={32}/>
                        </a>
                    </div>
                </div>
            ))}
            </Zoom>
        </div>
    );
}
