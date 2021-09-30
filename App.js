import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View>
        <View >
          <Text style={{marginTop:100, marginLeft:20}}>Famous Person 2021 Edition</Text>
          <Button title="Jeff Bezos" onPress={()=> Alert.alert("Jeff Bezos, founder, and chairman of American multinational tech company Amazon Inc is the world’s richest and also one of the famous personalities in 2021. Bezos estimated net worth is more than $190 billion as per Forbes Magazine.")}></Button>
        </View>

        <View>
          <Button title="Donald Trump" onPress={()=> Alert.alert("Donald Trump is an American businessman and also former President of the United States of America. Trump, the 45th president was always in the limelight for many of his controversial comments and actions during his tenure. AND THE WORLD BEST MEME TEMPLATE.")}></Button>
        </View>

        <View>
          <Button title="Bill Gates" onPress={()=> Alert.alert("Bill Gates, who is currently a technology advisor of Microsoft is one of the most famous personalities in the world. Gates, founder of tech behemoth Microsoft is a role model for the common man. He is a great philanthropist who is co-chairperson of Bill and Minda gates foundation which is the second-largest charitable foundation in the world with assets of $49.8 billion. Gates cares more about needy people.")}></Button>
        </View>

        <View>
          <Button title="Prakrit Maan" onPress={()=> Alert.alert("WHAT! I mean I made this for you so I shoudl be one of the four most Important People XD")}></Button>
        </View>
      </View>
    );
  }
}
