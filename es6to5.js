/*
* @Author: Administrator
* @Date:   2016-10-10 15:14:01
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-10 15:18:58
*/

var traceur = require('traceur');
var fs = require('fs');

// 将ES6脚本转为字符串
var contents = fs.readFileSync('es6.js').toString();
console.log(contents);
var result = traceur.compile(contents, {
  filename: 'es6.js',
  sourceMap: true,
  // 其他设置
  modules: 'commonjs'
});

if (result.error)
  throw result.error;

// result对象的js属性就是转换后的ES5代码
fs.writeFileSync('out.js', result.js);
// sourceMap属性对应map文件
fs.writeFileSync('out.js.map', result.sourceMap);
