import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from "react-redux";
import Joyride from 'react-joyride';

class MainForm extends React.Component {
    state = {
        steps: [
            {
                target: '.step-1',
                content: 'This is my awesome feature!',
            },
            {
                target: '.step-2',
                content: 'This another awesome feature!',
            },
            {
                target: '.step-3',
                content: 'This is my awesome feature!',
            },
            {
                target: '.step-4',
                content: 'This another awesome feature!',
            }
        ]
    };


    render() {
        const options = [1,2,3,4,5,6];
        const { steps } = this.state;

        return (
            <Form>
                <FormGroup className="step-1">
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup className="step-2">
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <FormGroup className="step-3">
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        {
                            options.map((item, index) => <option key={index} value={item}>{item}</option>)
                        }
                    </Input>
                </FormGroup>
                <div className="step-4">
                    test
                    <FormGroup tag="fieldset">
                        <legend>Radio Buttons</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Option one is this and that—be sure to include why it's great
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Option two can be something else and selecting it will deselect option one
                            </Label>
                        </FormGroup>
                        <FormGroup check disabled>
                            <Label check>
                                <Input type="radio" name="radio1" disabled />{' '}
                                Option three is disabled
                            </Label>
                        </FormGroup>
                    </FormGroup>
                </div>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Check me out
                    </Label>
                </FormGroup>
                <Button>Submit</Button>

                <Joyride steps={steps}/>
            </Form>
        );
    }
}


export default connect(
    null,
    { }
)(MainForm);