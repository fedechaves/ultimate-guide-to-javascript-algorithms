/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

//combining arrays

function mergeArrays(...arrays) {
    let jointArray = []
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });
    
    return [...new Set([...jointArray])]

    //another way to return array w/o duplicates
    //Array.from(new Set([...jointArray]))

    //with fileter method
    // const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index)
    // return uniqueArray

    //reduce methods
    // const uniqueArray = jointArray.reduce((newArray, item) =>{
    //     if (newArray.includes(item)){
    //         return newArray
    //     } else {
    //         return [...newArray, item]
    //     }
    // }, [])
    // return uniqueArray
}

// function mergeArrays(...arrays) {

//     let jointArray = []
    
//     arrays.forEach(array => {
//         jointArray = [...jointArray, ...array]
//     });

//     return [...new Set([...jointArray])]

    
// }


module.exports = mergeArrays