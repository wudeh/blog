(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{559:function(e,s,n){"use strict";n.r(s);var a=n(6),l=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"相同和不同之处"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相同和不同之处"}},[e._v("#")]),e._v(" 相同和不同之处")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("undefine")]),e._v("d和"),n("code",[e._v("null")]),e._v("在if语句中，都会被自动转为"),n("code",[e._v("false")]),e._v("，加!转换为"),n("code",[e._v("true")]),e._v("，相等运算符对于两者比较是相等的。")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("undefined == null\n// true\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("ul",[n("li",[e._v("用"),n("code",[e._v("typeof")]),e._v("判断出的结果"),n("code",[e._v("null")]),e._v("是"),n("code",[e._v("object")])])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("console.log(typeof undefined);  // undefined\nconsole.log(typeof null);   // object \n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("ul",[n("li",[n("code",[e._v("null")]),e._v('是一个表示"无"的对象，转为数值时为'),n("code",[e._v("0")]),e._v("；"),n("code",[e._v("undefined")]),e._v('是一个表示"无"的原始值，转为数值时为'),n("code",[e._v("NaN")]),e._v("。")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var a1= 5 + null;\nconsole.log(a1)  // 5\n\nvar a2= 5 + undefined;\nconsole.log(a2)  // NaN\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("ul",[n("li",[e._v("松散相等，严格不相等")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("null !== undefined  // true\n\nnull === undefined  // false\n\nnull == undefined  // true\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("h1",{attrs:{id:"实际会出现的场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实际会出现的场景"}},[e._v("#")]),e._v(" 实际会出现的场景")]),e._v(" "),n("h2",{attrs:{id:"null"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#null"}},[e._v("#")]),e._v(" null")]),e._v(" "),n("ul",[n("li",[e._v("（1） 利用document.getElementById(‘XXX’) 寻找一个"),n("code",[e._v("不存在")]),e._v("的元素，将返回null。")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("console.log(null == document.getElementById('notExistElement'))  // true\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("ul",[n("li",[e._v("（2） 作为对象"),n("code",[e._v("原型链")]),e._v("的"),n("code",[e._v("终点")]),e._v("。")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Object.getPrototypeOf(Object.prototype)  // null\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("ul",[n("li",[e._v("（3）需要释放变量的"),n("code",[e._v("内存")]),e._v("时，赋值为"),n("code",[e._v("null")])])]),e._v(" "),n("h2",{attrs:{id:"undefined"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#undefined"}},[e._v("#")]),e._v(" undefined")]),e._v(" "),n("ul",[n("li",[e._v("（1）声明了一个"),n("code",[e._v("变量")]),e._v("，但没有"),n("code",[e._v("赋值")]),e._v("，就等于undefined。")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var a\nconsole.log(a) // undefined\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("ul",[n("li",[e._v("（2) 函数定义了"),n("code",[e._v("形参")]),e._v("，但没有传递"),n("code",[e._v("实参")]),e._v("，该参数等于undefined。")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//函数定义了形参 a \nfunction f(a) {\n     console.log(a); // undefined \n}  \nf(); //未传递实参\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("ul",[n("li",[e._v("（3）访问对象上"),n("code",[e._v("不存在")]),e._v("的"),n("code",[e._v("属性")]),e._v("，该属性的值为undefined。")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var  a = new Object()\na.p // undefined\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("ul",[n("li",[e._v("（4）函数"),n("code",[e._v("没有返回值")]),e._v("时，默认返回undefined。")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var a = f()\na // undefined\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])])])}),[],!1,null,null,null);s.default=l.exports}}]);