function zoomin(){
    //$(".zoom-in").css("transform", "scale(1.5)");
    let loop = 1;
    setInterval(() => {
        loop += 1;
        if(loop === 4){
            loop = 1
        }
        $(".zoom-in").css("background-image", `url('./images/mainbg${loop}.jpg')`);
    }, 4000)
}

function zoominSecond(){
    //$(".zoom-in").css("transform", "scale(1.5)");
    let loop = 15;
    setInterval(() => {
        console.log("loop", loop)
        loop += 1;
        if(loop === 19){
            loop = 16
        }
        $(".active-second-header").removeClass("active-second-header");
        $(".zoom-in-second h2").eq(loop -15).addClass("active-second-header")
        $(".zoom-in-second").css("background-image", `url('./images/arkaplan_giris-${loop}.jpg')`);
    }, 4000)
}

zoomin();
zoominSecond();

$(".detail-opener").on("click", (e) => {
    const target = e.target.getAttribute("data-target");
    console.log(target);
    const targetClass = "." + target;
    $(targetClass).find(".third-item-content").css("display", 'block');
});