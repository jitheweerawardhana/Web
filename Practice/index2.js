/*function elementEqual() {
    const ele1 = document.getElementById('element1').value.toUpperCase();
    const ele2 = document.getElementById('element2').value.toUpperCase();

    if (ele1 == ele2) {
        document.getElementById('result').innerText = "Equals";
    } 
    else {
        document.getElementById('result').innerText = "Not Equals";
    }
}*/

// function total() {
//     const n1 = document.getElementById('num1').value;

//     for(var i=0;i<10;i++){
//         const total = total + n1;
//         document.getElementById('result').innerText = total;
//     }
// }

// function total() {
//     let n1 = document.getElementById('num1').value;
//     let sum = 0;

//         for (let i of n1) {
//             sum += parseInt(i); 
//         }
//         document.getElementById('total').innerText = sum;
    
// }

function elementEqual() {
    const ele1 = document.getElementById('name').value.toLowerCase();

    // if (ele1=="intern") {
    //     document.getElementById('result').innerText = "Intern Software Engineere";
    // } 
    // else if(ele1=="ase"){
    //     document.getElementById('result').innerText = "Associate Software Engineere";
    // }
    // else if(ele1=="se"){
    //     document.getElementById('result').innerText = "Software Engineere";
    // }
    // else if(ele1=="sse"){
    //     document.getElementById('result').innerText = "Senior Software Engineere";
    // }
    // else if(ele1=="atl"){
    //     document.getElementById('result').innerText = "Assistant Tech Lead";
    // }
    // else if(ele1=="tl"){
    //     document.getElementById('result').innerText = "Tech Lead";
    // }
    // else{
    //     document.getElementById('result').innerText = "Error Key Word";
    // }
    let name;

    switch (ele1) {
        case "intern":
            name = "Intern Software Engineere";
            break;
    
        case "ase":
            name = "Associate Software Engineere";
            break;
        case "se":
            name = "Software Engineere";
            break;
        case "sse":
            name = "Senior Software Engineere";
            break;
        case "atl":
            name = "Assistant Tech Lead";
            break;
        case "tl":
            name = "Tech Lead";
            break;
        default:
            name = "Error Key Word";
            break;
    }

    document.getElementById('result').innerText = name;
}

/*1 Input krn eke first letter ek capital wena ona */ 