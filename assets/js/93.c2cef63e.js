(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{616:function(n,s,e){"use strict";e.r(s);var a=e(6),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("SSE 全称 Server-sent Events，是 HTML 5 规范的一个组成部分，它主要由两部分组成：")]),n._v(" "),e("ul",[e("li",[n._v("第一部分是服务端和浏览器的通讯协议")]),n._v(" "),e("li",[n._v("第二部分是前端需要利用 EventSource 去监听返回数据")])]),n._v(" "),e("p",[n._v("Server-Sent Events API WebSockets API\n基于 HTTP 协议 基于 TCP 协议\n单工，只能服务端单向发送消息 全双工，可以同时发送和接收消息\n轻量级，使用简单 相对复杂\n内置断线重连和消息追踪的功能 不在协议范围内，需手动实现\n文本或使用 Base64 编码和 gzip 压缩的二进制消息 类型广泛\n支持自定义事件类型 不支持自定义事件类型\n连接数 HTTP/1.1 6 个，HTTP/2 可协商（默认 100） 连接数无限制")]),n._v(" "),e("h2",{attrs:{id:"浏览器-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器-api"}},[n._v("#")]),n._v(" 浏览器 API")]),n._v(" "),e("p",[n._v("浏览器端，可以使用 JavaScript 的 EventSource API 创建 EventSource 对象监听服务器发送的事件。一旦建立连接，服务器就可以使用 HTTP 响应的 'text/event-stream' 内容类型发送事件消息，浏览器则可以通过监听 EventSource 对象的 onmessage、onopen 和 onerror 事件来处理这些消息。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 建立连接\nconst eventSource = new EventSource('http_api_url', { withCredentials: true })\n\n// 关闭连接\neventSource.close()\n\neventSource.addEventListener('open', function(event) {\n  console.log('Connection opened')\n})\n\neventSource.addEventListener('message', function(event) {\n  console.log('Received message: ' + event.data);\n})\n\n// 监听自定义事件\neventSource.addEventListener('xxx', function(event) {\n  console.log('Received message: ' + event.data);\n})\n\neventSource.addEventListener('error', function(event) {\n  console.log('Error occurred: ' + event.event);\n})\n\neventSource.onopen = function(event) {\n  console.log('Connection opened')\n}\n\neventSource.onmessage = function(event) {\n  console.log('Received message: ' + event.data);\n}\n\neventSource.onerror = function(event) {\n  console.log('Error occurred: ' + event.event);\n})\n\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br")])]),e("p",[n._v("EventSource 对象有一个 readyState 属性值，具体含义如下")]),n._v(" "),e("ul",[e("li",[n._v("0 浏览器与服务端尚未建立连接或连接已被关闭")]),n._v(" "),e("li",[n._v("1 浏览器与服务端已成功连接，浏览器正在处理接收到的事件及数据")]),n._v(" "),e("li",[n._v("2 浏览器与服务端建立连接失败，客户端不再继续建立与服务端之间的连接")])]),n._v(" "),e("p",[n._v("事件：\nopen 事件：当成功连接到服务端时触发。\nmessage 事件：当接收到服务器发送的消息时触发。该事件对象的 data 属性包含了服务器发送的消息内容。\nerror 事件：当发生错误时触发。该事件对象的 event 属性包含了错误信息。\nclose 事件：关闭与服务端之间的连接")]),n._v(" "),e("h3",{attrs:{id:"重连时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重连时间"}},[n._v("#")]),n._v(" 重连时间")]),n._v(" "),e("p",[n._v("重连时间。整数值，单位 ms，如果与服务器的连接丢失，浏览器将等待指定时间，然后尝试重新连接。如果该字段不是整数值，会被忽略。")]),n._v(" "),e("p",[n._v("​ 当服务端没有指定浏览器的重连时间时，由浏览器自行决定每隔多久与服务端建立一次连接（一般为 30s）。")]),n._v(" "),e("p",[n._v("消息数据。数据内容只能以一个字符串的文本形式进行发送，如果需要发送一个对象时，需要将该对象以一个 JSON 格式的字符串的形式进行发送。在浏览器接收到该字符串后，再把它还原为一个 JSON 对象。")]),n._v(" "),e("h3",{attrs:{id:"兼容性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[n._v("#")]),n._v(" 兼容性")]),n._v(" "),e("p",[n._v("除 IE 之外的浏览器均已支持，小程序也不支持")]),n._v(" "),e("p",[n._v("判断浏览器是否支持")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("if(typeof(EventSource) !== “undefined”) {\n\t// 支持\n} else {\n\t// 不支持，使用 polyfill\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("h2",{attrs:{id:"服务端实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务端实现"}},[n._v("#")]),n._v(" 服务端实现")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const http = require('http')\nconst fs = require('fs')\n\nhttp.createServer((req, res) => {\n  const url = req.url\n  if (url === '/' || url === 'index.html') {\n    // 如果请求根路径，返回 index.html 文件\n    fs.readFile('index.html', (err, data) => {\n      if (err) {\n        res.writeHead(500)\n        res.end('Error loading')\n      } else {\n        res.writeHead(200, {'Content-Type': 'text/html'})\n        res.end(data)\n      }\n    })\n  } else if (url.includes('/sse')) {\n    // 如果请求 /events 路径，建立 SSE 连接\n    res.writeHead(200, {\n      'Content-Type': 'text/event-stream',\n      'Cache-Control': 'no-cache',\n      'Connection': 'keep-alive',\n      'Access-Control-Allow-Origin': '*', // 允许跨域\n    })\n\n    // 每隔 1 秒发送一条消息\n    let id = 0\n    const intervalId = setInterval(() => {\n      res.write(`event: customEvent\\n`)\n      res.write(`id: ${id}\\n`)\n      res.write(`retry: 30000\\n`)\n      const params = url.split('?')[1]\n      const data = { id, time: new Date().toISOString(), params }\n      res.write(`data: ${JSON.stringify(data)}\\n\\n`)\n      id++\n      if (id >= 10) {\n        clearInterval(intervalId)\n        res.end()\n      }\n    }, 1000)\n\n    // 当客户端关闭连接时停止发送消息\n    req.on('close', () => {\n      clearInterval(intervalId)\n      id = 0\n      res.end()\n    })\n  } else {\n    // 如果请求的路径无效，返回 404 状态码\n    res.writeHead(404)\n    res.end()\n  }\n}).listen(3000)\n\nconsole.log('Server listening on port 3000')\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br")])]),e("h2",{attrs:{id:"浏览器端实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器端实现"}},[n._v("#")]),n._v(" 浏览器端实现")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>SSE Demo</title>\n</head>\n<body>\n  <h1>SSE Demo</h1>\n  <button onclick="connectSSE()">建立 SSE 连接</button>\n  <button onclick="closeSSE()">断开 SSE 连接</button>\n  <br />\n  <br />\n  <div id="message"></div>\n\n  <script>\n    const messageElement = document.getElementById(\'message\')\n\n    let eventSource\n\n    // 建立 SSE 连接\n    const connectSSE = () => {\n      eventSource = new EventSource(\'http://127.0.0.1:3000/sse?content=xxx\')\n\n      // 监听消息事件\n      eventSource.addEventListener(\'customEvent\', (event) => {\n        const data = JSON.parse(event.data)\n        messageElement.innerHTML += `${data.id} --- ${data.time} --- params参数：${JSON.stringify(data.params)}` + \'<br />\'\n      })\n\n      eventSource.onopen = () => {\n        messageElement.innerHTML += `SSE 连接成功，状态${eventSource.readyState}<br />`\n      }\n\n      eventSource.onerror = () => {\n        messageElement.innerHTML += `SSE 连接错误，状态${eventSource.readyState}<br />`\n      }\n    }\n\n    // 断开 SSE 连接\n    const closeSSE = () => {\n      eventSource.close()\n      messageElement.innerHTML += `SSE 连接关闭，状态${eventSource.readyState}<br />`\n    }\n  <\/script>\n</body>\n</html>\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br")])]),e("p",[n._v("将上面的两份代码保存为 server.js 和 index.html，并在命令行中执行 node server.js 启动服务端，然后在浏览器中打开 http://localhost:3000 即可看到 SSE 效果。")])])}),[],!1,null,null,null);s.default=t.exports}}]);