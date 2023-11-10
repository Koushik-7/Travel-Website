let left =100;

let interval = setInterval(function(){
    
    
    document.getElementById("cursor").style.transition="1s";
    document.getElementById("cursor").style.marginLeft= -left +"%" ;
    left= left+100;
   

     if(left > 800)
     {
      
       setTimeout(function(){
         document.getElementById("cursor").style.marginLeft= "0%" ;
        document.getElementById("cursor").style.transition="0s";
        left = 100;
       },1000) 
      
     }
},2000)


document.getElementById("text").
addEventListener("mouseenter" , koushik );

// function koushik(){
// addEventListener('mouseenter' , koushik);
// }
