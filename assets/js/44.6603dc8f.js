(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{568:function(s,a,e){"use strict";e.r(a);var n=e(6),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("ES6变量的解构赋值本质上是“模式匹配”,只要等号两边的模式相同，左边的变量就会被赋予匹配的右边的值，如果匹配不成功变量的值就等于undefined。")]),s._v(" "),e("h2",{attrs:{id:"数组的解构赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组的解构赋值"}},[s._v("#")]),s._v(" 数组的解构赋值")]),s._v(" "),e("p",[s._v("ES6中只要某种数据有Iterator接口（也就是可以循环迭代），都可以进行数组的解构赋值。")]),s._v(" "),e("ul",[e("li",[s._v("数组的解构")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var [a,b,c] = [1,2,3];\nvar [d,[e],...f] = [4,[5],6,7,8];\nconsole.log(a); //结果为1，b,c结果是2，3\nconsole.log(e,f) //e结果为5，f的结果是一个数组：[6,7,8]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("Set解构赋值")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("let [x,y] = new Set([1,2]);\nconsole.log(x,y);   //结果为1和2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("Generator函数解构赋值")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function* fun(){\n    let a = 0;\n    let b = 1;\n    while(true){\n        yield a;\n        [a,b] = [b,a+b];\n    }\n}\nlet [first,second,third,fourth,fifth,sixth] = fun();\nconsole.log(sixth); //结果为5\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("ul",[e("li",[s._v("默认值")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var [a=3,b=5] = [undefined,4];\nconsole.log(a,b); //结果为3和4\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"对象的解构赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象的解构赋值"}},[s._v("#")]),s._v(" 对象的解构赋值")]),s._v(" "),e("p",[s._v("数组的解构是按次序排列的，变量取值由位置决定的，而对象的属性是没有顺序的，变量必须与属性同名才能取到正确的值。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var {b,a} = {a:3,b:4}\nconsole.log(a,b);   //结果为3，4\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var {b:c,a:d} = {a:3,b:4};\nconsole.log(b,c,a,d)    // 分别是undefined,4,undefined,3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("对象解构赋值与数组解构赋值在申明的时候的一点区别：")]),s._v(" "),e("ul",[e("li",[s._v("数组")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("let a;\n[a] = [3]\nconsole.log(a); //结果为3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("对象")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("let a;\n{a} = {a:3}\nconsole.log(a); // 报错：SyntaxError\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("代码解读：JavaScript引擎会将[a]理解成一个数组，而将{a}理解成什么呢？对于{a}这个代码在JS中可能会存在两种解释，一种是它是一个表达式，表示含有a属性的一个对象；第二种它是一个语句(代码块)，为了消除这种歧义，js开发人员规定只要行首是大括号的，一律解析成代码块。解决上诉问题的代码如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("let a;\n({a} = {a:3})   //JS中括号中的都是表达式\nconsole.log(a); // 结果3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);