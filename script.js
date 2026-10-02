let number = document.querySelectorAll(".btn");
let output = document.querySelector(".first");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");
let mod = document.getElementById("mod");
let equal = document.getElementById("btnA");
let dec = document.getElementById("btn2");
let cle = document.getElementById("btn1");


// todo ===== variable store numbers and operators
let operators = ["+", "-", "*", "/", "%"];

let expression = "";

let result = "";

let para = "";

let zero = "";


const value = () => {
   para = output.innerHTML = expression || "0";
}



// todo =====
number.forEach((currElem) => {
    currElem.addEventListener('click', () => {
        expression += currElem.textContent
        // console.log(expression);
        value();
    })
})


// todo ==== operator adding function
const addOper = (operator) => {
    if(expression.length === 0){
        return
    }

    let lastChar = expression[expression.length - 1]

    if (operators.includes(lastChar)) {
        expression = expression.slice(0, -1) + operator
    } else {
        expression += operator
    }

}


const addition = () => {
    add.addEventListener('click', () => {
        addOper("+");
        value();
    })
}

const subtraction = () => {
    sub.addEventListener('click', () => {
        addOper("-");
        value();
    })
}



const multiplication = () => {
    mul.addEventListener('click', () => {
        addOper("*");
        value();
    })
}

const division = () => {
    div.addEventListener('click', () => {
        addOper("/");
        value();
    })
}

const modulus = () =>{
    mod.addEventListener('click', () => {
        addOper("%");
        value();
    })
}

addition()
subtraction()
multiplication()
division()
modulus()


const equalOperation = () => {
    result = eval(expression)
    expression = result
    value()
}

const decer = (operator) => {
   if(expression.length === 0){
        return
    }
    let lastChar = expression[expression.length - 1]

    if (operators.includes(lastChar)) {
        expression = expression.slice(0, -1)
    } else {
        expression = expression.slice(0, -1)
    }
    value()
}

const clear = () =>{
    cle.addEventListener('click', () => {
        expression = 0
        value()
        expression = ""
    })
}

dec.addEventListener('click', decer)
clear()


equal.addEventListener('click', equalOperation)