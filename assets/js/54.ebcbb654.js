(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{444:function(t,s,e){"use strict";e.r(s);var v=e(2),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("Boxx"),t._v(" "),e("h2",{attrs:{id:"servlet-单实例多线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#servlet-单实例多线程"}},[t._v("#")]),t._v(" Servlet(单实例多线程)")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("1.Servlet的生命周期")]),e("ol",[e("li",[t._v("构造方法")]),t._v(" "),e("li",[t._v("初始化方法init()")]),t._v(" "),e("li",[t._v("service方法(由容器帮我们调用,不建议重写)")]),t._v(" "),e("li",[e("strong",[t._v("doGet/doPost方法(需要我们来进行逻辑处理)")])]),t._v(" "),e("li",[t._v("销毁方法destory()")])])]),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("2. Servlet的四个范围及其局限性")]),e("blockquote",[e("p",[t._v("因为可以通过这四个对象setAttribute()传值。")])]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("pageContext")]),t._v("：第一范围,页面跳转立即失效")]),t._v(" "),e("li",[e("strong",[t._v("HttpServletRequest")]),t._v("：第二范围,重定向失效")]),t._v(" "),e("li",[e("strong",[t._v("HttpSession")]),t._v("：第三范围,默认有效期到或者浏览器关闭失效")]),t._v(" "),e("li",[e("strong",[t._v("ServletContext")]),t._v("：第四范围,只要tomcat开着一直有效")])])]),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("3. 两种跳转方式")]),e("ol",[e("li",[e("p",[e("u",[e("strong",[t._v("请求转发")])]),e("br"),t._v("\n跳转之后浏览器地址栏不发生改变；"),e("br"),t._v("\n跳转之前执行的是doGet/doPost，跳转之后还是执行的这个方法")])]),t._v(" "),e("li",[e("p",[e("strong",[e("u",[t._v("重定向")])]),e("br"),t._v("\n跳转之后浏览器地址栏发生改变；"),e("br"),t._v("\n跳转之后肯定执行doGet方法；"),e("br"),t._v("\nrequest第二范围失效(因为浏览器发送的不是同一个请求了)")])])])]),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("4. session保存信息及删除")]),e("ul",[e("li",[t._v("保存信息："),e("br"),e("code",[t._v('session.setAttribute("n",name);')]),e("br"),t._v('\nString name = (String)sessin.getAttribute("n");')]),t._v(" "),e("li",[t._v("删除信息："),e("br"),t._v('session.removeAttribute("n");'),e("br"),t._v(" "),e("code",[t._v("session.invalidate()")]),t._v("是把session内的所有属性都清除;")])])]),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("5. Cookie HttpSession两种会话机制比较")]),e("ul",[e("li",[e("em",[e("strong",[t._v("Cookie")])]),t._v(":"),e("br"),t._v("\n浏览器提供的会话信息,安全性较低；"),e("br"),t._v("\nCookie cookie = new Cookie(String,String)；"),e("br"),t._v("\ncookie仅支持字符串，默认不支持中文，是将信息保存到客户端本地")]),t._v(" "),e("li",[e("em",[e("strong",[t._v("session")])]),t._v(":"),e("br"),t._v("\n服务器提供的会话信息，安全性较高；"),e("br"),t._v("\nsession的信息当"),e("strong",[t._v("默认时间到期")]),t._v("(期间没有任何操作!!)或者"),e("strong",[t._v("关闭浏览器")]),t._v("或者"),e("strong",[t._v("调用invalidate()")]),t._v(" 之后失效")])]),t._v(" "),e("blockquote",[e("p",[t._v("不过现在一般都用基于客户端的"),e("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[e("u",[e("strong",[t._v("JWT")])]),e("OutboundLink")],1),t._v("，轻便安全高效")])])]),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("6. Cookie和Session之间有什么联系,如果有,请说出他们的联系")]),e("ol",[e("li",[e("strong",[t._v("session默认依靠cookie维持")]),t._v("，如果cookie被禁用，那么session会话机制失效")]),t._v(" "),e("li",[t._v("session是由servlet容器创建的"),e("br"),t._v("\n当用户getSession()时，web容器会先去cookie查找有没有这个session的id，如果没有，那么cookie就会分配一个就jsessionid并且保存在cookie中")])])]),e("h2",{attrs:{id:"偏后端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#偏后端"}},[t._v("#")]),t._v(" 偏后端")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("1. Servlet核心的API？")]),e("p",[t._v("Javax.servlet.Servlet")]),t._v(" "),e("p",[t._v("Javax.servlet.ServletConfig")]),t._v(" "),e("p",[t._v("Javax.servlet.http.HttpServlet")]),t._v(" "),e("p",[t._v("HttpServletRequest，HttpServletResponse")])]),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("2. Servlet/jsp中的对象的创建、实现和调用？")]),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("创建者")]),t._v(" "),e("th",[t._v("实现者")]),t._v(" "),e("th",[t._v("调用者")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Servlet")]),t._v(" "),e("td",[t._v("容器")]),t._v(" "),e("td",[e("u",[t._v("我们")])]),t._v(" "),e("td",[t._v("容器")])]),t._v(" "),e("tr",[e("td",[t._v("ServletConfig")]),t._v(" "),e("td",[t._v("容器")]),t._v(" "),e("td",[t._v("容器")]),t._v(" "),e("td",[e("u",[t._v("我们")])])]),t._v(" "),e("tr",[e("td",[t._v("Cookie")]),t._v(" "),e("td",[e("u",[t._v("我们")])]),t._v(" "),e("td",[t._v("容器")]),t._v(" "),e("td",[e("u",[t._v("我们")])])]),t._v(" "),e("tr",[e("td",[t._v("Session")]),t._v(" "),e("td",[t._v("容器")]),t._v(" "),e("td",[t._v("容器")]),t._v(" "),e("td",[e("u",[t._v("我们")])])])])])])],1)}),[],!1,null,null,null);s.default=_.exports}}]);