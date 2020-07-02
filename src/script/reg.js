$('.regtxt').blur(function checkUser(cb){
    let reg = /^1\d{10}/;
    if(!reg.test($(".regtxt").val())){
        $("#userMsg").css({color:"red"});
        $("#userMsg").html("格式不正确，手机号码是1开头，一共11位数字");
        return;
    }
    $.ajax({
        type:'get',
        url:'../php/checkUser.php',
        data:{
            username:$('.regtxt').val()
        },
        success:function(data){
            if(data==0){
                $('#userMsg').html("该用户名可以使用").css("color","green")
            }else{
                $('#userMsg').html("用户名已被使用，请重新输入").css("color","red")
            }
        }
    })
})
$('.btn').click(function reg(){
    $.ajax({
        type:'post',
        url:'../php/regSave.php',
        data:{
            username:$('.regtxt').val(),
            userpass:$('.regpass').val()
        },
        success:function(data){
            if(data==1){
                $("#msg").html("注册成功，请  <a href='./login.html'>登录</a>").css("color","green");
            }else if(data==0){
                $("#msg").css({
                    color:"red"
                });
                $("#msg").html("注册失败，请重新注册");
            }
        }
    })
})
