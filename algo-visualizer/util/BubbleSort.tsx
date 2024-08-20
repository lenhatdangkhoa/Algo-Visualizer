import React from "react";

export default async function BubbleSort(
    arr : number[], 
    setColor : React.Dispatch<React.SetStateAction<number>>,
    setColor2 : React.Dispatch<React.SetStateAction<number>>,
    setArr : React.Dispatch<React.SetStateAction<number[]>>
    ) {
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