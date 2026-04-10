let arr1 = [0,3,5,5,]
let arr2 = [1,2,4,6,7,8]

for(let a1=0;a1<arr1.length;a1++ ){

    for(let a2=0;a2<arr2.length;a2++){

        if(arr1[a1]===arr2[a2]){

            console.log("The common number is " + arr1[a1])
        }
       else
            console.log("There is no common number")
        break

    }
}