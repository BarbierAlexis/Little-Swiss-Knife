import React, { Fragment, useContext } from 'react';
import { Container, Card, CardItem, Header, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import CtxTodo from './CtxTodo';


const Todo = (props) => {
  const[todos, setTodos] = useContext(CtxTodo);

  const deleteTodo = () => {
    let newTodos = [...todos];
    newTodos.splice(props.index, 1);
    setTodos(newTodos);
  }

  const deleteButton = () => {
    Toast.show({
      text: "Deleted !",
      buttonText: "Ok",
      duration: 3000
    });

    {deleteTodo()};
  }
 
  return(
    <Fragment>
       <Card>
          <CardItem header bordered>
            <Text>
              {props.title}
              </Text>
          </CardItem>
          <CardItem bordered>
          <Body>
              <Text>
              {props.describ}
              </Text>
          </Body>
          </CardItem>
          <CardItem footer bordered>
            <Button  onPress={deleteButton} bordered success>
              <Icon name='trash' />
            </Button>
          </CardItem>
        </Card>
    </Fragment>
  )
}

export default Todo;