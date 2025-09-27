let gameSeq=[]
let userSeq=[]
let level=0
let started=false
let color=["red","blue","green","brown"]
let h3txt=document.querySelector("h3")
let score=0
document.addEventListener("keypress",function(){
    if(started==false){
        started==true
        levelUp()
    }
})
function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}
function userFlash(btn){
    btn.classList.add("grey")
    setTimeout(function(){
        btn.classList.remove("grey")
    },250)
}
function levelUp(){
    userSeq=[]
    level++
    h3txt.innerText=`level is ${level}`

    let idx=Math.floor(Math.random()*4)
    let randColor=color[idx]
    gameSeq.push(randColor)
    console.log("game seq ")
    console.log(gameSeq)
    let btn=document.querySelector(`.${randColor}`)
    gameFlash(btn)
}
function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(()=>{
                levelUp()
            },500)
        }
    }else{
        h3txt.innerHTML=`game over! <b>your score is ${level}</b> <br>press key to start the game `
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },250)
        reset()
    }
}
function btnPress(){
    let btn=this
    let userColor=btn.getAttribute("id")
    userSeq.push(userColor)
    console.log("user seq")
    console.log(userSeq)
    userFlash(btn)
    checkAns(userSeq.length-1)
}
let allbtn=document.querySelectorAll(".box")
for(btn of allbtn){
    btn.addEventListener("click",btnPress)
}
function reset(){
    started=false
    gameSeq=[]
    userSeq=[]
    level=0
    score=0
}