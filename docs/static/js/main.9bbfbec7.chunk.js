(window.webpackJsonpmorty=window.webpackJsonpmorty||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},28:function(e,t,a){e.exports=a(40)},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(18),r=a.n(i),s=a(6),c=a(19),m=a(20),o=a(21),_=a(26),u=a(22),d=a(27),p=(a(13),a(14),a(15),a(33),a(34),a(16),{loading:"loading",wrapper:"wrapper",mainContent:"main__content",mainHeader:"main__header",main__inside:"main__inside",hidden:"hidden",list:"list",listItem:"list__item",list__episodes:"list__episodes",list__name:"list__name",list__others:"list__others",list__image:"list__image",list__id:"list__id",link__back:"link__back",list__status:"list__status",icon:"icon",detail__main:"detail__main",detail__name:"detail__name",detail__content:"detail__content",detail__image:"detail__image",detail__title:"detail__title",details__list:"details__list",details__list_title:"details__list-title",details__list_item:"details__list-item",form:"form",form__name:"form__name",form__label:"form__label",form__input_text:"form__input-text",form__radio:"form__radio",form__input_radio:"form__input-radio",nouser:"nouser"});var f=function(e){var t=e.src,a=e.name,i=e.id,r=e.status;return l.a.createElement(n.Fragment,null,l.a.createElement("img",{className:p.list__image,src:t,alt:a}),l.a.createElement("h2",{className:p.list__name,id:i},a),l.a.createElement("div",{className:p.list__others},l.a.createElement("span",{className:p.list__id},"#",i),l.a.createElement("span",{className:p.list__status},r)))};var h=function(e){var t=e.peopleData;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:p.hidden},0===t.length?l.a.createElement("p",null,"No founds"):l.a.createElement("p",null,"List of characters: ",t.length)),l.a.createElement("ul",{className:p.list},0===t.length?l.a.createElement("p",{className:p.nouser},"We can't find that name"):t.map((function(e){return l.a.createElement("li",{className:p.listItem,key:e.id},l.a.createElement(s.b,{to:"/detail/".concat(e.id)},l.a.createElement(f,{id:e.id,name:e.name,src:e.image,status:e.status})))}))))};var E=function(e){var t=e.searchPeopleName,a=e.filterByName,i=e.filterByStatus;return l.a.createElement(n.Fragment,null,l.a.createElement("form",{className:p.form},l.a.createElement("div",{className:p.form__name},l.a.createElement("label",{className:p.hidden,htmlFor:"name"},"Filter by name"),l.a.createElement("input",{className:p.form__input_text,type:"text",id:"name",name:"name",value:t,onChange:a,placeholder:"Filter by name"})),l.a.createElement("div",{className:p.form__radio},l.a.createElement("fieldset",null,l.a.createElement("legend",{className:p.hidden},"Status: "),l.a.createElement("label",{htmlFor:"alive"},l.a.createElement("input",{type:"radio",name:"status",className:p.form__input_radio,id:"alive",value:"alive",onChange:i}),"Alive"),l.a.createElement("label",{htmlFor:"dead"},l.a.createElement("input",{type:"radio",name:"status",className:p.form__input_radio,id:"dead",value:"dead",onClick:i}),"Dead"),l.a.createElement("label",{htmlFor:"unknown"},l.a.createElement("input",{type:"radio",name:"status",className:p.form__input_radio,id:"unknown",value:"unknown",onClick:i}),"Unknown"),l.a.createElement("label",{htmlFor:"all"},l.a.createElement("input",{type:"radio",name:"status",className:p.form__input_radio,id:"all",value:"all",onClick:i}),"All")))))},N=a(25);var v=function(e){var t=e.match;return l.a.createElement(n.Fragment,null,l.a.createElement(s.b,{to:"/",title:"Back"},l.a.createElement("div",{className:p.link__back},l.a.createElement(N.a,{className:p.icon})," Back")),t?l.a.createElement("div",{className:p.detail__main},l.a.createElement("h2",{className:p.detail__name},l.a.createElement("span",null,t.name),l.a.createElement("span",null,"#",t.id)),l.a.createElement("div",{className:p.detail__content},l.a.createElement("img",{className:p.detail__image,src:t.image,alt:t.name}),l.a.createElement("h3",{className:p.hidden},"Aditional Info"),l.a.createElement("ul",{className:p.details__list},l.a.createElement("li",{className:p.details__list_title}," Gender"),l.a.createElement("li",{className:p.details__list_item},t.gender),l.a.createElement("li",{className:p.details__list_title},"Origin"),l.a.createElement("li",{className:p.details__list_item},t.name),l.a.createElement("li",{className:p.details__list_title},"Species"),l.a.createElement("li",{className:p.details__list_item},t.species),l.a.createElement("li",{className:p.details__list_title},"Appears in episode")),l.a.createElement("ul",{className:p.list__episodes},t.episode.map((function(e,t){var a=e.slice(40);return l.a.createElement("li",{key:t}," ",a," ")}))))):l.a.createElement("p",{className:p.nouser},"This character doesn't exists"))};var g=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()}))},b=a(5);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var k=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(_.a)(this,Object(u.a)(t).call(this,e))).handlerSearchName=function(e){var t=e.target.value;a.setState({searchPeopleName:t})},a.handlerSearchStatus=function(e){var t=e.target.value;a.setState({searchStatus:t})},a.inputFilters=function(){var e=a.state,t=e.searchPeopleName,n=e.peopleData,l=e.searchStatus;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).filter((function(e){return!(l&&!l.includes("all"))||l.toLowerCase().includes(e.status.toLowerCase())}))},a.findId=function(e){return a.state.peopleData.find((function(t){return t.id===parseInt(e)}))},a.state={peopleData:[],isFetching:!0,searchPeopleName:"",searchStatus:""},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this;g().then((function(t){t.results.forEach((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{id:t})})),e.setState({peopleData:t.results,isFetching:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.isFetching,i=t.peopleData,r=t.searchPeopleName,s=t.searchStatus;return l.a.createElement("div",{className:p.wrapper},a?l.a.createElement("div",{className:p.loading}," Loading... "):l.a.createElement(n.Fragment,null,l.a.createElement("nav",{className:p.hidden},l.a.createElement("h1",null,"Rick and Morty")),l.a.createElement("main",{className:p.mainContent},l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/",render:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(E,{filterByName:e.handlerSearchName,filterByStatus:e.handlerSearchStatus,searchPeopleName:r,searchStatus:s}),l.a.createElement(h,{peopleData:e.inputFilters()}))}}),l.a.createElement(b.a,{path:"/detail/:id",render:function(t){return l.a.createElement(v,{match:e.findId(t.match.params.id),peopleData:i})}})))))}}]),t}(l.a.Component);r.a.render(l.a.createElement(s.a,null,l.a.createElement(k,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.9bbfbec7.chunk.js.map