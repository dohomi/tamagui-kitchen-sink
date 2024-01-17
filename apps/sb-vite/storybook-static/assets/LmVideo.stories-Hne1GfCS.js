import{j as r,Y as M}from"./Stacks-0gbGCfo_.js";import{r as N}from"./index-4g5l5LRQ.js";import{V as O,R as k}from"./Video-yW88khQJ.js";import{H as Y,P as _}from"./Headings-cv8zjVaZ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./PermissionsInterface-mZs7V1IP.js";import"./EventEmitter-8bYFdwfg.js";import"./index-iwWdm5Ml.js";import"./toPropertyKey-k__UqEPR.js";import"./RCTDeviceEventEmitter-ts_vhi28.js";import"./index-gD03JQuG.js";import"./extends-dGVwEr9R.js";const v=N.forwardRef(function({aspectRatio:P=16/9,src:b,width:y,height:c,useNativeControls:B=!0,resizeMode:z=k.COVER,style:A,...d},E){return r.jsx(O,{...d,source:{uri:b},ref:E,style:{width:y||"100%",height:c,aspectRatio:P,...A},videoStyle:{width:"100%",height:c,...d.videoStyle},resizeMode:z,useNativeControls:B})}),U={title:"video/Video",component:v},i="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",e={args:{src:i}},s={args:{src:i,width:200}},a={args:{src:i,height:200}},o={args:{src:i,height:200,resizeMode:k.CONTAIN}},t={args:{...e.args},render:n=>r.jsxs(M,{width:300,backgroundColor:"$green5",height:600,children:[r.jsx(Y,{paddingBottom:"$4",children:"Parent Container: 300x600"}),r.jsx(v,{src:n.src,aspectRatio:4/3}),r.jsx(_,{children:"waiting for new expo-av release..."})]})};var p,m,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    src: uri
  }
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,h,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    src: uri,
    width: 200
  }
}`,...(l=(h=s.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var x,f,w;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    src: uri,
    height: 200
  }
}`,...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var R,S,C;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    src: uri,
    height: 200,
    resizeMode: ResizeMode.CONTAIN
  }
}`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var H,j,V;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Basic.args
  },
  render: args => <YStack width={300} backgroundColor={'$green5'} height={600}>
      <H3 paddingBottom={'$4'}>Parent Container: 300x600</H3>
      <LmVideo src={args.src} aspectRatio={4 / 3} />
      <Paragraph>waiting for new expo-av release...</Paragraph>
    </YStack>
}`,...(V=(j=t.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};const X=["Basic","Width200","Height200","Height200Contain","AspectRatio"];export{t as AspectRatio,e as Basic,a as Height200,o as Height200Contain,s as Width200,X as __namedExportsOrder,U as default};
