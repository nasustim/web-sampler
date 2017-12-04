const sound = ["sonar"];

var p = 0;

var se = [];

for(var i in sound){
    se[i] = $("#"+sound[i]+"-s");
}

$("#sonar").click(function(){
    se[0][0].currentTime = 0;
    se[0][0].play();
    console.log("aa");
    $.ajax({
        url: '/add',
        type: 'POST',
        data: JSON.stringify({
            dat: "sonar"
        }),
        contentType: 'application/json',
        success: function (data) {
            console.log("success");
        }
    });
});