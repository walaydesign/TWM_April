// const boxes = document.querySelectorAll(".box"),
//     image = document.querySelector(".image");

// boxes.forEach(box => {
//     box.addEventListener("dragover", (e) => {
//         e.preventDefault();
//         box.classList.add("hovered");
//     });

//     box.addEventListener("dragleave", (e) => {
//         box.classList.remove("hovered");
//     });

//     box.addEventListener("drop", (e) => {
//         box.appendChild(image);
//     });
// })



// var image = document.querySelector(".image");

// function dragImage(img) {
//     let imgTop = img.offsetTop;
//     let imgLeft = img.offsetLeft;
//     console.log("top:" + imgTop + ", left:" + imgLeft);
// }

// image.addEventListener('mousedown',function(){
//     dragImage(image);
// });
// image.addEventListener('touchstart',function(){
// });

// image.addEventListener('mousedown',function(){
// });
// image.addEventListener('touchstart',function(){
// });

window.onload = function() {
    var dropItem = document.getElementById("dropItem");

    dropItem.addEventListener('touchmove', function(ev) {
        console.log("touch!");
        var touchLocation = ev.targetTouches[0];

        dropItem.style.left = touchLocation.pageX + 'px';
        dropItem.style.top = touchLocation.pageY + 'px';
    })
}