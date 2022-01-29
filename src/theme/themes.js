export const THEMES = {
  LIGHT: "lightTheme",
  DARK: "darkTheme",
};

const COLORS = {
  BLACK: {
    PURE: "#000",
    DARKER: "#292929",
    DARK: "#343434",
    LIGHTER: "#707070",
  },
  GRAY: {
    DARKER: "#414141",
    DARK: "#717171",
    MEDIUM: "#B9B9B9",
    LIGHT: "#E0E0E0",
    LIGHTER: "#F9F9F9",
  },
  WHITE: {
    PURE: "#FFF",
  },
  GREEN: {
    DARK: "#34AC34",
  },
};

const common = {
  spaces: {
    padding: {
      horizontal: "20px",
    },
  },
};

export const lightTheme = {
  type: THEMES.LIGHT,
  colors: {
    body: COLORS.WHITE.PURE,
    card: COLORS.GRAY.LIGHTER,
    toggler: {
      border: COLORS.BLACK.LIGHTER,
      background: COLORS.GRAY.LIGHTER,
      switch: COLORS.BLACK.LIGHTER,
    },
    text: {
      heading: COLORS.BLACK.PURE,
      subtitle: COLORS.BLACK.PURE,
      placeholder: COLORS.BLACK.LIGHTER,
      highlight: COLORS.GREEN.DARK,
    },
    navLink: {
      inactive: COLORS.GRAY.DARK,
      active: COLORS.BLACK.PURE,
    },
    cta: {
      bgColor: COLORS.BLACK.PURE,
    },
  },
  ...common,
};

export const darkTheme = {
  type: THEMES.DARK,
  colors: {
    body: COLORS.BLACK.DARK,
    card: COLORS.GRAY.DARKER,
    toggler: {
      border: COLORS.BLACK.LIGHTER,
      background: COLORS.BLACK.LIGHTER,
      switch: COLORS.WHITE.PURE,
    },
    text: {
      heading: COLORS.GRAY.LIGHTER,
      subtitle: COLORS.GRAY.LIGHT,
      placeholder: COLORS.GRAY.MEDIUM,
      highlight: COLORS.GRAY.LIGHTER,
      navLink: COLORS.GRAY.LIGHT,
    },
    navLink: {
      inactive: COLORS.GRAY.LIGHT,
      active: COLORS.WHITE.PURE,
    },
    cta: {
      bgColor: COLORS.WHITE.PURE,
    },
  },
  ...common,
};
