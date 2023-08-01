
function mean(array){
    if(array.length === 0){
        return 0;
    }
    let sum = array.reduce((num1,num2) => {
        return num1+num2
    })
    return sum/array.length
}

function median(array){
    const middle = Math.floor(array.length/2)
    const nums = [...array].sort((a,b)=>a-b);
    return array.length % 2 !== 0 ? nums[middle] : ((nums[middle] + nums[middle-1])/2)
}

function modeCounter(array){
    return array.reduce((count,num) => {
        count[num] = ++count[num] | 1
        return count;
    },{})
}

function mode(array){
    let freq = modeCounter(array);
    let count = 0;
    let mode = null;

    for(let key in freq){
        if (freq[key] > count){
            count = freq[key]
            mode = key
        }
    }
    return mode;
}

function isNumber(array){
    let nums = []
    for(let i = 0; i < array.length; i++){
        let num = Number(array[i])
        if (Number.isNaN(num)){
            return new Error(
                `${array[i]} is not a number`
            )
        }
        nums.push(num)
    }
    return nums
}

module.exports = {
    mean,
    median, 
    mode,
    isNumber,
}