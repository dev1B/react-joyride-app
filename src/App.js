import React, { Component } from 'react';
import './App.css';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import { Container, Row, Col } from "reactstrap";
import MainForm from "./components/MainForm";

class App extends Component {
  render() {
    return (
    <div className="todo-app">
      <Container>
        <Row>
          <Col>
            <h1>Hello =)</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <AddTodo/>
            <VisibilityFilters/>
            <TodoList/>
          </Col>
        </Row>
        <Row>
          <Col>
            <MainForm/>
          </Col>
        </Row>
      </Container>
    </div>
    );
  }
}

export default App;
