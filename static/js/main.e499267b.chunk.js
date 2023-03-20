(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(6),s=c.n(i),a=(c(13),c(1)),n=(c(14),c(8)),r=c(2),l=c(7),d=c.n(l);c(15);var o=c(0),j=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(o.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},m=(c(17),function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(j,{movie:e},e.imdbId)}))})}),b=(c(18),function(){var e,t=Object(a.useState)(""),c=Object(r.a)(t,2),i=c[0],s=c[1],l=Object(a.useState)([]),b=Object(r.a)(l,2),h=b[0],u=b[1],v=Object(a.useState)(null),O=Object(r.a)(v,2),x=O[0],p=O[1],f=Object(a.useState)(!1),N=Object(r.a)(f,2),g=N[0],y=N[1],w=Object(a.useState)(!1),I=Object(r.a)(w,2),S=I[0],C=I[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(m,{movies:h})}),Object(o.jsxs)("div",{className:"sidebar",children:[Object(o.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault()},children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",value:i,onChange:function(e){s(e.target.value),y(!1)},placeholder:"Enter a title to search",className:"input is-dander"})}),g&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{"data-cy":"searchButton",type:"submit",className:d()("button is-light",{"is-loading":S}),onClick:function(){var e;C(!0),(e=i,fetch("".concat("https://www.omdbapi.com/?apikey=a5abb59c","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))).then((function(e){if(C(!1),"Error"in e)y(!0);else{var t={title:e.Title,description:e.Plot,imgUrl:"N/A"!==e.Poster?e.Poster:"https://via.placeholder.com/360x270.png?text=no%20preview",imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID),imdbId:e.imdbID};p(t),s("")}}))},disabled:!i,children:x?"Search again":"Find a movie"})}),Object(o.jsx)("div",{className:"control",children:x&&Object(o.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:(e=x,function(){h.find((function(t){return t.imdbId===e.imdbId}))||u([].concat(Object(n.a)(h),[e])),s(""),y(!1),p(null)}),children:"Add to the list"})})]})]}),x&&Object(o.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(o.jsx)("h2",{className:"title",children:"Preview"}),Object(o.jsx)(j,{movie:x})]})]})]})})}),h=function(){return Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(b,{})})};s.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.e499267b.chunk.js.map