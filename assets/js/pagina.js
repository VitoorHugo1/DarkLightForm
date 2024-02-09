window.onload = function () {
    document.querySelector("#name").innerText = localStorage.getItem("userName");
}