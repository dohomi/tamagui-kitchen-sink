import{r as h,R as d}from"./index-4g5l5LRQ.js";import{j as X,u as J}from"./Stacks-0gbGCfo_.js";import{U as F,a as G,V as K,b as ee,S as U,P as re,i as k,D as te,m as oe,_ as u,d as ne,E as le}from"./EventEmitter-8bYFdwfg.js";import{_ as C}from"./extends-dGVwEr9R.js";import{g as se}from"./_commonjsHelpers-4gQjN7DL.js";typeof globalThis.__DEV__>"u"&&(globalThis.__DEV__=!1);const ie=h.createContext(null),We=t=>X.jsx(ie.Provider,{value:null,children:t.children});function ae(t,e,r){const o=h.useRef(e??t);return J(()=>{o.current=t}),h.useCallback(r?(...l)=>{var n;return(n=o.current)==null?void 0:n.apply(null,l)}:()=>o.current,[])}function qe(t){return ae(t,ce,!0)}const ce=()=>{throw new Error("Cannot call an event handler while rendering.")};var de={_currentlyFocusedNode:null,currentlyFocusedField(){return document.activeElement!==this._currentlyFocusedNode&&(this._currentlyFocusedNode=null),this._currentlyFocusedNode},focusTextInput(t){t!==null&&(this._currentlyFocusedNode=t,document.activeElement!==t&&F.focus(t))},blurTextInput(t){t!==null&&(this._currentlyFocusedNode=null,document.activeElement===t&&F.blur(t))}};const I=de;var he=()=>{I.blurTextInput(I.currentlyFocusedField())};const ue=he;var pe=["onScroll","onTouchMove","onWheel","scrollEnabled","scrollEventThrottle","showsHorizontalScrollIndicator","showsVerticalScrollIndicator","style"];function A(t){return{nativeEvent:{contentOffset:{get x(){return t.target.scrollLeft},get y(){return t.target.scrollTop}},contentSize:{get height(){return t.target.scrollHeight},get width(){return t.target.scrollWidth}},layoutMeasurement:{get height(){return t.target.offsetHeight},get width(){return t.target.offsetWidth}}},timeStamp:Date.now()}}function Se(t,e){var r=Date.now()-t;return e>0&&r>=e}var fe=h.forwardRef((t,e)=>{var r=t.onScroll,o=t.onTouchMove,l=t.onWheel,n=t.scrollEnabled,i=n===void 0?!0:n,a=t.scrollEventThrottle,z=a===void 0?0:a,O=t.showsHorizontalScrollIndicator,v=t.showsVerticalScrollIndicator,T=t.style,W=G(t,pe),p=h.useRef({isScrolling:!1,scrollLastTick:0}),m=h.useRef(null),y=h.useRef(null);function g(s){return Z=>{i&&s&&s(Z)}}function b(s){s.stopPropagation(),s.target===y.current&&(s.persist(),m.current!=null&&clearTimeout(m.current),m.current=setTimeout(()=>{q(s)},100),p.current.isScrolling?Se(p.current.scrollLastTick,z)&&f(s):w(s))}function w(s){p.current.isScrolling=!0,f(s)}function f(s){p.current.scrollLastTick=Date.now(),r&&r(A(s))}function q(s){p.current.isScrolling=!1,r&&r(A(s))}var E=O===!1||v===!1;return h.createElement(K,C({},W,{onScroll:b,onTouchMove:g(o),onWheel:g(l),ref:ee(y,e),style:[T,!i&&L.scrollDisabled,E&&L.hideScrollbar]}))}),L=U.create({scrollDisabled:{overflowX:"hidden",overflowY:"hidden",touchAction:"none"},hideScrollbar:{scrollbarWidth:"none"}});const me=fe;function N(t){return function(){return t}}var S=function(){};S.thatReturns=N;S.thatReturnsFalse=N(!1);S.thatReturnsTrue=N(!0);S.thatReturnsNull=N(null);S.thatReturnsThis=function(){return this};S.thatReturnsArgument=function(t){return t};var ge=S,Re=ge,ve=Re,Te=ve;const ye=se(Te);var be=["contentContainerStyle","horizontal","onContentSizeChange","refreshControl","stickyHeaderIndices","pagingEnabled","forwardedRef","keyboardDismissMode","onScroll","centerContent"],$={},we=16;class Ee extends d.Component{constructor(){super(...arguments),this._scrollNodeRef=null,this._innerViewRef=null,this.isTouching=!1,this.lastMomentumScrollBeginTime=0,this.lastMomentumScrollEndTime=0,this.observedScrollSinceBecomingResponder=!1,this.becameResponderWhileAnimating=!1,this.scrollResponderHandleScrollShouldSetResponder=()=>this.isTouching,this.scrollResponderHandleStartShouldSetResponderCapture=e=>this.scrollResponderIsAnimating(),this.scrollResponderHandleTerminationRequest=()=>!this.observedScrollSinceBecomingResponder,this.scrollResponderHandleTouchEnd=e=>{var r=e.nativeEvent;this.isTouching=r.touches.length!==0,this.props.onTouchEnd&&this.props.onTouchEnd(e)},this.scrollResponderHandleResponderRelease=e=>{this.props.onResponderRelease&&this.props.onResponderRelease(e);var r=I.currentlyFocusedField();!this.props.keyboardShouldPersistTaps&&r!=null&&e.target!==r&&!this.observedScrollSinceBecomingResponder&&!this.becameResponderWhileAnimating&&(this.props.onScrollResponderKeyboardDismissed&&this.props.onScrollResponderKeyboardDismissed(e),I.blurTextInput(r))},this.scrollResponderHandleScroll=e=>{this.observedScrollSinceBecomingResponder=!0,this.props.onScroll&&this.props.onScroll(e)},this.scrollResponderHandleResponderGrant=e=>{this.observedScrollSinceBecomingResponder=!1,this.props.onResponderGrant&&this.props.onResponderGrant(e),this.becameResponderWhileAnimating=this.scrollResponderIsAnimating()},this.scrollResponderHandleScrollBeginDrag=e=>{this.props.onScrollBeginDrag&&this.props.onScrollBeginDrag(e)},this.scrollResponderHandleScrollEndDrag=e=>{this.props.onScrollEndDrag&&this.props.onScrollEndDrag(e)},this.scrollResponderHandleMomentumScrollBegin=e=>{this.lastMomentumScrollBeginTime=Date.now(),this.props.onMomentumScrollBegin&&this.props.onMomentumScrollBegin(e)},this.scrollResponderHandleMomentumScrollEnd=e=>{this.lastMomentumScrollEndTime=Date.now(),this.props.onMomentumScrollEnd&&this.props.onMomentumScrollEnd(e)},this.scrollResponderHandleTouchStart=e=>{this.isTouching=!0,this.props.onTouchStart&&this.props.onTouchStart(e)},this.scrollResponderHandleTouchMove=e=>{this.props.onTouchMove&&this.props.onTouchMove(e)},this.scrollResponderIsAnimating=()=>{var e=Date.now(),r=e-this.lastMomentumScrollEndTime,o=r<we||this.lastMomentumScrollEndTime<this.lastMomentumScrollBeginTime;return o},this.scrollResponderScrollTo=(e,r,o)=>{if(typeof e=="number")console.warn("`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.");else{var l=e||$;e=l.x,r=l.y,o=l.animated}var n=this.getScrollableNode(),i=e||0,a=r||0;n!=null&&(typeof n.scroll=="function"?n.scroll({top:a,left:i,behavior:o?"smooth":"auto"}):(n.scrollLeft=i,n.scrollTop=a))},this.scrollResponderZoomTo=(e,r)=>{re.OS!=="ios"&&k("zoomToRect is not implemented")},this.scrollResponderScrollNativeHandleToKeyboard=(e,r,o)=>{this.additionalScrollOffset=r||0,this.preventNegativeScrollOffset=!!o,F.measureLayout(e,this.getInnerViewNode(),this.scrollResponderTextInputFocusError,this.scrollResponderInputMeasureAndScrollToKeyboard)},this.scrollResponderInputMeasureAndScrollToKeyboard=(e,r,o,l)=>{var n=te.get("window").height;this.keyboardWillOpenTo&&(n=this.keyboardWillOpenTo.endCoordinates.screenY);var i=r-n+l+this.additionalScrollOffset;this.preventNegativeScrollOffset&&(i=Math.max(0,i)),this.scrollResponderScrollTo({x:0,y:i,animated:!0}),this.additionalOffset=0,this.preventNegativeScrollOffset=!1},this.scrollResponderKeyboardWillShow=e=>{this.keyboardWillOpenTo=e,this.props.onKeyboardWillShow&&this.props.onKeyboardWillShow(e)},this.scrollResponderKeyboardWillHide=e=>{this.keyboardWillOpenTo=null,this.props.onKeyboardWillHide&&this.props.onKeyboardWillHide(e)},this.scrollResponderKeyboardDidShow=e=>{e&&(this.keyboardWillOpenTo=e),this.props.onKeyboardDidShow&&this.props.onKeyboardDidShow(e)},this.scrollResponderKeyboardDidHide=e=>{this.keyboardWillOpenTo=null,this.props.onKeyboardDidHide&&this.props.onKeyboardDidHide(e)},this.flashScrollIndicators=()=>{this.scrollResponderFlashScrollIndicators()},this.getScrollResponder=()=>this,this.getScrollableNode=()=>this._scrollNodeRef,this.getInnerViewRef=()=>this._innerViewRef,this.getInnerViewNode=()=>this._innerViewRef,this.getNativeScrollRef=()=>this._scrollNodeRef,this.scrollTo=(e,r,o)=>{if(typeof e=="number")console.warn("`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.");else{var l=e||$;r=l.x,e=l.y,o=l.animated}this.scrollResponderScrollTo({x:r||0,y:e||0,animated:o!==!1})},this.scrollToEnd=e=>{var r=(e&&e.animated)!==!1,o=this.props.horizontal,l=this.getScrollableNode(),n=o?l.scrollWidth:0,i=o?0:l.scrollHeight;this.scrollResponderScrollTo({x:n,y:i,animated:r})},this._handleContentOnLayout=e=>{var r=e.nativeEvent.layout,o=r.width,l=r.height;this.props.onContentSizeChange(o,l)},this._handleScroll=e=>{this.props.keyboardDismissMode==="on-drag"&&ue(),this.scrollResponderHandleScroll(e)},this._setInnerViewRef=e=>{this._innerViewRef=e},this._setScrollNodeRef=e=>{this._scrollNodeRef=e,e!=null&&(e.getScrollResponder=this.getScrollResponder,e.getInnerViewNode=this.getInnerViewNode,e.getInnerViewRef=this.getInnerViewRef,e.getNativeScrollRef=this.getNativeScrollRef,e.getScrollableNode=this.getScrollableNode,e.scrollTo=this.scrollTo,e.scrollToEnd=this.scrollToEnd,e.flashScrollIndicators=this.flashScrollIndicators,e.scrollResponderZoomTo=this.scrollResponderZoomTo,e.scrollResponderScrollNativeHandleToKeyboard=this.scrollResponderScrollNativeHandleToKeyboard);var r=oe(this.props.forwardedRef);r(e)}}scrollResponderHandleStartShouldSetResponder(){return!1}scrollResponderHandleResponderReject(){ye(!1,"ScrollView doesn't take rejection well - scrolls anyway")}scrollResponderFlashScrollIndicators(){}scrollResponderTextInputFocusError(e){console.error("Error measuring text field: ",e)}render(){var e=this.props,r=e.contentContainerStyle,o=e.horizontal,l=e.onContentSizeChange,n=e.refreshControl,i=e.stickyHeaderIndices,a=e.pagingEnabled;e.forwardedRef,e.keyboardDismissMode,e.onScroll;var z=e.centerContent,O=G(e,be),v={};l&&(v={onLayout:this._handleContentOnLayout});var T=!o&&Array.isArray(i),W=T||a?d.Children.map(this.props.children,(f,q)=>{var E=T&&i.indexOf(q)>-1;return f!=null&&(E||a)?d.createElement(K,{style:[E&&c.stickyHeader,a&&c.pagingEnabledChild]},f):f}):this.props.children,p=d.createElement(K,C({},v,{children:W,collapsable:!1,ref:this._setInnerViewRef,style:[o&&c.contentContainerHorizontal,z&&c.contentContainerCenterContent,r]})),m=o?c.baseHorizontal:c.baseVertical,y=o?c.pagingEnabledHorizontal:c.pagingEnabledVertical,g=u(u({},O),{},{style:[m,a&&y,this.props.style],onTouchStart:this.scrollResponderHandleTouchStart,onTouchMove:this.scrollResponderHandleTouchMove,onTouchEnd:this.scrollResponderHandleTouchEnd,onScrollBeginDrag:this.scrollResponderHandleScrollBeginDrag,onScrollEndDrag:this.scrollResponderHandleScrollEndDrag,onMomentumScrollBegin:this.scrollResponderHandleMomentumScrollBegin,onMomentumScrollEnd:this.scrollResponderHandleMomentumScrollEnd,onStartShouldSetResponder:this.scrollResponderHandleStartShouldSetResponder,onStartShouldSetResponderCapture:this.scrollResponderHandleStartShouldSetResponderCapture,onScrollShouldSetResponder:this.scrollResponderHandleScrollShouldSetResponder,onScroll:this._handleScroll,onResponderGrant:this.scrollResponderHandleResponderGrant,onResponderTerminationRequest:this.scrollResponderHandleTerminationRequest,onResponderTerminate:this.scrollResponderHandleTerminate,onResponderRelease:this.scrollResponderHandleResponderRelease,onResponderReject:this.scrollResponderHandleResponderReject}),b=me;k(b!==void 0,"ScrollViewClass must not be undefined");var w=d.createElement(b,C({},g,{ref:this._setScrollNodeRef}),p);return n?d.cloneElement(n,{style:g.style},w):w}}var j={flexGrow:1,flexShrink:1,transform:"translateZ(0)",WebkitOverflowScrolling:"touch"},c=U.create({baseVertical:u(u({},j),{},{flexDirection:"column",overflowX:"hidden",overflowY:"auto"}),baseHorizontal:u(u({},j),{},{flexDirection:"row",overflowX:"auto",overflowY:"hidden"}),contentContainerHorizontal:{flexDirection:"row"},contentContainerCenterContent:{justifyContent:"center",flexGrow:1},stickyHeader:{position:"sticky",top:0,zIndex:10},pagingEnabledHorizontal:{scrollSnapType:"x mandatory"},pagingEnabledVertical:{scrollSnapType:"y mandatory"},pagingEnabledChild:{scrollSnapAlign:"start"}}),Y=d.forwardRef((t,e)=>d.createElement(Ee,C({},t,{forwardedRef:e})));Y.displayName="ScrollView";const Fe=Y;class _e{constructor(e){var r=e.onMoreTasks;this._onMoreTasks=r,this._queueStack=[{tasks:[],popable:!0}]}enqueue(e){this._getCurrentQueue().push(e)}enqueueTasks(e){e.forEach(r=>this.enqueue(r))}cancelTasks(e){this._queueStack=this._queueStack.map(r=>u(u({},r),{},{tasks:r.tasks.filter(o=>e.indexOf(o)===-1)})).filter((r,o)=>r.tasks.length>0||o===0)}hasTasksToProcess(){return this._getCurrentQueue().length>0}processNext(){var e=this._getCurrentQueue();if(e.length){var r=e.shift();try{typeof r=="object"&&r.gen?this._genPromise(r):typeof r=="object"&&r.run?r.run():(k(typeof r=="function",`Expected Function, SimpleTask, or PromiseTask, but got:
`+JSON.stringify(r,null,2)),r())}catch(o){throw o.message="TaskQueue: Error with task "+(r.name||"")+": "+o.message,o}}}_getCurrentQueue(){var e=this._queueStack.length-1,r=this._queueStack[e];return r.popable&&r.tasks.length===0&&e>0?(this._queueStack.pop(),this._getCurrentQueue()):r.tasks}_genPromise(e){var r=this._queueStack.push({tasks:[],popable:!1}),o=r-1,l=this._queueStack[o];e.gen().then(()=>{l.popable=!0,this.hasTasksToProcess()&&this._onMoreTasks()}).catch(n=>{setTimeout(()=>{throw n.message="TaskQueue: Error resolving Promise in task "+e.name+": "+n.message,n},0)})}}const He=_e;var ke=function(e,r){return setTimeout(()=>{var o=Date.now();e({didTimeout:!1,timeRemaining(){return Math.max(0,50-(Date.now()-o))}})},1)},Ce=ne&&typeof window.requestIdleCallback<"u",Ie=Ce?window.requestIdleCallback:ke;const Me=Ie;var M=new le,B={Events:{interactionStart:"interactionStart",interactionComplete:"interactionComplete"},runAfterInteractions(t){var e=[],r=new Promise(o=>{R(),t&&e.push(t),e.push({run:o,name:"resolve "+(t&&t.name||"?")}),x.enqueueTasks(e)});return{then:r.then.bind(r),done:r.then.bind(r),cancel:()=>{x.cancelTasks(e)}}},createInteractionHandle(){R();var t=++De;return D.add(t),t},clearInteractionHandle(t){k(!!t,"Must provide a handle to clear."),R(),D.delete(t),P.add(t)},addListener:M.addListener.bind(M),setDeadline(t){V=t}},_=new Set,D=new Set,P=new Set,x=new He({onMoreTasks:R}),H=0,De=0,V=-1;function R(){H||(V>0?H=setTimeout(Q):H=Me(Q))}function Q(){H=0;var t=_.size;D.forEach(o=>_.add(o)),P.forEach(o=>_.delete(o));var e=_.size;if(t!==0&&e===0?M.emit(B.Events.interactionComplete):t===0&&e!==0&&M.emit(B.Events.interactionStart),e===0){for(var r=Date.now();x.hasTasksToProcess();)if(x.processNext(),V>0&&Date.now()-r>=V){R();break}}D.clear(),P.clear()}const Ke=B;export{Ke as I,ie as P,We as R,Fe as S,I as T,ae as a,ue as d,qe as u};