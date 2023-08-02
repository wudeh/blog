(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{600:function(s,a,e){"use strict";e.r(a);var n=e(6),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_5-种-observer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-种-observer"}},[s._v("#")]),s._v(" 5 种 Observer：")]),s._v(" "),e("h3",{attrs:{id:"intersectionobserver-监听元素可见性变化-常用来做元素显示的数据采集、图片的懒加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intersectionobserver-监听元素可见性变化-常用来做元素显示的数据采集、图片的懒加载"}},[s._v("#")]),s._v(" IntersectionObserver：监听元素可见性变化，常用来做元素显示的数据采集、图片的懒加载")]),s._v(" "),e("h3",{attrs:{id:"mutationobserver-监听元素属性和子节点变化-比如可以用来做去不掉的水印"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mutationobserver-监听元素属性和子节点变化-比如可以用来做去不掉的水印"}},[s._v("#")]),s._v(" MutationObserver：监听元素属性和子节点变化，比如可以用来做去不掉的水印")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("let canvas = document.createElement('canvas')\ncanvas.id = '__canvas'\ncanvas.width = '180' // 每个水印的宽高\ncanvas.height = '150'\nlet ctx = canvas.getContext('2d')\nctx.fillStyle = 'rgba(150, 150, 150, 0.5)'\nctx.rotate((25 * Math.PI) / 180) // 偏转的角度\nctx.fillText('originDu?', 30, 20)  // 绘制文本 绘制开始位置\n \nlet src = canvas.toDataURL('image/png')\n \n// 水印容器\nlet waterMaskDiv = document.createElement('div')\n \nwaterMaskDiv.style.position = 'fixed'\nwaterMaskDiv.style.zIndex = '-1'\nwaterMaskDiv.id = '__water-mark'\nwaterMaskDiv.style.top = '0'\nwaterMaskDiv.style.left = '0'\nwaterMaskDiv.style.height = '100%'\nwaterMaskDiv.style.width = '100%'\nwaterMaskDiv.style.pointerEvents = 'none'\nwaterMaskDiv.style.backgroundImage = 'URL(' + src + ')'\n// 水印节点插到body下 可以通过层级控制节点层次\ndocument.body.appendChild(waterMaskDiv)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 禁止修改水印节点\nlet targetNode = document.querySelector('#__water-mark')\nlet config = {\n\tchildList: true,\n\tattributes: true,\n\tcharacterData: true,\n\tsubtree: true,\n\tattributeOldValue: true,\n\tcharacterDataOldValue: true\n}\n \nconst mutationCallback = mutationList => {\n  for (let mutation of mutationList) {\n    let type = mutation.type\n    switch (type) {\n    case 'childList':\n        console.log('节点被删除或添加')\n        break\n\t  case 'attributes':\n\t\tconsole.log(`${mutation.attributeName}属性修改了`)\n        break\n    case 'subtree':\n        console.log('子树被修改')\n\t\tbreak\n\t  default:\n\t\tbreak\n    }\n  }\n}\n \n// 创建 MutationObserver 实例\nlet observer = new MutationObserver(mutationCallback)\n \n// 开始监控目标节点\nobserver.observe(document.body, config)\n \n// 停止监控\n// observer.disconnect()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br")])]),e("p",[s._v("在检测到修改的时候，可以对比被修改的元素的ID，如果是水印的ID，这时候可以删除水印div后重新执行第一步的插入操作，以达到避免水印被修改的目的")]),s._v(" "),e("h3",{attrs:{id:"resizeobserver-监听元素大小变化-window-addeventlistener-resize-callback-只能监听浏览器大小变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resizeobserver-监听元素大小变化-window-addeventlistener-resize-callback-只能监听浏览器大小变化"}},[s._v("#")]),s._v(" ResizeObserver：监听元素大小变化，"),e("code",[s._v('window.addEventListener("resize",callback)')]),s._v(" 只能监听浏览器大小变化")]),s._v(" "),e("p",[s._v("还有两个与元素无关的：")]),s._v(" "),e("h3",{attrs:{id:"performanceobserver-监听-performance-记录的行为-来上报数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#performanceobserver-监听-performance-记录的行为-来上报数据"}},[s._v("#")]),s._v(" PerformanceObserver：监听 performance 记录的行为，来上报数据")]),s._v(" "),e("h3",{attrs:{id:"reportingobserver-监听过时的-api、浏览器的一些干预行为的报告-可以让我们更全面的了解网页-app-的运行情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reportingobserver-监听过时的-api、浏览器的一些干预行为的报告-可以让我们更全面的了解网页-app-的运行情况"}},[s._v("#")]),s._v(" ReportingObserver：监听过时的 api、浏览器的一些干预行为的报告，可以让我们更全面的了解网页 app 的运行情况")]),s._v(" "),e("h2",{attrs:{id:"sendbeacon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sendbeacon"}},[s._v("#")]),s._v(" sendBeacon")]),s._v(" "),e("p",[s._v("上报方式是利用img标签的src属性发送请求，例如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("(new Image).src = `/haopv.gif?a=xx&b=xxx`\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("因为日志上报不需要响应处理，只需要把数据发过去就行。并且大部分接收日志的服务器地址与业务方可能不是一个部门，甚至可能不是一个公司，所以会涉及到跨域问题。使用img标签的src属性既可以把数据发送给服务端又不需要接收响应，同时解决了跨域问题，所以是目前比较受欢迎的日志上报实现方式。")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("日志上报并不是应用的主要功能逻辑，也就是说，日志上报是低优先级的，它不应该与其他高优先级操作（例如：获取关键资源、输入响应、运行动画等）去竞争网络与计算资源（通俗的说就是日志上报行为不应该影响业务逻辑，不应该占用业务计算资源）。但是这种单向请求又负责传递应用的错误与性能数据，所以我们必须要确保它会被交付到服务端。")])]),s._v(" "),e("li",[e("p",[s._v("我们的交付行为有可能会被插入到正在忙碌工作的事件循环中，从而抢占了其他高优先级的任务的资源，因为JS是单线程的。这有可能会损害用户体验。")])]),s._v(" "),e("li",[e("p",[s._v("也就是说，使用 sendBeacon 是因为确保日志数据会被交付的同时，尽可能地减少与其他关键操作的资源争用")])])]),s._v(" "),e("p",[s._v("sendBeacon 可用于记录在页面上停留的时间，日志上报等")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("监听页面在关闭或者刷新时 beforeunload 或者 页面正在被卸载前unload 触发；")])]),s._v(" "),e("li",[e("p",[s._v("Beacon API 用于将少量数据通过 post 请求发送到服务器；")])]),s._v(" "),e("li",[e("p",[s._v("Beacon 是非阻塞请求，不需要响应。")])])]),s._v(" "),e("p",[s._v("用法")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("navigator.sendBeacon(url, data);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[e("p",[s._v("url：表示 data 将要被发送到的网络地址；")])]),s._v(" "),e("li",[e("p",[s._v("data：将要发送的 ArrayBufferView 或 Blob, DOMString 或者 FormData 类型的数据。")])]),s._v(" "),e("li",[e("p",[s._v("返回值：当用户代理成功把数据加入传输队列时，sendBeacon() 方法将会返回 true，否则返回 false。")])])]),s._v(" "),e("p",[s._v("支持的类型：text/plain：发送普通字符串")]),s._v(" "),e("p",[s._v("目前在 Beacon 中最常用的形式：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("navigator.sendBeacon(url, JSON.stringify(data));\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);