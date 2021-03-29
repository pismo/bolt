"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var __accessCheck$1=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)},__privateGet$1=(s,t,e)=>(__accessCheck$1(s,t,"read from private field"),e?e.call(s):t.get(s)),__privateSet$1=(s,t,e,a)=>(__accessCheck$1(s,t,"write to private field"),a?a.call(s,e):t.set(s,e),e),__container$1,__header,__content,__footer,__contentList,__onSelected,__initialize,__clickHandler;class Sidebar{constructor({container:t,header:e,content:a,footerLabel:w,onSelected:_}){__container$1.set(this,void 0),__header.set(this,void 0),__content.set(this,void 0),__footer.set(this,void 0),__contentList.set(this,{}),__onSelected.set(this,void 0),__initialize.set(this,(h,d,o,L)=>{__privateGet$1(this,__container$1).classList.add("tw-sidebar"),__privateGet$1(this,__header).classList.add("tw-sidebar-btn","tw-sidebar-btn-l0"),__privateGet$1(this,__content).classList.add("tw-sidebar-content"),__privateGet$1(this,__footer).classList.add("tw-sidebar-btn-footnote"),__privateGet$1(this,__container$1).appendChild(__privateGet$1(this,__header)),__privateGet$1(this,__container$1).appendChild(__privateGet$1(this,__content)),__privateGet$1(this,__container$1).appendChild(__privateGet$1(this,__footer));const v=document.createElement("span"),r=document.createElement("p");v.classList.add(`tw-i-${d.icon}`,"tw-sidebar-btn-icon"),r.classList.add("tw-sidebar-btn-label"),r.innerText=d.label,__privateGet$1(this,__header).appendChild(v),__privateGet$1(this,__header).appendChild(r),o.forEach((n,E)=>{const m=`${E}-${n.level}-${n.label}`,i=document.createElement("button");i.id=m,i.name=n.name||"",i.classList.add("tw-sidebar-btn",`tw-sidebar-btn-l${n.level}`),__privateGet$1(this,__contentList)[m]=i;let c;n.icon&&(c=document.createElement("span"),c.classList.add(`tw-i-${n.icon}`,"tw-sidebar-btn-icon"),i.appendChild(c));const p=document.createElement("p");p.classList.add("tw-sidebar-btn-label"),p.innerText=n.label,i.appendChild(p),i.addEventListener("click",__privateGet$1(this,__clickHandler)),__privateGet$1(this,__content).appendChild(i)});const l=document.createElement("p");l.classList.add("tw-sidebar-btn-label"),l.innerText=L,__privateGet$1(this,__footer).appendChild(l)}),__clickHandler.set(this,h=>{const d=h.currentTarget;Object.values(__privateGet$1(this,__contentList)).map(o=>o.classList.remove("selected")),d.classList.add("selected"),__privateGet$1(this,__onSelected)&&__privateGet$1(this,__onSelected).call(this,d)}),this.destroy=()=>{__privateGet$1(this,__container$1).removeChild(__privateGet$1(this,__header)),__privateGet$1(this,__container$1).removeChild(__privateGet$1(this,__content)),__privateGet$1(this,__container$1).removeChild(__privateGet$1(this,__footer)),Object.values(__privateGet$1(this,__contentList)).map(h=>h.removeEventListener("click",__privateGet$1(this,__clickHandler))),__privateSet$1(this,__contentList,{})},__privateSet$1(this,__onSelected,_),__privateSet$1(this,__container$1,t),__privateGet$1(this,__container$1).dataset.testid="sidebar",__privateSet$1(this,__header,document.createElement("div")),__privateGet$1(this,__header).dataset.testid="header",__privateSet$1(this,__content,document.createElement("div")),__privateGet$1(this,__content).dataset.testid="content",__privateSet$1(this,__footer,document.createElement("div")),__privateGet$1(this,__footer).dataset.testid="footer",__privateGet$1(this,__initialize).call(this,t,e,a,w)}}__container$1=new WeakMap,__header=new WeakMap,__content=new WeakMap,__footer=new WeakMap,__contentList=new WeakMap,__onSelected=new WeakMap,__initialize=new WeakMap,__clickHandler=new WeakMap;var __accessCheck=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)},__privateGet=(s,t,e)=>(__accessCheck(s,t,"read from private field"),e?e.call(s):t.get(s)),__privateSet=(s,t,e,a)=>(__accessCheck(s,t,"write to private field"),a?a.call(s,e):t.set(s,e),e),__isOpen,__container,__modalContent,__backdrop,_initialize,_open,_close,_removeAnimationEvent,_startAnimationOpen,_endAnimationOpen,_startAnimationClose,_endAnimationClose,_handleClose;class Modal{constructor(t){__isOpen.set(this,!1),__container.set(this,void 0),__modalContent.set(this,void 0),__backdrop.set(this,void 0),_initialize.set(this,()=>{__privateGet(this,__container).appendChild(__privateGet(this,__modalContent)),document.body.appendChild(__privateGet(this,__backdrop)),document.body.appendChild(__privateGet(this,__container)),__privateGet(this,__modalContent).style.display="none",__privateGet(this,__container).style.display="none",__privateGet(this,__backdrop).style.display="none",__privateGet(this,__container).classList.add("tw-modal"),__privateGet(this,__container).classList.add("tw-modal-close"),__privateGet(this,__backdrop).classList.add("tw-modal-backdrop"),__privateGet(this,__backdrop).classList.add("tw-modal-backdrop-close"),__privateGet(this,__backdrop).addEventListener("click",__privateGet(this,_handleClose)),__privateGet(this,__modalContent).classList.add("tw-modal-content"),setTimeout(()=>{__privateGet(this,__container).style.removeProperty("display"),__privateGet(this,__backdrop).style.removeProperty("display"),__privateGet(this,__modalContent).style.removeProperty("display")},300)}),_open.set(this,()=>{__privateGet(this,__backdrop).addEventListener("transitionstart",__privateGet(this,_startAnimationOpen)),__privateGet(this,__container).addEventListener("transitioncancel",__privateGet(this,_endAnimationOpen)),__privateGet(this,__container).addEventListener("transitionend",__privateGet(this,_endAnimationOpen)),__privateGet(this,__backdrop).classList.remove("tw-modal-backdrop-close"),__privateGet(this,__backdrop).classList.add("tw-modal-backdrop-open"),__privateGet(this,__container).classList.remove("tw-modal-close"),__privateGet(this,__container).classList.add("tw-modal-open")}),_close.set(this,()=>{__privateGet(this,__container).addEventListener("transitionstart",__privateGet(this,_startAnimationClose)),__privateGet(this,__backdrop).addEventListener("transitioncancel",__privateGet(this,_endAnimationClose)),__privateGet(this,__backdrop).addEventListener("transitionend",__privateGet(this,_endAnimationClose)),__privateGet(this,__backdrop).classList.remove("tw-modal-backdrop-open"),__privateGet(this,__backdrop).classList.add("tw-modal-backdrop-close"),__privateGet(this,__container).classList.remove("tw-modal-open"),__privateGet(this,__container).classList.add("tw-modal-close")}),_removeAnimationEvent.set(this,()=>{__privateGet(this,__backdrop).removeEventListener("transitionstart",__privateGet(this,_startAnimationOpen)),__privateGet(this,__container).removeEventListener("transitioncancel",__privateGet(this,_endAnimationOpen)),__privateGet(this,__container).removeEventListener("transitionend",__privateGet(this,_endAnimationOpen)),__privateGet(this,__container).removeEventListener("transitionstart",__privateGet(this,_startAnimationClose)),__privateGet(this,__backdrop).removeEventListener("transitioncancel",__privateGet(this,_endAnimationClose)),__privateGet(this,__backdrop).removeEventListener("transitionend",__privateGet(this,_endAnimationClose))}),_startAnimationOpen.set(this,()=>{__privateGet(this,__backdrop).removeEventListener("transitionstart",__privateGet(this,_startAnimationOpen)),this.onStartOpen&&this.onStartOpen()}),_endAnimationOpen.set(this,()=>{__privateGet(this,_removeAnimationEvent).call(this),this.onEndOpen&&this.onEndOpen()}),_startAnimationClose.set(this,()=>{__privateGet(this,__container).removeEventListener("transitionstart",__privateGet(this,_startAnimationClose)),this.onStartClose&&this.onStartClose()}),_endAnimationClose.set(this,()=>{__privateGet(this,_removeAnimationEvent).call(this),this.onEndClose&&this.onEndClose()}),_handleClose.set(this,()=>{this.onClose&&this.onClose()}),this.destroy=()=>{__privateGet(this,__container).removeChild(__privateGet(this,__modalContent));const e=__privateGet(this,__container).parentElement;e.removeChild(__privateGet(this,__backdrop)),e.removeChild(__privateGet(this,__container)),__privateGet(this,__backdrop).removeEventListener("click",__privateGet(this,_handleClose))},__privateSet(this,__modalContent,t),__privateSet(this,__container,document.createElement("div")),__privateSet(this,__backdrop,document.createElement("div")),__privateGet(this,__backdrop).dataset.testid="backdrop",__privateGet(this,_initialize).call(this)}get isOpen(){return __privateGet(this,__isOpen)}set isOpen(t){if(__privateSet(this,__isOpen,t),t){__privateGet(this,_open).call(this);return}__privateGet(this,_close).call(this)}}__isOpen=new WeakMap,__container=new WeakMap,__modalContent=new WeakMap,__backdrop=new WeakMap,_initialize=new WeakMap,_open=new WeakMap,_close=new WeakMap,_removeAnimationEvent=new WeakMap,_startAnimationOpen=new WeakMap,_endAnimationOpen=new WeakMap,_startAnimationClose=new WeakMap,_endAnimationClose=new WeakMap,_handleClose=new WeakMap,exports.Modal=Modal,exports.Sidebar=Sidebar;
//# sourceMappingURL=bolt.js.map
