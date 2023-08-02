(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{567:function(n,s,e){"use strict";e.r(s);var a=e(6),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("ul",[e("li",[n._v("第一步：新建一个空对象")]),n._v(" "),e("li",[n._v("第二步：这个空对象的 "),e("code",[n._v("__proto__")]),n._v(" 指向构造函数的 "),e("code",[n._v("prototype")])]),n._v(" "),e("li",[n._v("第三步：把构造函数的 "),e("code",[n._v("this")]),n._v(" 指向空对象，并执行构造函数")]),n._v(" "),e("li",[n._v("第四步：把这个空对象 "),e("code",[n._v("return")]),n._v(" 出去")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// func是构造函数，...args是需要传给构造函数的参数\nfunction myNew(func, ...args) {\n  // 创建一个空对象，并且指定原型为func.prototype\n  var obj = Object.create(func.prototype);\n\n  // 也可以这么写\n  // var obj = {};\n  // obj.__proto__ = func.prototype;\n\n  // new构造函数时要执行函数，同时指定this\n  func.call(obj, ...args);\n  // 最后return这个对象\n  return obj;\n}\n\nfunction Test(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\nmyNew(Test, '小明', 18);\n// Chrome控制台会输出以下内容\n// Test {name: \"小明\", age: 18}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br")])]),e("blockquote",[e("p",[n._v("注意：如果在构造函数中 "),e("code",[n._v("return")]),n._v(" 的是对象，那么 "),e("code",[n._v("new")]),n._v(" 出来的就是 "),e("code",[n._v("return")]),n._v(" 的这个对象；如果 "),e("code",[n._v("return")]),n._v(" 的是基本类型，那么得到的还是 "),e("code",[n._v("new")]),n._v(" 出来的新对象")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function Test() {\n  this.name = 'jack';\n  this.age = 18;\n  return {\n    content: '我有freestyle'\n  }\n}\nnew Test();\n// Chrome控制台会输出以下内容\n// {content: \"我有freestyle\"}\n\nfunction Test() {\n  this.name = 'jack';\n  this.age = 18;\n  return '我有freestyle'\n}\nnew Test();\n// Chrome控制台会输出以下内容\n// Test {name: \"jack\", age: 18}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);