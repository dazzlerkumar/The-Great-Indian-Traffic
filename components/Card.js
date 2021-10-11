//LIBS
import Image from "next/image"

import post from "../content/data.json";
import twitter from "/public/twitter.png"

export default function Card() {
    return (
        <div className="grid md:container mx-auto justify-center">
            {post.map((x, i) => (
                <div
                    className="grid grid-row-3 bg-safed max-w-4xl my-4 mx-2 rounded-md shadow-2xl p-5 divide-y-2 divide-hararang"
                    key={i}
                >
                    <div className="text-laalrang font-bold py-2">
                        Post #{i + 1}
                    </div>
                    <div className=" text-para2 py-4 px-2 ">{x}</div>
                    <div className=" py-2">
                        <a href="https://twitter.com/intent/tweet?text=Check+out+this+cool+website&url=https%3A%2F%2Ftgit.vercel.app%2F" target="_blank"  rel="noopener noreferrer">
                        <Image src={twitter} alt="twitter" width={32} height={32}/>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
