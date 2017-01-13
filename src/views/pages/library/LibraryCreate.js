/**
 * Create new Library
 */

import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import CircularProgress from 'material-ui/CircularProgress';
import { FormsySelect, FormsyText, } from 'formsy-material-ui/lib';
import Snackbar from 'material-ui/Snackbar';
import Formsy from 'formsy-react';
import { Card } from 'material-ui/Card';

class LibraryCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            library: null,
            canSubmit: false,
            submitted: false,
        };
        this.errorMessages = {
            numericError: "Please provide a number",
        };
    }

    enableButton() {
        this.setState({
            canSubmit: true,
        });
    }

    disableButton() {
        this.setState({
            canSubmit: false,
        });
    }

    submitForm() {
        this.setState({
            submitted: true,
        });
    }

    notifyFormError(data) {
        console.error('Form error:', data); // eslint-disable-line no-console
    }

    handleRequestClose() {
        this.setState({
            submitted: false,
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
        const {numericError} = this.errorMessages;
        return (
            <Card style={ { padding: 40 } }>
              <Formsy.Form onValid={ this.enableButton.bind(this) }
                onInvalid={ this.disableButton.bind(this) }
                onValidSubmit={ this.submitForm.bind(this) }
                onInvalidSubmit={ this.notifyFormError.bind(this) }>
                <FormsyText name="lid"
                  validations="isNumeric"
                  validationError={ numericError }
                  required
                  hintText="e.g. 1234"
                  floatingLabelText="Library Id" />
                <br/>
                <FormsyText name="shortName"
                  validations="maxLength:5"
                  validationErrors={ { maxLength: 'Max 5 characters allowed' } }
                  required
                  hintText="e.g. Arch Music"
                  floatingLabelText="Library Short Name" />
                <br/>
                <FormsyText name="name"
                  validations="maxLength:50"
                  validationErrors={ { maxLength: 'Max 50 characters allowed' } }
                  required
                  hintText="e.g. rchitecture & Music Library"
                  floatingLabelText="LibraryName" />
                <br/>
                <FormsySelect name="campus" required floatingLabelText="campus">
                  <MenuItem value={ 'st-lucia' } primaryText="St Lucia" />
                  <MenuItem value={ 'herston' } primaryText="Herston" />
                  <MenuItem value={ 'bundaberg' } primaryText="Bundaberg" />
                  <MenuItem value={ 'pace' } primaryText="PACE" />
                  <MenuItem value={ 'mater' } primaryText="Mater" />
                </FormsySelect>
                <br/>
                <br/>
                <RaisedButton type="submit" label="Submit" disabled={ !this.state.canSubmit } />
              </Formsy.Form>
              <Snackbar open={ this.state.submitted }
                message="New Library has been saved."
                autoHideDuration={ 4000 }
                onRequestClose={ this.handleRequestClose.bind(this) } />
            </Card>
            );
    }
}

export { LibraryCreate };