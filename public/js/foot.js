const sound = ["up","straight","down","left","clear","right"];

var p = 0;

var se = [];

for(var i in sound){
    se[i] = $("#"+sound[i]+"-s");
}

$("#up").click(function(){
    se[0][0].currentTime = 0;
    se[0][0].play();
    console.log("aa");
    $.ajax({
        url: '/add',
        type: 'POST',
        data: JSON.stringify({
            dat: "foot-up"
        }),
        contentType: 'application/json',
        success: function (data) {
            console.log("success");
        }
    });
});
$("#straight").click(function(){
    se[1][0].currentTime = 0;
    se[1][0].play();
    $.ajax({
        url: '/add',
        type: 'POST',
        data: JSON.stringify({
            dat: "foot-straight"
        }),
        contentType: 'application/json',
        success: function (data) {
            console.log("success");
        }
    });
});
$("#down").click(function(){
    se[2][0].currentTime = 0;
    se[2][0].play();
    $.ajax({
        url: '/add',
        type: 'POST',
        data: JSON.stringify({
            dat: "foot-down"
        }),
        contentType: 'application/json',
        success: function (data) {
            console.log("success");
        }
    });
});
$("#left").click(function(){
    se[3][0].currentTime = 0;
    se[3][0].play();
    $.ajax({
        url: '/add',
        type: 'POST',
        data: JSON.stringify({
            dat: "foot-left"
        }),
        contentType: 'application/json',
        success: function (data) {
            console.log("success");
        }
    });
});
$("#clear").click(function(){
    se[4][0].currentTime = 0;
    se[4][0].play();
    $.ajax({
        url: '/add',
        type: 'POST',
        data: JSON.stringify({
            dat: "foot-clear"
        }),
        contentType: 'application/json',
        success: function (data) {
            console.log("success");
        }
    });
});
$("#right").click(function(){
    se[5][0].currentTime = 0;
    se[5][0].play();
    $.ajax({
        url: '/add',
        type: 'POST',
        data: JSON.stringify({
            dat: "foot-right"
        }),
        contentType: 'application/json',
        success: function (data) {
            console.log("success");
        }
    });
});