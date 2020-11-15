$(function() {
    $("#startTest").on("click", () => {
        $("#startTest").hide();
        $(".tests").show();
        startTimer();
    });
});

var startTimer = () => {
    var dk = 9;
    var sn = 59;
    setInterval(
        () => {
            $("#timer").html("0" + dk + ":" + (sn.toString().length == 1 ? "0" + sn : sn));
            sn -= 1;
            if (sn == 0 && dk != 0) {
                dk -= 1;
                sn = 59;
            }
            if (dk == 0 && sn == 0) {
                testFinished();
            }
        },
        1000
    );
}

var testFinished = () => {
    location.reload();
}