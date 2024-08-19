"use client"
import { useState } from "react";
export default function Array() {
    const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9,10])

    const handleClick = () => {
        
    }
    return (
        <div className="flex flex-col gap-y-10">
            <button className="border-solid border-2 border-black">Sort</button>
            <div className="flex flex-row gap-x-3 justify-center">
                {arr.map((a) => (
                <div key={a} className="border-solid border-2 border-black p-2">{a}</div>
                ))}
            </div>
        </div>
    );
}