import React, { Fragment, useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Container, Card, CardItem, Header, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import CtxTodo from './CtxTodo';


const Todo = (props) => {
  const [todos, setTodos] = useContext(CtxTodo);

  const deleteTodo = () => {
    let newTodos = [...todos];
    newTodos.splice(props.index, 1);
    setTodos(newTodos);
  };

  const deleteButton = () => {
    Toast.show({
      text: "Deleted !",
      buttonText: "Ok",
      duration: 1500,
      textStyle: { color: '#ffffff' },
      buttonStyle: { backgroundColor: "#ff5e5e" }
    });
    {deleteTodo()};
  };

  return (
    <Container style={styles.container}>
      <Text style={styles.todoText}>
        {props.title}
      </Text>
      <Icon style={{ color: "#ff5e5e", width: '10%' }} onPress={deleteButton} name='trash' />
    </Container>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    maxHeight: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  todoText: {
    color: '#999999',
    width: '90%',
    marginLeft: 10,
    fontSize: 20
  }
});

export default Todo;