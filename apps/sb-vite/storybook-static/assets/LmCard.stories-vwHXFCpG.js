import{s as B,j as e,X as m,Y as h}from"./Stacks-cf55noxu.js";import{B as i,T as H}from"./index-_wg5PwQV.js";import{r as s}from"./index-4g5l5LRQ.js";import"./index-TmN4oE2O.js";import"./LmGrid-dD4DUrOQ.js";import{L as v}from"./LmCard-_C9bX3cF.js";import{C as a}from"./Card-MZrg_zQJ.js";import{H as u,P as p}from"./Headings-zc2v6h-R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./EventEmitter-3h9cKSNS.js";import"./toPropertyKey-NzAT2yhV.js";import"./extends-nGe_wfaW.js";import"./index-iwWdm5Ml.js";import"./LmImage-J69gcWFB.js";import"./Image-E4WYJ6IT.js";import"./index-UfAEvnza.js";const M={title:"core/Content/Card",component:v},t={args:{title:"Hello World",subTitle:"how are you",width:300,height:500,elevate:!0,elevation:"$4",image:{width:300,height:500,src:"https://placekitten.com/300/500"}}},n={args:{title:"Hello World",subTitle:"how are you",bouncy:!0}},c=(r,Y,T)=>{console.log(`The ${r} interaction took ${T}ms to render (${Y})`)},l=Array.from(Array(100).keys()),$=B(H,{}),L=B(H,{}),o=()=>e.jsxs(e.Fragment,{children:[e.jsx(s.Profiler,{id:"Render Tamagui Card list",onRender:c,children:e.jsx(e.Fragment,{children:l.map(r=>e.jsxs(a,{elevate:!0,size:"$4",bordered:!0,width:250,height:300,children:[e.jsxs(a.Header,{padded:!0,children:[e.jsx(u,{children:"Sony A7IV"}),e.jsx(p,{theme:"alt2",children:"Now available"})]}),e.jsxs(a.Footer,{padded:!0,children:[e.jsx(m,{flex:1}),e.jsx(i,{borderRadius:"$10",children:"Purchase"})]}),e.jsx(a.Background,{})]},r))})}),e.jsx(s.Profiler,{id:"Render Themeable stack with content",onRender:c,children:e.jsx(e.Fragment,{children:l.map(r=>e.jsxs($,{elevate:!0,bordered:!0,width:250,height:300,children:[e.jsxs(L,{padded:!0,children:[e.jsx(u,{children:"Sony A7IV"}),e.jsx(p,{theme:"alt2",children:"Now available"})]}),e.jsxs(h,{children:[e.jsx(m,{flex:1}),e.jsx(i,{borderRadius:"$10",children:"Purchase"})]})]},r))})}),e.jsx(s.Profiler,{id:"Render YStack with Button",onRender:c,children:e.jsx(e.Fragment,{children:l.map(r=>e.jsx(h,{width:250,height:300,children:e.jsx(i,{children:"Purchase"})},r))})})]}),d={render:()=>e.jsx(s.Profiler,{id:"Render YStack with Button",onRender:c,children:l.map(r=>e.jsx(h,{width:250,height:300,children:e.jsx(i,{children:"Purchase"})},r))})};var g,x,k;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: ({
    title: 'Hello World',
    subTitle: 'how are you',
    width: 300,
    height: 500,
    elevate: true,
    elevation: '$4',
    image: {
      width: 300,
      height: 500,
      src: 'https://placekitten.com/300/500'
    }
  } as LmCardProps)
}`,...(k=(x=t.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var f,j,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Hello World',
    subTitle: 'how are you',
    bouncy: true
  }
}`,...(C=(j=n.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var P,w,R;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <Profiler id={'Render Tamagui Card list'} onRender={handleRender}>
        <>
          {arrayOf100.map(i => <Card elevate size="$4" bordered width={250} height={300} key={i}>
              <Card.Header padded>
                <H2>Sony A7IV</H2>
                <Paragraph theme="alt2">Now available</Paragraph>
              </Card.Header>
              <Card.Footer padded>
                <XStack flex={1} />
                <Button borderRadius="$10">Purchase</Button>
              </Card.Footer>
              <Card.Background></Card.Background>
            </Card>)}
        </>
      </Profiler>
      <Profiler id={'Render Themeable stack with content'} onRender={handleRender}>
        <>
          {arrayOf100.map(i => <CardContainer elevate bordered width={250} height={300} key={i}>
              <CardHeader padded>
                <H2>Sony A7IV</H2>
                <Paragraph theme="alt2">Now available</Paragraph>
              </CardHeader>
              <YStack>
                <XStack flex={1} />
                <Button borderRadius="$10">Purchase</Button>
              </YStack>
            </CardContainer>)}
        </>
      </Profiler>
      <Profiler id={'Render YStack with Button'} onRender={handleRender}>
        <>
          {arrayOf100.map(i => <YStack width={250} height={300} key={i}>
              <Button>Purchase</Button>
            </YStack>)}
        </>
      </Profiler>
    </>;
}`,...(R=(w=o.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var y,S,b;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <Profiler id={'Render YStack with Button'} onRender={handleRender}>
        {arrayOf100.map(i => <YStack width={250} height={300} key={i}>
            <Button>Purchase</Button>
          </YStack>)}
      </Profiler>;
  }
}`,...(b=(S=d.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const Q=["Basic","Bouncy","CardListTest","YstackList"];export{t as Basic,n as Bouncy,o as CardListTest,d as YstackList,Q as __namedExportsOrder,M as default};
