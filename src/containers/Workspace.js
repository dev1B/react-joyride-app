import React from "react";
import {Container, Row, Col, ListGroup, ListGroupItem, Button} from "reactstrap";
import { connect } from "react-redux";
import BoxWithButtons from "../components/BoxWithButtons/BoxWithButtons";
import ReactJoyride, { STATUS} from "react-joyride";
import WidgetsContainer from "./WidgetsContainer";


class Workspace extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            run: false,
            steps: [
                {
                    content: <h2>Let's begin our journey!</h2>,
                    placement: 'center',
                    locale: { skip: <strong aria-label="skip">SKIP</strong> },
                    target: 'body',
                },
                {
                    content: 'lorem ',
                    placement: 'bottom',
                    styles: {
                        options: {
                            width: 300
                        }
                    },
                    target: '.test',
                    title: 'Our test'
                },
                {
                    content: 'These are our super awesome projects!',
                    placement: 'bottom',
                    styles: {
                        options: {
                            width: 300
                        }
                    },
                    target: '.workspace',
                    title: 'Our workspace'
                },
                {
                    content: 'These are our super awesome projects!',
                    placement: 'bottom',
                    styles: {
                        options: {
                            width: 300
                        }
                    },
                    target: '.BoxWithButtons.step-0',
                    title: 'Our projects'
                },
                {
                    title: 'Our Mission',
                    content: (
                        <div>
                            You can render anything!<br />
                            <h3>Like this H3 title</h3>
                        </div>
                    ),
                    target: '.BoxWithButtons.step-1',
                    placement: 'top'
                },
                {
                    content: (
                        <div>
                            <h3>All about us</h3>
                            <svg
                                width="50px"
                                height="50px"
                                viewBox="0 0 96 96"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid"
                            >
                                <g>
                                    <path
                                        d="M83.2922435,72.3864207 C69.5357835,69.2103145 56.7313553,66.4262214 62.9315626,54.7138297 C81.812194,19.0646376 67.93573,0 48.0030634,0 C27.6743835,0 14.1459311,19.796662 33.0745641,54.7138297 C39.4627778,66.4942237 26.1743334,69.2783168 12.7138832,72.3864207 C0.421472164,75.2265157 -0.0385432192,81.3307198 0.0014581185,92.0030767 L0.0174586536,96.0032105 L95.9806678,96.0032105 L95.9966684,92.1270809 C96.04467,81.3747213 95.628656,75.2385161 83.2922435,72.3864207 Z"
                                        fill="#000000"
                                    />
                                </g>
                            </svg>
                        </div>
                    ),
                    placement: 'left',
                    target: '.BoxWithButtons.step-2',
                },
            ],
            widgets: [
                'First widget',
                'Cras justo odio',
                'Dapibus ac facilisis in',
                'Morbi leo risus',
                'Porta ac consectetur ac',
                'Vestibulum at eros'
            ]
        };
    };

    handleClickStart = e => {
        e.preventDefault();

        this.setState({
            run: true
        });
    };

    handleJoyrideCallback = data => {
        const { status, type } = data;

        if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
            this.setState({ run: false });
        }

        console.groupCollapsed(type);
        console.log(data); //eslint-disable-line no-console
        console.groupEnd();
    };

    render() {
        const { run, steps, widgets } = this.state;

        return (
            <div>
                <h2 className="test">TEST Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, suscipit?</h2>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <div>
                                    <h2>Create guided tours for your apps</h2>
                                    <Button color="danger" onClick={this.handleClickStart}>Start</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className="workspace m-0">Workspace</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-around flex-wrap" md={8}>
                            <Row>
                            {
                                [...new Array(10)].map((value, index) => {
                                    return <Col md={3} className="mb-5"><BoxWithButtons key={index} className={'step-' + index}/></Col>
                                })
                            }
                            </Row>
                        </Col>
                        <Col md={4}>
                            <WidgetsContainer widgets={widgets}/>
                        </Col>
                    </Row>
                </Container>
                <ReactJoyride
                    callback={this.handleJoyrideCallback}
                    continuous
                    run={run}
                    scrollToFirstStep
                    showProgress
                    showSkipButton
                    steps={steps}
                    styles={{
                        options: {
                            zIndex: 10000,
                        }
                    }}
                />
            </div>
        )
    }

}


export default connect(
    null,
    { }
)(Workspace);