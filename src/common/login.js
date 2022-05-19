import react, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Welcome from "../overview/welcome";
import Register from "./register";
import Navigation from "../overview/nav";

const Login = () => {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [showhome, setshowhome] = useState(false);
    const [showregister, setshowregister] = useState(false);
    const [shownav, setshownav] = useState(false);
    return (
        shownav?<Navigation/>:
        showhome? <Welcome/>:
        showregister? <Register/>:
        <View>
            <TouchableOpacity
            onPress={()=>setshowhome(true)}
             style={{
                 marginTop:30,
                marginLeft: 10,
               
            }}>
                <Icon name="arrow-circle-left" size={30} color="#41d5fb" />
            </TouchableOpacity>
            <Text style={{
                marginTop: 30,
                fontWeight: "bold",
                marginLeft: 10,
                fontSize: 25,
                color: "#666362"
            }}>SIGN IN</Text>
            <TextInput style={{
                marginTop: 50,
                marginHorizontal: 10,
                padding: 10,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "gray"

            }}
                placeholder="username"
                onChangeText={newText => setusername(newText)}
                defaultValue={username}

            />
            <TextInput style={{
                marginTop: 50,
                marginHorizontal: 10,
                padding: 10,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "gray"

            }}
                placeholder="password"
                onChangeText={newText => setpassword(newText)}
                defaultValue={password}
                secureTextEntry={true}

            />
            <TouchableOpacity
            onPress={()=>setshownav(true)}
                style={{
                    marginTop: 30,
                    marginHorizontal: 10,
                    backgroundColor: "#41d5fb",
                    padding: 10,
                    borderRadius: 15
                }}
            >
                <Text style={{
                    color: "white",
                    textAlign: "center"
                }}>SIGN IN</Text>
            </TouchableOpacity>
            <Text style={{
                color:"#41d5fb",
                textAlign:"center",
                marginTop:20
            }}>Dont have an Account?</Text>
            <TouchableOpacity
            onPress={()=>setshowregister(true)}
                style={{
                    marginTop: 30,
                    marginHorizontal: 10,
                    backgroundColor: "#41d5fb",
                    padding: 10,
                    borderRadius: 15
                }}
            >
                <Text style={{
                    color: "white",
                    textAlign: "center"
                }}>SIGN UP</Text>
            </TouchableOpacity>



        </View>
    )
}

export default Login;