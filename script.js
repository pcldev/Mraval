window.addEventListener("scroll",()=>{
  var header=document.querySelector('.wrapper-main')
  header.classList.toggle("white",window.scrollY>0);
})
function menuBtn(){
  var open_btn=document.querySelector('.open-btn')
  var close_btn=document.querySelector('.close-btn')
  var nav=document.querySelector('header nav')
  var box=document.querySelector('.box')
  open_btn.addEventListener('click',()=>{
    nav.classList.toggle('active')
    box.classList.toggle('active')
    close_btn.classList.toggle('active')
    clearBox()
  })
  function clearBox(){
    box.addEventListener('click',()=>{
      box.classList.remove('active')
      nav.classList.remove('active')
      close_btn.classList.remove('active')
    })
  }
}
menuBtn()
