(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{614:function(s,e,t){"use strict";t.r(e);var a=t(6),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"为什么-hooks-不能写在循环或者条件判断语句里"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么-hooks-不能写在循环或者条件判断语句里"}},[s._v("#")]),s._v(" 为什么 hooks 不能写在循环或者条件判断语句里？")]),s._v(" "),t("ul",[t("li",[s._v("hooks 为了在函数组件中引入状态，维护了一个有序表。这样每次执行才能保证状态能对应上。")]),s._v(" "),t("li",[s._v("比如第一次执行函数组件时，拿到状态 count（通过 setState，初始值为 0 ）和  isDone（通过 setState，初始值为 false），它们其实被保存到一个有序表中，它们的值会记录下来： [0, true] 。")]),s._v(" "),t("li",[s._v("第二次执行函数组件，setState 会 按顺序 从这个表中拿出 0 和 true，赋值给 count 和 isDone。")]),s._v(" "),t("li",[s._v("如果把 hook 写到判断条件下，导致某个 setState 不执行了，假设 count 的 setState 因为判断条件没有执行，结果是 isDone 拿到了 0，发生了错位。")]),s._v(" "),t("li",[s._v("函数本身不能保存状态，需要额外维护一个有序的表，在执行 setState 之类的 hook 时，将它们保存到这个表里。这要求每次函数组件的 hook 执行的位置相同，数量正确，否则会导致错位，不能拿到预期的状态值。")])]),s._v(" "),t("p",[s._v("从源码的角度解释why")]),s._v(" "),t("p",[s._v("首先当这样写时")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("  const [name,setName] = useState('杜皮')\n  const [address,setAddress] = useState('杭州')\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("每一个useState都会在当前组件中创建一个hook对象  ，并且这个对象中的next属性始终执行下一个useState的hook对象\n这些对象以一种类似链表的形式存在 Fiber.memoizedState 中\n而函数组件就是通过fiber这个数据结构来实现每次render后name address不会被useState重新初始化")]),s._v(" "),t("p",[s._v("正是因为hooks中是这样存储state的 所以只能在hooks的根作用域中使用useState，而不能在条件语句和循环中使用\n因为我们不能每次都保证条件或循环语句都会执行")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("if (something) {\n  const [state1] = useState(1)\n}\n\n// or\n\nfor (something) {\n  const [state2] = useState(2)\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("fiber")]),s._v(" "),t("p",[s._v("每一个组件都会有一个fiber对象，在fiber中主要关注memoizedState这个对象，它就是调用完useState后对应的存储state的对象")]),s._v(" "),t("p",[s._v("调用useState后设置在memoizedState上的对象长这样：（又叫Hook对象）")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("{\n  baseState,\n  next,  \n  baseUpdate,\n  queue,\n  memoizedState\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("这里面最需要关心的是memoizedState和next，memoizedState是用来记录这个useState应该返回的结果的，而next指向的是下一次useState对应的`Hook对象，即")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("hook1  ==>\tFiber.memoizedState\nstate1 === hook1.memoizedState\nhook1.next\t==>\thook2\nstate2\t==>\thook2.memoizedState\n....\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"常用的hooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的hooks"}},[s._v("#")]),s._v(" 常用的Hooks")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('useEffct使用：\n如果不传参数：相当于render之后就会执行\n传参数为空数组：相当于componentDidMount\n如果传数组：相当于componentDidUpdate\n如果里面返回：相当于componentWillUnmount\n会在组件卸载的时候执行清除操作。\neffect 在每次渲染的时候都会执行。\nReact 会在执行当前 effect 之前对上一个 effect 进行清除。\n \nuseLayoutEffect:\nuseLayoutEffect在浏览器渲染前执行\nuseEffect在浏览器渲染之后执行\n \n当父组件引入子组件以及在更新某一个值的状态的时候，往往会造成一些不必要的浪费，\n而useMemo和useCallback的出现就是为了减少这种浪费，提高组件的性能，\n不同点是：useMemo返回的是一个缓存的值，即memoized 值，而useCallback返回的是一个memoized 回调函数。\n \n \nuseCallback\n父组件更新子组件会渲染,针对方法不重复执行，包装函数返回函数；\n \nuseMemo:\nconst memoizedValue =useMemo(callback,array)\ncallback是一个函数用于处理逻辑\narray 控制useMemo重新执⾏行的数组，array改变时才会 重新执行useMemo\n不传数组，每次更新都会重新计算\n空数组，只会计算一次\n依赖对应的值，当对应的值发生变化时，才会重新计算(可以依赖另外一个 useMemo 返回的值)\n不能在useMemo⾥面写副作⽤逻辑处理，副作用的逻辑处理放在 useEffect内进行处理\n \n自定义hook\n自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook，\n自定义 Hook 是一种自然遵循 Hook 设计的约定，而并不是 React 的特性\n在我看来，自定义hook就是把一块业务逻辑单独拿出去写。\n \n const [counter, setCounter] = useState(0);\n const counterRef = useRef(counter);  // 可以保存上一次的变量\n \nuseRef 获取节点\nfunction App() {\n    const inputRef = useRef(null);\n \n    return <div>\n        <input type="text" ref={inputRef}/>\n        <button onClick={() => inputRef.current.focus()}>focus</button>\n    </div>\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br")])]),t("h3",{attrs:{id:"react事件机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react事件机制"}},[s._v("#")]),s._v(" React事件机制")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<div onClick={this.handleClick.bind(this)}>点我</div>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("React并不是将click事件绑定到了div的真实DOM上，而是在document处监听了所有的事件，当事件发生并且冒泡到document处的时候，React将事件内容封装并交由真正的处理函数运行。这样的方式不仅仅减少了内存的消耗，还能在组件挂在销毁时统一订阅和移除事件。")]),s._v(" "),t("p",[s._v("除此之外，冒泡到document上的事件也不是原生的浏览器事件，而是由react自己实现的合成事件。.因此如果不想要是事件冒泡的话应该调用event.preventDefault()方法，而不是调用event.stopProppagation()方法。")]),s._v(" "),t("h3",{attrs:{id:"受控组件和非受控组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#受控组件和非受控组件"}},[s._v("#")]),s._v(" 受控组件和非受控组件")]),s._v(" "),t("p",[s._v("受控组件：通过setState的形式控制输入的值及更新")]),s._v(" "),t("p",[s._v("非受控组件：通过dom的形式更新值，获取值通过ref的形式去获取")]),s._v(" "),t("h3",{attrs:{id:"react组件生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react组件生命周期"}},[s._v("#")]),s._v(" React组件生命周期")]),s._v(" "),t("ul",[t("li",[s._v("constructor:在构造函数中初始化props和state")]),s._v(" "),t("li",[s._v("componentWillMount:组件渲染之前执行，对state进行最后修改")]),s._v(" "),t("li",[s._v("render:渲染")]),s._v(" "),t("li",[s._v("componentDidMount: 组件渲染之后执行")]),s._v(" "),t("li",[s._v("componentWillReceiveProps:这个周期函数作用于特定的 prop 改变导致的 state 转换")]),s._v(" "),t("li",[s._v("shouldComponentUpdate:用来做性能优化，根据特定条件返回 true 或 false。如果你希望更新组件，请返回true 否则返回 false。默认情况下，它返回 false。")]),s._v(" "),t("li",[s._v("componentWillUpdate:数据在改变之前执行")]),s._v(" "),t("li",[s._v("componentDidUpdate:渲染发生后立即调用")]),s._v(" "),t("li",[s._v("componentWillUnmount:从 DOM 卸载组件后调用。用于清理内存空间")])]),s._v(" "),t("p",[s._v("react17 会删除以下三个生命周期\ncomponentWillMount，componentWillReceiveProps ， componentWillUpdate")]),s._v(" "),t("h3",{attrs:{id:"调用setstate之后发生了什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调用setstate之后发生了什么"}},[s._v("#")]),s._v(" 调用setState之后发生了什么")]),s._v(" "),t("p",[s._v("setState会进行状态更新")]),s._v(" "),t("p",[s._v("将传入的参数对象与组件当前状态合并，然后触发所谓的调和过程，经过调和过程，根据新的state,React元素会重新构建虚拟DOM，进行diff算法对比新旧虚拟DOM树的区别，进行视图更新，而不是全部渲染")]),s._v(" "),t("p",[s._v("setState 采用的任务队列机制，不会马上执行，而是加入队列，在下次事件循环是一次性执行")]),s._v(" "),t("h3",{attrs:{id:"为什么建议传递给setstate的参数是一个callback-回调函数-而不是一个对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么建议传递给setstate的参数是一个callback-回调函数-而不是一个对象"}},[s._v("#")]),s._v(" 为什么建议传递给setState的参数是一个callback（回调函数）而不是一个对象")]),s._v(" "),t("p",[s._v("this.props和this.state的更新可能是异步的，不能依赖他们的值去计算下一个state")]),s._v(" "),t("h3",{attrs:{id:"setstate第二个参数的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setstate第二个参数的作用"}},[s._v("#")]),s._v(" setState第二个参数的作用")]),s._v(" "),t("p",[s._v("该函数会在setState函数调用完成并且组件开始重渲染的时候被调用，可以用该函数来监听渲染是否完成")])])}),[],!1,null,null,null);e.default=n.exports}}]);