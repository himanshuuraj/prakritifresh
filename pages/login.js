import React, {Component} from 'react';
import {
  Platform,
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';
import Wallpaper from './../components/loginScreen/Wallpaper';
import { TextField } from 'react-native-material-textfield';

export default class AnimationButton extends Component {

  state = {
    phone : ""
  };

  constructor(props){
    super(props);
  }

  componentDidMount(){
    let {height, width} = Dimensions.get('window');
    this.setState({
      height : height - 20, 
      width : width
    });
  }

  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior={Platform.select({android: "padding", ios: 'padding'})}
         enabled>
      <Wallpaper>
        <View style={{
          height : this.state.height
        }}>
           <View style={{
             display : "flex",
           flex : 1
        }}>
          <View style={{
            flex : 0.1
          }}>

          </View>
          <View style={{
            flex : 0.2,
            display: "flex",
            justifyContent: "center",
            alignItems : "center"
          }}>
            <Image source={require("./../images/logo.png")} style={{
              flex : 1
            }}
            resizeMode = 'contain'
            />
          </View>
          <View style={{
            flex : 0.05,
            justifyContent : "center",
            alignItems : "center",
            marginBottom : 10
          }}>
            <Text style={{
              fontSize : 24
            }}>PRAKRITI FRESH</Text>
          </View>
          <View style={{
            flex : 0.45,
            marginLeft: "5%",
            width : "90%",
            borderWidth : 1,
            borderColor : "white",
            borderRadius : 10,
            paddingLeft : "5%",
            paddingRight : "5%",
            paddingBottom : 0,
            paddingTop : 0
          }}>
              <View style={{
                flex : 0.3
              }}>
              <TextField
                label='Phone number'
                value={this.state.phone}
                tintColor="rgb(0, 0, 0)"
                baseColor="rgb(0, 0, 0)"
                onChangeText={ (phone) => this.setState({ phone }) }
              />
              </View>
              <View style={{
                flex : 0.3
              }}>
              <TextField
                label='Password'
                value={this.state.phone}
                tintColor="rgb(0, 0, 0)"
                baseColor="rgb(0, 0, 0)"
                onChangeText={ (phone) => this.setState({ phone }) }
              />
              </View>
              <View style={{
                flex : 0.2,
                justifyContent : "center",
                alignItems : "center"
              }}>
                <TouchableOpacity
                  onPress={e => {
                    this.props.moveToScreen("options");
                  }}
                  style={{
                    padding : 10,
                    justifyContent : "center",
                    alignItems : "center",
                    backgroundColor : "green",
                    borderRadius : 5,
                    width : "100%"
                  }}
                >
                  <Text style={{
                    fontSize : 18,
                    color : "white"
                  }}>Login</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{
                flex : 0.2,
                justifyContent : "center",
                alignItems : "center"
              }}>
                  <Text style={{
                    color : "black"
                  }}>Sign Up</Text>
              </TouchableOpacity>
          </View>
          <View style={{
            flex : 0.2
          }}>
            
          </View>
        </View>
        </View> 
      </Wallpaper>
      </KeyboardAvoidingView>
      </ScrollView>
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
