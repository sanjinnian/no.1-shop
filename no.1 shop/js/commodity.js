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
let aq = $(".style ul:nth-of-type(-n+2) li")
let aw = $(".style ul:nth-of-type(-n+2) li div")
aq.each(function (index){
    $(this).click(function () {
        $(this).addClass("checked").siblings().removeClass("checked")
        aw.css("display","none")
        aw.eq(index).css("display","block")
    })
})
let ae = $(".increase div input")
let ar = $(".increase div button:first-of-type")
let at = $(".increase div button:last-of-type")
ar.click(function () {
    x =  Number(ae.val())
    ae.val(x + 1 )
})
at.click(function () {
    x =  Number(ae.val())
    if(x == 1){
        ae.val(1)
    }
    else {
        ae.val(x - 1)
    }
})
let ba = $(".recommend-img div input")
let bb = $(".result p span")
let bc = $(".result input")
ba.each(function () {


    ba.eq(0).click(function () {
        if ($(this).is(':checked')){
            if (ba.eq(1).is(':checked')){
                if (ba.eq(2).is(':checked')){
                    x = (76 + 1890 + 232)* Number(bc.val())
                    bb.text(x)
                }
                else {
                    x = (76 + 1890) * Number(bc.val())
                    bb.text(x)
                }
            }
            else {
                x = (76 ) * Number(bc.val())
                bb.text(x)
            }
        }
        else{
            if (ba.eq(1).is(':checked')){
                if (ba.eq(2).is(':checked')){
                    x = (1890 + 232)* Number(bc.val())
                    bb.text(x)
                }
                else {
                    x = (1890) * Number(bc.val())
                    bb.text(x)
                }
            }
            else {
                x = 0
            bb.text(x)
        }
        }
    })


    ba.eq(1).click(function () {
        if ($(this).is(':checked')){
            if (ba.eq(0).is(':checked')){
                if (ba.eq(2).is(':checked')){
                    x = (76 + 1890 + 232)* Number(bc.val())
                    bb.text(x)
                }
                else {
                    x = (76 + 1890) * Number(bc.val())
                    bb.text(x)
                }
            }
            else {
                x = (1890 ) * Number(bc.val())
                bb.text(x)
            }
        }
        else{
            if (ba.eq(0).is(':checked')){
                if (ba.eq(2).is(':checked')){
                    x = (76 + 232)* Number(bc.val())
                    bb.text(x)
                }
                else {
                    x = (232) * Number(bc.val())
                    bb.text(x)
                }
            }
            else {
                x = 0
                bb.text(x)
            }
        }
    })



    ba.eq(2).click(function () {
        if ($(this).is(':checked')){
            if (ba.eq(0).is(':checked')){
                if (ba.eq(1).is(':checked')){
                    x = (76 + 1890 + 232)* Number(bc.val())
                    bb.text(x)
                }
                else {
                    x = (76 + 231) * Number(bc.val())
                    bb.text(x)
                }
            }
            else {
                x = (232 ) * Number(bc.val())
                bb.text(x)
            }
        }
        else{
            if (ba.eq(0).is(':checked')){
                if (ba.eq(1).is(':checked')){
                    x = (76 + 1890)* Number(bc.val())
                    bb.text(x)
                }
                else {
                    x = (76) * Number(bc.val())
                    bb.text(x)
                }
            }
            else {
                x = 0
                bb.text(x)
            }
        }
    })
})
let qw = $(".magnifying-l")
let qe = $(".content>div:first-of-type a ")
let we = $(".magnifying")
let wr = $(".magnifying img")
qe.mouseover(function (e) {
    qr = e.pageX
    qt = e.pageY
    qw.css("display","block")
    if(qr <= 402.5){
        qr = 402.5
    }
    if (qt <= 320){
        qt = 320
    }
    if (qr >= 692.5){
        qr = 692.5
    }
    if(qt >= 610){
        qt = 610
    }
    qw.css({
        left : qr - 50 -352.5 + "px",
        top  : qt - 50 - 270 + "px"
    })
    wr.css("display","block")
    wr.css({
        left : -((qr - 50 -352.5) * 4 )+ "px",
        top :   -((qt - 50 - 270) * 4 )+ "px"
    })
})
qe.mouseout(function (e) {
    qw.css("display","none")
    wr.css("display","none")
})


