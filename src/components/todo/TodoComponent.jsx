import React, { Component } from 'react';
import moment from 'moment';
import { Form, Formik, Field } from 'formik';

class TodoComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.params.id,
            description : 'Learn forms',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
    }

    render() {
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik>
                        {
                            (props) =>(
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="Description"/>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>TargetDate</label>
                                        <Field className="form-control" type="date" name="TargetDate"/>
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