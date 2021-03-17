'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

var __isOpen, __container$1, __el, __backdrop;
class Modal {
    constructor(el) {
        __isOpen.set(this, false);
        __container$1.set(this, void 0);
        __el.set(this, void 0);
        __backdrop.set(this, void 0);
        this.onClose = () => { };
        this.initialize = (el) => {
            __classPrivateFieldSet(this, __el, el);
            __classPrivateFieldSet(this, __container$1, document.createElement('div'));
            __classPrivateFieldSet(this, __backdrop, document.createElement('div'));
            __classPrivateFieldGet(this, __container$1).appendChild(__classPrivateFieldGet(this, __el));
            document.body.appendChild(__classPrivateFieldGet(this, __backdrop));
            document.body.appendChild(__classPrivateFieldGet(this, __container$1));
            __classPrivateFieldGet(this, __el).style.display = 'none';
            __classPrivateFieldGet(this, __container$1).style.display = 'none';
            __classPrivateFieldGet(this, __backdrop).style.display = 'none';
            __classPrivateFieldGet(this, __container$1).classList.add('modal');
            __classPrivateFieldGet(this, __container$1).classList.add('modal-close');
            __classPrivateFieldGet(this, __backdrop).classList.add('modal-backdrop');
            __classPrivateFieldGet(this, __backdrop).classList.add('modal-backdrop-close');
            __classPrivateFieldGet(this, __backdrop).addEventListener('click', this.handleClose);
            __classPrivateFieldGet(this, __el).classList.add('modal-content');
            setTimeout(() => {
                __classPrivateFieldGet(this, __container$1).style.removeProperty('display');
                __classPrivateFieldGet(this, __backdrop).style.removeProperty('display');
                __classPrivateFieldGet(this, __el).style.removeProperty('display');
            }, 300);
        };
        this.open = () => {
            __classPrivateFieldGet(this, __backdrop).classList.remove('modal-backdrop-close');
            __classPrivateFieldGet(this, __backdrop).classList.add('modal-backdrop-open');
            __classPrivateFieldGet(this, __container$1).classList.remove('modal-close');
            __classPrivateFieldGet(this, __container$1).classList.add('modal-open');
        };
        this.close = () => {
            __classPrivateFieldGet(this, __backdrop).classList.remove('modal-backdrop-open');
            __classPrivateFieldGet(this, __backdrop).classList.add('modal-backdrop-close');
            __classPrivateFieldGet(this, __container$1).classList.remove('modal-open');
            __classPrivateFieldGet(this, __container$1).classList.add('modal-close');
        };
        this.handleClose = () => {
            if (this.onClose) {
                this.onClose();
            }
        };
        this.destroy = () => {
            __classPrivateFieldGet(this, __container$1).removeChild(__classPrivateFieldGet(this, __el));
            const p = __classPrivateFieldGet(this, __container$1).parentElement;
            p.removeChild(__classPrivateFieldGet(this, __backdrop));
            p.removeChild(__classPrivateFieldGet(this, __container$1));
            __classPrivateFieldGet(this, __backdrop).removeEventListener('click', this.handleClose);
            __classPrivateFieldSet(this, __backdrop, null);
            __classPrivateFieldSet(this, __container$1, null);
        };
        this.initialize(el);
    }
    get isOpen() {
        return __classPrivateFieldGet(this, __isOpen);
    }
    set isOpen(value) {
        __classPrivateFieldSet(this, __isOpen, value);
        if (value) {
            this.open();
            return;
        }
        this.close();
    }
}
__isOpen = new WeakMap(), __container$1 = new WeakMap(), __el = new WeakMap(), __backdrop = new WeakMap();

