import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, Alert, Share, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CommonActions, useNavigation } from '@react-navigation/native';





var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const Account = ({ route }) => {




    const [display, setdisplay] = useState(true);
    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();




    //handling share 
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Smartdrive | A platform to hire driver of your  https://smartdrive',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };


    return (display ?
        <SafeAreaView style={{ backgroundColor: "white", height: deviceHeight }}>
            <View style={{
                width: hundred,
                backgroundColor: "#41d5fb",
            }}>
                <View style={{
                    flexDirection: "row",
                    backgroundColor: "#41d5fb",
                    paddingTop: 30,
                    width: hundred,
                    paddingBottom: 30,
                }}>
                    <TouchableOpacity
                        style={{ width: img, paddingLeft: 10, paddingTop: 30 }}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={{
                            color: "white"
                        }}>
                            Back
                        </Text>
                    </TouchableOpacity>

                    <View style={{ marginTop: 10, width: sixty, alignItems: "center" }}>
                        <Text style={{ color: "white" }}>Profile Management</Text>
                    </View>
                    <TouchableOpacity

                        style={{ width: img, paddingTop: 30 }}
                    >
                        <Text style={{ color: "white" }}>Logout</Text>
                    </TouchableOpacity>


                </View>


                <Image source={require('./../../assets/driver2.jpg')}
                    style={{
                        borderRadius: 30,
                        position: "absolute",
                        height: 50,
                        width: 0.2,
                        marginLeft: "40%",
                        marginTop: 80,
                        zIndex: 1

                    }}
                />
                <View style={{
                    backgroundColor: "white",
                    borderTopLeftRadius: deviceWidth / 2,
                    borderTopRightRadius: deviceWidth / 2,
                    alignItems: "center",
                    paddingTop: 30

                }}>

                </View>
            </View>
            <ScrollView>
                <View>
                    <Text style={{ fontWeight: "bold", padding: 10, color: '#41d5fb' }}>Profile</Text>
                </View>
                <TouchableOpacity

                    style={{
                        flexDirection: "row",
                        marginBottom: 5
                    }}>
                    <Icon name="user-circle" style={{
                        color: '#41d5fb',
                        paddingLeft: 10,
                        width: ten,
                        paddingTop: 10
                    }} size={30} />
                    <Text style={{ paddingTop: 15, paddingLeft: 10, width: eighty }}>Personal Details</Text>
                    <Icon style={{ paddingTop: 15, paddingLeft: 5, color: '#41d5fb' }} name="angle-right" size={20} />

                </TouchableOpacity>
                <TouchableOpacity style={{
                    flexDirection: "row",
                    marginBottom: 5
                }}>
                    <Icon name="car" style={{
                        color: '#41d5fb',
                        paddingLeft: 10,
                        width: ten,
                        paddingTop: 10
                    }} size={30} />
                    <Text style={{ paddingTop: 15, paddingLeft: 10, width: eighty }}>Register as driver</Text>
                    <Icon style={{ paddingTop: 15, paddingLeft: 5, color: '#41d5fb' }} name="angle-right" size={20} />

                </TouchableOpacity>
                <TouchableOpacity

                    style={{
                        flexDirection: "row",
                        marginBottom: 5
                    }}>
                    <Icon name="dollar-sign" style={{
                        color: '#41d5fb',
                        paddingLeft: 15,
                        paddingTop: 10,
                        width: ten
                    }} size={30} />
                    <Text style={{ paddingTop: 15, paddingLeft: 10, width: eighty }}>Payments</Text>
                    <Icon style={{ paddingTop: 15, paddingLeft: 5, color: '#41d5fb' }} name="angle-right" size={20} />

                </TouchableOpacity>

                <View>
                    <Text style={{ fontWeight: "bold", padding: 10, color: '#41d5fb' }}>Security</Text>
                </View>
                <TouchableOpacity

                    style={{
                        flexDirection: "row",
                        marginBottom: 5
                    }}>
                    <Icon name="lock" style={{
                        color: '#41d5fb',
                        paddingLeft: 10,
                        width: ten,
                        paddingTop: 10
                    }} size={30} />
                    <Text style={{ paddingTop: 15, paddingLeft: 10, width: eighty }}>Change Passwords</Text>
                    <Icon style={{ paddingTop: 15, paddingLeft: 5, color: '#41d5fb' }} name="angle-right" size={20} />

                </TouchableOpacity>
                <TouchableOpacity style={{
                    flexDirection: "row",
                    marginBottom: 5
                }}>
                    <Icon name="question-circle" style={{
                        color: '#41d5fb',
                        paddingLeft: 10,
                        width: ten,
                        paddingTop: 10
                    }} size={30} />
                    <Text style={{ paddingTop: 15, paddingLeft: 10, width: eighty }}>Security Questions</Text>
                    <Icon style={{ paddingTop: 15, paddingLeft: 5, color: '#41d5fb' }} name="angle-right" size={20} />

                </TouchableOpacity>
                <View>
                    <Text style={{ fontWeight: "bold", padding: 10, color: '#41d5fb' }}>About us</Text>
                </View>
                <TouchableOpacity style={{
                    flexDirection: "row",
                    marginBottom: 5
                }}>
                    <Icon name="file" style={{
                        color: '#41d5fb',
                        paddingLeft: 10,
                        width: ten,
                        paddingTop: 10
                    }} size={30} />
                    <Text style={{ paddingTop: 15, paddingLeft: 10, width: eighty }}>Terms & Conditions</Text>
                    <Icon style={{ paddingTop: 15, paddingLeft: 5, color: '#41d5fb' }} name="angle-right" size={20} />

                </TouchableOpacity>
                <TouchableOpacity style={{
                    flexDirection: "row",
                    marginBottom: 5
                }}>
                    <Icon name="clipboard-check" style={{
                        color: '#41d5fb',
                        paddingLeft: 10,
                        width: ten,
                        paddingTop: 10
                    }} size={30} />
                    <Text style={{ paddingTop: 15, paddingLeft: 10, width: eighty }}>Privacy policy</Text>
                    <Icon style={{ paddingTop: 15, paddingLeft: 5, color: '#41d5fb' }} name="angle-right" size={20} />

                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        marginBottom: 5
                    }}>
                    <Icon name="twitter" style={{
                        color: '#41d5fb',
                        paddingLeft: 10,
                        width: ten,
                        paddingTop: 10
                    }} size={30} />
                    <Text style={{ paddingTop: 15, paddingLeft: 10, width: eighty }}>Follow us on twitter</Text>
                    <Icon style={{ paddingTop: 15, paddingLeft: 5, color: '#41d5fb' }} name="angle-right" size={20} />

                </TouchableOpacity>
                <TouchableOpacity

                    style={{
                        flexDirection: "row",
                    }}>
                    <Icon name="facebook" style={{
                        color: '#41d5fb',
                        paddingLeft: 10,
                        width: ten,
                        paddingTop: 10
                    }} size={30} />
                    <Text style={{ paddingTop: 15, paddingLeft: 10, width: eighty }}>Like us on Facebook</Text>
                    <Icon style={{ paddingTop: 15, paddingLeft: 5, color: '#41d5fb' }} name="angle-right" size={20} />

                </TouchableOpacity>
                <View>
                    <Text style={{ fontWeight: "bold", padding: 10, color: '#41d5fb' }}>Application</Text>
                </View>
                <TouchableOpacity
                    onPress={onShare}
                    style={{
                        flexDirection: "row",
                        marginBottom: 5
                    }}>
                    <Icon name="share-alt" style={{
                        color: '#41d5fb',
                        paddingLeft: 10,
                        width: ten,
                        paddingTop: 10
                    }} size={30} />
                    <Text style={{ paddingTop: 15, paddingLeft: 10, width: eighty }}>Share with a friend</Text>
                    <Icon style={{ paddingTop: 15, paddingLeft: 5, color: '#41d5fb' }} name="angle-right" size={20} />

                </TouchableOpacity>
                <TouchableOpacity

                    style={{
                        flexDirection: "row",
                        marginBottom: 100,
                    }}>
                    <Icon name="react" style={{
                        color: '#41d5fb',
                        paddingLeft: 10,
                        width: ten,
                        paddingTop: 10
                    }} size={30} />
                    <Text style={{ paddingTop: 15, paddingLeft: 10, width: eighty }}>About our App</Text>
                    <Icon style={{ paddingTop: 15, paddingLeft: 5, color: '#41d5fb' }} name="angle-right" size={20} />

                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
        : <HomeScreen />

    );
}

const sixty = "60%";
const img = "20%";
const percent = "30%";
const hundred = "100%";
const eighty = "75%";
const fifty = "50%";
const forty = "43%";
const ten = "13%";

export default Account;