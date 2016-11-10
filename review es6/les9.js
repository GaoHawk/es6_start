/*
* @Author: Administrator
* @Date:   2016-10-19 11:30:41
* @Last Modified by:   Administrator
* @Last Modified time: 2016-11-10 11:25:19
*/

'use strict';
function HTMLDecode(text){
   var temp = document.createElement("div");
   temp.innerHTML = text;
   var output = temp.innerText || temp.textContent;
   temp = null;
   console.log(output);
   return output;
}
HTMLDecode("&raquo;");

