let ul =document.querySelector('ul');
ul.style.display ='none'

let isOpened =false;

let menuIcon =document.querySelectorAll('.menu-icon');
menuIcon[0].addEventListener('click',() => {
    
        ul.style.display ='none'
        isOpened =false
   
        document.querySelector("nav").style.left ="0";
        document.querySelector(".darker").style.display ="block"
        ul.style.display ='block'
        isOpened =true
    
})




menuIcon[1].addEventListener('click',() => {
    if(isOpened == true){

        document.querySelector("nav").style.left = "-30%"
        document.querySelector(".darker").style.display ="none"
        ul.style.display ='none'
        isOpened =false
    } 
})


let lis = document.querySelectorAll("li")
lis.forEach(li => {

    li.onclick = function(){

    lis.forEach(li =>{
lis.classList.remove("active")
    })
        li.classList.add("active")
    }
})