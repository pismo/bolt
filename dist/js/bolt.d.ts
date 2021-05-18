declare const iconsNames: string[];

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

interface SidebarButton extends Omit<MenuButtonProps, 'container'> {
    id: number | string;
    selected?: boolean;
}
interface IHeader {
    label: string;
}
interface SidebarProps {
    container: HTMLElement;
    header: IHeader;
    content: SidebarButton[];
    footerLabel: string;
}
interface ISidebarConstructor {
    new (props: SidebarProps): ISidebar;
}
interface ISidebar {
    collapsed: boolean;
    destroy: () => void;
    onSelected?: (id: number | string) => void;
}
declare class Sidebar implements ISidebar {
    #private;
    onSelected?: (id: number | string) => void;
    constructor({ container, header, content, footerLabel }: SidebarProps);
    get collapsed(): boolean;
    set collapsed(value: boolean);
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

interface SnackbarProps {
    autoClose?: boolean;
    timeToClose?: number;
}
interface ISnackbarConstructor {
    new (props?: SnackbarProps): ISnackbar;
}
declare type VariantType = 'success' | 'error';
interface ISnackbar {
    label: string;
    variant: VariantType;
    open: boolean;
    readonly destroy: () => void;
    onClose?: () => void;
    onOpen?: () => void;
    onClosed?: () => void;
}
declare class Snackbar implements ISnackbar {
    #private;
    onClose?: () => void;
    onOpen?: () => void;
    onClosed?: () => void;
    constructor(props?: SnackbarProps);
    get label(): string;
    set label(value: string);
    get variant(): VariantType;
    set variant(value: VariantType);
    get open(): boolean;
    set open(value: boolean);
    readonly destroy: () => void;
}

declare const top: "top";
declare const bottom: "bottom";
declare const right: "right";
declare const left: "left";
declare type BasePlacement = typeof top | typeof bottom | typeof right | typeof left;
declare type VariationPlacement = "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
declare type AutoPlacement = "auto" | "auto-start" | "auto-end";
declare type Placement = AutoPlacement | BasePlacement | VariationPlacement;
declare const beforeRead: "beforeRead";
declare const read: "read";
declare const afterRead: "afterRead";
declare const beforeMain: "beforeMain";
declare const main: "main";
declare const afterMain: "afterMain";
declare const beforeWrite: "beforeWrite";
declare const write: "write";
declare const afterWrite: "afterWrite";
declare type ModifierPhases = typeof beforeRead | typeof read | typeof afterRead | typeof beforeMain | typeof main | typeof afterMain | typeof beforeWrite | typeof write | typeof afterWrite;

declare type Obj = {
    [key: string]: any;
};
declare type VisualViewport = EventTarget & {
    width: number;
    height: number;
    offsetLeft: number;
    offsetTop: number;
    scale: number;
};
declare type Window = {
    innerHeight: number;
    offsetHeight: number;
    innerWidth: number;
    offsetWidth: number;
    pageXOffset: number;
    pageYOffset: number;
    getComputedStyle: typeof getComputedStyle;
    addEventListener(type: any, listener: any, optionsOrUseCapture?: any): void;
    removeEventListener(type: any, listener: any, optionsOrUseCapture?: any): void;
    Element: Element;
    HTMLElement: HTMLElement;
    Node: Node;
    toString(): "[object Window]";
    devicePixelRatio: number;
    visualViewport?: VisualViewport;
    ShadowRoot: ShadowRoot;
};
declare type Rect = {
    width: number;
    height: number;
    x: number;
    y: number;
};
declare type Offsets = {
    y: number;
    x: number;
};
declare type PositioningStrategy = "absolute" | "fixed";
declare type StateRects = {
    reference: Rect;
    popper: Rect;
};
declare type OffsetData = {
    [key in Placement]?: Offsets;
};
declare type State = {
    elements: {
        reference: Element | VirtualElement;
        popper: HTMLElement;
        arrow?: HTMLElement;
    };
    options: OptionsGeneric<any>;
    placement: Placement;
    strategy: PositioningStrategy;
    orderedModifiers: Array<Modifier<any, any>>;
    rects: StateRects;
    scrollParents: {
        reference: Array<Element | Window | VisualViewport>;
        popper: Array<Element | Window | VisualViewport>;
    };
    styles: {
        [key: string]: Partial<CSSStyleDeclaration>;
    };
    attributes: {
        [key: string]: {
            [key: string]: string | boolean;
        };
    };
    modifiersData: {
        arrow?: {
            x?: number;
            y?: number;
            centerOffset: number;
        };
        hide?: {
            isReferenceHidden: boolean;
            hasPopperEscaped: boolean;
            referenceClippingOffsets: SideObject;
            popperEscapeOffsets: SideObject;
        };
        offset?: OffsetData;
        preventOverflow?: Offsets;
        popperOffsets?: Offsets;
        [key: string]: any;
    };
    reset: boolean;
};
declare type Instance = {
    state: State;
    destroy: () => void;
    forceUpdate: () => void;
    update: () => Promise<Partial<State>>;
    setOptions: (options: Partial<OptionsGeneric<any>>) => Promise<Partial<State>>;
};
declare type ModifierArguments<Options extends Obj> = {
    state: State;
    instance: Instance;
    options: Partial<Options>;
    name: string;
};
declare type Modifier<Name, Options> = {
    name: Name;
    enabled: boolean;
    phase: ModifierPhases;
    requires?: Array<string>;
    requiresIfExists?: Array<string>;
    fn: (arg0: ModifierArguments<Options>) => State | void;
    effect?: (arg0: ModifierArguments<Options>) => (() => void) | void;
    options?: Partial<Options>;
    data?: Obj;
};
declare type Options = {
    placement: Placement;
    modifiers: Array<Partial<Modifier<any, any>>>;
    strategy: PositioningStrategy;
    onFirstUpdate?: (arg0: Partial<State>) => void;
};
declare type OptionsGeneric<TModifier> = {
    placement: Placement;
    modifiers: Array<TModifier>;
    strategy: PositioningStrategy;
    onFirstUpdate?: (arg0: Partial<State>) => void;
};
declare type SideObject = {
    top: number;
    left: number;
    right: number;
    bottom: number;
};
declare type VirtualElement = {
    getBoundingClientRect: () => ClientRect | DOMRect;
    contextElement?: Element;
};

interface IMenuContent {
    label: string | {
        first: string;
        second: string;
    };
    id: string | number;
    selected?: boolean;
    disabled?: boolean;
}
interface MenuProps {
    ref: HTMLElement;
    content: IMenuContent[];
    classes: string[];
    popperOptions?: Partial<Options>;
}
interface IMenuConstructor {
    new (props?: MenuProps): IMenu;
}
interface IMenu {
    open: boolean;
    readonly destroy: () => void;
    onClose?: () => void;
    onSelected?: (id: string | number) => void;
}
declare class Menu implements IMenu {
    #private;
    onSelected?: (id: string | number) => void;
    onClose?: () => void;
    constructor({ ref, content, classes, popperOptions }: MenuProps);
    get open(): boolean;
    set open(value: boolean);
    destroy(): void;
}

interface ITopbarLangMenu extends IMenuContent {
    short: string;
}
interface ITopbarUserMenu {
    menu: IMenuContent[];
    user?: {
        email: string;
        name?: string;
    };
}
interface TopbarProps {
    container: HTMLElement;
    title: string;
    langMenu: ITopbarLangMenu[];
    userMenu: ITopbarUserMenu;
    backButton?: boolean;
}
interface ITopbarConstructor {
    new (props: TopbarProps): ITopbar;
}
interface ITopbar {
    readonly destroy: () => void;
    onLangSelected?: (id: string | number) => void;
    onUserSelected?: (id: string | number) => void;
    onBack?: () => void;
}
declare class Topbar implements ITopbar {
    #private;
    onLangSelected?: (id: string | number) => void;
    onUserSelected?: (id: string | number) => void;
    onBack?: () => void;
    constructor({ container, backButton, title, langMenu, userMenu }: TopbarProps);
    destroy(): void;
}

export { FormControl, FormControlProps, IFormControl, IFormControlConstructor, IHeader, IInput, IInputConstructor, IInputDataset, IMenu, IMenuButton, IMenuButtonConstructor, IMenuConstructor, IMenuContent, IModal, IModalConstructor, IRef, ISidebar, ISidebarConstructor, ISnackbar, ISnackbarConstructor, ITopbar, ITopbarConstructor, ITopbarLangMenu, ITopbarUserMenu, Input, Menu, MenuButton, MenuButtonProps, MenuProps, Modal, Sidebar, SidebarButton, SidebarProps, Snackbar, SnackbarProps, Topbar, TopbarProps, VariantType, iconsNames };
