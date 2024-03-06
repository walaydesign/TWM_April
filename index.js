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

    
}

var dropItem = document.getElementById("dropItem");

dropItem.addEventListener('mousedown', function(event) {
    dropItem.classList.add("hovered");
})

dropItem.addEventListener('touchstart', function(event) {
    dropItem.classList.add("hovered");
})

$(document).mousemove(function (event) {
    if($("#dropItem").hasClass("hovered")) {
        captureMousePosition(event);
    }
});

function captureMousePosition(event) {
    xMousePos = event.pageX;
    yMousePos = event.pageY;
    // console.log("xMousePos=" + xMousePos + ",yMousePos" + yMousePos);
    $("#dropItem").css("top", yMousePos).css("left", xMousePos);
}
