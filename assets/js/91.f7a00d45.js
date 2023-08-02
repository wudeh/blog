(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{615:function(e,t,i){"use strict";i.r(t);var r=i(6),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("p",[e._v("React Fiber 是React框架中的一项重大改进，它主要为React的核心算法提供了新的实现方式，从而优化了React的性能和用户体验。")]),e._v(" "),i("p",[e._v("在传统的React中，所有渲染都是同步的，这意味着在渲染大量组件树的时候，可能会造成页面的卡顿和迟滞。为了解决这个问题，Fiber采用了异步的渲染方式，将渲染工作分解成多个较小的任务，可以在空闲时间和优先级高的情况下执行这些任务，从而实现了更灵活和更高效的页面渲染。")]),e._v(" "),i("p",[e._v("Fiber的架构设计有以下几个特点：")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Fiber是一种数据结构，它代表了组件树的一部分。Fiber节点代表一个组件，保存了组件的状态及其子节点等信息。")])]),e._v(" "),i("li",[i("p",[e._v("Fiber提供了一种新的协调算法，它通过比较前后两次渲染的差异，决定哪些组件需要更新、哪些需要插入、哪些需要移除。这样可以更加高效地更新UI界面，避免不必要的重新渲染。")])]),e._v(" "),i("li",[i("p",[e._v("Fiber采用了链表的数据结构，将渲染工作分解成多个较小的任务，并按照优先级进行排序。这样可以在空闲时间和优先级高的情况下执行这些任务，从而保证了UI的流畅性和响应性。")])])]),e._v(" "),i("p",[e._v("总之，Fiber的出现可以说是React的一次重大升级，它通过异步渲染和更高效的协调算法，使得React在性能和用户体验方面都有了大幅度的提高。同时，Fiber也为React的未来发展奠定了更加坚实的基础。")]),e._v(" "),i("p",[e._v("当用户操作或外部数据变化时，React会在内存中更新一个虚拟DOM树，然后通过对比前后两棵虚拟DOM树的差异来确定需要对哪些DOM节点进行增删改操作。React Fiber 正是为了优化这个过程而生的，因此可以从以下三个流程来解释 Fiber 的运行机制：1. 创建流程")]),e._v(" "),i("ul",[i("li",[e._v("创建 Fiber 节点：React Fiber 算法中，每个组件都有一个对应的 Fiber 节点。在组件挂载到页面上时，React 会创建该节点；")]),e._v(" "),i("li",[e._v("同步执行 initState()：在组件挂载时，React 同步地调用组件类中的 initState() 方法，进行组件状态的初始化；")]),e._v(" "),i("li",[e._v("同步执行 render()：React 同步地调用组件类中的 render() 方法，生成该组件对应的 Virtual DOM 树；")]),e._v(" "),i("li",[e._v("Fiber 构建：React 会遍历 Virtual DOM 树，将其中的组件逐个封装为 Fiber 节点，形成 Fiber 树，并通过链表来连接这些 Fiber 节点。")])]),e._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[e._v("更新流程")])]),e._v(" "),i("ul",[i("li",[e._v("构建更新队列：当组件发生更新时，React 会将该组件对应的 Fiber 节点标记为“脏节点”，并将这些节点构建成一个更新队列；")]),e._v(" "),i("li",[e._v("开始协调：React 启动协调阶段，对于更新队列中的每个“脏节点”，React Fiber 算法首先会根据该节点在 Fiber 树中的位置计算出一个优先级，并根据优先级将其插入到任务队列中；")]),e._v(" "),i("li",[e._v("进行任务：React Fiber 算法会按照优先级从任务队列中取出一个任务，这个任务通常是一颗子树的更新操作；")]),e._v(" "),i("li",[e._v("构建 Virtual DOM：按照从上到下、从左到右的顺序，React Fiber 算法会遍历这颗子树，并在遍历的过程中构建 Virtual DOM 树；")]),e._v(" "),i("li",[e._v("提交更新：当整个子树遍历完毕，Virtual DOM 树构建成功后，React Fiber 算法会将 Virtual DOM 树与旧的 Virtual DOM 树进行比较，并根据差异进行相应的页面更新。")])]),e._v(" "),i("ol",{attrs:{start:"3"}},[i("li",[e._v("卸载流程")])]),e._v(" "),i("ul",[i("li",[e._v("构建卸载队列：当某个组件被卸载时，React 会将该组件对应的 Fiber 节点从 Fiber 树中移除，同时构建一个卸载队列；")]),e._v(" "),i("li",[e._v("协调阶段：React 启动协调阶段，对于卸载队列中的每个节点，React Fiber 算法首先会计算其对应的优先级，并将其插入到任务队列中；")]),e._v(" "),i("li",[e._v("进行任务：React Fiber 算法会按照优先级从任务队列中取出一个任务，这个任务通常是一个子树的卸载操作；")]),e._v(" "),i("li",[e._v("卸载操作：在遍历子树的过程中，React Fiber 算法会调用组件的 componentWillUnmount() 方法，在子树遍历完成后，React Fiber 算法会从 Fiber 树中删除这些节点。")])])])}),[],!1,null,null,null);t.default=a.exports}}]);