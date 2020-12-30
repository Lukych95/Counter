let add = document.getElementById("increment");
let remove = document.getElementById("decrement");
/* let display = document.getElementById("display"); */

let numberInt = 0;

add.addEventListener("click", function(){
    numberInt ++ ;
    document.getElementById("display").innerHTML = numberInt;
})

remove.addEventListener("click", function(){
    numberInt -- ;
    document.getElementById("display").innerHTML = numberInt;
});