let hamburgerMenyen = document.querySelector(".hamburgermeny");

document.getElementById("aktiveringsknapp").addEventListener("click", aktiverMeny);

function aktiverMeny() {
    if (hamburgerMenyen.style.display === "none" || hamburgerMenyen.style.display === '') {
        hamburgerMenyen.style.display = "block";
    }

    else {
        hamburgerMenyen.style.display = "none"
    }
}