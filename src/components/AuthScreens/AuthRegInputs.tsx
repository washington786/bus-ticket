import { StyleSheet, Text, View } from "react-native";
import React,{useState} from 'react'
import GlobalInput from "../TextInput/GlobalInput";
import { Button } from "react-native-paper";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import { useNavigation } from "@react-navigation/native";
import { db,auth } from "../../Firebase";
import * as yup from 'yup' 
import { Formik } from 'formik'
const AuthRegInputs = () => {
  const navigation = useNavigation();
  const [isPasswordShow,setPasswordShow]=useState(false)
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const ReviewSchem=yup.object({
      name:yup.string().required().min(2),
      phonenumber:yup.string().matches(phoneRegExp,'Phone number is not valid'),
      email:yup.string().required().min(6),
      password:yup.string().required().min(6),
      // confirmpassword:yup.string().required().min(6).oneOf([yup.ref('password'),null],'password does not match')
  })
  const addUser= async (data)=>{
      try{
        const {uid,email,password,name,phonenumber} =data
await auth.createUserWithEmailAndPassword(
    email.trim().toLowerCase(),password
  ).then(res =>{
     
        db.ref(`/Bususers`).child(res.user.uid).set({
          name:name,
          email:email.trim().toLowerCase(),
          phonenumber:phonenumber,
          uid:res.user.uid
        })
        res.user.sendEmailVerification()
        navigation.navigate('main')
        })
      }
      catch(error){
        if(error.code === 'auth/email-already-in-use'){
          Alert.alert(
            'That email address is already inuse'
          )
        }
        if(error.code === 'auth/invalid-email'){
          Alert.alert(
            'That email address is invalid'
          )
        }
        else{
          Alert.alert(error.code)
        }
        
      }
      
    }

  return (
    <>
      <Formik
        initialValues={{name:'',phonenumber:'',email:'',password:'',}}
        validationSchema={ReviewSchem}
        onSubmit={(values,action)=>{
            action.resetForm()
            addUser(values)
        }}
        >

        {(props)=>(
        <>
      <GlobalInput
        config={{
          placeholder: "Full Names",
          onChangeText:props.handleChange('name'),
          value:props.values.name,
          onBlur:props.handleBlur('name'),
        }}
        customStyle={styles.input}
        icon="account"
        
            
      />
       <Text style={{color:'red',marginTop:-10,marginVertical:10}}>{props.touched.name && props.errors.name}</Text>
      <GlobalInput
        config={{
          placeholder: "Phone number",
          keyboardType:'number-pad',
          onChangeText:props.handleChange('phonenumber'),
             value:props.values.phonenumber,
             onBlur:props.handleBlur('phonenumber')
        }}
        customStyle={styles.input}
        icon="phone" 
      />
      <Text style={{color:'red',marginTop:-15}}>{props.touched.phonenumber && props.errors.phonenumber}</Text>
      <GlobalInput
        config={{
          placeholder: "Email address",
          keyboardType:'email-address',
             onChangeText:props.handleChange('email'),
             value:props.values.email,
             onBlur:props.handleBlur('email'),
        }}
        customStyle={styles.input}
        icon="email"
        
      />
        <Text style={{color:'red',marginTop:-15}}>{props.touched.email && props.errors.email}</Text>
      <GlobalInput
        config={{
          placeholder: "Password",
          onChangeText:props.handleChange('password'),
             value:props.values.password,
             onBlur:props.handleBlur('password'),
        }}
        customStyle={styles.input}
        icon="lock"
        secureTextEntry={isPasswordShow? false :true}
        
      />
        <Text style={{color:'red',marginTop:-15}}>{props.touched.password && props.errors.password}</Text>
      <Button
       onPress={props.handleSubmit}
        color={GlobalColors.primary}
        mode="contained"
        style={styles.btn}
      >
        Register
      </Button>
      </>
      )}</Formik>
      <Button
        onPress={() => navigation.navigate('login')}
        color={GlobalColors.primary}
        mode="outlined"
        style={styles.btn}
      >
        login
      </Button>
    </>
  );
};

export default AuthRegInputs;

const styles = StyleSheet.create({
  input: {
    backgroundColor: GlobalColors.whites.l1,
    borderWidth: 0.2,
    borderColor: GlobalColors.grey.l2,
    marginTop: 12,
  },
  btn: {
    padding: 5,
    marginVertical: 8,
  },
  f: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
