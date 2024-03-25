import{c as Re,e as U,j as r,k as X,S as Ce,d as _,s as K,g as Ae,X as Pe,Y as je}from"./Stacks-cf55noxu.js";import{a as Oe}from"./LmAutocomplete-wK2upo9r.js";import{L as De}from"./LmFormRhfProvider-PduC4BrJ.js";import{R as E,r as l}from"./index-4g5l5LRQ.js";import"./LmGrid--faLWKbq.js";import{L as $e}from"./LmSubmitButtonRhf-85k1ezmG.js";import{F as ve,w as ge,o as Me,T as z,b as Ne}from"./index-_wg5PwQV.js";import{u as Ue}from"./index-RduBmlIh.js";import{c as qe,u as Be,L as Ve}from"./usePopoverState-znF3ooTh.js";import{u as He}from"./index-TmN4oE2O.js";import{C as Ke}from"./index.esm-qGf7LkUX.js";import{a as ze}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{f as he}from"./selectItems-62Hhm5qZ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Text-GPmJrOtX.js";import"./Headings-zc2v6h-R.js";import"./ListItem-IOiP-Ieg.js";import"./EventEmitter-3h9cKSNS.js";import"./toPropertyKey-NzAT2yhV.js";import"./extends-nGe_wfaW.js";import"./index-iwWdm5Ml.js";import"./LmSheet-nphtVfUp.js";import"./Popover-jfxuliJS.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";function Ye(e){const{Provider:o,useStyledContext:t}=Re({collectionRef:{current:null},itemMap:new Map}),n=u=>{const{__scopeCollection:a,children:c}=u,d=E.useRef(null),s=E.useRef(new Map).current;return r.jsx(o,{scope:a,itemMap:s,collectionRef:d,children:c})};n.displayName="CollectionProvider";const p=e+"CollectionSlot",C=E.forwardRef((u,a)=>{const{__scopeCollection:c,children:d}=u,s=t(c),R=U(a,s.collectionRef);return r.jsx(X,{ref:R,children:d})});C.displayName=p;const m=e+"CollectionItemSlot",b="data-collection-item",f=E.forwardRef((u,a)=>{const{__scopeCollection:c,children:d,...s}=u,R=E.useRef(null),v=U(a,R),h=t(c);return E.useEffect(()=>(h.itemMap.set(R,{ref:R,...s}),()=>void h.itemMap.delete(R))),r.jsx(X,{[b]:"",ref:v,children:d})});f.displayName=m;function i(u){const a=t(u);return E.useCallback(()=>{const c=a.collectionRef.current;if(!c)return[];const d=Array.from(c.querySelectorAll(`[${b}]`));return Array.from(a.itemMap.values()).sort((s,R)=>d.indexOf(s.ref.current)-d.indexOf(R.ref.current))},[a.collectionRef,a.itemMap])}return[{Provider:n,Slot:C,ItemSlot:f},i]}const B="rovingFocusGroup.onEntryFocus",We={bubbles:!1,cancelable:!0},Xe=l.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:t,orientation:n,loop:p=!1,dir:C,currentTabStopId:m,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:f,onEntryFocus:i,...u}=e,a=l.useRef(null),c=U(o,a),d=qe(C),[s=null,R]=ve({prop:m,defaultProp:b??null,onChange:f}),[v,h]=l.useState(!1),k=He(i),T=xe(t||A),G=l.useRef(!1),[S,P]=l.useState(0);return l.useEffect(()=>{const I=a.current;if(I)return I.addEventListener(B,k),()=>I.removeEventListener(B,k)},[k]),r.jsx(Qe,{scope:t,orientation:n,dir:d,loop:p,currentTabStopId:s,onItemFocus:l.useCallback(I=>R(I),[R]),onItemShiftTab:l.useCallback(()=>h(!0),[]),onFocusableItemAdd:l.useCallback(()=>P(I=>I+1),[]),onFocusableItemRemove:l.useCallback(()=>P(I=>I-1),[]),children:r.jsx(Ce,{tabIndex:v||S===0?-1:0,"data-orientation":n,...u,ref:c,style:[{outline:"none"},e.style],onMouseDown:_(e.onMouseDown,()=>{G.current=!0}),onFocus:_(e.onFocus,I=>{const F=!G.current;if(I.target===I.currentTarget&&F&&!v){const g=new CustomEvent(B,We);if(I.currentTarget.dispatchEvent(g),!g.defaultPrevented){const L=T().filter(y=>y.focusable),q=L.find(y=>y.active),ke=L.find(y=>y.id===s),Te=[q,ke,...L].filter(Boolean).map(y=>y.ref.current);_e(Te)}}G.current=!1}),onBlur:_(e.onBlur,()=>h(!1))})})}),Je="RovingFocusGroupItem",Ie=l.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:t,focusable:n=!0,active:p=!1,tabStopId:C,...m}=e,b=l.useId(),f=C||b,i=Ze(t),u=i.currentTabStopId===f,a=xe(t||A),{onFocusableItemAdd:c,onFocusableItemRemove:d}=i;return l.useEffect(()=>{if(n)return c(),()=>d()},[n,c,d]),r.jsx(H.ItemSlot,{__scopeCollection:t||A,id:f,focusable:n,active:p,children:r.jsx(Ce,{tabIndex:u?0:-1,"data-orientation":i.orientation,...m,ref:o,onMouseDown:_(e.onMouseDown,s=>{n?i.onItemFocus(f):s.preventDefault()}),onFocus:_(e.onFocus,()=>i.onItemFocus(f)),onKeyDown:_(e.onKeyDown,s=>{if(s.key==="Tab"&&s.shiftKey){i.onItemShiftTab();return}if(s.target!==s.currentTarget)return;const R=ro(s,i.orientation,i.dir);if(R!==void 0){s.preventDefault();let v=a().filter(h=>h.focusable).map(h=>h.ref.current);if(R==="last")v.reverse();else if(R==="prev"||R==="next"){R==="prev"&&v.reverse();const h=v.indexOf(s.currentTarget);v=i.loop?to(v,h+1):v.slice(h+1)}setTimeout(()=>_e(v))}})})})});Ie.displayName=Je;const Se="RovingFocusGroup",[H,xe]=Ye(Se),{Provider:Qe,useStyledContext:Ze}=Re(),A="RovingFocusGroupContext",Y=ge(l.forwardRef((e,o)=>r.jsx(H.Provider,{__scopeCollection:e.__scopeRovingFocusGroup||A,children:r.jsx(H.Slot,{__scopeCollection:e.__scopeRovingFocusGroup||A,children:r.jsx(Xe,{...e,ref:o})})})),{Item:Ie});Y.displayName=Se;const eo={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function oo(e,o){return o!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function ro(e,o,t){const n=oo(e.key,t);if(!(o==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(o==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return eo[n]}function _e(e){const o=document.activeElement;for(const t of e)if(t===o||(t.focus(),document.activeElement!==o))return}function to(e,o){return e.map((t,n)=>e[(o+n)%e.length])}var Fe={};const w="RadioGroup",no=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],[ye,Oo]=Me(w),[ao,so]=ye(w),Ee=e=>e?"checked":"unchecked",W="RadioGroupIndicator",J=K(z,{name:W,variants:{unstyled:{false:{width:"33%",height:"33%",borderRadius:1e3,backgroundColor:"$color",pressTheme:!0}}},defaultVariants:{unstyled:Fe.TAMAGUI_HEADLESS==="1"}}),we=J.extractable(l.forwardRef((e,o)=>{const{__scopeRadioGroupItem:t,forceMount:n,disabled:p,...C}=e,{checked:m}=co(W,t);return n||m?r.jsx(J,{"data-state":Ee(m),"data-disabled":p?"":void 0,...C,ref:o}):null}));we.displayName=W;const Ge="RadioGroupItem",[io,co]=ye(w),Q=K(z,{name:Ge,tag:"button",variants:{unstyled:{false:{size:"$true",borderRadius:1e3,backgroundColor:"$background",alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:"$borderColor",padding:0,hoverStyle:{borderColor:"$borderColorHover",backgroundColor:"$backgroundHover"},focusStyle:{borderColor:"$borderColorHover",backgroundColor:"$backgroundHover",outlineStyle:"solid",outlineWidth:2,outlineColor:"$outlineColor"},pressStyle:{borderColor:"$borderColorFocus",backgroundColor:"$backgroundFocus"}}},disabled:{true:{pointerEvents:"none",userSelect:"none",cursor:"not-allowed",hoverStyle:{borderColor:"$borderColor",backgroundColor:"$background"},pressStyle:{borderColor:"$borderColor",backgroundColor:"$backgroundColor"},focusStyle:{outlineWidth:0}}},size:{"...size":(e,{props:o})=>{const t=Math.floor(Ae(Ne(e))*(o.scaleSize??.5));return{width:t,height:t}}}},defaultVariants:{unstyled:Fe.TAMAGUI_HEADLESS==="1"}}),lo=Q.extractable(l.forwardRef((e,o)=>{const{__scopeRadioGroup:t,value:n,labelledBy:p,disabled:C,...m}=e,{value:b,disabled:f,required:i,onChange:u,name:a,native:c,accentColor:d}=so(Ge,t),[s,R]=l.useState(null),v=l.useRef(!1),h=l.useRef(null),k=U(o,g=>R(g),h),T=l.useRef(!1),G=s?!!s.closest("form"):!0,S=b===n,P=Be(s),I=p||P;l.useEffect(()=>{{const g=q=>{no.includes(q.key)&&(T.current=!0)},L=()=>{T.current=!1};return document.addEventListener("keydown",g),document.addEventListener("keyup",L),()=>{document.removeEventListener("keydown",g),document.removeEventListener("keyup",L)}}},[]);const F=f||C;return r.jsx(io,{checked:S,scope:t,children:c?r.jsx(Z,{control:s,bubbles:!v.current,name:a,value:n,checked:S,required:i,disabled:F,id:e.id,accentColor:d}):r.jsxs(r.Fragment,{children:[r.jsx(Y.Item,{__scopeRovingFocusGroup:w,asChild:"except-style",focusable:!F,active:S,children:r.jsx(Q,{"data-state":Ee(S),"data-disabled":F?"":void 0,role:"radio","aria-labelledby":I,"aria-checked":S,"aria-required":i,disabled:F,ref:k,type:"button",value:n,...m,onPress:_(e.onPress,g=>{S||(u==null||u(n)),G&&(v.current=g.isPropagationStopped(),v.current||g.stopPropagation())}),onKeyDown:_(e.onKeyDown,g=>{g.key==="Enter"&&g.preventDefault()}),onFocus:_(m.onFocus,()=>{var g;T.current&&((g=h.current)==null||g.click())})})}),G&&r.jsx(Z,{isHidden:!0,control:s,bubbles:!v.current,name:a,value:n,checked:S,required:i,disabled:F})]})})})),Z=e=>{const{checked:o,bubbles:t=!0,control:n,isHidden:p,accentColor:C,...m}=e,b=l.useRef(null),f=Ue(o);return l.useEffect(()=>{const i=b.current,u=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(u,"checked").set;if(f!==o&&a){const c=new Event("click",{bubbles:t});a.call(i,o),i.dispatchEvent(c)}},[f,o,t]),r.jsx("input",{type:"radio",defaultChecked:o,...m,tabIndex:-1,ref:b,"aria-hidden":p,style:{...p?{position:"absolute",pointerEvents:"none",opacity:0,margin:0}:{appearance:"auto",accentColor:C},...e.style}})},ee=K(z,{name:w,variants:{orientation:{horizontal:{flexDirection:"row",spaceDirection:"horizontal"},vertical:{flexDirection:"column",spaceDirection:"vertical"}}}}),N=ge(ee.extractable(l.forwardRef((e,o)=>{const{__scopeRadioGroup:t,value:n,defaultValue:p,onValueChange:C,disabled:m=!1,required:b=!1,name:f,orientation:i,native:u,accentColor:a,...c}=e,[d,s]=ve({prop:n,defaultProp:p,onChange:C});return r.jsx(ao,{scope:t,value:d,required:b,onChange:s,disabled:m,name:f,native:u,accentColor:a,children:r.jsx(Y,{__scopeRovingFocusGroup:w,orientation:i,loop:!0,children:r.jsx(ee,{role:"radiogroup","aria-orientation":i,ref:o,orientation:i,"data-disabled":m?"":void 0,...c})})})})),{Indicator:we,Item:lo});N.displayName=w;function Le({options:e,required:o,error:t,helperText:n,helperTextProps:p,label:C,labelInline:m,labelProps:b,size:f="$3",spaceItem:i="$2",containerProps:u,...a}){return r.jsx(Oe,{error:t,required:o,labelProps:b,label:C,size:f,labelInline:m,helperText:n,helperTextProps:p,...u,children:r.jsx(N,{space:a.flexDirection==="row"?"$4":"$1",required:o,...a,children:e.map((c,d)=>r.jsxs(Pe,{alignItems:"center",space:i,children:[r.jsx(N.Item,{value:c.value,id:`${a.name}-${c.value}-${d}`,size:f,pressTheme:!0,children:r.jsx(N.Indicator,{})}),r.jsx(Ve,{size:f,htmlFor:`${a.name}-${c.value}-${d}`,cursor:"pointer",children:c.label})]},`${a.name}-${c.value}-${d}`))})})}function V({name:e,control:o,rules:t={},defaultValue:n,...p}){return p.required&&(t.required="This field is required"),r.jsx(Ke,{name:e,control:o,rules:t,defaultValue:n,render:({field:{onChange:C,value:m},fieldState:{error:b}})=>r.jsx(Le,{...p,name:e,value:m,onValueChange:C,error:!!b,helperText:b?b.message:p.helperText})})}const Do={title:"form/RadioGroup",component:Le},x=he.slice(0,8),j={args:{label:"Radio Group Label",name:"radio",options:x}},O={args:{label:"Radio Group Label",name:"radio",required:!0,options:x}},D={args:{label:"Radio Group Label",name:"radio",flexDirection:"row",options:x}},$={args:{label:"Radio Group Label",name:"radio",size:"$5",spaceItem:"$4",options:x}},M=()=>{var e;return r.jsx(je,{space:"$4",children:r.jsxs(De,{defaultValues:{pre:(e=x==null?void 0:x[1])==null?void 0:e.value},children:[r.jsx(V,{options:x.slice(4,7),name:"first",label:"First Option"}),r.jsx(V,{options:he.slice(9,11),name:"req",label:"Required Option",required:!0}),r.jsx(V,{options:x.slice(0,3),name:"pre",label:"Predefined Option"}),r.jsx($e,{onSubmit:ze("submit"),children:"Submit"})]})})};var oe,re,te;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: 'Radio Group Label',
    name: 'radio',
    options
  }
}`,...(te=(re=j.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,ae,se;O.parameters={...O.parameters,docs:{...(ne=O.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'Radio Group Label',
    name: 'radio',
    required: true,
    options
  }
}`,...(se=(ae=O.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ie,ce,le;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Radio Group Label',
    name: 'radio',
    flexDirection: 'row',
    options
  }
}`,...(le=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ue,de,pe;$.parameters={...$.parameters,docs:{...(ue=$.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'Radio Group Label',
    name: 'radio',
    size: '$5',
    spaceItem: '$4',
    options
  }
}`,...(pe=(de=$.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,fe,be;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`() => <YStack space={'$4'}>
    <LmFormRhfProvider defaultValues={{
    pre: options?.[1]?.value
  }}>
      <LmRadioGroupRhf options={options.slice(4, 7)} name={'first'} label={'First Option'} />
      <LmRadioGroupRhf options={fruitItemsFixtures.slice(9, 11)} name={'req'} label={'Required Option'} required />
      <LmRadioGroupRhf options={options.slice(0, 3)} name={'pre'} label={'Predefined Option'} />
      <LmSubmitButtonRhf onSubmit={action('submit')}>Submit</LmSubmitButtonRhf>
    </LmFormRhfProvider>
  </YStack>`,...(be=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};const $o=["Basic","Required","Inline","LargeSize","ReactHookForm"];export{j as Basic,D as Inline,$ as LargeSize,M as ReactHookForm,O as Required,$o as __namedExportsOrder,Do as default};