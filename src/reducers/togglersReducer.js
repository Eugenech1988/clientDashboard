import {
  SIDEBAR_TOGGLE
} from 'constans/togglers';

const initialState = {
  isSidebarOpened: false
};

export const togglers = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_TOGGLE:
      return {
        ...state,
        isSidebarOpened: !state.isSidebarOpened
      };
    default:
      return state;
  }
};

export default togglers;
