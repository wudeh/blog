(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{606:function(a,s,t){"use strict";t.r(s);var e=t(6),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"双线程模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双线程模型"}},[a._v("#")]),a._v(" 双线程模型")]),a._v(" "),t("p",[a._v("小程序的渲染层和逻辑层分别由2个线程管理：")]),a._v(" "),t("ul",[t("li",[a._v("渲染层： 界面渲染相关的任务全都在WebView里执行。一个小程序存在多个界面，所以渲染层存在多个WebView线程。")]),a._v(" "),t("li",[a._v("逻辑层：采用JsCore线程运行JS脚本。")])]),a._v(" "),t("h2",{attrs:{id:"双线程之间的通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双线程之间的通信"}},[a._v("#")]),a._v(" 双线程之间的通信")]),a._v(" "),t("p",[a._v("视图层和逻辑层通过系统层的WeixinJsBridge进行通信：逻辑层把数据变化通知到视图层，触发视图层页面更新，视图层把触发的事件通知到逻辑层进行业务处理。")]),a._v(" "),t("p",[a._v("逻辑层和渲染层的通信会由 Native （微信客户端）做中转，逻辑层发送网络请求也经由 Native 转发。通过把 WXML 转化为数据，通过 Native 进行转发，来实现逻辑层和渲染层的交互和通信。")]),a._v(" "),t("ul",[t("li",[a._v("在渲染层会把WNML转化成Js对象，Js对象会模拟DOM树")]),a._v(" "),t("li",[a._v("逻辑层更新数据的时候，通过setData方法将数据从逻辑层转发到Native,Native再转发到渲染层")]),a._v(" "),t("li",[a._v("这时候，比较两虚拟DOM树的差异，最后将差异应用到真实DOM树上，更新页面。")])]),a._v(" "),t("h2",{attrs:{id:"为什么使用双线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用双线程"}},[a._v("#")]),a._v(" 为什么使用双线程")]),a._v(" "),t("ul",[t("li",[a._v("如果开发者可以直接通过JS操作界面的DOM树，那么一些敏感数据就毫无安全性可言，故微信提供了一个沙箱的环境来运行开发者的JS代码，这个环境不能有任何的浏览器相关的接口，只能通过JS解释执行环境，类似于HTML5的ServiceWorker启动另一个线程来执行JS.")]),a._v(" "),t("li",[a._v("但由于小程序是多WebView的架构，所以每一个页面都是不同的WebView渲染显示，所以单独创建了一个线程去执行JS，也就是逻辑层，而界面渲染的任务都在WebView线程里执行（渲染层）。即双线程模型，将逻辑层与视图层进行分离，视图层和逻辑层之间只有数据的通信，可以防止开发者随意操作界面，更好的保证用户的数据安全。")]),a._v(" "),t("li",[a._v("小程序不希望开发者能直接操作DOM，因为有些涉及用户隐私的数据，小程序只希望展示给用户看，不希望开发者能够获取，如果直接用网页那一套，开发者是能获取用户隐私的。\n需要限制一些API的调用，比如不希望小程序能跳转到其他页面，这样偷懒不想开发小程序的开发者就会把小程序跳转到网页，会降低小程序生态的质量。那如果加一个API黑名单，调用这些API就无效，不也能解决问题吗？但这样做的话，需要一直去维护一个黑名单列表，因为说不准不时就更新一些新的“不安全”的API")])]),a._v(" "),t("p",[a._v("所以，基于以上几点，直接把JavaScript执行的逻辑层环境放到沙盒，一个纯JavaScript的执行环境，没有浏览器的概念，这样就没有DOM相关的API了，那小程序也得有页面啊，所以渲染层就单独开一个线程了。这就是双线程的由来。")]),a._v(" "),t("p",[a._v("缺点：")]),a._v(" "),t("ul",[t("li",[a._v("对于开发小程序的微信工程师，逻辑层和渲染层两个线程之间的通信肯定会遇到很多坑，但幸好这个都解决了，不是小程序开发者需要关心的")]),a._v(" "),t("li",[a._v("通信会有延迟，数据量少的话，还在可接受范围内")]),a._v(" "),t("li",[a._v("很多API都是异步的，需要改变编写习惯，把有前后逻辑关系的写在异步回调里。因为逻辑层和渲染层不是一个线程，通信有延迟，做同步的话逻辑层不就老是卡住了，所以很多接口都是异步的。")])]),a._v(" "),t("h2",{attrs:{id:"小程序的生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小程序的生命周期"}},[a._v("#")]),a._v(" 小程序的生命周期")]),a._v(" "),t("p",[a._v("界面线程有四大状态：")]),a._v(" "),t("ul",[t("li",[a._v("初始化状态：初始化界面线程所需要的工作，包括工作机制，基本和我们开发者没有关系，等初始化完毕就向“服务线程”发送初始化完毕信号，然后进入等待传回初始化数据状态。")]),a._v(" "),t("li",[a._v("首次渲染状态：收到“服务线程”发来的初始化数据后（就是 json和js中的data数据），就开始渲染小程序界面，渲染完毕后，发送“首次渲染完毕信号”给服务线程，并将页面展示给用户。")]),a._v(" "),t("li",[a._v("持续渲染状态：此时界面线程继续一直等待“服务线程”通过this.setdata（）函数发送来的界面数据，只要收到就重新局部渲染，也因此只要更新数据并发送信号，界面就自动更新。")]),a._v(" "),t("li",[a._v("结束状态：结束渲染。")])]),a._v(" "),t("p",[a._v("服务线程五大状态：")]),a._v(" "),t("ul",[t("li",[a._v("初始化状态：无需和其他模块交流，跟小程序开发也没多大关联，此阶段就是启动服务线程所需的基本功能，比如信号发送模块。系统的初始化工作完毕，就调用自定义的onload和onshow，\n然后等待界面线程的“界面线程初始化完成”信号。")])]),a._v(" "),t("p",[a._v("onload是只会首次渲染的时候执行一次，onshow是每次界面切换都会执行，简单理解，这就是唯一差别。")]),a._v(" "),t("ul",[t("li",[a._v("等待激活状态：接收到“界面线程初始化完成”信号后，将初始化数据发送给“界面线程”，等待界面线程完成初次渲染。")]),a._v(" "),t("li",[a._v("激活状态：收到界面线程发送来的“首次渲染完成”信号后，就进入激活状态既程序的正常运行状态，并调用自定义的onReady()函数。")])]),a._v(" "),t("p",[a._v("此状态下就可以通过 this.setData 函数发送界面数据给界面线程进行局部渲染，更新页面。")]),a._v(" "),t("ul",[t("li",[a._v("后台运行状态：如果界面进入后台，服务线程就进入后台运行状态，和激活状态是相同的，也可以通过setdata函数更新界面的。")])]),a._v(" "),t("h2",{attrs:{id:"组件系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件系统"}},[a._v("#")]),a._v(" 组件系统")]),a._v(" "),t("p",[a._v("小程序有自己的组件，这些基本组件就是基于Exparser 框架。Exparser 基于 WebComponents的ShadowDOM模型，但是不依赖浏览器的原生支持，而且可以在纯JS环境中运行。\nExparser内置在小程序基础库中，为小程序的各种组件提供基础的支持。小程序内的所有组件，包括内置组件和自定义组件，Exparser会维护整个页面的节点树相关信息，包括节点的熟悉、事件绑定等，相当于一个简化的Shadow DOM实现。")]),a._v(" "),t("h3",{attrs:{id:"原生组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原生组件"}},[a._v("#")]),a._v(" 原生组件")]),a._v(" "),t("p",[a._v("在内置组件中，有一些组件并不完全在Exparser的渲染体系下，而是由客户端原生参与组件的渲染。比如说Map组件。它渲染的层级比在WebView层渲染的普通组件要高。")]),a._v(" "),t("h2",{attrs:{id:"运行机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行机制"}},[a._v("#")]),a._v(" 运行机制")]),a._v(" "),t("h3",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[a._v("#")]),a._v(" 启动")]),a._v(" "),t("p",[a._v("热启动：假如用户已经打开某小程序，然后在一定时间内再次打开小程序，此时无需重新启动，只需将后台小程序切换到前台，这个过程就是热启动；\n冷启动：用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，即冷启动。")]),a._v(" "),t("h3",{attrs:{id:"销毁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#销毁"}},[a._v("#")]),a._v(" 销毁")]),a._v(" "),t("p",[a._v("只有当小程序进入后台一定时间（不知道是多久），或者系统资源占用过高，才会被真正的销毁。")]),a._v(" "),t("h2",{attrs:{id:"更新机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新机制"}},[a._v("#")]),a._v(" 更新机制")]),a._v(" "),t("p",[a._v("开发者在后台发布新版本之后，无法立刻影响到所有现网用户，但最差情况下，也在发布之后24小时之内下发新版本信息到用户。\n小程序每次冷启动时，都会检查是否有更新版本，如果发现有新版本，将会异步下载最新版本的代码包，并同时用客户端本地的包进行启动，即新版本的小程序需要等下一次冷启动才会应用上。\n所以如果想让用户使用最新版本的小程序，可以利用wx.getUpateManager做个检查更新的功能：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("checkNewVersion() {\n  const updateManager = wx.getUpdateManager()\n  updateManager.onCheckForUpdate(res => {\n    console.log('hasUpdate', res.hasUpadate) // 请求完新版本信息的回调\n    if (res.hasUpdate) {\n      updateManager.onUpdateReady(() => {\n        this.setData({\n          hasNewVersion: true\n        })\n      })\n    }\n  })\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);