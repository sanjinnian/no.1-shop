let x = $("main div div form div:nth-of-type(1) input")
let y = $("main div div form div:nth-of-type(2) input")
let i = $("main div div form div:nth-of-type(3)")
let  j = $("main div div form button ")
x.blur(function () {
    z = x . val()
    if (x != /^[a-zA-Z0-9_-]{4,16}$/){
    i.text("用户名需要4到16位（字母，数字，下划线，减号）")
    }
})
y.blur(function () {
    z = y.val()
    if(y != /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/){
        i.text("密码最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符")
    }
})
j.click(function (){
    if(x != /^[a-zA-Z0-9_-]{4,16}$/ || y != /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/){
        i.text("用户名的长度不许在4-16之间且密码最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符")
    }
    return false
})