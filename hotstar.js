var slideNumber = 0;


function carousel() { 
    var i;
    var x = document.getElementsByClassName("banner-img");
    
    for (i = 0; i<x.length; i++) {
        x[i].style.display = "none";
    }
    slideNumber = slideNumber + 1;
    if (slideNumber > x.length){
        slideNumber = 1
    }
    x[slideNumber-1].style.display = "inline";
    
    setTimeout(carousel, 1000); 
}
carousel();



var textNumber=0;
function movieDetails(){
  var i;
  var y = document.getElementsByClassName('movie-details');
    
  for (i = 0; i<y.length; i++) {
      y[i].style.display = "none";
  }
  textNumber = textNumber + 1;
  if (textNumber > y.length){
      textNumber = 1
  }
  y[textNumber-1].style.display = "inline";
  
  setTimeout(movieDetails, 1000); 
}

movieDetails();





 
// let moviesList=document.getElementById('movies');



// let swiperRight=document.getElementById('sr');
//   swiperRight.addEventListener('click',()=>{
//     moviesList.style.marginLeft="-42%";
// });

// let swiperLeft=document.getElementById('sl');
// swiperLeft.addEventListener('click',()=>{
//     moviesList.style.marginLeft="0%";
// })



 



// // second movies list

// let moviesList2=document.getElementById('movies2');

// let swiperRight2=document.getElementById('sr2');
//   swiperRight2.addEventListener('click',()=>{
//     moviesList2.style.marginLeft="-42%";

//     console.log("hi")
// });

// let swiperLeft2=document.getElementById('sl2');
// swiperLeft2.addEventListener('click',()=>{
//     moviesList2.style.marginLeft="0%";
// })


window.onload=function()
{

    
    let fullWidth=document.getElementById('slider').offsetWidth;
    let totalCount=(fullWidth/1715)-1;

    let maxSlides=Math.floor(totalCount);
    let lastSlide=totalCount-maxSlides;

    let currentSlide=0;

    document.getElementById("swipe-left").addEventListener("click",function(){

        if(currentSlide>=1 && currentSlide!=totalCount)
        {
            currentSlide--;
             
        }
        else if(currentSlide==totalCount && lastSlide!==0)
        {
            currentSlide-=lastSlide;
        }

        document.getElementById("slider").style.marginLeft=-(currentSlide*1715)+"px";
        console.log(currentSlide,totalCount,lastSlide);

    })






    document.getElementById("swipe-right").addEventListener("click",function(){



         if(currentSlide<maxSlides)
        {
            currentSlide++;
             
        }
        else if(currentSlide==maxSlides && lastSlide!==0)
        {
            currentSlide+=lastSlide;
        }

        document.getElementById("slider").style.marginLeft=-(currentSlide*1715)+"px";
       
       
        console.log(currentSlide,totalCount,lastSlide);

    })

     
    document.getElementById("swipe-left1").addEventListener("click",function(){

        if(currentSlide>=1 && currentSlide!=totalCount)
        {
            currentSlide--;
             
        }
        else if(currentSlide==totalCount && lastSlide!==0)
        {
            currentSlide-=lastSlide;
        }

        document.getElementById("slider2").style.marginLeft=-(currentSlide*1715)+"px";
        console.log(currentSlide,totalCount,lastSlide);

    })
      
      
    document.getElementById("swipe-right1").addEventListener("click",function(){



        if(currentSlide<maxSlides)
       {
           currentSlide++;
            
       }
       else if(currentSlide==maxSlides && lastSlide!==0)
       {
           currentSlide+=lastSlide;
       }

       document.getElementById("slider2").style.marginLeft=-(currentSlide*1715)+"px";
      
      
       console.log(currentSlide,totalCount,lastSlide);

   })
      
   

      
    document.getElementById("swipe-left2").addEventListener("click",function(){

        if(currentSlide>=1 && currentSlide!=totalCount)
        {
            currentSlide--;
             
        }
        else if(currentSlide==totalCount && lastSlide!==0)
        {
            currentSlide-=lastSlide;
        }

        document.getElementById("slider3").style.marginLeft=-(currentSlide*1715)+"px";
        console.log(currentSlide,totalCount,lastSlide);

    })
      
      
    document.getElementById("swipe-right2").addEventListener("click",function(){



        if(currentSlide<maxSlides)
       {
           currentSlide++;
            
       }
       else if(currentSlide==maxSlides && lastSlide!==0)
       {
           currentSlide+=lastSlide;
       }

       document.getElementById("slider3").style.marginLeft=-(currentSlide*1715)+"px";
      
      
       console.log(currentSlide,totalCount,lastSlide);

   })
     

     
   document.getElementById("swipe-left3").addEventListener("click",function(){

    if(currentSlide>=1 && currentSlide!=totalCount)
    {
        currentSlide--;
         
    }
    else if(currentSlide==totalCount && lastSlide!==0)
    {
        currentSlide-=lastSlide;
    }

    document.getElementById("slider4").style.marginLeft=-(currentSlide*1715)+"px";
    console.log(currentSlide,totalCount,lastSlide);

})
  
  
document.getElementById("swipe-right3").addEventListener("click",function(){



    if(currentSlide<maxSlides)
   {
       currentSlide++;
        
   }
   else if(currentSlide==maxSlides && lastSlide!==0)
   {
       currentSlide+=lastSlide;
   }

   document.getElementById("slider4").style.marginLeft=-(currentSlide*1715)+"px";
  
  
   console.log(currentSlide,totalCount,lastSlide);

})
    


}