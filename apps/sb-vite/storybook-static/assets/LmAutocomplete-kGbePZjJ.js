import{T as H,G as V,B as Y,H as J}from"./index-_wg5PwQV.js";import{s as E,j as e,Y as K,S as M,X as B}from"./Stacks-cf55noxu.js";import{r as c}from"./index-4g5l5LRQ.js";import"./index-TmN4oE2O.js";import{L as N,T as Q,I as y,P as U,S as D,Y as F,a as Z,X as k,b as P}from"./usePopoverState-znF3ooTh.js";import{E as ee,g as te,h as se,i as ne,j as re,C as ae}from"./LmGrid--faLWKbq.js";import{P as oe}from"./Headings-zc2v6h-R.js";import{L as ie,a as ce}from"./ListItem-IOiP-Ieg.js";const ue=E(H,{variants:{fullWidth:{true:{width:"100%"}},labelInline:{true:{flexDirection:"row",space:"$3",alignItems:"center"}}}});function X({label:o,children:l,helperText:m,id:u,size:f,labelProps:r,required:p,error:j,helperTextProps:g,...d}){return e.jsxs(ue,{...d,space:d.labelInline?"$3":d.space,children:[o&&e.jsxs(N,{htmlFor:u,size:f||"$3",...r,color:j?"$red10":r==null?void 0:r.color,width:d.labelInline?150:r==null?void 0:r.width,justifyContent:d.labelInline?"flex-end":r==null?void 0:r.justifyContent,children:[o," ",p&&" *"]}),e.jsxs(K,{children:[l,m&&e.jsx(oe,{paddingLeft:"$2",marginTop:"$2",size:f,...g,color:j?"$red10":void 0,children:m})]})]})}const le=c.forwardRef(function({required:o,error:l,helperText:m,helperTextProps:u,label:f,labelProps:r,labelInline:p,multiline:j,containerProps:g,isPassword:d,passwordIconProps:S,fullWidth:i,...s},h){const C=c.useId(),[T,I]=c.useState(!1),w=s.id||C,x={...s};l&&(x.theme="red",x.borderColor=l?"$red8":void 0),i&&(x.minWidth="100%");let R=!!(s.secureTextEntry||d);return e.jsx(X,{id:w,error:l,required:o,labelProps:r,label:f,fullWidth:i,size:s.size,labelInline:p,helperText:m,helperTextProps:u,...g,children:j?e.jsx(Q,{...x,placeholderTextColor:s.placeholderTextColor,ref:h}):R?e.jsxs(M,{position:"relative",width:i?"100%":x==null?void 0:x.width,children:[e.jsx(y,{...x,ref:h,secureTextEntry:!T,autoCapitalize:"none",placeholderTextColor:s.placeholderTextColor}),e.jsx(U,{style:{position:"absolute",top:"50%",transform:[{translateY:-.5*20}],height:20,...(s==null?void 0:s.direction)==="rtl"?{left:15}:{right:15}},onPress:()=>{I($=>!$)},children:T?e.jsx(ee,{...S}):e.jsx(te,{...S})})]}):e.jsx(y,{...x,autoCapitalize:"none",ref:h})})});le.__docgenInfo={description:"",methods:[],displayName:"LmInput"};E(D.Track,{variants:{colorCustom:{":string":o=>({backgroundColor:o})}}});E(D.TrackActive,{variants:{colorCustom:{":string":o=>({backgroundColor:o})}}});function Te({options:o,labelInline:l,labelProps:m,helperText:u,helperTextProps:f,required:r,label:p,value:j,onChange:g,error:d,theme:S,allowNewHook:i,multiple:s=!1,popoverProps:h,containerProps:C,size:T,...I}){const w=c.useId(),[x,R]=c.useState(o),{width:$}=J(),v=Z(),[G,q]=c.useState(0),b=c.useRef(null),W=c.useRef(null),[a,z]=c.useState(j??(s?[]:null)),A=t=>Array.isArray(a)?!!(a!=null&&a.some(n=>n.value===t.value)):(a==null?void 0:a.value)===t.value,O=t=>{let n=null;s?n=A(t)?(a==null?void 0:a.filter(L=>L.value!==t.value))??[]:[...a??[],t]:n=A(t)?null:t,z(n),typeof g=="function"&&g(n)};c.useEffect(()=>{var n;const t=(n=b.current)==null?void 0:n.offsetWidth;t&&q(t)},[$]),c.useEffect(()=>{var t,n;v.open&&((n=(t=W.current)==null?void 0:t.focus)==null||n.call(t))},[v.open]);const _=Array.isArray(a)?a.map(t=>t==null?void 0:t.label).join(", "):(a==null?void 0:a.label)||"";return e.jsx(X,{id:w,error:d,required:r,labelProps:m,label:p,labelInline:l,helperText:u,helperTextProps:f,size:T,...C,children:e.jsxs(k,{ref:b,children:[e.jsx(k.Item,{children:e.jsx(y,{flex:1,value:_,size:T,theme:S,textOverflow:"ellipsis",onFocus:t=>{var n,L;v.onOpenChange(!v.open),(L=(n=t.target).blur)==null||L.call(n)}})}),e.jsx(k.Item,{children:e.jsx(P,{isBouncy:!0,...h,...v,offset:{mainAxis:15,crossAxis:-30},contentProps:{minWidth:G||void 0,maxWidth:"100%",...h==null?void 0:h.contentProps},trigger:e.jsx(Y,{size:T,icon:e.jsx(ae,{}),borderTopLeftRadius:0,borderBottomLeftRadius:0}),children:e.jsx(de,{ref:W,theme:S,options:x,isSelected:A,onChangeSelection:O,onAddNew:t=>{if(t){const n=typeof i=="function"?i(t):{value:t,label:t};R(L=>[n,...L])}},...I})})})]})})}const de=c.forwardRef(function({disableSearch:o,theme:l,placeholderSearch:m,options:u,allowNew:f,onAddNew:r,onChangeSelection:p,isSelected:j},g){const[d,S]=c.useState(),i=c.useDeferredValue(d),s=i!=null&&i.length?u.filter(C=>C.label.toLowerCase().includes(i)):u,h=!o||f;return e.jsx(e.Fragment,{children:e.jsxs(e.Fragment,{children:[h&&e.jsx(B,{padding:"$4",width:"100%",children:e.jsx(y,{theme:l,placeholder:m,width:"100%",ref:g,onChangeText:C=>{S(C.toLowerCase())}})}),e.jsxs(V,{keyboardShouldPersistTaps:"always",maxHeight:300,width:"100%",marginTop:h?void 0:"$4",marginBottom:"$4",children:[e.jsx(he,{options:s,onChangeSelection:p,isSelected:j}),f&&!(s!=null&&s.length)&&i&&e.jsx(B,{justifyContent:"flex-start",marginBottom:"$3",marginLeft:"$3",children:e.jsx(Y,{onPress:()=>r(i),chromeless:!0,icon:e.jsx(se,{}),children:i})})]})]})})});function he({options:o,isSelected:l,onChangeSelection:m}){return e.jsx(F,{borderRadius:0,children:o.map((u,f)=>e.jsx(F.Item,{children:e.jsx(ie,{hoverTheme:!0,pressTheme:!0,focusTheme:!0,cursor:"pointer",icon:l(u)?e.jsx(ne,{}):e.jsx(re,{}),onPress:()=>m(u),children:e.jsx(ce,{cursor:"pointer",children:u.label})})},u.value))})}export{le as L,X as a,Te as b};