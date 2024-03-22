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
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {
}

function dragDrop() {
    var emptyOrder = this.getAttribute("data-order");
    var puzzleOrder = puzzle.getAttribute("data-order");
    if(emptyOrder == puzzleOrder) {
        fill++;
        this.append(puzzle);
    }else {
        $(".fail").show();
    }

    if(fill == 4) {
        $(".sucess").show();
    }
}




$(".fail_btn").click(function(){
    $(this).parents(".fail").hide();
})

puzzlePic();

function initPuzzle() {
    puzzle_1 = document.getElementById('puzzle-1');
    puzzle_2 = document.getElementById('puzzle-2');
    puzzle_3 = document.getElementById('puzzle-3');
    puzzle_4 = document.getElementById('puzzle-4');

    var puzzlaArray = [puzzle_1, puzzle_2, puzzle_3, puzzle_4];

    for(var i=0; i<4 ;i++) {
        puzzlaArray[i].addEventListener('dragstart', dragStart);
        puzzlaArray[i].addEventListener('dragend', dragEnd);
    }
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

$(".start_btn").click(function() {
    $(this).parents(".start").hide();
})


// 手機版
window.onload = function() {
    var puzzleM_1, puzzleM_2, puzzleM_3, puzzleM_4;
    puzzleM_1 = document.getElementById('puzzleM-1');
    puzzleM_2 = document.getElementById('puzzleM-2');
    puzzleM_3 = document.getElementById('puzzleM-3');
    puzzleM_4 = document.getElementById('puzzleM-4');

    var puzzleM_1_oriX = $("#puzzleM-1").css("left");
    var puzzleM_1_oriY = $("#puzzleM-1").css("top");

    var puzzleM_2_oriX = $("#puzzleM-2").css("left");
    var puzzleM_2_oriY = $("#puzzleM-2").css("top");

    var puzzleM_3_oriX = $("#puzzleM-3").css("left");
    var puzzleM_3_oriY = $("#puzzleM-3").css("top");

    var puzzleM_4_oriX = $("#puzzleM-4").css("left");
    var puzzleM_4_oriY = $("#puzzleM-4").css("top");


    var emptyItem = document.getElementById('empty-1');
    var emptyLength = emptyItem.clientHeight;
    var puzzleItem = document.getElementById('puzzleM-1');
    var puzzleLength = puzzleItem.clientHeight;


    var empty_1_x_start = parseFloat($(".empty-1").css("left"));
    var empty_1_x_end = empty_1_x_start + emptyLength;
    var empty_1_y_start = parseFloat($(".empty-1").css("top"));
    var empty_1_y_end = empty_1_y_start + emptyLength;
    
    var empty_2_x_start = parseFloat($(".empty-2").css("left"));
    var empty_2_x_end = empty_2_x_start + emptyLength;
    var empty_2_y_start = parseFloat($(".empty-2").css("top"));
    var empty_2_y_end = empty_2_y_start + emptyLength;

    var empty_3_x_start = parseFloat($(".empty-3").css("left"));
    var empty_3_x_end = empty_3_x_start + emptyLength;
    var empty_3_y_start = parseFloat($(".empty-3").css("top"));
    var empty_3_y_end = empty_3_y_start + emptyLength;

    var empty_4_x_start = parseFloat($(".empty-4").css("left"));
    var empty_4_x_end = empty_4_x_start + emptyLength;
    var empty_4_y_start = parseFloat($(".empty-4").css("top"));
    var empty_4_y_end = empty_4_y_start + emptyLength;

    var empty_1 = document.getElementById('empty-1');
    var empty_2 = document.getElementById('empty-2');
    var empty_3 = document.getElementById('empty-3');
    var empty_4 = document.getElementById('empty-4');

    touchh=false;

    let puzzleMArray = [puzzleM_1, puzzleM_2, puzzleM_3, puzzleM_4];
    let OriginArray = [
        [puzzleM_1_oriX, puzzleM_1_oriY],
        [puzzleM_2_oriX, puzzleM_2_oriY], 
        [puzzleM_3_oriX, puzzleM_3_oriY], 
        [puzzleM_4_oriX, puzzleM_4_oriY]
    ];
    let emptyLocationArray = [
        [empty_1_x_start, empty_1_x_end, empty_1_y_start, empty_1_y_end], 
        [empty_2_x_start, empty_2_x_end, empty_2_y_start, empty_2_y_end],
        [empty_3_x_start, empty_3_x_end, empty_3_y_start, empty_3_y_end],
        [empty_4_x_start, empty_4_x_end, empty_4_y_start, empty_4_y_end]
    ];
    let emptyArray = [empty_1, empty_2, empty_3, empty_4];

    const $body = document.querySelector('body.gameM');
    $body.style.overflow = 'hidden';


    for(let j = 0; j < 4; j++) {
        var location_x, location_y;
        puzzleMArray[j].addEventListener('touchmove', function (e) {
            var touchLocation = e.targetTouches[0];
            location_x = touchLocation.pageX - puzzleLength / 2;
            location_y = touchLocation.pageY - puzzleLength / 2;
            puzzleMArray[j].style.left = location_x + 'px';
            puzzleMArray[j].style.top = location_y + 'px';
            touchh=true;
        })
        puzzleMArray[j].addEventListener('touchend', function (e) {
            if(touchh==true) {
                var order = this.getAttribute("data-order");
                for(var k=0; k<4; k++) {
                    if(location_x > emptyLocationArray[k][0] && location_x < emptyLocationArray[k][1]) {
                        if(location_y > emptyLocationArray[k][2] && location_y < emptyLocationArray[k][3]) {
                            var emptyOrder = k+1;
                            if(order == emptyOrder) {
                                emptyArray[k].append(this);
                                fill++;
                                if(fill == 4) {
                                    $(".sucess").show();
                                }
                            }else {
                                $(".fail").show();
                                this.style.left = OriginArray[j][0];
                                this.style.top = OriginArray[j][1];
                            }
                        }
                    }else {
                        this.style.left = OriginArray[j][0];
                        this.style.top = OriginArray[j][1];
                    }
                }
                touchh=false;

            }
        })
    }
}

function bodyScroll(event){
    event.preventDefault();
}

