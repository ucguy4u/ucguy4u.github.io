(this.webpackJsonpUday_Chauhan_Portfolio=this.webpackJsonpUday_Chauhan_Portfolio||[]).push([[0],[,function(e){e.exports=JSON.parse('{"backgroundType":"plain","plainBackgroundMode":"night","devIntro":"Hi, I am Uday Chauhan","devDesc":"Engineer | Blogger | Traveller | On the way to become a Billion Dollar Hippy...","gradientColors":"#EE7752, #E73C7E, #23A6D5, #23D5AB","backgroundImageUrl":"http://hdwpro.com/wp-content/uploads/2017/03/Art-Background-Image.png","icons":[{"image":"fa-facebook","url":"https://facebook.com/chauhanuday"},{"image":"fa-github","url":"https://github.com/ucguy4u"},{"image":"fa-twitter","url":"https://twitter.com/ucguy4u"},{"image":"fa-instagram","url":"https://www.instagram.com/ucguy4u/"},{"image":"fa-stack-overflow","url":"https://stackoverflow.com/users/6821936/uday-chauhan"},{"image":"fa-medium","url":"https://medium.com/@chauhan.s.uday26"},{"image":"fa-linkedin","url":"https://www.linkedin.com/in/chauhanuday/"},{"image":"fa-snapchat","url":"https://snapchat.com/add/ucguy4u"},{"image":"fa-youtube","url":"https://www.youtube.com/channel/UC9LO9K-7uBTihd2aMV-NHKg"},{"image":"fa-soundcloud","url":"https://soundcloud.com/uday-chauhan-372471043"},{"image":"fa-quora","url":"https://quora.com/profile/Uday-Chauhan-6"},{"image":"fa-angellist","url":"https://angel.co/chauhanuday"},{"image":"fa-blogger","url":"https://whatdehack.blogspot.com/"},{"image":"fa-goodreads","url":"https://www.goodreads.com/chauhanuday"},{"image":"fa-stack-exchange","url":"https://stackexchange.com/users/9176481/uday-chauhan"},{"image":"fa-twitch","url":"https://www.twitch.tv/ucguy4u"},{"image":"fa-tumblr","url":"https://ucguy4u.tumblr.com/"},{"image":"fa-pinterest","url":"https://in.pinterest.com/ucguy4u/"},{"image":"fa-reddit","url":"https://www.reddit.com/user/ucguy4u"},{"image":"fa-strava","url":"https://www.strava.com/athletes/ucguy4u"},{"image":"fa-vimeo","url":"https://vimeo.com/ucguy4u"},{"image":"fa-xing","url":"https://www.xing.com/profile/Uday_Chauhan?sc_o=mxb_p"},{"image":"fa-500px","url":"https://500px.com/chauhansuday"}]}')},,,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(3),c=t.n(r),i=(t(14),t(4)),u=t(5),d=t(8),s=t(7),l=t(6),g=t.n(l),h=(t(15),t(1)),p=function(e){Object(d.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).componentWillMount=function(){if(n.checkIfPlainTypeEnabled())return!0;n.checkIfGradientTypeEnabled()?n.setState({appClass:"gradient",bgStyle:n.prepareGradientStyleSheets()}):n.checkIfImageTypeEnabled()&&n.setState({appClass:"full-bg-image",bgStyle:n.prepareBackgroundImageStyle()})},n.checkIfNightModeEnabled=function(){return"plain"===n.state.backgroundType&&"nightlight"===n.state.appClass},n.checkIfDayModeEnabled=function(){return"plain"===n.state.backgroundType&&"daylight"===n.state.appClass},n.checkIfGradientTypeEnabled=function(){return"gradient"===n.state.backgroundType},n.checkIfPlainTypeEnabled=function(){return"plain"===n.state.backgroundType},n.checkIfImageTypeEnabled=function(){return"image"===n.state.backgroundType},n.prepareGradientStyleSheets=function(){return h.gradientColors?{background:"linear-gradient(-45deg, "+h.gradientColors+")",backgroundSize:"400% 400%"}:{background:"linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)",backgroundSize:"400% 400%"}},n.prepareBackgroundImageStyle=function(){return h.backgroundImageUrl?{background:'url("'+h.backgroundImageUrl+'") no-repeat center center fixed',backgroundSize:"cover"}:{background:'url("/images/sample-background.jpg") no-repeat center center fixed',backgroundSize:"cover"}},n.getDefaultModeBasedOnBackgroundType=function(){return n.checkIfNightModeEnabled()?n.state.lightBackgroundModes[0]:n.checkIfDayModeEnabled()?n.state.darkBackgroundModes[0]:void 0},n.changeThemeMode=function(e){n.checkIfNightModeEnabled()?n.setState({appClass:"daylight",backgroundIndex:0,backgroundMode:n.state.darkBackgroundModes[0]}):n.checkIfDayModeEnabled()&&n.setState({appClass:"nightlight",backgroundIndex:0,backgroundMode:n.state.lightBackgroundModes[0]})},n.changeBackgroundBasedonMode=function(){n.checkIfNightModeEnabled()&&n.state.backgroundIndex<n.state.lightBackgroundModes.length-1?n.setState({backgroundIndex:n.state.backgroundIndex+1,backgroundMode:n.state.lightBackgroundModes[n.state.backgroundIndex+1]}):n.checkIfDayModeEnabled()&&n.state.backgroundIndex<n.state.darkBackgroundModes.length-1?n.setState({backgroundIndex:n.state.backgroundIndex+1,backgroundMode:n.state.darkBackgroundModes[n.state.backgroundIndex+1]}):n.setState({backgroundIndex:0,backgroundMode:n.getDefaultModeBasedOnBackgroundType()})},n.state={darkBackgroundModes:["day","terminal","torquoise","alizarin","amythyst","carrot","peterriver"],lightBackgroundModes:["night","lightred","lightpurple","lightgreen","lightblue","lightyellow"],backgroundType:h.backgroundType||"plain",appClass:h.plainBackgroundMode||"daylight",devIntro:h.devIntro||"Lorem Ipsum",devDesc:h.devDesc||"Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa.",backgroundMode:"default",backgroundIndex:0,bgStyle:{},icons:h.icons||[]},n}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state,a=e.appClass,t=e.bgStyle,n=e.backgroundMode,r=e.devIntro,c=e.devDesc,i=e.icons;return o.a.createElement("div",{className:a,style:t},o.a.createElement("div",{className:"change-mode",onClick:this.changeThemeMode}),o.a.createElement("div",{className:n,onClick:this.changeBackgroundBasedonMode},o.a.createElement("main",{className:"App-main"},o.a.createElement("h1",{className:"intro"},r),o.a.createElement("div",{className:"tagline"},o.a.createElement(g.a,null,c)),o.a.createElement("div",{className:"icons-social"},i.map((function(e){return o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(e.url)},o.a.createElement("i",{className:"fab ".concat(e.image)}))}))))))}}]),t}(n.Component),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");m?(!function(e,a){fetch(e).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(a,e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.2c1074ec.chunk.js.map