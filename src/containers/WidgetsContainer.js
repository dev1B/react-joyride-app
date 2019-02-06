import React from "react";
import { connect } from "react-redux";
import {ListGroup, ListGroupItem} from "reactstrap";


const WidgetsContainer = ({ widgets }) => (
    <ListGroup>
        {widgets && widgets.length
            ? widgets.map((value, index) => {
                return <ListGroupItem key={index}>{value}</ListGroupItem>;
            })
            : "No widgets!"}
    </ListGroup>
);

export default connect()(WidgetsContainer);
