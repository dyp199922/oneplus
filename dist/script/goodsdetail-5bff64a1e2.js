"use strict";var goodsId=window.location.href.split("=")[1];$.get({url:"../php/getGoodsInfo.php",data:{goodsId:goodsId},dataType:"json",success:function(n){console.log(n),$(".cases-topl h2").text(n.goodsName);var o="";o+='\n                    <h2><img src="'.concat(n.beiyong3,'" alt=""></h2>\n                    <ul>\n                        <li>\n                            <img src="').concat(n.beiyong4,'" alt="">\n                        </li>\n                        <li>\n                            <img src="').concat(n.beiyong5,'" alt="">\n                        </li>\n                        <li>\n                            <img src="').concat(n.beiyong6,'" alt="">\n                        </li>\n                        <li>\n                            <img src="').concat(n.beiyong7,'" alt="">\n                        </li>\n                    </ul>\n                    <p>查看图库</p>\n    '),$(".cases-centerl").html(o);var c="";c+="\n                    <h2>购买 ".concat(n.goodsName,"</h2>\n                    <h3>").concat(n.goodsPrice,"</h3>\n                 "),$(".t").html(c);var t="";t+="\n                  <li>".concat(n.goodsDesc,"</li>\n                 "),$(".t3").html(t);var a="";a+='\n                 <h4>选择版本型号</h4>\n                 <h5 class="h5bor">'.concat(n.beiyong1,"</h5>\n                 <h5>").concat(n.beiyong2,"</h5>\n                 "),$(".tbox1").html(a);var h="";h+="\n                        <h3>".concat(n.beiyong8,"</h3>\n                        <h4>").concat(n.beiyong11,"</h4>\n                     "),$(".tbox4mbox1").html(h);var i="";i+="\n                        <h3>".concat(n.beiyong9,"</h3>\n                        <h4>").concat(n.beiyong11,"</h4>\n                     "),$(".tbox4mbox2").html(i);var l="";l+="\n                        <h3>".concat(n.beiyong10,"</h3>\n                        <h4>").concat(n.beiyong11,"</h4>\n                     "),$(".tbox4mbox3").html(l)}});