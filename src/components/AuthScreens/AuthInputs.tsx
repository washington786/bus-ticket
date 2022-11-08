import { StyleSheet, Text, View } from "react-native";
import React ,{useState}from "react";
import GlobalInput from "../TextInput/GlobalInput";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import * as yup from 'yup' 
import { Formik } from 'formik'
import { auth } from "../../Firebase";
import AsyncStorage from '@react-native-async-storage/async-storage'
const AuthInputs = () => {
  const [isPasswordShow,setPasswordShow]=useState(false)
  const navigation = useNavigation();
  const ReviewSchem =yup.object({
    email:yup.string().required().min(6),
    password:yup.string().required().min(6),
})
const Submit = async (data) => {
    console.log('run <<<<<<')
    try {
      const { email, password } = data
      const user = await auth
        .signInWithEmailAndPassword(
          email.trim().toLowerCase(), password
        )
        
        .then(async res => {
            
          try {
              
            const jsonValue = JSON.stringify(res.user)
            await AsyncStorage.setItem("Bususers", res.user.uid)
            navigation.navigate('main')
          } catch (e) {
            // saving error
            console.log('no data')
          }
        })
   
    }
    catch (error) {

      Alert.alert(
        error.name,
        error.message
      )
    }
}

  return (
    <>
     <Formik 
        initialValues={{email:'',password:''}}
        validationSchema={ReviewSchem}
        onSubmit={(values,action)=>{
            action.resetForm()
            Submit(values)
        }}
        >
            {(props)=>(
              <>
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
        onPress={() => navigation.navigate('reset')}
        color={GlobalColors.primary}
        mode="text"
        style={[styles.btn, styles.f]}
      >
        forgot your password?
      </Button>

      <Button
        onPress={props.handleSubmit}
        color={GlobalColors.primary}
        mode="contained"
        style={styles.btn}
      >
        Login
      </Button>
      </>
 )}</Formik>
      <Button
        onPress={() => navigation.navigate('register')}
        color={GlobalColors.primary}
        mode="outlined"
        style={styles.btn}
      >
        create account
      </Button>
    </>
  );
};

export default AuthInputs;

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
