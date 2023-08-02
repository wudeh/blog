(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{627:function(t,e,a){"use strict";a.r(e);var _=a(6),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"大概流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大概流程"}},[t._v("#")]),t._v(" 大概流程")]),t._v(" "),a("ul",[a("li",[t._v("DNS 域名解析")]),t._v(" "),a("li",[t._v("TCP 三次握手")]),t._v(" "),a("li",[t._v("HTTP 请求")]),t._v(" "),a("li",[t._v("浏览器渲染页面")]),t._v(" "),a("li",[t._v("四次挥手")])]),t._v(" "),a("h2",{attrs:{id:"dns-域名解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-域名解析"}},[t._v("#")]),t._v(" DNS 域名解析")]),t._v(" "),a("p",[t._v("DNS的域名查找，在客户端和浏览器，本地DNS之间的查询方式是递归查询；在本地DNS服务器与根域及其子域之间的查询方式是迭代查询；")]),t._v(" "),a("ul",[a("li",[t._v("客户端输入 URL 后，会有一个递归查找的过程，从浏览器缓存中查找->本地的hosts文件查找->找本地DNS解析器缓存查找->本地DNS服务器查找，这个过程中任何一步找到了都会结束查找流程。")]),t._v(" "),a("li",[t._v("本地DNS服务器无法查询到，则根据本地DNS服务器设置的转发器进行查询。若未用转发模式，则迭代查找过程：根域名服务器 -> 顶级域名服务器 -> 权威域名服务器")]),t._v(" "),a("li",[t._v("例如输入 www.baidu.com, 过程为 本地域名服务器 => .(根域名服务器) => .com(com 顶级域名服务器) => baidu.com 权威域名服务器 => www.baidu.com 域名服务器")])]),t._v(" "),a("p",[t._v("查找过程中，有以下优化点：")]),t._v(" "),a("ul",[a("li",[t._v("DNS存在着多级缓存，从离浏览器的距离排序的话，有以下几种: 浏览器缓存，系统缓存，路由器缓存，IPS服务器缓存，根域名服务器缓存，顶级域名服务器缓存，主域名服务器缓存。")]),t._v(" "),a("li",[t._v("在域名和 IP 的映射过程中，给了应用基于域名做负载均衡的机会，可以是简单的负载均衡，也可以根据地址和运营商做全局的负载均衡。")]),t._v(" "),a("li",[t._v("前端的dns优化，可以在html页面头部写入dns 预解析，比如")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<meta http-equiv="x-dns-prefetch-control" content="on" />\n<link rel="dns-prefetch" href="http://bdimg.share.baidu.com" />\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"tcp连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp连接"}},[t._v("#")]),t._v(" TCP连接")]),t._v(" "),a("ul",[a("li",[t._v("首先判断缓存，命中强缓存就不用发起连接了，命中协商缓存或者没命中缓存就要开始发起连接了")])]),t._v(" "),a("h3",{attrs:{id:"三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[t._v("#")]),t._v(" 三次握手")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("第一次握手：建立连接。客户端发送连接请求报文段，将SYN位置为1，Sequence Number（序列号）为x；然后，客户端进入SYN_SEND状态，等待服务器的确认；")])]),t._v(" "),a("li",[a("p",[t._v("第二次握手：服务器收到SYN报文段。服务器收到客户端的SYN报文段，需要对这个SYN报文段进行确认，设置Acknowledgment Number为x+1(Sequence Number+1)；同时，自己还要发送SYN请求信息，将SYN位置为1，Sequence Number为y；服务器端将上述所有信息放到一个报文段（即SYN+ACK报文段）中，一并发送给客户端，此时服务器进入SYN_RECV状态；")])]),t._v(" "),a("li",[a("p",[t._v("第三次握手：客户端收到服务器的SYN+ACK报文段。然后将Acknowledgment Number设置为y+1，向服务器发送ACK报文段，这个报文段发送完毕以后，客户端和服务器端都进入ESTABLISHED状态，完成TCP三次握手。")])])]),t._v(" "),a("h3",{attrs:{id:"tls-握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tls-握手"}},[t._v("#")]),t._v(" TLS 握手")]),t._v(" "),a("p",[t._v("如果是 HTTPS 协议，还要进行 TLS 握手")]),t._v(" "),a("h2",{attrs:{id:"发送http请求-服务器处理请求-返回响应结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发送http请求-服务器处理请求-返回响应结果"}},[t._v("#")]),t._v(" 发送HTTP请求，服务器处理请求，返回响应结果")]),t._v(" "),a("p",[t._v("TCP连接建立后，浏览器就可以利用HTTP／HTTPS协议向服务器发送请求了。服务器接受到请求，就解析请求头，如果头部有缓存相关信息如if-none-match与if-modified-since，则验证缓存是否有效，若有效则返回状态码为304，若无效则重新返回资源，状态码为200.")]),t._v(" "),a("h2",{attrs:{id:"关闭tcp连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭tcp连接"}},[t._v("#")]),t._v(" 关闭TCP连接")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("第一次分手：主机1（可以使客户端，也可以是服务器端），设置Sequence Number和Acknowledgment Number，向主机2发送一个FIN报文段；此时，主机1进入FIN_WAIT_1状态；这表示主机1没有数据要发送给主机2了；")])]),t._v(" "),a("li",[a("p",[t._v('第二次分手：主机2收到了主机1发送的FIN报文段，向主机1回一个ACK报文段，Acknowledgment Number为Sequence Number加1；主机1进入FIN_WAIT_2状态；主机2告诉主机1，我"同意"你的关闭请求；')])]),t._v(" "),a("li",[a("p",[t._v("第三次分手：主机2向主机1发送FIN报文段，请求关闭连接，同时主机2进入LAST_ACK状态；")])]),t._v(" "),a("li",[a("p",[t._v("第四次分手：主机1收到主机2发送的FIN报文段，向主机2发送ACK报文段，然后主机1进入TIME_WAIT状态；主机2收到主机1的ACK报文段以后，就关闭连接；此时，主机1等待2MSL后依然没有收到回复，则证明Server端已正常关闭，那好，主机1也可以关闭连接了。")])])]),t._v(" "),a("h2",{attrs:{id:"浏览器渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染"}},[t._v("#")]),t._v(" 浏览器渲染")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("构建 DOM 树：浏览器将 HTML 解析成树形结构的 DOM 树，一般来说，这个过程发生在页面初次加载，或页面 JavaScript 修改了节点结构的时候。")])]),t._v(" "),a("li",[a("p",[t._v("构建渲染树：浏览器将 CSS 解析成树形结构的 CSSOM 树，再和 DOM 树合并成渲染树。")])]),t._v(" "),a("li",[a("p",[t._v("布局（Layout）：浏览器根据渲染树所体现的节点、各个节点的CSS定义以及它们的从属关系，计算出每个节点在屏幕中的位置。Web 页面中元素的布局是相对的，在页面元素位置、大小发生变化，往往会导致其他节点联动，需要重新计算布局，这时候的布局过程一般被称为回流（Reflow）。")])]),t._v(" "),a("li",[a("p",[t._v("绘制（Paint）：遍历渲染树，调用渲染器的 paint() 方法在屏幕上绘制出节点内容，本质上是一个像素填充的过程。这个过程也出现于回流或一些不影响布局的 CSS 修改引起的屏幕局部重画，这时候它被称为重绘（Repaint）。实际上，绘制过程是在多个层上完成的，这些层我们称为渲染层（RenderLayer）。")])]),t._v(" "),a("li",[a("p",[t._v("渲染层合成（Composite）：多个绘制后的渲染层按照恰当的重叠顺序进行合并，而后生成位图，最终通过显卡展示到屏幕上。")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);