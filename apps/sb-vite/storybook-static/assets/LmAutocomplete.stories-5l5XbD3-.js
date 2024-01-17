import{j as e,Y as pe}from"./Stacks-0gbGCfo_.js";import{c as ne}from"./LmAutocomplete-NoLHYyOy.js";import{L as A}from"./LmFormRhfProvider-MfKdt-_d.js";import{r as le}from"./index-4g5l5LRQ.js";import"./LmGrid-eqtElkhI.js";import{L as j}from"./LmSubmitButtonRhf-Avoct4me.js";import{C as ue}from"./index.esm-SaFMQc_X.js";import{c as D}from"./LmGrid-plcUvv-o.js";import{a as w}from"./chunk-WFFRPTHA-Km4WEIcQ.js";import{f as ce}from"./selectItems-62Hhm5qZ.js";import{B as de}from"./index-LvVOA0P4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-U7_1MBcJ.js";import"./index-o7np2shc.js";import"./EventEmitter-8bYFdwfg.js";import"./index-iwWdm5Ml.js";import"./toPropertyKey-k__UqEPR.js";import"./extends-dGVwEr9R.js";import"./GorhomPortal-iqDikvYy.js";import"./usePopoverState-tTqBLx82.js";import"./Headings-cv8zjVaZ.js";import"./LmSheet-bc2z_fGT.js";import"./Popover-ecl2xeOz.js";import"./Text-O_a08Nna.js";import"./ListItem-ZhdiTpgl.js";import"./preview-errors-KFwZ_tMd.js";import"./index-PPLHz8o0.js";import"./v4-cyCr5FZV.js";function a({name:o,rules:L,control:se,defaultValue:me,matchId:I,options:P,multiple:x,...l}){return e.jsx(ue,{name:o,rules:L,control:se,defaultValue:me,render:({field:{onChange:ie,value:s},fieldState:{error:R}})=>{let M=x?s||[]:s||null;return I&&(M=x?(s||[]).map(r=>P.find(n=>(n.value||n)===r)):P.find(r=>(r.value||r)===s)||null),e.jsx(ne,{...l,value:M,multiple:x,options:P,error:!!R,onChange:r=>{let n=r;I&&(n=Array.isArray(r)?r.map(m=>(m==null?void 0:m.value)||m):(r==null?void 0:r.value)||r),ie(n),typeof l.onChange=="function"&&l.onChange(r)},helperText:R?R.message:l.helperText})}})}const $e={title:"form/Autocomplete",component:ne},t=ce,i={args:{options:t,label:"Autocomplete Label"}},p={args:{options:t,label:"Autocomplete Label",size:"$5"}},u={args:{options:t,labelInline:!0,label:"Autocomplete Label"}},c={args:{options:t,labelInline:!0,label:"Label",size:"$5"}},d={args:{options:t,multiple:!0}},h={args:{options:t,disableSearch:!0}},b={args:{options:t,allowNew:!0}},f={parameters:{docs:{source:{}}},args:{options:t},render:()=>e.jsx(A,{defaultValues:{pre:{value:"Pear",label:"Pear"},pre_matched:"Pear"},children:e.jsxs(pe,{space:!0,children:[e.jsx(a,{label:"Single",name:"autocomplete",options:t}),e.jsx(a,{label:"Single Preselected",name:"pre",options:t}),e.jsx(a,{label:"Single Preselected - Match ID",name:"pre_matched",matchId:!0,options:t}),e.jsx(a,{label:"With Allow New Hook",name:"with-hook",options:t.map(o=>({...o,otherVal:o.value})),allowNew:!0,allowNewHook:o=>({label:o,value:(Math.random()+1).toString(36).substring(7)})}),e.jsx(j,{onSubmit:w("formData"),children:"Submit"})]})})},g=()=>{const[o,L]=le.useState({pre:[{value:"Pear",label:"Pear"}],pre_matched:["Pear"]});return e.jsx(A,{defaultValues:{...o},children:e.jsxs("div",{children:[e.jsx(a,{label:"Multiple",name:"autocomplete",options:t,multiple:!0}),e.jsx(a,{label:"Multiple Preselected",name:"pre",options:t,multiple:!0}),e.jsx(a,{label:"Multiple - Match ID",name:"pre_matched",matchId:!0,options:t,multiple:!0}),e.jsx(j,{onSubmit:w("formData"),children:"Submit"})]})})},S=()=>{const[o,L]=le.useState({pre:[{value:"Pear",label:"Pear"}],pre_matched:["Pear"]});return e.jsx(D,{trigger:e.jsx(de,{children:"Open Dialog"}),children:e.jsx(A,{defaultValues:{...o},children:e.jsxs(D.Content,{children:[e.jsx(a,{popoverProps:{contentProps:{zIndex:25e4}},label:"Multiple",name:"autocomplete",options:t,multiple:!0}),e.jsx(a,{label:"Multiple Preselected",name:"pre",options:t,multiple:!0}),e.jsx(a,{label:"Multiple - Match ID",name:"pre_matched",matchId:!0,options:t,multiple:!0}),e.jsx(j,{onSubmit:w("formData"),children:"Submit"})]})})})};var v,_,F;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options,
    label: 'Autocomplete Label'
  }
}`,...(F=(_=i.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var V,B,z;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    options,
    label: 'Autocomplete Label',
    size: '$5'
  }
}`,...(z=(B=p.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var N,k,C;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    options,
    labelInline: true,
    label: 'Autocomplete Label'
  }
}`,...(C=(k=u.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var y,H,W;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    options,
    labelInline: true,
    label: 'Label',
    size: '$5'
  }
}`,...(W=(H=c.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var Y,$,E;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    options,
    multiple: true
  }
}`,...(E=($=d.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var O,T,q;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options,
    disableSearch: true
  }
}`,...(q=(T=h.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var G,J,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    options,
    allowNew: true
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {}
    }
  },
  args: {
    options
  },
  render: () => <LmFormRhfProvider defaultValues={{
    pre: {
      value: 'Pear',
      label: 'Pear'
    },
    pre_matched: 'Pear'
  }}>
      <YStack space>
        <LmAutocompleteRhf label={'Single'} name={'autocomplete'} options={options} />
        <LmAutocompleteRhf label={'Single Preselected'} name={'pre'} options={options} />
        <LmAutocompleteRhf label={'Single Preselected - Match ID'} name={'pre_matched'} matchId={true} options={options} />
        <LmAutocompleteRhf label={'With Allow New Hook'} name={'with-hook'} options={options.map(i => ({
        ...i,
        otherVal: i.value
      }))} allowNew allowNewHook={newValue => ({
        label: newValue,
        value: (Math.random() + 1).toString(36).substring(7)
      })} />
        <LmSubmitButtonRhf onSubmit={action('formData')}>Submit</LmSubmitButtonRhf>
      </YStack>
    </LmFormRhfProvider>
}`,...(X=(U=f.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,ee,te;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const [form, setForm] = useState<any>({
    pre: [{
      value: 'Pear',
      label: 'Pear'
    }],
    pre_matched: ['Pear']
  });
  return <LmFormRhfProvider defaultValues={{
    ...form
  }}>
      <div>
        <LmAutocompleteRhf label={'Multiple'} name={'autocomplete'} options={options} multiple />
        <LmAutocompleteRhf label={'Multiple Preselected'} name={'pre'} options={options} multiple />
        <LmAutocompleteRhf label={'Multiple - Match ID'} name={'pre_matched'} matchId options={options} multiple />
        <LmSubmitButtonRhf onSubmit={action('formData')}>Submit</LmSubmitButtonRhf>
      </div>
    </LmFormRhfProvider>;
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,oe,ae;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const [form, setForm] = useState<any>({
    pre: [{
      value: 'Pear',
      label: 'Pear'
    }],
    pre_matched: ['Pear']
  });
  return <LmDialog trigger={<Button>Open Dialog</Button>}>
      <LmFormRhfProvider defaultValues={{
      ...form
    }}>
        <LmDialog.Content>
          <LmAutocompleteRhf popoverProps={{
          contentProps: {
            zIndex: 250000
          }
        }} label={'Multiple'} name={'autocomplete'} options={options} multiple />
          <LmAutocompleteRhf label={'Multiple Preselected'} name={'pre'} options={options} multiple />
          <LmAutocompleteRhf label={'Multiple - Match ID'} name={'pre_matched'} matchId options={options} multiple />
          <LmSubmitButtonRhf onSubmit={action('formData')}>Submit</LmSubmitButtonRhf>
        </LmDialog.Content>
      </LmFormRhfProvider>
    </LmDialog>;
}`,...(ae=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};const Ee=["Single","SingleSized","SingleInline","SingleInlineSized","Multiple","WithoutSearch","AllowNew","SingleRhf","MultipleRhf","InsideDialog"];export{b as AllowNew,S as InsideDialog,d as Multiple,g as MultipleRhf,i as Single,u as SingleInline,c as SingleInlineSized,f as SingleRhf,p as SingleSized,h as WithoutSearch,Ee as __namedExportsOrder,$e as default};
