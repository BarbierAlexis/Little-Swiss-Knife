import React, { Fragment, useContext } from 'react';
import { Container, FlatList, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View, Image } from 'native-base';
import Todo from './Todo';
import CtxTodo from './CtxTodo';

const Todos = () => {
  const[todos] = useContext(CtxTodo);
  
  return(
    <Fragment>
        {todos.map((todo, index) => {
          return <Todo key={index} title={todo.title} describ={todo.describ} index={index} />
        })}
        {/* <Icon name='arrow-up' /> */}
        <Text>Swipe Up To Add A To Do!</Text>
    </Fragment>
  )
}

export default Todos;