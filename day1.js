// Question 1
let obj = {fname: "Yasser", lname: "Mohamed", age: 29};
for (let key in obj) {
    console.log(key)
}

// Question 2
let arr = [1, 2, 3, 4, 5, 6];
for (const value of arr) {
    console.log(value);
}

// Question 3
let arr2 = [1, 2, 3, 4, 5, 6];
for (let index in arr2) {
    console.log(index);
}

for (let value of arr2) {
    console.log(value);
}

// Question 4
let arr3 = [...arr, ...arr2];
console.log(arr3);

// Question 5
let Std_name = "Yasser";
let fac_name = "Faculty of Engineering";
let Uni_name = "Benha University";
let grad = "Good";
let student_data = `${Std_name} is a student in faculty of ${fac_name} in university ${Uni_name}
And his final grad is ${grad}`;
console.log(student_data);

// Question 6
let greeting = "hello";
console.log(greeting.includes('e'));

// Question 7
let new_obj = {fname: null, lname: null};
console.log(new_obj.fname);

// Question 8
let nested_properties = {fname: null, lname: null};
console.log(nested_properties.address?.location);

// Question 9
let original_obj = {fname: 'Yasser', lname: 'Mohamed', age: 29};
let cloned_obj = original_obj;
console.log(cloned_obj);
cloned_obj.fname = 'Salem';
cloned_obj.lname = 'Ahmed';
cloned_obj.age = 25;
console.log(cloned_obj);

// Question 10
let array_des = [1, 2, 3, 4];
let [a, b, c, d] = array_des;
console.log(d);

const metadata = {
    title: 'Scratchpad',
    translations: [
    {
    locale: 'de',
    localization_tags: ['de-gen', 'de-or'],
    last_edit: '2014-04-14T08:43:37',
    url: '/de/docs/Tools/Scratchpad',
    titles: 'JavaScript-Umgebung'
    }
    ],
};

let {title, translations: [{localization_tags: [x, y]}]} = metadata;
console.log(title);
console.log(x, y);


// Question 11
const names = {fname: 'Yasser', lname: 'Salem'};
const list = Object.entries(names);

for (let [key, value] of list) {
    // list[key].toUpperCase();
    console.log(key.toUpperCase(), value);
}

// Question 12
let object_symbol = {fname: 'Yasser', [Symbol()]: "private"};
for (let key in object_symbol) {
    console.log(object_symbol[key]);
}