(function(e){function t(t){for(var r,c,o=t[0],s=t[1],i=t[2],b=0,p=[];b<o.length;b++)c=o[b],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},u=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var l=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={key:0,class:"view login"},u={class:"form-inner"},c=Object(r["d"])("h1",null,"Login to Thething",-1),o=Object(r["d"])("label",{for:"username"},"Username",-1),s=Object(r["d"])("input",{type:"submit",value:"Login"},null,-1),i={key:1,class:"view chat"},l={class:"chat-box"},b={class:"message-inner"},p={class:"username"},d={class:"content"},f=Object(r["d"])("input",{type:"submit",value:"Send"},null,-1);function m(e,t,n,m,j,O){return""===m.state.username||null===m.state.username?(Object(r["f"])(),Object(r["c"])("div",a,[Object(r["d"])("form",{class:"login-form",onSubmit:t[2]||(t[2]=Object(r["m"])((function(){return m.Login&&m.Login.apply(m,arguments)}),["prevent"]))},[Object(r["d"])("div",u,[c,o,Object(r["l"])(Object(r["d"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return m.inputUsername=e}),placeholder:"Please enter your username..."},null,512),[[r["k"],m.inputUsername]]),s])],32)])):(Object(r["f"])(),Object(r["c"])("div",i,[Object(r["d"])("header",null,[Object(r["d"])("button",{class:"logout",onClick:t[3]||(t[3]=function(){return m.Logout&&m.Logout.apply(m,arguments)})},"Logout"),Object(r["d"])("h1",null,"Welcome to the lobby, "+Object(r["j"])(m.state.username),1)]),Object(r["d"])("section",l,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(m.state.messages,(function(e){return Object(r["f"])(),Object(r["c"])("div",{key:e.key,class:e.username==m.state.username?"message current-user":"message"},[Object(r["d"])("div",b,[Object(r["d"])("div",p,Object(r["j"])(e.username),1),Object(r["d"])("div",d,Object(r["j"])(e.content),1)])],2)})),128))]),Object(r["d"])("footer",null,[Object(r["d"])("form",{onSubmit:t[5]||(t[5]=Object(r["m"])((function(){return m.SendMessage&&m.SendMessage.apply(m,arguments)}),["prevent"]))},[Object(r["l"])(Object(r["d"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return m.inputMessage=e}),placeholder:"Write a message..."},null,512),[[r["k"],m.inputMessage]]),f],32)])]))}n("159b"),n("b64b");var j=n("260b"),O=(n("66ce"),{apiKey:"AIzaSyC1wuDVw3r3hira1fEK3nYCbX6nu66bfqg",authDomain:"thething-98c2d.firebaseapp.com",projectId:"thething-98c2d",storageBucket:"thething-98c2d.appspot.com",messagingSenderId:"835718742144",appId:"1:835718742144:web:9809226ab6c8ba3cdee665"}),g=j["a"].initializeApp(O),v=g,h={setup:function(){var e=Object(r["h"])(""),t=Object(r["h"])(""),n=Object(r["g"])({username:"",messages:[]}),a=function(){""==e.value&&null==e.value||(n.username=e.value,e.value="")},u=function(){n.username=""},c=function(){var e=v.database().ref("messages");if(""!==t.value&&null!==t.value){var r={username:n.username,content:t.value};e.push(r),t.value=""}};return Object(r["e"])((function(){var e=v.database().ref("messages");e.on("value",(function(e){var t=e.val(),r=[];Object.keys(t).forEach((function(e){r.push({id:e,username:t[e].username,content:t[e].content})})),n.messages=r}))})),{inputUsername:e,Login:a,state:n,inputMessage:t,SendMessage:c,Logout:u}}};n("ae39");h.render=m;var y=h;Object(r["b"])(y).mount("#app")},ae39:function(e,t,n){"use strict";n("e6c2")},e6c2:function(e,t,n){}});
//# sourceMappingURL=app.cf64d051.js.map