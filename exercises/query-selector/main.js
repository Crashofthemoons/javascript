let header1 = document.querySelector(".article__header")
header1.textContent = "Welcome to the Jenn blog"
let headers = document.querySelectorAll(".article__header")
console.log(headers)
for (let i = 0; i < headers.length; i++) {
    headers[i].classList.add("important")
    console.log(headers[i].classList)
}