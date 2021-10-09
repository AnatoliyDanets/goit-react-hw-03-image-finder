(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__QgR4R",ImageGalleryItem:"ImageGallery_ImageGalleryItem__hv8C_",ImageGalleryItem__image:"ImageGallery_ImageGalleryItem__image__1diXy"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1TNFS",Modal:"Modal_Modal__3EXXB"}},17:function(e,t,a){e.exports={Button:"Button_Button__2AABv"}},19:function(e,t,a){e.exports={loader:"LoaderComponent_loader__1mBph"}},24:function(e,t,a){},25:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),s=(a(24),a(3)),i=a(4),l=a(6),u=a(5),h=(a(25),a(8)),m=(a(15),a(12)),g=a.n(m),d=a(1),p=document.querySelector("#modal-root"),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageURL,t=this.props.tags;return Object(o.createPortal)(Object(d.jsx)("div",{className:g.a.Overlay,onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:g.a.Modal,children:Object(d.jsx)("img",{src:e,alt:t})})}),p)}}]),a}(n.Component),j=a(9),f=a.n(j),_=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchName:"",page:1},e.handleInputChange=function(t){e.setState({searchName:t.currentTarget.value.toLowerCase()})},e.handleFormSubmit=function(t){t.preventDefault(),""!==e.state.searchName.trim()?(e.props.submit(e.state.searchName),e.setState({searchName:""})):h.b.error("empty string")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.searchName;return Object(d.jsx)("header",{className:f.a.Searchbar,children:Object(d.jsxs)("form",{className:f.a.SearchForm,onSubmit:this.handleFormSubmit,children:[Object(d.jsx)("button",{type:"submit",className:f.a.SearchForm__button,children:Object(d.jsx)("span",{className:f.a.SearchForm__button_label,children:"Search"})}),Object(d.jsx)("input",{className:f.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"searchName",value:e,onChange:this.handleInputChange})]})})}}]),a}(n.Component),O=a(14),v=a(13),y=a.n(v),S=a(16),x="22939354-d4c9986b85a6f5174d41c17d7",I="https://pixabay.com/api/?";function w(){return(w=Object(S.a)(y.a.mark((function e(t,a){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(I,"q=").concat(t,"&page=").concat(a,"&key=").concat(x,"&image_type=photo&orientation=horizontal&per_page=12"));case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",n.json());case 5:return e.next=7,Promise.reject(new Error("no images on request"));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N={imageAPI:function(e,t){return w.apply(this,arguments)}},C=N,k=a(17),F=a.n(k);function M(e){var t=e.OnClick,a=e.children;return Object(d.jsx)("button",{type:"button",className:F.a.Button,onClick:t,children:a})}var L=a(10),U=a.n(L);function G(e){var t=e.id,a=e.tags,n=e.webformatURL,r=e.largeImageURL,o=e.onOpenModal;return Object(d.jsx)("li",{className:U.a.ImageGalleryItem,children:Object(d.jsx)("img",{src:n,alt:a,"data-alt":a,"data-source":r,className:U.a.ImageGalleryItem__image,onClick:o})},t)}var R=a(18),B=a.n(R),A=(a(48),a(19)),E=a.n(A);function D(){return Object(d.jsx)("div",{className:E.a.loader,children:Object(d.jsx)(B.a,{type:"Grid",color:"#00BFFF",height:80,width:80})})}var P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],page:1,searchName:"",error:null,loading:!1},e.loadMore=function(){var t=e.state,a=t.searchName,n=t.page;e.toggleLoader(),C.imageAPI(a,n+1).then((function(t){e.setState((function(e){var a=e.images,n=e.page;return{images:[].concat(Object(O.a)(a),Object(O.a)(t.hits)),page:n+1}})),e.toggleLoader(),n>=1&&setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),800)})).catch(e.setState({error:"no images on request"}))},e.toggleLoader=function(){e.setState((function(e){return{loading:!e.loading}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state.page,r=e.searchName,o=this.props.searchName;r!==o&&(this.toggleLoader(),C.imageAPI(o,n).then((function(e){0===e.hits.length&&h.b.error("No images found on your query"),a.setState({images:e.hits,page:1,searchName:o}),a.toggleLoader()})).catch(this.setState({error:"no images on request"})))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,n=this.props.onOpenModal;return Object(d.jsxs)("div",{children:[Object(d.jsx)("ul",{className:U.a.ImageGallery,children:t.map((function(e,t){var a=e.tags,r=e.webformatURL,o=e.largeImageURL;return Object(d.jsx)(G,{tags:a,webformatURL:r,largeImageURL:o,onOpenModal:n},t)}))}),a&&Object(d.jsx)(D,{}),t.length>=12&&Object(d.jsx)(M,{OnClick:this.loadMore,children:"Show more"})]})}}]),a}(n.Component),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchName:"",largeImageURL:"",tags:"",showModal:!1},e.handleSubmit=function(t){e.setState({searchName:t})},e.onOpenModal=function(t){e.setState({largeImageURL:t.target.dataset.source,tags:t.target.dataset.alt}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.largeImageURL,n=e.tags;return Object(d.jsxs)("div",{children:[Object(d.jsx)(_,{submit:this.handleSubmit}),Object(d.jsx)(P,{onOpenModal:this.onOpenModal,searchName:this.state.searchName}),t&&Object(d.jsx)(b,{onClose:this.toggleModal,largeImageURL:a,tags:n}),Object(d.jsx)(h.a,{autoClose:3e3})]})}}]),a}(n.Component),q=T,K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root")),K()},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2lf5g",SearchForm:"Searchbar_SearchForm__1yFnl",SearchForm__button:"Searchbar_SearchForm__button__1E6e9",SearchForm__button_label:"Searchbar_SearchForm__button_label__2gVfK",SearchForm__input:"Searchbar_SearchForm__input__2UMad"}}},[[49,1,2]]]);
//# sourceMappingURL=main.c6d72c43.chunk.js.map