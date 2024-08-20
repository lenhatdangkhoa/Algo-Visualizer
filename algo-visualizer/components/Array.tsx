"use client"
import { useState } from "react";
export default function Array() {
    const [arr, setArr] = useState([10,9,8,7,6,5,4,3,2,1,23,5,42,3,10,65,44,33])
    const [color, setColor] = useState(-1)
    const [color2, setColor2] = useState(-1)
    const handleSortClick = async () => {
        let newArr = [...arr]
        for (let i = 0; i < newArr.length; i++) {
            for (let j = i + 1; j < newArr.length; j++) {
                if (newArr[i] > newArr[j]) {
                    const temp = newArr[j]
                    newArr[j] = newArr[i]
                    newArr[i] = temp
                    await new Promise((resolve) => setTimeout(resolve, 50)); // Delay of 500ms
                    setColor(i)
                    setColor2(j)
                    setArr([...newArr]); // Update state after each addition
                }
            }
        }
    }
    const handleShuffleClick = () => {
        let newArr = []
        for (let i = 0; i < 25; i++) {
            newArr.push(Math.floor(Math.random() * 100))
        }
        setArr(newArr)
        setColor(-1)
        setColor2(-1)
    }
    return (
        <div className="flex flex-col gap-y-10">
            <button className="border-solid border-2 border-black" onClick={handleSortClick}>Sort</button>
            <button className="border-solid border-2 border-black" onClick={handleShuffleClick}>Shuffle</button>
            <div className="flex flex-row gap-x-3 justify-center">
                {arr.map((a, index) => (
                <div key={index} className={`border-solid border-2 border-black p-2 ${color === index ? "bg-green-400" : color2 === index ? "bg-red-400" : ""}`}>{a}</div>
                ))}
            </div>
        </div>
    );
}