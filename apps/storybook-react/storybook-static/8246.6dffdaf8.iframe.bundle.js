(self.webpackChunksb_react=self.webpackChunksb_react||[]).push([[8246],{"../../node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"../../node_modules/@tamagui/animate-presence/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("../../node_modules/@tamagui/use-presence/dist/esm/index.js");var _types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tamagui/animate-presence/dist/esm/types.js");__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_1__,"H1")&&__webpack_require__.d(__webpack_exports__,{H1:function(){return _types__WEBPACK_IMPORTED_MODULE_1__.H1}}),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_1__,"H2")&&__webpack_require__.d(__webpack_exports__,{H2:function(){return _types__WEBPACK_IMPORTED_MODULE_1__.H2}}),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_1__,"H3")&&__webpack_require__.d(__webpack_exports__,{H3:function(){return _types__WEBPACK_IMPORTED_MODULE_1__.H3}}),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_1__,"H4")&&__webpack_require__.d(__webpack_exports__,{H4:function(){return _types__WEBPACK_IMPORTED_MODULE_1__.H4}}),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_1__,"H5")&&__webpack_require__.d(__webpack_exports__,{H5:function(){return _types__WEBPACK_IMPORTED_MODULE_1__.H5}}),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_1__,"H6")&&__webpack_require__.d(__webpack_exports__,{H6:function(){return _types__WEBPACK_IMPORTED_MODULE_1__.H6}}),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_1__,"Paragraph")&&__webpack_require__.d(__webpack_exports__,{Paragraph:function(){return _types__WEBPACK_IMPORTED_MODULE_1__.Paragraph}}),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_1__,"Sheet")&&__webpack_require__.d(__webpack_exports__,{Sheet:function(){return _types__WEBPACK_IMPORTED_MODULE_1__.Sheet}}),__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_1__,"SizableText")&&__webpack_require__.d(__webpack_exports__,{SizableText:function(){return _types__WEBPACK_IMPORTED_MODULE_1__.SizableText}})},"../../node_modules/@tamagui/animate-presence/dist/esm/types.js":()=>{},"../../node_modules/@tamagui/focusable/dist/esm/registerFocusable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q8:()=>focusFocusable,QS:()=>registerFocusable});const registerFocusable=(id,input)=>()=>{},focusFocusable=id=>{}},"../../node_modules/@tamagui/get-button-sized/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>getButtonSized});var _tamagui_get_token__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@tamagui/get-token/dist/esm/index.js");const getButtonSized=(val,{tokens,props})=>{if(!val)return;if("number"==typeof val)return{paddingHorizontal:.25*val,height:val,borderRadius:props.circular?1e5:.2*val};const xSize=(0,_tamagui_get_token__WEBPACK_IMPORTED_MODULE_0__.Pj)(val),radiusToken=tokens.radius[val]??tokens.radius.$true;return{paddingHorizontal:xSize,height:val,borderRadius:props.circular?1e5:radiusToken}}},"../../node_modules/@tamagui/get-token/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Pj:()=>getSpace,ap:()=>getSize});var _tamagui_web__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/createVariable.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/config.js");const defaultOptions={shift:0,bounds:[0]},getSize=(size,options)=>getTokenRelative("size",size,options),getSpace=(space,options)=>getTokenRelative("space",space,options),cacheVariables={},cacheWholeVariables={},cacheKeys={},cacheWholeKeys={},getTokenRelative=(type,current,options=defaultOptions)=>{const tokens=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_0__.lz)({prefixed:!0})[type];if(!(type in cacheVariables)){cacheKeys[type]=[],cacheVariables[type]=[],cacheWholeKeys[type]=[],cacheWholeVariables[type]=[];const sorted=Object.keys(tokens).map((k=>tokens[k])).sort(((a,b)=>a.val-b.val));for(const token of sorted)cacheKeys[type].push(token.key),cacheVariables[type].push(token);const sortedExcludingHalfSteps=sorted.filter((x=>!x.key.endsWith(".5")));for(const token of sortedExcludingHalfSteps)cacheWholeKeys[type].push(token.key),cacheWholeVariables[type].push(token)}const isString="string"==typeof current,tokensOrdered=(options.excludeHalfSteps?isString?cacheWholeKeys:cacheWholeVariables:isString?cacheKeys:cacheVariables)[type],min=options.bounds?.[0]??0,max=options.bounds?.[1]??tokensOrdered.length-1,currentIndex=tokensOrdered.indexOf(current);let shift=options.shift||0;shift&&("$true"===current||(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_1__.cG)(current)&&"true"===current.name)&&(shift+=shift>0?1:-1);const found=tokensOrdered[Math.min(max,Math.max(min,currentIndex+shift))];return("string"==typeof found?tokens[found]:found)||tokens.$true}},"../../node_modules/@tamagui/label/dist/esm/Label.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{__:()=>Label,t0:()=>useLabelContext});var _tamagui_compose_refs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@tamagui/compose-refs/dist/esm/compose-refs.mjs"),_tamagui_create_context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tamagui/create-context/dist/esm/create-context.js"),_tamagui_focusable__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@tamagui/focusable/dist/esm/registerFocusable.js"),_tamagui_get_button_sized__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@tamagui/get-button-sized/dist/esm/index.js"),_tamagui_get_font_sized__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tamagui/get-font-sized/dist/esm/index.js"),_tamagui_text__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@tamagui/text/dist/esm/SizableText.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@tamagui/constants/dist/esm/index.js"),_tamagui_web__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/themeable.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js");const[LabelProvider,useLabelContextImpl]=(0,_tamagui_create_context__WEBPACK_IMPORTED_MODULE_4__.k)("Label",{id:void 0,controlRef:{current:null}}),LabelFrame=(0,_tamagui_web__WEBPACK_IMPORTED_MODULE_5__.z)(_tamagui_text__WEBPACK_IMPORTED_MODULE_6__.J,{name:"Label",tag:"label",variants:{unstyled:{false:{size:"$true",color:"$color",backgroundColor:"transparent",display:"flex",alignItems:"center",userSelect:"none",cursor:"default",pressStyle:{color:"$colorPress"}}},size:{"...size":(val,extras)=>{const buttonHeight=(0,_tamagui_get_button_sized__WEBPACK_IMPORTED_MODULE_0__.f)(val,extras)?.height;return{...(0,_tamagui_get_font_sized__WEBPACK_IMPORTED_MODULE_1__.H)(val,extras),lineHeight:buttonHeight?extras.tokens.size[buttonHeight]:void 0}}}},defaultVariants:{unstyled:"1"==={}.TAMAGUI_HEADLESS}}),LabelComponent=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(((props,forwardedRef)=>{const{htmlFor,id:idProp,...labelProps}=props,controlRef=react__WEBPACK_IMPORTED_MODULE_2__.useRef(null),ref=react__WEBPACK_IMPORTED_MODULE_2__.useRef(null),composedRefs=(0,_tamagui_compose_refs__WEBPACK_IMPORTED_MODULE_7__.e)(forwardedRef,ref),backupId=react__WEBPACK_IMPORTED_MODULE_2__.useId(),id=idProp??backupId;return _tamagui_web__WEBPACK_IMPORTED_MODULE_8__.$L&&react__WEBPACK_IMPORTED_MODULE_2__.useEffect((()=>{if(htmlFor){const element=document.getElementById(htmlFor);if(ref.current&&element){const getAriaLabel=()=>element.getAttribute("aria-labelledby"),ariaLabelledBy=[id,getAriaLabel()].filter(Boolean).join(" ");return element.setAttribute("aria-labelledby",ariaLabelledBy),controlRef.current=element,()=>{if(!id)return;const ariaLabelledBy2=getAriaLabel()?.replace(id,"");""===ariaLabelledBy2?element.removeAttribute("aria-labelledby"):ariaLabelledBy2&&element.setAttribute("aria-labelledby",ariaLabelledBy2)}}}}),[id,htmlFor]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(LabelProvider,{id,controlRef,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(LabelFrame,{id,htmlFor,...labelProps,ref:composedRefs,onMouseDown:event=>{props.onMouseDown?.(event),!event.defaultPrevented&&event.detail>1&&event.preventDefault()},onPress:event=>{if(props.onPress?.(event),_tamagui_web__WEBPACK_IMPORTED_MODULE_8__.$L){if(htmlFor||!controlRef.current||event.defaultPrevented)return;const isClickingControl=controlRef.current.contains(event.target),isUserClick=!0===event.isTrusted;!isClickingControl&&isUserClick&&(controlRef.current.click(),controlRef.current.focus())}else props.htmlFor&&(0,_tamagui_focusable__WEBPACK_IMPORTED_MODULE_9__.Q8)(props.htmlFor)}})})}));LabelComponent.displayName="Label";const Label=LabelFrame.extractable((0,_tamagui_web__WEBPACK_IMPORTED_MODULE_10__.Y)(LabelComponent),{neverFlatten:!0}),useLabelContext=element=>{const context=useLabelContextImpl("LabelConsumer"),{controlRef}=context;return react__WEBPACK_IMPORTED_MODULE_2__.useEffect((()=>{element&&(controlRef.current=element)}),[element,controlRef]),context.id}},"../../node_modules/@tamagui/sheet/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Sheet:()=>_Sheet__WEBPACK_IMPORTED_MODULE_0__.Sheet});var _Sheet__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@tamagui/sheet/dist/esm/Sheet.js");__webpack_require__.o(_Sheet__WEBPACK_IMPORTED_MODULE_0__,"H1")&&__webpack_require__.d(__webpack_exports__,{H1:function(){return _Sheet__WEBPACK_IMPORTED_MODULE_0__.H1}}),__webpack_require__.o(_Sheet__WEBPACK_IMPORTED_MODULE_0__,"H2")&&__webpack_require__.d(__webpack_exports__,{H2:function(){return _Sheet__WEBPACK_IMPORTED_MODULE_0__.H2}}),__webpack_require__.o(_Sheet__WEBPACK_IMPORTED_MODULE_0__,"H3")&&__webpack_require__.d(__webpack_exports__,{H3:function(){return _Sheet__WEBPACK_IMPORTED_MODULE_0__.H3}}),__webpack_require__.o(_Sheet__WEBPACK_IMPORTED_MODULE_0__,"H4")&&__webpack_require__.d(__webpack_exports__,{H4:function(){return _Sheet__WEBPACK_IMPORTED_MODULE_0__.H4}}),__webpack_require__.o(_Sheet__WEBPACK_IMPORTED_MODULE_0__,"H5")&&__webpack_require__.d(__webpack_exports__,{H5:function(){return _Sheet__WEBPACK_IMPORTED_MODULE_0__.H5}}),__webpack_require__.o(_Sheet__WEBPACK_IMPORTED_MODULE_0__,"H6")&&__webpack_require__.d(__webpack_exports__,{H6:function(){return _Sheet__WEBPACK_IMPORTED_MODULE_0__.H6}}),__webpack_require__.o(_Sheet__WEBPACK_IMPORTED_MODULE_0__,"Paragraph")&&__webpack_require__.d(__webpack_exports__,{Paragraph:function(){return _Sheet__WEBPACK_IMPORTED_MODULE_0__.Paragraph}}),__webpack_require__.o(_Sheet__WEBPACK_IMPORTED_MODULE_0__,"SizableText")&&__webpack_require__.d(__webpack_exports__,{SizableText:function(){return _Sheet__WEBPACK_IMPORTED_MODULE_0__.SizableText}})},"../../node_modules/@tamagui/text/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H1:()=>_Headings__WEBPACK_IMPORTED_MODULE_2__.H1,H2:()=>_Headings__WEBPACK_IMPORTED_MODULE_2__.H2,H3:()=>_Headings__WEBPACK_IMPORTED_MODULE_2__.H3,H4:()=>_Headings__WEBPACK_IMPORTED_MODULE_2__.H4,H5:()=>_Headings__WEBPACK_IMPORTED_MODULE_2__.H5,H6:()=>_Headings__WEBPACK_IMPORTED_MODULE_2__.H6,Paragraph:()=>_Paragraph__WEBPACK_IMPORTED_MODULE_1__.n,SizableText:()=>_SizableText__WEBPACK_IMPORTED_MODULE_0__.J});var _SizableText__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@tamagui/text/dist/esm/SizableText.js"),_Paragraph__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tamagui/text/dist/esm/Paragraph.js"),_Headings__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tamagui/text/dist/esm/Headings.js"),_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@tamagui/text/dist/esm/types.js");__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_3__,"Sheet")&&__webpack_require__.d(__webpack_exports__,{Sheet:function(){return _types__WEBPACK_IMPORTED_MODULE_3__.Sheet}})},"../../node_modules/@tamagui/text/dist/esm/types.js":()=>{},"../../node_modules/@tamagui/use-debounce/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("../../node_modules/next/dist/compiled/react/index.js")},"../../node_modules/@tamagui/use-window-dimensions/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("../../node_modules/@tamagui/constants/dist/esm/index.js"),__webpack_require__("../../node_modules/next/dist/compiled/react/index.js");var react_native_web__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react-native-web/dist/index.js");react_native_web__WEBPACK_IMPORTED_MODULE_2__.Db.addEventListener("change",(()=>{cbs.forEach((cb=>cb(window)))}));const cbs=new Set},"../../node_modules/tamagui/dist/esm/helpers/inputHelpers.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>textAreaSizeVariant,y:()=>inputSizeVariant});var _tamagui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@tamagui/constants/dist/esm/index.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/createVariable.js"),_tamagui_get_button_sized__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@tamagui/get-button-sized/dist/esm/index.js"),_tamagui_get_font_sized__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tamagui/get-font-sized/dist/esm/index.js"),_tamagui_get_token__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tamagui/get-token/dist/esm/index.js");const inputSizeVariant=(val="$true",extras)=>{if(extras.props.multiline||extras.props.numberOfLines>1)return textAreaSizeVariant(val,extras);const buttonStyles=(0,_tamagui_get_button_sized__WEBPACK_IMPORTED_MODULE_0__.f)(val,extras),paddingHorizontal=(0,_tamagui_get_token__WEBPACK_IMPORTED_MODULE_2__.Pj)(val,{shift:-1,bounds:[2]}),fontStyle=(0,_tamagui_get_font_sized__WEBPACK_IMPORTED_MODULE_1__.H)(val,extras);return!_tamagui_core__WEBPACK_IMPORTED_MODULE_3__.$L&&fontStyle&&delete fontStyle.lineHeight,{...fontStyle,...buttonStyles,paddingHorizontal}},textAreaSizeVariant=(val="$true",extras)=>{const{props}=extras,buttonStyles=(0,_tamagui_get_button_sized__WEBPACK_IMPORTED_MODULE_0__.f)(val,extras),fontStyle=(0,_tamagui_get_font_sized__WEBPACK_IMPORTED_MODULE_1__.H)(val,extras),lines=props.rows??props.numberOfLines,height="number"==typeof lines?lines*(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_4__.Ve)(fontStyle.lineHeight):"auto",paddingVertical=(0,_tamagui_get_token__WEBPACK_IMPORTED_MODULE_2__.Pj)(val,{shift:-2,bounds:[2]}),paddingHorizontal=(0,_tamagui_get_token__WEBPACK_IMPORTED_MODULE_2__.Pj)(val,{shift:-1,bounds:[2]});return{...buttonStyles,...fontStyle,paddingVertical,paddingHorizontal,height}}},"../../node_modules/tamagui/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H1:()=>_tamagui_text__WEBPACK_IMPORTED_MODULE_6__.H1,H2:()=>_tamagui_text__WEBPACK_IMPORTED_MODULE_6__.H2,H3:()=>_tamagui_text__WEBPACK_IMPORTED_MODULE_6__.H3,H4:()=>_tamagui_text__WEBPACK_IMPORTED_MODULE_6__.H4,H5:()=>_tamagui_text__WEBPACK_IMPORTED_MODULE_6__.H5,H6:()=>_tamagui_text__WEBPACK_IMPORTED_MODULE_6__.H6,Paragraph:()=>_tamagui_text__WEBPACK_IMPORTED_MODULE_6__.Paragraph,SizableText:()=>_tamagui_text__WEBPACK_IMPORTED_MODULE_6__.SizableText});__webpack_require__("../../node_modules/tamagui/dist/esm/setup.js"),__webpack_require__("../../node_modules/@tamagui/adapt/dist/esm/index.js");var _tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@tamagui/animate-presence/dist/esm/index.js");__webpack_require__.o(_tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__,"H1")&&__webpack_require__.d(__webpack_exports__,{H1:function(){return _tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__.H1}}),__webpack_require__.o(_tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__,"H2")&&__webpack_require__.d(__webpack_exports__,{H2:function(){return _tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__.H2}}),__webpack_require__.o(_tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__,"H3")&&__webpack_require__.d(__webpack_exports__,{H3:function(){return _tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__.H3}}),__webpack_require__.o(_tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__,"H4")&&__webpack_require__.d(__webpack_exports__,{H4:function(){return _tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__.H4}}),__webpack_require__.o(_tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__,"H5")&&__webpack_require__.d(__webpack_exports__,{H5:function(){return _tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__.H5}}),__webpack_require__.o(_tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__,"H6")&&__webpack_require__.d(__webpack_exports__,{H6:function(){return _tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__.H6}}),__webpack_require__.o(_tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__,"Paragraph")&&__webpack_require__.d(__webpack_exports__,{Paragraph:function(){return _tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__.Paragraph}}),__webpack_require__.o(_tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__,"Sheet")&&__webpack_require__.d(__webpack_exports__,{Sheet:function(){return _tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__.Sheet}}),__webpack_require__.o(_tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__,"SizableText")&&__webpack_require__.d(__webpack_exports__,{SizableText:function(){return _tamagui_animate_presence__WEBPACK_IMPORTED_MODULE_2__.SizableText}});var _tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@tamagui/helpers-tamagui/dist/esm/index.js");__webpack_require__.o(_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__,"H1")&&__webpack_require__.d(__webpack_exports__,{H1:function(){return _tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__.H1}}),__webpack_require__.o(_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__,"H2")&&__webpack_require__.d(__webpack_exports__,{H2:function(){return _tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__.H2}}),__webpack_require__.o(_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__,"H3")&&__webpack_require__.d(__webpack_exports__,{H3:function(){return _tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__.H3}}),__webpack_require__.o(_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__,"H4")&&__webpack_require__.d(__webpack_exports__,{H4:function(){return _tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__.H4}}),__webpack_require__.o(_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__,"H5")&&__webpack_require__.d(__webpack_exports__,{H5:function(){return _tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__.H5}}),__webpack_require__.o(_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__,"H6")&&__webpack_require__.d(__webpack_exports__,{H6:function(){return _tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__.H6}}),__webpack_require__.o(_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__,"Paragraph")&&__webpack_require__.d(__webpack_exports__,{Paragraph:function(){return _tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__.Paragraph}}),__webpack_require__.o(_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__,"Sheet")&&__webpack_require__.d(__webpack_exports__,{Sheet:function(){return _tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__.Sheet}}),__webpack_require__.o(_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__,"SizableText")&&__webpack_require__.d(__webpack_exports__,{SizableText:function(){return _tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__.SizableText}});var _tamagui_portal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tamagui/portal/dist/esm/index.js");__webpack_require__.o(_tamagui_portal__WEBPACK_IMPORTED_MODULE_4__,"H1")&&__webpack_require__.d(__webpack_exports__,{H1:function(){return _tamagui_portal__WEBPACK_IMPORTED_MODULE_4__.H1}}),__webpack_require__.o(_tamagui_portal__WEBPACK_IMPORTED_MODULE_4__,"H2")&&__webpack_require__.d(__webpack_exports__,{H2:function(){return _tamagui_portal__WEBPACK_IMPORTED_MODULE_4__.H2}}),__webpack_require__.o(_tamagui_portal__WEBPACK_IMPORTED_MODULE_4__,"H3")&&__webpack_require__.d(__webpack_exports__,{H3:function(){return _tamagui_portal__WEBPACK_IMPORTED_MODULE_4__.H3}}),__webpack_require__.o(_tamagui_portal__WEBPACK_IMPORTED_MODULE_4__,"H4")&&__webpack_require__.d(__webpack_exports__,{H4:function(){return _tamagui_portal__WEBPACK_IMPORTED_MODULE_4__.H4}}),__webpack_require__.o(_tamagui_portal__WEBPACK_IMPORTED_MODULE_4__,"H5")&&__webpack_require__.d(__webpack_exports__,{H5:function(){return _tamagui_portal__WEBPACK_IMPORTED_MODULE_4__.H5}}),__webpack_require__.o(_tamagui_portal__WEBPACK_IMPORTED_MODULE_4__,"H6")&&__webpack_require__.d(__webpack_exports__,{H6:function(){return _tamagui_portal__WEBPACK_IMPORTED_MODULE_4__.H6}}),__webpack_require__.o(_tamagui_portal__WEBPACK_IMPORTED_MODULE_4__,"Paragraph")&&__webpack_require__.d(__webpack_exports__,{Paragraph:function(){return _tamagui_portal__WEBPACK_IMPORTED_MODULE_4__.Paragraph}}),__webpack_require__.o(_tamagui_portal__WEBPACK_IMPORTED_MODULE_4__,"Sheet")&&__webpack_require__.d(__webpack_exports__,{Sheet:function(){return _tamagui_portal__WEBPACK_IMPORTED_MODULE_4__.Sheet}}),__webpack_require__.o(_tamagui_portal__WEBPACK_IMPORTED_MODULE_4__,"SizableText")&&__webpack_require__.d(__webpack_exports__,{SizableText:function(){return _tamagui_portal__WEBPACK_IMPORTED_MODULE_4__.SizableText}});var _tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@tamagui/sheet/dist/esm/index.js");__webpack_require__.o(_tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__,"H1")&&__webpack_require__.d(__webpack_exports__,{H1:function(){return _tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__.H1}}),__webpack_require__.o(_tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__,"H2")&&__webpack_require__.d(__webpack_exports__,{H2:function(){return _tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__.H2}}),__webpack_require__.o(_tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__,"H3")&&__webpack_require__.d(__webpack_exports__,{H3:function(){return _tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__.H3}}),__webpack_require__.o(_tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__,"H4")&&__webpack_require__.d(__webpack_exports__,{H4:function(){return _tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__.H4}}),__webpack_require__.o(_tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__,"H5")&&__webpack_require__.d(__webpack_exports__,{H5:function(){return _tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__.H5}}),__webpack_require__.o(_tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__,"H6")&&__webpack_require__.d(__webpack_exports__,{H6:function(){return _tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__.H6}}),__webpack_require__.o(_tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__,"Paragraph")&&__webpack_require__.d(__webpack_exports__,{Paragraph:function(){return _tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__.Paragraph}}),__webpack_require__.o(_tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__,"Sheet")&&__webpack_require__.d(__webpack_exports__,{Sheet:function(){return _tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__.Sheet}}),__webpack_require__.o(_tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__,"SizableText")&&__webpack_require__.d(__webpack_exports__,{SizableText:function(){return _tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__.SizableText}});var _tamagui_text__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@tamagui/text/dist/esm/index.js");__webpack_require__.o(_tamagui_text__WEBPACK_IMPORTED_MODULE_6__,"Sheet")&&__webpack_require__.d(__webpack_exports__,{Sheet:function(){return _tamagui_text__WEBPACK_IMPORTED_MODULE_6__.Sheet}});__webpack_require__("../../node_modules/@tamagui/use-debounce/dist/esm/index.js"),__webpack_require__("../../node_modules/@tamagui/use-force-update/dist/esm/index.js"),__webpack_require__("../../node_modules/@tamagui/use-window-dimensions/dist/esm/index.js");var _viewTypes__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../node_modules/tamagui/dist/esm/viewTypes.js");__webpack_require__.o(_viewTypes__WEBPACK_IMPORTED_MODULE_10__,"Sheet")&&__webpack_require__.d(__webpack_exports__,{Sheet:function(){return _viewTypes__WEBPACK_IMPORTED_MODULE_10__.Sheet}})},"../../node_modules/tamagui/dist/esm/setup.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("../../node_modules/@tamagui/polyfill-dev/index.js");var react__WEBPACK_IMPORTED_MODULE_1___namespace_cache,react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js");globalThis.React||=react__WEBPACK_IMPORTED_MODULE_1___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_1___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_1__,2)),typeof requestAnimationFrame>"u"&&(globalThis.requestAnimationFrame=setImmediate)},"../../node_modules/tamagui/dist/esm/viewTypes.js":()=>{},"../../node_modules/tamagui/dist/esm/views/Input.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{II:()=>Input,z5:()=>InputFrame,jF:()=>defaultStyles,kp:()=>useInputProps});var esm=__webpack_require__("../../node_modules/@tamagui/constants/dist/esm/index.js"),styled=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),useTheme=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/hooks/useTheme.js"),compose_refs=__webpack_require__("../../node_modules/@tamagui/compose-refs/dist/esm/compose-refs.mjs"),dist_esm=__webpack_require__("../../node_modules/@tamagui/use-event/dist/esm/index.js"),react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),registerFocusable=__webpack_require__("../../node_modules/@tamagui/focusable/dist/esm/registerFocusable.js"),jsx_runtime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js");function useFocusable({isInput,props,ref}){const{id,onChangeText,value,defaultValue}=props,inputValue=(0,react.useRef)(value||defaultValue||""),unregisterFocusable=(0,react.useRef)(),inputRef=(0,react.useCallback)((input=>{id&&input&&(unregisterFocusable.current?.(),unregisterFocusable.current=(0,registerFocusable.QS)(id,{focus:input.focus,...isInput&&{focusAndSelect(){input.focus(),input.setSelection&&"string"==typeof inputValue.current&&input.setSelection(0,inputValue.current.length)}}}))}),[isInput,id]),combinedRefs=(0,compose_refs.F)(ref,inputRef);return(0,react.useEffect)((()=>()=>{unregisterFocusable.current?.()}),[]),{ref:combinedRefs,onChangeText:(0,dist_esm.z)((value2=>{inputValue.current=value2,onChangeText?.(value2)}))}}var dist=__webpack_require__("../../node_modules/react-native-web/dist/index.js"),inputHelpers=__webpack_require__("../../node_modules/tamagui/dist/esm/helpers/inputHelpers.js");const defaultStyles={size:"$true",fontFamily:"$body",borderWidth:1,outlineWidth:0,color:"$color",...esm.$L?{tabIndex:0}:{focusable:!0},borderColor:"$borderColor",backgroundColor:"$background",minWidth:0,hoverStyle:{borderColor:"$borderColorHover"},focusStyle:{outlineColor:"$borderColorFocus",outlineWidth:2,outlineStyle:"solid",borderColor:"$borderColorFocus"}},InputFrame=(0,styled.z)(dist.oi,{name:"Input",variants:{unstyled:{false:defaultStyles},size:{"...size":inputHelpers.y}},defaultVariants:{unstyled:"1"==={}.TAMAGUI_HEADLESS}}),Input=InputFrame.styleable(((propsIn,ref)=>{const props=useInputProps(propsIn,ref);return(0,jsx_runtime.jsx)(InputFrame,{...props})}));function useInputProps(props,ref){const theme=(0,useTheme.Fg)(),{onChangeText,ref:combinedRef}=useFocusable({props,ref,isInput:!0}),placeholderColorProp=props.placeholderTextColor,placeholderTextColor=theme[placeholderColorProp]?.get()??placeholderColorProp??theme.placeholderColor?.get();return{ref:combinedRef,editable:!props.disabled,...props,placeholderTextColor,onChangeText}}},"../../node_modules/tamagui/dist/esm/views/TextArea.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>TextArea});var _tamagui_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),_tamagui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@tamagui/constants/dist/esm/index.js"),_helpers_inputHelpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/tamagui/dist/esm/helpers/inputHelpers.js"),_Input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/tamagui/dist/esm/views/Input.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js");const TextAreaFrame=(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_1__.z)(_Input__WEBPACK_IMPORTED_MODULE_2__.z5,{name:"TextArea",multiline:!0,whiteSpace:"pre-wrap",variants:{unstyled:{false:{height:"auto",..._Input__WEBPACK_IMPORTED_MODULE_2__.jF}},size:{"...size":_helpers_inputHelpers__WEBPACK_IMPORTED_MODULE_3__.G}},defaultVariants:{unstyled:"1"==={}.TAMAGUI_HEADLESS}}),TextArea=TextAreaFrame.styleable(((propsIn,ref)=>{const props=(0,_Input__WEBPACK_IMPORTED_MODULE_2__.kp)(propsIn,ref),linesProp={[_tamagui_core__WEBPACK_IMPORTED_MODULE_4__.$L?"rows":"numberOfLines"]:propsIn.unstyled?void 0:4};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextAreaFrame,{...linesProp,...props})}))}}]);