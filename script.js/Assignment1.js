const btns=document.querySelectorAll(".btn");
const bgBox=document.querySelector(".container")
btns.forEach(btn => {
  btn.addEventListener("click",()=>{
    // console.log("clicked")
    bgBox.style.background=btn.id
  })
    
});