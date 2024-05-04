const myobj = {
    name: "chandan",
    "full name": "chandan n",
    age: 21,
    isLoggedIn : true,
    LogedInDays: ["monday", "tuesday", "wednesday"],

}
// console.log(myobj.LogedInDays)
console.log(myobj["full name"]) // it the key in the object is given in string formate ("full name") then we need to access the value in [] formate.


myobj.age = 31;

// console.log(myobj)

myobj.greetings = function () {
    console.log(`hello js user ${this.name}` )
}

// console.log(myobj.greetings())

const TinderUser = new Object(); //single tone object

TinderUser.id = "123abc"

TinderUser.name = "chandan n"

console.log(TinderUser);

const regularUser = {
    email : "chandan@mail.com",
    fullname : {
        userFullName : "chandu",
        nickName : "chandu"

    }
}

console.log(regularUser.fullname.nickName)


const obj1 = {1: "a", 2:"b"}
const obj2 = {1: "a", 4:"b"}

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const user = [
    {
        user: "chandan n",
        email: "mail@CSSMediaRule.com"
    },{
        user: "shilpa",
        email: "mail@CSSMediaRule.com"
    },{
        user: " user 3",
        email: "mail@CSSMediaRule.com"
    }
]

console.log(user[0].user)

console.log(Object.keys(TinderUser))
console.log(Object.values(TinderUser))


const courses = {
    name: "javascript",
    price: 999
}

const {name,price: cost} = courses

console.log(cost);















