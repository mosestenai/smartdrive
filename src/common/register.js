import react, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput,SafeAreaView,ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Welcome from "../overview/welcome";
import Login from "./login";

const Register = () => {

    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [cpassword, setcpassword] = useState('');
    const [password, setpassword] = useState('');

    const [hidepass, sethidepass] = useState(true);

    const [showhome, setshowhome] = useState(false);
    const [showlogin, setshowlogin] = useState(false);


    return (
        showhome? <Welcome/>:
        showlogin? <Login/>:
        <SafeAreaView>
             <TouchableOpacity
            onPress={()=>setshowlogin(true)}
             style={{
                marginTop:30,
                marginLeft: 10
            }}>
                <Icon name="arrow-circle-left" size={30} color="#41d5fb" />
            </TouchableOpacity>
            <Text style={{
                marginTop: 30,
                fontWeight: "bold",
                marginLeft: 10,
                fontSize: 25,
                color: "#666362"
            }}>SIGN UP</Text>
            <ScrollView>
            
        <View style={{
            paddingBottom:120
        }}>
           
            <TextInput style={{
                marginTop: 20,
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
                marginTop: 20,
                marginHorizontal: 10,
                padding: 10,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "gray"

            }}
                placeholder="email"
                onChangeText={newText => setemail(newText)}
                defaultValue={email}

            />
             <TextInput style={{
                marginTop: 20,
                marginHorizontal: 10,
                padding: 10,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "gray"

            }}
                placeholder="phone"
                onChangeText={newText => setphone(newText)}
                defaultValue={phone}

            />
            <TextInput style={{
                marginTop: 20,
                marginHorizontal: 10,
                padding: 10,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "gray"

            }}
                placeholder="password"
                onChangeText={newText => setpassword(newText)}
                defaultValue={password}
                secureTextEntry={hidepass}

            />
             <TextInput style={{
                marginTop: 20,
                marginHorizontal: 10,
                padding: 10,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "gray"

            }}
                placeholder="confirm password"
                onChangeText={newText => setcpassword(newText)}
                defaultValue={cpassword}
                secureTextEntry={hidepass}

            />
            <TouchableOpacity
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
            <Text style={{
                color:"#41d5fb",
                textAlign:"center",
                marginTop:20
            }}>Already have an account?</Text>
            <TouchableOpacity
            onPress={()=>setshowlogin(true)}
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



        </View>
            </ScrollView>
        </SafeAreaView>
            
       
    )
}

export default Register;