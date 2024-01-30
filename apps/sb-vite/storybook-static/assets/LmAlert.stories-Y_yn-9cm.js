import{j as t,X}from"./Stacks-cf55noxu.js";import"./index-4g5l5LRQ.js";import{I as g,W as N,b as T,C as q}from"./LmGrid-dD4DUrOQ.js";import{m as z}from"./index-_wg5PwQV.js";import"./index-TmN4oE2O.js";import{C as D}from"./Card-MZrg_zQJ.js";import{P as F}from"./Headings-zc2v6h-R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./EventEmitter-3h9cKSNS.js";import"./toPropertyKey-NzAT2yhV.js";import"./extends-nGe_wfaW.js";import"./index-iwWdm5Ml.js";const s={default:"$gray3",error:"$red10",info:"$blue10",warning:"$orange10",success:"$green10"};function G({severity:e="default",outlined:a,shouldInvert:u}){const r={};return a?r.color=s[e]:u&&(r.color="white"),{default:t.jsx(g,{...r}),error:t.jsx(N,{...r}),info:t.jsx(g,{...r}),warning:t.jsx(T,{...r}),success:t.jsx(q,{...r})}[e]}function H({severity:e="default",text:a,hideIcon:u,outlined:r,children:_,paragraphProps:B,xStackProps:L,iconProps:P,...p}){let d=z()==="light"&&e!=="default"&&!r;return t.jsx(D,{bordered:r,...r?{borderColor:s[e],color:s[e]}:{backgroundColor:s[e]},...p,padding:p.padding||"$4",children:t.jsxs(X,{space:!0,alignItems:"center",...L,children:[t.jsx(G,{shouldInvert:d,severity:e,outlined:r,...P}),a&&t.jsx(F,{color:r?s[e]:d?"white":void 0,...B,children:a}),_]})})}const or={title:"core/Content/Alert",component:H},o={args:{text:"Some basic alert text."}},n={args:{text:"Some basic alert text.",severity:"error"}},c={args:{text:"Some basic alert text.",severity:"info"}},i={args:{text:"Some basic alert text.",severity:"warning"}},m={args:{text:"Some basic alert text.",severity:"success"}},l={args:{text:"Some basic alert text.",severity:"warning",outlined:!0}};var x,f,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'Some basic alert text.'
  }
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,h,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'Some basic alert text.',
    severity: 'error'
  }
}`,...(j=(h=n.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var C,I,v;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: 'Some basic alert text.',
    severity: 'info'
  }
}`,...(v=(I=c.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var w,W,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: 'Some basic alert text.',
    severity: 'warning'
  }
}`,...(y=(W=i.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var $,R,A;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    text: 'Some basic alert text.',
    severity: 'success'
  }
}`,...(A=(R=m.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var E,k,O;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: 'Some basic alert text.',
    severity: 'warning',
    outlined: true
  }
}`,...(O=(k=l.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};const nr=["Basic","Error","Info","Warning","Success","WarningOutlined"];export{o as Basic,n as Error,c as Info,m as Success,i as Warning,l as WarningOutlined,nr as __namedExportsOrder,or as default};
