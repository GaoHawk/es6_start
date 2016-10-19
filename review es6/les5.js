/*
* @Author: Administrator
* @Date:   2016-10-18 10:59:15
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-18 11:00:29
*/

'use strict';
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
f1();
