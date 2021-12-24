let h1=document.getElementById("head");
let btn=document.querySelectorAll(".btn");


btn.forEach(function(item){
    item.addEventListener("click",function(zain){
        let current=zain.currentTarget;
        console.log(current);
        console.log(zain);
    })
})





// console.log(btn[0]);
// console.log(btn[1]);
// console.log(btn[2]);
// console.log(btn[3]);

