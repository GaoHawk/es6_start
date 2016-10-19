/*
* @Author: Administrator
* @Date:   2016-10-18 11:04:46
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-18 11:06:16
*/

'use strict';
function f() { console.log('I am outside!'); }
(function () {
  function f() { console.log('I am inside!'); }
  if (false) {
  }
  f();
}());
