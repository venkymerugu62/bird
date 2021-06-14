function mostFrequent(arr, n)
{
    arr.sort();
    let max_count = 1, res = arr[0];
    let curr_count = 1;
       
    for (let i = 1; i < n; i++)
    {
        if (arr[i] == arr[i - 1])
            curr_count++;
        else
        {
            if (curr_count > max_count)
            {
                max_count = curr_count;
                res = arr[i - 1];
            }
            curr_count = 1;
        }
    }
    if (curr_count > max_count)
    {
        max_count = curr_count;
        res = arr[n - 1];
    }
    return res;
}

    let arr = [1, 5, 2, 1, 3, 2, 1];
    let n = arr.length;
    const leastFrequent = (arr) => {
        const count = arr.reduce((a, b) => {
            if (!a[b]) {
            a[b] = 1;
            } else {
            a[b]++;
            }
    
            return a;
        }, {});
    
        
        let minCount = Number.MAX_SAFE_INTEGER;
        let numberWithLeastCount = 0;
        for (const [key, value] of Object.entries(count)) {
            if (value < minCount) {
            minCount = value;
            numberWithLeastCount = key;
            }
        }
    
        return numberWithLeastCount;
    }
    finalArr=[];

    finalArr.push(mostFrequent(arr,n));
    finalArr.push(Number(leastFrequent(arr)));
    console.log(finalArr);