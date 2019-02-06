import React from "react";
import { connect } from "react-redux";
import { Button } from 'reactstrap';
import "./BoxWithButtons.css"



const BoxWithButtons = (props) => (
    <div className={'BoxWithButtons p-3 ' + props.className}>
        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur eos eum expedita fugiat illum iste minus quam suscipit vitae! Architecto deserunt dolorem ipsum, magni officiis quia repudiandae tempora. Repellendus!</span></p>
        <div className="d-flex justify-content-end">
            <Button className="mr-1" color="info" outline>Details</Button>
            <Button className="mr-1" color="primary" outline>Edit</Button>
            <Button color="danger" outline>Delete</Button>
        </div>
    </div>

);


export default connect(null)(BoxWithButtons);
