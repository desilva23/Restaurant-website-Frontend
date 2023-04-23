const searchicon1 = document.getElementById("searchicon1");
const srchicon1 = document.getElementById("srchicon1");
const search1= document.getElementById("searchInput1");


searchicon1.addEventListener('click',function(){
    search1.style.display="flex";
    searchicon1.style.display="none";
})



const searchicon2 = document.getElementById("searchicon2");
const srchicon2 = document.getElementById("srchicon2");
const search2= document.getElementById("searchInput2");

searchicon2.addEventListener('click',function(){
    search2.style.display="flex";
    searchicon2.style.display="none";
})

const bar=document.getElementById("toggle");
const cross=document.getElementById("cross");
const headerbar=document.querySelector(".headerbar");

bar.addEventListener('click',function(){
    setTimeout(()=>{
        cross.style.display="block";
    },200);
    headerbar.style.right= "0%";
})

cross.addEventListener('click',function(){
    cross.style.display="none";
    headerbar.style.right="-100%";
})