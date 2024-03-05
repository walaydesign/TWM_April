const boxes = document.querySelectorAll(".box"),
    image = document.querySelector(".image");

// console.log(boxes, image);

boxes.forEach(box => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
        // console.log("dragging");
        box.classList.add("hovered");
    });

    box.addEventListener("dragleave", (e) => {
        box.classList.remove("hovered");
    });

    box.addEventListener("drop", (e) => {
        box.appendChild(image);
    });
})