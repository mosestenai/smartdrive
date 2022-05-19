import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, StatusBar, Dimensions, TouchableOpacity,LogBox } from 'react-native';
import Login from '../common/login';
import Register from '../common/register';

LogBox.ignoreAllLogs(true)


var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const Welcome = () => {

    const image = require('./../assets/driver5.jpg')

    const [showlogin, setshowlogin] = useState(false);
    const [showregister, setshowregister] = useState(false);

    return (
        showlogin? <Login/>:
        showregister? <Register/>:
        <View style={{ flex: 1 }}>
            <StatusBar hidden />
            <ImageBackground source={image} resizeMode="cover" style={{
                flex: 1,
            }}>
                <View
                    style={{
                        flex: 1,
                        marginTop: deviceHeight / 2,
                    }}>
                    <Text style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 30,
                        fontWeight: "bold",
                    }}>Welcome!
                    </Text>
                    <Text style={{
                        color: "#41d5fb",
                        fontSize: 15,
                        textAlign: "center",
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                    }}>
                        Find driver with fare as per your pocket budget
                        and take a ride as your choice of destination

                    </Text>

                    <TouchableOpacity
                    onPress={()=>setshowlogin(true)}
                        style={{
                            marginTop: 20,
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
                    <TouchableOpacity
                    onPress={()=>setshowregister(true)}
                        style={{
                            marginTop: 20,
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

            </ImageBackground>
        </View>
    )
}

export default Welcome;