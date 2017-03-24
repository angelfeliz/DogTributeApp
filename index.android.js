/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const Images = [
  {
    uri:'https://i.imgur.com/jGkaxEZ.jpg',
    label: 'Father and son'
  },

  {
    uri:'https://i.imgur.com/jI3n2ru.jpg',
    label: 'After ge comes'
  },
  {
    uri:'https://i.imgur.com/3VgmiXl.jpg',
    label: 'He is my love'
  },
  {
    uri:'https://i.imgur.com/aMjm902.jpg',
    label: 'what!'
  },
  {
    uri:'https://i.imgur.com/j0F1jjv.jpg',
    label:'frinds for live'
  },
  {
    uri:'https://i.imgur.com/dDd76Y1.jpg',
    label:'two dogs'
  }
]

export default class JustATributeApp extends Component {
  state = {
      index: 0,
      imageWidth: null
  }

  nextImage(event) {
      const { index, imageWidth } = this.state,
            X = event.nativeEvent.locationX,
            delta = (X < imageWidth/2) ? -1 : +1;
            console.log(delta);
            console.log('------//-------');
      let newIndex = (index + delta) % Images.length;
            console.log(newIndex);
            console.log('-----//--------');
      if (newIndex < 0) {
          newIndex = Images.length - Math.abs(newIndex);
      }

      this.setState({
          index : newIndex
      });
  }

  onImageLayout(event){
       this.setState({
            imageWidth: event.nativeEvent.layout.width
       });
  }
  render() {
    const image = Images[this.state.index];
    return (
       <View style={styles.container}>
         <View style={styles.empty}/>
         <TouchableHighlight onPress={this.nextImage.bind(this)}
                             style={styles.image}>
           <Image source={{uri: image.uri}}
                style={styles.image}
                onLayout={this.onImageLayout.bind(this)}>
           </Image>
         </TouchableHighlight>
         <Text sytle={styles.imagesLabel}>{image.label}</Text>
         <View style={styles.empty}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#abcdef',
  },
  image: {
    flex: 2,
    width: 320,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  imageLabel: {
    textAlign: 'center',
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
    color: 'white',
    width: 320,
  },
  empty:{
    flex: 1
  }
});

AppRegistry.registerComponent('JustATributeApp', () => JustATributeApp);
