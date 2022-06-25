let firstName = document.getElementById("fname").value;
let lastName = document.getElementById("lname").value;

console.log(firstName)

function alertMessage() {
    alert(`Hi my name is + ${firstName} + ${lastName}`)
}

function isEmpty() {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;

    if (firstName != '' && lastName != '') {
        document.getElementById("submit").removeAttribute("disabled")
    }
}


function enableBox() {
    let checkbox = document.getElementById("check")

    if(checkbox.style.display === "block"){
        checkbox.style.display = "none";
    } else {
        checkbox.style.display = "block"
    }
}