const sound = ["up","straight","down","left","clear","right"];//,"back"];

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
            dat: "up"
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
            dat: "goahead"
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
            dat: "down"
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
            dat: "left"
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
            dat: "clear"
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
            dat: "right"
        }),
        contentType: 'application/json',
        success: function (data) {
            console.log("success");
        }
    });
});/*
$("#back").click(function(){
    se[6][0].currentTime = 0;
    se[6][0].play();
    $.ajax({
        url: '/add',
        type: 'POST',
        data: JSON.stringify({
            dat: "back"
        }),
        contentType: 'application/json',
        success: function (data) {
            console.log("success");
        }
    });
});*/