import React, { Component, useState } from 'react';
import { Container, Root, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { SafeAreaView, FlatList } from 'react-native';
import Todos from './Components/Todos';
import CtxTodo from './Components/CtxTodo';
import FormTodo from './Components/FormTodo';
import Navbar from './Components/Navbar';
import FooterContent from './Components/FooterContent';
import Swiper from 'react-native-swiper';
import Meteo from './Components/Meteo';



function App () {
  const [todos, setTodos] = useState([]);

  return (
    <Root>
      <Container>
        <Navbar />
        <CtxTodo.Provider value={[todos, setTodos]}>
          <Swiper 
          loop={false}
          showsPagination={true}>
            
          <Swiper 
          loop={false}
          showsPagination={true}
          horizontal={false}>
            <SafeAreaView>
              <Todos />
            </SafeAreaView>
            <SafeAreaView>
              <FormTodo />
            </SafeAreaView>
          </Swiper>
            <SafeAreaView>
             <Meteo />
            </SafeAreaView>
          </Swiper>
          
        </CtxTodo.Provider>
      </Container>
    </Root>
  );
}

export default App;
