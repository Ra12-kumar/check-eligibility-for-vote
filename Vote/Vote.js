const age=document.querySelector(".age");
const input=document.querySelector(".input");
const button=document.querySelector(".btn");
button.addEventListener("click",()=>{
    const enteredAge = parseInt(input.value);
    if(enteredAge>=18){
        age.innerHTML="You Are Eligible For Vote"
    }
    else{
        age.innerHTML="You Are Not Eligible For Vote";
    }
})

