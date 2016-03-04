/**
 * Created by candellc on 2016-02-29.
 */

function whenClicked(brick) {
    $(brick).addClass("animateBrickPulse");
    $(".CRABrickWideSpecial").addClass("animateSeparateCrack");
    $(".CRBrickWideSpecial").addClass("animateSeparateCrumble");

    $(".CRABrickWideSpecial").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function() {
            // code to execute after animation ends
            $(".CRABrickWideSpecial").css("background-image", "url('Img/scratchBrickSeperatedComplete.png')");
            $(".CRABrickWideSpecial").removeClass("animateSeparateCrack");
            $(".CRABrickWideSpecial").css("background-image", "url('Img/transparentPNG.png')");
            $(".crackedBrickWideSpecialLeft").css("z-index", "10");
            $(".crackedBrickWideSpecialRight").css("z-index", "10");
            $(".crackedBrickWideSpecialLeft").css("display", "inline-block");
            $(".crackedBrickWideSpecialRight").css("display", "inline-block");

            //myBox.removeClass('change-size');
        });

    $(".CRBrickWideSpecial").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function() {
            // code to execute after animation ends
            $(".CRBrickWideSpecial").css("background-image", "url('Img/CrumbleBrickSeparatedComplete.png')");
            $(".CRBrickWideSpecial").removeClass("animateSeparateCrumble");
            $(".CRBrickWideSpecial").css("background-image", "url('Img/transparentPNG.png')");
            $(".CrumbleBrickWideSpecialLeft").css("z-index", "10");
            $(".CrumbleBrickWideSpecialRight").css("z-index", "10");
            $(".CrumbleBrickWideSpecialLeft").css("display", "inline-block");
            $(".CrumbleBrickWideSpecialRight").css("display", "inline-block");

                /*
            $(".CrumbleBrickWideSpecialRight").css("background-image", "url('Img/transparentPNG.png')");
            $(".CrumbleBrickWideSpecialLeft").css("background-image", "url('Img/transparentPNG.png')");
            $(".crackedBrickWideSpecialLeft").css("background-image", "url('Img/transparentPNG.png')");
            $(".crackedBrickWideSpecialRight").css("background-image", "url('Img/transparentPNG.png')");
            $(".runeBrickNorm1Special").css("background-image", "url('Img/transparentPNG.png')");
            $(".runeBrickNorm2Special").css("background-image", "url('Img/transparentPNG.png')");
                */

                $(".runeBrickNorm1Special").addClass("item1animate");
                $(".crackedBrickWideSpecialLeft").addClass("item2animate");
                $(".crackedBrickWideSpecialRight").addClass("item3animate");
                $(".runeBrickNorm2Special").addClass("item4animate");
                $(".CrumbleBrickWideSpecialLeft").addClass("item5animate");
                $(".CrumbleBrickWideSpecialRight").addClass("item6animate");
        /*
            $(".CrumbleBrickWideSpecialRight").css("display", "none");
            $(".CrumbleBrickWideSpecialLeft").css("display", "none");
            $(".runeBrickNorm1Special").css("display", "none");
            $(".runeBrickNorm2Special").css("display", "none");
            $(".CRBrickWideSpecial").css("display", "none");
            $(".crackedBrickWideSpecialLeft").css("display", "none");
            $(".crackedBrickWideSpecialRight").css("display", "none");
            $(".CRABrickWideSpecial").css("display", "none");

            $("#item1").css("display", "inline-block");
            $("#item2").css("display", "inline-block");
            $("#item3").css("display", "inline-block");
            $("#item4").css("display", "inline-block");
            $("#item5").css("display", "inline-block");
            $("#item6").css("display", "inline-block");

            */

                /*
                $("#item1").addClass("item1animate");
                $("#item2").addClass("item2animate");
                $("#item3").addClass("item3animate");
                $("#item4").addClass("item4animate");
                $("#item5").addClass("item5animate");
                $("#item6").addClass("item6animate");
                //myBox.removeClass('change-size');      */
        });

        $(".runeBrickNorm1Special").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function() {
                    $(".runeBrickNorm1Special").css("background-image", "url('Img/item1animate/item1animate4.png')");
                    $(".runeBrickNorm1Special").removeClass("item1animate");
            });

        $(".crackedBrickWideSpecialLeft").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function() {
                    $(".crackedBrickWideSpecialLeft").css("background-image", "url('Img/item2animate/item2animate4.png')");
                    $(".crackedBrickWideSpecialLeft").removeClass("item2animate");
            });

        $(".crackedBrickWideSpecialRight").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function() {
                    $(".crackedBrickWideSpecialRight").css("background-image", "url('Img/item3animate/item3animate4.png')");
                    $(".crackedBrickWideSpecialRight").removeClass("item3animate");
            });

        $(".runeBrickNorm2Special").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function() {
                    $(".runeBrickNorm2Special").css("background-image", "url('Img/item4animate/item4animate4.png')");
                    $(".runeBrickNorm2Special").removeClass("item4animate");
            });

        $(".CrumbleBrickWideSpecialLeft").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function() {
                    $(".CrumbleBrickWideSpecialLeft").css("background-image", "url('Img/item5animate/item5animate4.png')");
                    $(".CrumbleBrickWideSpecialLeft").removeClass("item5animate");
            });

        $(".CrumbleBrickWideSpecialRight").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function() {
                    $(".CrumbleBrickWideSpecialRight").css("background-image", "url('Img/item6animate/item6animate4.png')");
                    $(".CrumbleBrickWideSpecialRight").removeClass("item6animate");

                    $(".CrumbleBrickWideSpecialRight").css("display", "none");
                    $(".CrumbleBrickWideSpecialLeft").css("display", "none");
                    $(".runeBrickNorm1Special").css("display", "none");
                    $(".runeBrickNorm2Special").css("display", "none");
                    $(".CRBrickWideSpecial").css("display", "none");
                    $(".crackedBrickWideSpecialLeft").css("display", "none");
                    $(".crackedBrickWideSpecialRight").css("display", "none");
                    $(".CRABrickWideSpecial").css("display", "none");

                    $("#item1").css("display", "inline-block");
                    $("#item2").css("display", "inline-block");
                    $("#item3").css("display", "inline-block");
                    $("#item4").css("display", "inline-block");
                    $("#item5").css("display", "inline-block");
                    $("#item6").css("display", "inline-block");

            });

    //$('#animateFirst').addClass("animateBrickStart");
    //brick.setTimeout('$(brick).addClass("animateBrickStart")', 2000);
    //$(brick).addClass("animateBrickPulse");
    //$(brick).removeClass("active");
    /* $('active').css('-webkit-animation','basicBrickPulse 2s linear infinite alternate');
    $('active').css('-moz-animation','basicBrickPulse 2s linear infinite alternate');
    $('active').css('-ms-animation','basicBrickPulse 2s linear infinite alternate');
    $('active').css('-o-animation','basicBrickPulse 2s linear infinite alternate');
    $('active').css('animation','basicBrickPulse 2s linear infinite alternate');
    $(brick).addClass("active"); */
}

