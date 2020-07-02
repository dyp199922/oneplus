
var goodsId = window.location.href.split('=')[1];
$.get({
  url:'../php/getGoodsInfo.php',
  data:{
    goodsId:goodsId,
  },
  dataType:'json',
  success:function(data){
    console.log(data)
    $('.cases-topl h2').text(data.goodsName)
    let htmlStr = "";
    htmlStr += 
    `
                    <h2><img src="${data.beiyong3}" alt=""></h2>
                    <ul>
                        <li>
                            <img src="${data.beiyong4}" alt="">
                        </li>
                        <li>
                            <img src="${data.beiyong5}" alt="">
                        </li>
                        <li>
                            <img src="${data.beiyong6}" alt="">
                        </li>
                        <li>
                            <img src="${data.beiyong7}" alt="">
                        </li>
                    </ul>
                    <p>查看图库</p>
    `
    $('.cases-centerl').html(htmlStr);
    let htmlStr2 ="";
    htmlStr2 += 
                 `
                    <h2>购买 ${data.goodsName}</h2>
                    <h3>${data.goodsPrice}</h3>
                 `
    $('.t').html(htmlStr2);
    let htmlStr1 ="";
    htmlStr1 += 
                 `
                  <li>${data.goodsDesc}</li>
                 `
    $('.t3').html(htmlStr1);
    let htmlStr3 ="";
    htmlStr3 += 
                 `
                 <h4>选择版本型号</h4>
                 <h5 class="h5bor">${data.beiyong1}</h5>
                 <h5>${data.beiyong2}</h5>
                 `
    $('.tbox1').html(htmlStr3);
    let htmlStr4 ="";
    htmlStr4 += 
                     `
                        <h3>${data.beiyong8}</h3>
                        <h4>${data.beiyong11}</h4>
                     `
    $('.tbox4mbox1').html(htmlStr4);
    let htmlStr5 ="";
    htmlStr5 += 
                     `
                        <h3>${data.beiyong9}</h3>
                        <h4>${data.beiyong11}</h4>
                     `
    $('.tbox4mbox2').html(htmlStr5);
    let htmlStr6 ="";
    htmlStr6 += 
                     `
                        <h3>${data.beiyong10}</h3>
                        <h4>${data.beiyong11}</h4>
                     `
    $('.tbox4mbox3').html(htmlStr6);
  }
  
})

