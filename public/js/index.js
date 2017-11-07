const sound = ["right","left"];

var se = [];

for(var i in sound){
    se[i] = $("#"+sound[i]+"-s");
}

$("#right").click(function(){
    se[0][0].currentTime = 0;
    se[0][0].play();
    console.log("aa");
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
});
$("#left").click(function(){
    se[1][0].currentTime = 0;
    se[1][0].play();
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