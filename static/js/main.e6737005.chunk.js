(this["webpackJsonpupcloud-admin"]=this["webpackJsonpupcloud-admin"]||[]).push([[0],{43:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(36),l=a.n(c),r=(a(43),a.p,a(44),a(5)),i=a(12),o=a(22),d=a(13),h=a(14),A=a(6),j=a(16),u=a(15),m=a(17),b=(a(47),a(11)),p=a.n(b),g=a(18),x=a(19),O=a.n(x),f=function(){var e=Object(g.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,O.a.post("https://nimaaaa-project.herokuapp.com/branchnews",t,{headers:{accept:"application/json","Content-Type":"multipart/form-data"}}).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),null}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(g.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,O.a.post("https://nimaaaa-project.herokuapp.com/news",t,{headers:{accept:"application/json","Content-Type":"multipart/form-data"}}).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),null}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAQAAAD41aSMAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAURJREFUeNrt2sENACAMAzE6NPPDBvRTBKp8I8TfxBx6WQAAAEAAAAgAAAEAIAAABACAAAAQAAACAEAAAAgAAAEAIAAABACAAAAQAAACAEAAAAgAAAEAIAAABACAAADQDYBltPOiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAMA1XoBAABAAAAIAAABACAAAAQAgAAAEAAAAgBAAAAIAAD9AOCYlSwKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANABQrRcAAAAEAIAAABAAAAIAQAAACAAAAQAgAAAEAIAAANAPAI5ZyaIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAwDVegEAAEAAAAgAAAEAIAAABACAAAAQAAACAEAAAAgAAAEAIAAABACAAAAQAAACAEAAAAgAAAEAIAAABACAAABQ3gaPs4iBqhvsuwAAAABJRU5ErkJggg==",N=a.p+"static/media/img.f7232b42.svg",y=a(0),C=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleDrop=function(t){console.log(t);var a=e.state.files;a.push.apply(a,Object(o.a)(t)),e.setState({files:a})},e.state={title:"",subtitle:"",description:"",date:"",details:"",author:"",state:"",branch:"",district:"",trending:"",files:[]},e.handleChange=e.handleChange.bind(Object(A.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(A.a)(e)),e}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData;console.log(this.state),t.append("title",this.state.title),t.append("description",this.state.description),t.append("date",this.state.date),t.append("details",this.state.details),t.append("author",this.state.author),t.append("state",this.state.state),t.append("branch",this.state.branch),t.append("district",this.state.district),this.state.files.map((function(e,a){t.append("myFiles",e,e.name)})),console.log(t.get("myFiles")),f(t).then((function(e){console.log(e),"success"===e.data.status?alert("News added"):alert("Some error encountered. Please Try Again")})).catch((function(e){console.log(e),alert("Some error encountered. Please Try Again")}))}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"branch__sec",children:[Object(y.jsx)("button",{className:"branch__hamburger",children:Object(y.jsx)("img",{src:v,className:"branch__menu align-items-start"})}),Object(y.jsxs)("div",{className:"form__main row align-items-end",children:[Object(y.jsxs)("div",{className:"branch__col1 col-md-6 col-12",children:[Object(y.jsxs)("div",{className:"branch__upload mt-5",children:[Object(y.jsx)(m.a,{onDrop:this.handleDrop,children:function(e){var t=e.getRootProps,a=e.getInputProps;return Object(y.jsxs)("div",Object(r.a)(Object(r.a)({},t({className:"branch__dropzone"})),{},{children:[Object(y.jsx)("input",Object(r.a)({},a())),Object(y.jsx)("p",{className:"branch_dragtext",children:"Drag'n'drop files, or click to select files"}),Object(y.jsxs)("p",{className:"branch_dragtext1",children:[Object(y.jsx)("img",{src:N,className:"branch_arrow"}),"Extra Uploads"]})]}))}}),this.state.files.map((function(e){return console.log(e)}))]}),Object(y.jsx)("div",{className:"branch__text1 mt-4",children:"The 1st selected image shall be your Thumbnail & rest shall be posted inside. You can choose an Image of any aspect ratio eg, 1:1, 4:3, 16:9"}),Object(y.jsx)("div",{className:"branch__date mt-4",children:Object(y.jsx)("input",{type:"date",name:"date",id:"date",className:"Branch_input form-control",onChange:this.handleChange,placeholder:"DD/MM/YYYY",style:{color:"#858585"}})}),Object(y.jsx)("div",{className:"branch__text2 mt-4",children:Object(y.jsx)("div",{className:"Branch_text",children:"Select date only when required. Not selecting it, this form shall automatically shall take the input time of submission."})}),Object(y.jsx)("div",{className:"branch__impLinks mt-4",children:Object(y.jsx)("input",{type:"text",name:"details",id:"details",onChange:this.handleChange,className:"Branch_input form-control",placeholder:"Important Links"})})]}),Object(y.jsx)("div",{className:"branch__col2 col-md-6 col-12",children:Object(y.jsxs)("form",{children:[Object(y.jsx)("div",{className:"branch__head",children:"Entries"}),Object(y.jsx)("div",{className:"branch__title",children:Object(y.jsx)("textarea",{name:"title",id:"title",onChange:this.handleChange,class:"form-control",placeholder:"Title",rows:"3",required:!0})}),Object(y.jsx)("div",{className:"branch__body",children:Object(y.jsx)("textarea",{name:"description",id:"description",onChange:this.handleChange,class:"form-control",placeholder:"Body",rows:"5",required:!0})}),Object(y.jsx)("div",{className:"branch__mentionAuthor",children:Object(y.jsx)("input",{className:"Admin_branch_authorI",name:"author",id:"author",onChange:this.handleChange,type:"text",class:"form-control ",placeholder:"Mention Author",required:!0})}),Object(y.jsx)("div",{className:"branch__selectState",children:Object(y.jsx)("input",{name:"state",id:"state",onChange:this.handleChange,type:"text",class:"form-control ",placeholder:"Select State",required:!0})}),Object(y.jsx)("div",{className:"branch__selectDistrict",children:Object(y.jsx)("input",{name:"district",id:"district",onChange:this.handleChange,type:"text",class:"form-control ",placeholder:"Select District",required:!0})}),Object(y.jsx)("div",{className:"branch__selectBranch",children:Object(y.jsx)("input",{name:"branch",id:"branch",onChange:this.handleChange,type:"text",class:"form-control ",placeholder:"Select Branch",required:!0})})]})})]}),Object(y.jsx)("div",{className:"row downloads__button d-flex justify-content-center",children:Object(y.jsxs)("button",{class:"button",type:"submit",className:"downloads_submit form-control",style:{alignSelf:"center"},onClick:this.handleSubmit,children:[" ","Submit"]})})]})})}}]),a}(s.a.Component),w=a(20),S=a(3),k=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(w.b,{to:"/branchNews",className:"HomePage__link",children:"Branch News"}),Object(y.jsx)("br",{}),Object(y.jsx)(w.b,{to:"/centralNews",className:"HomePage__link",children:"Central News"}),Object(y.jsx)("br",{}),Object(y.jsx)(w.b,{to:"/downloads",className:"HomePage__link",children:"Downloads"}),Object(y.jsx)("br",{}),Object(y.jsx)(w.b,{to:"/gallery",className:"HomePage__link",children:"Gallery"})]})}}]),a}(s.a.Component),D=(a(71),function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleDrop=function(t){console.log(t);var a=e.state.files;a.push.apply(a,Object(o.a)(t)),e.setState({files:a})},e.state={title:"",date:"",details:"",author:"",state:"",district:"",trending:"",files:[]},e.handleChange=e.handleChange.bind(Object(A.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(A.a)(e)),e}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData;console.log(this.state),t.append("title",this.state.title),t.append("description",this.state.description),t.append("date",this.state.date),t.append("details",this.state.details),t.append("author",this.state.author),t.append("state",this.state.state),t.append("branch",this.state.branch),t.append("district",this.state.district),this.state.files.map((function(e,a){return t.append("myFiles",e,e.name)})),console.log(t.get("myFiles")),_(t).then((function(e){console.log(e),"success"===e.data.status?alert("News added"):alert("Some error encountered. Please Try Again")})).catch((function(e){console.log(e),alert("Some error encountered. Please Try Again")}))}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"central__sec",children:[Object(y.jsx)("button",{className:"central__hamburger",children:Object(y.jsx)("img",{src:v,className:"branch__menu align-items-start"})}),Object(y.jsxs)("div",{className:"form__main row",children:[Object(y.jsxs)("div",{className:"central__col1 col-md-6 col-12",children:[Object(y.jsx)("div",{className:"central__upload mt-5",children:Object(y.jsx)(m.a,{onDrop:this.handleDrop,children:function(e){var t=e.getRootProps,a=e.getInputProps;return Object(y.jsxs)("div",Object(r.a)(Object(r.a)({},t({className:"central__dropzone"})),{},{children:[Object(y.jsx)("input",Object(r.a)({},a())),Object(y.jsx)("p",{className:"central_dragtext",children:"Drag'n'drop files, or click to select files"}),Object(y.jsxs)("p",{className:"central_dragtext1",children:[Object(y.jsx)("img",{src:N,className:"central_arrow"}),"Extra Uploads"]})]}))}})}),Object(y.jsx)("div",{className:"central__text1 mt-4",children:"The 1st selected image shall be your Thumbnail & rest shall be posted inside. You can choose an Image of any aspect ratio eg, 1:1, 4:3, 16:9"}),Object(y.jsx)("div",{className:"central__date mt-4",children:Object(y.jsx)("input",{type:"date",name:"date",id:"date",className:"Central_input form-control",placeholder:"DD/MM/YYYY",style:{color:"#858585"}})}),Object(y.jsx)("div",{className:"central__text2 mt-4",children:Object(y.jsx)("div",{className:"Central_text",children:"Select date only when required. Not selecting it, this form shall automatically shall take the input time of submission."})})]}),Object(y.jsx)("div",{className:"central__col2 col-md-6 col-12",children:Object(y.jsxs)("form",{children:[Object(y.jsx)("div",{className:"central__head",children:"Entries"}),Object(y.jsx)("div",{className:"central__title",children:Object(y.jsx)("textarea",{name:"title",id:"title",onChange:this.handleChange,class:"form-control",placeholder:"Title",rows:"3",required:!0})}),Object(y.jsx)("div",{className:"central__body",children:Object(y.jsx)("textarea",{name:"description",id:"description",onChange:this.handleChange,class:"form-control",placeholder:"Body",rows:"5",required:!0})}),Object(y.jsx)("div",{className:"central__selectAuthor",children:Object(y.jsx)("input",{className:"Admin_central_authorI",name:"author",id:"author",onChange:this.handleChange,type:"text",class:"form-control ",placeholder:"Select Author",required:!0})}),Object(y.jsx)("div",{className:"central__selectState",children:Object(y.jsx)("input",{name:"state",id:"state",onChange:this.handleChange,type:"text",class:"form-control ",placeholder:"Select State",required:!0})}),Object(y.jsx)("div",{className:"central__selectBranch",children:Object(y.jsx)("input",{name:"district",id:"district",onChange:this.handleChange,type:"text",class:"form-control ",placeholder:"Select District",required:!0})}),Object(y.jsx)("div",{className:"central__impLinks",children:Object(y.jsx)("input",{name:"details",id:"details",onChange:this.handleChange,type:"text",class:"form-control ",placeholder:"Important Links",required:!0})})]})})]}),Object(y.jsx)("div",{className:"row downloads__button d-flex justify-content-center",children:Object(y.jsxs)("button",{class:"submit",className:"downloads_submit form-control",style:{alignSelf:"center"},onClick:this.handleSubmit,children:[" ","Submit"]})})]})})}}]),a}(s.a.Component)),B=(a(72),function(){var e=Object(g.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,O.a.post("https://nimaaaa-project.herokuapp.com/downloads",t,{headers:{accept:"application/json","Content-Type":"multipart/form-data"}}).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),null}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleDrop=function(t){console.log(t),e.setState({files:t[0]})},e.state={title:"",description:"",files:null,filename:""},e.handleChange=e.handleChange.bind(Object(A.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(A.a)(e)),e}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData;console.log(this.state),t.append("title",this.state.title),t.append("description",this.state.description),t.append("image",this.state.files,this.state.files.name),B(t).then((function(e){console.log(e),"success"===e.data.status?alert("News added"):alert("Some error encountered. Please Try Again")})).catch((function(e){console.log(e),alert("Some error encountered. Please Try Again")}))}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"downloads__sec",children:[Object(y.jsx)("button",{className:"downloads__hamburger",children:Object(y.jsx)("img",{src:v,className:"downloads__menu align-items-start"})}),Object(y.jsxs)("div",{className:"form__main row ",children:[Object(y.jsx)("div",{className:"downloads__col1 col-md-6 col-12",children:Object(y.jsx)("div",{className:"downloads__upload mt-5",children:Object(y.jsx)(m.a,{onDrop:this.handleDrop,children:function(e){var t=e.getRootProps,a=e.getInputProps;return Object(y.jsxs)("div",Object(r.a)(Object(r.a)({},t({className:"downloads__dropzone"})),{},{children:[Object(y.jsx)("input",Object(r.a)({},a())),Object(y.jsx)("p",{className:"downloads_dragtext",children:"Drag'n'drop files, or click to select files"}),Object(y.jsxs)("p",{className:"downloads_dragtext1",children:[Object(y.jsx)("img",{src:N,className:"downloads_arrow"}),"Extra Uploads"]})]}))}})})}),Object(y.jsx)("div",{className:"downloads__col2 col-md-6 col-12",children:Object(y.jsxs)("form",{children:[Object(y.jsx)("div",{className:"downloads__head",children:"Entries"}),Object(y.jsx)("div",{className:"downloads__title",children:Object(y.jsx)("textarea",{name:"title",id:"title",onChange:this.handleChange,class:"form-control",placeholder:"Title",rows:"3",required:!0})}),Object(y.jsx)("div",{className:"downloads__body",children:Object(y.jsx)("textarea",{name:"description",id:"description",onChange:this.handleChange,class:"form-control",placeholder:"Body",rows:"5",required:!0})})]})})]}),Object(y.jsx)("div",{className:"row downloads__button d-flex justify-content-center",children:Object(y.jsxs)("button",{type:"submit",onClick:this.handleSubmit,className:"downloads_submit form-control",style:{alignSelf:"center"},children:[" ","Submit"]})})]})})}}]),a}(s.a.Component),I=(a(73),function(){var e=Object(g.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,O.a.post("https://nimaaaa-project.herokuapp.com/gallery",t,{headers:{accept:"application/json","Content-Type":"multipart/form-data"}}).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),null}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleDrop=function(t){console.log(t);var a,n=e.state.files;n.push.apply(n,Object(o.a)(t)),n.map((function(e,t){a+=e.name})),e.setState({names:a}),e.setState({files:n})},e.state={title:"",description:"",files:[],names:""},e.handleChange=e.handleChange.bind(Object(A.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(A.a)(e)),e}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData;console.log(this.state),t.append("title",this.state.title),t.append("description",this.state.description),console.log(this.state.files),this.state.files.map((function(e,a){return t.append("myFiles",e,e.name)})),console.log(t.get("myFiles")),I(t).then((function(e){console.log(e),"success"===e.data.status?alert("Gallery added"):alert("Some error encountered. Please Try Again")})).catch((function(e){console.log(e),alert("Some error encountered. Please Try Again")}))}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"gallery__sec",children:[Object(y.jsx)("button",{className:"gallery__hamburger",children:Object(y.jsx)("img",{src:v,className:"gallery__menu align-items-start"})}),Object(y.jsxs)("div",{className:"form__main row ",children:[Object(y.jsx)("div",{className:"gallery__col1 col-md-6 col-12",children:Object(y.jsxs)("div",{className:"gallery__upload mt-5",children:[Object(y.jsx)(m.a,{onDrop:this.handleDrop,children:function(e){var t=e.getRootProps,a=e.getInputProps;return Object(y.jsxs)("div",Object(r.a)(Object(r.a)({},t({className:"gallery__dropzone"})),{},{children:[Object(y.jsx)("input",Object(r.a)({},a())),Object(y.jsx)("p",{className:"gallery_dragtext",children:"Drag'n'drop files, or click to select files"}),Object(y.jsxs)("p",{className:"gallery_dragtext1",children:[Object(y.jsx)("img",{src:N,className:"gallery_arrow",alt:"upload arrow"}),"Extra Uploads"]})]}))}}),this.state.names]})}),Object(y.jsx)("div",{className:"gallery__col2 col-md-6 col-12",children:Object(y.jsxs)("form",{children:[Object(y.jsx)("div",{className:"gallery__head",children:"Entries"}),Object(y.jsx)("div",{className:"gallery__title",children:Object(y.jsx)("textarea",{name:"title",id:"title",onChange:this.handleChange,class:"form-control",placeholder:"Title",rows:"3",required:!0})}),Object(y.jsx)("div",{className:"gallery__body",children:Object(y.jsx)("textarea",{onChange:this.handleChange,class:"form-control",placeholder:"Body",rows:"5",required:!0,name:"description",id:"description"})})]})})]}),Object(y.jsx)("div",{className:"row gallery__button d-flex justify-content-center",children:Object(y.jsxs)("button",{type:"submit",onClick:this.handleSubmit,className:"gallery_submit form-control",style:{alignSelf:"center"},children:[" ","Submit"]})})]})})}}]),a}(s.a.Component);var T=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(w.a,{children:Object(y.jsxs)(S.c,{children:[Object(y.jsx)(S.a,{path:"/admin_pages",component:k,exact:!0}),Object(y.jsx)(S.a,{path:"/",component:k,exact:!0}),Object(y.jsx)(S.a,{path:"/gallery",component:P,exact:!0}),Object(y.jsx)(S.a,{path:"/branchNews",component:C,exact:!0}),Object(y.jsx)(S.a,{path:"/centralNews",component:D,exact:!0}),Object(y.jsx)(S.a,{path:"/downloads",component:E,exact:!0})]})})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),c(e),l(e)}))};l.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(T,{})}),document.getElementById("root")),q()}},[[74,1,2]]]);
//# sourceMappingURL=main.e6737005.chunk.js.map