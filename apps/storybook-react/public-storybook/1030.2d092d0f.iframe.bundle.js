/*! For license information please see 1030.2d092d0f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksb_react=self.webpackChunksb_react||[]).push([[1030],{"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>_asyncToGenerator})},"../../node_modules/@babel/runtime/helpers/regeneratorRuntime.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _typeof=__webpack_require__("../../node_modules/@babel/runtime/helpers/typeof.js").default;function _regeneratorRuntime(){"use strict";module.exports=_regeneratorRuntime=function _regeneratorRuntime(){return exports},module.exports.__esModule=!0,module.exports.default=module.exports;var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}module.exports=_regeneratorRuntime,module.exports.__esModule=!0,module.exports.default=module.exports},"../../node_modules/@babel/runtime/regenerator/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var runtime=__webpack_require__("../../node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();module.exports=runtime;try{regeneratorRuntime=runtime}catch(accidentalStrictMode){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}},"../../node_modules/@radix-ui/react-use-previous/dist/index.module.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>$010c2913dbd2fe3d$export$5cae361ad82dce8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value,previous:value});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs");__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"../../node_modules/@tamagui/card/dist/esm/Card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Zb:()=>Card});var _tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/createStyledContext.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/withStaticProperties.js");const CardContext=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_0__.i)({size:"$true"}),CardFrame=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_1__.z)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__.K,{name:"Card",context:CardContext,variants:{unstyled:{false:{size:"$true",backgroundColor:"$background",position:"relative"}},size:{"...size":(val,{tokens})=>({borderRadius:tokens.radius[val]??val})}},defaultVariants:{unstyled:!1}}),CardHeader=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_1__.z)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__.K,{name:"CardHeader",context:CardContext,variants:{unstyled:{false:{zIndex:10,backgroundColor:"transparent",marginBottom:"auto"}},size:{"...size":(val,{tokens})=>({padding:tokens.space[val]??val})}},defaultVariants:{unstyled:!1}}),CardFooter=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_1__.z)(CardHeader,{name:"CardFooter",variants:{unstyled:{false:{zIndex:5,flexDirection:"row",marginTop:"auto",marginBottom:0}}},defaultVariants:{unstyled:!1}}),CardBackground=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_1__.z)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__.K,{name:"CardBackground",variants:{unstyled:{false:{zIndex:0,fullscreen:!0,overflow:"hidden",pointerEvents:"none",padding:0}}},defaultVariants:{unstyled:!1}}),Card=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_3__.$)(CardFrame,{Header:CardHeader,Footer:CardFooter,Background:CardBackground})},"../../node_modules/@tamagui/checkbox/dist/esm/Checkbox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XZ:()=>Checkbox2});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@radix-ui/react-use-previous/dist/index.module.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/createStyledContext.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/hooks/useTheme.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/createVariable.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/@tamagui/compose-refs/dist/esm/compose-refs.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/hooks/useProps.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../node_modules/@tamagui/constants/dist/esm/index.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/index.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/withStaticProperties.js"),_tamagui_create_context__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/@tamagui/create-context/dist/esm/create-context.js"),_tamagui_font_size__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@tamagui/font-size/dist/esm/getFontSize.js"),_tamagui_get_token__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tamagui/get-token/dist/esm/index.js"),_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tamagui/helpers-tamagui/dist/esm/index.js"),_tamagui_label__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../node_modules/@tamagui/label/dist/esm/Label.js"),_tamagui_stacks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js"),_tamagui_use_controllable_state__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/index.js");const CheckboxStyledContext=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_4__.i)({size:"$true",scaleIcon:1});function isIndeterminate(checked){return"indeterminate"===checked}function getState(checked){return isIndeterminate(checked)?"indeterminate":checked?"checked":"unchecked"}const BubbleInput=props=>{const{checked,bubbles=!0,control,isHidden,...inputProps}=props,ref=react__WEBPACK_IMPORTED_MODULE_3__.useRef(null),prevChecked=(0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_5__.D)(checked);return react__WEBPACK_IMPORTED_MODULE_3__.useEffect((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});input.indeterminate=isIndeterminate(checked),setChecked.call(input,!isIndeterminate(checked)&&checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"checkbox",defaultChecked:!isIndeterminate(checked)&&checked,...inputProps,tabIndex:-1,ref,"aria-hidden":isHidden,style:{...isHidden?{position:"absolute",pointerEvents:"none",opacity:0,margin:0}:{appearance:"auto",accentColor:"var(--color6)"},...props.style}})},CheckboxIndicatorFrame=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_6__.z)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_7__.K,{name:"CheckboxIndicator",context:CheckboxStyledContext}),CheckboxIndicator=CheckboxIndicatorFrame.extractable(react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(((props,forwardedRef)=>{const{__scopeCheckbox,children:childrenProp,forceMount,disablePassStyles,...indicatorProps}=props,context=useCheckboxContext("CheckboxIndicator",__scopeCheckbox),styledContext=react__WEBPACK_IMPORTED_MODULE_3__.useContext(CheckboxStyledContext),iconSize=("number"==typeof styledContext.size?.65*styledContext.size:(0,_tamagui_font_size__WEBPACK_IMPORTED_MODULE_8__.yv)(styledContext.size))*styledContext.scaleIcon,theme=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_9__.Fg)(),getThemedIcon=(0,_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_2__.useGetThemedIcon)({size:iconSize,color:theme.color}),children=react__WEBPACK_IMPORTED_MODULE_3__.Children.toArray(childrenProp).map((child=>disablePassStyles||!react__WEBPACK_IMPORTED_MODULE_3__.isValidElement(child)?child:getThemedIcon(child)));return forceMount||isIndeterminate(context.state)||!0===context.state?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CheckboxIndicatorFrame,{"data-state":getState(context.state),"data-disabled":context.disabled?"":void 0,pointerEvents:"none",...indicatorProps,ref:forwardedRef,children}):null})));CheckboxIndicator.displayName="CheckboxIndicator";const CheckboxFrame=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_6__.z)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_7__.K,{name:"Checkbox",tag:"button",context:CheckboxStyledContext,variants:{unstyled:{false:{size:"$true",backgroundColor:"$background",alignItems:"center",justifyContent:"center",pressTheme:!0,focusable:!0,borderWidth:1,borderColor:"$borderColor",hoverStyle:{borderColor:"$borderColorHover"},focusStyle:{borderColor:"$borderColorFocus"}}},size:{"...size":(val,{tokens})=>({borderRadius:(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_10__.Ve)((0,_tamagui_get_token__WEBPACK_IMPORTED_MODULE_1__.ap)(val))/8})}},defaultVariants:{unstyled:!1}}),[createCheckboxContext,createCheckboxScope]=(0,_tamagui_create_context__WEBPACK_IMPORTED_MODULE_11__.b)("Checkbox"),[CheckboxProvider,useCheckboxContext]=createCheckboxContext("Checkbox"),CheckboxComponent=CheckboxFrame.extractable(react__WEBPACK_IMPORTED_MODULE_3__.forwardRef((function Checkbox(props,forwardedRef){const{__scopeCheckbox,labelledBy:ariaLabelledby,name,checked:checkedProp,defaultChecked,required,scaleSize=.45,sizeAdjust=0,disabled,value="on",onCheckedChange,native,scaleIcon,...checkboxProps}=props,[button,setButton]=react__WEBPACK_IMPORTED_MODULE_3__.useState(null),composedRefs=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_12__.e)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=react__WEBPACK_IMPORTED_MODULE_3__.useRef(!1),propsActive=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_13__.w)(props),isFormControl=!!_tamagui_core__WEBPACK_IMPORTED_MODULE_14__.$L&&(!button||Boolean(button.closest("form"))),[checked=!1,setChecked]=(0,_tamagui_use_controllable_state__WEBPACK_IMPORTED_MODULE_15__.T)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange}),styledContext=react__WEBPACK_IMPORTED_MODULE_3__.useContext(CheckboxStyledContext),adjustedSize=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_10__.Ve)((0,_tamagui_get_token__WEBPACK_IMPORTED_MODULE_1__.ap)(propsActive.size??(null==styledContext?void 0:styledContext.size)??"$true",{shift:sizeAdjust})),size=scaleSize?Math.round(adjustedSize*scaleSize):adjustedSize,labelId=(0,_tamagui_label__WEBPACK_IMPORTED_MODULE_16__.t0)(button),labelledBy=ariaLabelledby||labelId;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CheckboxProvider,{scope:__scopeCheckbox,state:checked,disabled,children:_tamagui_core__WEBPACK_IMPORTED_MODULE_14__.$L&&native?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,id:props.id}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CheckboxFrame,{width:size,height:size,tag:"button",role:"checkbox","aria-labelledby":labelledBy,"aria-checked":isIndeterminate(checked)?"mixed":checked,"aria-required":required,"data-state":getState(checked),"data-disabled":disabled?"":void 0,disabled,...checkboxProps,ref:composedRefs,..._tamagui_core__WEBPACK_IMPORTED_MODULE_14__.$L&&{type:"button",value,onKeyDown:(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_17__.composeEventHandlers)(props.onKeyDown,(event=>{"Enter"===event.key&&event.preventDefault()}))},onPress:(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_17__.composeEventHandlers)(props.onPress,(event=>{setChecked((prevChecked=>!!isIndeterminate(prevChecked)||!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())})),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CheckboxStyledContext.Provider,{size:propsActive.size??(null==styledContext?void 0:styledContext.size)??"$true",scaleIcon:scaleIcon??(null==styledContext?void 0:styledContext.scaleIcon)??1,children:propsActive.children})}),_tamagui_core__WEBPACK_IMPORTED_MODULE_14__.$L&&isFormControl?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BubbleInput,{isHidden:!0,control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled}):null]})})}))),Checkbox2=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_18__.$)(CheckboxComponent,{Indicator:CheckboxIndicator,Props:CheckboxStyledContext.Provider})},"../../node_modules/@tamagui/form/dist/esm/Form.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l0:()=>Form});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@tamagui/core/dist/esm/index.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/index.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/withStaticProperties.js"),_tamagui_create_context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tamagui/create-context/dist/esm/create-context.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js");const FormFrame=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_2__.z)(_tamagui_core__WEBPACK_IMPORTED_MODULE_3__.Stack,{name:"Form",tag:"form"}),[createFormContext]=(0,_tamagui_create_context__WEBPACK_IMPORTED_MODULE_4__.b)("Form"),[FormProvider,useFormContext]=createFormContext("Form"),FormTriggerFrame=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_2__.z)(_tamagui_core__WEBPACK_IMPORTED_MODULE_3__.Stack,{name:"FormTrigger"}),FormTrigger=FormTriggerFrame.styleable(((props,forwardedRef)=>{const{__scopeForm,children,...triggerProps}=props,context=useFormContext("FormTrigger",__scopeForm);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FormTriggerFrame,{tag:"button",...triggerProps,children:triggerProps.asChild?(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children,{disabled:triggerProps.disabled}):children,ref:forwardedRef,onPress:(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_5__.composeEventHandlers)(props.onPress,context.onSubmit)})}));const Form=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_6__.$)(FormFrame.extractable((function FormComponent({onSubmit,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FormProvider,{scope:props.__scopeForm,onSubmit,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FormFrame,{...props,onSubmit:e=>e.preventDefault()})})})),{Trigger:FormTrigger})},"../../node_modules/@tamagui/image/dist/esm/Image.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Image});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/setupReactNative.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/hooks/useProps.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@tamagui/constants/dist/esm/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),react_native__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react-native-web/dist/index.js");(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_2__.G)({Image:react_native__WEBPACK_IMPORTED_MODULE_3__.Ee});const StyledImage=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_4__.z)(react_native__WEBPACK_IMPORTED_MODULE_3__.Ee,{name:"Image",position:"relative",source:{uri:""}});const Image=StyledImage.extractable((0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(((inProps,ref)=>{const props=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_5__.w)(inProps),{src,source,...rest}=props;const finalSource="string"==typeof src?{uri:src,..._tamagui_core__WEBPACK_IMPORTED_MODULE_6__.$L&&{width:props.width,height:props.height}}:source??src;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledImage,{ref,source:finalSource,...rest})})));Image.getSize=react_native__WEBPACK_IMPORTED_MODULE_3__.Ee.getSize,Image.getSizeWithHeaders=react_native__WEBPACK_IMPORTED_MODULE_3__.Ee.getSizeWithHeaders,Image.prefetch=react_native__WEBPACK_IMPORTED_MODULE_3__.Ee.prefetch,Image.prefetchWithMetadata=react_native__WEBPACK_IMPORTED_MODULE_3__.Ee.prefetchWithMetadata,Image.abortPrefetch=react_native__WEBPACK_IMPORTED_MODULE_3__.Ee.abortPrefetch,Image.queryCache=react_native__WEBPACK_IMPORTED_MODULE_3__.Ee.queryCache},"../../node_modules/@tamagui/switch/dist/esm/Switch.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{rs:()=>Switch});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../node_modules/@radix-ui/react-use-previous/dist/index.module.js"),_tamagui_compose_refs__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/@tamagui/compose-refs/dist/esm/compose-refs.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/createVariable.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@tamagui/constants/dist/esm/index.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/withStaticProperties.js"),_tamagui_create_context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tamagui/create-context/dist/esm/create-context.js"),_tamagui_focusable__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../node_modules/@tamagui/focusable/dist/esm/registerFocusable.js"),_tamagui_get_token__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tamagui/get-token/dist/esm/index.js"),_tamagui_label__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../node_modules/@tamagui/label/dist/esm/Label.js"),_tamagui_stacks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js"),_tamagui_stacks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/Stacks.js"),_tamagui_use_controllable_state__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),react_native__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/react-native-web/dist/index.js");const getSwitchHeight=val=>Math.round(.65*(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_3__.Ve)((0,_tamagui_get_token__WEBPACK_IMPORTED_MODULE_1__.ap)(val))),getSwitchWidth=val=>2*getSwitchHeight(val),scopeContexts=(0,_tamagui_create_context__WEBPACK_IMPORTED_MODULE_4__.b)("Switch"),[createSwitchContext]=scopeContexts,[SwitchProvider,useSwitchContext]=(scopeContexts[1],createSwitchContext("Switch")),SwitchThumbFrame=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_5__.z)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_6__.K,{name:"SwitchThumb",variants:{unstyled:{false:{size:"$true",backgroundColor:"$background",borderRadius:1e3}},size:{"...size":val=>{const size=getSwitchHeight(val);return{height:size,width:size}}}},defaultVariants:{unstyled:!1}}),SwitchThumb=SwitchThumbFrame.extractable(react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function SwitchThumb2(props,forwardedRef){const{__scopeSwitch,size:sizeProp,...thumbProps}=props,{size:sizeContext,disabled,checked,unstyled}=useSwitchContext("SwitchThumb",__scopeSwitch),size=sizeProp??sizeContext;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SwitchThumbFrame,{unstyled,theme:checked?"active":null,size,"data-state":getState(checked),"data-disabled":disabled?"":void 0,...thumbProps,x:checked?(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_3__.Ve)(getSwitchWidth(size))-(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_3__.Ve)(getSwitchHeight(size)):0,ref:forwardedRef})}))),SwitchFrame=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_5__.z)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_7__.sL,{name:"Switch",tag:"button",variants:{unstyled:{false:{size:"$true",borderRadius:1e3,borderWidth:2,borderColor:"transparent",backgroundColor:"$background",focusStyle:{borderColor:"$borderColorFocus",outlineColor:"$borderColorFocus",outlineStyle:"solid",outlineWidth:1}}},size:{"...size":val=>{const height=getSwitchHeight(val)+4;return{height,minHeight:height,width:getSwitchWidth(val)+4}}}},defaultVariants:{unstyled:!1}}),SwitchComponent=SwitchFrame.extractable(react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(((props,forwardedRef)=>{const{__scopeSwitch,labeledBy:ariaLabelledby,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,size="$true",unstyled=!1,native:nativeProp,nativeProps,...switchProps}=props,native=Array.isArray(nativeProp)?nativeProp:[nativeProp];if(!_tamagui_core__WEBPACK_IMPORTED_MODULE_8__.$L&&!0===nativeProp||!_tamagui_core__WEBPACK_IMPORTED_MODULE_8__.$L&&native.includes("mobile")||native.includes("android")&&"android"===react_native__WEBPACK_IMPORTED_MODULE_9__.t4.OS||native.includes("ios")&&"ios"===react_native__WEBPACK_IMPORTED_MODULE_9__.t4.OS)return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_native__WEBPACK_IMPORTED_MODULE_9__.rs,{value:checkedProp,onValueChange:onCheckedChange,...nativeProps});const[button,setButton]=react__WEBPACK_IMPORTED_MODULE_2__.useState(null),composedRefs=(0,_tamagui_compose_refs__WEBPACK_IMPORTED_MODULE_10__.e)(forwardedRef,(node=>setButton(node))),labelId=(0,_tamagui_label__WEBPACK_IMPORTED_MODULE_11__.t0)(button),labelledBy=ariaLabelledby||labelId,hasConsumerStoppedPropagationRef=react__WEBPACK_IMPORTED_MODULE_2__.useRef(!1),isFormControl=!!_tamagui_core__WEBPACK_IMPORTED_MODULE_8__.$L&&(!button||Boolean(button.closest("form"))),[checked=!1,setChecked]=(0,_tamagui_use_controllable_state__WEBPACK_IMPORTED_MODULE_12__.T)({prop:checkedProp,defaultProp:defaultChecked||!1,onChange:onCheckedChange,transition:!0});return _tamagui_core__WEBPACK_IMPORTED_MODULE_8__.$L||react__WEBPACK_IMPORTED_MODULE_2__.useEffect((()=>{if(props.id)return(0,_tamagui_focusable__WEBPACK_IMPORTED_MODULE_13__.QS)(props.id,{focus:()=>{setChecked((x=>!x))}})}),[props.id,setChecked]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SwitchProvider,{scope:__scopeSwitch,checked,disabled,size,unstyled,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SwitchFrame,{unstyled,size,theme:checked?"active":null,role:"switch","aria-checked":checked,"aria-labelledby":labelledBy,"aria-required":required,"data-state":getState(checked),"data-disabled":disabled?"":void 0,disabled,tabIndex:disabled?void 0:0,value,...switchProps,ref:composedRefs,onPress:event=>{var _a;null==(_a=props.onPress)||_a.call(props,event),setChecked((prevChecked=>!prevChecked)),_tamagui_core__WEBPACK_IMPORTED_MODULE_8__.$L&&isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}}),_tamagui_core__WEBPACK_IMPORTED_MODULE_8__.$L&&isFormControl&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,style:{transform:"translateX(-100%)"}})]})}))),Switch=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_14__.$)(SwitchComponent,{Thumb:SwitchThumb}),BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=react__WEBPACK_IMPORTED_MODULE_2__.useRef(null),prevChecked=(0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_15__.D)(checked);return react__WEBPACK_IMPORTED_MODULE_2__.useEffect((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});setChecked.call(input,checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:checked,...inputProps,tabIndex:-1,ref,style:{...props.style,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function getState(checked){return checked?"checked":"unchecked"}}}]);