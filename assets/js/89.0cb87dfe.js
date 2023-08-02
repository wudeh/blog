(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{612:function(s,e,a){"use strict";a.r(e);var n=a(6),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写法"}},[s._v("#")]),s._v(" 写法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// Records\nconst myRecord = #{\n name: '01',\n  age: 23\n}\n\n// Tuple\nconst myTuple = #['1', '2', '3']\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("Record 和 Tuple 都只支持基本数据类型或 Record/Tuple 类型")]),s._v(" "),a("li",[s._v("Record 对象的键值只能是 string 类型，这一特性和 Object 保持一致，")]),s._v(" "),a("li",[s._v("注意它的使用只不过在 Object 或者 Array 前面加了个 #(注意不要有空格) 就自动识别成 Record 或 Tuple 了，在数据类型变量前面加一个能不能行呢，比如：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let iObj = {name:'sam'}\nconst rObj = #iObj // SyntaxError: unknown operate\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("直接报错")]),s._v(" "),a("h2",{attrs:{id:"只读不能直接改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#只读不能直接改"}},[s._v("#")]),s._v(" 只读不能直接改")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const myRecord = #{\n name: '01'\n}\n\nconst myTuple = #['1', '2']\n\nmyRecord['age'] = 23  // error\nmyTuple.push('3')  // error\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"可以用-判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可以用-判断"}},[s._v("#")]),s._v(" 可以用 === 判断")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const record1 = #{ name: '01' }\nconst record2 = #{ name: '01' }\nconst recordIsSame = record1 === record2   // true\n\nconst tuple1 = #[1]\nconst tuple2 = #[1]\nconst tupleIsSame = tuple1 === tuple2   // true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("键值对的排序不影响判断")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let obj1 = #{name:'sam',age:24}\nlet obj2 = #{age:24, name:'sam'}\nconsole.log(obj1 === obj2) // true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"支持的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持的方法"}},[s._v("#")]),s._v(" 支持的方法")]),s._v(" "),a("p",[s._v("扩展运算符，数组支持不可变方法，包括toSorted，toSpliced，toReversed, slice, with")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const myTuple = #[1, 2, 3];\nconst myRecord = #{ name: '01', age: 23 };\n\nconst newRecord = #{ ...myRecord, money: 0 } // #{ name: '01', age: 23, money: 0 }\nconst newTuple = #[ ...myTuple, 4, 5];   // #[1, 2, 3, 4, 5]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);