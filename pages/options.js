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
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const images = [
    'https://placeimg.com/640/640/nature',
    'https://placeimg.com/640/640/people',
    'https://placeimg.com/640/640/animals',
    'https://placeimg.com/640/640/beer',
  ];

const listOfItems = [
    {
        displayName : "Vegetables",
        id : "vegetables",
        imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYG22uV_l--XZhIMqCAcnquA4HRMozaX6hXI2uMGKWnB9rVUE"
    },
    {
        displayName : "Masala",
        id : "masala",
        imageUrl : "https://www.ndtv.com/cooks/images/Kashmiri%20Garam%20Masala.jpg"
    },
    {
        displayName : "Bakery",
        id : "bakery",
        imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmFB2ACmK943cMM7_qr3AcvIRr6qvub-T73MW7pXwx4Q4e6q-Jw"
    },
    {
        displayName : "Milk",
        id : "milk",
        imageUrl : "https://3.imimg.com/data3/DI/QN/MY-16252014/other-dairy-items-500x500.jpg"
    },
    {
        displayName : "Pizza",
        id : "pizza",
        imageUrl : "https://recipes.timesofindia.com/photo/53110049.cms?imgsize=148092"
    }
]

export default class Options extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff',
      selectedIndex: 0
    };
  }

  onSwipeUp(gestureState) {
    this.setState({myText: 'You swiped up!'});
  }

  onSwipeDown(gestureState) {
    
  }

  onSwipeLeft(gestureState) {
      let selectedIndex = this.state.selectedIndex;
      selectedIndex--;
      if(selectedIndex < 0)
         selectedIndex = 0;
    this.setState({
        myText: 'You swiped left! ' + selectedIndex,
        selectedIndex : selectedIndex
    });
  }

  onSwipeRight(gestureState) {
    let selectedIndex = this.state.selectedIndex;
    selectedIndex++;
      if(selectedIndex === images.length)
         selectedIndex = images.length - 1;
    this.setState({
        myText: 'You swiped right! ' + selectedIndex,
        selectedIndex : selectedIndex
    });
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({backgroundColor: 'red'});
        break;
      case SWIPE_DOWN:
        this.setState({backgroundColor: 'green'});
        break;
      case SWIPE_LEFT:
        this.setState({backgroundColor: 'blue'});
        break;
      case SWIPE_RIGHT:
        this.setState({backgroundColor: 'yellow'});
        break;
    }
  }

  render() {

    return (
    <Container>
        <Content>
        <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        style={{
          height : 200,
          backgroundColor: this.state.backgroundColor
        }}
        >
        <Image source={{ uri : images[this.state.selectedIndex]}} 
          style={{
            flex : 1
          }}
          resizeMode = 'stretch'
        />
        </GestureRecognizer>
        <View style={{
            display : "flex",
            flexDirection : "row",
            flexWrap : "wrap",
            margin : 10
        }}>
          {
            listOfItems.map((item, index) => <TouchableHighlight
            onPress = {e => {
                
            }}
            style={{
                display : "flex",
                flexDirection : "row",
                width: "50%",
                padding : 10
              }}
              key={index}>
               <Card style={{
                   width : "100%",
                   height : 150
               }}>
                  <Image source={{ uri : item.imageUrl}} style={{
                      flex : 1
                  }} resizeMode="stretch" />
                  <View style={{
                      justifyContent : "center",
                      alignItems : "center"
                  }}>
                  <Text style={{
                      fontSize : 18
                  }}>
                      { item.displayName}
                  </Text>
                  </View>
               </Card>
            </TouchableHighlight>)
          }
        </View>
        <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        style={{
          height : 200,
          backgroundColor: this.state.backgroundColor
        }}
        >
        <Image source={{ uri : images[this.state.selectedIndex]}} 
          style={{
            flex : 1
          }}
          resizeMode = 'stretch'
        />
        </GestureRecognizer>
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
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  
