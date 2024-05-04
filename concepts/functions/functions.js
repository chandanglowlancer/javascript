const greetings = function (name) {
    console.log("hello form ", name);
}

greetings("chandan");


function greetings1 (name) {
    console.log("name", name);
}

greetings1("chanda")


const myobj = {
   myfun : function (name) {
    console.log( name);
   },
   name: "chandna" ,
   age : 28,
   nameList : ["cccc111", "one", "two"]
}
myobj.nameList.push("chandnannnn")

console.log(myobj);






myobj.myfun("chandan 1212")
console.log(myobj.age);

