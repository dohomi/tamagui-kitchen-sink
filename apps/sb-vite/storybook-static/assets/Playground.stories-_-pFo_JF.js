import{j as e,X as y,S as B,l as K,Y}from"./Stacks-0gbGCfo_.js";import{L as Q}from"./LmInputRhf-ImGXVrOp.js";import{L as U}from"./LmFormRhfProvider-9_Prmpy-.js";import{r as D}from"./index-4g5l5LRQ.js";import{e as Z,k as ee,l as te,m as re,n as oe,A as ae,o as ne,p as se}from"./LmGrid-eqtElkhI.js";import{b as ie,a as X}from"./LmAutocomplete-dW-1vfSQ.js";import{C as z,b as le}from"./index.esm-SaFMQc_X.js";import{S as ce}from"./SizableStack-eaWB0yh7.js";import{L as de}from"./LmAppShell.web-rk_NhiHq.js";import{N as ue,d as me,P as V,Y as fe}from"./index.esm-HDFLGYcx.js";import"./index-U7_1MBcJ.js";import{B as S}from"./index-LvVOA0P4.js";import"./GorhomPortal-iqDikvYy.js";import{b as xe,a as pe,X as O,I as he}from"./usePopoverState-tTqBLx82.js";import{S as G,e as ge,c as je}from"./Headings-cv8zjVaZ.js";import{P as ye}from"./EventEmitter-8bYFdwfg.js";import{f as De}from"./index-CImlS_Zq.js";import{f as Se}from"./selectItems-L3zF9VcJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./ListItem-ZhdiTpgl.js";import"./nonIterableRest-KDPF-jJ5.js";import"./router-context-ocpCsW_Y.js";import"./LmSheet-bc2z_fGT.js";import"./toPropertyKey-k__UqEPR.js";import"./context-66aOoSNQ.js";import"./createClass-ThaDA3Le.js";import"./index-o7np2shc.js";import"./extends-dGVwEr9R.js";import"./Popover-ecl2xeOz.js";import"./index-iwWdm5Ml.js";function be({name:a,rules:t,control:n,defaultValue:o,matchId:l,options:i,multiple:r,...s}){return e.jsx(z,{name:a,rules:t,control:n,defaultValue:o,render:({field:{onChange:u,value:m},fieldState:{error:c}})=>{let h=r?m||[]:m||null;return l&&(h=r?(m||[]).map(d=>i.find(f=>(f.value||f)===d)):i.find(d=>(d.value||d)===m)||null),e.jsx(ie,{...s,value:h,multiple:r,options:i,error:!!c,onChange:d=>{let f=d;l&&(f=Array.isArray(d)?d.map(p=>(p==null?void 0:p.value)||p):(d==null?void 0:d.value)||d),u(f),typeof s.onChange=="function"&&s.onChange(d)},helperText:c?c.message:s.helperText})}})}function Ce({count:a=5,onChange:t,value:n=null,disabled:o,required:l,error:i,helperText:r,helperTextProps:s,label:u,labelInline:m,labelProps:c,containerProps:h,iconProps:d,gap:f,Icon:p=Z,size:b="$1",colorHover:x="$yellow7",colorActiveHover:L="$yellow8",colorActive:$="$yellow10",color:T="$gray7",...F}){const v=D.useId(),[g,w]=D.useState(n),[R,I]=D.useState(null),k=Array.from(Array(a).keys());return e.jsx(X,{id:v,required:l,error:i,helperText:r,helperTextProps:s,label:u,labelInline:m,labelProps:c,...h,children:e.jsx(y,{gap:f,children:k.map(M=>{const j=M+1,C=j<=(g||0),H=j<=(R||0);return e.jsx(ce,{...F,size:b,circular:!0,onHoverIn:()=>{o||I(j)},onHoverOut:()=>{o||I(null)},onPress:()=>{if(o)return;const N=g===j?null:j;w(N),typeof t=="function"&&t(N)},children:e.jsx(p,{...d,size:b,color:C?H?L:$:H?x:T})},`${j}`)})})})}function Le({name:a,control:t,rules:n={},defaultValue:o,...l}){return e.jsx(z,{name:a,rules:n,control:t,defaultValue:o,render:({field:{onChange:i,value:r}})=>e.jsx(Ce,{...l,onChange:i,value:r??null})})}const A=({localeName:a,options:t,date:n})=>n?new Intl.DateTimeFormat(a,t??{month:"2-digit",year:"numeric",day:"2-digit"}).format(n):"",$e={rtl:!1,focusedDate:null,isDateFocused:()=>!1,isDateSelected:()=>!1,isDateHovered:()=>!1,isDateBlocked:()=>!1,isFirstOrLastSelectedDate:()=>!1,onDateFocus:()=>{},onDateHover:()=>{},onDateSelect:()=>{},onDayRender:void 0,goToPreviousMonthsByOneMonth:()=>{},goToPreviousMonths:()=>{},goToNextMonthsByOneMonth:()=>{},goToNextMonths:()=>{},goToPreviousYear:()=>{},goToNextYear:()=>{}},_=D.createContext($e),ve=({children:a,...t})=>e.jsx(_.Provider,{value:t,children:a}),J=()=>D.useContext(_),we=(a,t,n,o)=>({selectedFirstOrLastColor:l,normalColor:i,selectedColor:r,rangeHoverColor:s,disabledColor:u})=>t?l:a?r:n?s:o?u:i;function Re({dayLabel:a,date:t}){const n=D.useRef(null),o=J(),{isSelected:l,isSelectedStartOrEnd:i,isWithinHoverRange:r,disabledDate:s,onClick:u,onMouseEnter:m}=ue({date:t,dayRef:n,...o});if(!a)return e.jsx(B,{display:"flex",flex:1});const c=we(l,i,r,s);return e.jsx(G,{ref:n,onPress:u,onHoverIn:m,disabled:s,width:`${100/7}%`,textAlign:"center",paddingVertical:"$2",cursor:"pointer",backgroundColor:c({selectedFirstOrLastColor:"$blue7",normalColor:"$background",selectedColor:"$blue5",rangeHoverColor:"$blue6",disabledColor:"#FFFFFF"}),children:a})}function Ie({onPrevious:a,onNext:t,monthsCount:n,isFirst:o,isLast:l,...i}){const{days:r,weekdayLabels:s,monthLabel:u}=me({...i,monthLabelFormat(x){return new Intl.DateTimeFormat(void 0,{month:"long"}).format(x)}}),{goToPreviousYear:m,goToPreviousMonths:c,goToPreviousMonthsByOneMonth:h,goToNextMonthsByOneMonth:d,goToNextMonths:f,goToNextYear:p}=J(),{year:b}=i;return e.jsxs(B,{width:250,children:[e.jsxs(y,{space:"$2",justifyContent:"center",alignItems:"center",children:[e.jsx(S,{size:"$2",chromeless:!0,focusable:!1,circular:!0,onPress:()=>m(10),icon:e.jsx(ee,{})}),e.jsx(S,{size:"$2",chromeless:!0,circular:!0,focusable:!1,onPress:()=>m(1),icon:e.jsx(te,{})}),e.jsx(ge,{children:b}),e.jsx(S,{size:"$2",chromeless:!0,focusable:!1,onPress:()=>p(1),icon:e.jsx(re,{}),circular:!0}),e.jsx(S,{size:"$2",chromeless:!0,circular:!0,focusable:!1,onPress:()=>p(10),icon:e.jsx(oe,{})})]}),e.jsxs(y,{justifyContent:"space-between",alignItems:"center",height:40,children:[e.jsx(S,{focusable:!1,opacity:o?void 0:0,disabled:!o,onPress:n>1?c:h,icon:e.jsx(ae,{}),circular:!0,chromeless:!0}),e.jsx(je,{children:u}),e.jsx(S,{focusable:!1,opacity:l?void 0:0,disabled:!l,onPress:n>1?f:d,icon:e.jsx(ne,{}),circular:!0,chromeless:!0})]}),e.jsx(y,{flex:7,width:250,children:s.map(x=>e.jsx(G,{width:`${100/7}%`,textAlign:"center",paddingVertical:"$2",children:x},x))}),e.jsx(y,{display:"flex",flexWrap:"wrap",width:250,children:r.map((x,L)=>typeof x=="object"?e.jsx(Re,{dayLabel:x.dayLabel,date:x.date},x.date.toString()):e.jsx(B,{width:`${100/7}%`},L))}),e.jsx(y,{display:"flex"})]})}function Pe({activeMonths:a,monthsCount:t,firstDayOfWeek:n,labelFunctions:o,buttonProps:l,size:i,...r}){return e.jsx(xe,{isBouncy:!0,...r,contentProps:{padding:"$4",elevation:"$5",...r==null?void 0:r.contentProps},trigger:e.jsx(S,{icon:e.jsx(se,{}),borderTopLeftRadius:0,borderBottomLeftRadius:0,size:i,...l}),children:e.jsx(y,{space:!0,alignItems:"flex-start",children:a.map((s,u)=>e.jsx(Ie,{year:s.year,month:s.month,monthsCount:t,firstDayOfWeek:n,isFirst:t===0||u===0,isLast:t===0||u===t-1,...o},`${s.year}-${s.month}`))})})}function Te({numberOfMonths:a,isRangePicker:t,onChange:n,labelFunctions:o,startDate:l=null,endDate:i=null,required:r,error:s,helperText:u,helperTextProps:m,label:c,labelProps:h,labelInline:d,fullWidth:f,inputProps:p,buttonProps:b,popoverProps:x,containerProps:L,size:$}){const T=D.useId(),F=K(),v=pe(!1),[g,w]=D.useState({startDate:l,endDate:i,focusedInput:V}),R=t?F.xs?1:a??2:1,{activeMonths:I,firstDayOfWeek:k,...M}=fe({startDate:g.startDate,endDate:g.endDate,focusedInput:g.focusedInput,onDatesChange:C=>{C.focusedInput?w(C):w({...C,focusedInput:V}),typeof n=="function"&&n(C),t||v.onOpenChange(!1)},numberOfMonths:R,...!t&&{minBookingDays:1,exactMinBookingDays:!0}}),j=t?`${A({date:g.startDate})}${g.endDate?" - "+A({date:g.endDate}):""}`:A({date:g.startDate});return e.jsx(ve,{...M,children:e.jsx(X,{id:T,error:s,required:r,labelProps:h,label:c,labelInline:d,helperText:u,helperTextProps:m,fullWidth:f,size:$,...L,children:e.jsx(y,{space:!0,...f?{flexGrow:1}:{width:ye.OS==="web"?"100%":void 0},children:e.jsxs(O,{flexGrow:f?1:void 0,alignItems:"center",flexDirection:"row",children:[e.jsx(O.Item,{children:e.jsx(he,{width:"100%",minWidth:t?"$16":void 0,value:j,onPressIn:()=>v.onOpenChange(!0),size:$,...p})}),e.jsx(O.Item,{children:e.jsx(Pe,{activeMonths:I,monthsCount:R,firstDayOfWeek:k,labelFunctions:o,buttonProps:b,size:$,...v,...x})})]})})})})}function Fe({name:a,defaultValue:t,control:n,rules:o={},required:l,...i}){var m;l&&(o.required=o.required??"This field is required");const r=le({name:a,control:n,rules:o,defaultValue:t});let s=!!r.fieldState.error;const u=c=>c?typeof c=="string"?new Date(c):c:null;return e.jsx(Te,{...i,startDate:r.field.value?u(r.field.value):null,isRangePicker:!1,required:!!(o!=null&&o.required),onChange:c=>{const h=c.startDate?De(c.startDate,{representation:"date"}):"";r.field.onChange(h)},helperText:s?(m=r.fieldState.error)==null?void 0:m.message:i.helperText,error:s})}function ke(){const a={space:"$4",flexWrap:"wrap"};return e.jsx(de,{title:"Playground",children:e.jsx(U,{children:e.jsx(Y,{flex:1,justifyContent:"flex-start",alignItems:"flex-start",padding:"$4",space:!0,maxWidth:"100%",children:e.jsxs(Y,{...a,width:"100%",children:[e.jsx(be,{name:"autocomplete",label:"Autocomplete",options:Se}),e.jsx(Fe,{name:"date",label:"Date"}),e.jsx(Q,{name:"textfield",label:"Textfield"}),e.jsx(Le,{name:"stars"})]})})})})}const dt={title:"demo/playground"},P=()=>e.jsx(ke,{});var E,q,W;P.parameters={...P.parameters,docs:{...(E=P.parameters)==null?void 0:E.docs,source:{originalSource:"() => <PlaygroundScreen />",...(W=(q=P.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};const ut=["Playground"];export{P as Playground,ut as __namedExportsOrder,dt as default};