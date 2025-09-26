let digit1=Math.floor(Math.random()*9)+1
let digit2=Math.floor(Math.random()*9)
let digit3=Math.floor(Math.random()*9)
let digit4=Math.floor(Math.random()*9)
let randomNumber=`${digit1}${digit2}${digit3}${digit4}`
alert(` you otp is ${randomNumber}`)
let button=document.getElementById("otp")
let txt=document.getElementById("otpValue")
button.addEventListener("click",()=>{
    let p=document.querySelector("p")
    if(txt.value==randomNumber){
        p.innerText=`your otp matched sucesfully`
        
    }else{
        p.innerText=`you entered  wrong otp `
        p.style.color="red"
    }
})