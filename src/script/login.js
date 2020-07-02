$('.login1').click(function(){
    $('#login').css('display','block')
    $('#login2').css('display','none')
})
$('.login2').click(function(){
    $('#login2').css('display','none')
    $('#login').css('display','none')
})

$('.btn3').click(function(){
    if($(".login2txt").val()==""){
        alert("用户名不能为空");
        return;
    }
    if($("login2-text").val()==""){
        alert("密码不能为空");
        return;
    }
    $.ajax({
        type:'post',
        url:'../php/login.php',
        data:{
            "username": $(".login2txt").val(),
            "userpass": $(".login2-text").val()
        },
        success:function(data){
            if (data == 1){
                let count = 5;
                let myTimer = setInterval(()=>{
                    count--;
                    if(count==0){
                        window.clearInterval(myTimer);
                        location.href = './index.html'
                    }
                    $('#msg').css("color","green").html(`登录成功，${count}秒后，自动跳转到<a href='./index.html'>首页</a>`)
                },1000);
            }else if(data==0){
                $("#msg").css({ "color": "red" }).html("登录失败，用户名或者密码不正确");
            }else if(data == -1){
                $("#msg").html("该用户名未注册")
            }
        }
    })
    setCookie({
        key:'username',
        val:$('.login2txt').val(),
        days:7
    })
})