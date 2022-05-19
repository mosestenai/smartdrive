import react from "react";
import { View, Text, StatusBar, ImageBackground, Dimensions, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

StatusBar.setHidden(true)
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const Confirmdriver = () => {

    const navigation = useNavigation();

    return (
        <View style={{ paddingLeft: 10 }}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    marginTop: 20,

                }}>
                <Icon name="arrow-circle-left" size={30} color="#41d5fb" />
            </TouchableOpacity>
            <Text style={{ color: "green", marginTop: 30, fontSize: 20, fontWeight: "bold" }}>Your Confirmed Driver <Icon name="check" size={15} color="green" /></Text>
            <View style={{
                marginTop: 30,
                flexDirection: "row"
            }}>
                <Image source={require('./../assets/driver3.jpg')}
                    style={{
                        borderRadius: 30,
                        height: 50,
                        width: 50,
                    }}
                />
                <Text style={{
                    fontWeight: "bold",
                    color: "#41d5fb",
                    marginLeft: 5
                }}>Gael Ankin {`\n`}
                    <Text> <Icon name="star" />3.5</Text></Text>
                <TouchableOpacity style={{
                    marginTop: 5,
                    marginLeft: "23%",
                    backgroundColor: "#41d5fb",
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Icon name="envelope" size={15} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    marginTop: 5,
                    marginLeft: 15,
                    backgroundColor: "#41d5fb",
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Icon name="phone" size={15} color="white" />
                </TouchableOpacity>
            </View>

            <View style={{
                marginTop: 60,
                flexDirection: "row"
            }}>
                <View style={{flexDirection:"column"}}>
                    <Icon name="circle" color={"#41d5fb"} style={{top:3}}/>
                    <Text style={{color:"#41d5fb",textAlign:"center"}}>*{`\n`}*{`\n`}*</Text>
                    <Text style={{color:"black",textAlign:"center"}}>*{`\n`}*</Text>
                    <Icon name="square-full" color={"black"} style={{top:0}}/>
                </View>
                <View style={{ flexDirection: "column",left:5 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#41d5fb" }}>From</Text>
                    <Text style={{ color: "gray" }}>Eveready, Nakuru Kenya</Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>To</Text>
                    <Text style={{ color: "black" }}>Cosite, Nyahururu Kenya</Text>
                </View>

            </View>
            <View style={{top:20}}>
                <Text style={{fontWeight:"bold"}}>Your Driver Details</Text>
                <Text style={{color:"gray"}} >
                    Phone: 254712345678{`\n`}
                    Email: driver@gmail.com{`\n`}
                    Licence: Class B
                </Text>
            </View>
            <TouchableOpacity
                onPress={()=>navigation.navigate("confirmdriver")}
                style={{
                    backgroundColor:"#41d5fb",
                    marginTop:40,
                    borderRadius:10,
                    alignItems:"center",
                    justifyContent:"center",
                    padding:10,
                    marginRight:10

                }}>
                    <Text style={{color:"white"}}>TRACK YOUR DRIVER</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Confirmdriver;