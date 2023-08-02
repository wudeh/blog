(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{630:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"二者都是-http-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二者都是-http-请求"}},[s._v("#")]),s._v(" 二者都是 http 请求")]),s._v(" "),a("ul",[a("li",[a("ol",[a("li",[s._v("发送的数据数量")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("get中，只可以发送有限数量的数据，因为数据是在URL中发送的.\npost中，可以发送大量数据，因为数据是在正主题中(请求头)发送的.\n\n我们经常说get请求参数的大小存在限制，而 post 请求的参数大小是无限制的。\n实际HTTP协议从未规定GET/POST的请求长度限制是多少。\n对get请求参数的限制是来源与浏览器或web服务器，\n\n1.HTTP 协议未规定 GET 和 POST 的长度限制\n2.GET 的最大长度显示是因为浏览器和 web 服务器限制了 URI 的长度\n3.不同的浏览器和 WEB 服务器，限制的最大长度不一样\n4.要支持 IE，则最大长度为 2083byte，若只支持 Chrome，则最大长度 8182byte  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[a("ol",{attrs:{start:"2"}},[a("li",[s._v("安全性")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("get方法   发送的数据不受保护，因为数据在URl栏中公开，无疑增加漏洞和黑客攻击的风险.\npost方法  发送的数据是安全的，因为数据未在URl栏公开，还可以在其中使用多种编码技术，灵活具有弹性.   \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("ol",{attrs:{start:"3"}},[a("li",[s._v("加入书签中")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("get查询的结果可以加入到书签中，因为它以URl的形式存在，而post查询的结果无法加入书签中.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("ol",{attrs:{start:"4"}},[a("li",[s._v("编码")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("在表单中使用get方法时，数据类型中只接受ASCII字符.\n在表单提交时， post方法不绑定数据类型，并准许二进制和ASCII字符.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("5.可变大小")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("get   方法中的可变大小约为 2000个字符.\npost  方法最多准许8mb的可变大小.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("ol",{attrs:{start:"6"}},[a("li",[s._v("缓存")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("get   方法的数据可以缓存\npost  方法的数据无法缓存\nget 请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存。\npost 不同，post 做的一般是修改和删除的工作，所以必须与数据库交互，所以不能使用缓存。\n因此 get 请求适合于请求缓存。    \n缓存一般只适用于那些不会更新服务端数据的请求。\n一般 get 请求都是查找请求，不会对服务器资源数据造成修改，\n而 post 请求一般都会对服务器数据造成修改，\n所以，一般会对 get 请求进行缓存，很少会对 post 请求进行缓存。\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[a("ol",{attrs:{start:"7"}},[a("li",[s._v("主要作用")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("get  方法要用于获取信息         即常用来用户查询信息，明文不能用于机密信息提交.\npost 方法主要用于更新数据       即常用表单提交，甚至可以传输文件，没有传输限制，安全\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);