"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89],{3269:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(7294),l=a(6010),r=a(2263),i=a(1944),s=a(5281),m=a(9058),o=a(5999),c=a(2244);function g(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(c.Z,{permalink:a,title:n.createElement(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&n.createElement(c.Z,{permalink:l,title:n.createElement(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var u=a(197),p=a(9460),d=a(390);function E(e){let{items:t,component:a=d.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(p.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}function b(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.Z)(),{blogDescription:l,blogTitle:s,permalink:m}=t,o="/"===m?a:s;return n.createElement(n.Fragment,null,n.createElement(i.d,{title:o,description:l}),n.createElement(u.Z,{tag:"blog_posts_list"}))}function h(e){const{metadata:t,items:a,sidebar:l}=e;return n.createElement(m.Z,{sidebar:l},n.createElement(E,{items:a}),n.createElement(g,{metadata:t}))}function v(e){return n.createElement(i.FG,{className:(0,l.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage)},n.createElement(b,e),n.createElement(h,e))}},4881:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(5999),r=a(5281),i=a(7462),s=a(6010);const m={iconEdit:"iconEdit_Z9Sw"};function o(e){let{className:t,...a}=e;return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function c(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(o,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010),r=a(9960);function i(e){const{permalink:t,title:a,subLabel:i,isNext:s}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},3008:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010),r=a(9960);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){let{permalink:t,label:a,count:s}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(i.tag,s?i.tagWithCount:i.tagRegular)},a,s&&n.createElement("span",null,s))}},1526:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7294),l=a(6010),r=a(5999),i=a(3008);const s={tags:"tags_jXut",tag:"tag_QGVx"};function m(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(s.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:s.tag},n.createElement(i.Z,{label:t,permalink:a}))}))))}}}]);