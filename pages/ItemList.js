import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import { Container, Header, Title, 
  Content, Footer, 
  FooterTab, Button, 
  Left, Right, 
  Body, Icon, 
  Text, 
  Grid,
  Row,
  Col,
  Card
} from 'native-base';

const itemName = [
  { 
    id : "brinjal",
    displayName : "Brinjal",
    description : "",
    price : 40,
    imageUrl : ""
  },
  { 
    id : "brinjal",
    displayName : "Lady's finger",
    description : "",
    price : 40,
    imageUrl : ""
  },
  { 
    id : "brinjal",
    displayName : "Cauliflower",
    description : "",
    price : 40,
    imageUrl : ""
  },
  { 
    id : "brinjal",
    displayName : "Tomato",
    description : "",
    price : 40,
    imageUrl : ""
  },
  { 
    id : "brinjal",
    displayName : "Potato",
    description : "",
    price : 40,
    imageUrl : ""
  },
  { 
    id : "brinjal",
    displayName : "Mushroom",
    description : "",
    price : 40,
    imageUrl : ""
  },
  { 
    id : "brinjal",
    displayName : "Paneer",
    description : "",
    price : 40,
    imageUrl : ""
  }
]

export default class AnimationButton extends Component {

  state = {
    phone : ""
  };

  constructor(props){
    super(props);
  }

  componentDidMount(){}

  render() {
    return (<Container>
      <View style={{
          height : 50,
          backgroundColor : "blue",
          flexDirection : "row"
        }}>
           <View style={{
             flex : 0.15
           }}>
              <Button transparent>
              <Icon style={{color : "white"}} name='arrow-back' />
            </Button>
           </View>
           <View style={{
             flex : 0.65,
             justifyContent : "center",
             alignItems : "center"
           }}>
              <Text style={{
                color : "white",
                fontWeight : "bold",
                fontSize : 16
              }}>Vegetables</Text>
           </View>
           <View style={{
             flex : 0.25,
             flexDirection : "row"
           }}>
           <Button transparent>
              <Icon style={{color : "white"}} name='ios-search' />
            </Button>
              <Button transparent>
              <Icon style={{color : "white"}} name='ios-cart' />
            </Button>
           </View>
        </View>
      <Content style={{
        margin : 10
      }}>
        {
          itemName.map((item, index) => (
         <Card style={{
           height : 100
         }}
         key={index}
         >
            <View style={{
              display : "flex",
              flexDirection : "row",
              flex : 1,
              backgroundColor : "#f1f2f2"
            }}>
                <View style={{
                  flex : 0.2,
                  padding : 10,
                  borderRightWidth : 1,
                  borderRightColor : "#ccc"
                }}>
                  <Image source={{uri : "https://www.ndtv.com/cooks/images/Kashmiri%20Garam%20Masala.jpg"}}
                       style={{flex : 1}} resizeMode = "cover"/>
                </View>
                <View style={{
                  flex : 0.65,
                  flexDirection : "column",
                  justifyContent : "center",
                  paddingLeft : 10
                }}>
                   <Text style={{
                     fontSize : 20,
                     fontWeight : "bold"
                   }}>Vegetable Name</Text>
                    <Text style={{
                      fontSize : 18
                    }}>Rs. 40/kg</Text>
                </View>
                <View style={{
                  display : "flex",
                  flex : 0.2,
                  flexDirection : "column",
                  justifyContent : "center",
                  alignItems : "center"
                }}>
                  <TouchableHighlight style={{
                    marginLeft : 5
                  }}>
                     <Icon style={{color : "green"}} name="ios-add-circle" />
                  </TouchableHighlight>
                   <Text>0</Text>
                   <TouchableHighlight style={{
                    marginLeft : 5
                  }}>
                     <Icon style={{color : "red"}} name='ios-remove-circle' />
                  </TouchableHighlight>
                </View>
            </View>
         </Card>
          ))
        }
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
