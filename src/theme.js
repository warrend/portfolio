import githubIcon from "images/github-icon.svg";
import linkedinIcon from "images/linkedin-icon.svg";
import codepenIcon from "images/codepen-icon.svg";
import externalIcon from "images/external-icon.svg";

const COLORS = {
  primary: "hsl(200, 90%, 50%)",
  font: "hsl(0, 0%, 7%)",
  lightFont: "hsl(0, 0%, 60%)",
};

const TYPOGRAPHY = {
  mainTitle: `600 24px Inter`,
  subtitle: `500 18x Inter`,
  body: `400 14px Inter`,
  small: `500 10px Inter`,
};

const SPACING = {
  tiny: "4px",
  xSmall: "8px",
  small: "12px",
  normal: "16px",
  large: "24px",
  xLarge: "32px",
  giant: "48px",
  xGiant: "64px",
  huge: "96px",
  xHuge: "128px",
  jumbo: "192px",
  xJumbo: "256px",
};

const SIZES = {
  input: "52px",
  borderRadius: "25px",
  pill: "25px",
  borderRadiusSmall: "15px",
};

const DEVICE = {
  mobileS: `(min-width: 320px)`,
  mobileM: `(min-width: 375px)`,
  mobileL: `(min-width: 425px)`,
  tablet: `(min-width: 768px)`,
  laptop: `(min-width: 1024px)`,
  laptopL: `(min-width: 1440px)`,
  desktop: `(min-width: 2560px)`,
  desktopL: `(min-width: 2560px)`,
};
export default {
  colors: COLORS,
  spacing: SPACING,
  sizes: SIZES,
  device: DEVICE,
  typography: TYPOGRAPHY,
  images: {
    githubIcon,
    linkedinIcon,
    codepenIcon,
    externalIcon,
  },
};
