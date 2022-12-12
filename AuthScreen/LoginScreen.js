import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import { auth } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { authChanged } from "../store/action/authActions";
import { useLayoutEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // navigation.replace("ProductDetails");
        navigation.navigate("Product", { screen: "Add your Advertisment" });
        dispatch(authChanged(true));
      }
    });
    return unsubscribe;
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 20 }}
          onPress={() => {
            navigation.navigate("Product");
          }}
        >
          <FontAwesome5 name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  });
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        onAuthStateChanged(auth, (authUser) => {
          if (authUser) {
            navigation.navigate("Product", { screen: "Add your Advertisment" });
            dispatch(authChanged(true));
          }
        });
      })
      .catch((error) => alert(error));
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.Conatiner}>
      <Text style={styles.headText}>
        Login Your{" "}
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#F0851B" }}>
          Molen
        </Text>{" "}
        Account
      </Text>
      <Image
        source={{
          uri: "http://www.seo-ar.net/wp-content/uploads/2015/08/%D8%A7%D9%84%D8%AF%D9%81%D8%B9-%D8%AD%D8%B3%D8%A8-%D8%A7%D9%84%D9%86%D9%82%D8%B1%D8%A9.jpg",
        }}
        style={styles.img}
      />
      <TextInput
        style={{
          ...styles.Search,
          backgroundColor: "white",
          color: "black",
          borderRadius: 10,
          margin: 20,
        }}
        value={email}
        type="email"
        autoFocus
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter Your Email"
        placeholderTextColor="grey"
      />
      <TextInput
        style={{
          ...styles.Search,
          backgroundColor: "white",
          color: "black",
          borderRadius: 10,
          margin: 10,
        }}
        value={password}
        secureTextEntry
        type="password"
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter Your Password"
        placeholderTextColor="grey"
      />
      <View style={styles.btn}>
        <View style={{ margin: 10, width: 200 }}>
          <Button title="Login" onPress={signIn} color="#F0851B" />
        </View>
        <View style={{ margin: 10, width: 220 }}>
          <Button
            title="Register user"
            color="#F0851B"
            onPress={() => {
              navigation.navigate("RegisterScreen");
            }}
          />
        </View>
        <View style={{ margin: 10, width: 230 }}>
          <Button
            title="Register for Compony"
            color="#F0851B"
            onPress={() => {
              navigation.navigate("RegisterScreencomp");
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  Conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  Search: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 15,
    width: 300,
  },
  img: {
    width: 250,
    height: 150,
    borderRadius: 60,
  },
  headText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  btn: {
    flexDirection: "column",
  },
});
