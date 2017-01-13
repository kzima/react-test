/**
 * List libraries and it's opening hours
 */

import React from 'react';
import { List, ListItem } from 'material-ui/List';

const OpeningHours = props => {
    const handleClick = (lid) => {
        props.router.push(`/libraries/${lid}`);
    };

    const renderDepartments = (departments) => {
        return (
            <p>
              { departments.map(department => {
                    return `${department.name} - ${department.rendered}`;
                }).join(', ') }
            </p>
            );
    };

    const renderList = () => {
        return props.locations.map(library => {
            if (library.category !== 'library') return;
            return <ListItem key={ library.lid }
                     primaryText={ library.name }
                     secondaryText={ renderDepartments(library.departments) }
                     onClick={ handleClick.bind(this, library.lid) } />;
        });
    };


    return (
        <List className="locations">
          { renderList() }
        </List>
        );
};

OpeningHours.propTypes = {
    locations: React.PropTypes.array
};

export default OpeningHours;