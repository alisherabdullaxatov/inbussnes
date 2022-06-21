$(function(){
    $(".bars").click(function(){
        $(".mav-bar").toggleClass("active")
    });
})

let labell = document.querySelectorAll(".gallery-label-in");

labell.forEach((label, index)=>{
    label.addEventListener('click' , ()=>{
        labell.forEach((label) =>{
            label.classList.remove('active')
        })
        labell[index].classList.add('active')
    })
})
let inbusinness = document.querySelectorAll(".inbusinness-btn");

inbusinness.forEach((inbusinnes, index)=>{
    inbusinnes.addEventListener('click' , ()=>{
        inbusinness.forEach((inbusinnes) =>{
            inbusinnes.classList.remove('active')
        })
        inbusinness[index].classList.add('active')
    })
})
let indeximg = 1;

alisher123(a)
function alisher123(a){
    let slider = document.querySelectorAll(".frame");
    let line = document.querySelectorAll(".frame-btn")
    if(a > slider.length){
        indeximg=1;
    }
     if (a < 1){
        indeximg = slider.length;
    }
    for(let i = 0; i < slider.length; i++){
        // slider[i].style = "width: 100px;  height: 500px;"
        slider[i].classList.remove("active");
        slider[indeximg-1].classList.add("active");
}
for(let i = 0; i < line.length; i++){
    // slider[i].style = "width: 100px;  height: 500px;"
    line[i].classList.remove("active");
    line[indeximg-1].classList.add("active");
}    
}


function goNext(a){
    alisher123(indeximg = indeximg+a)
}

function goChiziq(a){
    alisher123(indeximg =a)
}



