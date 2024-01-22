"use strict";(self.webpackChunksb_react=self.webpackChunksb_react||[]).push([[2308],{"../../node_modules/@tamagui/popover/dist/esm/Popover.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J2:()=>Popover});__webpack_require__("../../node_modules/@tamagui/polyfill-dev/index.js");var esm=__webpack_require__("../../node_modules/@tamagui/adapt/dist/esm/index.js"),PresenceChild=__webpack_require__("../../node_modules/@tamagui/animate-presence/dist/esm/PresenceChild.js"),AnimatePresence=__webpack_require__("../../node_modules/@tamagui/animate-presence/dist/esm/AnimatePresence.js"),jsx_runtime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js");function Animate({children,type,...props}){return"presence"===type?props.keepChildrenMounted?(0,jsx_runtime.jsx)(PresenceChild.g,{initial:!!props.initial&&void 0,onExitComplete:props.onExitComplete,enterVariant:props.enterVariant,exitVariant:props.exitVariant,enterExitVariant:props.enterExitVariant,presenceAffectsLayout:props.presenceAffectsLayout||!0,isPresent:props.present,children}):(0,jsx_runtime.jsx)(AnimatePresence.M,{...props,children:props.present?children:null}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children})}var es2015=__webpack_require__("../../node_modules/aria-hidden/dist/es2015/index.js"),compose_refs=__webpack_require__("../../node_modules/@tamagui/compose-refs/dist/esm/compose-refs.mjs"),createStyledContext=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/createStyledContext.js"),dist_esm=__webpack_require__("../../node_modules/@tamagui/core/dist/esm/index.js"),useThemeName=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/hooks/useThemeName.js"),Theme=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/views/Theme.js"),constants_dist_esm=__webpack_require__("../../node_modules/@tamagui/constants/dist/esm/index.js"),withStaticProperties=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/helpers/withStaticProperties.js"),use_event_dist_esm=__webpack_require__("../../node_modules/@tamagui/use-event/dist/esm/index.js"),useMedia=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/hooks/useMedia.js"),floating_ui_react_dom_esm=__webpack_require__("../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js"),react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js");const FloatingOverrideContext=(0,react.createContext)(null);var focus_scope_dist_esm=__webpack_require__("../../node_modules/@tamagui/focus-scope/dist/esm/index.js"),styled=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/styled.js"),useProps=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/hooks/useProps.js"),createVariable=__webpack_require__("../../node_modules/@tamagui/web/dist/esm/createVariable.js"),get_token_dist_esm=__webpack_require__("../../node_modules/@tamagui/get-token/dist/esm/index.js"),Stacks=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/Stacks.js"),ThemeableStack=__webpack_require__("../../node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js"),dist=__webpack_require__("../../node_modules/react-native-web/dist/index.js");const PopperContext=(0,createStyledContext.i)({}),{useStyledContext:usePopperContext,Provider:PopperProvider}=PopperContext;function Popper(props){const{children,size,strategy="absolute",placement="bottom",stayInFrame,allowFlip,offset,__scopePopper}=props,[isMounted,setIsMounted]=react.useState(!1);(0,constants_dist_esm.LI)((()=>{setIsMounted(!0)}),[]);const[anchorRef,setAnchorRef]=react.useState(),[arrowEl,setArrow]=react.useState(null),[arrowSize,setArrowSize]=react.useState(0),offsetOptions=offset??arrowSize,floating=(props=>((0,react.useContext)(FloatingOverrideContext)||floating_ui_react_dom_esm.YF)?.(props))({strategy,placement,sameScrollView:!1,middleware:[stayInFrame?(0,floating_ui_react_dom_esm.uY)("boolean"==typeof stayInFrame?{}:stayInFrame):null,allowFlip?(0,floating_ui_react_dom_esm.RR)("boolean"==typeof allowFlip?{}:allowFlip):null,arrowEl?(0,floating_ui_react_dom_esm.x7)({element:arrowEl}):null,typeof offsetOptions<"u"?(0,floating_ui_react_dom_esm.cv)(offsetOptions):null].filter(Boolean)}),{refs,middlewareData,open}=floating;if((0,constants_dist_esm.LI)((()=>{floating.refs.setReference(anchorRef)}),[anchorRef]),constants_dist_esm.$L)(0,constants_dist_esm.LI)((()=>{if(open&&refs.reference.current&&refs.floating.current)return(0,floating_ui_react_dom_esm.Me)(refs.reference.current,refs.floating.current,floating.update)}),[open,floating.update,refs.floating,refs.reference]);else{const dimensions=(0,dist.UK)(),[keyboardOpen,setKeyboardOpen]=react.useState(!1);react.useEffect((()=>{const showSubscription=dist.N1.addListener("keyboardDidShow",(()=>{setKeyboardOpen(!0)})),hideSubscription=dist.N1.addListener("keyboardDidHide",(()=>{setKeyboardOpen(!1)}));return()=>{showSubscription.remove(),hideSubscription.remove()}}),[]),(0,constants_dist_esm.LI)((()=>{floating.update()}),[dimensions,keyboardOpen])}const popperContext={anchorRef:setAnchorRef,size,arrowRef:setArrow,arrowStyle:middlewareData.arrow,onArrowSize:setArrowSize,isMounted,scope:__scopePopper,...floating};return(0,jsx_runtime.jsx)(PopperProvider,{...popperContext,children})}const PopperAnchor=Stacks.FA.extractable(react.forwardRef((function(props,forwardedRef){const{virtualRef,__scopePopper,...anchorProps}=props,{anchorRef,getReferenceProps}=usePopperContext(__scopePopper),ref=react.useRef(null),composedRefs=(0,compose_refs.e)(forwardedRef,ref,anchorRef);if(virtualRef)return null;const stackProps={ref:composedRefs,...anchorProps};return(0,jsx_runtime.jsx)(dist_esm.View,{...getReferenceProps?getReferenceProps(stackProps):stackProps})}))),PopperContentFrame=(0,styled.z)(ThemeableStack.K,{name:"PopperContent",variants:{unstyled:{false:{size:"$true",backgroundColor:"$background",alignItems:"center",radiused:!0}},size:{"...size":(val,{tokens})=>({padding:tokens.space[val],borderRadius:tokens.radius[val]})}},defaultVariants:{unstyled:"1"==={}.TAMAGUI_HEADLESS}}),PopperContent=react.forwardRef((function(props,forwardedRef){const{__scopePopper,...rest}=props,{strategy,placement,refs,x,y,getFloatingProps,size,isMounted,update}=usePopperContext(__scopePopper),contentRefs=(0,compose_refs.e)(refs.setFloating,forwardedRef),contents=react.useMemo((()=>(0,jsx_runtime.jsx)(PopperContentFrame,{"data-placement":placement,"data-strategy":strategy,contain:"layout",size,...rest},"popper-content-frame")),[placement,strategy,props]);if((0,constants_dist_esm.LI)((()=>{isMounted&&update()}),[isMounted]),!isMounted)return null;const frameProps={ref:contentRefs,x:x||0,y:y||0,position:strategy};return(0,jsx_runtime.jsx)(Stacks.FA,{...getFloatingProps?getFloatingProps(frameProps):frameProps,children:contents})})),PopperArrowFrame=(0,styled.z)(Stacks.FA,{name:"PopperArrow",variants:{unstyled:{false:{borderColor:"$borderColor",backgroundColor:"$background",position:"relative"}}},defaultVariants:{unstyled:"1"==={}.TAMAGUI_HEADLESS}}),PopperArrowOuterFrame=(0,styled.z)(Stacks.FA,{name:"PopperArrowOuter",variants:{unstyled:{false:{position:"absolute",zIndex:1e6,pointerEvents:"none",overflow:"hidden",alignItems:"center",justifyContent:"center"}}},defaultVariants:{unstyled:"1"==={}.TAMAGUI_HEADLESS}}),opposites={top:"bottom",right:"left",bottom:"top",left:"right"},PopperArrow=PopperArrowFrame.styleable((function(propsIn,forwardedRef){const{__scopePopper,...rest}=propsIn,props=(0,useProps.wN)(rest),{offset,size:sizeProp,borderWidth=0,...arrowProps}=props,context=usePopperContext(__scopePopper),sizeVal=sizeProp??context.size,sizeValResolved=(0,createVariable.Ve)((0,get_token_dist_esm.Pj)(sizeVal,{shift:-2,bounds:[2]})),size=Math.max(0,+sizeValResolved),{placement}=context,refs=(0,compose_refs.e)(context.arrowRef,forwardedRef),x=context.arrowStyle?.x||0,y=context.arrowStyle?.y||0,primaryPlacement=placement?placement.split("-")[0]:"top",arrowStyle={x,y,width:size,height:size},innerArrowStyle={};if(primaryPlacement){arrowStyle["bottom"===primaryPlacement||"top"===primaryPlacement?"width":"height"]=2*size;const oppSide=opposites[primaryPlacement];oppSide&&(arrowStyle[oppSide]=-size,innerArrowStyle[oppSide]=size/2),"bottom"===oppSide&&(arrowStyle[oppSide]+=1),("top"===oppSide||"bottom"===oppSide)&&(arrowStyle.left=0),("left"===oppSide||"right"===oppSide)&&(arrowStyle.top=0),(0,constants_dist_esm.LI)((()=>{context.onArrowSize?.(size)}),[size,context.onArrowSize])}return(0,jsx_runtime.jsx)(PopperArrowOuterFrame,{ref:refs,...arrowStyle,children:(0,jsx_runtime.jsx)(PopperArrowFrame,{width:size,height:size,...arrowProps,...innerArrowStyle,rotate:"45deg",..."bottom"===primaryPlacement&&{borderLeftWidth:borderWidth,borderTopWidth:borderWidth},..."top"===primaryPlacement&&{borderBottomWidth:borderWidth,borderRightWidth:borderWidth},..."right"===primaryPlacement&&{borderLeftWidth:borderWidth,borderBottomWidth:borderWidth},..."left"===primaryPlacement&&{borderTopWidth:borderWidth,borderRightWidth:borderWidth}})})}));var portal_dist_esm=__webpack_require__("../../node_modules/@tamagui/portal/dist/esm/index.js"),remove_scroll_dist_esm=__webpack_require__("../../node_modules/@tamagui/remove-scroll/dist/esm/index.js"),Sheet=__webpack_require__("../../node_modules/@tamagui/sheet/dist/esm/Sheet.js"),SheetController=__webpack_require__("../../node_modules/@tamagui/sheet/dist/esm/SheetController.js"),useControllableState=__webpack_require__("../../node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.js"),floating_ui_react_esm=__webpack_require__("../../node_modules/@floating-ui/react/dist/floating-ui.react.esm.js");const POPOVER_SCOPE="PopoverScope",PopoverContext=(0,createStyledContext.i)({}),usePopoverContext=PopoverContext.useStyledContext,PopoverAnchor=react.forwardRef((function(props,forwardedRef){const{__scopePopover,...rest}=props,context=usePopoverContext(__scopePopover),{onCustomAnchorAdd,onCustomAnchorRemove}=context||{};return react.useEffect((()=>(onCustomAnchorAdd(),()=>onCustomAnchorRemove())),[onCustomAnchorAdd,onCustomAnchorRemove]),(0,jsx_runtime.jsx)(PopperAnchor,{__scopePopper:__scopePopover||POPOVER_SCOPE,...rest,ref:forwardedRef})})),PopoverTrigger=react.forwardRef((function(props,forwardedRef){const{__scopePopover,...rest}=props,context=usePopoverContext(__scopePopover),composedTriggerRef=(0,compose_refs.e)(forwardedRef,context.triggerRef),trigger=(0,jsx_runtime.jsx)(dist_esm.View,{"aria-haspopup":"dialog","aria-expanded":context.open,"data-state":getState(context.open),...rest,ref:composedTriggerRef,onPress:(0,dist_esm.composeEventHandlers)(props.onPress,context.onOpenToggle)});return context.hasCustomAnchor?trigger:(0,jsx_runtime.jsx)(PopperAnchor,{__scopePopper:__scopePopover||POPOVER_SCOPE,asChild:!0,children:trigger})})),PopoverContent=PopperContentFrame.extractable(react.forwardRef((function(props,forwardedRef){const{allowPinchZoom,trapFocus,disableRemoveScroll=!0,zIndex,__scopePopover,...contentImplProps}=props,context=usePopoverContext(__scopePopover),contentRef=react.useRef(null),composedRefs=(0,compose_refs.e)(forwardedRef,contentRef),isRightClickOutsideRef=react.useRef(!1);return react.useEffect((()=>{if(!context.open)return;const content=contentRef.current;return content?(0,es2015.Ry)(content):void 0}),[context.open]),(0,jsx_runtime.jsx)(PopoverContentPortal,{__scopePopover,zIndex:props.zIndex,children:(0,jsx_runtime.jsx)(dist_esm.Stack,{pointerEvents:context.open?"auto":"none",children:(0,jsx_runtime.jsx)(PopoverContentImpl,{...contentImplProps,disableRemoveScroll,ref:composedRefs,__scopePopover,trapFocus:trapFocus??context.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,dist_esm.composeEventHandlers)(props.onCloseAutoFocus,(event=>{event.preventDefault(),isRightClickOutsideRef.current||context.triggerRef.current?.focus()})),onPointerDownOutside:(0,dist_esm.composeEventHandlers)(props.onPointerDownOutside,(event=>{const originalEvent=event.detail.originalEvent,ctrlLeftClick=0===originalEvent.button&&!0===originalEvent.ctrlKey,isRightClick=2===originalEvent.button||ctrlLeftClick;isRightClickOutsideRef.current=isRightClick}),{checkDefaultPrevented:!1}),onFocusOutside:(0,dist_esm.composeEventHandlers)(props.onFocusOutside,(event=>event.preventDefault()),{checkDefaultPrevented:!1})})})})})));function PopoverRepropagateContext(props){return(0,jsx_runtime.jsx)(PopperContext.Provider,{scope:props.scope,...props.popperContext,children:(0,jsx_runtime.jsx)(PopoverContext.Provider,{...props.context,children:props.children})})}function PopoverContentPortal(props){const{__scopePopover}=props,zIndex=props.zIndex??15e4,context=usePopoverContext(__scopePopover),popperContext=usePopperContext(__scopePopover||POPOVER_SCOPE),themeName=(0,useThemeName.C)();let contents=props.children;return("android"===dist.t4.OS||"ios"===dist.t4.OS)&&(contents=(0,jsx_runtime.jsx)(PopoverRepropagateContext,{scope:__scopePopover||POPOVER_SCOPE,popperContext,context,children:props.children})),(0,jsx_runtime.jsx)(portal_dist_esm.Portal,{zIndex,children:(0,jsx_runtime.jsxs)(Theme.Q,{name:themeName,children:[!!context.open&&!context.breakpointActive&&(0,jsx_runtime.jsx)(Stacks.FA,{fullscreen:!0,onPress:(0,dist_esm.composeEventHandlers)(props.onPress,context.onOpenToggle)}),contents]})})}const PopoverContentImpl=react.forwardRef((function(props,forwardedRef){const{trapFocus,__scopePopover,onOpenAutoFocus,onCloseAutoFocus,disableOutsidePointerEvents,disableFocusScope,onEscapeKeyDown,onPointerDownOutside,onFocusOutside,onInteractOutside,children,disableRemoveScroll,freezeContentsWhenHidden,...contentProps}=props,context=usePopoverContext(__scopePopover),{open,keepChildrenMounted}=context,popperContext=usePopperContext(__scopePopover||POPOVER_SCOPE),[isFullyHidden,setIsFullyHidden]=react.useState(!context.open),contents=react.useMemo((()=>constants_dist_esm.$L?(0,jsx_runtime.jsx)("div",{style:{display:"contents"},children}):children),[children]);if(open&&isFullyHidden&&setIsFullyHidden(!1),!keepChildrenMounted&&isFullyHidden)return null;if(context.breakpointActive){const childrenWithoutScrollView=react.Children.toArray(children).map((child=>react.isValidElement(child)&&child.type===dist.pf?child.props.children:child));let content=childrenWithoutScrollView;return("android"===dist.t4.OS||"ios"===dist.t4.OS)&&(content=(0,jsx_runtime.jsx)(PopperContext.Provider,{scope:__scopePopover||POPOVER_SCOPE,...popperContext,children:childrenWithoutScrollView})),(0,jsx_runtime.jsx)(portal_dist_esm.PortalItem,{hostName:`${context.id}PopoverContents`,children:content})}return(0,jsx_runtime.jsx)(Animate,{type:"presence",present:!!open,keepChildrenMounted,onExitComplete:()=>{setIsFullyHidden(!0)},children:(0,jsx_runtime.jsx)(PopperContent,{__scopePopper:__scopePopover||POPOVER_SCOPE,"data-state":getState(open),id:context.contentId,ref:forwardedRef,...contentProps,children:(0,jsx_runtime.jsx)(remove_scroll_dist_esm.f,{enabled:!disableRemoveScroll&&open,allowPinchZoom:!0,removeScrollBar:!1,style:{display:"contents"},children:(0,jsx_runtime.jsx)(focus_scope_dist_esm.M,{loop:!0,enabled:!disableFocusScope&&open,trapped:trapFocus,onMountAutoFocus:onOpenAutoFocus,onUnmountAutoFocus:onCloseAutoFocus,children:contents})})},context.contentId)})})),PopoverClose=react.forwardRef((function(props,forwardedRef){const{__scopePopover,...rest}=props,context=usePopoverContext(__scopePopover);return(0,jsx_runtime.jsx)(Stacks.FA,{...rest,ref:forwardedRef,componentName:"PopoverClose",onPress:(0,dist_esm.composeEventHandlers)(props.onPress,(()=>context.onOpenChange(!1)))})})),PopoverArrow=PopperArrow.styleable((function(props,forwardedRef){const{__scopePopover,...rest}=props,context=usePopoverContext(__scopePopover);return useSheetBreakpointActive(context.sheetBreakpoint)?null:(0,jsx_runtime.jsx)(PopperArrow,{__scopePopper:__scopePopover||POPOVER_SCOPE,componentName:"PopoverArrow",...rest,ref:forwardedRef})})),Popover=(0,withStaticProperties.$)((function(props){const{children,open:openProp,defaultOpen,onOpenChange,__scopePopover,keepChildrenMounted,hoverable,disableFocus,...restProps}=props,id=react.useId(),{when,AdaptProvider}=(0,esm.pV)({Contents:react.useCallback((()=>(0,jsx_runtime.jsx)(portal_dist_esm.PortalHost,{name:`${id}PopoverContents`})),[])}),sheetBreakpoint=when,triggerRef=react.useRef(null),[hasCustomAnchor,setHasCustomAnchor]=react.useState(!1),[open,setOpen]=(0,useControllableState.T)({prop:openProp,defaultProp:defaultOpen||!1,onChange:onOpenChange}),sheetActive=useSheetBreakpointActive(sheetBreakpoint),floatingContext=(({open,setOpen,disable,disableFocus,hoverable})=>(0,react.useCallback)((props=>{const floating=(0,floating_ui_react_esm.YF)({...props,open,onOpenChange:setOpen}),{getReferenceProps,getFloatingProps}=(0,floating_ui_react_esm.NI)([hoverable?(0,floating_ui_react_esm.XI)(floating.context,{enabled:!disable&&hoverable,handleClose:(0,floating_ui_react_esm.xp)({requireIntent:!0,blockPointerEvents:!0})}):(0,floating_ui_react_esm.XI)(floating.context,{enabled:!1}),(0,floating_ui_react_esm.KK)(floating.context,{enabled:!disable&&!disableFocus,keyboardOnly:!0}),(0,floating_ui_react_esm.qs)(floating.context,{role:"dialog"}),(0,floating_ui_react_esm.bQ)(floating.context,{enabled:!disable})]);return{...floating,open,getReferenceProps,getFloatingProps}}),[open,setOpen,disable,disableFocus,hoverable]))({open,setOpen,disable:sheetActive,hoverable,disableFocus}),popoverContext={id,sheetBreakpoint,contentId:react.useId(),triggerRef,open,breakpointActive:sheetActive,onOpenChange:setOpen,onOpenToggle:(0,use_event_dist_esm.z)((()=>{open&&sheetActive||setOpen(!open)})),hasCustomAnchor,onCustomAnchorAdd:react.useCallback((()=>setHasCustomAnchor(!0)),[]),onCustomAnchorRemove:react.useCallback((()=>setHasCustomAnchor(!1)),[]),keepChildrenMounted},contents=(0,jsx_runtime.jsx)(Popper,{__scopePopper:__scopePopover||POPOVER_SCOPE,stayInFrame:!0,...restProps,children:(0,jsx_runtime.jsx)(PopoverContext.Provider,{scope:__scopePopover,...popoverContext,children:(0,jsx_runtime.jsx)(PopoverSheetController,{onOpenChange:setOpen,children})})});return(0,jsx_runtime.jsx)(AdaptProvider,{children:constants_dist_esm.$L?(0,jsx_runtime.jsx)(FloatingOverrideContext.Provider,{value:floatingContext,children:contents}):contents})}),{Anchor:PopoverAnchor,Arrow:PopoverArrow,Trigger:PopoverTrigger,Content:PopoverContent,Close:PopoverClose,Adapt:esm.Tr,ScrollView:dist.pf,Sheet:Sheet.Sheet.Controlled});function getState(open){return open?"open":"closed"}const PopoverSheetController=({__scopePopover,...props})=>{const context=usePopoverContext(__scopePopover),showSheet=useShowPopoverSheet(context),breakpointActive=context.breakpointActive,getShowSheet=(0,use_event_dist_esm.X)(showSheet);return(0,jsx_runtime.jsx)(SheetController.f,{onOpenChange:val=>{getShowSheet()&&props.onOpenChange(val)},open:context.open,hidden:!1===breakpointActive,children:props.children})},useSheetBreakpointActive=breakpoint=>{const media=(0,useMedia.GS)();return"boolean"!=typeof breakpoint&&breakpoint?media[breakpoint]:!!breakpoint},useShowPopoverSheet=context=>{const breakpointActive=useSheetBreakpointActive(context.sheetBreakpoint);return!1!==context.open&&breakpointActive}}}]);