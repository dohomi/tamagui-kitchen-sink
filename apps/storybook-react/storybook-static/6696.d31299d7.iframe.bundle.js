/*! For license information please see 6696.d31299d7.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksb_react=self.webpackChunksb_react||[]).push([[6696],{"../../node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>_asyncToGenerator})},"../../node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/regeneratorRuntime.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _typeof=__webpack_require__("../../node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/typeof.js").default;function _regeneratorRuntime(){"use strict";module.exports=_regeneratorRuntime=function _regeneratorRuntime(){return e},module.exports.__esModule=!0,module.exports.default=module.exports;var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}module.exports=_regeneratorRuntime,module.exports.__esModule=!0,module.exports.default=module.exports},"../../node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/typeof.js":module=>{function _typeof(o){return module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},module.exports.__esModule=!0,module.exports.default=module.exports,_typeof(o)}module.exports=_typeof,module.exports.__esModule=!0,module.exports.default=module.exports},"../../node_modules/@storybook/nextjs/node_modules/@babel/runtime/regenerator/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var runtime=__webpack_require__("../../node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();module.exports=runtime;try{regeneratorRuntime=runtime}catch(accidentalStrictMode){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}},"../../node_modules/@tamagui/card/dist/esm/Card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Zb:()=>Card});var _tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/createStyledContext.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/withStaticProperties.js");const CardContext=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_0__.i)({size:"$true"}),CardFrame=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_1__.z)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__.K,{name:"Card",context:CardContext,variants:{unstyled:{false:{size:"$true",backgroundColor:"$background",position:"relative"}},size:{"...size":(val,{tokens})=>({borderRadius:tokens.radius[val]??val})}},defaultVariants:{unstyled:"1"==={}.TAMAGUI_HEADLESS}}),CardHeader=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_1__.z)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__.K,{name:"CardHeader",context:CardContext,variants:{unstyled:{false:{zIndex:10,backgroundColor:"transparent",marginBottom:"auto"}},size:{"...size":(val,{tokens})=>({padding:tokens.space[val]??val})}},defaultVariants:{unstyled:"1"==={}.TAMAGUI_HEADLESS}}),CardFooter=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_1__.z)(CardHeader,{name:"CardFooter",variants:{unstyled:{false:{zIndex:5,flexDirection:"row",marginTop:"auto",marginBottom:0}}},defaultVariants:{unstyled:"1"==={}.TAMAGUI_HEADLESS}}),CardBackground=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_1__.z)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__.K,{name:"CardBackground",variants:{unstyled:{false:{zIndex:0,fullscreen:!0,overflow:"hidden",pointerEvents:"none",padding:0}}},defaultVariants:{unstyled:"1"==={}.TAMAGUI_HEADLESS}}),Card=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_3__.$)(CardFrame,{Header:CardHeader,Footer:CardFooter,Background:CardBackground})},"../../node_modules/@tamagui/checkbox/dist/esm/Checkbox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XZ:()=>Checkbox2});var _tamagui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/createStyledContext.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/hooks/useTheme.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/createVariable.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/@tamagui/compose-refs/dist/esm/compose-refs.mjs"),_tamagui_core__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/hooks/useProps.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../node_modules/@tamagui/constants/dist/esm/index.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../node_modules/@tamagui/core/dist/esm/index.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/withStaticProperties.js"),_tamagui_create_context__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/@tamagui/create-context/dist/esm/create-context.js"),_tamagui_font_size__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@tamagui/font-size/dist/esm/getFontSize.mjs"),_tamagui_get_token__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@tamagui/get-token/dist/esm/index.js"),_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tamagui/helpers-tamagui/dist/esm/index.js"),_tamagui_label__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../node_modules/@tamagui/label/dist/esm/Label.js"),_tamagui_stacks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js"),_tamagui_use_controllable_state__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.js"),_tamagui_use_previous__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tamagui/use-previous/dist/esm/index.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js");const CheckboxStyledContext=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_5__.i)({size:"$true",scaleIcon:1});function isIndeterminate(checked){return"indeterminate"===checked}function getState(checked){return isIndeterminate(checked)?"indeterminate":checked?"checked":"unchecked"}const BubbleInput=props=>{const{checked,bubbles=!0,control,isHidden,...inputProps}=props,ref=react__WEBPACK_IMPORTED_MODULE_3__.useRef(null),prevChecked=(0,_tamagui_use_previous__WEBPACK_IMPORTED_MODULE_2__.D)(checked);return react__WEBPACK_IMPORTED_MODULE_3__.useEffect((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});input.indeterminate=isIndeterminate(checked),setChecked.call(input,!isIndeterminate(checked)&&checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input",{type:"checkbox",defaultChecked:!isIndeterminate(checked)&&checked,...inputProps,tabIndex:-1,ref,"aria-hidden":isHidden,style:{...isHidden?{position:"absolute",pointerEvents:"none",opacity:0,margin:0}:{appearance:"auto",accentColor:"var(--color6)"},...props.style}})},CheckboxIndicatorFrame=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_6__.z)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_7__.K,{name:"CheckboxIndicator",context:CheckboxStyledContext}),CheckboxIndicator=CheckboxIndicatorFrame.extractable(react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(((props,forwardedRef)=>{const{__scopeCheckbox,children:childrenProp,forceMount,disablePassStyles,...indicatorProps}=props,context=useCheckboxContext("CheckboxIndicator",__scopeCheckbox),styledContext=react__WEBPACK_IMPORTED_MODULE_3__.useContext(CheckboxStyledContext),iconSize=("number"==typeof styledContext.size?.65*styledContext.size:(0,_tamagui_font_size__WEBPACK_IMPORTED_MODULE_8__.yv)(styledContext.size))*styledContext.scaleIcon,theme=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_9__.Fg)(),getThemedIcon=(0,_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_1__.useGetThemedIcon)({size:iconSize,color:theme.color}),children=react__WEBPACK_IMPORTED_MODULE_3__.Children.toArray(childrenProp).map((child=>disablePassStyles||!react__WEBPACK_IMPORTED_MODULE_3__.isValidElement(child)?child:getThemedIcon(child)));return forceMount||isIndeterminate(context.state)||!0===context.state?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CheckboxIndicatorFrame,{"data-state":getState(context.state),"data-disabled":context.disabled?"":void 0,pointerEvents:"none",...indicatorProps,ref:forwardedRef,children}):null})));CheckboxIndicator.displayName="CheckboxIndicator";const CheckboxFrame=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_6__.z)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_7__.K,{name:"Checkbox",tag:"button",context:CheckboxStyledContext,variants:{unstyled:{false:{size:"$true",backgroundColor:"$background",alignItems:"center",justifyContent:"center",pressTheme:!0,focusable:!0,borderWidth:1,borderColor:"$borderColor",hoverStyle:{borderColor:"$borderColorHover"},focusStyle:{borderColor:"$borderColorFocus",outlineStyle:"solid",outlineWidth:2,outlineColor:"$borderColorFocus"}}},disabled:{true:{pointerEvents:"none",userSelect:"none",cursor:"not-allowed",hoverStyle:{borderColor:"$borderColor",backgroundColor:"$background"},pressStyle:{borderColor:"$borderColor",backgroundColor:"$backgroundColor"},focusStyle:{outlineWidth:0}}},size:{"...size":(val,{tokens})=>({borderRadius:(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_10__.Ve)((0,_tamagui_get_token__WEBPACK_IMPORTED_MODULE_0__.ap)(val))/8})}},defaultVariants:{unstyled:"1"==={}.TAMAGUI_HEADLESS}}),[createCheckboxContext,createCheckboxScope]=(0,_tamagui_create_context__WEBPACK_IMPORTED_MODULE_11__.b)("Checkbox"),[CheckboxProvider,useCheckboxContext]=createCheckboxContext("Checkbox"),CheckboxComponent=CheckboxFrame.styleable((function(props,forwardedRef){const{__scopeCheckbox,labelledBy:ariaLabelledby,name,checked:checkedProp,defaultChecked,required,scaleSize=.45,sizeAdjust=0,disabled,value="on",onCheckedChange,native,scaleIcon,...checkboxProps}=props,[button,setButton]=react__WEBPACK_IMPORTED_MODULE_3__.useState(null),composedRefs=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_12__.e)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=react__WEBPACK_IMPORTED_MODULE_3__.useRef(!1),propsActive=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_13__.wN)(props),isFormControl=!!_tamagui_core__WEBPACK_IMPORTED_MODULE_14__.$L&&(!button||!!button.closest("form")),[checked=!1,setChecked]=(0,_tamagui_use_controllable_state__WEBPACK_IMPORTED_MODULE_15__.T)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange}),styledContext=react__WEBPACK_IMPORTED_MODULE_3__.useContext(CheckboxStyledContext),adjustedSize=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_10__.Ve)((0,_tamagui_get_token__WEBPACK_IMPORTED_MODULE_0__.ap)(propsActive.size??styledContext?.size??"$true",{shift:sizeAdjust})),size=scaleSize?Math.round(adjustedSize*scaleSize):adjustedSize,labelId=(0,_tamagui_label__WEBPACK_IMPORTED_MODULE_16__.t0)(button);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CheckboxProvider,{scope:__scopeCheckbox,state:checked,disabled,children:_tamagui_core__WEBPACK_IMPORTED_MODULE_14__.$L&&native?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,id:props.id}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CheckboxFrame,{width:size,height:size,tag:"button",role:"checkbox","aria-labelledby":ariaLabelledby||labelId,"aria-checked":isIndeterminate(checked)?"mixed":checked,"aria-required":required,"data-state":getState(checked),"data-disabled":disabled?"":void 0,disabled,...checkboxProps,ref:composedRefs,..._tamagui_core__WEBPACK_IMPORTED_MODULE_14__.$L&&{type:"button",value,onKeyDown:(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_17__.composeEventHandlers)(props.onKeyDown,(event=>{"Enter"===event.key&&event.preventDefault()}))},onPress:(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_17__.composeEventHandlers)(props.onPress,(event=>{setChecked((prevChecked=>!!isIndeterminate(prevChecked)||!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())})),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CheckboxStyledContext.Provider,{size:propsActive.size??styledContext?.size??"$true",scaleIcon:scaleIcon??styledContext?.scaleIcon??1,children:propsActive.children})}),_tamagui_core__WEBPACK_IMPORTED_MODULE_14__.$L&&isFormControl?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BubbleInput,{isHidden:!0,control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled}):null]})})})),Checkbox2=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_18__.$)(CheckboxComponent,{Indicator:CheckboxIndicator,Props:CheckboxStyledContext.Provider})},"../../node_modules/@tamagui/form/dist/esm/Form.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l0:()=>Form2});var _tamagui_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tamagui/core/dist/esm/index.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/withStaticProperties.js"),_tamagui_create_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@tamagui/create-context/dist/esm/create-context.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js");const FormFrame=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_1__.z)(_tamagui_core__WEBPACK_IMPORTED_MODULE_2__.Stack,{name:"Form",tag:"form"}),[createFormContext]=(0,_tamagui_create_context__WEBPACK_IMPORTED_MODULE_3__.b)("Form"),[FormProvider,useFormContext]=createFormContext("Form"),FormTriggerFrame=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_1__.z)(_tamagui_core__WEBPACK_IMPORTED_MODULE_2__.View,{name:"FormTrigger"}),FormTrigger=FormTriggerFrame.styleable(((props,forwardedRef)=>{const{__scopeForm,children,onPress,...triggerProps}=props,context=useFormContext("FormTrigger",__scopeForm);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FormTriggerFrame,{tag:"button",...triggerProps,ref:forwardedRef,onPress:(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_2__.composeEventHandlers)(onPress,context.onSubmit),children})})),FormComponent=FormFrame.extractable((function({onSubmit,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FormProvider,{scope:props.__scopeForm,onSubmit,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FormFrame,{...props,onSubmit:e=>e.preventDefault()})})})),Form2=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_4__.$)(FormComponent,{Trigger:FormTrigger})},"../../node_modules/@tamagui/image/dist/esm/Image.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Image});var _tamagui_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/hooks/useProps.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@tamagui/constants/dist/esm/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),react_native_web__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react-native-web/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js");const StyledImage=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_2__.z)(react_native_web__WEBPACK_IMPORTED_MODULE_3__.Ee,{name:"Image",position:"relative",source:{uri:""}});const Image=StyledImage.extractable((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((inProps,ref)=>{const[props,style]=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_4__.Lb)(inProps),{src,source,...rest}=props;let finalSource="string"==typeof src?{uri:src,..._tamagui_core__WEBPACK_IMPORTED_MODULE_5__.$L&&{width:props.width,height:props.height}}:source??src;return finalSource&&"object"==typeof finalSource&&finalSource.default&&(finalSource=finalSource.default),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledImage,{ref,source:finalSource,style,...rest})})));Image.getSize=react_native_web__WEBPACK_IMPORTED_MODULE_3__.Ee.getSize,Image.getSizeWithHeaders=react_native_web__WEBPACK_IMPORTED_MODULE_3__.Ee.getSizeWithHeaders,Image.prefetch=react_native_web__WEBPACK_IMPORTED_MODULE_3__.Ee.prefetch,Image.prefetchWithMetadata=react_native_web__WEBPACK_IMPORTED_MODULE_3__.Ee.prefetchWithMetadata,Image.abortPrefetch=react_native_web__WEBPACK_IMPORTED_MODULE_3__.Ee.abortPrefetch,Image.queryCache=react_native_web__WEBPACK_IMPORTED_MODULE_3__.Ee.queryCache},"../../node_modules/@tamagui/switch/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{rs:()=>Switch});var compose_refs=__webpack_require__("../../node_modules/@tamagui/compose-refs/dist/esm/compose-refs.mjs"),esm=__webpack_require__("../../node_modules/@tamagui/core/dist/esm/index.js"),useProps=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/hooks/useProps.js"),dist_esm=__webpack_require__("../../node_modules/@tamagui/constants/dist/esm/index.js"),withStaticProperties=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/withStaticProperties.js"),registerFocusable=__webpack_require__("../../node_modules/@tamagui/focusable/dist/esm/registerFocusable.js"),Label=__webpack_require__("../../node_modules/@tamagui/label/dist/esm/Label.js"),Stacks=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/Stacks.js"),useControllableState=__webpack_require__("../../node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.js"),use_previous_dist_esm=__webpack_require__("../../node_modules/@tamagui/use-previous/dist/esm/index.js"),react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("../../node_modules/react-native-web/dist/index.js"),styled=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),createVariable=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/createVariable.js"),get_token_dist_esm=__webpack_require__("../../node_modules/@tamagui/get-token/dist/esm/index.js"),ThemeableStack=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js");const SwitchContext=(0,__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/createStyledContext.js").i)({checked:!1,disabled:!1,size:void 0,frameWidth:0,unstyled:"1"==={}.TAMAGUI_HEADLESS}),SwitchThumb=(0,styled.z)(ThemeableStack.K,{name:"SwitchThumb",context:SwitchContext,variants:{unstyled:{false:{size:"$true",backgroundColor:"$background",borderRadius:1e3}},checked:{true:{}},size:{"...size":val=>{const size=getSwitchHeight(val);return{height:size,width:size}}}},defaultVariants:{unstyled:"1"==={}.TAMAGUI_HEADLESS}}),getSwitchHeight=val=>Math.round(.65*(0,createVariable.Ve)((0,get_token_dist_esm.ap)(val))),SwitchFrame=(0,styled.z)(Stacks.FA,{name:"Switch",context:SwitchContext,variants:{unstyled:{false:{size:"$true",borderRadius:1e3,backgroundColor:"$background",borderWidth:2,borderColor:"$background",focusStyle:{outlineColor:"$borderColorFocus",outlineStyle:"solid",outlineWidth:2}}},checked:{true:{}},frameWidth:{":number":()=>null},size:{"...size":val=>{const height=getSwitchHeight(val)+4,width=(val=>2*getSwitchHeight(val))(val)+4;return{height,minHeight:height,width}}}},defaultVariants:{unstyled:"1"==={}.TAMAGUI_HEADLESS}});var jsx_runtime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js");const Switch=function createSwitch({disableActiveTheme,Frame=SwitchFrame,Thumb=SwitchThumb}){Frame.staticConfig.context=SwitchContext,Thumb.staticConfig.context=SwitchContext;const SwitchThumbComponent=Thumb.styleable((function(props,forwardedRef){const{size:sizeProp,unstyled:unstyledProp,...thumbProps}=props,context=react.useContext(SwitchContext),{disabled,checked,unstyled:unstyledContext,frameWidth,size:sizeContext}=context,[thumbWidth,setThumbWidth]=react.useState(0),initialChecked=react.useRef(checked).current,distance=frameWidth-thumbWidth,x=initialChecked?checked?0:-distance:checked?distance:0;return(0,jsx_runtime.jsx)(Thumb,{...!1===(unstyledProp??unstyledContext??!1)&&{unstyled:"1"==={}.TAMAGUI_HEADLESS,size:sizeProp??sizeContext??"$true",...!disableActiveTheme&&{theme:checked?"active":null}},"data-state":getState(checked),"data-disabled":disabled?"":void 0,alignSelf:initialChecked?"flex-end":"flex-start",checked,x,...thumbProps,onLayout:(0,esm.composeEventHandlers)(props.onLayout,(e=>setThumbWidth(e.nativeEvent.layout.width))),ref:forwardedRef})})),SwitchComponent=Frame.styleable((function(propsIn,forwardedRef){const styledContext=react.useContext(SwitchContext),props=(0,useProps.wN)(propsIn,{noNormalize:!0,noExpand:!0,resolveValues:"none",forComponent:Frame}),{labeledBy:ariaLabelledby,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,size=styledContext.size??"$true",unstyled=styledContext.unstyled??!1,native:nativeProp,nativeProps,children,...switchProps}=props,native=Array.isArray(nativeProp)?nativeProp:[nativeProp],shouldRenderMobileNative=!dist_esm.$L&&!0===nativeProp||!dist_esm.$L&&native.includes("mobile")||native.includes("android")&&"android"===dist.t4.OS||native.includes("ios")&&"ios"===dist.t4.OS,[button,setButton]=react.useState(null),composedRefs=(0,compose_refs.e)(forwardedRef,setButton),labelId=(0,Label.t0)(button),labelledBy=ariaLabelledby||labelId,hasConsumerStoppedPropagationRef=react.useRef(!1),isFormControl=!!dist_esm.$L&&(!button||!!button.closest("form")),[frameWidth,setFrameWidth]=react.useState(0),[checked=!1,setChecked]=(0,useControllableState.T)({prop:checkedProp,defaultProp:defaultChecked||!1,onChange:onCheckedChange,transition:!0});return shouldRenderMobileNative?(0,jsx_runtime.jsx)(dist.rs,{value:checkedProp,onValueChange:onCheckedChange,...nativeProps}):(dist_esm.$L||react.useEffect((()=>{if(props.id)return(0,registerFocusable.QS)(props.id,{focus:()=>{setChecked((x=>!x))}})}),[props.id,setChecked]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Frame,{tag:"button",unstyled,size,checked,disabled,frameWidth,themeShallow:!0,...!disableActiveTheme&&{theme:checked?"active":null,themeShallow:!0},role:"switch","aria-checked":checked,"aria-labelledby":labelledBy,"aria-required":required,"data-state":getState(checked),"data-disabled":disabled?"":void 0,tabIndex:disabled?void 0:0,value,...switchProps,ref:composedRefs,onPress:(0,esm.composeEventHandlers)(props.onPress,(event=>{setChecked((prevChecked=>!prevChecked)),dist_esm.$L&&isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())})),children:(0,jsx_runtime.jsx)(Stacks.FA,{alignSelf:"stretch",flex:1,onLayout:e=>{setFrameWidth(e.nativeEvent.layout.width)},children:"function"==typeof children?children(checked):children})}),dist_esm.$L&&isFormControl&&(0,jsx_runtime.jsx)(BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,style:{transform:"translateX(-100%)"}})]}))})),BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=react.useRef(null),prevChecked=(0,use_previous_dist_esm.D)(checked);return react.useEffect((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});setChecked.call(input,checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,jsx_runtime.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:checked,...inputProps,tabIndex:-1,ref,style:{...props.style,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function getState(checked){return checked?"checked":"unchecked"}return(0,withStaticProperties.$)(SwitchComponent,{Thumb:SwitchThumbComponent})}({Frame:SwitchFrame,Thumb:SwitchThumb})},"../../node_modules/@tamagui/use-previous/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>usePrevious});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js");function usePrevious(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value,previous:value});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"../../node_modules/@tamagui/visually-hidden/dist/esm/VisuallyHidden.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>VisuallyHidden});var _tamagui_web__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/views/Stack.js");const VisuallyHidden=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_0__.z)(_tamagui_web__WEBPACK_IMPORTED_MODULE_1__.K,{position:"absolute",width:1,height:1,margin:-1,zIndex:-1e4,overflow:"hidden",opacity:1e-8,pointerEvents:"none",variants:{preserveDimensions:{true:{position:"relative",width:"auto",height:"auto"}},visible:{true:{position:"relative",width:"auto",height:"auto",margin:0,zIndex:1,overflow:"visible",opacity:1,pointerEvents:"auto"}}}});VisuallyHidden.isVisuallyHidden=!0},"../../node_modules/tamagui/dist/esm/views/Spinner.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Spinner});var _tamagui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/themeable.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/hooks/useTheme.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/createVariable.js"),_tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/Stacks.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),react_native_web__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/react-native-web/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js");const Spinner=_tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__.FA.extractable((0,_tamagui_core__WEBPACK_IMPORTED_MODULE_3__.Y)(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>{const{size,color:colorProp,...stackProps}=props,theme=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_4__.Fg)();let color=colorProp;return color&&"$"===color[0]&&(color=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_5__.lk)(theme[color])),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__.FA,{ref,...stackProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_native_web__WEBPACK_IMPORTED_MODULE_6__.P2,{size,color})})})),{componentName:"Spinner"}))}}]);