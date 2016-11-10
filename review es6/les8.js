/*
* @Author: Administrator
* @Date:   2016-10-18 11:09:19
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-19 11:29:03
*/

'use strict';
const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
console.log(foo.prop);
