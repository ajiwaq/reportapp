import React, {Component} from 'react';
import {Footer, FooterTab, Button, Text,} from 'native-base';


export default class AppFooter extends Component{
  render(){
    return(
      <Footer>
          <FooterTab>
            <Button full>
              <Text>Commercial Broiler Farmer</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
