import React, { useState } from "react";
import { View, Text, TouchableOpacity ,SafeAreaView,ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native';

const Notifications = ()=> {

    const [spinner, setspinner] = useState(false)
    const navigation = useNavigation();


    return (
        <SafeAreaView>
             <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            marginTop: 30,
                            marginLeft: 10,
                        }}>
                        <Icon name="arrow-circle-left" size={30} color="#41d5fb" />
                    </TouchableOpacity>
                    <Text style={{ marginTop: 20, left: 10, fontWeight: "bold", fontSize: 20 }}>Notifications</Text>
            <ScrollView>
            <TouchableOpacity
            onPress={() => {
                setspinner(true)
            }}
            style={{
                flexDirection: "row",
                left: 15,
                top: 10,
                bottom: 10
            }}>

            {spinner &&
                <Spinner
                    visible={true}
                    color='red'
                    size={70}
                    customIndicator={
                        <View style={{
                            width: "90%",
                            backgroundColor: "white",
                            borderRadius: 5,
                            paddingVertical: 10,
                            paddingHorizontal: 20

                        }}>
                            <Text style={{ marginBottom: 10, fontWeight: "bold", color: "#41d5fb3" }}>Maintainance</Text>
                            <View style={{
                                backgroundColor: "#dde4f4",
                                padding: 10,
                                borderRadius: 5,
                                marginBottom: 10
                            }}>
                                <Text>We regret to inform you that we will have scheduled Maintainance on our App 
                                    on june 15 2022. We apologize for any inconveniences caused
                                </Text>
                            </View>


                            <TouchableOpacity onPress={() => {
                                setspinner(false)
                            }}
                                style={{
                                    alignItems:"center",
                                    justifyContent: "center",
                                    paddingHorizontal: 20,
                                    paddingVertical: 8,
                                    borderRadius: 5,
                                    backgroundColor: "#41d5fb"
                                }}
                            >
                                <Text style={{ color: "white" }}>OKAY</Text>

                            </TouchableOpacity>
                        </View>

                    }
                />
            }

            <Icon name="envelope" size={30} color="#41d5fb" />
            <View style={{
                left: 10,
                borderBottomWidth: 2,
                borderBottomColor: "gray",
                flexDirection: "column",
                marginBottom: 10
            }}>
                <View style={{
                    flexDirection: "row"
                }}>
                    <Text style={{ fontWeight: "bold" }}>Maintainance</Text>
                    <Text style={{ fontSize: 10, left: 50, top: 5 }}>15/5/2022
                        <Text style={{ marginLeft: 5 }}>10:34 am</Text></Text>
                </View>
                <View style={{
                    paddingBottom: 10
                }}>
                    <Text>We regret to inform you that </Text>
                </View>

            </View>
        </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
        
    )
}

export default Notifications;