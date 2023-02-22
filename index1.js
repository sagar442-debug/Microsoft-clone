// let list = document.getElementsByClassName("list")
console.log(list)


function listDisplay(){
    let list = document.getElementById("list")
    

    if (list.style.transform != "translateX(-300rem)"){
        list.style.display = "block";
        list.style.transform = "translateX(-300rem)"
    }
    else{
        list.style.display = "block";
        list.style.transform = "translateX(0rem)"
    }
}

