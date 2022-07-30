const tagRandom = document.querySelector("#rander")
const btnRandom=document.querySelector(".btn")
const nameStudent=["Hoang","Hung","Tra","Quang"]


btnRandom.onclick = function (){

   const valueRandom=Math.floor(Math.random()*nameStudent.length)
   const randomName=nameStudent[valueRandom]
   tagRandom.innerText=`Invite ${randomName} `
}