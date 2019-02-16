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
            <Button transparent onPress={e => {
              this.props.moveToScreen("login");
            }}>
              <Icon style={{color : "white"}} name='arrow-back' />
            </Button>
           </View>
           <View style={{
             flex : 0.7,
             justifyContent : "center",
             alignItems : "center"
           }}>
              <Text style={{
                color : "white",
                fontWeight : "bold",
                fontSize : 18
              }}>Cart</Text>
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
                  flex : 0.8,
                  flexDirection : "column",
                  justifyContent : "center",
                  padding : 10,
                  paddingRight : 0
                }}>
                <View style={{
                      flexDirection : "row",
                      flex : 0.33,
                      alignItems : "center"
                    }}>
                   <Text style={{
                     fontSize : 20,
                     fontWeight : "bold"
                   }}>{item.displayName}</Text>
                   </View>
                   <View style={{
                      flexDirection : "row",
                      flex : 0.33,
                      alignItems : "center"
                    }}>
                    <Text style={{
                      fontSize : 18
                    }}>Rs. 40/kg</Text>
                    </View>
                    <View style={{
                      flexDirection : "row",
                      flex : 0.34,
                      alignItems : "center"
                    }}>
                    <View style={{
                      flexDirection : "row",
                      flex : 0.5
                    }}>
                    <Text style={{
                      fontSize : 18,
                      fontWeight : "bold"
                    }}>Rs. 400</Text>
                    </View>
                    <View style={{
                      flexDirection : "row",
                      flex : 0.5,
                      justifyContent : "flex-end"
                    }}>
                    <TouchableHighlight 
                  style={{
                    marginRight : 10
                  }}>
                     <Icon style={{color : "green"}} name="ios-add-circle" />
                  </TouchableHighlight>
                   <Text style={{
                     marginRight : 10
                   }}>0</Text>
                   <TouchableHighlight style={{
                     marginRight : 10
                  }}>
                     <Icon style={{color : "red"}} name='ios-remove-circle' />
                  </TouchableHighlight>
                    </View>
                    </View>
                </View>
                <View style={{
                  position : "absolute",
                  right : 10,
                  top : 0,
                  display : "flex",
                  flexDirection : "column",
                  alignItems : "center",
                  paddingTop : 10
                }}>
                  <TouchableHighlight 
                  style={{}}>
                     <Icon style={{color : "green"}} name="ios-trash" />
                  </TouchableHighlight>
                </View>
            </View>
         </Card>
          ))
        }

        <Card style={{
          marginTop : 20,
          padding : 15
        }}>
          <View style={{
            flexDirection : "row",
            justifyContent : "space-between"
          }}>
            <Text>Apply Coupon</Text>
            <Text style={{
              fontWeight : "bold",
              fontSize : 18
            }}>PRAKRITI50</Text>
          </View>
        </Card>

        <Card style={{
          marginTop : 20,
          padding : 15
        }}>
          <View style={{
            flexDirection : "row",
            justifyContent : "space-between",
            marginBottom : 10
          }}>
            <Text>Summary</Text>
          </View>
          <View style={{
            flexDirection : "row",
            justifyContent : "space-between"
          }}>
            <Text>SUB TOTAL</Text>
            <Text>Rs. 1000</Text>
          </View>
          <View style={{
            flexDirection : "row",
            justifyContent : "space-between"
          }}>
            <Text>DISCOUNT</Text>
            <Text>Rs. 100</Text>
          </View>
          <View style={{
            flexDirection : "row",
            justifyContent : "space-between"
          }}>
            <Text>TOTAL</Text>
            <Text style={{
              fontSize : 18,
              fontWeight : "bold"
            }}>Rs. 900</Text>
          </View>
        </Card>
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
