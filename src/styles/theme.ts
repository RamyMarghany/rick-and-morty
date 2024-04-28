export const LightTheme = {
    colors: {
        background: "#FAFAFA",
        primaryText: "#202020",
        secondaryText: "#616161",
        primary: "#b7daff",
        secondary: "#536DFE",
        error: "#D32F2F"
    },
    spacing: {
        maxWidth: "1200px",
        small: "0.3rem", //5px
        medium: "0.6rem", //10px
        default: "1.25rem", //20px
        large: "2.5rem", //40px
    },
    typography: {
        xxsmall: "10px",
        xsmall: "12px",
        small: "14px",
        default: "16px",
        large: "20px",
        xlarge: "28px",
        xxlarge: "34px",
    },
};
export const DarkTheme = {
    ...LightTheme,
    colors: {
        background: "#2B2B2B",
        primaryText: "#E8E6E3",
        secondaryText: "#B3B3B3",
        primary: "#660bac",
        secondary: "#448AFF",
        error: "#F44336"
    },
};