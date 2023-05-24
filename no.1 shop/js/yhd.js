function block() {
    $(".client ul").slideDown(500)
}
function none() {
    $(".client ul").slideUp(500)
}
$(".client").hover(
    function(){
        block()
    },
    function(){
        none()
    }
)
$("nav div:nth-of-type(2) ul li:nth-of-type(4)").hover(
    function () {
        block()
    },
    function () {
        none()
    }
)
$("nav div:nth-of-type(2) ul li:nth-of-type(6)").hover(
    function () {
        block()
    },
    function () {
        none()
    }
)
$(".client ul li").each(function () {
    $(this).mouseover(function () {
        $(this).addClass("nav-list").siblings().removeClass("nav-list")
})
})
let  x = $(".shopping ul li div:first-of-type p:last-of-type span")
let  btnl = $(".quantity button:first-of-type")
let  btnr = $(".quantity button:last-of-type")
let  y = $(".quantity span")
let  z = $(".uniComputer span:last-of-type")
let  a = $(".shopping>div div span:last-of-type")
let  b = $(".shopping>div button span")
let  c = $(".close")
let  l = $(".shopping>ul>li")
let  d = $(".remove")
let  g = $(".shopping>div:last-of-type")
let  shopping = $(".shopping")
let  shoppings = $(".search>div:nth-of-type(2) ")
btnr.each(function (index,e) {
    $(this).click(function () {
        i = Number(y.eq(index).text())
        y.eq(index).text(i+1)
        x.eq(index).text(i+1)
        z.eq(index).text(190 * (i + 1))
        a.text(Number(z.eq(0).text()) + Number(z.eq(1).text())+Number(z.eq(2).text()))
        b.text(Number(x.eq(0).text()) + Number(x.eq(1).text())+Number(x.eq(2).text()))
    })
})
btnl.each(function (index,e) {
    $(this).click(function () {
        i = Number(y.eq(index).text())
        if(i <= 0){
            btnl.attr('disabled',false)
        }
        else{
        y.eq(index).text(i - 1)
        x.eq(index).text(i - 1)
        z.eq(index).text(190 * (i - 1))
        }
        a.text(Number(z.eq(0).text()) + Number(z.eq(1).text())+Number(z.eq(2).text()))
        b.text(Number(x.eq(0).text()) + Number(x.eq(1).text())+Number(x.eq(2).text()))
    })
})
c.each(function (index,e) {
    $(this).click(function () {
        l.eq(index).remove()
        if ($(".shopping>ul>li").length == 0){
            g.css("display","none")
            d.css("display","block")
        }
        let h = 0
        $(".uniComputer span:last-of-type").each(function (index,e) {
            h += Number($(e).text())
        })
        a.text(h)
        b.text(Number(x.eq(0).text()) + Number(x.eq(1).text())+Number(x.eq(2).text()))
    })
})
shoppings.hover(function () {
    shopping.fadeIn(500)
},
function () {
    shopping.fadeOut(500)
}
)
let ac = $(".menu li")
let menu = $(".secondary-menu")
let ab = $(".secondary-menu>div")
let ad = $(".menu li div")
let flag = true
ac.each(function (index,e) {
    $(e).mouseenter(
        function(){
            menu.css("display","block").animate({left : 220},500)
            ab.eq(index).css("display","block")
            if (flag){
                flag = false
                ad.eq(index).animate({left: 20},500,function () {
                    flag = true
                }).css("backgroundColor","#ffffff").css("color","#fd4248")
            }
            }
            )
        $(e).mouseleave(function () {
            menu.css({"display": "none", left: 200})
            ab.eq(index).css("display", "none")
            ad.eq(index).animate({left: 0}, 500).css("backgroundColor", "#af1d1d").css("color", "#ffffff")

        })
})
let box = $(".ul-img")
let imgs = $(".ul-img ul:first-of-type li")
let circles = $(".ul-img ul:last-of-type li")
let imgIndex = 0
function play(index) {
    imgs.eq(index).fadeIn(1000).siblings().fadeOut()
    circles.eq(index).addClass('active').siblings().removeClass('active')
}
circles.click(function () {
    imgIndex = $(this).index().
        play(imgIndex)
})
let timer = null
function autoplay() {
    timer = setInterval(function () {
        imgIndex = imgIndex === imgs.length - 1 ? 0 : ++imgIndex
        // 执行切换
        play(imgIndex)
    },2000)
}

$(function(){
    autoplay()
})
box.mouseout(function(){
    autoplay()
})
box.mouseover(function(){
    clearInterval(timer)
})
let bsl = $(".arrows-l")
let bsr = $(".arrows-r")
let kt = $(".carousel-ul")
bsr.click(function () {
    x = kt.position().left
    kt.animate({left : x - 975},500,function () {
        if($(this).position().left == -1950){
            $(this).css("left",0)
        }
    })
})
bsl.click(function () {
    x = kt.position().left
    kt.animate({left: x + 975}, 500, function () {
        if ($(this).position().left == 0){
            $(this).css("left",-1950)
        }
    })
}).mouseover(function () {
    if (kt.position().left == 0){
        kt.css("left",-1950)
    }
}).mouseout(function () {
    if (kt.position().left == -1950){
        kt.css("left",0)
    }
})