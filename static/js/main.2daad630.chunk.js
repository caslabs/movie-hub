(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(60)},32:function(e,t,n){},34:function(e,t,n){},58:function(e,t){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(15),o=n.n(r),c=(n(32),n(16)),l=n(17),s=n(25),m=n(18),u=n(24),d=n(7),h=(n(34),n(19)),b=n(62),E=n(21),p=n.n(E),v=(n(58),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).renderRedirect=function(){if(n.state.redirect)return i.a.createElement(b.a,{to:""})},n.changeFeature=function(){n.setState({title:"Post"})},n.changePodcast=function(){n.setState({title:"Edit"})},n.changeReleases=function(){n.setState({title:"Delete"})},n.changeChart=function(){n.setState({title:"Delete"})},n.state={sidebarOpen:!1,title:"",movies:[],redirect:!1},n.onSetSidebarOpen=n.onSetSidebarOpen.bind(Object(d.a)(Object(d.a)(n))),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e})}},{key:"componentDidMount",value:function(){var e=this;document.title="Movie Hub",p.a.get("https://bewc7jy4y8.execute-api.us-west-2.amazonaws.com/dev/JarJerLar").then(function(t){var n=t.data.message.rows;e.setState({movies:n})})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(h.a,{sidebar:i.a.createElement("div",{id:"test"},i.a.createElement("b",null," Edit Form"),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",null,"Title:",i.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange})),i.a.createElement("br",null),"Year:",i.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange}),i.a.createElement("br",null),"Genre:",i.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange}),i.a.createElement("br",null),"Picture:",i.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange}),i.a.createElement("br",null),i.a.createElement("button",{type:"submit"},"Add"))),open:this.state.sidebarOpen,onSetOpen:this.onSetSidebarOpen,styles:{sidebar:{background:"white"}}},i.a.createElement("div",{id:"oof"},i.a.createElement("button",{id:"sideController",onClick:function(){return e.onSetSidebarOpen(!0)}},"Edit Movie"),i.a.createElement("a",{href:"https://www.w3schools.com"}),i.a.createElement("button",{onClick:this.changeFeature,className:"buttonHeader"},"POST"),i.a.createElement("button",{onClick:this.changePodcast,className:"buttonHeader"},"EDIT"),i.a.createElement("button",{onClick:this.changeChart,className:"buttonHeader"},"DELETE"))),i.a.createElement("div",{id:"container"},i.a.createElement("div",null,this.state.title),this.state.movies.map(function(e){return i.a.createElement("div",{id:"box"},i.a.createElement("h1",null,e.movie_title),i.a.createElement("h3",null,e.movie_genre),i.a.createElement("h2",null,e.movie_year_released," "),i.a.createElement("img",{id:"movid",src:e.movie_picture}))}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.2daad630.chunk.js.map