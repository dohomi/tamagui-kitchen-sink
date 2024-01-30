import{s as l,j as t,S as C,X as g,Y as k}from"./Stacks-cf55noxu.js";import{T as j}from"./index-_wg5PwQV.js";import"./index-4g5l5LRQ.js";import"./index-TmN4oE2O.js";import"./LmGrid--faLWKbq.js";import{L as S}from"./LmImage-bkyQyklE.js";import{a as R,H as w,P as f}from"./Headings-zc2v6h-R.js";import{C as s}from"./Card-MZrg_zQJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./EventEmitter-3h9cKSNS.js";import"./toPropertyKey-NzAT2yhV.js";import"./extends-nGe_wfaW.js";import"./index-iwWdm5Ml.js";import"./Image-E4WYJ6IT.js";import"./index-UfAEvnza.js";const $=l(j,{}),y={title:"core/Content/Aspect Ratio"},a=()=>t.jsx(C,{backgroundColor:"red",aspectRatio:16/9,width:200}),r=()=>t.jsxs(s,{elevate:!0,bordered:!0,aspectRatio:16/9,width:250,marginBottom:"$4",children:[t.jsxs(s.Header,{padded:!0,children:[t.jsx(w,{children:"16/9 cards "}),t.jsx(f,{children:"Fixed 250 width"})]}),t.jsx(s.Background,{aspectRatio:16/9,children:t.jsx($,{})})]}),e=()=>t.jsxs(g,{space:"$4",flexWrap:"wrap",children:[t.jsx(r,{}),t.jsx(r,{}),t.jsx(r,{}),t.jsx(r,{}),t.jsx(r,{})]}),o=()=>t.jsxs(k,{width:300,backgroundColor:"$green5",height:600,children:[t.jsx(R,{paddingBottom:"$4",children:"Parent Container: 300x600"}),t.jsx(S,{source:{uri:"https://placekitten.com/400/300",width:400,height:300},aspectRatio:4/3})]});var c,i,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"() => <Stack backgroundColor={'red'} aspectRatio={16 / 9} width={200}></Stack>",...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`() => <XStack space={'$4'} flexWrap={'wrap'}>
    <CustomCard />
    <CustomCard />
    <CustomCard />
    <CustomCard />
    <CustomCard />
  </XStack>`,...(n=(p=e.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var h,u,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => <YStack width={300} backgroundColor={'$green5'} height={600}>
    <H3 paddingBottom={'$4'}>Parent Container: 300x600</H3>
    <LmImage source={{
    uri: 'https://placekitten.com/400/300',
    width: 400,
    height: 300
  }} aspectRatio={4 / 3} />
  </YStack>`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const O=["RatioStack","CardsFixedWidth","ImageAspectRatio"];export{e as CardsFixedWidth,o as ImageAspectRatio,a as RatioStack,O as __namedExportsOrder,y as default};
