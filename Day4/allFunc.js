//function declaration
function userProfile(name){

    console.log("Hello " + name + "!")

}
userProfile("Dinesh")

//Arrow Function
const double = (numb) => {

    return numb = numb * 2

}
console.log(double(5)) 

//Anonymous function
setTimeout(function(){

    console.log("This message is delayed by 2 seconds ")
}, 2000)

//Callback function

function getUserData(callback){

    setTimeout(function(){

        const user = {
            name: "Dinesh",
            age: 85
        }
        callback(user)
    }, 3000)
}
    //calling function
    getUserData(function(user) {

        console.log("Name:",user.name)
        console.log("Age:",user.age)
    })

