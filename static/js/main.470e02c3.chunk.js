(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(7),r=n.n(s),a=n(2),c=n(3),o=n(5),i=n(4),l=n(1),u=n.n(l),h=(n(12),n(0)),b=["1","2","3","4","5","6","7","8","9","10"],j=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isReversed:!1,sortBy:"",minLength:"1"},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByLength=function(){t.setState({sortBy:"length"})},t.sortAlphabetically=function(){t.setState({sortBy:"alphabet"})},t.reset=function(){t.setState({isReversed:!1,sortBy:"",minLength:"1"})},t.changeHandler=function(e){t.setState({minLength:e.target.value})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.goods,e=this.state,n=e.isReversed,s=e.sortBy,r=e.minLength,a=t.filter((function(t){return t.length>=+r}));return a.sort((function(t,e){switch(s){case"length":return t.length-e.length;case"alphabet":return t.localeCompare(e);default:return 0}})),n&&a.reverse(),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("select",{name:"minLength",className:"select",value:r,onChange:this.changeHandler,children:[Object(h.jsx)("option",{value:"",children:"Choose min length"}),b.map((function(t){return Object(h.jsx)("option",{value:t,children:t})}))]}),Object(h.jsx)("ul",{className:"goods",children:a.map((function(t){return Object(h.jsx)("li",{children:t},t)}))}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",className:"button",onClick:this.reverse,children:"Reverse"}),Object(h.jsx)("button",{type:"button",className:"button",onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",className:"button",onClick:this.reset,children:"Reset"}),Object(h.jsx)("button",{type:"button",className:"button",onClick:this.sortByLength,children:"Sort by length"})]})]})}}]),n}(u.a.Component),d=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isVisible:!1},t.showGoodsList=function(){t.setState({isVisible:!0})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.isVisible;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Goods List"}),t?Object(h.jsx)(j,{goods:d}):Object(h.jsx)("button",{type:"button",className:"button__start",onClick:this.showGoodsList,children:"Start"})]})}}]),n}(u.a.Component);r.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.470e02c3.chunk.js.map