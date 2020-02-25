(this["webpackJsonpcontact-manager"]=this["webpackJsonpcontact-manager"]||[]).push([[0],{41:function(e,a,t){e.exports=t(72)},46:function(e,a,t){},47:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(35),o=t.n(c),l=(t(46),t(10)),s=t(14),i=(t(47),t(48),t(13)),m=t.n(i),u=t(16),d=t(2),p=t(3),h=t(5),f=t(4),b=t(6),E=t(40),v=t(20),y=t(12),g=t.n(y),O=r.a.createContext(),j=function(e,a){switch(e.type){case"DELETE_CONTACT":return Object(v.a)({},a,{contacts:a.contacts.filter((function(a){return a.id!==e.payload}))});case"ADD_CONTACT":return Object(v.a)({},a,{contacts:[e.payload].concat(Object(E.a)(a.contacts))});case"UPDATE_CONTACT":return Object(v.a)({},a,{contacts:a.contacts.map((function(a){return a.id===e.payload.id?a=e.payload:a}))});default:return a}},N=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState((function(a){return j(e,a)}))}},t}return Object(b.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data}),console.log(a.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),C=O.Consumer,k=function(e){function a(){return Object(d.a)(this,a),Object(h.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"navbar navbar-dark bg-success navbar-expand-lg"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/contactManager",className:"navbar-brand"},"Contact Manager"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/contact/add",className:"nav-link"},"Add contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/about",className:"nav-link"},"About")))))}}]),a}(n.Component),w=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={showInfo:!1},t.showOnClick=function(){t.setState({showInfo:!t.state.showInfo})},t.onDeleteContact=function(){var e=Object(u.a)(m.a.mark((function e(a,t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:a({type:"DELETE_CONTACT",payload:t});case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(b.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,s=a.address,i=s.street,m=s.suite,u=s.city,d=s.zipcode;return r.a.createElement(C,null,(function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mt-3"},r.a.createElement("h2",{className:"card-title"},n,r.a.createElement("span",{style:{cursor:"pointer",marginLeft:"5px"},onClick:e.showOnClick},r.a.createElement("i",{className:"fas fa-sort-down"})),r.a.createElement("span",{style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteContact.bind(e,s,t)},r.a.createElement("i",{className:"fas fa-times"})),r.a.createElement(l.b,{to:"/contact/edit/".concat(t),style:{cursor:"pointer",float:"right",marginRight:"10px",fontSize:"1.5rem",lineHeight:"38px",color:"black"}},r.a.createElement("i",{className:"fas fa-pencil-alt"}))),e.state.showInfo?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o),r.a.createElement("li",{className:"list-group-item"},"Address: ",i+", "+m+", "+u+", Zip: "+d)):null)}))}}]),a}(n.Component),A=function(e){function a(){return Object(d.a)(this,a),Object(h.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(C,null,(function(e){var a=e.contacts;return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h1",null,r.a.createElement("span",{className:"text-success"},"Contacts")," list"),a.map((function(e){return r.a.createElement(w,{key:e.id,contact:e})})))}))}}]),a}(n.Component),x=t(17),S=t(38),T=t.n(S),D=function(e){function a(){return Object(d.a)(this,a),Object(h.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props,a=e.label,t=e.name,n=e.type,c=e.placeholder,o=e.onChange,l=e.value,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{className:T()("form-control form-control-lg",{"is-invalid":s}),type:n,name:t,placeholder:c,value:l,onChange:o}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))}}]),a}(n.Component);D.defaultProps={type:"text"};var P=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",address:"",error:{}},t.onChange=function(e){t.setState(Object(x.a)({},e.target.name,e.target.value))},t.onSubmit=function(e,a){a.preventDefault();var n=t.state,r=n.name,c=n.email,o=n.phone,l=n.address;if(""!==r)if(""!==c)if(""!==o){var s={name:r,email:c,phone:o,address:l};g.a.post("https://jsonplaceholder.typicode.com/users",s).then((function(a){return e({type:"ADD_CONTACT",payload:a.data})})),t.setState({name:"",email:"",phone:"",address:"",error:{}}),t.props.history.push("/")}else t.setState({error:{phone:"Phone is required"}});else t.setState({error:{email:"Email is required"}});else t.setState({error:{name:"Name is required"}})},t}return Object(b.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.address,l=a.error;return r.a.createElement(C,null,(function(a){var s=a.dispatch;return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"card w-100"},r.a.createElement("div",{className:"card-header"},"Add new contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,s)},r.a.createElement(D,{name:"name",label:"Name",placeholder:"Enter name",onChange:e.onChange,value:t,error:l.name}),r.a.createElement(D,{name:"email",label:"Email",type:"email",placeholder:"Enter email",value:n,onChange:e.onChange,error:l.email}),r.a.createElement(D,{name:"phone",label:"Phone",placeholder:"Enter phone",value:c,onChange:e.onChange,error:l.phone}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("textarea",{className:"form-control form-control-lg",name:"address",placeholder:"Enter your address",onChange:e.onChange,value:o})),r.a.createElement("input",{className:"btn btn-light btn-block",type:"submit",value:"Add contact"})))))}))}}]),a}(n.Component),q=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",address:"",error:{}},t.onChange=function(e){t.setState(Object(x.a)({},e.target.name,e.target.value))},t.onSubmit=function(e,a){a.preventDefault();var n=t.state,r=n.name,c=n.email,o=n.phone,l=n.address;if(""!==r)if(""!==c)if(""!==o){var s={name:r,email:c,phone:o,address:l},i=t.props.match.params.id;g.a.put("https://jsonplaceholder.typicode.com/posts/".concat(i),s).then((function(a){return e({type:"UPDATE_CONTACT",payload:a.data})})),t.setState({name:"",email:"",phone:"",address:"",error:{}}),t.props.history.push("/")}else t.setState({error:{phone:"Phone is required"}});else t.setState({error:{email:"Email is required"}});else t.setState({error:{name:"Name is required"}})},t}return Object(b.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark((function e(){var a,t,n,r,c,o,l,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,r=n.address,c=r.street,o=r.suite,l=r.city,s=r.zipcode,this.setState({name:n.name,email:n.email,phone:n.phone,address:c+", "+o+", "+l+", Zip: "+s});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.address,l=a.error;return r.a.createElement(C,null,(function(a){var s=a.dispatch;return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"card w-100"},r.a.createElement("div",{className:"card-header"},"Edit contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,s)},r.a.createElement(D,{name:"name",label:"Name",placeholder:"Enter name",onChange:e.onChange,value:t,error:l.name}),r.a.createElement(D,{name:"email",label:"Email",type:"email",placeholder:"Enter email",value:n,onChange:e.onChange,error:l.email}),r.a.createElement(D,{name:"phone",label:"Phone",placeholder:"Enter phone",value:c,onChange:e.onChange,error:l.phone}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("textarea",{className:"form-control form-control-lg",name:"address",placeholder:"Enter your address",onChange:e.onChange,value:o},o)),r.a.createElement("input",{className:"btn btn-light btn-block",type:"submit",value:"Update contact"})))))}))}}]),a}(n.Component),I=function(e){function a(){return Object(d.a)(this,a),Object(h.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h2",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"This is simple app to manage contact info. You can manage your contact info without facing any difficult situation. It's very easily to add, remove, and edit your contact info at anytime. You need to spend just few minute."),r.a.createElement("span",{className:"secondary"},"Version 1.0.0"))}}]),a}(n.Component),_=function(e){function a(){return Object(d.a)(this,a),Object(h.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h2",{className:"display-4 text-danger"},"OPPS 404 error!"),r.a.createElement("p",{className:"lead"},"The existing page not found!"),r.a.createElement("p",null,"Please go back to ",r.a.createElement(l.b,{to:"/",className:"text-success"},"home")))}}]),a}(n.Component);t(39).a.autoA11y=!0;var M=function(){return r.a.createElement(N,null,r.a.createElement(l.a,null,r.a.createElement("div",{className:"App pb-5"},r.a.createElement(k,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:A}),r.a.createElement(s.a,{exact:!0,path:"/contact/add",component:P}),r.a.createElement(s.a,{exact:!0,path:"/contact/edit/:id",component:q}),r.a.createElement(s.a,{exact:!0,path:"/about",component:I}),r.a.createElement(s.a,{component:_})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.cc201aa5.chunk.js.map