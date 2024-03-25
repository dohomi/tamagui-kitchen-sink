import{D as W,s as E,_ as k,a as ce,T as ve,c as ge,V as H,b as he}from"./EventEmitter-3h9cKSNS.js";import{_ as me}from"./extends-nGe_wfaW.js";import{r as u}from"./index-4g5l5LRQ.js";var be=[];function Q(e){return be[e-1]}var ye=/^data:/;class s{static has(t){var r=s._entries,a=ye.test(t);return a||!!r[t]}static add(t){var r=s._entries,a=Date.now();r[t]?(r[t].lastUsedTimestamp=a,r[t].refCount+=1):r[t]={lastUsedTimestamp:a,refCount:1}}static remove(t){var r=s._entries;r[t]&&(r[t].refCount-=1),s._cleanUpIfNeeded()}static _cleanUpIfNeeded(){var t=s._entries,r=Object.keys(t);if(r.length+1>s._maximumEntries){var a,n;r.forEach(o=>{var l=t[o];(!n||l.lastUsedTimestamp<n.lastUsedTimestamp)&&l.refCount===0&&(a=o,n=l)}),a&&delete t[a]}}}s._maximumEntries=256;s._entries={};var O=0,I={},v={abort(e){var t=I[""+e];t&&(t.onerror=null,t.onload=null,t=null,delete I[""+e])},getSize(e,t,r){var a=!1,n=setInterval(l,16),o=v.load(e,l,g);function l(){var d=I[""+o];if(d){var i=d.naturalHeight,f=d.naturalWidth;i&&f&&(t(f,i),a=!0)}a&&(v.abort(o),clearInterval(n))}function g(){typeof r=="function"&&r(),v.abort(o),clearInterval(n)}},has(e){return s.has(e)},load(e,t,r){O+=1;var a=new window.Image;return a.onerror=r,a.onload=n=>{var o=()=>t({nativeEvent:n});typeof a.decode=="function"?a.decode().then(o,o):setTimeout(o,0)},a.src=e,I[""+O]=a,O},prefetch(e){return new Promise((t,r)=>{v.load(e,()=>{s.add(e),s.remove(e),t()},r)})},queryCache(e){var t={};return e.forEach(r=>{s.has(r)&&(t[r]="disk/memory")}),Promise.resolve(t)}};class w{static get(){return W.get("window").scale}static getFontScale(){return W.get("window").fontScale||w.get()}static getPixelSizeForLayoutSize(t){return Math.round(t*w.get())}static roundToNearestPixel(t){var r=w.get();return Math.round(t*r)/r}}var Se=["aria-label","blurRadius","defaultSource","draggable","onError","onLayout","onLoad","onLoadEnd","onLoadStart","pointerEvents","source","style"],pe="ERRORED",P="LOADED",J="LOADING",Ee="IDLE",we=0,ze=/^(data:image\/svg\+xml;utf8,)(.*)/;function Le(e,t){return e&&t!=null?u.createElement("svg",{style:{position:"absolute",height:0,visibility:"hidden",width:0}},u.createElement("defs",null,u.createElement("filter",{id:"tint-"+t,suppressHydrationWarning:!0},u.createElement("feFlood",{floodColor:""+e,key:e}),u.createElement("feComposite",{in2:"SourceAlpha",operator:"atop"})))):null}function xe(e,t,r,a){var n=E.flatten(e),o=n.filter,l=n.resizeMode,g=n.shadowOffset,d=n.tintColor;n.resizeMode,n.tintColor;var i=[],f=null;if(o&&i.push(o),t&&i.push("blur("+t+"px)"),g){var m=he(n);m&&i.push("drop-shadow("+m+")")}return(a||d)&&r!=null&&i.push("url(#tint-"+r+")"),i.length>0&&(f=i.join(" ")),[l,f,d]}function ke(e){if(typeof e=="number"){var t=Q(e),r=t.height,a=t.width;return{height:r,width:a}}else if(e!=null&&!Array.isArray(e)&&typeof e=="object"){var n=e.height,o=e.width;return{height:n,width:o}}}function A(e){var t=null;if(typeof e=="number"){var r=Q(e);if(r==null)throw new Error('Image: asset with ID "'+e+'" could not be found. Please check the image source or packager.');var a=r.scales[0];if(r.scales.length>1){var n=w.get();a=r.scales.reduce((f,m)=>Math.abs(m-n)<Math.abs(f-n)?m:f)}var o=a!==1?"@"+a+"x":"";t=r?r.httpServerLocation+"/"+r.name+o+"."+r.type:""}else typeof e=="string"?t=e:e&&typeof e.uri=="string"&&(t=e.uri);if(t){var l=t.match(ze);if(l){var g=l[1],d=l[2],i=encodeURIComponent(d);return""+g+i}}return t}var X=u.forwardRef((e,t)=>{var r=e["aria-label"],a=e.blurRadius,n=e.defaultSource,o=e.draggable,l=e.onError,g=e.onLayout,d=e.onLoad,i=e.onLoadEnd,f=e.onLoadStart,m=e.pointerEvents,C=e.source,T=e.style,Y=ce(e,Se),_=u.useState(()=>{var c=A(C);if(c!=null){var h=v.has(c);if(h)return P}return Ee}),N=_[0],z=_[1],j=u.useState({}),q=j[0],Z=j[1],K=u.useContext(ve),R=u.useRef(null),F=u.useRef(we++),b=u.useRef(null),ee=N===P||N===J&&n==null,M=xe(T,a,F.current,e.tintColor),te=M[0],re=M[1],ae=M[2],y=e.resizeMode||te||"cover",ne=e.tintColor||ae,B=ee?C:n,L=A(B),oe=ke(B),ie=L?'url("'+L+'")':null,U=ue(),le=L?ge("img",{alt:r||"",style:p.accessibilityImage$raw,draggable:o||!1,ref:R,src:L}):null;function ue(){if(R.current!=null&&(y==="center"||y==="repeat")){var c=R.current,h=c.naturalHeight,S=c.naturalWidth,V=q.height,$=q.width;if(h&&S&&V&&$){var G=Math.min(1,$/S,V/h),de=Math.ceil(G*S),fe=Math.ceil(G*h);return de+"px "+fe+"px"}}}function se(c){if(y==="center"||y==="repeat"||g){var h=c.nativeEvent.layout;g&&g(c),Z(h)}}var x=A(C);return u.useEffect(()=>{c(),x!=null&&(z(J),f&&f(),b.current=v.load(x,function(S){z(P),d&&d(S),i&&i()},function(){z(pe),l&&l({nativeEvent:{error:"Failed to load resource "+x+" (404)"}}),i&&i()}));function c(){b.current!=null&&(v.abort(b.current),b.current=null)}return c},[x,b,z,l,d,i,f]),u.createElement(H,me({},Y,{"aria-label":r,onLayout:se,pointerEvents:m,ref:t,style:[p.root,K&&p.inline,oe,T,p.undo,{boxShadow:null}]}),u.createElement(H,{style:[p.image,Ie[y],{backgroundImage:ie,filter:re},U!=null&&{backgroundSize:U}],suppressHydrationWarning:!0}),le,Le(ne,F.current))});X.displayName="Image";var D=X;D.getSize=function(e,t,r){v.getSize(e,t,r)};D.prefetch=function(e){return v.prefetch(e)};D.queryCache=function(e){return v.queryCache(e)};var p=E.create({root:{flexBasis:"auto",overflow:"hidden",zIndex:0},inline:{display:"inline-flex"},undo:{blurRadius:null,shadowColor:null,shadowOpacity:null,shadowOffset:null,shadowRadius:null,tintColor:null,overlayColor:null,resizeMode:null},image:k(k({},E.absoluteFillObject),{},{backgroundColor:"transparent",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%",width:"100%",zIndex:-1}),accessibilityImage$raw:k(k({},E.absoluteFillObject),{},{height:"100%",opacity:0,width:"100%",zIndex:-1})}),Ie=E.create({center:{backgroundSize:"auto"},contain:{backgroundSize:"contain"},cover:{backgroundSize:"cover"},none:{backgroundPosition:"0",backgroundSize:"auto"},repeat:{backgroundPosition:"0",backgroundRepeat:"repeat",backgroundSize:"auto"},stretch:{backgroundSize:"100% 100%"}});const Me=D;export{Me as I,w as P,Q as g};