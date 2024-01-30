import{s as K,S as ee,V as re,j as e,d as ne,X as p,Y as T}from"./Stacks-cf55noxu.js";import{r as oe}from"./index-4g5l5LRQ.js";import{I as w,W as Q,q as ae,r as te,L as c,s as x}from"./LmGrid--faLWKbq.js";import{a as le}from"./usePopoverState-znF3ooTh.js";import{o as ie,w as se,m as me,B as ue}from"./index-_wg5PwQV.js";import"./index-TmN4oE2O.js";import{C as h}from"./Card-MZrg_zQJ.js";import{P as g,H as ce}from"./Headings-zc2v6h-R.js";import{L as de}from"./LmImage-bkyQyklE.js";import{C as v,a as pe,u as he}from"./index.esm-qGf7LkUX.js";import{L as fe,b as ge}from"./LmAutocomplete-wK2upo9r.js";import{L as C}from"./LmFormRhfProvider-PduC4BrJ.js";import{L as U}from"./LmSubmitButtonRhf-85k1ezmG.js";import{L as be}from"./LmSelect-ix11IQZ5.js";import{a as xe}from"./LmCheckboxRhf-QgWE9zUd.js";import{a as Le}from"./LmSwitchRhf-WBoskbHJ.js";import"./LmAutocomplete-kGbePZjJ.js";import"./DatepickerProvider-XA7obZFU.js";import"./index.esm-HDFLGYcx.js";import{a as Se}from"./LmDatepickerRhf-LhoEuI4i.js";import{a as je}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{f as Re}from"./selectItems-62Hhm5qZ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-nGe_wfaW.js";import"./index-iwWdm5Ml.js";import"./EventEmitter-3h9cKSNS.js";import"./toPropertyKey-NzAT2yhV.js";import"./LmSheet-nphtVfUp.js";import"./Popover-jfxuliJS.js";import"./Image-E4WYJ6IT.js";import"./index-UfAEvnza.js";import"./Text-GPmJrOtX.js";import"./ListItem-IOiP-Ieg.js";import"./LinearGradient.shared-jx44gTD1.js";import"./Separator-xEpcC6ux.js";import"./index-RduBmlIh.js";import"./dateHelper-pqTkKOmM.js";import"./index-Cm4IpdGE.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";const k="Form",q=K(ee,{name:k,tag:"form"}),[ye]=ie(k),[Fe,Ie]=ye(k),Z="FormTrigger",$=K(re,{name:Z}),Ce=$.styleable((r,o)=>{const{__scopeForm:a,children:n,onPress:t,...l}=r,i=Ie(Z,a);return e.jsx($,{tag:"button",...l,ref:o,onPress:ne(t,i.onSubmit),children:n})}),Te=q.extractable(function({onSubmit:r,...o}){return e.jsx(Fe,{scope:o.__scopeForm,onSubmit:r,children:e.jsx(q,{...o,onSubmit:a=>a.preventDefault()})})}),F=se(Te,{Trigger:Ce}),f={default:"$gray3",error:"$red10",info:"$blue10",warning:"$orange10",success:"$green10"};function ve({severity:r="default",outlined:o,shouldInvert:a}){const n={};return o?n.color=f[r]:a&&(n.color="white"),{default:e.jsx(w,{...n}),error:e.jsx(Q,{...n}),info:e.jsx(w,{...n}),warning:e.jsx(ae,{...n}),success:e.jsx(te,{...n})}[r]}function P({severity:r="default",text:o,hideIcon:a,outlined:n,children:t,paragraphProps:l,xStackProps:i,iconProps:d,...u}){let m=me()==="light"&&r!=="default"&&!n;return e.jsx(h,{bordered:n,...n?{borderColor:f[r],color:f[r]}:{backgroundColor:f[r]},...u,padding:u.padding||"$4",children:e.jsxs(p,{space:!0,alignItems:"center",...i,children:[e.jsx(ve,{shouldInvert:m,severity:r,outlined:n,...d}),o&&e.jsx(g,{color:n?f[r]:m?"white":void 0,...l,children:o}),t]})})}const ke=({bouncy:r,title:o,subTitle:a,footer:n,image:t,children:l,theme:i="gray",...d})=>e.jsxs(h,{elevate:!0,size:"$4",bordered:!0,...r&&{animation:"bouncy",scale:.9,hoverStyle:{scale:.925},pressStyle:{scale:.875}},theme:i,...d,children:[(o||a)&&e.jsxs(h.Header,{padded:!0,children:[o&&e.jsx(ce,{children:o}),a&&e.jsx(g,{theme:"alt2",children:a})]}),l,n&&e.jsx(h.Footer,{padded:!0,children:n}),!!(t!=null&&t.src)&&e.jsx(h.Background,{children:e.jsx(de,{position:"absolute",resizeMode:"cover",width:"100%",height:"auto",src:t.src,source:{width:t.width,height:t.height}})})]});function s({name:r,control:o,rules:a={},defaultValue:n,...t}){return t.required&&(a.required="This field is required"),e.jsx(v,{name:r,rules:a,control:o,defaultValue:n,render:({field:{onChange:l,value:i,onBlur:d,ref:u},fieldState:{error:m}})=>e.jsx(fe,{...t,ref:u,value:i??"",onBlur:d,error:!!m,onChangeText:l,helperText:m?m.message:t.helperText})})}function Pe(r){const{reset:o}=pe();return e.jsx(c,{...r,onPress:a=>{o(),typeof r.onPress=="function"&&r.onPress(a)}})}function I({name:r,control:o,rules:a={},defaultValue:n,...t}){return t.required&&(a.required="This field is required"),e.jsx(v,{name:r,rules:a,control:o,defaultValue:n,render:({field:{onChange:l,value:i,ref:d},fieldState:{error:u,invalid:m}})=>e.jsx(be,{...t,value:i??"",error:m,onValueChange:l,helperText:u?u.message:t.helperText})})}function B({name:r,control:o,rules:a={},defaultValue:n,...t}){return e.jsx(v,{name:r,control:o,rules:a,render:({field:{value:l,onChange:i},fieldState:d,formState:u})=>{const m=Array.isArray(l)?l:[l];return e.jsx(ge,{...t,defaultValue:m,onValueChange:b=>{b.length===1?i(b[0]):i(b),typeof t.onValueChange=="function"&&t.onValueChange(b)}})}})}const br={title:"form/React Hook Form"},L={render:()=>e.jsx(p,{padding:"$3",children:e.jsx(C,{defaultValues:{name:"",description:"",slider_pre:2},children:e.jsx(ke,{children:e.jsxs(T,{space:"$3",padding:"$3",children:[e.jsx(s,{name:"name",label:"Name",placeholder:"Type your name...",labelInline:!0,required:!0}),e.jsx(s,{name:"description",label:"Description",placeholder:"A long description...",labelInline:!0,multiline:!0}),e.jsx(I,{name:"fruit",options:Re,label:"Select fruit",labelInline:!0,required:!0}),e.jsx(xe,{name:"check_this",required:!0,label:"Do you agree to our T&C?"}),e.jsx(Le,{name:"switch",labelRight:"Some switch"}),e.jsx(Se,{name:"datepicker",label:"Choose a date"}),e.jsx(B,{name:"slider"}),e.jsx(B,{name:"slider_pre"}),e.jsxs(p,{space:"$3",children:[e.jsx(Pe,{children:"Reset"}),e.jsx(U,{onSubmit:je("submit"),children:"Submit"})]})]})})})})},S=()=>e.jsx(C,{defaultValues:{name:"",email:null,custom:""},children:({control:r,handleSubmit:o,reset:a})=>e.jsxs(T,{gap:"$3",children:[e.jsx(P,{severity:"info",outlined:!0,children:e.jsx(g,{children:'If you use a render function you enable stronger typings by forwarding "control". You are responsible to pass "control" to all form elements, otherwise an error is thrown.'})}),e.jsx(s,{name:"name",control:r,label:"Name",placeholder:"Type your name...",labelInline:!0,required:!0}),e.jsx(s,{name:"email",control:r,label:"Name",placeholder:"Type your email...",labelInline:!0}),e.jsx(s,{name:"custom",control:r,label:"Fancy color",backgroundColor:"violet",color:"red",focusStyle:{backgroundColor:"green",borderColor:"purple",color:"yellow"},labelInline:!0}),e.jsxs(p,{gap:"$3",children:[e.jsx(c,{onPress:()=>a(),children:"Reset"}),e.jsx(c,{colorVariant:"primary",onPress:o(({name:n,email:t})=>{console.log(n,t)}),children:"Submit"})]})]})}),j=()=>e.jsx(C,{defaultValues:{name:"",name_native:"",color:"",email:void 0},children:({control:r,handleSubmit:o,reset:a})=>e.jsxs(F,{gap:"$3",onSubmit:o(n=>{console.log(n)}),children:[e.jsx(P,{severity:"info",outlined:!0,children:e.jsx(g,{children:"To be type safe use render function as child of LmFormRhfProvider and pass `control` to all form components."})}),e.jsx(s,{name:"name",control:r,label:"Name",placeholder:"Type your name...",labelInline:!0,required:!0}),e.jsx(s,{name:"email",control:r,label:"Name",placeholder:"Type your email...",labelInline:!0}),e.jsx(I,{labelInline:!0,options:[{label:"Red",value:"red"},{label:"Green",value:"green"}],label:"Select color",control:r,name:"color",required:!0}),e.jsx(I,{labelInline:!0,native:!0,options:[{label:"Red",value:"red"},{label:"Green",value:"green"}],label:"Select color",control:r,name:"color_native",required:!0}),e.jsxs(p,{gap:"$3",children:[e.jsx(c,{onPress:()=>a(),children:"Reset"}),e.jsx(F.Trigger,{asChild:!0,children:e.jsx(c,{colorVariant:"primary",children:"Submit"})})]})]})}),R={render:()=>{const{control:r,handleSubmit:o,reset:a}=he({defaultValues:{name:"",email:void 0,password:void 0}});return e.jsxs(F,{gap:"$3",onSubmit:o(n=>{console.log(n)}),children:[e.jsx(P,{severity:"info",outlined:!0,children:e.jsx(g,{children:'You can use `useForm` directly from "react-hook-form".'})}),e.jsx(s,{name:"name",control:r,label:"Name",placeholder:"Type your name...",labelInline:!0,required:!0}),e.jsx(s,{name:"email",control:r,label:"Name",placeholder:"Type your email...",labelInline:!0}),e.jsx(s,{name:"password",control:r,label:"Password",isPassword:!0,placeholder:"Your password...",labelInline:!0}),e.jsxs(p,{gap:"$3",children:[e.jsx(c,{onPress:()=>a(),children:"Reset"}),e.jsx(F.Trigger,{asChild:!0,children:e.jsx(c,{colorVariant:"primary",children:"Submit"})})]})]})}},y=()=>{const{open:r,onOpenChange:o}=le(),[a,n]=oe.useState(!1),t=async l=>{n(!0),setTimeout(()=>{n(!1),o(!1),console.log(l)},3e3)};return e.jsxs(T,{children:[e.jsx(ue,{onPress:()=>o(!0),children:"Open Dialog"}),e.jsx(x,{onOpenChange:o,open:r,title:"Contact data",children:e.jsxs(C,{children:[e.jsxs(x.Content,{children:[e.jsx(I,{name:"title",label:"Title",required:!0,options:[{value:"mrs",label:"Mrs."},{value:"mr",label:"Mr."}]}),e.jsx(s,{name:"firstName",label:"First Name",required:!0}),e.jsx(s,{name:"lastName",label:"Last Name",required:!0}),e.jsx(x,{title:"Some Info",description:"This is a nested dialog",trigger:e.jsx(c,{icon:e.jsx(Q,{})})})]}),e.jsx(x.Actions,{children:e.jsx(U,{onSubmit:t,loading:a,children:"Submit"})})]})})]})};var N,V,_;L.parameters={...L.parameters,docs:{...(N=L.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <XStack padding={'$3'}>
      <LmFormRhfProvider defaultValues={{
      name: '',
      description: '',
      slider_pre: 2
    }}>
        <LmCard>
          <YStack space={'$3'} padding={'$3'}>
            <LmInputRhf<FormValues> name={'name'} label={'Name'} placeholder={'Type your name...'} labelInline required />
            <LmInputRhf name={'description'} label={'Description'} placeholder={'A long description...'} labelInline multiline />
            <LmSelectRhf name={'fruit'} options={fruitItemsFixtures} label={'Select fruit'} labelInline required />

            <LmCheckboxRhf name={'check_this'} required label={'Do you agree to our T&C?'} />
            <LmSwitchRhf name={'switch'} labelRight={'Some switch'} />
            <LmDatepickerRhf name="datepicker" label={'Choose a date'} />
            <LmSliderRhf name={'slider'} />
            <LmSliderRhf name={'slider_pre'} />
            <XStack space={'$3'}>
              <LmResetButtonRhf>Reset</LmResetButtonRhf>
              <LmSubmitButtonRhf onSubmit={action('submit')}>Submit</LmSubmitButtonRhf>
            </XStack>
          </YStack>
        </LmCard>
      </LmFormRhfProvider>
    </XStack>
}`,...(_=(V=L.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var D,A,Y;S.parameters={...S.parameters,docs:{...(D=S.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <LmFormRhfProvider defaultValues={{
    name: '',
    email: null,
    custom: ''
  }}>
      {({
      control,
      handleSubmit,
      reset
    }) => <YStack gap={'$3'}>
          <LmAlert severity={'info'} outlined>
            <Paragraph>
              If you use a render function you enable stronger typings by forwarding "control". You
              are responsible to pass "control" to all form elements, otherwise an error is thrown.
            </Paragraph>
          </LmAlert>
          <LmInputRhf name={'name'} control={control} label={'Name'} placeholder={'Type your name...'} labelInline required />
          <LmInputRhf name={'email'} control={control} label={'Name'} placeholder={'Type your email...'} labelInline />
          <LmInputRhf name={'custom'} control={control} label={'Fancy color'} backgroundColor={'violet'} color={'red'} focusStyle={{
        backgroundColor: 'green',
        borderColor: 'purple',
        color: 'yellow'
      }} labelInline />
          <XStack gap={'$3'}>
            <LmButton onPress={() => reset()}>Reset</LmButton>
            <LmButton colorVariant={'primary'} onPress={handleSubmit(({
          name,
          email
        }) => {
          console.log(name, email);
        })}>
              Submit
            </LmButton>
          </XStack>
        </YStack>}
    </LmFormRhfProvider>;
}`,...(Y=(A=S.parameters)==null?void 0:A.docs)==null?void 0:Y.source}}};var X,O,M;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <LmFormRhfProvider defaultValues={{
    name: '',
    name_native: '',
    color: '',
    email: undefined
  }}>
      {({
      control,
      handleSubmit,
      reset
    }) => <Form gap={'$3'} onSubmit={handleSubmit(data => {
      console.log(data);
    })}>
          <LmAlert severity={'info'} outlined>
            <Paragraph>
              To be type safe use render function as child of LmFormRhfProvider and pass \`control\`
              to all form components.
            </Paragraph>
          </LmAlert>
          <LmInputRhf name={'name'} control={control} label={'Name'} placeholder={'Type your name...'} labelInline required />
          <LmInputRhf name={'email'} control={control} label={'Name'} placeholder={'Type your email...'} labelInline />
          <LmSelectRhf labelInline options={[{
        label: 'Red',
        value: 'red'
      }, {
        label: 'Green',
        value: 'green'
      }]} label={'Select color'} control={control} name={'color'} required />
          <LmSelectRhf labelInline native options={[{
        label: 'Red',
        value: 'red'
      }, {
        label: 'Green',
        value: 'green'
      }]} label={'Select color'} control={control} name={'color_native'} required />
          <XStack gap={'$3'}>
            <LmButton onPress={() => reset()}>Reset</LmButton>
            <Form.Trigger asChild>
              <LmButton colorVariant={'primary'}>Submit</LmButton>
            </Form.Trigger>
          </XStack>
        </Form>}
    </LmFormRhfProvider>;
}`,...(M=(O=j.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var W,E,H;R.parameters={...R.parameters,docs:{...(W=R.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const {
      control,
      handleSubmit,
      reset
    } = useForm({
      defaultValues: {
        name: '',
        email: undefined,
        password: undefined
      }
    });
    return <Form gap={'$3'} onSubmit={handleSubmit(data => {
      console.log(data);
    })}>
        <LmAlert severity={'info'} outlined>
          <Paragraph>You can use \`useForm\` directly from "react-hook-form".</Paragraph>
        </LmAlert>
        <LmInputRhf name={'name'} control={control} label={'Name'} placeholder={'Type your name...'} labelInline required />
        <LmInputRhf name={'email'} control={control} label={'Name'} placeholder={'Type your email...'} labelInline />
        <LmInputRhf name={'password'} control={control} label={'Password'} isPassword placeholder={'Your password...'} labelInline />

        <XStack gap={'$3'}>
          <LmButton onPress={() => reset()}>Reset</LmButton>
          <Form.Trigger asChild>
            <LmButton colorVariant={'primary'}>Submit</LmButton>
          </Form.Trigger>
        </XStack>
      </Form>;
  }
}`,...(H=(E=R.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var G,z,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const {
    open,
    onOpenChange
  } = usePopoverState();
  const [loading, setLoading] = useState(false);
  const fakeSubmit = async data => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      console.log(data);
    }, 3000);
  };
  return <YStack>
      <Button onPress={() => onOpenChange(true)}>Open Dialog</Button>
      <LmDialog onOpenChange={onOpenChange} open={open} title={'Contact data'}>
        <LmFormRhfProvider>
          <LmDialog.Content>
            <LmSelectRhf name={'title'} label={'Title'} required options={[{
            value: 'mrs',
            label: 'Mrs.'
          }, {
            value: 'mr',
            label: 'Mr.'
          }]} />
            <LmInputRhf name={'firstName'} label={'First Name'} required />
            <LmInputRhf name={'lastName'} label={'Last Name'} required />

            <LmDialog title={'Some Info'} description={'This is a nested dialog'} trigger={<LmButton icon={<WarningCircleRegular />} />}></LmDialog>
          </LmDialog.Content>

          <LmDialog.Actions>
            <LmSubmitButtonRhf onSubmit={fakeSubmit} loading={loading}>
              Submit
            </LmSubmitButtonRhf>
          </LmDialog.Actions>
        </LmFormRhfProvider>
      </LmDialog>
    </YStack>;
}`,...(J=(z=y.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};const xr=["ReactHookForm","FormAsRenderFunction","WithTamaguiForm_1","WithTamaguiForm_2","FormInsideDialog"];export{S as FormAsRenderFunction,y as FormInsideDialog,L as ReactHookForm,j as WithTamaguiForm_1,R as WithTamaguiForm_2,xr as __namedExportsOrder,br as default};
