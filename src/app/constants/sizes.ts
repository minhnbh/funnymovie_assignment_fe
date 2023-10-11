export const screenSize = {
  mobile: "576px",
  tablet: "991px",
  desktop: "1200px",
  large: "1600px",
};

export const devices = {
  mobile: `(max-width: ${screenSize.mobile})`,
  tablet: `(min-width: ${screenSize.mobile}) and (max-width: ${screenSize.tablet})`,
  desktop: `(min-width: ${screenSize.tablet}) and (max-width: ${screenSize.large})`,
  large: `(min-width: ${screenSize.large})`,
};
