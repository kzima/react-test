import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Material UI requires us to wrap it with the theme
// see https://github.com/callemall/material-ui/issues/5330
// in our case we just extend the component object with stuff required by muiTheme
export function createTestComponent(TestComponent) {

  class NewComponent extends TestComponent {
    constructor(props) {
      super(props);
    }
    getChildContext() {
      return {
        muiTheme: getMuiTheme(lightBaseTheme),
      };
    };
  }
  NewComponent.childContextTypes = {
    muiTheme: React.PropTypes.object,
  }

  // return extended class
  return NewComponent;
}
