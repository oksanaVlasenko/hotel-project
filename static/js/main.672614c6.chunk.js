(this.webpackJsonphotel=this.webpackJsonphotel||[]).push([[0],{113:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(30),c=n.n(r),o=(n(63),n(6)),i=n(7),u=n(9),m=n(8),s=n(10),d=n(27),h=n(19),f=(n(64),n(65),n(41),n(26)),p=n.n(f),b=Object(a.createContext)({city:"",updateCity:function(){},startDate:new Date,endDate:new Date,updateCoord:function(){}}),y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).updateCity=function(e){n.setState({city:e})},n.handleChangeStart=function(e){n.setState({startDate:e})},n.handleChangeEnd=function(e){n.setState({endDate:e})},n.state={city:"",updateCity:n.updateCity,startDate:new Date,endDate:new Date,handleChangeStart:n.handleChangeStart,handleChangeEnd:n.handleChangeEnd},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(b.Provider,{value:this.state},this.props.children)}}]),t}(l.a.Component),E=b.Consumer,v=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).handleSubmit=function(e){console.log("Success"),e.preventDefault()},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(E,null,(function(t){var n=t.updateCity,a=t.city,r=t.startDate,c=t.endDate,o=t.handleChangeEnd,i=t.handleChangeStart;return l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"form-group"},l.a.createElement("form",{onSubmit:e.handleSubmit,className:"column "},l.a.createElement("div",{className:"d-flex  justify-content-center flex-wrap"},l.a.createElement("label",null,l.a.createElement("input",{className:"form-control-sm",type:"text",placeholder:"Search City",value:a||"",onChange:function(e){n(e.target.value)}}))),l.a.createElement("div",{className:"d-flex flex-row justify-content-center flex-wrap"},l.a.createElement("label",null,l.a.createElement(p.a,{selected:r,onChange:function(e){return i(e)},dateFormat:"d.M.yyyy",className:"form-control-sm"})),l.a.createElement("label",null,l.a.createElement(p.a,{selected:c,onChange:function(e){return o(e)},dateFormat:"d.M.yyyy",className:"form-control-sm"}))),l.a.createElement("div",{className:"d-flex flex-row justify-content-between"},l.a.createElement("input",{type:"submit",value:"Submit",className:" btn btn-primary btn-sm"}),l.a.createElement(d.b,{to:"/form"},l.a.createElement("button",{className:"btn btn-primary active btn-sm"},"Go ahead..."))))))})))}}]),t}(l.a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"jumbotron "},l.a.createElement("h3",{className:"display-9",style:{textAlign:"center"}},"Only the best hotel for you!"),l.a.createElement("p",{style:{textAlign:"center"}},"You need to type city name for searching top of the best hotels. ",l.a.createElement("br",null),"Enjoy..."),l.a.createElement(v,null))}}]),t}(l.a.Component),j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(n.state.town,"&lang=en&units=metric&APPID=652891bdee8d99f67f715fab1624d14e")).then((function(e){return e.json()})).then((function(e){var t=e.list.filter((function(e){return e.dt_txt.includes("12:00:00")}));n.setState({days:t});var a=t.map((function(e){return e.main.temp})).reduce((function(e,t){return e+t})),l=Math.ceil(a/5);n.setState({temp:l})})).catch((function(e){return console.log("error",e)}))},n.state={days:[],town:n.props.city,temp:""},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,this.state.temp," \xb0C"))}}]),t}(l.a.Component),O=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){fetch("http://engine.hotellook.com/api/v2/lookup.json?query=".concat(n.state.town,"&lang=en&lookFor=hotel&limit=10")).then((function(e){return e.json()})).then((function(e){var t=e.results.hotels;n.setState({hotel:t})})).catch((function(e){return console.log("error",e)}))},n.handleSubmit=function(e){console.log("success"),e.preventDefault()},n.state={town:n.props.city,hotel:[]},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(E,null,(function(t){var n=t.city,a=t.updateCity,r=t.startDate,c=t.endDate,o=t.handleChangeEnd,i=t.handleChangeStart;return l.a.createElement("div",null,l.a.createElement("div",{className:"card bg-secondary mb-3"},l.a.createElement("form",{onSubmit:e.handleSubmit,className:"column "},l.a.createElement("div",{className:"d-flex flex-row justify-content-around flex-wrap ",style:{marginTop:"0.6em"}},l.a.createElement("label",null,l.a.createElement("input",{className:"form-control-sm",type:"text",placeholder:"Search City",value:n,onChange:function(e){a(e.target.value)}})),l.a.createElement("label",null,l.a.createElement(p.a,{selected:r,onChange:function(e){return i(e)},dateFormat:"d.M.yyyy",className:"form-control-sm"})),l.a.createElement("label",null,l.a.createElement(p.a,{selected:c,onChange:function(e){return o(e)},dateFormat:"d.M.yyyy",className:"form-control-sm"}))))),l.a.createElement("div",null,l.a.createElement("div",{className:""},e.state.hotel.map((function(e){return l.a.createElement("div",{className:"flex-wrap card bg-secondary mb-3 align-items-lg-center d-flex flex-row justify-content-between",key:e.id},l.a.createElement("div",{className:"d-flex flex-column ",style:{marginLeft:"2em"}},l.a.createElement("h4",null,e.label),l.a.createElement(j,{city:n})),l.a.createElement("img",{className:"col-12 col-md-8 col-sm-12 col-lg-4 mb-9 card-img-top",src:"https://photo.hotellook.com/image_v2/crop/h".concat(e.id,"_1/800/520.auto"),alt:"hotel poster",style:{margin:"0.5em"}}))})))))})))}}]),t}(l.a.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null,(function(e){var t=e.city;return l.a.createElement("div",{className:"jumbotron"},l.a.createElement(O,{city:t}))})))}}]),t}(l.a.Component),w=function(){return l.a.createElement("div",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("div",null,l.a.createElement("ul",{style:{listStyleType:"none"}},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/form"},"Form")))))},N=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(y,null,l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement(h.a,{exact:!0,path:"/",component:g}),l.a.createElement(h.a,{path:"/form",component:C}))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},58:function(e,t,n){e.exports=n(113)},63:function(e,t,n){},65:function(e,t,n){}},[[58,1,2]]]);
//# sourceMappingURL=main.672614c6.chunk.js.map