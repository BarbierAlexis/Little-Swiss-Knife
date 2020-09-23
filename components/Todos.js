import React, { useContext, useState } from 'react';
import { Container, Form, Item, Input, Header, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { View, StyleSheet } from 'react-native'; 
import Todo from './Todo';
import CtxTodo from './CtxTodo';

const Todos = () => {
  const [todos, setTodos] = useContext(CtxTodo);
  const [form, setForm] = useState({
    title: '',
    describ: ''
  });

  const addTodo = () => {
    setTodos([...todos, form])
    setForm({
      title: '',
      describ: ''
    })
    // Toast.show({
    //   text: "Added !",
    //   buttonText: "Ok",
    //   duration: 3000
    // });
  }

  return (
    <View>
      {todos.map((todo, index) => {
        return <Todo key={index} title={todo.title} describ={todo.describ} index={index} />
      })}
      <Text>Todo List</Text>
      <Form style={styles.center}>
        <Item style={styles.item}>
          <Input
            type="text"
            id="title"
            value={form.title}
            onChangeText={(e) => setForm({ ...form, title: e })}
            placeholder="Titre" />
        </Item>
        <Item last style={styles.item}>
          <Input
            type="text"
            id="describ"
            value={form.describ}
            onChangeText={(e) => setForm({ ...form, describ: e })}
            placeholder="Description" />
        </Item>
        <Button style={styles.item} onPress={addTodo} bordered success>
          <Text>Add</Text>
        </Button>
      </Form>
    </View>
  )
};

const styles = StyleSheet.create({
  center: {

  },
  item: {

  }
});

export default Todos;