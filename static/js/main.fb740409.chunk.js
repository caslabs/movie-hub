(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(60)},32:function(e,t,n){},34:function(e,t,n){},58:function(e,t){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),o=n.n(i),c=(n(32),n(16)),l=n(17),s=n(25),m=n(18),u=n(24),d=n(7),h=(n(34),n(19)),b=n(62),p=n(21),E=n.n(p),v=(n(58),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).renderRedirect=function(){if(n.state.redirect)return r.a.createElement(b.a,{to:"/target"})},n.changeFeature=function(){n.setState({title:"Post"})},n.changePodcast=function(){n.setState({title:"Podcast"})},n.changeReleases=function(){n.setState({title:"Releases"})},n.changeChart=function(){n.setState({title:"Charts"})},n.state={sidebarOpen:!1,title:"",persons:[],redirect:!1},n.onSetSidebarOpen=n.onSetSidebarOpen.bind(Object(d.a)(Object(d.a)(n))),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e})}},{key:"componentDidMount",value:function(){var e=this;document.title="Movie Hub",E.a.get("https://bewc7jy4y8.execute-api.us-west-2.amazonaws.com/dev/JarJerLar").then(function(t){var n=t.data.message.rows;e.setState({persons:n})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(h.a,{sidebar:r.a.createElement("div",{id:"test"},r.a.createElement("b",null," Edit Form"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Title:",r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange})),r.a.createElement("br",null),"Year:",r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange}),r.a.createElement("br",null),"Genre:",r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange}),r.a.createElement("br",null),"Picture:",r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Add"))),open:this.state.sidebarOpen,onSetOpen:this.onSetSidebarOpen,styles:{sidebar:{background:"white"}}},r.a.createElement("div",{id:"oof"},r.a.createElement("button",{id:"sideController",onClick:function(){return e.onSetSidebarOpen(!0)}},"Edit Movie"),r.a.createElement("a",{href:"https://www.w3schools.com"}),r.a.createElement("button",{onClick:this.changeFeature,className:"buttonHeader"},"POST"),r.a.createElement("button",{onClick:this.changePodcast,className:"buttonHeader"},"EDIT"),r.a.createElement("button",{onClick:this.changeChart,className:"buttonHeader"},"DELETE"))),r.a.createElement("div",{id:"container"},r.a.createElement("div",null,this.state.title),this.state.persons.map(function(e){return r.a.createElement("div",{id:"box"},r.a.createElement("h1",null,e.movie_title),r.a.createElement("h3",null,e.movie_genre),r.a.createElement("h2",null,e.movie_year_released," "),r.a.createElement("img",{id:"movid",src:e.movie_picture}))}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.fb740409.chunk.js.map