'use strict';
// var j=0;
// setInterval(()=>{s

//         emoj.textContent=emojidetails[j].emoji;
//         j++;
// },2000)
const emojidetails=[
    {
        description:'smiling face with sunglasses',
        emoji:'😎'
    },
    {
        description:'laughing',
        emoji:'😂'
    },
    {
        description:'smiling',
        emoji:'😊'
    },
    {
        description:'thumbs up',
        emoji:'👍'
    },
    {
        description:'heart',
        emoji:'❤️'
    },
    {
        description:'brain',
        emoji:'🧠'
    },
    {
        description:'thinking',
        emoji:'🤔'
    },
    {
        description:'confusion',
        emoji:'🥴'
    },
    {
        description:'confusion',
        emoji:'😵‍💫'
    },
    {
        emoji:"completed"
    }
]
const emoj=document.querySelector("#emoji-pic");
const submit=document.querySelector("#submit");
const namee=document.querySelector("#emoji-name");
const correct=document.querySelector("#correctness")
const next=document.querySelector("#next");
let a=0;
nn();
function nn (){
    namee.value="";
    correct.textContent="";
    namee.focus();
    emoj.textContent=emojidetails[a].emoji;
    a++;
}
namee.addEventListener("mouseclick",()=>{
    function jj(){
        setTimeout(()=>{
    correct.textContent=""
        },4000)
    }
});

submit.addEventListener("click",()=>{
    if(namee.value.toLowerCase().trim()==emojidetails[a-1].description){
        correct.textContent="correct"
    }else if(namee.value==""){
        correct.textContent="enter something"
    }
    else  {
        correct.textContent="not correct"
    }
});
next.addEventListener("click",()=>{
    if(a==emojidetails.length-1&&correct.textContent=="correct"){
        a=0;
        nn()
    }
   else  if(correct.textContent=="correct"){
nn();
}else if(correct.textContent==""||correct.textContent=="not correct"||correct.textContent=="enter something"){
    correct.textContent="CAN'T GO AHEAD"
}
})


