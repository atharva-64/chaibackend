require('dotenv').config()
const rabbit= require('express')
const app =rabbit()
// const port=3333;

app.get('', (req,res)=>{
  res.send('hi mate this iis rabit');
  // console.log('cheers');
  
  // console.log('reached')
  // ('u are in home page');
})

app.get('/twitter',(req,res)=>{
  res.send("kausik tiwtter paudel");
})

app.get('/facebook',(req,res)=>{
  res.send("<h1> welcome to facebook</h1>")

})

app.get('/veryne',(req,res)=>{
  res.send("<h4> this is biggr </h4>")
})
app.listen(process.env.PORT,()=>{
  console.log(`u are in  port`)
})

