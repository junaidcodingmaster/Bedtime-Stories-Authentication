import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert , KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor(){
    super()
    this.state={
      email : "",
      password : ""
    }
  }

  showAlert(errorCode){
    switch(errorCode){
      case 'auth/too-many-requests':
        Alert.alert('To many requests\nTry again later')
        this.setState({
          email:"",
          password : ""
        })
        break
      case 'auth/wrong-password':
        Alert.alert('Enter Correct password')
        this.setState({
          password : ""
        })
        break
      default:
        this.setState({
          email:"",
          password : ""
        })
        return Alert.alert('Invalid email and password')
    }
  }

  render(){
    return(
<KeyboardAvoidingView  style={styles.container}>

<View style={styles.subContainer1}>
  <Text style={styles.title}>Bedtime Stories</Text>
  <Image source = { require("../assets/icon.png")} style={styles.image} />
  <TextInput
      placeholder="Enter your E-mail"
      placeholderTextColor = "#ffff"
      onChangeText= {(emailText)=>{
          this.setState({
              email: emailText
          })
      }}
      value={this.state.email}
      style={styles.textInput}
      />
  <TextInput
      placeholder="Enter your Password"
      placeholderTextColor = "#ffff"
      onChangeText= {(passwordText)=>{
          this.setState({
              password: passwordText
          })
      }}
      value={this.state.password}
      style={styles.textInput}
      secureTextEntry = {true}
      />
</View>
<View style={styles.subContainer2}>
  <TouchableOpacity
    style={styles.button}
    onPress = {async()=>{
      var email  = await this.state.email;
      var password = await this.state.password
     firebase.auth().signInWithEmailAndPassword(email, password)
      //firebase.auth().signInWithEmailAndPassword(emailId, password)
      //firebase.auth().signWithEmailAndPassword(email, password)
      //firebase.auth().signInWithEmailAndPassword()
      .then(()=>{
        this.props.navigation.navigate('WriteStory')
        //this.props.navigation.navigate('writeStory')
        //this.props.navigate('WriteStory')
        //this.props.navigate.navigation('WriteStory')
      })
      .catch((error)=> {
        var errorCode = error.code;
        var errorMessage = error.message;
        return this.showAlert(errorCode)
      })
    }}
    >
    <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>

</View>
<Text style={styles.info}>Before login please read README.md for user email id's and Password's . Provided by Junaid</Text>
</KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#171819'
  },
  title:{
    fontWeight:"bold",
    fontSize:43,
    padding:25,
    color:'#ffff'
  },
  image:{
    width:250,
    height:150,
    marginBottom:30,
    borderWidth:5,
    borderColor:'#ffff',
    borderRadius:20
  },
  subContainer1:{
    flex:0.6,
    justifyContent:'center',
    alignItems:'center'
  },
  subContainer2:{
    flex:0.4,
    alignItems:'center',
    alignSelf:"center"
  },
  textInput : {
    width:280,
    height: 50,
    borderWidth:2,
    borderColor:'#ffff',
    padding:10,
    marginBottom:10,
    borderRadius:20,
    color:"#FFFFFF"
  },
  button:{
    width:200,
    height:45,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:'#ffff',
    borderRadius:20,
    marginTop:20
  },
  buttonText:{
    color:'white',
    fontSize:20,
    fontWeight:"bold",
    marginTop:-2
  },
  info:{
    color:"#FFFFFF",
    fontWeight:"bold"
  }
})
