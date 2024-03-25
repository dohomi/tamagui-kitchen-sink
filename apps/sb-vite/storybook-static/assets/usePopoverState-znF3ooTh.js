import{_ as Vn}from"./extends-nGe_wfaW.js";import{d as Ct,f as lt,g as Xe,s as xt,a as $n,u as Dt,V as jn,h as Bn,j as Kn,k as Un,l as Yn,n as Wn,o as Xn,t as qn,q as Jn,r as Qn,v as Zn,w as er,x as tr,y as nr,c as rr,z as or}from"./EventEmitter-3h9cKSNS.js";import{r as u,R as re}from"./index-4g5l5LRQ.js";import{r as qe,s as q,e as Ce,j as C,o as Re,t as ar,g as xe,a as Ot,v as ir,w as sr,x as lr,Y as ur,d as ye,q as wt,y as Lt,u as dr}from"./Stacks-cf55noxu.js";import{O as cr,l as Je,o as At,T as It,w as Mt,u as fr,F as Nt,b as zt,a as Be}from"./index-_wg5PwQV.js";import{g as Qe,S as hr}from"./Headings-zc2v6h-R.js";import{c as ut}from"./_commonjsHelpers-4gQjN7DL.js";import{T as fe,u as vr,S as mr}from"./index-TmN4oE2O.js";import{L as Sr}from"./LmSheet-nphtVfUp.js";import{P as ne}from"./Popover-jfxuliJS.js";function Er(e,[t,r]){return Math.min(r,Math.max(t,e))}function pr(e,t){const r=e==null?void 0:e.staticConfig;return!!(r&&(!t||t===r.componentName))}const kt=(e,t)=>u.isValidElement(e)&&pr(e.type,t),gr=u.createContext(void 0);function Rr(e){const t=u.useContext(gr);return e||t||"ltr"}var dt="DELAY",K="ERROR",ct="LONG_PRESS_DETECTED",N="NOT_RESPONDER",oe="RESPONDER_ACTIVE_LONG_PRESS_START",De="RESPONDER_ACTIVE_PRESS_START",Ke="RESPONDER_INACTIVE_PRESS_START",yr="RESPONDER_GRANT",be="RESPONDER_RELEASE",Ht="RESPONDER_TERMINATED",ft=Object.freeze({NOT_RESPONDER:{DELAY:K,RESPONDER_GRANT:Ke,RESPONDER_RELEASE:K,RESPONDER_TERMINATED:K,LONG_PRESS_DETECTED:K},RESPONDER_INACTIVE_PRESS_START:{DELAY:De,RESPONDER_GRANT:K,RESPONDER_RELEASE:N,RESPONDER_TERMINATED:N,LONG_PRESS_DETECTED:K},RESPONDER_ACTIVE_PRESS_START:{DELAY:K,RESPONDER_GRANT:K,RESPONDER_RELEASE:N,RESPONDER_TERMINATED:N,LONG_PRESS_DETECTED:oe},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:K,RESPONDER_GRANT:K,RESPONDER_RELEASE:N,RESPONDER_TERMINATED:N,LONG_PRESS_DETECTED:oe},ERROR:{DELAY:N,RESPONDER_GRANT:Ke,RESPONDER_RELEASE:N,RESPONDER_TERMINATED:N,LONG_PRESS_DETECTED:N}}),Ft=e=>e.getAttribute("role"),Ue=e=>e.tagName.toLowerCase(),ht=e=>e===De||e===oe,Pe=e=>Ft(e)==="button",vt=e=>e===Ke||e===De||e===oe,br=e=>e===Ht||e===be,mt=e=>{var t=e.key,r=e.target,o=t===" "||t==="Spacebar",n=Ue(r)==="button"||Pe(r);return t==="Enter"||o&&n},Pr=450,_r=50;class Tr{constructor(t){this._eventHandlers=null,this._isPointerTouch=!1,this._longPressDelayTimeout=null,this._longPressDispatched=!1,this._pressDelayTimeout=null,this._pressOutDelayTimeout=null,this._touchState=N,this.configure(t)}configure(t){this._config=t}reset(){this._cancelLongPressDelayTimeout(),this._cancelPressDelayTimeout(),this._cancelPressOutDelayTimeout()}getEventHandlers(){return this._eventHandlers==null&&(this._eventHandlers=this._createEventHandlers()),this._eventHandlers}_createEventHandlers(){var t=(n,a)=>{n.persist(),this._cancelPressOutDelayTimeout(),this._longPressDispatched=!1,this._selectionTerminated=!1,this._touchState=N,this._isPointerTouch=n.nativeEvent.type==="touchstart",this._receiveSignal(yr,n);var i=He(this._config.delayPressStart,0,_r);a!==!1&&i>0?this._pressDelayTimeout=setTimeout(()=>{this._receiveSignal(dt,n)},i):this._receiveSignal(dt,n);var s=He(this._config.delayLongPress,10,Pr);this._longPressDelayTimeout=setTimeout(()=>{this._handleLongPress(n)},s+i)},r=n=>{this._receiveSignal(be,n)},o=n=>{var a=this._config.onPress,i=n.target;if(this._touchState!==N&&mt(n)){r(n),document.removeEventListener("keyup",o);var s=i.getAttribute("role"),d=Ue(i),c=s==="link"||d==="a"||d==="button"||d==="input"||d==="select"||d==="textarea";a!=null&&!c&&a(n)}};return{onStartShouldSetResponder:n=>{var a=this._config.disabled;return a&&Pe(n.currentTarget)&&n.stopPropagation(),a==null?!0:!a},onKeyDown:n=>{var a=this._config.disabled,i=n.key,s=n.target;if(!a&&mt(n)){this._touchState===N&&(t(n,!1),document.addEventListener("keyup",o));var d=i===" "||i==="Spacebar",c=Ft(s),h=c==="button"||c==="menuitem";d&&h&&Ue(s)!=="button"&&n.preventDefault(),n.stopPropagation()}},onResponderGrant:n=>t(n),onResponderMove:n=>{this._config.onPressMove!=null&&this._config.onPressMove(n);var a=St(n);if(this._touchActivatePosition!=null){var i=this._touchActivatePosition.pageX-a.pageX,s=this._touchActivatePosition.pageY-a.pageY;Math.hypot(i,s)>10&&this._cancelLongPressDelayTimeout()}},onResponderRelease:n=>r(n),onResponderTerminate:n=>{n.nativeEvent.type==="selectionchange"&&(this._selectionTerminated=!0),this._receiveSignal(Ht,n)},onResponderTerminationRequest:n=>{var a=this._config,i=a.cancelable,s=a.disabled,d=a.onLongPress;return!s&&d!=null&&this._isPointerTouch&&n.nativeEvent.type==="contextmenu"?!1:i??!0},onClick:n=>{var a=this._config,i=a.disabled,s=a.onPress;i?Pe(n.currentTarget)&&n.stopPropagation():(n.stopPropagation(),this._longPressDispatched||this._selectionTerminated?n.preventDefault():s!=null&&n.altKey===!1&&s(n))},onContextMenu:n=>{var a=this._config,i=a.disabled,s=a.onLongPress;i?Pe(n.currentTarget)&&n.stopPropagation():s!=null&&this._isPointerTouch&&!n.defaultPrevented&&(n.preventDefault(),n.stopPropagation())}}}_receiveSignal(t,r){var o=this._touchState,n=null;ft[o]!=null&&(n=ft[o][t]),!(this._touchState===N&&t===be)&&(n==null||n===K?console.error("PressResponder: Invalid signal "+t+" for state "+o+" on responder"):o!==n&&(this._performTransitionSideEffects(o,n,t,r),this._touchState=n))}_performTransitionSideEffects(t,r,o,n){if(br(o)&&(setTimeout(()=>{this._isPointerTouch=!1},0),this._touchActivatePosition=null,this._cancelLongPressDelayTimeout()),vt(t)&&o===ct){var a=this._config.onLongPress;a!=null&&n.nativeEvent.key==null&&(a(n),this._longPressDispatched=!0)}var i=ht(t),s=ht(r);if(!i&&s?this._activate(n):i&&!s&&this._deactivate(n),vt(t)&&o===be){var d=this._config,c=d.onLongPress,h=d.onPress;if(h!=null){var l=c!=null&&t===oe;l||!s&&!i&&(this._activate(n),this._deactivate(n))}}this._cancelPressDelayTimeout()}_activate(t){var r=this._config,o=r.onPressChange,n=r.onPressStart,a=St(t);this._touchActivatePosition={pageX:a.pageX,pageY:a.pageY},n!=null&&n(t),o!=null&&o(!0)}_deactivate(t){var r=this._config,o=r.onPressChange,n=r.onPressEnd;function a(){n!=null&&n(t),o!=null&&o(!1)}var i=He(this._config.delayPressEnd);i>0?this._pressOutDelayTimeout=setTimeout(()=>{a()},i):a()}_handleLongPress(t){(this._touchState===De||this._touchState===oe)&&this._receiveSignal(ct,t)}_cancelLongPressDelayTimeout(){this._longPressDelayTimeout!=null&&(clearTimeout(this._longPressDelayTimeout),this._longPressDelayTimeout=null)}_cancelPressDelayTimeout(){this._pressDelayTimeout!=null&&(clearTimeout(this._pressDelayTimeout),this._pressDelayTimeout=null)}_cancelPressOutDelayTimeout(){this._pressOutDelayTimeout!=null&&(clearTimeout(this._pressOutDelayTimeout),this._pressOutDelayTimeout=null)}}function He(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=0),Math.max(t,e??r)}function St(e){var t=e.nativeEvent,r=t.changedTouches,o=t.touches;return o!=null&&o.length>0?o[0]:r!=null&&r.length>0?r[0]:e.nativeEvent}function Cr(e,t){var r=u.useRef(null);r.current==null&&(r.current=new Tr(t));var o=r.current;return u.useEffect(()=>{o.configure(t)},[t,o]),u.useEffect(()=>()=>{o.reset()},[o]),u.useDebugValue(t),o.getEventHandlers()}var xr=()=>{};function Dr(){var e=!1;if(Ct)try{var t={};Object.defineProperty(t,"passive",{get(){return e=!0,!1}}),window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return e}var Or=Dr();function wr(e){return e==null?!1:Or?e:!!e.capture}function Lr(){return this.cancelBubble}function Ar(){return this.defaultPrevented}function Ir(e){return e.nativeEvent=e,e.persist=xr,e.isDefaultPrevented=Ar,e.isPropagationStopped=Lr,e}function I(e,t,r,o){var n=wr(o),a=i=>r(Ir(i));return e.addEventListener(t,a,n),function(){e!=null&&e.removeEventListener(t,a,n)}}var Mr=()=>typeof window<"u"&&window.PointerEvent!=null,U="keyboard",z="keyboard",he,ve,me=!1,Nr=new Set,Se="keyboard",ue="mouse",Fe="touch",zr="blur",Gt="contextmenu",kr="focus",Hr="keydown",Vt="mousedown",$t="mousemove",jt="mouseup",Bt="pointerdown",Kt="pointermove",Ut="scroll",Yt="selectionchange",Wt="touchcancel",Xt="touchmove",qt="touchstart",Fr="visibilitychange",Et={passive:!0},F={capture:!0,passive:!0};function Jt(){(he!=null||ve!=null)&&(he!=null&&(z=he,he=null),ve!=null&&(U=ve,ve=null),X())}function Gr(){he=z,ve=U,U=Se,z=Se,X(),me=!1}function Vr(){Jt()}function $r(e){e.metaKey||e.altKey||e.ctrlKey||z!==Se&&(z=Se,U=Se,X())}function jr(){document.visibilityState!=="hidden"&&Jt()}function B(e){var t=e.type;if(Mr()){if(t===Bt){U!==e.pointerType&&(z=e.pointerType,U=e.pointerType,X());return}if(t===Kt){z!==e.pointerType&&(z=e.pointerType,X());return}}else{if(me||(t===Vt&&U!==ue&&(z=ue,U=ue,X()),t===$t&&z!==ue&&(z=ue,X())),t===qt){me=!0,e.touches&&e.touches.length>1&&(me=!1),U!==Fe&&(z=Fe,U=Fe,X());return}(t===Gt||t===jt||t===Yt||t===Ut||t===Wt||t===Xt)&&(me=!1)}}Ct&&(I(window,zr,Gr,Et),I(window,kr,Vr,Et),I(document,Hr,$r,F),I(document,Fr,jr,F),I(document,Bt,B,F),I(document,Kt,B,F),I(document,Gt,B,F),I(document,Vt,B,F),I(document,$t,B,F),I(document,jt,B,F),I(document,Wt,B,F),I(document,Xt,B,F),I(document,qt,B,F),I(document,Yt,B,F),I(document,Ut,B,F));function X(){var e={activeModality:U,modality:z};Nr.forEach(t=>{t(e)})}function Br(){return z}function de(e,t){var r=lt(()=>new Map),o=lt(()=>(n,a)=>{var i=r.get(n);i!=null&&i(),a==null&&(r.delete(n),a=()=>{});var s=I(n,e,a,t);return r.set(n,s),s});return Xe(()=>()=>{r.forEach(n=>{n()}),r.clear()},[r]),o}var Kr={},ce={passive:!0},pt="react-gui:hover:lock",gt="react-gui:hover:unlock",Ur=()=>typeof window<"u"&&window.PointerEvent!=null;function Rt(e,t,r){var o=document.createEvent("CustomEvent"),n=r||Kr,a=n.bubbles,i=a===void 0?!0:a,s=n.cancelable,d=s===void 0?!0:s,c=n.detail;o.initCustomEvent(t,i,d,c),e.dispatchEvent(o)}function Ge(e){var t=e.pointerType;return t??Br()}function Yr(e,t){var r=t.contain,o=t.disabled,n=t.onHoverStart,a=t.onHoverChange,i=t.onHoverUpdate,s=t.onHoverEnd,d=Ur(),c=de(d?"pointermove":"mousemove",ce),h=de(d?"pointerenter":"mouseenter",ce),l=de(d?"pointerleave":"mouseleave",ce),v=de(pt,ce),p=de(gt,ce);Xe(()=>{var E=e.current;if(E!==null){var f=function(y){s!=null&&s(y),a!=null&&a(!1),c(E,null),l(E,null)},S=function(y){var T=e.current;T!=null&&Ge(y)!=="touch"&&(r&&Rt(T,gt),f(y))},R=function(y){Ge(y)!=="touch"&&i!=null&&(y.x==null&&(y.x=y.clientX),y.y==null&&(y.y=y.clientY),i(y))},g=function(y){n!=null&&n(y),a!=null&&a(!0),i!=null&&c(E,o?null:R),l(E,o?null:S)},b=function(y){var T=e.current;if(T!=null&&Ge(y)!=="touch"){r&&Rt(T,pt),g(y);var M=function(w){w.target!==T&&f(y)},G=function(w){w.target!==T&&g(y)};v(T,o?null:M),p(T,o?null:G)}};h(E,o?null:b)}},[h,c,l,v,p,r,o,n,a,i,s,e])}var Wr=["children","delayLongPress","delayPressIn","delayPressOut","disabled","onBlur","onContextMenu","onFocus","onHoverIn","onHoverOut","onKeyDown","onLongPress","onPress","onPressMove","onPressIn","onPressOut","style","tabIndex","testOnly_hovered","testOnly_pressed"];function Xr(e,t){var r=e.children,o=e.delayLongPress,n=e.delayPressIn,a=e.delayPressOut,i=e.disabled,s=e.onBlur,d=e.onContextMenu,c=e.onFocus,h=e.onHoverIn,l=e.onHoverOut,v=e.onKeyDown,p=e.onLongPress,E=e.onPress,f=e.onPressMove,S=e.onPressIn,R=e.onPressOut,g=e.style,b=e.tabIndex,x=e.testOnly_hovered,y=e.testOnly_pressed,T=$n(e,Wr),M=Ve(x===!0),G=M[0],Y=M[1],w=Ve(!1),J=w[0],P=w[1],_=Ve(y===!0),L=_[0],k=_[1],A=u.useRef(null),V=Dt(t,A),j=u.useMemo(()=>({delayLongPress:o,delayPressStart:n,delayPressEnd:a,disabled:i,onLongPress:p,onPress:E,onPressChange:k,onPressStart:S,onPressMove:f,onPressEnd:R}),[o,n,a,i,p,E,S,f,R,k]),Q=Cr(A,j),ae=Q.onContextMenu,ie=Q.onKeyDown;Yr(A,{contain:!0,disabled:i,onHoverChange:Y,onHoverStart:h,onHoverEnd:l});var se={hovered:G,focused:J,pressed:L},we=u.useCallback(H=>{H.nativeEvent.target===A.current&&(P(!1),s!=null&&s(H))},[A,P,s]),Le=u.useCallback(H=>{H.nativeEvent.target===A.current&&(P(!0),c!=null&&c(H))},[A,P,c]),Ae=u.useCallback(H=>{ae!=null&&ae(H),d!=null&&d(H)},[d,ae]),Ie=u.useCallback(H=>{ie!=null&&ie(H),v!=null&&v(H)},[v,ie]),ee;return b!==void 0?ee=b:ee=i?-1:0,u.createElement(jn,Vn({},T,Q,{"aria-disabled":i,onBlur:we,onContextMenu:Ae,onFocus:Le,onKeyDown:Ie,ref:V,style:[i?yt.disabled:yt.active,typeof g=="function"?g(se):g],tabIndex:ee}),typeof r=="function"?r(se):r)}function Ve(e){var t=u.useState(!1),r=t[0],o=t[1];return[r||e,o]}var yt=xt.create({active:{cursor:"pointer",touchAction:"manipulation"},disabled:{pointerEvents:"box-none"}}),Qt=u.memo(u.forwardRef(Xr));Qt.displayName="Pressable";const Qo=Qt;var qr=(e,t)=>{var r=e.selectionEnd,o=e.selectionStart,n=t.start,a=t.end;return n!==o||a!==r},bt=(e,t)=>{if(qr(e,t)){var r=t.start,o=t.end;try{e.setSelectionRange(r,o||r)}catch{}}},Jr=Object.assign({},Bn,Kn,Un,Yn,Wn,Xn,qn,Jn,{autoCapitalize:!0,autoComplete:!0,autoCorrect:!0,autoFocus:!0,defaultValue:!0,disabled:!0,lang:!0,maxLength:!0,onChange:!0,onScroll:!0,placeholder:!0,pointerEvents:!0,readOnly:!0,rows:!0,spellCheck:!0,value:!0,type:!0}),Qr=e=>or(e,Jr);function Zr(e){return e.isComposing||e.keyCode===229}var $e=null,Ze=u.forwardRef((e,t)=>{var r=e.autoCapitalize,o=r===void 0?"sentences":r,n=e.autoComplete,a=e.autoCompleteType,i=e.autoCorrect,s=i===void 0?!0:i,d=e.blurOnSubmit,c=e.caretHidden,h=e.clearTextOnFocus,l=e.dir,v=e.editable,p=e.enterKeyHint,E=e.inputMode,f=e.keyboardType,S=e.multiline,R=S===void 0?!1:S,g=e.numberOfLines,b=e.onBlur,x=e.onChange,y=e.onChangeText,T=e.onContentSizeChange,M=e.onFocus,G=e.onKeyPress,Y=e.onLayout,w=e.onMoveShouldSetResponder,J=e.onMoveShouldSetResponderCapture,P=e.onResponderEnd,_=e.onResponderGrant,L=e.onResponderMove,k=e.onResponderReject,A=e.onResponderRelease,V=e.onResponderStart,j=e.onResponderTerminate,Q=e.onResponderTerminationRequest,ae=e.onScrollShouldSetResponder,ie=e.onScrollShouldSetResponderCapture,se=e.onSelectionChange,we=e.onSelectionChangeShouldSetResponder,Le=e.onSelectionChangeShouldSetResponderCapture,Ae=e.onStartShouldSetResponder,Ie=e.onStartShouldSetResponderCapture,ee=e.onSubmitEditing,H=e.placeholderTextColor,nt=e.readOnly,Pn=nt===void 0?!1:nt,_n=e.returnKeyType,rt=e.rows,ot=e.secureTextEntry,pe=ot===void 0?!1:ot,Me=e.selection,Tn=e.selectTextOnFocus,at=e.spellCheck,$,ge;if(E!=null)ge=E,E==="email"?$="email":E==="tel"?$="tel":E==="search"?$="search":E==="url"?$="url":$="text";else if(f!=null)switch(f){case"email-address":$="email";break;case"number-pad":case"numeric":ge="numeric";break;case"decimal-pad":ge="decimal";break;case"phone-pad":$="tel";break;case"search":case"web-search":$="search";break;case"url":$="url";break;default:$="text"}pe&&($="password");var te=u.useRef({height:null,width:null}),Z=u.useRef(null),Ne=u.useRef(null),it=u.useRef(!1);u.useEffect(()=>{Z.current&&Ne.current&&bt(Z.current,Ne.current),it.current=pe},[pe]);var ze=u.useCallback(m=>{if(R&&T&&m!=null){var O=m.scrollHeight,W=m.scrollWidth;(O!==te.current.height||W!==te.current.width)&&(te.current.height=O,te.current.width=W,T({nativeEvent:{contentSize:{height:te.current.height,width:te.current.width}}}))}},[R,T]),Cn=u.useMemo(()=>m=>{m!=null&&(m.clear=function(){m!=null&&(m.value="")},m.isFocused=function(){return m!=null&&fe.currentlyFocusedField()===m},ze(m))},[ze]);function xn(m){fe._currentlyFocusedNode=null,b&&(m.nativeEvent.text=m.target.value,b(m))}function Dn(m){var O=m.target,W=O.value;m.nativeEvent.text=W,ze(O),x&&x(m),y&&y(W)}function On(m){var O=m.target;M&&(m.nativeEvent.text=O.value,M(m)),O!=null&&(fe._currentlyFocusedNode=O,h&&(O.value=""),Tn&&($e!=null&&clearTimeout($e),$e=setTimeout(()=>{O!=null&&O.select()},0)))}function wn(m){var O=m.target;m.stopPropagation();var W=!R,ke=d??W,le=m.nativeEvent,st=Zr(le);G&&G(m),m.key==="Enter"&&!m.shiftKey&&!st&&!m.isDefaultPrevented()&&((d||!R)&&ee&&(m.preventDefault(),le.text=m.target.value,ee(m)),ke&&O!=null&&setTimeout(()=>O.blur(),0))}function Ln(m){try{var O=m.target,W=O.selectionStart,ke=O.selectionEnd,le={start:W,end:ke};se&&(m.nativeEvent.selection=le,m.nativeEvent.text=m.target.value,se(m)),it.current===pe&&(Ne.current=le)}catch{}}Xe(()=>{var m=Z.current;m!=null&&Me!=null&&bt(m,Me),document.activeElement===m&&(fe._currentlyFocusedNode=m)},[Z,Me]);var An=R?"textarea":"input";Qn(Z,Y),Zn(Z,{onMoveShouldSetResponder:w,onMoveShouldSetResponderCapture:J,onResponderEnd:P,onResponderGrant:_,onResponderMove:L,onResponderReject:k,onResponderRelease:A,onResponderStart:V,onResponderTerminate:j,onResponderTerminationRequest:Q,onScrollShouldSetResponder:ae,onScrollShouldSetResponderCapture:ie,onSelectionChangeShouldSetResponder:we,onSelectionChangeShouldSetResponderCapture:Le,onStartShouldSetResponder:Ae,onStartShouldSetResponderCapture:Ie});var In=er(),Mn=In.direction,D=Qr(e);D.autoCapitalize=o,D.autoComplete=n||a||"on",D.autoCorrect=s?"on":"off",D.dir=l!==void 0?l:"auto",D.enterKeyHint=p||_n,D.inputMode=ge,D.onBlur=xn,D.onChange=Dn,D.onFocus=On,D.onKeyDown=wn,D.onSelect=Ln,D.readOnly=Pn===!0||v===!1,D.rows=R?rt??g:1,D.spellCheck=at??s,D.style=[{"--placeholderTextColor":H},je.textinput$raw,je.placeholder,e.style,c&&je.caretHidden],D.type=R?void 0:$;var Nn=tr(D),zn=Dt(Z,Nn,Cn,t);D.ref=zn;var kn=e.lang!=null?nr(e.lang):null,Hn=e.dir||kn,Fn=Hn||Mn,Gn=rr(An,D,{writingDirection:Fn});return Gn});Ze.displayName="TextInput";Ze.State=fe;var je=xt.create({textinput$raw:{MozAppearance:"textfield",WebkitAppearance:"none",backgroundColor:"transparent",border:"0 solid black",borderRadius:0,boxSizing:"border-box",font:"14px System",margin:0,padding:0,resize:"none"},placeholder:{placeholderTextColor:"var(--placeholderTextColor)"},caretHidden:{caretColor:"transparent"}});const eo=Ze,to=(e,t)=>()=>{};function no({isInput:e,props:t,ref:r}){const{id:o,onChangeText:n,value:a,defaultValue:i}=t,s=u.useRef(a||i||""),d=u.useRef(),c=u.useCallback(l=>{var v;o&&l&&((v=d.current)==null||v.call(d),d.current=to(o,{focus:l.focus,...e&&{focusAndSelect(){l.focus(),l.setSelection&&typeof s.current=="string"&&l.setSelection(0,s.current.length)}}}))},[e,o]),h=qe(r,c);return u.useEffect(()=>()=>{var l;(l=d.current)==null||l.call(d)},[]),{ref:h,onChangeText:vr(l=>{s.current=l,n==null||n(l)})}}var ro={};const Zt="Label",[oo,ao]=cr(Zt,{id:void 0,controlRef:{current:null}}),en=q(hr,{name:"Label",tag:"label",variants:{unstyled:{false:{size:"$true",color:"$color",backgroundColor:"transparent",display:"flex",alignItems:"center",userSelect:"none",cursor:"default",pressStyle:{color:"$colorPress"}}},size:{"...size":(e,t)=>{var o;const r=(o=Je(e,t))==null?void 0:o.height;return{...Qe(e,t),lineHeight:r?t.tokens.size[r]:void 0}}}},defaultVariants:{unstyled:ro.TAMAGUI_HEADLESS==="1"}}),tn=u.forwardRef((e,t)=>{const{htmlFor:r,id:o,...n}=e,a=u.useRef(null),i=u.useRef(null),s=Ce(t,i),d=u.useId(),c=o??d;return u.useEffect(()=>{if(r){const h=document.getElementById(r);if(i.current&&h){const l=()=>h.getAttribute("aria-labelledby"),v=[c,l()].filter(Boolean).join(" ");return h.setAttribute("aria-labelledby",v),a.current=h,()=>{var E;if(!c)return;const p=(E=l())==null?void 0:E.replace(c,"");p===""?h.removeAttribute("aria-labelledby"):p&&h.setAttribute("aria-labelledby",p)}}}},[c,r]),C.jsx(oo,{id:c,controlRef:a,children:C.jsx(en,{id:c,htmlFor:r,...n,ref:s,onMouseDown:h=>{var l;(l=e.onMouseDown)==null||l.call(e,h),!h.defaultPrevented&&h.detail>1&&h.preventDefault()},onPress:h=>{var l;if((l=e.onPress)==null||l.call(e,h),Re){if(r||!a.current||h.defaultPrevented)return;const v=a.current.contains(h.target),p=h.isTrusted===!0;!v&&p&&(a.current.click(),a.current.focus())}}})})});tn.displayName=Zt;const Zo=en.extractable(ar(tn),{neverFlatten:!0}),ea=e=>{const t=ao("LabelConsumer"),{controlRef:r}=t;return u.useEffect(()=>{e&&(r.current=e)},[e,r]),t.id};var io={};(function(e){var t=ut&&ut.__assign||function(){return(t=Object.assign||function(i){for(var s,d=1,c=arguments.length;d<c;d++)for(var h in s=arguments[d])Object.prototype.hasOwnProperty.call(s,h)&&(i[h]=s[h]);return i}).apply(this,arguments)},r=(Object.defineProperty(e,"__esModule",{value:!0}),{id:"id",parentId:"parentId",dataField:"data",childrenField:"children",throwIfOrphans:!1,rootParentIds:{"":!(e.countNodes=e.arrayToTree=void 0)},nestedIds:!0,assign:!1});function o(i,s){s===void 0&&(s={});for(var d,c=t(t({},r),s),h=[],l={},v=c.throwIfOrphans?new Set:null,p=0,E=i;p<E.length;p++){var f=E[p],S=c.nestedIds?a(f,c.id):f[c.id],R=c.nestedIds?a(f,c.parentId):f[c.parentId];if(c.rootParentIds[S])throw new Error("The item array contains a node whose parentId both exists in another node and is in "+'`rootParentIds` (`itemId`: "'.concat(S,'", `rootParentIds`: ').concat(Object.keys(c.rootParentIds).map(function(g){return'"'.concat(g,'"')}).join(", "),")."));Object.prototype.hasOwnProperty.call(l,S)||(l[S]=((d={})[c.childrenField]=[],d)),v&&v.delete(S),c.dataField?l[S][c.dataField]=f:c.assign?l[S]=Object.assign(f,((d={})[c.childrenField]=l[S][c.childrenField],d)):l[S]=t(t({},f),((f={})[c.childrenField]=l[S][c.childrenField],f)),f=l[S],R==null||c.rootParentIds[R]?h.push(f):(Object.prototype.hasOwnProperty.call(l,R)||(l[R]=((S={})[c.childrenField]=[],S),v&&v.add(R)),l[R][c.childrenField].push(f))}if(v!=null&&v.size)throw new Error("The items array contains orphans that point to the following parentIds: "+"[".concat(Array.from(v),"]. These parentIds do not exist in the items array. Hint: prevent orphans to result ")+"in an error by passing the following option: { throwIfOrphans: false }");if(c.throwIfOrphans&&n(h,c.childrenField)<Object.keys(l).length)throw new Error("The items array contains nodes with a circular parent/child relationship.");return h}function n(i,s){return i.reduce(function(d,c){return d+1+(c[s]&&n(c[s],s))},0)}function a(i,s){return s.split(".").reduce(function(d,c){return d&&d[c]},i)}e.arrayToTree=o,e.countNodes=n})(io);var so=u.createContext(!1);so.displayName="PrerenderContext";var _e=u.createContext([]);_e.displayName="MaxIndexContext";var Te=u.createContext(null);Te.displayName="IndexContext";var lo=u.createContext(null);lo.displayName="TreeStateContext";function uo(e){return e.split(".").map(t=>parseInt(t,10))}function co(){const e=u.useContext(_e),t=u.useContext(Te);return u.useMemo(()=>{if(t===null)return null;const r=uo(t),o=e[e.length-1],n=r[r.length-1];return{maxIndex:o,maxIndexPath:e,index:n,indexPath:r,indexPathString:t,isFirst:n===0,isLast:n===o,isEven:n%2===0,isOdd:Math.abs(n%2)===1}},[e,t])}function fo(e){const t=u.useContext(_e),r=u.useContext(Te),o=u.Children.count(e),n=u.useMemo(()=>t.concat(o-1),[o]);return u.createElement(_e.Provider,{value:n},u.Children.map(e,(a,i)=>u.isValidElement(a)?u.createElement(Te.Provider,{key:a.key,value:r?`${r}.${i.toString()}`:i.toString()},a):a))}var ho={};const nn="Group",[vo,ta]=At(nn),[mo,So]=vo(nn),Eo=q(It,{name:"GroupFrame",variants:{unstyled:{false:{size:"$true"}},size:(e,{tokens:t})=>({borderRadius:t.radius[e]??e??t.radius.$true})},defaultVariants:{unstyled:ho.TAMAGUI_HEADLESS==="1"}});function rn(e){return Mt(u.forwardRef((t,r)=>{const o=fr(t),{__scopeGroup:n,children:a,space:i,size:s="$true",spaceDirection:d,separator:c,scrollable:h,axis:l=e?"vertical":"horizontal",orientation:v=l,disabled:p,disablePassBorderRadius:E,borderRadius:f,forceUseItem:S,...R}=o,g=v==="vertical",[b,x]=Nt({defaultProp:S?1:0}),y=b>0,T=f??(s?xe(Ot().radius[s])-1:void 0),M=E??T===void 0,G=u.Children.toArray(a),Y=y?u.Children.toArray(a).filter(u.isValidElement):G.map((_,L)=>{if(!u.isValidElement(_))return _;const k=_.props.disabled??p,A=L===0,V=L===G.length-1,j=M===!0?null:on({isFirst:A,isLast:V,radius:T,vertical:g,disable:M}),Q={disabled:k,...kt(_)?j:{style:j}};return bo(_,Q)}),w=fo(ir({direction:d,separator:c,space:i,children:Y})),J=re.useCallback(()=>x(_=>_+1),[]),P=re.useCallback(()=>x(_=>_-1),[]);return C.jsx(mo,{disablePassBorderRadius:M,vertical:v==="vertical",radius:T,disabled:p,onItemMount:J,onItemUnmount:P,scope:n,children:C.jsx(Eo,{ref:r,size:s,flexDirection:v==="horizontal"?"row":"column",borderRadius:f,...R,children:yo({...o,orientation:v},w)})})}),{Item:po})}const po=e=>{var a;const{__scopeGroup:t,children:r,forcePlacement:o}=e,n=go({disabled:u.isValidElement(r)?r.props.disabled:void 0},o,t);return u.isValidElement(r)?kt(r)?re.cloneElement(r,n):re.cloneElement(r,{style:{...(a=r.props)==null?void 0:a.style,...n}}):r},go=(e,t,r)=>{const o=co(),n=So("GroupItem",r);if(re.useEffect(()=>(n.onItemMount(),()=>{n.onItemUnmount()}),[]),!o)throw Error("<Group.Item/> should only be used within a <Group/>");const a=t==="first"||t!=="last"&&o.index===0,i=t==="last"||t!=="first"&&o.index===o.maxIndex;let s={disabled:e.disabled??n.disabled};if(n.disablePassBorderRadius!==!0){const d=on({radius:n.radius,isFirst:a,isLast:i,vertical:n.vertical,disable:n.disablePassBorderRadius});return{...s,...d}}return s},Ro=rn(!0),na=Ro,ra=rn(!1),yo=({scrollable:e,orientation:t,showScrollIndicator:r=!1},o)=>e?C.jsx(mr,{...t==="vertical"&&{showsVerticalScrollIndicator:r},...t==="horizontal"&&{horizontal:!0,showsHorizontalScrollIndicator:r},children:o}):o,on=({isFirst:e,isLast:t,radius:r,vertical:o,disable:n})=>({borderTopLeftRadius:e&&n!=="top"&&n!=="start"?r:0,borderTopRightRadius:n!=="top"&&n!=="end"&&(o&&e||!o&&t)?r:0,borderBottomLeftRadius:n!=="bottom"&&n!=="start"&&(o&&t||!o&&e)?r:0,borderBottomRightRadius:t&&n!=="bottom"&&n!=="end"?r:0}),bo=(e,t)=>{const r=sr(e.props,t,lr().shorthands);return re.cloneElement({...e,props:null},r)},Ee="Slider",[an,oa]=At(Ee),[Po,Oe]=an(Ee),[sn,ln]=an(Ee,{startEdge:"left",endEdge:"right",sizeProp:"width",size:0,direction:1}),un=["PageUp","PageDown"],dn=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],cn={ltr:["ArrowDown","Home","ArrowLeft","PageDown"],rtl:["ArrowDown","Home","ArrowRight","PageDown"]};function _o(e=[],t,r){const o=[...e];return o[r]=t,o.sort((n,a)=>n-a)}function fn(e,t,r){return 100/(r-t)*(e-t)}function To(e,t){if(t>2)return`Value ${e+1} of ${t}`;if(t===2)return["Minimum","Maximum"][e]}function Co(e,t){if(e.length===1)return 0;const r=e.map(n=>Math.abs(n-t)),o=Math.min(...r);return r.indexOf(o)}function xo(e,t,r){const o=e/4,n=et([0,50],[0,o]);return(o-n(t)*r)*r}function Do(e){return e.slice(0,-1).map((t,r)=>e[r+1]-t)}function Oo(e,t){if(t>0){const r=Do(e);return Math.min(...r)>=t}return!0}function et(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const o=(t[1]-t[0])/(e[1]-e[0]);return t[0]+o*(r-e[0])}}function wo(e){return(String(e).split(".")[1]||"").length}function Lo(e,t){const r=10**t;return Math.round(e*r)/r}const tt=q(ur,{position:"relative",variants:{orientation:{horizontal:{},vertical:{}},size:(e,t)=>{if(!e)return;const r=t.props.orientation,o=Math.round(xe(zt(e))/6);return r==="horizontal"?{height:o,borderRadius:o,justifyContent:"center"}:{width:o,borderRadius:o,alignItems:"center"}}}}),hn=u.forwardRef((e,t)=>{const{__scopeSlider:r,onSlideStart:o,onSlideMove:n,onSlideEnd:a,onHomeKeyDown:i,onEndKeyDown:s,onStepKeyDown:d,...c}=e,h=Oe(Ee,r);return C.jsx(tt,{size:"$4",...c,"data-orientation":c.orientation,ref:t,onKeyDown:l=>{l.key==="Home"?(i(l),l.preventDefault()):l.key==="End"?(s(l),l.preventDefault()):un.concat(dn).includes(l.key)&&(d(l),l.preventDefault())},onMoveShouldSetResponderCapture:()=>!0,onScrollShouldSetResponder:()=>!0,onScrollShouldSetResponderCapture:()=>!0,onMoveShouldSetResponder:()=>!0,onStartShouldSetResponder:()=>!0,onResponderTerminationRequest:()=>!1,onResponderGrant:ye(e.onResponderGrant,l=>{const v=l.target,p=h.thumbs.get(v),E=p!==void 0;v instanceof HTMLElement&&h.thumbs.has(v)&&v.focus(),o(l,E?"thumb":"track")}),onResponderMove:ye(e.onResponderMove,l=>{l.stopPropagation(),n(l)}),onResponderRelease:ye(e.onResponderRelease,l=>{a(l)})})});var vn={};const Ao=u.forwardRef((e,t)=>{const{min:r,max:o,dir:n,onSlideStart:a,onSlideMove:i,onStepKeyDown:s,onSlideEnd:d,...c}=e,h=Rr(n),l=h==="ltr",v=u.useRef(null),[p,E]=u.useState(()=>({size:0,offset:0})),f=Lt(E);function S(g){const b=[0,p.size];return et(b,l?[r,o]:[o,r])(g)}const R=()=>{var g;(g=v.current)==null||g.measure((b,x,y,T,M,G)=>{f({size:y,offset:M})})};return wt&&mn(R),C.jsx(sn,{scope:e.__scopeSlider,startEdge:l?"left":"right",endEdge:l?"right":"left",direction:l?1:-1,sizeProp:"width",size:p.size,children:C.jsx(hn,{ref:qe(t,v),dir:h,...c,orientation:"horizontal",onLayout:R,onSlideStart:(g,b)=>{const x=S(g.nativeEvent.locationX);x&&(a==null||a(x,b,g))},onSlideMove:g=>{const b=S(g.nativeEvent.pageX-p.offset);b&&(i==null||i(b,g))},onSlideEnd:g=>{const b=S(g.nativeEvent.pageX-p.offset);b&&(d==null||d(g,b))},onStepKeyDown:g=>{const b=cn[h].includes(g.key);s==null||s({event:g,direction:b?-1:1})}})})});function mn(e,t=200){u.useEffect(()=>{let r;const o=()=>{clearTimeout(r),r=setTimeout(e,t)};return window.addEventListener("resize",o),()=>{clearTimeout(r),window.removeEventListener("resize",o)}},[])}const Io=u.forwardRef((e,t)=>{const{min:r,max:o,onSlideStart:n,onSlideMove:a,onStepKeyDown:i,onSlideEnd:s,...d}=e,[c,h]=u.useState(()=>({size:0,offset:0})),l=Lt(h),v=u.useRef(null);function p(f){const S=[0,c.size];return et(S,[o,r])(f)}const E=()=>{var f;(f=v.current)==null||f.measure((S,R,g,b,x,y)=>{l({size:b,offset:y})})};return wt&&mn(E),C.jsx(sn,{scope:e.__scopeSlider,startEdge:"bottom",endEdge:"top",sizeProp:"height",size:c.size,direction:1,children:C.jsx(hn,{ref:qe(t,v),...d,orientation:"vertical",onLayout:E,onSlideStart:(f,S)=>{const R=p(f.nativeEvent.locationY);R&&(n==null||n(R,S,f))},onSlideMove:f=>{const S=p(f.nativeEvent.pageY-c.offset);S&&(a==null||a(S,f))},onSlideEnd:f=>{const S=p(f.nativeEvent.pageY-c.offset);s==null||s(f,S)},onStepKeyDown:f=>{const S=cn.ltr.includes(f.key);i==null||i({event:f,direction:S?-1:1})}})})}),Sn="SliderTrack",Mo=q(tt,{name:"SliderTrack",variants:{unstyled:{false:{height:"100%",width:"100%",backgroundColor:"$background",position:"relative",borderRadius:1e5,overflow:"hidden"}}},defaultVariants:{unstyled:vn.TAMAGUI_HEADLESS==="1"}}),En=u.forwardRef((e,t)=>{const{__scopeSlider:r,...o}=e,n=Oe(Sn,r);return C.jsx(Mo,{"data-disabled":n.disabled?"":void 0,"data-orientation":n.orientation,orientation:n.orientation,size:n.size,...o,ref:t})});En.displayName=Sn;const Ye="SliderTrackActive",No=q(tt,{name:"SliderTrackActive",backgroundColor:"$background",position:"absolute"}),pn=u.forwardRef((e,t)=>{const{__scopeSlider:r,...o}=e,n=Oe(Ye,r),a=ln(Ye,r),i=u.useRef(null),s=Ce(t,i),d=n.values.length,c=n.values.map(v=>fn(v,n.min,n.max)),h=d>1?Math.min(...c):0,l=100-Math.max(...c);return C.jsx(No,{orientation:n.orientation,"data-orientation":n.orientation,"data-disabled":n.disabled?"":void 0,size:n.size,animateOnly:["left","top","right","bottom"],...o,ref:s,[a.startEdge]:`${h}%`,[a.endEdge]:`${l}%`,...a.sizeProp==="width"?{height:"100%"}:{left:0,right:0}})});pn.displayName=Ye;const Pt="SliderThumb",gn=e=>{const t=Ot(),r=typeof e=="number"?e:zt(t.size[e],{shift:-1});return{width:r,height:r,minWidth:r,minHeight:r}},_t=q(It,{name:"SliderThumb",variants:{size:{"...size":gn},unstyled:{false:{position:"absolute",bordered:2,borderWidth:2,backgrounded:!0,pressTheme:Re,focusTheme:Re,hoverTheme:Re}}},defaultVariants:{unstyled:vn.TAMAGUI_HEADLESS==="1"}}),zo=u.memo(_t.styleable(function(e,t){const{__scopeSlider:r,index:o,size:n,...a}=e,i=Oe(Pt,r),s=ln(Pt,r),[d,c]=u.useState(null),h=Ce(t,b=>c(b)),l=i.values[o],v=l===void 0?0:fn(l,i.min,i.max),p=To(o,i.values.length),E=n??i.size??"$true",[f,S]=u.useState(()=>xe(gn(E).width)),R=f?xo(f,v,s.direction):0;u.useEffect(()=>{if(d)return i.thumbs.set(d,o),()=>{i.thumbs.delete(d)}},[d,i.thumbs,o]);const g=i.orientation==="horizontal"?{x:R-f/2,y:-f/2,top:"50%",...f===0&&{top:"auto",bottom:"auto"}}:{x:-f/2,y:f/2,left:"50%",...f===0&&{left:"auto",right:"auto"}};return C.jsx(_t,{ref:h,role:"slider","aria-label":e["aria-label"]||p,"aria-valuemin":i.min,"aria-valuenow":l,"aria-valuemax":i.max,"aria-orientation":i.orientation,"data-orientation":i.orientation,"data-disabled":i.disabled?"":void 0,tabIndex:i.disabled?void 0:0,animateOnly:["transform","left","top","right","bottom"],...g,[s.startEdge]:`${v}%`,size:E,...a,onLayout:b=>{S(b.nativeEvent.layout[s.sizeProp])},onFocus:ye(e.onFocus,()=>{i.valueIndexToChangeRef.current=o})})})),ko=u.forwardRef((e,t)=>{const{name:r,min:o=0,max:n=100,step:a=1,orientation:i="horizontal",disabled:s=!1,minStepsBetweenThumbs:d=0,defaultValue:c=[o],value:h,onValueChange:l=()=>{},size:v,onSlideEnd:p,onSlideMove:E,onSlideStart:f,...S}=e,R=u.useRef(null),g=Ce(R,t),b=u.useRef(new Map),x=u.useRef(0),y=i==="horizontal",[T=[],M]=Nt({prop:h,defaultProp:c,transition:!0,onChange:P=>{G(x.current),l(P)}});u.useEffect(()=>{const P=R.current;if(!P)return;const _=L=>{L.preventDefault()};return P.addEventListener("touchstart",_),()=>{P.removeEventListener("touchstart",_)}},[]);function G(P){for(const[_,L]of b.current.entries())if(L===P){_.focus();return}}function Y(P,_){w(P,x.current),E==null||E(_,P)}function w(P,_){const L=wo(a),k=Lo(Math.round((P-o)/a)*a+o,L),A=Er(k,[o,n]);M((V=[])=>{const j=_o(V,A,_);return Oo(j,d*a)?(x.current=j.indexOf(A),String(j)===String(V)?V:j):V})}const J=y?Ao:Io;return C.jsx(Po,{scope:e.__scopeSlider,disabled:s,min:o,max:n,valueIndexToChangeRef:x,thumbs:b.current,values:T,orientation:i,size:v,children:C.jsx(J,{"aria-disabled":s,"data-disabled":s?"":void 0,...S,ref:g,min:o,max:n,onSlideEnd:p,onSlideStart:s?void 0:(P,_,L)=>{if(_!=="thumb"){const k=Co(T,P);w(P,k)}f==null||f(L,P,_)},onSlideMove:s?void 0:Y,onHomeKeyDown:()=>!s&&w(o,0),onEndKeyDown:()=>!s&&w(n,T.length-1),onStepKeyDown:({event:P,direction:_})=>{if(!s){const L=un.includes(P.key)||P.shiftKey&&dn.includes(P.key)?10:1,k=x.current,A=T[k],V=a*L*_;w(A+V,k)}}})})}),Ho=Mt(ko,{Track:En,TrackActive:pn,Thumb:zo});Ho.displayName=Ee;const Fo=(e="$true",t)=>{if(t.props.multiline||t.props.numberOfLines>1)return Rn(e,t);const r=Je(e,t),o=Be(e,{shift:-1,bounds:[2]});return{...Qe(e,t),...r,paddingHorizontal:o}},Rn=(e="$true",t)=>{const{props:r}=t,o=Je(e,t),n=Qe(e,t),a=r.rows??r.numberOfLines,i=typeof a=="number"?a*xe(n.lineHeight):"auto",s=Be(e,{shift:-2,bounds:[2]}),d=Be(e,{shift:-1,bounds:[2]});return{...o,...n,paddingVertical:s,paddingHorizontal:d,height:i}};var Go={};const yn={size:"$true",fontFamily:"$body",borderWidth:1,outlineWidth:0,color:"$color",tabIndex:0,borderColor:"$borderColor",backgroundColor:"$background",minWidth:0,hoverStyle:{borderColor:"$borderColorHover"},focusStyle:{outlineColor:"$outlineColor",outlineWidth:2,outlineStyle:"solid",borderColor:"$borderColorFocus"}},We=q(eo,{name:"Input",variants:{unstyled:{false:yn},size:{"...size":Fo},disabled:{true:{}}},defaultVariants:{unstyled:Go.TAMAGUI_HEADLESS==="1"}},{isInput:!0,acceptTokens:{placeholderTextColor:"color"}}),aa=We.styleable((e,t)=>{const r=bn(e,t);return C.jsx(We,{...r})});function bn(e,t){var s,d;const r=dr(),{onChangeText:o,ref:n}=no({props:e,ref:t,isInput:!0}),a=e.placeholderTextColor,i=((s=r[a])==null?void 0:s.get())??a??((d=r.placeholderColor)==null?void 0:d.get());return{ref:n,readOnly:e.disabled,...e,placeholderTextColor:i,onChangeText:o}}var Vo={};const Tt=q(We,{name:"TextArea",multiline:!0,whiteSpace:"pre-wrap",variants:{unstyled:{false:{height:"auto",...yn}},size:{"...size":Rn}},defaultVariants:{unstyled:Vo.TAMAGUI_HEADLESS==="1"}}),ia=Tt.styleable((e,t)=>{const r=bn(e,t),o={rows:e.unstyled?void 0:4};return C.jsx(Tt,{...o,...r})});function sa({trigger:e,children:t,hideArrow:r,contentProps:o,isBouncy:n=!0,sheetProps:a,...i}){return C.jsxs(ne,{size:"$5",...i,children:[C.jsx(ne.Trigger,{asChild:!0,children:e}),C.jsx(ne.Adapt,{when:"sm",platform:"touch",children:C.jsx(Sr,{...a,children:C.jsx(ne.Adapt.Contents,{})})}),C.jsxs(ne.Content,{borderWidth:1,borderColor:"$borderColor",...n&&{enterStyle:{x:0,y:-10,opacity:0},exitStyle:{x:0,y:-10,opacity:0,pointerEvents:"none"},x:0,y:0,o:1,animation:["quick",{opacity:{overshootClamping:!0}}]},elevate:!0,padding:(o==null?void 0:o.padding)||0,...o,children:[!r&&C.jsx(ne.Arrow,{borderWidth:1,borderColor:"$borderColor"}),t]})]})}const la=e=>{const[t,r]=u.useState(!!e);return{open:t,onOpenChange:r,defaultOpen:!!e}};export{aa as I,Zo as L,Qo as P,Ho as S,ia as T,ra as X,na as Y,la as a,sa as b,Rr as c,ea as u};