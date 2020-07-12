import { createReducer } from '@reduxjs/toolkit';
import themeActions from './themeActions';

const themeReducer = createReducer(true, {
  [themeActions.changeTheme]: state => {
    console.log('state', state);
    return !state;
  },
});

export default themeReducer;
