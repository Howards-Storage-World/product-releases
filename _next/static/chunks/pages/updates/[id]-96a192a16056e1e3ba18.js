(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{8007:function(e,t,r){"use strict";r.d(t,{ZP:function(){return m}});var n=r(5893),i=r(9008),a=r(3151),s=r.n(a),o=r(367),l=r.n(o),c=function(e){var t=e.options;return(0,n.jsxs)(i.default,{children:[(null===t||void 0===t?void 0:t.title)&&(0,n.jsx)("meta",{name:"og:title",content:t.title}),(null===t||void 0===t?void 0:t.description)&&(0,n.jsx)("meta",{name:"description",content:t.description}),(null===t||void 0===t?void 0:t.image)&&(0,n.jsx)("meta",{property:"og:image",content:t.image}),t&&(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})},d="TEST",u="Home | ".concat(d),_=function(){return(0,n.jsx)("footer",{className:s().footer,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:s().title,children:"Mitchell Lee"}),(0,n.jsx)("hr",{}),(0,n.jsxs)("p",{className:s().body,children:["P: ",(0,n.jsx)("a",{href:"tel:+612-9196-8872",children:"9196 8872"}),(0,n.jsx)("br",{}),"E: ",(0,n.jsx)("a",{href:"mailto:mitch@hsw.com.au",children:"mitch@hsw.com.au"})]})]})})},m=function(e){var t=e.children,r=e.title,a=void 0===r?u:r,o=e.meta,m=e.home,h=e.style,p=void 0===h?{maxWidth:"36rem"}:h,g=e.className,f=void 0===g?"":g;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"".concat(s().container," ").concat(f),style:p,children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("link",{rel:"icon",href:"/favicon.webp"}),a&&(0,n.jsx)("title",{children:a})]}),(0,n.jsx)(c,{options:o}),(0,n.jsx)("header",{className:s().header,children:m&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("h1",{className:l().heading2Xl,children:d})})}),(0,n.jsx)("main",{children:t})]}),(0,n.jsx)(_,{})]})}},7756:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return b},default:function(){return y}});var n=r(5893),i=r(8007),a=r(367),s=r.n(a),o=r(4121),l=r(9999),c=r(6265),d=r(7294),u=r(9521),_=r(3821),m=r.n(_);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e,t,r){var n=Math.max.apply(Math,(0,l.Z)(e.map((function(e){return("".concat(e[t])||"").length}))).concat([r.length]));return Math.min(200,13*n)},f=function(e){var t=e.columns,r=e.data,i=e.style,a=void 0===i?{}:i,s=(0,u.useTable)({columns:t,data:r},u.useBlockLayout,u.useSortBy,u.useResizeColumns),o=s.getTableProps,l=s.getTableBodyProps,c=s.headerGroups,d=s.rows,_=s.prepareRow;return(0,n.jsxs)("table",p(p({},o()),{},{className:m().table,style:a,children:[(0,n.jsx)("thead",{className:m().thead,children:c.map((function(e){return(0,n.jsx)("tr",p(p({},e.getHeaderGroupProps()),{},{className:m().tr,children:e.headers.map((function(e){return(0,n.jsxs)("th",p(p({},e.getHeaderProps()),{},{className:m().th,children:[(0,n.jsxs)("span",p(p({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""]})),(0,n.jsx)("span",{}),(0,n.jsx)("div",p(p({},e.getResizerProps()),{},{className:"".concat(m().resizer," ").concat(e.isResizing?m().isResizing:"")}))]}))}))}))}))}),(0,n.jsx)("tbody",p(p({},l()),{},{className:m().tbody,children:d.map((function(e){return _(e),(0,n.jsx)("tr",p(p({},e.getRowProps()),{},{className:m().tr,children:e.cells.map((function(e){return(0,n.jsx)("td",p(p({},e.getCellProps()),{},{className:m().td,children:e.render("Cell")}))}))}))}))}))]}))},x={title:"Release",description:"A template Next.js website"};function j(e){return(0,n.jsx)("img",{src:e.row.original.image,style:{display:"block",maxWidth:"100%",padding:"0 !important"}})}var b=!0,y=function(e){var t=e.data,r=d.useMemo((function(){return t.rows}),[t]),a=d.useMemo((function(){return function(e,t){return e.map((function(e){var r=(0,o.Z)(e,4),i=r[0],a=r[1],s=r[2],l=r[3];return{Header:i,id:i,accessor:a,width:s||g(t,a,i),Cell:l||function(e){var t=e.value;return(0,n.jsx)("span",{children:String(t)})}}}))}([["Availability","availability"],["HSW Code","itemCode"],["Supplier Code","supplierCode"],["Brand","brand"],["Description","description"],["MOQ","minimumOrderQuantity",60],["Cost Price","costPrice"],["RRP","recommendedRetailPrice"],["Margin","margin"],["Image","image",void 0,j],["Campaign","campaign"],["Comments","comments"]],r)}),[t]);return(0,n.jsxs)(i.ZP,{title:"".concat(t.id," Release"),meta:x,style:{textAlign:"center"},children:[(0,n.jsx)("h2",{className:s().headingLg,children:"".concat(t.id," Release | Test")}),(0,n.jsx)(f,{data:r,columns:a,style:{fontFamily:"'Courier New', monospace"}})]})}},477:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/updates/[id]",function(){return r(7756)}])},3151:function(e){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",headerImage:"layout_headerImage__2h5On",headerHomeImage:"layout_headerHomeImage__3qo1_",backToHome:"layout_backToHome__1vZsp",footer:"layout_footer__127N0",author:"layout_author__3O7gX",body:"layout_body__3uaTP",title:"layout_title__24-9Z"}},3821:function(e){e.exports={table:"Table_table__1EC6b",tbody:"Table_tbody__3LSi_",thead:"Table_thead__2deuv",tr:"Table_tr__2DL9c",td:"Table_td__1oCl7",th:"Table_th__6w9tE",resizer:"Table_resizer__2AqsN",isResizing:"Table_isResizing__W_zI5"}},367:function(e){e.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm",sticky:"utils_sticky__1I7V4",flexGrid:"utils_flexGrid__2xpNp",flexColumn:"utils_flexColumn__29rHW",input:"utils_input__3HigS"}}},function(e){e.O(0,[871,774,888,179],(function(){return t=477,e(e.s=t);var t}));var t=e.O();_N_E=t}]);