import{j as e,Y as o}from"./Stacks-cf55noxu.js";import{L as p}from"./LmSheet-yZcxhf80.js";import{L as s,X as d}from"./LmGrid-dD4DUrOQ.js";import{u as l}from"./usePopoverState-AcQ9Dkm1.js";import{T as h}from"./Text-GPmJrOtX.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-_wg5PwQV.js";import"./EventEmitter-3h9cKSNS.js";import"./toPropertyKey-NzAT2yhV.js";import"./index-TmN4oE2O.js";import"./extends-nGe_wfaW.js";import"./index-iwWdm5Ml.js";import"./Headings-zc2v6h-R.js";const R={title:"core/Panels/Sheet",component:p},n=()=>{const t=l();return e.jsxs(o,{children:[e.jsx(s,{onPress:()=>t.onOpenChange(!0),children:"Open Sheet"}),e.jsx(p,{...t,children:e.jsx(h,{padding:"$4",children:"Some Sheet content"})})]})},r=()=>{const t=l();return e.jsxs(o,{children:[e.jsx(s,{onPress:()=>t.onOpenChange(!0),children:"Open Sheet"}),e.jsx(p,{...t,fullScreen:!0,children:e.jsxs(o,{justifyContent:"center",flex:1,alignItems:"center",children:[e.jsx(h,{padding:"$4",children:"Some Sheet content"}),e.jsx(s,{icon:e.jsx(d,{}),onPress:()=>t.onOpenChange(!1),children:"Close"})]})})]})};var a,c,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const props = usePopoverState();
  return <YStack>
      <LmButton onPress={() => props.onOpenChange(true)}>Open Sheet</LmButton>
      <LmSheet {...props}>
        <Text padding={'$4'}>Some Sheet content</Text>
      </LmSheet>
    </YStack>;
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,u,S;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const props = usePopoverState();
  return <YStack>
      <LmButton onPress={() => props.onOpenChange(true)}>Open Sheet</LmButton>
      <LmSheet {...props} fullScreen>
        <YStack justifyContent={'center'} flex={1} alignItems={'center'}>
          <Text padding={'$4'}>Some Sheet content</Text>
          <LmButton icon={<XRegular />} onPress={() => props.onOpenChange(false)}>
            Close
          </LmButton>
        </YStack>
      </LmSheet>
    </YStack>;
}`,...(S=(u=r.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const X=["Basic","FullScreen"];export{n as Basic,r as FullScreen,X as __namedExportsOrder,R as default};
