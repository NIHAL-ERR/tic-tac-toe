let one = document.getElementById("one");
let result = document.getElementById("result")
let c = 0;
let parent=document.getElementsByClassName("parent")
one.addEventListener("input", function () {
    //    console.log("u inputed")
    let inputVal = document.getElementById("one").value;
    if (inputVal == 'x' || inputVal == 'o') {
        result.innerHTML = `<p>Another player's turn</p>`
        c++;
        check(inputVal);
    }
    else {
        result.innerHTML = `<p>Value must be x or o</p>`
        alert("check ur input")
    }
})
two.addEventListener("input", function () {
    //    console.log("u inputed")
    let inputVal = document.getElementById("two").value;
    if (inputVal == 'x' || inputVal == 'o') {
        result.innerHTML = `<p>Another player's turn</p>`
        c++;
        check(inputVal);
    }
    else {
        result.innerHTML = `<p>Value must be x or o</p>`
        alert("check ur input")
    }
})
three.addEventListener("input", function () {
    //    console.log("u inputed")
    let inputVal = document.getElementById("three").value;
    if (inputVal == 'x' || inputVal == 'o') {
        result.innerHTML = `<p>Another player's turn</p>`
        c++;
        check(inputVal);
    }
    else {
        result.innerHTML = `<p>Value must be x or o</p>`
        alert("check ur input")
    }
})
four.addEventListener("input", function () {
    //    console.log("u inputed")
    let inputVal = document.getElementById("four").value;
    if (inputVal == 'x' || inputVal == 'o') {
        result.innerHTML = `<p>Another player's turn</p>`
        c++;
        check(inputVal);
    }
    else {
        result.innerHTML = `<p>Value must be x or o</p>`
        alert("check ur values")
    }
})
five.addEventListener("input", function () {
    //    console.log("u inputed")
    let inputVal = document.getElementById("five").value;
    if (inputVal == 'x' || inputVal == 'o') {
        result.innerHTML = `<p>Another player's turn</p>`
        c++;
        check(inputVal);
    }
    else {
        result.innerHTML = `<p>Value must be x or o</p>`
        alert("check ur values");
    }
})
six.addEventListener("input", function () {
    //    console.log("u inputed")
    let inputVal = document.getElementById("six").value;
    if (inputVal == 'x' || inputVal == 'o') {
        result.innerHTML = `<p>Another player's turn</p>`
        c++;
        check(inputVal);
    }
    else {
        result.innerHTML = `<p>Value must be x or o</p>`
        alert("check ur values");
    }
})
seven.addEventListener("input", function () {
    //    console.log("u inputed")
    let inputVal = document.getElementById("seven").value;
    if (inputVal == 'x' || inputVal == 'o') {
        result.innerHTML = `<p>Another player's turn</p>`
        c++;
        check(inputVal);
    }
    else {
        result.innerHTML = `<p>Value must be x or o</p>`
        alert("check ur values");
    }
})
eight.addEventListener("input", function () {
    //    console.log("u inputed")
    let inputVal = document.getElementById("eight").value;
    if (inputVal == 'x' || inputVal == 'o') {
        result.innerHTML = `<p>Another player's turn</p>`
        c++;
        check(inputVal);
    }
    else {
        result.innerHTML = `<p>Value must be x or o</p>`
        alert("check ur values");
    }
})
nine.addEventListener("input", function () {
    //    console.log("u inputed")
    let inputVal = document.getElementById("nine").value;
    if (inputVal == 'x' || inputVal == 'o') {
        result.innerHTML = `<p>Another player's turn</p>`
        c++;
        check(inputVal);
    }
    else {
        result.innerHTML = `<p>Value must be x or o</p>`
        alert("check ur values");
    }
})
const check = (str) => {
  
    if (one.value && two.value && three.value) {
        if (one.value === two.value && one.value === three.value)
           { result.innerHTML = `<p>${str}wins</p>`
            setTimeout(() => {
                parent[0].innerHTML = `<p style="font-size:3rem">press f5 to restart</p>` 
            }, 1000);}
    }

    if (four.value && five.value && six.value) {
        if (four.value === five.value && four.value === six.value)
           { result.innerHTML = `<p>${str}wins</p>`
            setTimeout(() => {
                parent[0].innerHTML = `<p style="font-size:3rem">press f5 to restart</p>` 
            }, 1000);}
    }
    if (seven.value && eight.value && nine.value) {
        if (seven.value === eight.value && seven.value === nine.value)
           { result.innerHTML = `<p>${str}wins</p>`
            setTimeout(() => {
                parent[0].innerHTML = `<p style="font-size:3rem">press f5 to restart</p>` 
            }, 1000);}
    }
    if (one.value && four.value && seven.value) {
        if (one.value === four.value && one.value === seven.value)
            {result.innerHTML = `<p>${str}wins</p>`
            setTimeout(() => {
                parent[0].innerHTML = `<p style="font-size:3rem">press f5 to restart</p>` 
            }, 1000);}
    }
    if (two.value && five.value && eight.value) {
        if (two.value===five.value && two.value===eight.value)
       { result.innerHTML = `<p>${str}wins</p>`
        setTimeout(() => {
            parent[0].innerHTML = `<p style="font-size:3rem">press f5 to restart</p>` 
        }, 1000);}
    }
    if(three.value && six.value && nine.value){
        if(three.value===six.value && six.value===nine.value)
        {result.innerHTML = `<p>${str}wins</p>`
        setTimeout(() => {
            parent[0].innerHTML = `<p style="font-size:3rem">press f5 to restart</p>` 
        }, 1000);}
    }
    if(one.value && five.value && nine.value){
        if(one.value===five.value && five.value===nine.value)
        {result.innerHTML = `<p>${str}wins</p>`
        setTimeout(() => {
            parent[0].innerHTML = `<p style="font-size:3rem">press f5 to restart</p>` 
        }, 1000);}
    }
    if(three.value && five.value && seven.value){
        if(three.value===five.value && five.value===seven.value)
        {result.innerHTML = `<p>${str}wins</p>`
        setTimeout(() => {
            parent[0].innerHTML = `<p style="font-size:3rem">press f5 to restart</p>` 
        }, 1000);}
    }
}


// if (one.value == two.value == three.value || four.value == five.value == six.value || seven.value == eight.value == nine.value || one.value == four.value == seven.value || two.value == five.value == seven.value || three.value == six.value == nine.value||one.value==five.value==nine.value||three.value==five.value==seven.value)