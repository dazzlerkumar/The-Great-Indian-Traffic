import Link from "next/link"
export default function Brief() {
    return (
        <div className="my-10 p-2">

            <div className="mx-auto max-w-screen-md">
            <p className="mx-auto text-subtitle text-3xl  font-semibold my-5">Purpose of the Website</p>
            <div className="text-para m-0">
            <p className="text-lg">The purpose of this website is to aware the new driver/rides about
                the condition of Indian roads such as how people actually ride/drive,
                how to avoid rage, how to avoid accidents. 
            </p>
            <p className="font-medium my-5">It might seems there is no need for such website but I can&apos;t deny these
                facts, 
               
            </p>
            <ul className="list-disc">
                    <li>India, ranks 1st in the number of road accident deaths across the 199 countries reported in the
World Road Statistics, 2018</li>
                    You can read this PDF by Govt. of India. 
                        <a href="https://morth.nic.in/sites/default/files/RA_Uploading.pdf" target="_blank" rel="noreferrer"> Click Here</a>
                </ul>
            </div>
            </div>
            
        </div>
    )
}
