document.addEventListener('DOMContentLoaded', () => {});

// -----------------------------------Color Generator---------------------------------------------------------------//
    // Create the string for color palettes
const hex = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];


//Cash the DOMS
const btn = document.getElementById('btn');
let hexCode = document.getElementById('hex-number');

// Create a random string from hex [parent string] and then input it into the span node in HTML
//using textContent or innerText or innerHTML
btn.addEventListener('click',()=>{
    let hexColor = '#'
    for (let i = 0; i < 6; i ++) {
        hexColor += hex[getRandNum()];
    }
    hexCode.innerText = hexColor;
    document.body.style.backgroundColor = hexColor;
    const header = document.querySelector('h1')
    header.style.color = '#FFFFFF'; 
    
})

function getRandNum(){
    return Math.floor(Math.random()*hex.length)

}

// -----------------------------------------||Color Generator||-----------------------------------------------------//
