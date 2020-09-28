import React, { useState, useContext } from 'react';
import { Alert, Modal, StyleSheet, TouchableHighlight, View } from 'react-native';
import { Container, Form, Item, Input, Header, Title, Toast, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import CtxTodo from './CtxTodo';

const TodoModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [todos, setTodos] = useContext(CtxTodo);
  const [form, setForm] = useState({
    title: ""
  });

  const addTodoClose = () => {
    setTodos([...todos, form])
    setForm({
      title: ""
    })
    setModalVisible(!modalVisible)
  };

  const addTodo = () => {
    setTodos([...todos, form])
    setForm({
      title: ""
    })
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Container style={styles.buttonContainer}>
              <Text style={styles.new}>New Todo</Text>
              <TouchableHighlight style={{ ...styles.openButton, backgroundColor: "#ffffff", margin: 0, width:"15%", padding: 0 }}  onPress={() => {  setModalVisible(!modalVisible);  }}>
                <Text style={styles.closeText}>X</Text>
              </TouchableHighlight>
            </Container>
            <Form style={styles.form}>
              <Item>
                <Input
                  type="text"
                  id="title"
                  value={form.title}
                  onChangeText={(e) => setForm({ ...form, title: e })}
                  placeholder="Title"
                  placeholderTextColor="#999999" />
              </Item>
              <TouchableHighlight style={{ ...styles.openButton, marginTop: 50 }} onPress={addTodo}>
                <Text style={styles.openText}>Add & Create New</Text>
              </TouchableHighlight>
              <TouchableHighlight style={{ ...styles.openButton, marginTop: 20 }} onPress={addTodoClose}>
                <Text style={styles.openText}>Add & Close</Text>
              </TouchableHighlight>
            </Form>
          </View>
        </View>
      </Modal>
      <TouchableHighlight style={styles.openButton} onPress={() => { setModalVisible(true); }}>
        <Text style={styles.openText}>Add a todo !</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: "25%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    borderRadius: 50,
    marginTop: 10
  },
  form: {
    width: "90%",
    height: "75%"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    height: "50%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#ff5e5e",
    borderRadius: 20,
    padding: 10,
    margin: 10,
    elevation: 2
  },
  new: {
    width: "80%", 
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 23,
    paddingLeft: 35,
    color:"#243642"
  },
  closeText: {
    color: "#999999",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  },
  openText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default TodoModal;