(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{560:function(s,n,a){"use strict";a.r(n);var t=a(6),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"为什么要用-settimeout-模拟-setinterval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用-settimeout-模拟-setinterval"}},[s._v("#")]),s._v(" 为什么要用 setTimeout 模拟 setInterval")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("setInterval")]),s._v(" 会在指定的时间把函数添加到事件队列，而不是在指定的时间执行代码，这时如果事件队列中前面的定时器如果由于前面的任务队列存在耗时的操作，导致前一次的定时器函数还未执行或者执行完毕，就会导致这次的定时器函数被跳过，不会添加到宏任务事件队列，导致执行时间不准确")]),s._v(" "),a("li",[s._v("如果 "),a("code",[s._v("setInterval")]),s._v(" 定时器的函数中存在耗时的操作，也会导致执行时间不准确，甚至可能出现同时间执行两次的操作")]),s._v(" "),a("li",[s._v("如果希望 "),a("code",[s._v("setInterval")]),s._v(" 的执行时间是一个变量，满足条件后改变这个时间变量，这时会发现 "),a("code",[s._v("setInterval")]),s._v(" 的执行时间还是最初的执行时间，不会改变；而 "),a("code",[s._v("setTimeout")]),s._v(" 不存在这个问题")])]),s._v(" "),a("h2",{attrs:{id:"开始模拟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始模拟"}},[s._v("#")]),s._v(" 开始模拟")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class SetInterval {\n tasks = [];\n\n // 添加定时\n add(name, callbabck, time = 0) {\n     if(!name || !callback || typeof callback != `function`) return;\n     this.tasks.push({\n         name,\n         callback,\n         time\n      })\n     this.run(name);\n }\n\n // 开始定时\n run(name) {\n     const _this = this;\n     function inner() {\n         const task = _this.tasks.find(item => item.name == name);\n         if(!task) return;\n         const timer = setTimeout(() => {\n             task.callback();\n             clearTimeout(timer)\n             inner()\n         }, task.time)\n     }\n     inner()\n }\n\n // 清除定时\n clear(name) {\n     const taskIndex = this.tasks.findIndex(item => item.name == name)\n     if(taskIndex != -1) {\n         this.tasks.splice(taskIndex, 1);\n     }\n }\n\n clearAll() {\n     this.tasks = []\n }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);