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


let page ="home"

let lis = document.querySelectorAll("li")
lis.forEach(li => {

    li.onclick = function(){
        console.log(li.id)
        page = li.id


       switch(page){
        case "Home":{
            document.querySelector("#root").innerHTML =
            `<h1>Bu home</h1>`
            

           
        

            break;
        }
        case "Shorts":{
            document.querySelector("#root").innerHTML =
            '<h1>Bu Shorts</>';
            break;
        }
        case "Subscriptions":{
            document.querySelector("#root").innerHTML =
            '<h1>Bu Subscriptions</>';
            break;
        }
        case "History":{
            document.querySelector("#root").innerHTML =
            '<h1>Bu History</>';
            break;
        }
        case "Playlists":{
            document.querySelector("#root").innerHTML =
            '<h1>Bu Playlists</>';
            break;
        }
   
               
        case "Watch later":{
            document.querySelector("#root").innerHTML =
            '<h1>Bu Watch later</>';
            break;
        }
        case "Liked-videos":{
            document.querySelector("#root").innerHTML =
            '<h1>Bu Liked-videos</>';
            break;
        }
        default: {
            document.querySelector("#root").innerHTML =
                '<h1>404 not found '
            
        }
       }

    

        lis.forEach(li =>{
            li.classList.remove("active")
        })


        li.classList.add("active")

        console.log(li.id)

      
    }


  
})
