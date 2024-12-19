// Question 1
let arr = ["Yasser", "Mohamed", "Mubark"];
let set = new Set(arr);
console.log(set);
set.add("Yasser");
console.log(set);
for (let value of [...set]) {
    console.log(value);
}

// Question 2
let students = new Map();
let obj = { Grades:[
    {Coursename: "JavaScript", Grade: "Excellent"},
    {Coursename: "Jquery", Grade: "Good"},
    {Coursename: "CSS", Grade: "V.Good"}]
};

students.set("Yasser", obj);
students.set("Mohamed", obj);
console.log(students);
students.forEach(function (value, key) {
    console.log(key);
    for (let x in value.Grades) {
        console.log(value.Grades[x].Coursename, value.Grades[x].Grade);
    }
});

// Question 3
let array_arrow = [1, 5, 3, 4, 2, 4, 6, 8, 5];
let newArr = array_arrow.filter(function(i) {
    return i % 2 == 1;
});
console.log(newArr);

array_arrow.forEach(function(i) {
    if (i % 2 == 0) {
        console.log(i);
    }
});

let first_number = array_arrow.find(function(x) {
    return x > 5;
});
console.log("First Number:" + first_number);

let new_array = array_arrow.map(function(value) {
    return value * 2;
})
console.log(new_array);

// Question 4
let generator_array = ['t1','t2','t3','t4','t5','t6','t7','t8','t9','t10'];
let gen = func();
function *func() {
    for (let i = 0; i < 10; i++) {
        yield generator_array[i];
    }
}
function fun () {
    console.log(gen.next());
}
let change = setInterval(function() {
    fun();
}, 3000);
console.log(change);

document.querySelector("button").addEventListener("click", function() {
    for (let value of generator_array) {
        console.log(value);
    }
});

document.querySelector(".display").addEventListener("click", function() {
    fun();
});

// Question 5
(function() {
    alert("Sum ==> " + (a + b));
})(a = 5, b = 6);

// Question 6
let text = "Yasser";
function reverse(str) {
    console.log(Array.from(str).reverse());
}

reverse(text);

// Question 7
function courseInfo ({courseName = 'ES6', courseDuration = '3 days', courseOwner = 'JavaScript', ...obj}) {
    console.log(courseName, courseDuration, courseOwner, obj);
}

courseInfo();

// Question 8
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];


fruits.every(function(value) {
    return typeof value;
})

fruits.some(function(value) {
    return value.startsWith('a');
})

let filtered_array = fruits.filter(function(x) {
    if (x.startsWith('b') || x.startsWith('s')) {
        return x;
    }
});

console.log(filtered_array);

filtered_array.forEach(function(item) {
    console.log(item);
});