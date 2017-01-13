import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const Header = (props) => {
  const handleClick = (path) => {
    props.router.push(path);
  }
  return (
    <header className="header">
      <Toolbar className="toolbar">
        <ToolbarGroup>
          <ToolbarTitle className="toolbar-title" text="UQ Library" />
        </ToolbarGroup>
        <ToolbarGroup>
          { props.router.isActive('new') ?
            <RaisedButton label="Back" primary={ true } onClick={ handleClick.bind(this, '/libraries') } /> :
            <RaisedButton label="New Library" primary={ true } onClick={ handleClick.bind(this, '/new') } /> }
        </ToolbarGroup>
      </Toolbar>
    </header>
    );
};

export { Header };
