// made by Gaurav Bharane
// -------------------------------
let inputslider= document.getElementById("inputslider")
let slidervalue=document.getElementById("slidervalue")
let passbox=document.getElementById("passbox")
let lowercase=document.getElementById("lowercase")
let uppercase=document.getElementById("uppercase")
let numbers=document.getElementById("numbers")
let Symbols=document.getElementById("Symbols")
let genbtn=document.getElementById("genbtn")
let copybtn=document.getElementById("copybtn")

// showing input value 
slidervalue.textContent=inputslider.value
inputslider.addEventListener('input',()=>{
    slidervalue.textContent = inputslider.value;
})
// button
genbtn.addEventListener('click',()=>{
    passbox.value=generatepassword()
})

let lowerchars="abcdefghijklmnopqrstuvwxyz";
let upperchars="ABCDEFGHIJKMNOPQRSTUVWXYZ";
let allnumbers="0123456789";
let allSymbols="~!@#$%^&*";

// function to generate password
function generatepassword(){
    let genpassword="";
    let allchars="";
    
    allchars +=uppercase.checked? upperchars:"";
    allchars +=lowercase.checked ? lowerchars:"";
    allchars +=numbers.checked ? allnumbers:"";
    allchars +=Symbols.checked ? allSymbols:"";

    if(allchars=="" || allchars.length==0){
        return genpassword;
    }

    let i=1;
    while(i<=inputslider.value){
        genpassword +=allchars.charAt(Math.floor(Math.random()*allchars.length ));
            i++;
    }
    return genpassword;
}

copybtn.addEventListener('click',()=>{
    if(passbox.value!=""||passbox.value.length>=1 ){
        // main copy function
        navigator.clipboard.writeText(passbox.value);
        
        copybtn.title="Password copied";
        copybtn.innerText="copied!";
        setTimeout(()=>{
            copybtn.innerHTML="copy";
            copybtn.title="";
        },3000)

    }
})