//answer1//
function calculate(num1, num2) {
    return num1 * num2
}
console.log(calculate(10, 20))

//answer2//
setTimeout(() => {
    console.log("1");
    setTimeout(() => {
        console.log("2");
        setTimeout(() => {
            console.log("3");
            setTimeout(() => {
                console.log("4");
                setTimeout(() => {
                    console.log("5");
                    setTimeout(() => {
                        console.log("6");
                        setTimeout(() => {
                            console.log("7");
                        }, 7000)
                    }, 6000)
                }, 5000)
            }, 4000)
        }, 3000)
    }, 2000)
}, 1000)

// answer3//
function printNumbersWithDelay() {
    let number = 1;
    function printNumberWithDelay(num) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(num);
                resolve();
            }, num * 1000);
        });
    }
    function printSequentially() {
        if (number <= 7) {
            printNumberWithDelay(number).then(() => {
                number++;
                printSequentially();
            });
        }
    }
    printSequentially();
}
printNumbersWithDelay();

// answer4//
let p = "yes";
function promiseFun(p) {
    return new Promise((res, rej) => {
        if (p === "yes") {
            res("Promise resolved...");
        } else {
            rej("Promise rejected...");
        }
    })
}
// handel the promise
promiseFun(p)
    .then((item) => { console.log(item) })
    .catch((err) => { console.log(err) });

//answer5//
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}

myFirst();
mySecond();

//answer6//
//Asynchronous function 1
function asyncFunction1(callback) {
    setTimeout(function () {
        console.log("Async Function 1");
        callback();
    }, 1000);
}
//Asynchronous function 2
function asyncFunction2(callback) {
    setTimeout(function () {
        console.log("Async Function 2");
        callback();
    }, 1000);
}
//Asynchronous function 3
function asyncFunction3(callback) {
    setTimeout(function () {
        console.log("Async Function 3");
        callback();
    }, 1000);
}
//Callback Hell example
asyncFunction1(function () {
    asyncFunction2(function () {
        asyncFunction3(function () {
            console.log("All async functions completed.");
        });
    });
});

// answer7//
function promiseChain(alpha, timeout) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(alpha);
            res("This promise is resolved!!!...")
        }, timeout);
    })
}


function visible() {
    promiseChain("A", 2000)
        .then(() => promiseChain("E", 4000))
        .then(() => promiseChain("I", 1000))
        .then(() => promiseChain("O", 2000))
        .then(() => promiseChain("U", 5000))
}


// answer8//
function promiseChain(alpha, timeout) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(alpha);
            res("This promise is resolved!!!...")
        }, timeout);
    })
}


async function visible() {
    await promiseChain("A", 2000)
    await promiseChain("E", 4000)
    await promiseChain("I", 1000)
    await promiseChain("O", 2000)
    await promiseChain("U", 5000)

}
visible();


//answer9//
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});