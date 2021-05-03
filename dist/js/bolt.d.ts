declare const iconsNames: string[];

interface ISidebarDataset {
    open?: boolean;
}
interface SidebarButton {
    label: string;
    level: 1 | 2;
    icon?: string;
    name?: string;
    selected?: boolean;
}
interface IHeader {
    icon: string;
    label: string;
}
interface ISidebarContainer extends HTMLElement {
    dataset: Partial<Record<keyof ISidebarDataset, string>>;
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

interface FormControlProps {
    form: HTMLFormElement;
    initialValues: {
        [prop: string]: any;
    };
    validationSchema?: {
        [prop: string]: any;
    };
    autoController?: boolean;
    events?: {
        [name: string]: Omit<IInput, 'destroy' | 'focus' | 'blur'>;
    };
}
interface IFormControlConstructor {
    new (props: FormControlProps): IFormControl;
}
interface IFormControl {
    readonly values: {
        [name: string]: any;
    };
    readonly errors: {
        [name: string]: string;
    };
    readonly cleanFields: () => void;
    readonly fieldsToInitials: () => void;
    readonly destroy: () => void;
    onValidation?: (values: any) => {
        [k: string]: any;
    };
    onChange?: (target: {
        name: string;
        value: string;
    }, values: {
        [prop: string]: any;
    }) => void;
    onError?: (errors: {
        [k: string]: string;
    }) => void;
    onSubmit?: (values: {
        [k: string]: any;
    }) => void;
}
declare class FormControl implements IFormControl {
    #private;
    onValidation?: (values: any) => {
        [k: string]: any;
    };
    onChange?: (target: {
        name: string;
        value: string;
    }, values: {
        [prop: string]: any;
    }) => void;
    onError?: (errors: {
        [k: string]: string;
    }) => void;
    onSubmit?: (values: {
        [k: string]: any;
    }) => void;
    constructor({ form, initialValues, validationSchema, autoController, events }: FormControlProps);
    get values(): {
        [prop: string]: any;
    };
    get errors(): {
        [prop: string]: string;
    };
    readonly cleanFields: () => void;
    readonly fieldsToInitials: () => void;
    readonly destroy: () => void;
}

interface MenuButtonProps {
    container: HTMLElement;
    level: 'first' | 'second' | 'header' | 'footnote';
    label: string;
    variant?: 'primary' | 'secondary';
    icon?: string;
}
interface IMenuButtonConstructor {
    new (props: MenuButtonProps): IMenuButton;
}
interface IMenuButton {
    selected: boolean;
    collapsed: boolean;
    readonly destroy: () => void;
    onClick?: (e: MouseEvent) => void;
    onStartTransition?: () => void;
    onEndTransition?: () => void;
}
declare class MenuButton implements IMenuButton {
    #private;
    onClick?: (e: MouseEvent) => void;
    onStartTransition?: () => void;
    onEndTransition?: () => void;
    constructor({ container, level, icon, label, variant }: MenuButtonProps);
    get selected(): boolean;
    set selected(value: boolean);
    get collapsed(): boolean;
    set collapsed(value: boolean);
    destroy: () => void;
}

export { FormControl, FormControlProps, IFormControl, IFormControlConstructor, IHeader, IInput, IInputConstructor, IInputDataset, IMenuButton, IMenuButtonConstructor, IModal, IModalConstructor, IRef, ISidebar, ISidebarConstructor, ISidebarContainer, ISidebarDataset, Input, MenuButton, MenuButtonProps, Modal, Sidebar, SidebarButton, SidebarProps, iconsNames };
