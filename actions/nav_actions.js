export const NavConstants = {
  SET_NAV: "SET_NAV"
};

export const setNav = (nav) => ({
  type: NavConstants.SET_NAV,
  nav
});
