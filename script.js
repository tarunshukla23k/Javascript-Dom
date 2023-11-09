var friend = document.querySelector("#add")

var istatus = document.querySelector("h5")

var check = 0



friend.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        friend.innerHTML = "Remove friend"
        check = 1
    }
    else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        friend.innerHTML = "add friend"
        check = 0

       
    }



})






