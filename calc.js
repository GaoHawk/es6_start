/*
* @Author: Administrator
* @Date:   2016-10-10 15:04:27
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-10 15:05:04
*/


class Calc {
  constructor(){
    console.log('Calc constructor');
  }
  add(a, b){
    return a + b;
  }
}

var c = new Calc();
console.log(c.add(4,5));
