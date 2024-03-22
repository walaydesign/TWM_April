var puzzle_1, puzzle_2, puzzle_3, puzzle_4;
var puzzles = document.querySelectorAll('.puzzle_item');
const empties = document.querySelectorAll('.empty_item');

initPuzzle();

var puzzle, fill=0;

for(let puzzle of puzzles) {
    puzzle.addEventListener('dragstart', dragStart);
    puzzle.addEventListener('dragend', dragEnd);
}


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
    this.append(puzzle);
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

$(document).on("click", ".empty_item", function () {
    let img = $(this).children("img");
    $(this).children("img").remove();
    $(".puzzle_group").append(img);
    if(img.length ==! 0) {
        fill--;
    }
})

$(".fail_btn").click(function(){
    $(this).parents(".fail").hide();
    $(".empty_item>img").remove();
    resetPuzzle();
    initPuzzle();
    puzzlePic();
})

puzzlePic();

function resetPuzzle() {
    let puzzleItem_1 = $("<img class='puzzle_item puzzle-1' id='puzzle-1' draggable='true'></img>");
    let puzzleItem_2 = $("<img class='puzzle_item puzzle-2' id='puzzle-2' draggable='true'></img>");
    let puzzleItem_3 = $("<img class='puzzle_item puzzle-3' id='puzzle-3' draggable='true'></img>");
    let puzzleItem_4 = $("<img class='puzzle_item puzzle-4' id='puzzle-4' draggable='true'></img>");
    $(".puzzle_group").append(puzzleItem_1,puzzleItem_2,puzzleItem_3,puzzleItem_4);
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
        $(".puzzle-2").attr("src","./img/puzzle-1-2.png").attr("data-order","2");
        $(".puzzle-3").attr("src","./img/puzzle-1-3.png").attr("data-order","3");
        $(".puzzle-4").attr("src","./img/puzzle-1-4.png").attr("data-order","4");
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

// 隨機
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}