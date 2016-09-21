import { NavConstants } from '../actions/nav_actions';
import * as _ from 'lodash';

const defaultNav = Object.freeze({
  nav: {}
});

const NavReducer = (state=defaultNav, action) => {
  let newState;
  switch (action.type) {
    case NavConstants.SET_NAV:
      newState = _.merge({}, state, {nav: action.nav});
      return newState;
    default:
      return state;
  }
};

export default NavReducer;
