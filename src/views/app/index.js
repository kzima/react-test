import React, { Component } from 'react';
import { connect } from 'react-redux';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Header } from '../../components/header';

// Using "Stateless Functional Components"
export class App extends Component {
  render() {
    return (
      <div className="current-user-profile">
        <MuiThemeProvider muiTheme={ getMuiTheme(lightBaseTheme) }>
          <div>
            <Header router={ this.props.router } />
            { this.props.children }
          </div>
        </MuiThemeProvider>
      </div>
      );
  }
}

const mapStateToProps = function(store) {
  return store;
};

App.propTypes = {
  children: React.PropTypes.object,
  router: React.PropTypes.object,
};


export default connect(mapStateToProps)(App);