function puzzle() {
        var Array1 = $('.sortable').dragswap('toArray');
        console.log(Array1[0]);
        console.log(Array1[1]);
        console.log(Array1[2]);
        console.log(Array1[3]);
        console.log(Array1[4]);
        console.log(Array1[5]);
        console.log("--------");

        var flag = true;

        for(var i = 0; i < 6; i++) {
            if(i === 0) {
                if(Array1[0] !== "item1") {
                    flag = false;
                }
            }
            if(i === 1) {
                if(Array1[1] !== "item4") {
                    flag = false;
                }
            }
            if(i === 2) {
                if(Array1[2] !== "item5") {
                    flag = false;
                }
            }
            if(i === 3) {
                if(Array1[3] !== "item3") {
                    flag = false;
                }
            }
            if(i === 4) {
                if(Array1[4] !== "item6") {
                    flag = false;
                }
            }
            if(i === 5) {
                if(Array1[5] !== "item2") {
                    flag = false;
                }
            }
        }

        if (flag !== false) {
            //alert("Puzzle Complete");
            $("#item1").css("display", "none");
            $("#item2").css("display", "none");
            $("#item3").css("display", "none");
            $("#item4").css("display", "none");
            $("#item5").css("display", "none");
            $("#item6").css("display", "none");

            $(".brickWideSuper").addClass("brickWideAnimation");
            $(".brickWideSuper").css("background-image", "url('Img/brickWideAnimation/brickWideAnimation15.png')");


        }

}

