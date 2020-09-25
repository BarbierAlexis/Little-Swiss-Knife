import React, { useContext, useState } from 'react';
import { Container, Form, Item, Input, Header, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Todo from './Todo';
import CtxTodo from './CtxTodo';
import TodoModal from './Modal';


const Todos = () => {
  const [todos, setTodos] = useContext(CtxTodo);

  return (
    <Container style={styles.todoPage}>
      {todos.length > 0 ? 
        <ScrollView style={styles.todoList}>
          {todos.map((todo, index) => {
            return <Todo key={index} title={todo.title} describ={todo.describ} index={index} />
          })}
        </ScrollView> :
        <Container style={styles.empty}>
          <Text style={styles.emptyText}>You have no todo 😎</Text>
          <Text style={styles.emptyText2}>Press the "Add a todo" button to create one</Text>
        </Container>}
      <TodoModal />
    </Container>
  )
};

const styles = StyleSheet.create({
  todoPage: {
    height: '100%',
  },
  todoList: {
    height: '55%',
    maxHeight: '55%',
    marginTop: 30,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '55%',
    maxHeight: '55%',
    marginTop: 30,
  },
  emptyText: {
    color: "#999999",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  },
  emptyText2: {
    color: "#c4c4c4",
    textAlign: "center",
    fontSize: 15
  },
});

export default Todos;