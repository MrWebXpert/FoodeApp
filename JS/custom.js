

// counter section js
document.addEventListener("DOMContentLoaded",()=>{
     function counter(id,start,end,duration){
          let counterobj = document.getElementById(id),
          current = start,
          range = end - start,
          increment = end > start ? 1 :  -1,
          step = Math.abs(Math.floor(duration / range)),
          timer = setInterval(()=>{
               current += increment;
               counterobj.textContent = current;
               if(current == end){
                    clearInterval(timer);
               };
          },step)
     }
     counter("counter1", 0 , 2500 , 3000);
     counter("counter2" , 20 , 3000 , 2500);
     counter("counter3", 4 , 4000 ,  2000);
     counter("counter4", 0 ,50 , 2500);
})