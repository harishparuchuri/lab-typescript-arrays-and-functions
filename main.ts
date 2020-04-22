import { StringManipulationService } from "./app-service";
export class ArrayManipulations implements StringManipulationService{

    constructor() { }

    public arrayFindMultiples(myArray: any): Array<Number>{
        let arr=[];
        let j=0;
        for(let i=0;i<myArray.length;i++)
        {
            if(myArray[i]%5==0 || myArray[i]%10==0)
            {
                arr[j++]=myArray[i];
            }
        }
        return arr;
    }
    public arraySeparate(myArray: any): Array<string>{
        let arr=[],j=0;
        for(var i=0;i<myArray.length;i++)
        {
            if(typeof myArray[i]=='string')
            {
                arr[j++]=myArray[i];
            }
        }
        return arr;

    }

    public arraySplit(str: string): Array<number> {
        const arr = str.split(",");
        const prime = [];
        let k = 0;
        for (var i = 0; i < arr.length; i++) {
            let y = +arr[i];
            for (var j = 2; j < y; j++) {
                if (y % j === 0) continue;
                else {
                    prime[k] = y;
                    k++;
                }
            }
        }
        return prime;
    }

    public arraySort(myArray: any): Array<string> {
        myArray.sort();
        return myArray;
    }

    public arrayReplace(myArray: any): Array<number> {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 3 === 0)
            {
                myArray[i] = 5;
            } 
        }
        return myArray;
    }
}

let myArray: number[] = [25,87,45,14,36,45,14,28,49];
let array = new ArrayManipulations();

console.log("Array multiples"+array.arrayFindMultiples(myArray));
console.log("Array separate"+array.arraySeparate(myArray));
console.log("Array Sort"+array.arraySort(myArray));
console.log("Array replace"+array.arrayReplace(myArray));