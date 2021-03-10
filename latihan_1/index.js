//---------------------- Array Exercise -------------------------------
// NOMOR 1
let people = ['Greg', 'Mary', 'Devon', 'James'];
for(let i = 0; i<people.length; i++){
    console.log(people[i]);        
}


// NOMOR 2
//let people = ['Greg', 'Mary', 'Devon', 'James'];
people.forEach(function(people){
    console.log(people);
})


// NOMOR 3 
//let people = ['Greg', 'Mary', 'Devon', 'James'];
people.shift();
console.log(people);


// NOMOR 4
//let people = ['Greg', 'Mary', 'Devon', 'James'];
people.pop();
console.log(people);


// NOMOR 5
//let people = ['Greg', 'Mary', 'Devon', 'James'];
people.unshift("Matt");
console.log(people);


// NOMOR 6
 //let people = ['Greg', 'Mary', 'Devon', 'James'];
 people.push("Edson");
 console.log(people);


// NOMOR 7
//let people = ['Greg', 'Mary', 'Devon', 'James'];
for(let i = 0; i<people.length; i++){
    console.log(people[i]);
    if(people[i]=="Mary")
    break;  
}

// NOMOR 8
//let people = ['Greg', 'Mary', 'Devon', 'James'];
let people2 = people.slice(2,4)
console.log(people2);


// NOMOR 9
 //let people = ['Greg', 'Mary', 'Devon', 'James'];
 people.splice(2,1,"Elizabeth", "Artie");
 console.log(people);

// NOMOR 10
// cara 1
//let people = ['Greg', 'Mary', 'Devon', 'James'];
let withbob = people.concat("bob");
console.log(withbob);

// // cara 2
// //let people = ['Greg', 'Mary', 'Devon', 'James'];
// let withbob = "Bob";
// people.push(withbob);
// console.log(people);


////---------------------- Object Exercise -------------------------------

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// NOMOR 1
programming.languages.push("Go");
console.log(programming.languages);


// NOMOR 2
programming["difficulty"] = 7;
console.log("difficulty:" + programming.difficulty);

// NOMOR 3
delete programming.jokes;
console.log(programming);


// NOMOR 4
programming.isFun=true;
console.log(programming);


// NOMOR 5
let newP = programming.languages.map(function(item, index){
    return index + "-" + item;
});
console.log(newP);