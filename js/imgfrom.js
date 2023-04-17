const image = document.querySelector(".imgform"),
    input = document.querySelector("#pfp");

input.addEventListener("change", () => { 
    image.src = URL.createObjectURL(input.files[0]);
});