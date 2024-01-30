import{j as e,Y as y}from"./Stacks-cf55noxu.js";import"./LmAutocomplete-wK2upo9r.js";import{L as A}from"./LmFormRhfProvider-PduC4BrJ.js";import"./index-4g5l5LRQ.js";import"./LmGrid--faLWKbq.js";import{L as E}from"./LmSubmitButtonRhf-85k1ezmG.js";import{L as l,a as i}from"./LmCheckboxRhf-QgWE9zUd.js";import{a as H}from"./chunk-WFFRPTHA-zlNDxfrq.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-_wg5PwQV.js";import"./EventEmitter-3h9cKSNS.js";import"./toPropertyKey-NzAT2yhV.js";import"./index-TmN4oE2O.js";import"./extends-nGe_wfaW.js";import"./index-iwWdm5Ml.js";import"./Headings-zc2v6h-R.js";import"./usePopoverState-znF3ooTh.js";import"./LmSheet-nphtVfUp.js";import"./Popover-jfxuliJS.js";import"./Text-GPmJrOtX.js";import"./ListItem-IOiP-Ieg.js";import"./index.esm-qGf7LkUX.js";import"./index-RduBmlIh.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";const ie={title:"form/Checkbox",component:l},r={args:{label:"Please check this out"}},a={args:{label:"Blue theme",theme:"blue"}},o={args:{label:"Blue theme",labelProps:{color:"$orange10"},checkboxProps:{borderColor:"$orange10"}}},s={args:{label:"Checked",value:!0}},t={args:{label:"Indeterminate",checkboxProps:{checked:"indeterminate"}}},m={args:{label:"Disabled",disabled:!0}},c=()=>e.jsxs(y,{space:!0,children:[e.jsx(l,{label:"size default"}),e.jsx(l,{label:"size $4",size:"$4"}),e.jsx(l,{label:"size $6",size:"$6"})]}),n=()=>e.jsxs(A,{defaultValues:{pre:!0},children:[e.jsx(i,{name:"check",label:"Normal Checkbox"}),e.jsx(i,{name:"pre",label:"Already Checked"}),e.jsx(i,{name:"required",label:"Required Checkbox",required:!0}),e.jsx(E,{onSubmit:H("submit"),children:"Submit"})]});var u,p,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Please check this out'
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var b,h,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Blue theme',
    theme: 'blue'
  }
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var x,g,C;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Blue theme',
    labelProps: {
      color: '$orange10'
    },
    checkboxProps: {
      borderColor: '$orange10'
    }
  }
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var f,S,L;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Checked',
    value: true
  }
}`,...(L=(S=s.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var R,z,$;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate',
    checkboxProps: {
      checked: 'indeterminate'
    }
  }
}`,...($=(z=t.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var j,B,P;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...(P=(B=m.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var q,v,F;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`() => <YStack space>
    <LmCheckbox label={'size default'} />
    <LmCheckbox label={'size $4'} size={'$4'} />
    <LmCheckbox label={'size $6'} size={'$6'} />
  </YStack>`,...(F=(v=c.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var D,I,Y;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <LmFormRhfProvider defaultValues={{
    pre: true
  }}>
      <LmCheckboxRhf name={'check'} label={'Normal Checkbox'} />
      <LmCheckboxRhf name={'pre'} label={'Already Checked'} />
      <LmCheckboxRhf name={'required'} label={'Required Checkbox'} required={true} />
      <LmSubmitButtonRhf onSubmit={action('submit')}>Submit</LmSubmitButtonRhf>
    </LmFormRhfProvider>;
}`,...(Y=(I=n.parameters)==null?void 0:I.docs)==null?void 0:Y.source}}};const ue=["Basic","Blue","Custom","Checked","Indeterminate","Disabled","Sizes","ReactHookForm"];export{r as Basic,a as Blue,s as Checked,o as Custom,m as Disabled,t as Indeterminate,n as ReactHookForm,c as Sizes,ue as __namedExportsOrder,ie as default};
