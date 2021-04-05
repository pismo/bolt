interface SidebarButton {
    label: string;
    level: 1 | 2;
    icon?: string;
    name?: string;
}
interface IHeader {
    icon: string;
    label: string;
}
interface SidebarProps {
    container: HTMLElement;
    header: IHeader;
    content: SidebarButton[];
    footerLabel: string;
    onSelected?: (selected: HTMLElement) => void;
}
interface ISidebarConstructor {
    new (props: SidebarProps): ISidebar;
}
interface ISidebar {
    destroy: () => void;
}
declare class Sidebar implements ISidebar {
    #private;
    constructor({ container, header, content, footerLabel, onSelected }: SidebarProps);
    destroy: () => void;
}

interface IModalConstructor {
    new (modalContent: HTMLElement): IModal;
}
interface IModal {
    isOpen: boolean;
    onClose?: () => void;
    onStartOpen?: () => void;
    onEndOpen?: () => void;
    onStartClose?: () => void;
    onEndClose?: () => void;
    readonly destroy: () => void;
}
declare class Modal implements IModal {
    #private;
    onClose?: () => void;
    onStartOpen?: () => void;
    onEndOpen?: () => void;
    onStartClose?: () => void;
    onEndClose?: () => void;
    constructor(modalContent: HTMLElement);
    get isOpen(): boolean;
    set isOpen(value: boolean);
    readonly destroy: () => void;
}

interface IInputDataset {
    name?: string;
    label?: string;
    type?: string;
    helpertext?: string;
    starticon?: string;
    endicon?: string;
    clearicon?: string;
    error?: boolean;
    disabled?: boolean;
    max?: number;
    maxlength?: number;
    min?: number;
    step?: number;
    value?: string;
}
interface IRef extends HTMLElement {
    dataset: Partial<Record<keyof IInputDataset, string>>;
}
interface IInputConstructor {
    new (ref: IRef): IInput;
}
interface IInput {
    readonly destroy: () => void;
    readonly focus: () => void;
    readonly blur: () => void;
    onChange?: (ev: InputEvent) => void;
    onFocus?: (ev: InputEvent) => void;
    onBlur?: (ev: InputEvent) => void;
    onStartIconClick?: (ev: MouseEvent) => void;
    onEndIconClick?: (ev: MouseEvent) => void;
}
declare class Input implements IInput {
    #private;
    onChange?: (ev: InputEvent) => void;
    onFocus?: (ev: InputEvent) => void;
    onBlur?: (ev: InputEvent) => void;
    onStartIconClick?: (ev: Event) => void;
    onEndIconClick?: (ev: Event) => void;
    constructor(ref: IRef);
    readonly focus: () => void;
    readonly blur: () => void;
    readonly destroy: () => void;
}

export { IHeader, IInput, IInputConstructor, IInputDataset, IModal, IModalConstructor, IRef, ISidebar, ISidebarConstructor, Input, Modal, Sidebar, SidebarButton, SidebarProps };
