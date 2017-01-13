/**
 * Library details page
 */

import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';
import { Link } from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';
import axios from 'axios';

class LibraryDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: null,
            spinner: true,
        };
    }

    componentWillMount() {
        this.setState({
            spinner: true
        });
        // loads to quickly, wait 1s
        setTimeout(() => {
            // we load data in purpose to update user with recent data
            // this also allows for deep linking 
            axios.get('/data/library_hours.json').then(response => {
                this.setState({
                    location: response.data.locations.find(item => {
                        return item.lid === Number(this.props.params.lid);
                    })
                });
            }).finally(() => {
                this.setState({
                    spinner: false
                });
            });
        }, 1000);
    }

    renderDepartments(departments) {
        return (
            <p>
              { departments.map(department => {
                    return `${department.name} - ${department.rendered}`;
                }).join(', ') }
            </p>
            );
    }

    renderDetails() {
        if (!this.state.location) {
            return;
        }
        const {name, times} = this.state.location;
        const isOpen = times.currently_open ? 'open' : 'closed';
        return (
            <div>
              <p>
                <em>Welcome to { name }</em>
              </p>
              <p>
                We are currently <span className={ isOpen }>{ isOpen }.</span>
              </p>
              <p>
                <Link to={ `/libraries` }> Back
                </Link>
              </p>
            </div>
            );
    }

    renderSpinner() {
        if (this.state.spinner) {
            return (<div className="row center">
                      <CircularProgress size={ 60 } thickness={ 1 } className="spinner flex-0" />
                    </div>);
        }
    }

    render() {
        return (
            <Card>
              <CardText className="details">
                { this.renderDetails() }
              </CardText>
              <CardText>
                { this.renderSpinner() }
              </CardText>
            </Card>
            );
    }
}

LibraryDetail.propTypes = {
    params: React.PropTypes.object
};

export { LibraryDetail };