import React, { useContext, useState } from 'react';
import { Container, Form, Item, Input, Header, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { CustomDarkTheme, CustomDefaultTheme } from './Theme';
import CtxDarkTheme from './CtxDarkTheme';
import CtxTodo from './CtxTodo';
import Todo from './Todo';
import TodoModal from './Modal';


const Todos = () => {
  const [todos, setTodos] = useContext(CtxTodo);
  const [darkTheme, setDarkTheme] = useContext(CtxDarkTheme);
  const theme = darkTheme ? CustomDarkTheme : CustomDefaultTheme;


  return (
    <Container style={{...styles.todoPage, backgroundColor: theme.colors.background}}>
      {todos.length > 0 ? 
        <ScrollView style={{...styles.todoList, backgroundColor: theme.colors.background}}>
          {todos.map((todo, index) => {
            return <Todo key={index} title={todo.title} describ={todo.describ} index={index} />
          })}
        </ScrollView> :
        <Container style={{...styles.empty, backgroundColor: theme.colors.background}}>
          <Text style={{...styles.emptyText, color: theme.colors.emptyText}}>You have no todo 😎</Text>
          <Text style={{...styles.emptyText2, color: theme.colors.emptyText2}}>Press the "Add a todo" button to create one</Text>
        </Container>}
      <TodoModal />
    </Container>
  );
};

const styles = StyleSheet.create({
  todoPage: {
    height: "100%",
  },
  todoList: {
    height: "55%",
    maxHeight: "55%",
    marginTop: 30,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "55%",
    maxHeight: "55%",
    marginTop: 30,
  },
  emptyText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  },
  emptyText2: {
    textAlign: "center",
    fontSize: 15
  },
});

export default Todos;