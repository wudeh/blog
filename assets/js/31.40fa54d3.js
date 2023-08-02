(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{552:function(s,n,e){"use strict";e.r(n);var a=e(6),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"第一种"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一种"}},[s._v("#")]),s._v(" 第一种")]),s._v(" "),e("blockquote",[e("p",[s._v("图片距离浏览器视口顶部距离 <= 浏览器视口高度 + 页面滚动距离")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const imgs = document.getElementsByTagName('img');\n    function lazyLoad(imgs) {\n      console.log('触发了');\n      // 视口的高度；\n      const clientH = document.documentElement.clientHeight;\n      // 滚动的距离，这里的逻辑判断是为了做兼容性处理；\n      const clientT = document.documentElement.scrollTop || document.body.scrollTop;\n      for(let i = 0; i < imgs.length; i++) {\n        // 逻辑判断，如果视口高度+滚动距离 > 图片到浏览器顶部的距离就去加载；\n        // !imgs[i].src 是避免重复请求，可以把该条件取消试试：可以看到不加该条件的话往回滚动就会重复请求；\n        if(clientH + clientT > imgs[i].offsetTop && !imgs[i].src) {\n          // 使用data-xx的自定义属性可以通过dom元素的dataset.xx取得；\n          imgs[i].src = imgs[i].dataset.src;\n        }\n      }\n    };\n    // 一开始能够加载显示在视口中的图片；\n    lazyLoad(imgs);\n    // 设置节流函数\n    function throttle(fn, delay) {\n      let timer = null;\n      return () => {\n        if(timer) {\n          return;\n        };\n        timer = setTimeout(() => {\n          fn(imgs);\n          timer = null;\n        }, delay)\n      }\n    }\n    // 监听滚动事件，加载后面的图片；\n    window.onscroll = throttle(lazyLoad, 500);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br")])]),e("h2",{attrs:{id:"第二种"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二种"}},[s._v("#")]),s._v(" 第二种")]),s._v(" "),e("blockquote",[e("p",[e("code",[s._v("Element.getBoundingClientRect()")]),s._v(" 方法返回元素的大小及其相对于视口的位置。我们可以取得它的"),e("code",[s._v("top")]),s._v("值，它的"),e("code",[s._v("top")]),s._v("值就是元素左上角到视口顶部的距离。当"),e("code",[s._v("Element.getBoundingClientRect().top < 视口高度")]),s._v("时触发加载；")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    const imgs = document.getElementsByTagName('img');\n   // 判断元素是否出现在视口内\n   function isShow(el) {\n     // 视口高度\n     const clientH = window.innerHeight;\n     const bound = el.getBoundingClientRect();\n     // 判断元素左上角到视口顶部的距离是否小于视口高度\n     return bound.top < clientH;\n   };\n\n   // 加载图片\n   function showImg(el) {\n     if(!el.src) {\n       el.src = el.dataset.src;\n     }\n   }\n\n   // 懒加载\n   function lazyLoad() {\n     console.log('加载了');\n     [...imgs].forEach(el => {\n       if(isShow(el)) {\n         showImg(el);\n       }\n     })\n   };\n\n   lazyLoad();\n\n   // 节流函数\n   function throttle(fn, delay) {\n     let timer = null;\n     return () => {\n       if(timer) {\n         return;\n       };\n       timer = setTimeout(() => {\n         fn(imgs);\n         timer = null;\n       }, delay);\n     }\n   };\n\n   window.onscroll = throttle(lazyLoad, 500);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br")])]),e("h2",{attrs:{id:"第三种"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三种"}},[s._v("#")]),s._v(" 第三种")]),s._v(" "),e("blockquote",[e("p",[e("code",[s._v("IntersectionObserver")]),s._v("可以异步观察目标元素与其祖先元素或顶级文档视窗(viewport)交叉状态的方法。也就是说它可以帮助我们去判断一个元素是否出现在视口上。这里只介绍用到的两个属性：")])]),s._v(" "),e("blockquote",[e("p",[e("code",[s._v("IntersectionObserver.observe()")]),s._v("：使IntersectionObserver开始监听一个目标元素；")])]),s._v(" "),e("blockquote",[e("p",[e("code",[s._v("isIntersecting")]),s._v("属性：可以判断该元素是否出现在视口内；")])]),s._v(" "),e("blockquote",[e("p",[s._v("实现思路：根据上面介绍的那两个属性，我们可以遍历每个img元素，然后监听每一个元素，最后根据isIntersecting属性去判断元素是否出现在视口内，从而决定是否让它加载。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('      document.addEventListener("DOMContentLoaded", () => {\n        if ("IntersectionObserver" in window) {\n          const imgs = document.getElementsByTagName("img");\n          const imageObserve = new IntersectionObserver((entries) => {\n            entries.forEach((entry) => {\n              // 通过该属性判断元素是否出现在视口内\n              if (entry.isIntersecting) {\n                // entry.target能够取得那个dom元素\n                const data_src = ele.target.getAttribute(\'data-src\'); //这里基本和 Method1/Method2一样\n                ele.target.setAttribute(\'src\', data_src); // ele.target 是目标元素\n                // 解除监视\n                imageObserve.unobserve(img);\n              }\n            });\n          });\n          [...imgs].forEach((img) => {\n            // 开启监视每一个元素\n            imageObserve.observe(img);\n          });\n        } else {\n          alert("您的浏览器不支持IntersectionObserver！");\n        }\n      });\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("h2",{attrs:{id:"第四种"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第四种"}},[s._v("#")]),s._v(" 第四种")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("img")]),s._v(" 标签原生支持loading属性，可取值有：")]),s._v(" "),e("ul",[e("li",[s._v("eager：无论图片是否在可视区，都会直接加载图片")]),s._v(" "),e("li",[s._v("lazy：推迟图片的加载，当图片滚动到距离可视区域一定阈值（视浏览器的实现而定）的时候，再加载图片")]),s._v(" "),e("li",[s._v("auto：由浏览器自行决定")])])])])])}),[],!1,null,null,null);n.default=t.exports}}]);