(this.webpackJsonpscreen=this.webpackJsonpscreen||[]).push([[0],{201:function(e,n,t){e.exports=t(593)},205:function(e,n,t){},206:function(e,n,t){},462:function(e,n,t){"use strict";t.r(n),function(e,n){var c=t(71),o=t(72),i=t(463),a=function(){function n(e,t){Object(c.a)(this,n);var o={org:e,domain:"internetofthings.ibmcloud.com",type:"IBM-KTH",id:"0","auth-method":"token","auth-token":t,"use-client-certs":!1};this.device=new i.IotfManagedDevice(o),this._setup()}return Object(o.a)(n,[{key:"Push",value:function(e){this.device.publishHTTPS(e,"json",JSON.stringify("Any new messages?"),0)}},{key:"getMessage",value:function(){return r.getState()}},{key:"_setup",value:function(){var n=this;this.device.connect(),this.device.on("connect",(function(t){n.device_connected=!0,n.device.on("disconnect",(function(){n.device_connected=!1,console.log("Disconnected")})),n.device.on("error",(function(n){console.log(n),e.exit(1)}))})),n.device.on("command",(function(e,n,t,c){"currentMessage"===e?(console.log(e+":"),r.changeState(JSON.parse(t))):console.log("Command not supported.. "+e)}))}},{key:"IsConnected",value:function(){return this.device_connected}}]),n}(),r=function(){var e,n={changeState:function(n){e=n},getState:function(){return e}};return n}();n.exports=a}.call(this,t(2),t(108)(e))},477:function(e,n){},481:function(e,n){},483:function(e,n){},548:function(e,n){},550:function(e,n){},565:function(e,n){},566:function(e,n){},568:function(e,n){},570:function(e,n){},574:function(e,n){},576:function(e,n){},587:function(e,n){},589:function(e,n){},593:function(e,n,t){"use strict";t.r(n);var c=t(10),o=t.n(c),i=t(24),a=t.n(i),r=(t(205),t(71)),s=t(72),u=t(199),l=t(200),f=(t(206),t(207),new(t(462))("cl3hm5","secure_token_ibm")),d=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=n.call(this,e)).state={text:""},c}return Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;setInterval((function(){f.Push("getCurrentMessage");var n=f.getMessage();e.setState({text:n})}),3e5)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",null,"Prototype Display"),o.a.createElement("div",{className:"screen"},o.a.createElement("div",{id:"text"},this.state.text))))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[201,1,2]]]);
//# sourceMappingURL=main.513c5da5.chunk.js.map