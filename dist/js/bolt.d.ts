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
interface ISidebar {
    destroy: () => void;
}
declare class Sidebar implements ISidebar {
    #private;
    constructor({ container, header, content, footerLabel, onSelected, }: SidebarProps);
    destroy: () => void;
}

export { IHeader, ISidebar, Sidebar, SidebarButton, SidebarProps };
