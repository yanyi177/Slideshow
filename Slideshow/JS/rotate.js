$(function(){
    /* 隐藏其他图片只显示第一张图片 */
    $(".img").hide();
    $(".img").first().show();
    $("#button-list button").first().css("background-color","red");
    var img_Index = 0;     // 设置图片索引

    // 设置定时器，用以图片的自动切换
    f = setInterval(autochange,4000);
    // 自动切换图片的函数
    function autochange(){
        var now = img_Index;
        img_Index = (img_Index + 1 ) % 4;
        $("#button-list button").eq(now).css("background-color","white");
        $(".img").eq(now).fadeOut(2000)
        $("#button-list button").eq(img_Index).css("background-color","red");
        $(".img").eq(img_Index).fadeIn(2000)
    }

    // 向前切换
    $("#back").click(function(){
        clearInterval(f);
        var now = img_Index;
        img_Index = (img_Index + 3 ) % 4;
        $("#button-list button").eq(now).css("background-color","white");
        $(".img").eq(now).hide();
        $("#button-list button").eq(img_Index).css("background-color","red");
        $(".img").eq(img_Index).show();
        f = setInterval(autochange,4000);
    });
    /// 向后切换图片
    $("#next").click(function(){
        clearInterval(f);
        var now = img_Index;
        img_Index = (img_Index + 1 ) % 4;
        $("#button-list button").eq(now).css("background-color","white");
        $(".img").eq(now).hide();
        $("#button-list button").eq(img_Index).css("background-color","red");
        $(".img").eq(img_Index).show();
        f = setInterval(autochange,4000);
    });
    // 点击图片下部按钮进行切换
    $("#button-list button").click(function(){
        clearInterval(f);
        var now = img_Index;
        img_Index = $(this).index();
        $("#button-list button").eq(now).css("background-color","white");
        $(".img").eq(now).hide();
        $("#button-list button").eq(img_Index).css("background-color","red");
        $(".img").eq(img_Index).show();
        f = setInterval(autochange,4000);
    });


})

