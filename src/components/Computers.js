/**
 * List computers availability within different libraries
 */

import React from 'react';
import { List, ListItem } from 'material-ui/List';

const Computers = props => {
    const renderAvailability = (availability) => {
        let countAvailable = 0;
        for (let [key, level] of Object.entries(availability)) { // eslint-disable-line no-unused-vars
            countAvailable += level.Available;
        }
        return (
            <p>
              Available computers: <strong>{ countAvailable }</strong>
            </p>
            );
    };

    const renderName = (libraryName) => {
        return <span dangerouslySetInnerHTML={ { __html: libraryName } }></span>;
    };

    const renderList = () => {
        if (props.computers.length) {
            return props.computers.map(library => {
                return <ListItem key={ library.library } primaryText={ renderName(library.library) } secondaryText={ renderAvailability(library.availability) } />;
            });
        }
    };


    return (
        <List className="computers">
          { renderList() }
        </List>
        );
};

Computers.propTypes = {
    computers: React.PropTypes.array
};

export default Computers;