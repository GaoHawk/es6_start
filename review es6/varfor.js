/*
* @Author: Administrator
* @Date:   2016-10-18 10:49:32
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-18 10:50:49
*/

'use strict';
var a = [];
for (var i = 0; i < 10; i++) {
   a[i] = function(){
    console.log(i)
   }
}
var num = a[6]();
console.log(num);
