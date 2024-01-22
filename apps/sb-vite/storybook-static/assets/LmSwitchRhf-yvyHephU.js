import{c as ce,s as ae,g as de,Y as oe,j as n,f as Z,h as he,X as fe}from"./Stacks-0gbGCfo_.js";import{C as be}from"./index.esm-SaFMQc_X.js";import{r as o}from"./index-4g5l5LRQ.js";import{u as me,L as J}from"./usePopoverState-tTqBLx82.js";import{T as ve,b as Ce,u as ye,F as pe,E as K,w as Se}from"./index-LvVOA0P4.js";import{u as ge}from"./index-RduBmlIh.js";import{a as xe,S as W,u as ke,V as G,_ as z,P as Q}from"./EventEmitter-8bYFdwfg.js";import{_ as we}from"./extends-dGVwEr9R.js";var je=/^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/,Ee=e=>e.match(je)[1],Te=e=>!isNaN(parseFloat(e))&&isFinite(e),_e=(e,r)=>{if(typeof e=="string"){var u=parseFloat(e)*r,d=Ee(e);return""+u+d}else if(Te(e))return e*r};const X=_e;var Ae=["aria-label","accessibilityLabel","activeThumbColor","activeTrackColor","disabled","onValueChange","style","thumbColor","trackColor","value"],Pe={},q="0px 1px 3px rgba(0,0,0,0.5)",Le=q+", 0 0 0 10px rgba(0,0,0,0.1)",De="#A3D3CF",Fe="#939393",ee="#D5D5D5",$e="#009688",Re="#FAFAFA",te="#BDBDBD",ne=o.forwardRef((e,r)=>{var u=e["aria-label"],d=e.accessibilityLabel,f=e.activeThumbColor,h=e.activeTrackColor,c=e.disabled,l=c===void 0?!1:c,w=e.onValueChange,i=e.style,b=i===void 0?Pe:i,m=e.thumbColor,t=e.trackColor,v=e.value,a=v===void 0?!1:v,p=xe(e,Ae),s=o.useRef(null);function S(C){w!=null&&w(C.nativeEvent.target.checked)}function j(C){var O=C.nativeEvent.type==="focus",U=O?Le:q;s.current!=null&&(s.current.style.boxShadow=U)}var T=W.flatten(b),_=T.height,y=T.width,g=_||"20px",x=X(g,2),B=y>x?y:x,D=X(g,.5),P=function(){return a===!0?t!=null&&typeof t=="object"?t.true:h??De:t!=null&&typeof t=="object"?t.false:t??Fe}(),k=a?f??$e:m??Re,F=g,$=F,V=[E.root,b,l&&E.cursorDefault,{height:g,width:B}],H=function(){return a===!0?typeof h=="string"&&h!=null||typeof t=="object"&&t!=null&&t.true?P:ee:typeof t=="string"&&t!=null||typeof t=="object"&&t!=null&&t.false?P:ee}(),L=function(){return a===!0?f==null?te:k:m==null?te:k}(),R=[E.track,{backgroundColor:l?H:P,borderRadius:D}],N=[E.thumb,a&&E.thumbActive,{backgroundColor:l?L:k,height:F,marginStart:a?X($,-1):0,width:$}],M=ke("input",{"aria-label":u||d,checked:a,disabled:l,onBlur:j,onChange:S,onFocus:j,ref:r,style:[E.nativeControl,E.cursorInherit],type:"checkbox",role:"switch"});return o.createElement(G,we({},p,{style:V}),o.createElement(G,{style:R}),o.createElement(G,{ref:s,style:N}),M)});ne.displayName="Switch";var E=W.create({root:{cursor:"pointer",userSelect:"none"},cursorDefault:{cursor:"default"},cursorInherit:{cursor:"inherit"},track:z(z({forcedColorAdjust:"none"},W.absoluteFillObject),{},{height:"70%",margin:"auto",transitionDuration:"0.1s",width:"100%"}),thumb:{forcedColorAdjust:"none",alignSelf:"flex-start",borderRadius:"100%",boxShadow:q,start:"0%",transform:"translateZ(0)",transitionDuration:"0.1s"},thumbActive:{insetInlineStart:"100%"},nativeControl:z(z({},W.absoluteFillObject),{},{height:"100%",margin:0,appearance:"none",padding:0,width:"100%"})});const Ie=ne;var ze={};const A=ce({checked:!1,disabled:!1,size:void 0,frameWidth:0,unstyled:ze.TAMAGUI_HEADLESS==="1"});var le={};const ie=ae(ve,{name:"SwitchThumb",context:A,variants:{unstyled:{false:{size:"$true",backgroundColor:"$background",borderRadius:1e3}},checked:{true:{}},size:{"...size":e=>{const r=Y(e);return{height:r,width:r}}}},defaultVariants:{unstyled:le.TAMAGUI_HEADLESS==="1"}}),Y=e=>Math.round(de(Ce(e))*.65),We=e=>Y(e)*2,se=ae(oe,{name:"Switch",context:A,variants:{unstyled:{false:{size:"$true",borderRadius:1e3,backgroundColor:"$background",borderWidth:2,borderColor:"$background",focusStyle:{outlineColor:"$borderColorFocus",outlineStyle:"solid",outlineWidth:2}}},checked:{true:{}},frameWidth:{":number":()=>null},size:{"...size":e=>{const r=Y(e)+4,u=We(e)+4;return{height:r,minHeight:r,width:u}}}},defaultVariants:{unstyled:le.TAMAGUI_HEADLESS==="1"}});var Be={};function Ve({disableActiveTheme:e,Frame:r=se,Thumb:u=ie}){r.staticConfig.context=A,u.staticConfig.context=A;const d=u.styleable(function(l,w){const{size:i,unstyled:b,...m}=l,t=o.useContext(A),{disabled:v,checked:a,unstyled:p,frameWidth:s,size:S}=t,[j,T]=o.useState(0),_=o.useRef(a).current,y=s-j,g=_?a?0:-y:a?y:0;return n.jsx(u,{...(b??p??!1)===!1&&{unstyled:Be.TAMAGUI_HEADLESS==="1",size:i??S??"$true",...!e&&{theme:a?"active":null}},"data-state":c(a),"data-disabled":v?"":void 0,alignSelf:_?"flex-end":"flex-start",checked:a,x:g,...m,onLayout:Z(l.onLayout,x=>T(x.nativeEvent.layout.width)),ref:w})}),f=r.styleable(function(l,w){const i=o.useContext(A),b=ye(l,{noNormalize:!0,noExpand:!0,resolveValues:"none",forComponent:r}),{labeledBy:m,name:t,checked:v,defaultChecked:a,required:p,disabled:s,value:S="on",onCheckedChange:j,size:T=i.size??"$true",unstyled:_=i.unstyled??!1,native:y,nativeProps:g,children:x,...B}=b,D=Array.isArray(y)?y:[y],P=D.includes("android")&&Q.OS==="android"||D.includes("ios")&&Q.OS==="ios",[k,F]=o.useState(null),$=he(w,F),V=me(k),H=m||V,L=o.useRef(!1),R=k?!!k.closest("form"):!0,[N,M]=o.useState(0),[C=!1,O]=pe({prop:v,defaultProp:a||!1,onChange:j,transition:!0});if(P)return n.jsx(Ie,{value:v,onValueChange:j,...g});const U=o.useContext(K);return n.jsxs(n.Fragment,{children:[n.jsx(K.Provider,{value:!0,children:n.jsx(r,{tag:U?"span":"button",unstyled:_,size:T,checked:C,disabled:s,frameWidth:N,themeShallow:!0,...!e&&{theme:C?"active":null,themeShallow:!0},role:"switch","aria-checked":C,"aria-labelledby":H,"aria-required":p,"data-state":c(C),"data-disabled":s?"":void 0,tabIndex:s?void 0:0,value:S,...B,ref:$,onPress:Z(b.onPress,I=>{O(ue=>!ue),R&&(L.current=I.isPropagationStopped(),L.current||I.stopPropagation())}),children:n.jsx(oe,{alignSelf:"stretch",flex:1,onLayout:I=>{M(I.nativeEvent.layout.width)},children:typeof x=="function"?x(C):x})})}),R&&n.jsx(h,{control:k,bubbles:!L.current,name:t,value:S,checked:C,required:p,disabled:s,style:{transform:"translateX(-100%)"}})]})},{disableTheme:!0}),h=l=>{const{control:w,checked:i,bubbles:b=!0,...m}=l,t=o.useRef(null),v=ge(i);return o.useEffect(()=>{const a=t.current,p=window.HTMLInputElement.prototype,s=Object.getOwnPropertyDescriptor(p,"checked").set;if(v!==i&&s){const S=new Event("click",{bubbles:b});s.call(a,i),a.dispatchEvent(S)}},[v,i,b]),n.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:i,...m,tabIndex:-1,ref:t,style:{...l.style,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function c(l){return l?"checked":"unchecked"}return Se(f,{Thumb:d})}const re=Ve({Frame:se,Thumb:ie});function He({labelLeft:e,labelRight:r,space:u,size:d="$2",thumbProps:f,...h}){const c=o.useId();return n.jsxs(fe,{alignItems:"center",space:"$4",children:[e&&n.jsx(J,{htmlFor:c,size:d,children:e}),n.jsx(re,{id:c,...h,size:d,children:n.jsx(re.Thumb,{animation:"bouncy",...f})}),r&&n.jsx(J,{htmlFor:c,size:d,children:r})]})}function Ze({name:e,control:r,rules:u={},defaultValue:d,...f}){return n.jsx(be,{name:e,rules:u,control:r,defaultValue:d,render:({field:{onChange:h,value:c}})=>n.jsx(He,{...f,onCheckedChange:h,value:c,checked:!!c})})}export{He as L,Ze as a};