var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    effect : 'fade',
    fadeEffect: {
        crossFade: true,
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        },
  }) 

  $('.shangpins').click(function(){
    $('.jingpin').toggle();
    $('.phones').css('display','none')
    $('.paixu').css('display','none')
  })
  $('.phone').click(function(){
    $('.phones').toggle();
    $('.jingpin').css('display','none')
    $('.paixu').css('display','none')
  })
  $('.px').click(function(){
    $('.paixu').toggle();
    $('.jingpin').css('display','none')
    $('.phones').css('display','none')
  })


  var typeId = window.location.href.split('=')[1];
  $.get({
    url:'../php/getGoodsList.php',
    data:{
      typeId:typeId,
    },
    dataType:'json',
    success:function(data){
      console.log(data)
      let htmlStr ="";
      data.forEach(function(item,index,arr){
        htmlStr += 
        `
          <li>
            <a href="./goodsdetail.html?goodsId=${item['goodsId']}">
                <img src="${item['goodsImg']}" alt="">
                <h2>${item['goodsName']}</h2>
                <h3>${item['goodsPrice']}</h3>
            </a>
          </li>
        `
        $('.links-uls').html(htmlStr);
      })
        
    }
    
  })