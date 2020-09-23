import React, { Fragment } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


const FooterContent = () => {
  
  return(
    <Fragment>
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Text>Todo List</Text>
            </Button>
            <Button>
              <Text>Add Todo</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </Fragment>
  )
}

export default FooterContent;