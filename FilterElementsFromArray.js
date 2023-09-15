let filter = (arr, fn) => {
    let i=0, result = [];
    for(let num of arr)
        if(fn(num, i++))
            result.push(num);
    return result;
};