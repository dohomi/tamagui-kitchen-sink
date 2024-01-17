import{j as e,Y as y}from"./Stacks-0gbGCfo_.js";import"./LmAutocomplete-NoLHYyOy.js";import{L as A}from"./LmFormRhfProvider-MfKdt-_d.js";import"./index-4g5l5LRQ.js";import"./LmGrid-eqtElkhI.js";import{L as E}from"./LmSubmitButtonRhf-Avoct4me.js";import{L as i,a as l}from"./LmCheckboxRhf-m8YY57rn.js";import{a as H}from"./chunk-WFFRPTHA-Km4WEIcQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-U7_1MBcJ.js";import"./index-o7np2shc.js";import"./EventEmitter-8bYFdwfg.js";import"./index-iwWdm5Ml.js";import"./toPropertyKey-k__UqEPR.js";import"./extends-dGVwEr9R.js";import"./index-LvVOA0P4.js";import"./Headings-cv8zjVaZ.js";import"./GorhomPortal-iqDikvYy.js";import"./usePopoverState-tTqBLx82.js";import"./LmSheet-bc2z_fGT.js";import"./Popover-ecl2xeOz.js";import"./Text-O_a08Nna.js";import"./ListItem-ZhdiTpgl.js";import"./index.esm-SaFMQc_X.js";import"./index-RduBmlIh.js";import"./preview-errors-KFwZ_tMd.js";import"./index-PPLHz8o0.js";import"./v4-cyCr5FZV.js";const de={title:"form/Checkbox",component:i},r={args:{label:"Please check this out"}},a={args:{label:"Blue theme",theme:"blue"}},o={args:{label:"Blue theme",labelProps:{color:"$orange10"},checkboxProps:{borderColor:"$orange10"}}},s={args:{label:"Checked",value:!0}},t={args:{label:"Indeterminate",checkboxProps:{checked:"indeterminate"}}},m={args:{label:"Disabled",disabled:!0}},c=()=>e.jsxs(y,{space:!0,children:[e.jsx(i,{label:"size default"}),e.jsx(i,{label:"size $4",size:"$4"}),e.jsx(i,{label:"size $6",size:"$6"})]}),n=()=>e.jsxs(A,{defaultValues:{pre:!0},children:[e.jsx(l,{name:"check",label:"Normal Checkbox"}),e.jsx(l,{name:"pre",label:"Already Checked"}),e.jsx(l,{name:"required",label:"Required Checkbox",required:!0}),e.jsx(E,{onSubmit:H("submit"),children:"Submit"})]});var p,u,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Please check this out'
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var b,h,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(Y=(I=n.parameters)==null?void 0:I.docs)==null?void 0:Y.source}}};const be=["Basic","Blue","Custom","Checked","Indeterminate","Disabled","Sizes","ReactHookForm"];export{r as Basic,a as Blue,s as Checked,o as Custom,m as Disabled,t as Indeterminate,n as ReactHookForm,c as Sizes,be as __namedExportsOrder,de as default};
