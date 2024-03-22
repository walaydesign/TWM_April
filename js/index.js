var puzzle_1, puzzle_2, puzzle_3, puzzle_4;
const empties = document.querySelectorAll('.empty_item');

initPuzzle();

var puzzle, fill=0;

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    puzzle = this;
}

function dragEnd() {
    // console.log("end");
}

function dragOver(e) {
    e.preventDefault();
    // console.log("over");
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {
    // console.log("leave");
}

function dragDrop() {
    if(!this.classList.contains('hasPic')) {
        this.append(puzzle);
        this.classList.add('hasPic');
        fill++;
        if(fill == 4) {
            let img_1 = $(".empty-1").children("img").data("order");
            let img_2 = $(".empty-2").children("img").data("order");
            let img_3 = $(".empty-3").children("img").data("order");
            let img_4 = $(".empty-4").children("img").data("order");
            if(img_1 == 1 && img_2 == 2 && img_3 == 3 && img_4 == 4) {
                $(".sucess").show();
            }else {
                $(".fail").show();
            }
        }
    }
}

$(document).on("click", ".empty_item", function () {
    let img = $(this).children("img");
    $(this).children("img").remove();
    $(".puzzle_group").append(img);
    this.classList.remove('hasPic');
    if(img.length ==! 0) {
        fill--;
    }
});

var empty_1_x = $(".empty-1").css("left");
var empty_1_y = $(".empty-1").css("top");
// console.log("1_x=" + empty_1_x + ",1+y=" + empty_1_y);
var empty_2_x = $(".empty-2").css("left");
var empty_2_y = $(".empty-2").css("top");
// console.log("1_x=" + empty_2_x + ",1+y=" + empty_2_y);
var empty_3_x = $(".empty-3").css("left");
var empty_3_y = $(".empty-3").css("top");
// console.log("1_x=" + empty_3_x + ",1+y=" + empty_3_y);
var empty_4_x = $(".empty-4").css("left");
var empty_4_y = $(".empty-4").css("top");
// console.log("1_x=" + empty_4_x + ",1+y=" + empty_4_y);

$(".fail_btn").click(function(){
    $(this).parents(".fail").hide();
    $(".empty_item>img").remove();
    resetPuzzle();
    puzzlePic();
    initPuzzle();
    $(".empty_item").removeClass("hasPic");
})

puzzlePic();

function resetPuzzle() {
    let puzzleItem_1 = $("<img class='puzzle_item puzzle-1' id='puzzle-1' draggable='true'>");
    let puzzleItem_2 = $("<img class='puzzle_item puzzle-2' id='puzzle-2' draggable='true'>");
    let puzzleItem_3 = $("<img class='puzzle_item puzzle-3' id='puzzle-3' draggable='true'>");
    let puzzleItem_4 = $("<img class='puzzle_item puzzle-4' id='puzzle-4' draggable='true'>");
    $(".puzzle_group.pc").append(puzzleItem_1,puzzleItem_2,puzzleItem_3,puzzleItem_4);
    fill=0;
}

function initPuzzle() {
    puzzle_1 = document.getElementById('puzzle-1');
    puzzle_2 = document.getElementById('puzzle-2');
    puzzle_3 = document.getElementById('puzzle-3');
    puzzle_4 = document.getElementById('puzzle-4');
    
    puzzle_1.addEventListener('dragstart', dragStart);
    puzzle_1.addEventListener('dragend', dragEnd);

    puzzle_2.addEventListener('dragstart', dragStart);
    puzzle_2.addEventListener('dragend', dragEnd);

    puzzle_3.addEventListener('dragstart', dragStart);
    puzzle_3.addEventListener('dragend', dragEnd);

    puzzle_4.addEventListener('dragstart', dragStart);
    puzzle_4.addEventListener('dragend', dragEnd);
}

function puzzlePic() {
    var group = random(1, 5);
    if(group == 1) {
        $(".puzzle-1").attr("src","./img/puzzle-1-1.png").attr("data-order","1");
        $(".puzzle-3").attr("src","./img/puzzle-1-2.png").attr("data-order","2");
        $(".puzzle-4").attr("src","./img/puzzle-1-3.png").attr("data-order","3");
        $(".puzzle-2").attr("src","./img/puzzle-1-4.png").attr("data-order","4");
    }else if(group == 2) {
        $(".puzzle-3").attr("src","./img/puzzle-2-1.png").attr("data-order","1");
        $(".puzzle-1").attr("src","./img/puzzle-2-2.png").attr("data-order","2");
        $(".puzzle-4").attr("src","./img/puzzle-2-3.png").attr("data-order","3");
        $(".puzzle-2").attr("src","./img/puzzle-2-4.png").attr("data-order","4");
    }else if(group == 3) {
        $(".puzzle-4").attr("src","./img/puzzle-3-1.png").attr("data-order","1");
        $(".puzzle-3").attr("src","./img/puzzle-3-2.png").attr("data-order","2");
        $(".puzzle-1").attr("src","./img/puzzle-3-3.png").attr("data-order","3");
        $(".puzzle-2").attr("src","./img/puzzle-3-4.png").attr("data-order","4");
    }else if(group == 4) {
        $(".puzzle-3").attr("src","./img/puzzle-4-1.png").attr("data-order","1");
        $(".puzzle-2").attr("src","./img/puzzle-4-2.png").attr("data-order","2");
        $(".puzzle-4").attr("src","./img/puzzle-4-3.png").attr("data-order","3");
        $(".puzzle-1").attr("src","./img/puzzle-4-4.png").attr("data-order","4");
    }else if(group == 5) {
        $(".puzzle-2").attr("src","./img/puzzle-5-1.png").attr("data-order","1");
        $(".puzzle-4").attr("src","./img/puzzle-5-2.png").attr("data-order","2");
        $(".puzzle-1").attr("src","./img/puzzle-5-3.png").attr("data-order","3");
        $(".puzzle-3").attr("src","./img/puzzle-5-4.png").attr("data-order","4");
    }
}

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// 手機版
window.onload = function() {
    var puzzleM_1, puzzleM_2, puzzleM_3, puzzleM_4;
    puzzleM_1 = document.getElementById('puzzleM-1');
    puzzleM_2 = document.getElementById('puzzleM-2');
    puzzleM_3 = document.getElementById('puzzleM-3');
    puzzleM_4 = document.getElementById('puzzleM-4');
    var puzzleLength = puzzleM_1.clientHeight;
    // console.log("heihgt=" + puzzleLength);
    var nowX = document.getElementById('x-posi');
    var nowY = document.getElementById('y-posi');

    puzzleM_1.addEventListener('touchmove', function (e) {
        var touchLocation = e.targetTouches[0];
        var puzzleM_1_x = touchLocation.pageX - puzzleLength / 2;
        var puzzleM_1_y = touchLocation.pageY - puzzleLength / 2;
        puzzleM_1.style.left = puzzleM_1_x + 'px';
        puzzleM_1.style.top = puzzleM_1_y + 'px';
        document.documentElement.style.overflowY = "hidden";
        var x_posi = puzzleM_1.style.left;
        var y_posi = puzzleM_1.style.top;
        nowX.innerHTML = x_posi;
        nowY.innerHTML = y_posi;
    })

    puzzleM_2.addEventListener('touchmove', function (e) {
        var touchLocation = e.targetTouches[0];
        var puzzleM_2_x = touchLocation.pageX - puzzleLength / 2;
        var puzzleM_2_y = touchLocation.pageY - puzzleLength / 2;
        puzzleM_2.style.left = puzzleM_2_x + 'px';
        puzzleM_2.style.top = puzzleM_2_y + 'px';
        document.documentElement.style.overflowY = "hidden";
        var x_posi = puzzleM_2.style.left;
        var y_posi = puzzleM_2.style.top;
        nowX.innerHTML = x_posi;
        nowY.innerHTML = y_posi;
    })

    puzzleM_3.addEventListener('touchmove', function (e) {
        var touchLocation = e.targetTouches[0];
        var puzzleM_3_x = touchLocation.pageX - puzzleLength / 2;
        var puzzleM_3_y = touchLocation.pageY - puzzleLength / 2;
        puzzleM_3.style.left = puzzleM_3_x + 'px';
        puzzleM_3.style.top = puzzleM_3_y + 'px';
        document.documentElement.style.overflowY = "hidden";
        var x_posi = puzzleM_3.style.left;
        var y_posi = puzzleM_3.style.top;
        nowX.innerHTML = x_posi;
        nowY.innerHTML = y_posi;
    })

    puzzleM_4.addEventListener('touchmove', function (e) {
        var touchLocation = e.targetTouches[0];
        var puzzleM_4_x = touchLocation.pageX - puzzleLength / 2;
        var puzzleM_4_y = touchLocation.pageY - puzzleLength / 2;
        puzzleM_4.style.left = puzzleM_4_x + 'px';
        puzzleM_4.style.top = puzzleM_4_y + 'px';
        document.documentElement.style.overflowY = "hidden";
        var x_posi = puzzleM_4.style.left;
        var y_posi = puzzleM_4.style.top;
        nowX.innerHTML = x_posi;
        nowY.innerHTML = y_posi;
    })
}

// document.addEventListener("touchmove", function(event) {
//     event.preventDefault() 
// }, {passive: true});
// bodyScroll(event);
// scrControl(t);

// 方法二：兼容IOS
// function bodyScroll(event){
//     event.preventDefault();
// }

// function scrControl(t){
//     if(t == 0){ //禁止滚动
//         document.body.addEventListener('touchmove', this.bodyScroll, { passive: false });
//     }else if( t == 1){ //开启滚动
//         document.body.removeEventListener('touchmove',this.bodyScroll, {passive: false});
//     }
// }