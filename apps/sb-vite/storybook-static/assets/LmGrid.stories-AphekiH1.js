import{j as r,S as l}from"./Stacks-cf55noxu.js";import"./index-_wg5PwQV.js";import"./index-4g5l5LRQ.js";import"./index-TmN4oE2O.js";import{a as e}from"./LmGrid-dD4DUrOQ.js";import{L as t}from"./LmCard-_C9bX3cF.js";import{a as c,P as x}from"./Headings-zc2v6h-R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./EventEmitter-3h9cKSNS.js";import"./toPropertyKey-NzAT2yhV.js";import"./extends-nGe_wfaW.js";import"./index-iwWdm5Ml.js";import"./LmImage-J69gcWFB.js";import"./Image-E4WYJ6IT.js";import"./index-UfAEvnza.js";import"./Card-MZrg_zQJ.js";const A={title:"core/Content/Grid",component:e},i=()=>r.jsxs(l,{width:"95%",overflow:"hidden",borderWidth:"$1",backgroundColor:"$blue4",children:[r.jsx(c,{borderBottomWidth:"$1",children:"Outside container 95% width"}),r.jsxs(e,{container:!0,row:!0,flexWrap:"wrap",gap:"$6",children:[r.jsx(e,{xs:"auto",children:r.jsx(t,{title:"Auto"})}),r.jsx(e,{width:"30%",elevation:"$4",hoverTheme:!0,pressTheme:!0,centered:!0,children:r.jsx(x,{children:"Width 30%"})}),r.jsx(e,{xs:"auto",children:r.jsx(t,{title:"Auto"})}),r.jsx(e,{xs:6,sm:3,children:r.jsx(t,{title:"XS 6 SM 3"})}),r.jsx(e,{xs:12,children:r.jsx(t,{title:"XS 12"})}),r.jsx(e,{children:r.jsx(t,{title:"Seven"})}),r.jsx(e,{children:r.jsx(t,{title:"Eight "})}),r.jsx(e,{xs:"auto",children:r.jsx(t,{title:"Auto"})}),r.jsx(e,{children:r.jsx(t,{title:"Ten"})}),r.jsx(e,{children:r.jsx(t,{title:"Eleven"})}),r.jsx(e,{children:r.jsx(t,{title:"Twelve"})})]})]}),d=()=>r.jsxs(l,{width:"95%",overflow:"hidden",borderWidth:"$1",children:[r.jsx(c,{borderBottomWidth:"$1",children:"Outside container 95% width, inside 600px"}),r.jsxs(e,{container:!0,height:450,children:[r.jsx(e,{height:"50px",backgroundColor:"$red2",children:"First"}),r.jsx(e,{xs:!0,backgroundColor:"$green3",children:"Second xs=true"}),r.jsx(e,{height:"30%",backgroundColor:"$blue3",children:"Third: height 30%"})]})]});var n,o,s;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Stack width={'95%'} overflow={'hidden'} borderWidth={'$1'} backgroundColor={'$blue4'}>
      <H3 borderBottomWidth={'$1'}>Outside container 95% width</H3>
      <LmGrid container row flexWrap={'wrap'} gap={'$6'}>
        <LmGrid xs={'auto'}>
          <LmCard title={'Auto'} />
        </LmGrid>
        <LmGrid width={'30%'} elevation={'$4'} hoverTheme pressTheme centered>
          <Paragraph>Width 30%</Paragraph>
        </LmGrid>
        <LmGrid xs={'auto'}>
          <LmCard title={'Auto'} />
        </LmGrid>
        <LmGrid xs={6} sm={3}>
          <LmCard title={'XS 6 SM 3'} />
        </LmGrid>
        <LmGrid xs={12}>
          <LmCard title={'XS 12'} />
        </LmGrid>
        <LmGrid>
          <LmCard title={'Seven'} />
        </LmGrid>
        <LmGrid>
          <LmCard title={'Eight '} />
        </LmGrid>
        <LmGrid xs={'auto'}>
          <LmCard title={'Auto'} />
        </LmGrid>
        <LmGrid>
          <LmCard title={'Ten'} />
        </LmGrid>
        <LmGrid>
          <LmCard title={'Eleven'} />
        </LmGrid>
        <LmGrid>
          <LmCard title={'Twelve'} />
        </LmGrid>
      </LmGrid>
    </Stack>;
}`,...(s=(o=i.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var m,a,h;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <Stack width={'95%'} overflow={'hidden'} borderWidth={'$1'}>
      <H3 borderBottomWidth={'$1'}>Outside container 95% width, inside 600px</H3>
      <LmGrid container height={450}>
        <LmGrid height={'50px'} backgroundColor={'$red2'}>
          First
        </LmGrid>
        <LmGrid xs backgroundColor={'$green3'}>
          Second xs=true
        </LmGrid>
        <LmGrid height={'30%'} backgroundColor={'$blue3'}>
          Third: height 30%
        </LmGrid>
      </LmGrid>
    </Stack>;
}`,...(h=(a=d.parameters)==null?void 0:a.docs)==null?void 0:h.source}}};const E=["GridRow","GridColumn"];export{d as GridColumn,i as GridRow,E as __namedExportsOrder,A as default};
