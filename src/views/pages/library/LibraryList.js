/**
 * Switch between Library list and Computers availability tab
 */

import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import CircularProgress from 'material-ui/CircularProgress';
import axios from 'axios';
import OpeningHours from '../../../components/OpeningHours';
import Computers from '../../../components/Computers';

class LibraryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            computers: [],
            spinner: true,
        };
    }

    componentWillMount() {
        this.setState({
            spinner: true
        });

        axios.get('https://developer.marvel.com/v1/public/characters?apikey=e8bc1d83c06937ea9aad26771deca735').then(response => {
            this.setState({
                locations: response.data.locations,
            });
        }).finally(() => {
            this.setState({
                spinner: false
            });
        });
        axios.get('/data/computers.json').then(response => {
            this.setState({
                computers: response.data,
            });
        }).finally(() => {
            this.setState({
                spinner: false
            });
        });

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
            <div>
              <Tabs style={ { maxWidth: 600 } } value={ this.state.value } onChange={ this.handleChange }>
                <Tab label="Opening Hours" value="locations">
                  <card>
                    <OpeningHours locations={ this.state.locations } router={ this.props.router } />
                  </card>
                </Tab>
                <Tab label="Computers" value="computers">
                  <card>
                    <Computers computers={ this.state.computers } />
                  </card>
                </Tab>
              </Tabs>
              <div style={ { maxWidth: 600 } }>
                { this.renderSpinner() }
              </div>
            </div>
            );
    }
}

LibraryList.propTypes = {
    router: React.PropTypes.object
};

export { LibraryList };