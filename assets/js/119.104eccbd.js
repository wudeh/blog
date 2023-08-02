(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{643:function(v,_,e){"use strict";e.r(_);var o=e(6),t=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"什么是bfc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是bfc"}},[v._v("#")]),v._v(" 什么是BFC")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("Block Formatting Context")]),v._v("，中文叫块级格式上下文。")]),v._v(" "),e("li",[e("code",[v._v("W3C")]),v._v("官方解释："),e("code",[v._v("BFC")]),v._v("它决定了元素如何对其内容进行定位，以及与其它元素的关系和相互作用，当涉及到可视化布局时，"),e("code",[v._v("Block Formatting Context")]),v._v("提供了一个环境，HTML在这个环境中按照一定的规则进行布局。")]),v._v(" "),e("li",[v._v("简单来说就是，"),e("code",[v._v("BFC")]),v._v("是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局。"),e("code",[v._v("BFC")]),v._v("可以看做是一个CSS元素属性。")])]),v._v(" "),e("h2",{attrs:{id:"触发bfc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#触发bfc"}},[v._v("#")]),v._v(" 触发BFC")]),v._v(" "),e("ul",[e("li",[v._v("float的值不为none。")]),v._v(" "),e("li",[v._v("overflow的值不为visible。")]),v._v(" "),e("li",[v._v("position的值不为relative和static。")]),v._v(" "),e("li",[v._v("display的值为table-cell, table-caption, inline-block中的任何一个。")])]),v._v(" "),e("h2",{attrs:{id:"bfc的规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bfc的规则"}},[v._v("#")]),v._v(" BFC的规则")]),v._v(" "),e("ul",[e("li",[v._v("内部的"),e("code",[v._v("Box")]),v._v("会在垂直方向上一个接一个的放置")]),v._v(" "),e("li",[v._v("垂直方向上的距离由"),e("code",[v._v("margin")]),v._v("决定。（完整的说法是：属于同一个"),e("code",[v._v("BFC")]),v._v("的两个相邻"),e("code",[v._v("Box")]),v._v("的"),e("code",[v._v("margin")]),v._v("会发生重叠（塌陷），与方向无关。）")]),v._v(" "),e("li",[v._v("每个元素的左外边距与包含块的左边界相接触（从左向右），即使浮动元素也是如此。（这说明"),e("code",[v._v("BFC")]),v._v("中子元素不会超出他的包含块，而"),e("code",[v._v("position")]),v._v("为"),e("code",[v._v("absolute")]),v._v("的元素可以超出他的包含块边界）")]),v._v(" "),e("li",[e("code",[v._v("BFC")]),v._v("的区域不会与"),e("code",[v._v("float")]),v._v("的元素区域重叠")]),v._v(" "),e("li",[v._v("计算"),e("code",[v._v("BFC")]),v._v("的高度时，浮动子元素也参与计算")]),v._v(" "),e("li",[e("code",[v._v("BFC")]),v._v("就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然")])]),v._v(" "),e("h2",{attrs:{id:"用途"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[v._v("#")]),v._v(" 用途")]),v._v(" "),e("ul",[e("li",[v._v("清除浮动造成的父元素高度塌陷")]),v._v(" "),e("li",[e("code",[v._v("margin")]),v._v("塌陷：父元素有 "),e("code",[v._v("margin-top")]),v._v(", 子元素也有 "),e("code",[v._v("margin-top")]),v._v("，子元素的 "),e("code",[v._v("margin-top")]),v._v(" 失效，父元素的 "),e("code",[v._v("margin-top")]),v._v(" 将以二者中较大者为准")]),v._v(" "),e("li",[v._v("解决办法：父元素触发 "),e("code",[v._v("BFC")])]),v._v(" "),e("li",[e("code",[v._v("margin")]),v._v(" 合并：两个 "),e("code",[v._v("div")]),v._v(" 有相对外边距，实际边距将以二者中较大者为准")]),v._v(" "),e("li",[v._v("解决办法：给其中一个 "),e("code",[v._v("div")]),v._v(" 套上一个父元素，触发 "),e("code",[v._v("BFC")])]),v._v(" "),e("li",[v._v("自适应两栏布局，自适应三栏布局")])])])}),[],!1,null,null,null);_.default=t.exports}}]);