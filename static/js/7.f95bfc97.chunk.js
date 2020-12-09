(this.webpackJsonp=this.webpackJsonp||[]).push([[7],{1200:function(e,t,n){"use strict";var a=n(0),r=n(13),o=n(54),l=n(79);t.a="web"===r.a.OS?function(e,t,n){var r=Object(o.g)();return Object(a.useCallback)((function(){n?window.open(e,n):r.push(e)}),[e,n])}:function(e,t,n){var r=Object(l.useNavigation)().navigate;return Object(a.useCallback)((function(){r(t)}),[t])}},1201:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(25),l=n(43),s=n(327),c=n(127),i=n(77);t.a=function(e){var t=Object(l.a)().accent;return r.a.createElement(c.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:o.g.small}},r.a.createElement(i.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:o.d?24:18,paddingBottom:o.g.tiny},e.style]},e.text),e.buttonText&&r.a.createElement(s.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:o.g.tiny}}))}},1205:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(53),l=n(58),s=n(5),c=n(425),i=n(25),u=n(1200),d=n(10),b=n.n(d),m=n(13),f=function(e){return r.a.createElement(s.a,b()({},e,{style:[{width:"100%",marginTop:e.noTopMargin?0:"web"===m.a.OS?i.g.large:i.g.normal},e.style]}))},p=n(97),g=n(60),h=n(43),y=n(127),x=function(e){var t=Object(a.useContext)(g.a).darkMode,n=Object(h.a)(),o=n.background,l=n.textLight;return r.a.createElement(p.d,b()({},e,{light:!t,iconColor:t?"white":void 0,style:{backgroundColor:o,borderWidth:1,borderColor:t?"white":l}}))},O=function(){var e=Object(a.useContext)(g.a).darkMode,t=Object(h.a)(),n=t.background,o=t.textLight,l=Object(u.a)("https://twitter.com/sushiswap","","_blank"),s=Object(u.a)("https://github.com/sushiswap","","_blank"),c=Object(u.a)("https://discord.gg/YS8xH7E","","_blank");return r.a.createElement(y.a,{style:{width:"100%",justifyContent:"center"}},r.a.createElement(x,{type:"github-alt",onPress:s}),r.a.createElement(x,{type:"twitter",onPress:l}),r.a.createElement(p.b,{type:"material-community",name:"discord",raised:!0,reverse:!0,color:n,reverseColor:e?"white":"#7289da",style:{backgroundColor:n},containerStyle:{borderWidth:1,borderColor:e?"white":o},onPress:c}))},v=n(77);t.a=function(){var e=Object(u.a)("https://dashboard.alchemyapi.io/signup?referral=429fb682-0d85-40ab-ad88-daf847cf7c63","","_blank");return r.a.createElement(f,{noTopMargin:!0},r.a.createElement(s.a,{style:{width:"100%",padding:i.g.normal,alignItems:"center"}},r.a.createElement(O,null),r.a.createElement(l.a,{onPress:e},r.a.createElement(o.a,{source:n(1220),style:{width:188,height:40,marginTop:i.g.tiny}})),r.a.createElement(v.a,{note:!0,style:{marginTop:i.g.tiny}},"Built with \u2764\ufe0f by SushiSwap (v",c.a.manifest.version,")")))}},1206:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(25),l=n(43),s=n(77);t.a=function(e){var t=Object(l.a)(),n=t.textDark,a=t.textLight,c=t.placeholder;return r.a.createElement(s.a,{style:{fontSize:o.d?28:20,marginBottom:o.g.normal,color:e.disabled?c:e.amount?n:a}},e.disabled?"N/A":e.amount?e.amount+" "+(e.suffix||""):"Fetching\u2026")}},1207:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(327);t.a=function(e){var t=e.symbol;return r.a.createElement(o.a,{title:"Insufficient "+(t||"Balance"),disabled:!0})}},1208:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(5),l=n(25),s=n(43);t.a=function(e){var t=Object(s.a)().border;return r.a.createElement(o.a,{style:{height:1,width:"100%",backgroundColor:t,marginTop:e.small?l.g.tiny:l.g.small,marginBottom:e.small?l.g.tiny:l.g.small+l.g.tiny}})}},1210:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(5),l=n(25),s=n(77);t.a=function(e){var t=e.error;return r.a.createElement(o.a,{style:{borderColor:"red",borderWidth:1,width:"100%",padding:l.g.tiny,marginTop:l.g.small}},t.code&&r.a.createElement(s.a,{fontWeight:"bold",style:{color:"red",fontSize:14}},"Error Code ",t.code),r.a.createElement(s.a,{note:!0,style:{color:"red",fontSize:14}},t.message))}},1211:function(e,t,n){"use strict";var a=n(10),r=n.n(a),o=n(11),l=n.n(o),s=n(0),c=n.n(s),i=n(5),u=n(25),d=n(60),b=n(43),m=n(416);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(s.useContext)(d.a).darkMode,n=Object(b.a)(),a=n.backgroundLight,o=n.borderDark,l=Object(m.a)().border;return c.a.createElement(i.a,r()({},e,{style:[p(p({},l({color:t?o:a})),{},{backgroundColor:a,marginTop:u.g.normal+u.g.small,padding:u.g.small+u.g.tiny}),e.style]}))}},1213:function(e,t,n){"use strict";var a=n(4),r=n.n(a),o=n(20),l=n.n(o),s=n(0),c=n.n(s),i=n(5),u=n(25),d=n(57),b=n(327);t.a=function(e){var t,n=Object(s.useContext)(d.b).approveToken,a=Object(s.useState)(!1),o=l()(a,2),m=o[0],f=o[1],p=Object(s.useCallback)((function(){var t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.token){a.next=19;break}return e.onError({}),f(!0),a.prev=3,a.next=6,r.a.awrap(n(e.token.address,e.spender));case 6:if(!(t=a.sent)){a.next=11;break}return a.next=10,r.a.awrap(t.wait());case 10:e.onSuccess();case 11:a.next=16;break;case 13:a.prev=13,a.t0=a.catch(3),e.onError(a.t0);case 16:return a.prev=16,f(!1),a.finish(16);case 19:case"end":return a.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?c.a.createElement(i.a,null):c.a.createElement(b.a,{title:"Approve "+((null==(t=e.token)?void 0:t.symbol)||""),onPress:p,loading:m,containerStyle:{marginBottom:u.g.tiny}})}},1215:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(327);t.a=function(){return r.a.createElement(o.a,{title:"Fetching\u2026",disabled:!0})}},1217:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(25),l=n(43),s=n(1200),c=n(127),i=n(77);t.a=function(e){var t=Object(l.a)(),n=t.textMedium,a=t.textLight,u=t.placeholder,d=Object(s.a)(e.url||"","","_blank"),b=e.disabled?"N/A":e.text?e.text+(e.suffix?" "+e.suffix:""):"Fetching\u2026";return r.a.createElement(c.a,{style:{justifyContent:"space-between",marginTop:4}},r.a.createElement(i.a,{note:!o.d,fontWeight:"bold",style:{color:e.disabled?u:n}},e.label),r.a.createElement(i.a,{note:!o.d,onPress:e.url?d:void 0,style:{color:e.disabled?u:e.text?n:a,textDecorationLine:e.url?"underline":"none"}},b))}},1218:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(5),l=n(25),s=n(43),c=n(416),i=n(327),u=n(77);t.a=function(e){var t=Object(s.a)().textLight,n=(0,Object(c.a)().border)({color:e.color}),a=e.color||t;return r.a.createElement(o.a,{style:[e.clear?{}:n,e.style]},r.a.createElement(u.a,{note:!0,style:{color:a}},e.text),e.buttonText&&e.onPressButton&&r.a.createElement(i.a,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:a},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:l.g.tiny}}))}},1219:function(e,t,n){"use strict";var a=n(11),r=n.n(a),o=n(0),l=n.n(o),s=n(13),c=n(5),i=n(33),u=n(25),d=n(43),b=n(416),m=n(22),f=n(327),p=n(1201),g=n(1223);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e){var t=Object(d.a)().accent,n=Object(o.useCallback)((function(){if(e.token){var t=e.token.balance;if(Object(m.h)(e.token)){var n=Object(m.n)(16);t=t.gt(n)?t.sub(n):i.ethers.constants.Zero}e.updateAmount(Object(m.d)(t,e.token.decimals))}}),[e.token,e.updateAmount]);return l.a.createElement(c.a,{style:{position:"absolute",right:12,bottom:"web"===s.a.OS?12:24}},l.a.createElement(f.a,{type:"clear",size:"small",color:t,title:e.maxButtonText||(u.d?"MAX "+e.token.symbol:"MAX"),fontWeight:"bold",onPress:n,buttonStyle:{paddingHorizontal:u.g.tiny}}))};t.a=function(e){var t,n,a=Object(b.a)().border,r=Object(o.useCallback)((function(t){if(e.token&&e.onAmountChanged)try{Object(m.l)(t,e.token.decimals),e.onAmountChanged(t)}catch(n){t.endsWith(".")&&t.indexOf(".")===t.length-1&&e.onAmountChanged(t)}}),[e.token,e.onAmountChanged]);return l.a.createElement(c.a,null,e.title&&l.a.createElement(p.a,{text:e.title}),l.a.createElement(c.a,null,l.a.createElement(g.a,{label:e.label,value:e.amount,onChangeText:r,placeholder:"0.0",keyboardType:"numeric",autoFocus:e.autoFocus||!1,inputStyle:{marginHorizontal:u.g.tiny},inputContainerStyle:{borderBottomWidth:0},labelStyle:{fontFamily:"light",height:e.label?"auto":0},containerStyle:y(y({},a()),{},{paddingHorizontal:u.g.tiny,paddingTop:15,paddingBottom:2})}),(null==(t=e.token)||null==(n=t.balance)?void 0:n.gt(0))&&!e.hideMaxButton&&l.a.createElement(x,{token:e.token,maxButtonText:e.maxButtonText,updateAmount:e.onAmountChanged})))}},1220:function(e,t,n){e.exports=n.p+"static/media/alchemy.5bf96491.png"},1223:function(e,t,n){"use strict";var a=n(10),r=n.n(a),o=n(0),l=n.n(o),s=n(13),c=n(97),i=n(43);t.a=function(e){var t=Object(i.a)(),n=t.textDark,a=t.textMedium,u=t.textLight,d=e.size||"normal",b=e.color||n,m="small"===d?16:"large"===d?24:20,f=Object(o.useCallback)((function(t){null==e.onChangeText||e.onChangeText(t),null==e.onError||e.onError("");var n=[];""!==t&&e.forbidden&&e.forbidden.forEach((function(e){t.match(e.regexp)&&n.push(e.error)})),""!==t&&e.allowed&&e.allowed.forEach((function(e){t.match(e.regexp)||n.push(e.error)})),n.length>0&&(null==e.onError||e.onError(n.join("\n")))}),[e.onChangeText,e.onError,e.forbidden,e.allowed]);return l.a.createElement(c.c,r()({},e,{inputStyle:[{fontSize:m,fontFamily:"regular",paddingBottom:4,color:b,marginTop:0,minHeight:32},"web"===s.a.OS?{outline:"none"}:{},e.inputStyle],labelStyle:[{color:a},e.labelStyle],placeholderTextColor:e.placeholderTextColor||u,errorStyle:e.onError?{height:0}:e.errorStyle,containerStyle:[{paddingHorizontal:0},e.containerStyle],onChangeText:f}))}},1244:function(e,t,n){"use strict";var a=n(4),r=n.n(a),o=n(20),l=n.n(o),s=n(0),c=n(33),i=n(142),u=n.n(i),d=n(63),b=n(57),m=n(22),f=n(98),p=function(){return{enter:Object(s.useCallback)((function(e,t){var n,a,o;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(m.g)("SushiBar",d.f,t),l.next=3,r.a.awrap(n.estimateGas.enter(e));case 3:return a=l.sent,l.next=6,r.a.awrap(n.enter(e,{gasLimit:a.mul(120).div(100)}));case 6:return o=l.sent,l.abrupt("return",Object(f.a)(o,"SushiBar.enter()",e.toString()));case 8:case"end":return l.stop()}}),null,null,null,Promise)}),[]),leave:Object(s.useCallback)((function(e,t){var n,a,o;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(m.g)("SushiBar",d.f,t),l.next=3,r.a.awrap(n.estimateGas.leave(e));case 3:return a=l.sent,l.next=6,r.a.awrap(n.leave(e,{gasLimit:a.mul(120).div(100)}));case 6:return o=l.sent,l.abrupt("return",Object(f.a)(o,"SushiBar.leave()",e.toString()));case 8:case"end":return l.stop()}}),null,null,null,Promise)}),[])}};t.a=function(){var e=Object(s.useContext)(b.b),t=e.signer,n=e.address,a=e.getTokenAllowance,o=e.tokens,i=e.updateTokens,f=p(),g=f.enter,h=f.leave,y=Object(s.useState)(),x=l()(y,2),O=x[0],v=x[1],S=Object(s.useState)(),E=l()(S,2),j=E[0],w=E[1],k=Object(s.useState)(),C=l()(k,2),P=C[0],T=C[1],A=Object(s.useState)(""),B=l()(A,2),H=B[0],z=B[1],D=Object(s.useState)(!1),I=l()(D,2),M=I[0],L=I[1],W=Object(s.useState)(!1),F=l()(W,2),U=F[0],N=F[1],Z=Object(s.useState)(!1),_=l()(Z,2),X=_[0],Y=_[1],G=Object(s.useState)(!1),J=l()(G,2),R=J[0],V=J[1],q=Object(s.useState)(!1),K=l()(q,2),Q=K[0],$=K[1],ee=Object(s.useMemo)((function(){return o.find((function(e){return"SUSHI"===e.symbol}))}),[o]),te=Object(s.useMemo)((function(){return o.find((function(e){return"xSUSHI"===e.symbol}))}),[o]);Object(s.useEffect)((function(){z("")}),[n]),u()((function(){var e,n,o,l,s;return r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(!(ee&&te&&t)){i.next=34;break}return L(!1),N(!1),Y(!0),i.prev=4,e=c.ethers.BigNumber.from(2).pow(96).sub(1),i.next=8,r.a.awrap(a(ee.address,d.f));case 8:return n=i.sent,L(c.ethers.BigNumber.from(n).gte(e)),i.next=12,r.a.awrap(a(te.address,d.f));case 12:return o=i.sent,N(c.ethers.BigNumber.from(o).gte(e)),l=Object(m.g)("ERC20",ee.address,t),i.t0=v,i.next=18,r.a.awrap(l.balanceOf(d.f));case 18:return i.t1=i.sent,(0,i.t0)(i.t1),i.t2=w,i.next=23,r.a.awrap(l.totalSupply());case 23:return i.t3=i.sent,(0,i.t2)(i.t3),s=Object(m.g)("ERC20",te.address,t),i.t4=T,i.next=29,r.a.awrap(s.totalSupply());case 29:i.t5=i.sent,(0,i.t4)(i.t5);case 31:return i.prev=31,Y(!1),i.finish(31);case 34:case"end":return i.stop()}}),null,null,[[4,,31,34]],Promise)}),[ee,te,t]);var ne=Object(s.useCallback)((function(){var e,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(H&&ee&&t)){a.next=16;break}return V(!0),a.prev=2,e=Object(m.l)(H,ee.decimals),a.next=6,r.a.awrap(g(e,t));case 6:if(!(n=a.sent)){a.next=13;break}return a.next=10,r.a.awrap(n.wait());case 10:return a.next=12,r.a.awrap(i());case 12:z("");case 13:return a.prev=13,V(!1),a.finish(13);case 16:case"end":return a.stop()}}),null,null,[[2,,13,16]],Promise)}),[H,ee,t]),ae=Object(s.useCallback)((function(){var e,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(H&&te&&t)){a.next=16;break}return $(!0),a.prev=2,e=Object(m.l)(H,te.decimals),a.next=6,r.a.awrap(h(e,t));case 6:if(!(n=a.sent)){a.next=13;break}return a.next=10,r.a.awrap(n.wait());case 10:return a.next=12,r.a.awrap(i());case 12:z("");case 13:return a.prev=13,$(!1),a.finish(13);case 16:case"end":return a.stop()}}),null,null,[[2,,13,16]],Promise)}),[H,te,t]);return{sushi:ee,xSushi:te,sushiStaked:O,sushiSupply:j,xSushiSupply:P,amount:H,setAmount:z,sushiAllowed:M,setSushiAllowed:L,xSushiAllowed:U,setXSushiAllowed:N,loading:X,onEnter:ne,entering:R,onLeave:ae,leaving:Q}}},1383:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),o=n(20),l=n.n(o),s=n(0),c=n.n(s),i=n(13),u=n(5),d=n(1206),b=n(1213),m=n(420),f=n(1208),p=n(327),g=n(417),h=n(418),y=n(1210),x=n(1215),O=n(1201),v=n(1211),S=n(1207),E=n(1217),j=n(1218),w=n(77),k=n(419),C=n(1219),P=n(1205),T=n(423),A=n(63),B=n(25),H=n(159),z=n(1244),D=n(22),I=n(421),M=function(){var e=Object(z.a)();return c.a.createElement(u.a,{style:{marginTop:B.g.large}},c.a.createElement(L,{state:e}),c.a.createElement(f.a,null),c.a.createElement(W,{state:e}),e.sushi&&e.sushi.balance.isZero()&&c.a.createElement(j.a,{text:"You don't have any SUSHI.",color:"orange",style:{marginTop:B.g.small}}),c.a.createElement(F,{state:e}))},L=function(e){var t=e.state;return c.a.createElement(u.a,null,c.a.createElement(O.a,{text:"Your SUSHI"}),c.a.createElement(d.a,{amount:t.sushi?Object(D.d)(t.sushi.balance,t.sushi.decimals):"",suffix:"SUSHI",disabled:!t.sushi}))},W=function(e){var t=e.state;return!t.sushi||t.sushi.balance.isZero()?c.a.createElement(O.a,{text:"Amount To Stake",disabled:!0}):c.a.createElement(u.a,null,c.a.createElement(O.a,{text:"Amount To Stake"}),c.a.createElement(C.a,{token:t.sushi,amount:t.amount,onAmountChanged:t.setAmount,autoFocus:B.d}))},F=function(e){var t=e.state,n=!t.sushi||t.sushi.balance.isZero()||!t.xSushi||!t.sushiStaked||!t.xSushiSupply||Object(D.j)(t.amount),a=n?void 0:Object(D.l)(t.amount,t.sushi.decimals).mul(t.xSushiSupply).div(t.sushiStaked),r=n?void 0:Object(D.d)(t.xSushiSupply,t.xSushi.decimals,8),o=n?void 0:t.xSushi.balance.add(a),l=n?void 0:H.a.from(a.add(o),t.xSushiSupply).toString();return c.a.createElement(v.a,null,c.a.createElement(d.a,{amount:a?Object(D.d)(a,t.xSushi.decimals,8):"",suffix:"xSUSHI",disabled:n}),c.a.createElement(E.a,{label:"xSUSHI Share",text:l,suffix:"%",disabled:n}),c.a.createElement(E.a,{label:"Total xSUSHI",text:r,disabled:n}),c.a.createElement(U,{state:t}))},U=function(e){var t=e.state,n=Object(s.useState)({}),a=l()(n,2),r=a[0],o=a[1];return c.a.createElement(u.a,{style:{marginTop:B.g.normal}},!t.sushi||t.sushi.balance.isZero()||Object(D.j)(t.amount)?c.a.createElement(N,{state:t,onError:o,disabled:!0}):Object(D.l)(t.amount,t.sushi.decimals).gt(t.sushi.balance)?c.a.createElement(S.a,{symbol:t.sushi.symbol}):t.loading?c.a.createElement(x.a,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{token:t.sushi,spender:A.f,onSuccess:function(){return t.setSushiAllowed(!0)},onError:o,hidden:t.sushiAllowed}),c.a.createElement(N,{state:t,onError:o,disabled:!t.sushiAllowed})),r.message&&4001!==r.code&&c.a.createElement(y.a,{error:r}))},N=function(e){var t=e.state,n=e.onError,a=e.disabled;return c.a.createElement(p.a,{title:"Stake",loading:t.entering,onPress:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n({}),e.prev=1,e.next=4,r.a.awrap(t.onEnter());case 4:t.setAmount(""),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(e.t0);case 10:case"end":return e.stop()}}),null,null,[[1,7]],Promise)},disabled:a})};t.default=function(){return c.a.createElement(I.a,null,c.a.createElement(g.a,null,c.a.createElement(m.a,null),c.a.createElement(h.a,null,c.a.createElement(k.a,{text:"Stake"}),c.a.createElement(w.a,{light:!0},"Earn recurring income by staking your SUSHI."),c.a.createElement(M,null)),"web"===i.a.OS&&c.a.createElement(P.a,null)),c.a.createElement(T.d,null))}}}]);
//# sourceMappingURL=7.f95bfc97.chunk.js.map