var __container, __header, __content, __footer, __contentList, __onSelected, __initialize, __clickHandler;
class Sidebar {
    constructor({ container, header, content, footerLabel, onSelected }) {
        __container.set(this, void 0);
        __header.set(this, void 0);
        __content.set(this, void 0);
        __footer.set(this, void 0);
        __contentList.set(this, {});
        __onSelected.set(this, (selected) => { });
        __initialize.set(this, (container, header, content, footerLabel) => {
            __classPrivateFieldSet(this, __container, container);
            __classPrivateFieldGet(this, __container).classList.add('sidebar');
            __classPrivateFieldSet(this, __header, document.createElement('div'));
            __classPrivateFieldGet(this, __header).classList.add('sidebar-btn', 'sidebar-btn-l0');
            __classPrivateFieldSet(this, __content, document.createElement('div'));
            __classPrivateFieldGet(this, __content).classList.add('sidebar-content');
            __classPrivateFieldSet(this, __footer, document.createElement('div'));
            __classPrivateFieldGet(this, __footer).classList.add('sidebar-btn-footnote');
            __classPrivateFieldGet(this, __container).appendChild(__classPrivateFieldGet(this, __header));
            __classPrivateFieldGet(this, __container).appendChild(__classPrivateFieldGet(this, __content));
            __classPrivateFieldGet(this, __container).appendChild(__classPrivateFieldGet(this, __footer));
            const h_icon = document.createElement('span');
            const h_label = document.createElement('p');
            h_icon.classList.add(`i-${header.icon}`, 'sidebar-btn-icon');
            h_label.classList.add('sidebar-btn-label');
            h_label.innerText = header.label;
            __classPrivateFieldGet(this, __header).appendChild(h_icon);
            __classPrivateFieldGet(this, __header).appendChild(h_label);
            content.map((el, i) => {
                const id = `${i}-${el.level}-${el.label}`;
                const child = document.createElement('button');
                child.id = id;
                child.name = el.name || '';
                child.classList.add('sidebar-btn', `sidebar-btn-l${el.level}`);
                __classPrivateFieldGet(this, __contentList)[id] = child;
                let icon;
                if (el.icon) {
                    icon = document.createElement('span');
                    icon.classList.add(`i-${el.icon}`, 'sidebar-btn-icon');
                    child.appendChild(icon);
                }
                const label = document.createElement('p');
                label.classList.add('sidebar-btn-label');
                label.innerText = el.label;
                child.appendChild(label);
                child.addEventListener('click', __classPrivateFieldGet(this, __clickHandler));
                __classPrivateFieldGet(this, __content).appendChild(child);
            });
            const f_label = document.createElement('p');
            f_label.classList.add('sidebar-btn-label');
            f_label.innerText = footerLabel;
            __classPrivateFieldGet(this, __footer).appendChild(f_label);
        });
        __clickHandler.set(this, (e) => {
            const target = e.currentTarget;
            Object.values(__classPrivateFieldGet(this, __contentList)).map((el) => el.classList.remove('selected'));
            target.classList.add('selected');
            __classPrivateFieldGet(this, __onSelected).call(this, target);
        });
        this.destroy = () => {
            __classPrivateFieldGet(this, __container).removeChild(__classPrivateFieldGet(this, __header));
            __classPrivateFieldGet(this, __container).removeChild(__classPrivateFieldGet(this, __content));
            __classPrivateFieldGet(this, __container).removeChild(__classPrivateFieldGet(this, __footer));
            Object.values(__classPrivateFieldGet(this, __contentList)).map(el => el.removeEventListener('click', __classPrivateFieldGet(this, __clickHandler)));
            __classPrivateFieldSet(this, __contentList, {});
            __classPrivateFieldSet(this, __header, null);
            __classPrivateFieldSet(this, __content, null);
            __classPrivateFieldSet(this, __footer, null);
            __classPrivateFieldSet(this, __container, null);
        };
        if (onSelected)
            __classPrivateFieldSet(this, __onSelected, onSelected);
        __classPrivateFieldGet(this, __initialize).call(this, container, header, content, footerLabel);
    }
}
__container = new WeakMap(), __header = new WeakMap(), __content = new WeakMap(), __footer = new WeakMap(), __contentList = new WeakMap(), __onSelected = new WeakMap(), __initialize = new WeakMap(), __clickHandler = new WeakMap();

exports.Modal = Modal;
exports.Sidebar = Sidebar;
