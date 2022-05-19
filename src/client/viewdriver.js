import react from "react";
import { View, Text, StatusBar, ImageBackground, Dimensions, TouchableOpacity, Image,SafeAreaView,ScrollView,Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

StatusBar.setHidden(true)
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
const image = require('./../assets/driver3.jpg')
const phone = "254712345678";

const Viewdriver = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
        <View style={{
            flex: 1
        }}>
            <ImageBackground source={image} resizeMode="cover" style={{
                height: deviceHeight / 3
            }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        marginTop: 20,
                        marginLeft: 10,
                        zIndex:1
                    }}>
                    <Icon name="arrow-circle-left" size={30} color="#41d5fb" />
                </TouchableOpacity>

            </ImageBackground>
            <Image source={require('./../assets/driver4.jpg')}
                style={{
                    position: "absolute",
                    borderRadius: 30,
                    height: 50,
                    width: 50,
                    left: "43%",
                    top: deviceHeight / 5.4,
                    zIndex: 1
                }}
            />
            <View style={{
                position: "absolute",
                backgroundColor: "white",
                width: "80%",
                marginTop: deviceHeight / 4.5,
                marginHorizontal: "10%",
                borderRadius: 20,
                padding: 20
            }}>
                <Text style={{
                    top: 10,
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 20
                }}>Gael Ankin</Text>
                <Text style={{
                    textAlign: "center",
                    marginTop: 10
                }}> <Icon name="location-arrow" size={15} color="#41d5fb" /> Nakuru</Text>
                <Text style={{
                    marginTop: 20,
                    textAlign: "center",
                    color: "#41d5fb",
                    fontWeight: "bold",
                    fontSize: 20
                }}>ksh 2000</Text>
                <Text style={{ textAlign: "center", fontSize: 10 }}>Per 200km</Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ textAlign: "center", fontWeight: "bold", color: "#41d5fb" }}>432 </Text>
                        <Text style={{ color: "gray" }}>Total Trips</Text>
                    </View>
                    <View style={{ flexDirection: "column", marginLeft: "53%" }}>
                        <Text style={{ textAlign: "center", fontWeight: "bold", color: "#41d5fb" }}>3.5 </Text>
                        <Text style={{ color: "gray" }}>Years</Text>
                    </View>

                </View>
            </View>
            </View>
            <ScrollView>
            <View style={{
                marginTop: deviceHeight / 1.6,
                backgroundColor: "white",
                padding: 10
            }}>
                <Text style={{ fontWeight: "bold", color: "black" }}>
                    Licence category:<Text style={{ fontWeight: "bold", color: "gray", fontSize: 10 }}> Category B– Light vehicle (small cars/ mini-bus)</Text>
                </Text>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('./../assets/driver1.jpg')}
                        style={{
                            borderRadius: 10,
                            height: 80,
                            width: 100,
                            margin: 3
                        }}
                    />
                    <Image source={require('./../assets/driver3.jpg')}
                        style={{
                            borderRadius: 10,
                            height: 80,
                            width: 95,
                            margin: 3
                        }}
                    />
                    <Image source={require('./../assets/driver4.jpg')}
                        style={{
                            borderRadius: 10,
                            height: 80,
                            width: 95,
                            margin: 3
                        }}
                    />

                </View>
               
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity 
                     onPress={() => Linking.openURL(`tel:${phone}`)}
                    style={{
                        marginTop:5,
                        marginLeft:"10%",
                        backgroundColor:"#41d5fb",
                        padding:7,
                        borderRadius:15
                    }}>
                        <Icon name="phone" size={15} color="white" />
                    </TouchableOpacity>
                    <Text style={{paddingVertical:8,fontWeight:"bold",color:"gray",paddingHorizontal:5}}>Call</Text>

                    <TouchableOpacity style={{
                        marginTop:5,
                        marginLeft:"40%",
                        backgroundColor:"#41d5fb",
                        padding:7,
                        borderRadius:15
                    }}>
                        <Icon name="envelope" size={15} color="white" />
                    </TouchableOpacity>
                    <Text style={{paddingVertical:8,fontWeight:"bold",color:"gray",paddingHorizontal:5}}>Chat</Text>

                </View>
                <TouchableOpacity
                onPress={()=>navigation.navigate("confirmdriver")}
                style={{
                    backgroundColor:"#41d5fb",
                    top:5,
                    borderRadius:10,
                    alignItems:"center",
                    justifyContent:"center",
                    padding:10

                }}>
                    <Text style={{color:"white"}}>CONFIRM YOUR DRIVER</Text>
                </TouchableOpacity>

               
            </View>
            </ScrollView>

       
       
        </SafeAreaView>
    )
}

export default Viewdriver