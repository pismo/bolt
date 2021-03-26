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

export { IHeader, IModal, IModalConstructor, ISidebar, ISidebarConstructor, Modal, Sidebar, SidebarButton, SidebarProps };
