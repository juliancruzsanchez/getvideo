var $ = require("jquery")
var code =`javascript:(function()%7Bdocument.PwnBkmkVer %3D 3%3Bfunction addScript(src) %7Bvar script %3D document.createElement("script")%3Bscript.type %3D "text%2Fjavascript"%3Bscript.src %3D src%3Bdocument.getElementsByTagName("head")%5B0%5D.appendChild(script)%3B%7DaddScript('https%3A%2F%2Fdeturl.com%2Fld.asp%3F' %2B 1 * new Date)%3BaddScript('https%3A%2F%2Fcode.jquery.com%2Fjquery-3.3.1.min.js')%3Bfunction geturl() %7Bopen(%24("nobr%3Aeq(1) a").attr("href"))%3B%24("div%23topToolBarDiv").css("visibility"%2C "hidden")%3B%7DsetTimeout(geturl%2C 3500)%7D)()`
setTimeout(function(){$(".yt").attr("src", code)}, 1000);
setTimeout(function(){$(".yt").attr("src", code)}, 1000);
