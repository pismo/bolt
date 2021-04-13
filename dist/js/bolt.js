"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var __accessCheck$2=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)},__privateGet$2=(s,e,t)=>(__accessCheck$2(s,e,"read from private field"),t?t.call(s):e.get(s)),__privateSet$2=(s,e,t,i)=>(__accessCheck$2(s,e,"write to private field"),i?i.call(s,t):e.set(s,t),t),__container$1,__header,__content,__footer,__contentList,__onSelected,__initialize,__clickHandler;class Sidebar{constructor({container:e,header:t,content:i,footerLabel:a,onSelected:l}){__container$1.set(this,void 0),__header.set(this,void 0),__content.set(this,void 0),__footer.set(this,void 0),__contentList.set(this,{}),__onSelected.set(this,void 0),__initialize.set(this,(n,h,c,L)=>{__privateGet$2(this,__container$1).classList.add("tw-sidebar"),__privateGet$2(this,__header).classList.add("tw-sidebar-btn","tw-sidebar-btn-l0"),__privateGet$2(this,__content).classList.add("tw-sidebar-content"),__privateGet$2(this,__footer).classList.add("tw-sidebar-btn-footnote"),__privateGet$2(this,__container$1).appendChild(__privateGet$2(this,__header)),__privateGet$2(this,__container$1).appendChild(__privateGet$2(this,__content)),__privateGet$2(this,__container$1).appendChild(__privateGet$2(this,__footer));const u=document.createElement("span"),o=document.createElement("p");u.classList.add(`tw-i-${h.icon}`,"tw-sidebar-btn-icon"),o.classList.add("tw-sidebar-btn-label"),o.innerText=h.label,__privateGet$2(this,__header).appendChild(u),__privateGet$2(this,__header).appendChild(o),c.forEach((r,k)=>{const w=`${k}-${r.level}-${r.label}`,d=document.createElement("button");d.id=w,d.name=r.name||"",d.classList.add("tw-sidebar-btn",`tw-sidebar-btn-l${r.level}`),__privateGet$2(this,__contentList)[w]=d;let v;r.icon&&(v=document.createElement("span"),v.classList.add(`tw-i-${r.icon}`,"tw-sidebar-btn-icon"),d.appendChild(v));const m=document.createElement("p");m.classList.add("tw-sidebar-btn-label"),m.innerText=r.label,d.appendChild(m),d.addEventListener("click",__privateGet$2(this,__clickHandler)),__privateGet$2(this,__content).appendChild(d)});const p=document.createElement("p");p.classList.add("tw-sidebar-btn-label"),p.innerText=L,__privateGet$2(this,__footer).appendChild(p)}),__clickHandler.set(this,n=>{const h=n.currentTarget;Object.values(__privateGet$2(this,__contentList)).map(c=>c.classList.remove("selected")),h.classList.add("selected"),__privateGet$2(this,__onSelected)&&__privateGet$2(this,__onSelected).call(this,h)}),this.destroy=()=>{__privateGet$2(this,__container$1).removeChild(__privateGet$2(this,__header)),__privateGet$2(this,__container$1).removeChild(__privateGet$2(this,__content)),__privateGet$2(this,__container$1).removeChild(__privateGet$2(this,__footer)),Object.values(__privateGet$2(this,__contentList)).map(n=>n.removeEventListener("click",__privateGet$2(this,__clickHandler))),__privateSet$2(this,__contentList,{})},__privateSet$2(this,__onSelected,l),__privateSet$2(this,__container$1,e),__privateGet$2(this,__container$1).dataset.testid="sidebar",__privateSet$2(this,__header,document.createElement("div")),__privateGet$2(this,__header).dataset.testid="header",__privateSet$2(this,__content,document.createElement("div")),__privateGet$2(this,__content).dataset.testid="content",__privateSet$2(this,__footer,document.createElement("div")),__privateGet$2(this,__footer).dataset.testid="footer",__privateGet$2(this,__initialize).call(this,e,t,i,a)}}__container$1=new WeakMap,__header=new WeakMap,__content=new WeakMap,__footer=new WeakMap,__contentList=new WeakMap,__onSelected=new WeakMap,__initialize=new WeakMap,__clickHandler=new WeakMap;var __accessCheck$1=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)},__privateGet$1=(s,e,t)=>(__accessCheck$1(s,e,"read from private field"),t?t.call(s):e.get(s)),__privateSet$1=(s,e,t,i)=>(__accessCheck$1(s,e,"write to private field"),i?i.call(s,t):e.set(s,t),t),__isOpen,__container,__modalContent,__backdrop,_initialize,_open,_close,_removeAnimationEvent,_startAnimationOpen,_endAnimationOpen,_startAnimationClose,_endAnimationClose,_handleClose;class Modal{constructor(e){__isOpen.set(this,!1),__container.set(this,void 0),__modalContent.set(this,void 0),__backdrop.set(this,void 0),_initialize.set(this,()=>{__privateGet$1(this,__container).appendChild(__privateGet$1(this,__modalContent)),document.body.appendChild(__privateGet$1(this,__backdrop)),document.body.appendChild(__privateGet$1(this,__container)),__privateGet$1(this,__modalContent).style.display="none",__privateGet$1(this,__container).style.display="none",__privateGet$1(this,__backdrop).style.display="none",__privateGet$1(this,__container).classList.add("tw-modal"),__privateGet$1(this,__container).classList.add("tw-modal-close"),__privateGet$1(this,__backdrop).classList.add("tw-modal-backdrop"),__privateGet$1(this,__backdrop).classList.add("tw-modal-backdrop-close"),__privateGet$1(this,__backdrop).addEventListener("click",__privateGet$1(this,_handleClose)),__privateGet$1(this,__modalContent).classList.add("tw-modal-content"),setTimeout(()=>{__privateGet$1(this,__container).style.removeProperty("display"),__privateGet$1(this,__backdrop).style.removeProperty("display"),__privateGet$1(this,__modalContent).style.removeProperty("display")},300)}),_open.set(this,()=>{__privateGet$1(this,__backdrop).addEventListener("transitionstart",__privateGet$1(this,_startAnimationOpen)),__privateGet$1(this,__container).addEventListener("transitioncancel",__privateGet$1(this,_endAnimationOpen)),__privateGet$1(this,__container).addEventListener("transitionend",__privateGet$1(this,_endAnimationOpen)),__privateGet$1(this,__backdrop).classList.remove("tw-modal-backdrop-close"),__privateGet$1(this,__backdrop).classList.add("tw-modal-backdrop-open"),__privateGet$1(this,__container).classList.remove("tw-modal-close"),__privateGet$1(this,__container).classList.add("tw-modal-open")}),_close.set(this,()=>{__privateGet$1(this,__container).addEventListener("transitionstart",__privateGet$1(this,_startAnimationClose)),__privateGet$1(this,__backdrop).addEventListener("transitioncancel",__privateGet$1(this,_endAnimationClose)),__privateGet$1(this,__backdrop).addEventListener("transitionend",__privateGet$1(this,_endAnimationClose)),__privateGet$1(this,__backdrop).classList.remove("tw-modal-backdrop-open"),__privateGet$1(this,__backdrop).classList.add("tw-modal-backdrop-close"),__privateGet$1(this,__container).classList.remove("tw-modal-open"),__privateGet$1(this,__container).classList.add("tw-modal-close")}),_removeAnimationEvent.set(this,()=>{__privateGet$1(this,__backdrop).removeEventListener("transitionstart",__privateGet$1(this,_startAnimationOpen)),__privateGet$1(this,__container).removeEventListener("transitioncancel",__privateGet$1(this,_endAnimationOpen)),__privateGet$1(this,__container).removeEventListener("transitionend",__privateGet$1(this,_endAnimationOpen)),__privateGet$1(this,__container).removeEventListener("transitionstart",__privateGet$1(this,_startAnimationClose)),__privateGet$1(this,__backdrop).removeEventListener("transitioncancel",__privateGet$1(this,_endAnimationClose)),__privateGet$1(this,__backdrop).removeEventListener("transitionend",__privateGet$1(this,_endAnimationClose))}),_startAnimationOpen.set(this,()=>{__privateGet$1(this,__backdrop).removeEventListener("transitionstart",__privateGet$1(this,_startAnimationOpen)),this.onStartOpen&&this.onStartOpen()}),_endAnimationOpen.set(this,()=>{__privateGet$1(this,_removeAnimationEvent).call(this),this.onEndOpen&&this.onEndOpen()}),_startAnimationClose.set(this,()=>{__privateGet$1(this,__container).removeEventListener("transitionstart",__privateGet$1(this,_startAnimationClose)),this.onStartClose&&this.onStartClose()}),_endAnimationClose.set(this,()=>{__privateGet$1(this,_removeAnimationEvent).call(this),this.onEndClose&&this.onEndClose()}),_handleClose.set(this,()=>{this.onClose&&this.onClose()}),this.destroy=()=>{__privateGet$1(this,__container).removeChild(__privateGet$1(this,__modalContent));const t=__privateGet$1(this,__container).parentElement;t.removeChild(__privateGet$1(this,__backdrop)),t.removeChild(__privateGet$1(this,__container)),__privateGet$1(this,__backdrop).removeEventListener("click",__privateGet$1(this,_handleClose))},__privateSet$1(this,__modalContent,e),__privateSet$1(this,__container,document.createElement("div")),__privateSet$1(this,__backdrop,document.createElement("div")),__privateGet$1(this,__backdrop).dataset.testid="backdrop",__privateGet$1(this,_initialize).call(this)}get isOpen(){return __privateGet$1(this,__isOpen)}set isOpen(e){if(__privateSet$1(this,__isOpen,e),e){__privateGet$1(this,_open).call(this);return}__privateGet$1(this,_close).call(this)}}__isOpen=new WeakMap,__container=new WeakMap,__modalContent=new WeakMap,__backdrop=new WeakMap,_initialize=new WeakMap,_open=new WeakMap,_close=new WeakMap,_removeAnimationEvent=new WeakMap,_startAnimationOpen=new WeakMap,_endAnimationOpen=new WeakMap,_startAnimationClose=new WeakMap,_endAnimationClose=new WeakMap,_handleClose=new WeakMap;var __accessCheck=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)},__privateGet=(s,e,t)=>(__accessCheck(s,e,"read from private field"),t?t.call(s):e.get(s)),__privateSet=(s,e,t,i)=>(__accessCheck(s,e,"write to private field"),i?i.call(s,t):e.set(s,t),t),_container,_containerInput,_input,_label,_helperText,_startIcon,_containerEndIcon,_endIcon,_clearIcon,_observer,_validTypes,_validAttr,_changeDataSet,_updateOptions,_handleChange,_handleFocus,_handleBlur,_handleClear,_statIconHandleClick,_endIconHandleClick;class Input{constructor(e){_container.set(this,void 0),_containerInput.set(this,void 0),_input.set(this,void 0),_label.set(this,void 0),_helperText.set(this,void 0),_startIcon.set(this,void 0),_containerEndIcon.set(this,void 0),_endIcon.set(this,void 0),_clearIcon.set(this,void 0),_observer.set(this,void 0),_validTypes.set(this,["number","password","text"]),_validAttr.set(this,["max","maxlength","min","step","name"]),_changeDataSet.set(this,i=>{i.forEach(a=>{const l=a.attributeName.replace("data-",""),n=__privateGet(this,_container).dataset;__privateGet(this,_updateOptions).call(this,l,n)})}),_updateOptions.set(this,(i,a)=>{var l,n,h;switch(i){case"label":__privateGet(this,_label).innerText=(l=a.label)!=null?l:"";break;case"helpertext":__privateGet(this,_helperText).innerText=(n=a.helpertext)!=null?n:"";break;case"disabled":String(a.disabled)==="true"?__privateGet(this,_input).setAttribute("disabled","true"):__privateGet(this,_input).removeAttribute("disabled");break;case"error":String(a.error)==="true"&&(!a.disabled||String(a.disabled)==="false")?(__privateGet(this,_input).classList.add("tw-input-error"),__privateGet(this,_label).classList.add("tw-input-element-error"),__privateGet(this,_helperText).classList.add("tw-input-element-error"),__privateGet(this,_startIcon).classList.add("tw-input-element-error"),__privateGet(this,_containerEndIcon).classList.add("tw-input-element-error")):(__privateGet(this,_input).classList.remove("tw-input-error"),__privateGet(this,_label).classList.remove("tw-input-element-error"),__privateGet(this,_helperText).classList.remove("tw-input-element-error"),__privateGet(this,_startIcon).classList.remove("tw-input-element-error"),__privateGet(this,_containerEndIcon).classList.remove("tw-input-element-error"));break;case"value":typeof a.value=="string"&&(__privateGet(this,_input).value=(h=a.value)!=null?h:"");break;case"starticon":__privateGet(this,_startIcon).classList.add(`tw-i-${a.starticon}`),__privateGet(this,_startIcon).addEventListener("click",__privateGet(this,_statIconHandleClick)),__privateGet(this,_input).classList.add("tw-input-startIcon-padding"),__privateGet(this,_startIcon).parentElement||__privateGet(this,_containerInput).appendChild(__privateGet(this,_startIcon));break;case"endicon":__privateGet(this,_endIcon).classList.remove(...Array.from(__privateGet(this,_endIcon).classList)),__privateGet(this,_endIcon).classList.add(`tw-i-${a.endicon}`),__privateGet(this,_input).classList.add("tw-input-endIcon-single-padding"),__privateGet(this,_input).classList.add("tw-input-endIcon-double-padding"),__privateGet(this,_endIcon).addEventListener("click",__privateGet(this,_endIconHandleClick)),__privateGet(this,_endIcon).parentElement||__privateGet(this,_containerEndIcon).appendChild(__privateGet(this,_endIcon)),__privateGet(this,_containerEndIcon).parentElement||__privateGet(this,_containerInput).appendChild(__privateGet(this,_containerEndIcon));break;case"clearicon":a.clearicon==="true"?(__privateGet(this,_input).classList.add("tw-input-endIcon-single-padding"),__privateGet(this,_input).classList.add("tw-input-endIcon-double-padding"),__privateGet(this,_clearIcon).addEventListener("click",__privateGet(this,_handleClear)),__privateGet(this,_clearIcon).parentElement||__privateGet(this,_containerEndIcon).insertBefore(__privateGet(this,_clearIcon),__privateGet(this,_containerEndIcon).firstChild),__privateGet(this,_containerEndIcon).parentElement||__privateGet(this,_containerInput).appendChild(__privateGet(this,_containerEndIcon))):(__privateGet(this,_containerEndIcon).removeChild(__privateGet(this,_clearIcon)),__privateGet(this,_clearIcon).removeEventListener("click",__privateGet(this,_handleClear)));break;case"type":__privateGet(this,_validTypes).includes(String(a.type))&&__privateGet(this,_input).setAttribute("type",a.type);break;default:__privateGet(this,_validAttr).includes(i)&&__privateGet(this,_input).setAttribute(i,a[i])}a.starticon||(__privateGet(this,_startIcon).parentElement&&__privateGet(this,_containerInput).removeChild(__privateGet(this,_startIcon)),__privateGet(this,_input).classList.remove("tw-input-startIcon-padding"),__privateGet(this,_startIcon).removeEventListener("click",__privateGet(this,_statIconHandleClick))),a.clearicon||(__privateGet(this,_input).classList.remove("tw-input-endIcon-double-padding"),__privateGet(this,_clearIcon).parentElement&&__privateGet(this,_containerEndIcon).removeChild(__privateGet(this,_clearIcon))),a.endicon||(__privateGet(this,_input).classList.remove("tw-input-endIcon-double-padding"),__privateGet(this,_endIcon).parentElement&&__privateGet(this,_containerEndIcon).removeChild(__privateGet(this,_endIcon)),__privateGet(this,_endIcon).removeEventListener("click",__privateGet(this,_endIconHandleClick))),!a.clearicon&&!a.endicon&&(__privateGet(this,_containerEndIcon).parentElement&&__privateGet(this,_containerInput).removeChild(__privateGet(this,_containerEndIcon)),__privateGet(this,_endIcon).parentElement&&__privateGet(this,_containerEndIcon).removeChild(__privateGet(this,_endIcon)),__privateGet(this,_clearIcon).parentElement&&__privateGet(this,_containerEndIcon).removeChild(__privateGet(this,_clearIcon)),__privateGet(this,_input).classList.remove("tw-input-endIcon-single-padding"),__privateGet(this,_input).classList.remove("tw-input-endIcon-double-padding"),__privateGet(this,_clearIcon).removeEventListener("click",__privateGet(this,_handleClear)),__privateGet(this,_endIcon).removeEventListener("click",__privateGet(this,_endIconHandleClick)))}),_handleChange.set(this,i=>{this.onChange&&this.onChange(i)}),_handleFocus.set(this,i=>{__privateGet(this,_startIcon).classList.add("tw-input-focus"),__privateGet(this,_containerEndIcon).classList.add("tw-input-focus"),this.onFocus&&this.onFocus(i)}),_handleBlur.set(this,i=>{__privateGet(this,_startIcon).classList.remove("tw-input-focus"),__privateGet(this,_containerEndIcon).classList.remove("tw-input-focus"),this.onBlur&&this.onBlur(i)}),_handleClear.set(this,i=>{__privateGet(this,_input).value="",this.onChange&&this.onChange(i)}),_statIconHandleClick.set(this,i=>{this.onStartIconClick&&this.onStartIconClick(i)}),_endIconHandleClick.set(this,i=>{this.onEndIconClick&&this.onEndIconClick(i)}),this.focus=()=>{__privateGet(this,_input).focus()},this.blur=()=>{__privateGet(this,_input).blur()},this.destroy=()=>{for(__privateGet(this,_observer).disconnect(),__privateGet(this,_input).removeEventListener("input",__privateGet(this,_handleChange)),__privateGet(this,_input).removeEventListener("focus",__privateGet(this,_handleFocus)),__privateGet(this,_input).removeEventListener("blur",__privateGet(this,_handleBlur)),__privateGet(this,_clearIcon).removeEventListener("click",__privateGet(this,_handleClear)),__privateGet(this,_startIcon).removeEventListener("click",__privateGet(this,_statIconHandleClick)),__privateGet(this,_endIcon).removeEventListener("click",__privateGet(this,_endIconHandleClick));__privateGet(this,_container).children.length>0;)__privateGet(this,_container).removeChild(__privateGet(this,_container).children[__privateGet(this,_container).children.length-1])},__privateSet(this,_container,e),__privateGet(this,_container).classList.add("tw-input-container"),__privateSet(this,_label,document.createElement("label")),__privateGet(this,_label).classList.add("tw-input-label"),__privateSet(this,_containerInput,document.createElement("div")),__privateGet(this,_containerInput).classList.add("tw-input-containerInput"),__privateSet(this,_input,document.createElement("input")),__privateGet(this,_input).classList.add("tw-input"),__privateSet(this,_helperText,document.createElement("p")),__privateGet(this,_helperText).classList.add("tw-input-helperText"),__privateSet(this,_startIcon,document.createElement("div")),__privateGet(this,_startIcon).classList.add("tw-input-startIcon"),__privateSet(this,_containerEndIcon,document.createElement("div")),__privateGet(this,_containerEndIcon).classList.add("tw-input-endIcon"),__privateSet(this,_endIcon,document.createElement("div")),__privateSet(this,_clearIcon,document.createElement("div")),__privateGet(this,_clearIcon).classList.add("tw-i-close","tw-input-clearIcon");const t=__privateGet(this,_container).dataset;Object.keys(t).forEach(i=>{__privateGet(this,_updateOptions).call(this,i,t)}),__privateGet(this,_container).appendChild(__privateGet(this,_label)),__privateGet(this,_containerInput).appendChild(__privateGet(this,_input)),__privateGet(this,_container).appendChild(__privateGet(this,_containerInput)),__privateGet(this,_container).appendChild(__privateGet(this,_helperText)),__privateSet(this,_observer,new MutationObserver(__privateGet(this,_changeDataSet))),__privateGet(this,_observer).observe(__privateGet(this,_container),{attributes:!0}),__privateGet(this,_input).addEventListener("input",__privateGet(this,_handleChange)),__privateGet(this,_input).addEventListener("focus",__privateGet(this,_handleFocus)),__privateGet(this,_input).addEventListener("blur",__privateGet(this,_handleBlur))}}_container=new WeakMap,_containerInput=new WeakMap,_input=new WeakMap,_label=new WeakMap,_helperText=new WeakMap,_startIcon=new WeakMap,_containerEndIcon=new WeakMap,_endIcon=new WeakMap,_clearIcon=new WeakMap,_observer=new WeakMap,_validTypes=new WeakMap,_validAttr=new WeakMap,_changeDataSet=new WeakMap,_updateOptions=new WeakMap,_handleChange=new WeakMap,_handleFocus=new WeakMap,_handleBlur=new WeakMap,_handleClear=new WeakMap,_statIconHandleClick=new WeakMap,_endIconHandleClick=new WeakMap,exports.Input=Input,exports.Modal=Modal,exports.Sidebar=Sidebar;
//# sourceMappingURL=bolt.js.map
