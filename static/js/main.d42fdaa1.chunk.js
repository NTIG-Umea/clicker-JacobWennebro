(this.webpackJsonpclicker=this.webpackJsonpclicker||[]).push([[0],{20:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var c=s(1),r=s.n(c),i=s(13),a=s.n(i),n=s(2),l=s(3),o=s(5),u=s(4),p=s(14),h=s(7),d=s(0),j=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{onClick:this.props.onClick,className:"burger",children:[Object(d.jsx)("div",{className:"burger__bun top burger-item"}),this.props.upgrades.reverse().map((function(e){return Object(d.jsx)("div",{className:"burger__".concat(e," burger-item")},"".concat(e,"-").concat(Math.random()))})),Object(d.jsx)("div",{className:"burger__cheese burger-item"}),Object(d.jsx)("div",{className:"burger__patty burger-item"}),Object(d.jsx)("div",{className:"burger__bun bottom burger-item"})]})}}]),s}(c.Component),b=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return this.props.amount<=0?Object(d.jsx)(d.Fragment,{}):Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:this.props.amount}),Object(d.jsx)("li",{children:this.props.item}),Object(d.jsxs)("li",{children:["$",this.props.price*this.props.amount]})]})}}]),s}(c.Component),m=s(12),O=new(function(){function e(){Object(n.a)(this,e),this.structure={clicks:0,booster:0,xp:0,level:1,money:0,upgrades:[]},localStorage.getItem("bc-save")||localStorage.setItem("bc-save",JSON.stringify(this.structure))}return Object(l.a)(e,[{key:"get",value:function(){return JSON.parse(localStorage.getItem("bc-save")||"{}")}},{key:"set",value:function(e){localStorage.setItem("bc-save",JSON.stringify(Object(m.a)(Object(m.a)({},this.get()),e)))}}]),e}()),g=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(n.a)(this,s),(c=t.call(this,e)).level=c.props.level,c}return Object(l.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{"data-xp":this.props.xp,className:"level-bar",children:Object(d.jsx)("div",{style:{width:Math.round(this.props.xp)/(100*this.props.level)/this.props.level*100+"%"},className:"level-bar__progress",children:Object(d.jsxs)("span",{children:["Level ",this.props.level]})})})}}]),s}(c.Component),v=s(11),x=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(e){var c;return Object(n.a)(this,s),(c=t.call(this,e)).Purchase=c.Purchase.bind(Object(h.a)(c)),c}return Object(l.a)(s,[{key:"Purchase",value:function(){this.props.price>this.props.money?alert("You cannot afford "+this.props.title):(this.props.updateState({upgrades:[].concat(Object(v.a)(this.props.upgrades),[this.props.upgradeId]),money:this.props.money-this.props.price}),O.set({upgrades:[].concat(Object(v.a)(this.props.upgrades),[this.props.upgradeId]),money:this.props.money-this.props.price}),console.log("Purchased item "+this.props.title))}},{key:"render",value:function(){return Object(d.jsxs)("div",{onClick:this.Purchase,className:"upgrade",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:this.props.title}),Object(d.jsx)("p",{children:this.props.short})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("span",{children:["$",this.props.price]})})]})}}]),s}(c.Component),f=s(6),y=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(e){var c;Object(n.a)(this,s),(c=t.call(this,e)).BurgerClick=c.BurgerClick.bind(Object(h.a)(c));var r=O.get();return c.state={clicks:r.clicks,cps:0,xp:r.xp,level:r.level,money:r.money,upgrades:r.upgrades},setInterval((function(){c.setState({cps:0});for(var e=c.state.upgrades.filter((function(e){return"cheese"===e})).length,t=0;t<e;)c.BurgerClick(),t++}),1e3),c}return Object(l.a)(s,[{key:"SpawnClickText",value:function(e,t,s){var c,r=document.createElement("span");r.innerHTML=e,r.style.position="absolute",r.style.top=s-(1e3*Math.random()-500)+"px",r.style.left=t+(500*Math.random()-700)+"px",r.classList.add("temp-click-text"),null===(c=document.querySelector(".content"))||void 0===c||c.appendChild(r),setTimeout((function(){r.remove()}),4e3)}},{key:"getBurgerHeight",value:function(e){var t,s=7.1,c=Object(p.a)(e);try{for(c.s();!(t=c.n()).done;){switch(t.value){case"patty":s+=1;break;case"cheese":case"lettuce":s+=.1}}}catch(r){c.e(r)}finally{c.f()}return s}},{key:"upgradesToPrice",value:function(e){var t=0;return t+=e.filter((function(e){return"patty"===e})).length*f.patty.price,t+=e.filter((function(e){return"cheese"===e})).length*f.cheese.price,t+=e.filter((function(e){return"lettuce"===e})).length*f.lettuce.price}},{key:"BurgerClick",value:function(){if(Math.round(this.state.xp)/(100*this.state.level)>=this.state.level)O.set({level:this.state.level+1,xp:0}),this.setState({level:this.state.level+1,xp:0,clicks:this.state.clicks+1,cps:this.state.cps+1});else{var e=Number((1*Math.random()).toFixed(2).substr(0,4))*(2*this.state.upgrades.filter((function(e){return"patty"===e})).length||1);this.setState({clicks:this.state.clicks+1,xp:this.state.xp+e,cps:this.state.cps+1}),this.SpawnClickText("+".concat(Math.round(e)," XP"),200,200),O.set({clicks:this.state.clicks,xp:this.state.xp})}(this.state.clicks+1)/10%1===0&&(this.setState({money:this.state.money+1}),O.set({money:this.state.money}))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"layout",children:[Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{id:"title",className:"nobold",children:"Burger Clicker\u2122"})}),Object(d.jsxs)("div",{className:"receipt",children:[Object(d.jsx)("h1",{children:"Cheese Burger"}),Object(d.jsxs)("h3",{children:[this.state.cps," clicks p/s | Height ",Math.round(this.getBurgerHeight(this.state.upgrades))," cm"]}),Object(d.jsxs)("div",{className:"receipt__prices",children:[Object(d.jsx)(b,{item:"Patty",price:5,amount:1}),Object(d.jsx)(b,{item:"Cheese",price:2,amount:1}),Object(d.jsxs)("ul",{className:"receipt__spacer",children:[Object(d.jsx)("li",{children:Object(d.jsx)("p",{children:"Extras"})}),Object(d.jsx)("li",{}),Object(d.jsx)("li",{})]}),Object(d.jsx)(b,{item:"Patty",price:f.patty.price,amount:this.state.upgrades.filter((function(e){return"patty"===e})).length}),Object(d.jsx)(b,{item:"Cheese",price:f.cheese.price,amount:this.state.upgrades.filter((function(e){return"cheese"===e})).length}),Object(d.jsx)(b,{item:"Lettuce",price:f.lettuce.price,amount:this.state.upgrades.filter((function(e){return"lettuce"===e})).length}),Object(d.jsxs)("h3",{id:"totalPrice",children:["Total $",this.upgradesToPrice(this.state.upgrades)+7]})]}),Object(d.jsx)("span",{id:"barcode",children:"BURGER CLICKER"})]}),Object(d.jsx)("div",{className:"bank",children:Object(d.jsxs)("p",{children:["Balance: $",this.state.money]})})]}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)(j,{upgrades:this.state.upgrades,onClick:this.BurgerClick}),Object(d.jsx)(g,{level:this.state.level,xp:this.state.xp})]}),Object(d.jsxs)("div",{className:"upgrades",children:[Object(d.jsx)("h1",{className:"nobold",children:"Upgrades menu"}),Object(d.jsxs)("div",{className:"upgrades__container",children:[Object(d.jsx)(x,{title:"Patty",upgradeId:"patty",short:"Doubles the experience points given for every click.",price:5,updateState:function(t){return e.setState(t)},upgrades:this.state.upgrades,money:this.state.money}),Object(d.jsx)(x,{title:"Cheese",upgradeId:"cheese",short:"Get one additional click per second for every slice of this melty goodness.",price:2,updateState:function(t){return e.setState(t)},upgrades:this.state.upgrades,money:this.state.money}),Object(d.jsx)(x,{title:"Lettuce",upgradeId:"lettuce",short:"It may be gross, but this increases the chance of fry rain!",price:3,updateState:function(t){return e.setState(t)},upgrades:this.state.upgrades,money:this.state.money})]})]})]})}}]),s}(c.Component),k=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(d.jsx)(y,{})}}]),s}(c.Component),C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),r(e),i(e),a(e)}))};s(20);a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),C()},6:function(e){e.exports=JSON.parse('{"patty":{"name":"Patty","price":5},"cheese":{"name":"Cheese","price":2},"lettuce":{"name":"Lettuce","price":3}}')}},[[21,1,2]]]);
//# sourceMappingURL=main.d42fdaa1.chunk.js.map