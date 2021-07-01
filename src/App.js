import React, {useEffect}from 'react';
import styled from 'styled-components';
import './App.css';

import { withRouter } from "react-router";
import { Route, Switch, Link } from "react-router-dom";

import {useDispatch} from 'react-redux';
import { loadCoffeeFB } from './redux/modules/coffee';

import CoffeeList from './CoffeeList';
import NotFound from './NotFound';
import Detail from './Detail';
import ListCreate from './ListCreate';
import Button from './Button';
import UpdateNew from './Update';


const App = (props) => {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loadCoffeeFB());
  },[]);
  return (
    <div className="App" style={{backgroundColor:"#BCA88E",height: "100vh",paddingTop:"20px"}}>
      <Container className="container">
        <Link to="/" style={{textDecoration: "none"}}><Title>My CoffeList</Title></Link>
        <Line />
        <Switch>
          <Route path="/" exact component={CoffeeList} />
          <Route path="/detail/:index" component={Detail} />
          <Route path="/ListCreate" component={ListCreate} />
          <Route path="/Update/:index" component={UpdateNew} />
          <Route component={NotFound} />
        </Switch>
      </Container>
      <Button />
    </div>
  )
}

const Container = styled.div`
  max-width: 450px;
  max-height: 70vh;
  background-color: #F6EEE0;
  padding: 16px;
  margin: 20px auto;
  margin-top: 80px;
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0,0,0,0.2);
  overflow: auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #A45C40;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px solid #C38370;
`;


export default withRouter(App);
