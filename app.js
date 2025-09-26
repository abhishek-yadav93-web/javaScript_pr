const express=require("express")
const app=express()
let port=8080
let path=require("path")
app.use(express.urlencoded({extended:true}))// that is used for when data come express read clearly
app.set("view engine","ejs")// that is used for ejs package 
app.use(express.static(path.join(__dirname,"public")))// that is used for store styling html
app.listen(port)
let data=[{
    userName:"abhishek",
    userEmail:"ay930529@gmail.com",
    number:"930529",
    password:"12345"
}]
app.get("/simonGame",(req,res)=>{
    res.render("login.ejs")
})
app.post("/simonGame",(req,res)=>{
    let {userName,password}=req.body
    //console.log(req.body)
    let con=data.find((el)=>(el.userName==userName || el.userEmail==userName || el.number==userName) && el.password==password)
    if(con){
        res.render("simonGamepage.ejs")
    }else{
        let txt="you entered wrong password "
        res.redirect("/simonGame")
    }
})
// that is create new user id
app.get("/simonGame/newDetails",(req,res)=>{
    res.render("newDetails.ejs")
})
app.post("/simonGame/submit",(req,res)=>{
    //console.log(req.body)
    let{userName,userEmail,number,password}=req.body
    data.push({userName,userEmail,number,password})
    console.log(data)
    res.redirect("/simonGame")
})

app.get("/simonGame/forgetPassword",(req,res)=>{
    res.render("otp.ejs")
})
app.post("/simonGame/resetPassword",(req,res)=>{
    //console.log(req.body)
    let{userName,number}=req.body
    let con=data.find((el)=>(el.userName==userName || el.userEmail==userName || el.number==userName) && el.number==number)
    // let password=con.password
    // console.log(password)
    if(con){
        res.render("resetPass.ejs",{userName})
    }else{
        res.render("errorPage.ejs")
    }
})
//console.log(data)
