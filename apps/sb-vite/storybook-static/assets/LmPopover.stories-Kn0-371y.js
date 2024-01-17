import{j as e,X as m}from"./Stacks-0gbGCfo_.js";import{L as w}from"./LmSheet-CgRVZcqV.js";import{P as o}from"./Popover-ecl2xeOz.js";import{S as X,L as y,c as l}from"./LmGrid-plcUvv-o.js";import"./index-4g5l5LRQ.js";import{u as g}from"./usePopoverState-AcQ9Dkm1.js";import{L as A}from"./LmCard-_P2iXVzj.js";import{T as c}from"./Text-O_a08Nna.js";import{B as f}from"./index-LvVOA0P4.js";import{L as I}from"./ListItem-ZhdiTpgl.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-o7np2shc.js";import"./EventEmitter-8bYFdwfg.js";import"./index-iwWdm5Ml.js";import"./toPropertyKey-k__UqEPR.js";import"./extends-dGVwEr9R.js";import"./LmImage-ukrgdyje.js";import"./Image-i53vtBSC.js";import"./index-gD03JQuG.js";import"./Card-mWlqBstC.js";import"./Headings-cv8zjVaZ.js";function d({trigger:r,children:t,hideArrow:$,contentProps:n,isBouncy:D=!0,sheetProps:b,...k}){return e.jsxs(o,{size:"$5",...k,children:[e.jsx(o.Trigger,{asChild:!0,children:r}),e.jsx(o.Adapt,{when:"sm",platform:"touch",children:e.jsx(w,{...b,children:e.jsx(o.Adapt.Contents,{})})}),e.jsxs(o.Content,{borderWidth:1,borderColor:"$borderColor",...D&&{enterStyle:{x:0,y:-10,opacity:0},exitStyle:{x:0,y:-10,opacity:0,pointerEvents:"none"},x:0,y:0,o:1,animation:["quick",{opacity:{overshootClamping:!0}}]},elevate:!0,padding:(n==null?void 0:n.padding)||0,...n,children:[!$&&e.jsx(o.Arrow,{borderWidth:1,borderColor:"$borderColor"}),t]})]})}const te={title:"core/Panels/Popover",component:d},a={args:{showArrow:!0,trigger:e.jsx(c,{children:"Open Popover"}),children:e.jsxs(m,{space:!0,alignItems:"center",children:[e.jsx(X,{}),e.jsx(c,{padding:"$4",children:"Some Popover content"})]})}},s={args:{showArrow:!0,trigger:e.jsx(c,{children:"Open Popover"}),children:e.jsx(c,{padding:"$4",children:"Some Popover content"}),contentProps:{elevation:"$4",borderRadius:0}}},i=()=>e.jsxs(m,{space:!0,children:[e.jsx(d,{trigger:e.jsx(f,{children:"Open Tamagui Button"}),children:e.jsx(m,{padding:"$4",children:"Some content"})}),e.jsx(d,{trigger:e.jsx(y,{children:"Open LmButton"}),children:e.jsx(m,{padding:"$4",children:"Some content"})})]}),p=()=>{const r=g(),t=g();return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Complex Popover",subTitle:"Open Dialog inside Popover",children:e.jsx(d,{...r,trigger:e.jsx(f,{onPress:()=>r.onOpenChange(!0),children:"Open Popover"}),children:e.jsx(I,{onPress:()=>{r.onOpenChange(!1),t.onOpenChange(!0)},children:"Open Dialog"})})}),e.jsx(l,{...t,children:e.jsx(l.Content,{children:"Some Content"})})]})};var u,x,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: ({
    showArrow: true,
    trigger: <Text>Open Popover</Text>,
    children: <XStack space alignItems={'center'}>
        <StarRegular />
        <Text padding={'$4'}>Some Popover content</Text>
      </XStack>
  } as LmPopoverProps)
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var S,v,P;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: ({
    showArrow: true,
    trigger: <Text>Open Popover</Text>,
    children: <Text padding={'$4'}>Some Popover content</Text>,
    contentProps: {
      elevation: '$4',
      borderRadius: 0
    }
  } as LmPopoverProps)
}`,...(P=(v=s.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var L,j,C;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`() => <XStack space>
    <LmPopover trigger={<Button>Open Tamagui Button</Button>}>
      <XStack padding={'$4'}>Some content</XStack>
    </LmPopover>
    <LmPopover trigger={<LmButton>Open LmButton</LmButton>}>
      <XStack padding={'$4'}>Some content</XStack>
    </LmPopover>
  </XStack>`,...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var O,B,T;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const popoverState = usePopoverState();
  const dialogState = usePopoverState();
  return <>
      <LmCard title={'Complex Popover'} subTitle={'Open Dialog inside Popover'}>
        <LmPopover {...popoverState} trigger={<Button onPress={() => popoverState.onOpenChange(true)}>Open Popover</Button>}>
          <ListItem onPress={() => {
          popoverState.onOpenChange(false);
          dialogState.onOpenChange(true);
        }}>
            Open Dialog
          </ListItem>
        </LmPopover>
      </LmCard>
      <LmDialog {...dialogState}>
        <LmDialog.Content>Some Content</LmDialog.Content>
      </LmDialog>
    </>;
}`,...(T=(B=p.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const ne=["Basic","SquarePopover","CustomPosition","OpenDialog"];export{a as Basic,i as CustomPosition,p as OpenDialog,s as SquarePopover,ne as __namedExportsOrder,te as default};
