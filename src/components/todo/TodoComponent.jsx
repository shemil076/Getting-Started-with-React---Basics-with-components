import React, { Component } from 'react';
import moment from 'moment';
import { Form, Formik, Field, ErrorMessage} from 'formik';

class TodoComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.params.id,
            description : 'Learn forms',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate(values) {
        let errors = {}

        if(!values.description){
            errors.description = 'Enter a description';
        }else if(values.description.length < 5){
            errors.description = 'Enter atleast 5 characters in description';
        }

       if(!moment(values.targetDate).isValid()) {
           errors.targetDate = 'Please enter a valid date';
       }

        return errors;
    }


    onSubmit(values) {
        
    }

    render() {
        let { description, targetDate } = this.state
       // let targetDate = this.state.targetDate
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik 
                        initialValues={{ description, targetDate }}
                        onSubmit={this.onSubmit}
                        validateOnChange={true}
                        validateOnBlur={true}
                        validate={this.validate}
                    >
                        {
                            (props) =>(
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />

                                    <ErrorMessage name="targetDate" component="div"
                                        className="alert alert-warning" />

                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>TargetDate</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button type="submit" className="btn btn-success">Save</button>
                                </Form>
                            )
                                
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default TodoComponent;