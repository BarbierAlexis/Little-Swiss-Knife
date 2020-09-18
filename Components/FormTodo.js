import React, { Fragment, useState, useContext } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Form, Item, Input, Header, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import CtxTodo from './CtxTodo';


const FormTodo = () => {
  const[todos, setTodos] = useContext(CtxTodo);
  const [form, setForm] = useState ({
    title: '',
    describ: ''
  });

  const addTodo = () => {
    setTodos([...todos, form])
    setForm({
      title: '',
      describ: ''
    })
    Toast.show({
      text: "Added !",
      buttonText: "Ok",
      duration: 3000
    });
  }

  return(
    <Fragment>
        <Form style={style.center}>
          <Item style={style.item}>
            <Input 
            type="text" 
            id="title" 
            value={form.title} 
            onChangeText={(e) => setForm({...form, title: e})}
            placeholder="Titre" />
          </Item>
          <Item last style={style.item}>
            <Input 
            type="text"
            id="describ" 
            value={form.describ} 
            onChangeText={(e) => setForm({...form, describ: e})}
            placeholder="Description" />
          </Item>
          <Button style={style.item} onPress={addTodo} bordered success>
            <Text>Add</Text>
          </Button>
        </Form>
    </Fragment>
  )
}


const style = StyleSheet.create({
  center:{
  },

  item:{
  }
})

export default FormTodo;