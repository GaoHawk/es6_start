/*
* @Author: Administrator
* @Date:   2016-10-13 14:35:28
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-14 11:53:13
*/

var package =`
<div class="mui-input-row mui-search">
  <input type="search" class="mui-input-clear" placeholder="">
</div>
<ul class="libaoul" id="libao_content">
<li><div class="lbyxicon fl"><a href="http://m.49you.com/wap/jianjie?game_id=532"><img src="http://img-home.49app.com./Uploads/2016-08/57b42f17b2ec0.png"></a></div><div class="lbinfo_div fl"><p class="lbyxname">《弑天刃》日常礼包</p><p class="lbyxinfo_p">10w绑定铜币*1，初级强化石*5，骑宠进阶丹*5，3级装备化符*2</p><div class="lbyxinfo_p2"><div class="jdtdi pr"><div style="width:20%;" class="jdtdiv"></div></div><span class="jdword">剩余20%</span></div></div><a href="javascript:void(0);" onclick="takeGift(416, this)" class="lbdl_a db fr no-tab">领取礼包</a></li>
<li><div class="lbyxicon fl"><a href="http://m.49you.com/wap/jianjie?game_id=137"><img src="http://img-home.49app.com./Uploads/2016-08/57a941694094e.png"></a></div><div class="lbinfo_div fl"><p class="lbyxname">《兰陵王》七夕鹊桥礼包</p><p class="lbyxinfo_p">鲜花99*1 万能钥匙*1 坐骑进阶丹*5 特级女儿红*5 级宝石袋*2 还</p><div class="lbyxinfo_p2"><div class="jdtdi pr"><div style="width:81%;" class="jdtdiv"></div></div><span class="jdword">剩余81%</span></div></div><a href="javascript:void(0);" onclick="takeGift(413, this)" class="lbdl_a db fr no-tab">领取礼包</a></li>
<li><div class="lbyxicon fl"><a href="http://m.49you.com/wap/jianjie?game_id=342"><img src="http://img-home.49app.com./Uploads/2016-08/57a9330b96657.png"></a></div><div class="lbinfo_div fl"><p class="lbyxname">《天魔》七夕礼包</p><p class="lbyxinfo_p">礼包内容： 铜钱*52000、荣耀令牌*30、喷香鸡腿*3、荡券*3、强</p><div class="lbyxinfo_p2"><div class="jdtdi pr"><div style="width:100%;" class="jdtdiv"></div></div><span class="jdword">剩余100%</span></div></div><a href="javascript:void(0);" onclick="takeGift(412, this)" class="lbdl_a db fr no-tab">领取礼包</a></li>
<li><div class="lbyxicon fl"><a href="http://m.49you.com/wap/jianjie?game_id=447"><img src="http://img-home.49app.com./Uploads/2016-08/57a591a5f3e17.png"></a></div><div class="lbinfo_div fl"><p class="lbyxname">《葫芦娃》银币礼包</p><p class="lbyxinfo_p">5W银币。5个灵芝</p><div class="lbyxinfo_p2"><div class="jdtdi pr"><div style="width:0%;" class="jdtdiv"></div></div><span class="jdword">剩余0%</span></div></div><a href="javascript:void(0);" onclick="takeGift(409, this)" class="lbdl_a db fr no-tab">领取礼包</a></li>
<li><div class="lbyxicon fl"><a href="http://m.49you.com/wap/jianjie?game_id=470"><img src="http://img-home.49app.com./Uploads/2016-08/57a590f445847.png"></a></div><div class="lbinfo_div fl"><p class="lbyxname">《御天邪神》新手礼包</p><p class="lbyxinfo_p">礼金*100、初级强化石*6、1级宝石袋*4、属性丹*3、1000绑铜卡*2</p><div class="lbyxinfo_p2"><div class="jdtdi pr"><div style="width:35%;" class="jdtdiv"></div></div><span class="jdword">剩余35%</span></div></div><a href="javascript:void(0);" onclick="takeGift(408, this)" class="lbdl_a db fr no-tab">领取礼包</a></li>
<li><div class="lbyxicon fl"><a href="http://m.49you.com/wap/jianjie?game_id=475"><img src="http://img-home.49app.com./Uploads/2016-08/57a4586c57589.png"></a></div><div class="lbinfo_div fl"><p class="lbyxname">《最佳阵容》七夕礼包</p><p class="lbyxinfo_p">礼包内容：60体力，10次快攻，770万欧元</p><div class="lbyxinfo_p2"><div class="jdtdi pr"><div style="width:93%;" class="jdtdiv"></div></div><span class="jdword">剩余93%</span></div></div><a href="javascript:void(0);" onclick="takeGift(406, this)" class="lbdl_a db fr no-tab">领取礼包</a></li>
<li><div class="lbyxicon fl"><a href="http://m.49you.com/wap/jianjie?game_id=345"><img src="http://img-home.49app.com./Uploads/2016-07/57848e91a8712.png"></a></div><div class="lbinfo_div fl"><p class="lbyxname">《屠龙在天》夏日礼包</p><p class="lbyxinfo_p">礼包内容：进阶石*50，麒麟血*50，黑铁矿*50
礼包数：2000</p><div class="lbyxinfo_p2"><div class="jdtdi pr"><div style="width:94%;" class="jdtdiv"></div></div><span class="jdword">剩余94%</span></div></div><a href="javascript:void(0);" onclick="takeGift(405, this)" class="lbdl_a db fr no-tab">领取礼包</a></li>
</ul>
<a href="javascript:void(0);" onclick="ajax_libao();" class="ckgd_a db no-tab" id="load_more" style="">查看更多</a>
`;
