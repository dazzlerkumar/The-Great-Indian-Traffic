import post from "../content/data.json";

export default function Card() {
    const number = 10;
    return (
        <div className="mx-auto justify-center">
            {post.map((x, i) => (
                <div className="card grid grid-row-3" key={i}>
                    <div className="">Post Number #{i+1}</div>
                    <div>{x}</div>
                    <div></div>
                </div>
            ))}
        </div>
    );
}
