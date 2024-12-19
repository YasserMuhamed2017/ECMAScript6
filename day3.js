// Question 1
// Point a
export class Employee {
    constructor (name = '', dept = 'general') {
        this.name = name;
        this.dept = dept;
    }
}

// Point b
export class Manager extends Employee {
    constructor (name, dept, reports = []) {
        super(name, dept);
        this.reports = reports;
    }
}

// Point c
export class WorkerBee extends Employee {
    constructor (name, dept, projects = []) {
        super(name, dept);
        this.projects = projects;
    }
}

// Point d
export class SalesPerson extends WorkerBee {
    constructor (name, quota = 100) {
        super(name, "sales");
        this.quota = quota;
    }
}

// Point e
export class Engineer extends WorkerBee {
    constructor (name, machine = "") {
        super(name, "engineering");
        this.machine = machine;
    }
}

// Question 3
fetch("https://jsonplaceholder.typicode.com/users")
.then(Response => Response.json())
.then(users => {
    console.log(users);
    users.forEach((item) => {
        posts(item.id, item.name);
    });
})

// Point a
async function posts(userid, username) {
    
    fetch(`https://jsonplaceholder.typicode.com/users/${userid}/posts`)
    .then(Response => Response.json())
    .then(user_posts => {
        console.log(username)
        console.log(user_posts);
        var x = document.createElement("ol");
        x.setAttribute("id", "myOl");
        document.body.appendChild(x);

        var y = document.createElement("li");
        var t = document.createTextNode(username + " ==> ");
        y.appendChild(t).appendData(user_posts[0].title);
        document.getElementById("myOl").appendChild(y);
    })
    
}