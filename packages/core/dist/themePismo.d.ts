interface Pallete {
    primary: Array<string>;
    secondary: Array<string>;
}
export interface ThemeInterface {
    palette: Pallete;
}
declare const theme: {
    palette: {
        primary: string[];
        secondary: string[];
    };
};
export default theme;
