import React, { Fragment, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Card, CardItem, Header, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import CtxTodo from './CtxTodo';
import CtxDarkTheme from './CtxDarkTheme';
import { CustomDarkTheme, CustomDefaultTheme } from './Theme';
import { ThemeContext } from 'react-navigation';


const Todo = (props) => {
  const [todos, setTodos] = useContext(CtxTodo);
  const [darkTheme, setDarkTheme] = useContext(CtxDarkTheme);
  const theme = darkTheme ? CustomDarkTheme : CustomDefaultTheme;

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
      textStyle: { color: "#ffffff" },
      buttonStyle: { backgroundColor: "#ff5e5e" }
    });
    {deleteTodo()};
  };

  return (
    <Container style={{...styles.container, backgroundColor: theme.colors.background}}>
      <Text style={{...styles.todoText, color: theme.colors.text,}}>
        {props.title}
      </Text>
      <Icon style={{ color: theme.colors.trashIcon, width: "10%" }} onPress={deleteButton} name="trash" />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    maxHeight: 40,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  todoText: {
    width: "90%",
    marginLeft: 10,
    paddingLeft: 20,
    fontSize: 20
  }
});

export default Todo;