function zoomin(){
    //$(".zoom-in").css("transform", "scale(1.5)");
    setTimeout(() => {
        $(".zoom-in").css("background-image", "url('./images/mainbg2.jpg')");
    }, 4000)
    setTimeout(() => {
        $(".zoom-in").css("background-image", "url('./images/mainbg3.jpg')");
    }, 9000)

}

function zoominSecond(){
    //$(".zoom-in").css("transform", "scale(1.5)");
    setTimeout(() => {
        $(".active-second-header").removeClass("active-second-header");
        $(".zoom-in-second h2").eq(1).addClass("active-second-header")
        $(".zoom-in-second").css("background-image", "url('./images/arkaplan_giris-16.jpg')");
    }, 4000)
    setTimeout(() => {
        $(".active-second-header").removeClass("active-second-header");
        $(".zoom-in-second h2").eq(2).addClass("active-second-header")
        $(".zoom-in-second").css("background-image", "url('./images/arkaplan_giris-17.jpg')");
    }, 9000);
    setTimeout(() => {
        $(".active-second-header").removeClass("active-second-header");
        $(".zoom-in-second h2").eq(3).addClass("active-second-header")
        $(".zoom-in-second").css("background-image", "url('./images/arkaplan_giris-18.jpg')");
    }, 14000)
}

zoomin();
zoominSecond();

$(".detail-opener").on("click", (e) => {
    const target = e.target.getAttribute("data-target");
    console.log(target);
    const targetClass = "." + target;
    $(targetClass).find(".third-item-content").css("display", 'block');
});