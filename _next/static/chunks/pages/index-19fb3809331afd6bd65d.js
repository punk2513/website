(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8869:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(5893),r=n(1664),a=n(1163),i=n(9008),s=n(4409),c=n.n(s);function l(e){var t=e.children;return(0,o.jsxs)("div",{children:[(0,o.jsx)(u,{}),(0,o.jsx)(d,{}),(0,o.jsx)("div",{className:c().content,children:t}),(0,o.jsx)(f,{})]})}function u(){return(0,o.jsxs)(i.default,{children:[(0,o.jsx)("title",{children:"Loot"}),(0,o.jsx)("meta",{name:"title",content:"Loot"}),(0,o.jsx)("meta",{name:"description",content:"Loot is randomized adventurer gear generated and stored on chain."}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:url",content:"https://www.lootproject.com/"}),(0,o.jsx)("meta",{property:"og:title",content:"Loot"}),(0,o.jsx)("meta",{property:"og:description",content:"Loot is randomized adventurer gear generated and stored on chain."}),(0,o.jsx)("meta",{property:"og:image",content:"https://lootproject.com/meta.png"}),(0,o.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{property:"twitter:url",content:"https://www.lootproject.com/"}),(0,o.jsx)("meta",{property:"twitter:title",content:"Loot"}),(0,o.jsx)("meta",{property:"twitter:description",content:"Loot is randomized adventurer gear generated and stored on chain."}),(0,o.jsx)("meta",{property:"twitter:image",content:"https://lootproject.com/meta.png"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,o.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap",rel:"stylesheet"})]})}function d(){var e=(0,a.useRouter)().pathname;return(0,o.jsxs)("div",{className:c().header,children:[(0,o.jsx)("div",{className:c().header__logo,children:(0,o.jsx)(r.default,{href:"/",children:(0,o.jsx)("a",{children:"Loot"})})}),(0,o.jsx)("div",{className:c().header__links,children:(0,o.jsx)("ul",{children:[{name:"FAQ",path:"/faq"},{name:"Resources",path:"/resources"}].map((function(t,n){var a=t.name,i=t.path;return(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:i,children:(0,o.jsx)("a",{className:e===i?c().header__links_active:void 0,children:a})})},n)}))})})]})}function f(){return(0,o.jsx)("div",{className:c().footer,children:(0,o.jsxs)("p",{children:["This website is"," ",(0,o.jsx)("a",{href:"https://github.com/lootproject/website",target:"_blank",rel:"noopener noreferrer",children:"open-source"}),"."]})})}},2167:function(e,t,n){"use strict";var o=n(3038);t.default=void 0;var r,a=(r=n(7294))&&r.__esModule?r:{default:r},i=n(1063),s=n(4651),c=n(7426);var l={};function u(e,t,n,o){if(e&&i.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=s.useRouter(),d=a.default.useMemo((function(){var t=i.resolveHref(r,e.href,!0),n=o(t,2),a=n[0],s=n[1];return{href:a,as:e.as?i.resolveHref(r,e.as):s||a}}),[r,e.href,e.as]),f=d.href,h=d.as,p=e.children,m=e.replace,_=e.shallow,v=e.scroll,g=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var x=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,j=c.useIntersection({rootMargin:"200px"}),y=o(j,2),b=y[0],k=y[1],w=a.default.useCallback((function(e){b(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,b]);a.default.useEffect((function(){var e=k&&n&&i.isLocalURL(f),t="undefined"!==typeof g?g:r&&r.locale,o=l[f+"%"+h+(t?"%"+t:"")];e&&!o&&u(r,f,h,{locale:t})}),[h,f,k,g,n,r]);var L={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==s&&o.indexOf("#")>=0&&(s=!1),t[r?"replace":"push"](n,o,{shallow:a,locale:c,scroll:s}))}(e,r,f,h,m,_,v,g)},onMouseEnter:function(e){i.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(r,f,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var G="undefined"!==typeof g?g:r&&r.locale,N=r&&r.isLocaleDomain&&i.getDomainLocale(h,G,r&&r.locales,r&&r.domainLocales);L.href=N||i.addBasePath(i.addLocale(h,G,r&&r.defaultLocale))}return a.default.cloneElement(t,L)};t.default=d},7426:function(e,t,n){"use strict";var o=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=r.useRef(),l=r.useState(!1),u=o(l,2),d=u[0],f=u[1],h=r.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:o}),n}(n),r=o.id,a=o.observer,i=o.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return r.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[h,d]};var r=n(7294),a=n(3447),i="undefined"!==typeof IntersectionObserver;var s=new Map},844:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var o=n(5893),r=n(8869),a=[{id:1,attributes:["Hard Leather Armor",'"Death Root" Ornate Greaves of Skill',"Studded Leather Gloves","Divine Hood","Necklace of Enlightenment","Gold Ring","Hard Leather Belt",'"Grim Shout" Grave Wand of Skill +1']},{id:111,attributes:["Ring Mail of Giants","Demonhide Boots of the Fox","Heavy Gloves","Cap","Necklace","Gold Ring","Wool Sash of Protection","Ghost Wand"]},{id:420,attributes:["Chain Mail","Shoes of Enlightenment","Demon's Hands","Ancient Helm","Necklace","Platinum Ring of Vitriol","Heavy Belt",'"Honour Grasp" Katana of Protection +1']},{id:6969,attributes:["Chain Mail","Holy Greaves of Giants","Silk Gloves","Dragon's Crown","Pendant of Perfection","Titanium Ring of Giants","Heavy Belt","Bone Wand"]},{id:1234,attributes:["Holy Chestplate","Divine Slippers of Perfection","Dragonskin Gloves",'"Woe Shout" Demon Crown of Protection +1',"Necklace","Titanium Ring","Silk Sash","Book"]},{id:1337,attributes:["Divine Robe",'"Foe Peak" Shoes of Reflection +1',"Divine Gloves","Full Helm","Necklace","Titanium Ring","Ornate Belt","Falchion of Reflection"]},{id:6969,attributes:["Chain Mail","Holy Greaves of Giants","Silk Gloves","Dragon's Crown","Pendant of Perfection","Titanium Ring of Giants","Heavy Belt","Bone Wand"]}],i=n(5594),s=n.n(i);function c(){return(0,o.jsx)(r.Z,{children:(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:s().home__cta,children:[(0,o.jsx)("h1",{children:"Loot"}),(0,o.jsx)("ul",{children:[{name:"OpenSea",url:"https://opensea.io/collection/lootproject"},{name:"Synthetic Loot",url:"/synthloot"},{name:"Twitter",url:"https://twitter.com/lootproject"},{name:"Contract",url:"https://etherscan.io/address/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7"}].map((function(e,t){var n=e.name,r=e.url;return(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:n})},t)}))}),(0,o.jsxs)("p",{children:["Loot is randomized adventurer gear generated and stored on chain.",(0,o.jsx)("br",{})," Stats, images, and other functionality are intentionally omitted for others to interpret. ",(0,o.jsx)("br",{})," Feel free to use Loot in any way you want."]})]}),(0,o.jsxs)("div",{className:s().home__feature,children:[(0,o.jsx)("span",{children:"Example Bags:"}),a.sort((function(){return.5-Math.random()})).slice(0,3).map((function(e,t){var n=e.id,r=e.attributes;return(0,o.jsx)("a",{href:"https://opensea.io/assets/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7/".concat(n),target:"_blank",rel:"noopener noreferrer",className:s().home__bag,children:(0,o.jsxs)("div",{className:s().home__bag_attributes,children:[(0,o.jsxs)("span",{children:["#",n]}),(0,o.jsx)("ul",{children:r.map((function(e,t){return(0,o.jsx)("li",{children:(0,o.jsx)("span",{children:e})},t)}))})]})},t)}))]})]})})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(844)}])},4409:function(e){e.exports={header:"Layout_header__2iLWX",header__logo:"Layout_header__logo__2Zu-m",header__links:"Layout_header__links__2tkmn",header__links_active:"Layout_header__links_active__2DGAB",footer:"Layout_footer__2GYdL"}},5594:function(e){e.exports={home__cta:"Home_home__cta__10yCx",home__feature:"Home_home__feature__GTZaW",home__bag:"Home_home__bag__1YhOb",home__bag_attributes:"Home_home__bag_attributes__3uVtG"}},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);