(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+lvZ":function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a("q1tI"),i=a.n(n),r=a("vOnD"),o=a("Wbzz"),l=a("c8nb"),d=a("9eSz"),m=a.n(d),c=Object(r.default)(o.Link).withConfig({displayName:"style__StyledCard",componentId:"sc-1geh7tk-0"})(["display:block;background-color:#fff;border-radius:3px;box-shadow:0 1px 1px #e6e6e6,0 2px 4px #e6e6e6;transition:.5s all;width:100%;height:100%;overflow:hidden;&:hover{transform:translate3d(0,-5px,0);box-shadow:0 1px 1px #ccc,0 4px 4px #ccc;}"]),s=r.default.article.withConfig({displayName:"style__StyledArticle",componentId:"sc-1geh7tk-1"})(["display:inline-block;width:100%;@media (max-width:","){grid-area:unset !important;}"],l.a.breakpoints.sm),p=Object(r.default)(m.a).withConfig({displayName:"style__FeaturedImage",componentId:"sc-1geh7tk-2"})(["background-position:center;background-size:cover;max-width:100%;border-top-left-radius:3px;",";"],(function(e){return e.halfImage?"\n    width: 50%;\n    float: left;\n    margin-right: 30px;\n    height: 320px;\n    border-bottom-left-radius: 3px;\n\n    @media (max-width: "+l.a.breakpoints.sm+") {\n      width: 100%;\n      float: none;\n      height: 190px;\n    }\n  ":"\n    height: 190px;\n    max-height: 190px;\n    width: 100%;\n    border-top-right-radius: 3px;\n  "})),f=r.default.section.withConfig({displayName:"style__CardContent",componentId:"sc-1geh7tk-3"})(["padding:",";p{margin:15px 0;}h2{font-size:1.2em;}"],(function(e){return e.compact?"10px":"40px"})),u=r.default.section.withConfig({displayName:"style__CardMeta",componentId:"sc-1geh7tk-4"})(["display:flex;justify-content:space-between;margin-bottom:8px;font-size:.8em;opacity:.8;line-height:1em;"]),g=r.default.h2.withConfig({displayName:"style__CardTitle",componentId:"sc-1geh7tk-5"})(["margin:0;padding:0;"]),h=function(e){var t=e.title,a=e.meta,n=e.path,r=e.featuredImage,o=e.content,l=e.halfImage,d=void 0!==l&&l,m=e.compact,h=void 0!==m&&m,b=e.style,x=e.children;return i.a.createElement(s,{style:b},i.a.createElement(c,{to:n},r&&r.fixed&&i.a.createElement(p,{fixed:r.fixed,halfImage:d}),r&&r.sizes&&i.a.createElement(p,{sizes:r.sizes,halfImage:d}),i.a.createElement(f,{compact:h},x,i.a.createElement("header",null,a&&i.a.createElement(u,null,a.tag&&i.a.createElement(i.a.Fragment,null,a.tag),a.time&&i.a.createElement("time",{dateTime:a.time},a.timePretty)),t&&i.a.createElement(g,null,t)),o&&i.a.createElement("p",{dangerouslySetInnerHTML:{__html:o}}))))}},Jrp9:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("vOnD"),o=a("igLN"),l=r.default.div.withConfig({displayName:"subheader__StyledSubheader",componentId:"sc-kft3xf-0"})(["background-color:",";color:",";display:flex;align-items:center;height:90px;margin-bottom:30px;"],(function(e){return e.backgroundColor?e.backgroundColor:"#000"}),(function(e){return e.textColor?e.textColor:"#fff"})),d=r.default.h1.withConfig({displayName:"subheader__SubheaderTitle",componentId:"sc-kft3xf-1"})(["font-size:1.2em;font-weight:bold;color:#fff;margin:0;line-height:1em;"]),m=r.default.small.withConfig({displayName:"subheader__SubheaderSubtitle",componentId:"sc-kft3xf-2"})(["font-weight:normal;display:block;opacity:.9;"]);t.a=function(e){var t=e.title,a=e.subtitle,n=e.backgroundColor,r=e.textColor;return i.a.createElement(l,{backgroundColor:n,textColor:r},i.a.createElement(o.a,null,i.a.createElement(d,null,t,i.a.createElement(m,null,a))))}},bzM7:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("QGyT"),o=a("Jrp9"),l=a("c8nb"),d=a("igLN"),m=a("vOnD"),c=a("Wbzz"),s=a("+lvZ"),p=m.default.div.withConfig({displayName:"page-sidebar-content__LatestPosts",componentId:"sc-1hafku3-0"})(["display:grid;grid-template-columns:1fr;grid-gap:30px;width:310px;@media (max-width:","){grid-template-columns:1fr 1fr;}@media (max-width:700px){grid-template-columns:1fr;}"],l.a.breakpoints.md),f=function(){var e=Object(c.useStaticQuery)("4217609440").posts.edges.map((function(e){return e.node}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"Latest posts"),i.a.createElement(p,null,e.map((function(e,t){return i.a.createElement(s.a,{title:e.frontmatter.title,featuredImage:e.frontmatter.featuredImage.childImageSharp,path:e.frontmatter.path,key:t,compact:!0,meta:{time:e.frontmatter.created,timePretty:e.frontmatter.createdPretty,tag:e.frontmatter.tags.length>0?e.frontmatter.tags[0]:null}})}))))},u=a("Mbym"),g=Object(m.default)(d.a).withConfig({displayName:"page__PageContainer",componentId:"sc-167hl4i-0"})(["display:flex;justify-content:space-between;@media (max-width:","){display:block;}p:first-child{margin-top:0;}"],l.a.breakpoints.md),h=m.default.aside.withConfig({displayName:"page__PageSidebar",componentId:"sc-167hl4i-1"})(["margin-left:50px;@media (max-width:","){margin-left:0;}"],l.a.breakpoints.md);t.default=function(e){var t=e.pathContext,a=e.location,n=t.page;return i.a.createElement(r.a,{bigHeader:!1},i.a.createElement(u.a,{title:n.frontmatter.title,description:n.frontmatter.excerpt,location:a}),i.a.createElement(o.a,{title:n.frontmatter.title,backgroundColor:l.a.layout.primaryColor}),i.a.createElement(g,null,i.a.createElement("section",{dangerouslySetInnerHTML:{__html:n.html}}),i.a.createElement(h,null,i.a.createElement(f,null))))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-dgh-src-templates-page-tsx-f53a20d1312397b04c60.js.map