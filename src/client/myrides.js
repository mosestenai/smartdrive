import react, { useState } from "react";
import { View, Text, StatusBar, ImageBackground, Dimensions, TouchableOpacity, Image, SafeAreaView, ScrollView, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Mydrives = () => {

    const navigation = useNavigation();

    const [upcoming, setupcoming] = useState('#41d5fb');
    const [upcomingborder, setupcomingborder] = useState("#41d5fb");

    const [completed, setcompleted] = useState("gray");
    const [completedborder, setcompletedborder] = useState("white");

    const [showcompleted, setshowcompleted] = useState(false);

    var deviceHeight = Dimensions.get('window').height;
    var deviceWidth = Dimensions.get('window').width;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    const date = mm + '/' + dd + '/' + yyyy;

    return (
        <SafeAreaView>
            <View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            marginTop: 30,
                            marginLeft: 10,
                        }}>
                        <Icon name="arrow-circle-left" size={30} color="#41d5fb" />
                    </TouchableOpacity>
                    <View style={{
                        borderWidth: 1,
                        borderColor: "gray",
                        borderRadius: 15,
                        padding: 5,
                        marginLeft: "40%",
                        marginTop: 30,
                    }}>

                        <Text style={{ fontWeight: "bold" }}>Today - {date}</Text>
                    </View>
                </View>

                <Text style={{ marginTop: 20, left: 10, fontWeight: "bold", fontSize: 20 }}>Your Rides</Text>
                <View style={{
                    flexDirection: "row",
                    marginLeft: 10,
                    paddingTop: 20
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            setupcoming("#41d5fb");
                            setupcomingborder("#41d5fb")
                            setcompleted("gray");
                            setcompletedborder("white")
                            setshowcompleted(false)
                        }}

                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            width: deviceWidth / 2,
                            borderBottomColor: upcomingborder,
                            borderBottomWidth: 2,
                            paddingBottom: 5
                        }}>
                        <Text style={{ fontWeight: "bold", color: upcoming }}>Upcoming</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setupcoming("gray");
                            setupcomingborder("white")
                            setcompleted("#41d5fb");
                            setcompletedborder("#41d5fb")
                            setshowcompleted(true)
                        }}
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            width: deviceWidth / 2,
                            borderBottomColor: completedborder,
                            borderBottomWidth: 2,
                            paddingBottom: 5
                        }}>
                        <Text style={{ fontWeight: "bold", color: completed }}>Completed</Text>
                    </TouchableOpacity>

                </View>

            </View>
            <ScrollView>
                {
                    showcompleted ? <View style={{paddingBottom:200}}>
                         <View style={{
                                marginTop: 10,
                                backgroundColor: "white",
                                borderRadius: 10,
                                marginHorizontal: 10,
                                padding: 10
                            }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: "gray" }}>Yesterday 11:30am</Text>
                                    <Text style={{ marginLeft: "35%", color: "gray" }}>14/05/2022</Text>
                                </View>
                                <View style={{
                                    marginTop: 5,
                                    flexDirection: "row"
                                }}>
                                    <View style={{ flexDirection: "column" }}>
                                        <Icon name="circle" color={"#41d5fb"} style={{ top: 3 }} />
                                        <Text style={{ color: "#41d5fb", textAlign: "center" }}>*{`\n`}*{`\n`}*</Text>
                                        <Text style={{ color: "black", textAlign: "center" }}>*{`\n`}*</Text>
                                        <Icon name="square-full" color={"black"} style={{ top: 0 }} />
                                    </View>
                                    <View style={{ flexDirection: "column", left: 5 }}>
                                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#41d5fb" }}>From</Text>
                                        <Text style={{ color: "gray" }}>Eveready, Nakuru Kenya</Text>
                                        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>To</Text>
                                        <Text style={{ color: "black" }}>Cosite, Nyahururu Kenya</Text>
                                    </View>

                                </View>
                                <View style={{
                                    marginTop: 5,
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

                                    <Text style={{
                                        marginLeft: "5%",
                                        color: "#41d5fb",
                                        fontSize:10

                                    }}>Final fare {`\n`}
                                        <Text> ksh 2000</Text></Text>


                                        <Text style={{
                                        marginLeft: "10%",
                                        color: "#41d5fb",
                                        fontSize:10

                                    }}>You rated {`\n`}
                                        <Text> <Icon name="star" /><Icon name="star" /><Icon name="star" /></Text></Text>

                                </View>


                            </View>
                            <View style={{
                                marginTop: 10,
                                backgroundColor: "white",
                                borderRadius: 10,
                                marginHorizontal: 10,
                                padding: 10
                            }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: "gray" }}>Last week 11:30am</Text>
                                    <Text style={{ marginLeft: "35%", color: "gray" }}>7/05/2022</Text>
                                </View>
                                <View style={{
                                    marginTop: 5,
                                    flexDirection: "row"
                                }}>
                                    <View style={{ flexDirection: "column" }}>
                                        <Icon name="circle" color={"#41d5fb"} style={{ top: 3 }} />
                                        <Text style={{ color: "#41d5fb", textAlign: "center" }}>*{`\n`}*{`\n`}*</Text>
                                        <Text style={{ color: "black", textAlign: "center" }}>*{`\n`}*</Text>
                                        <Icon name="square-full" color={"black"} style={{ top: 0 }} />
                                    </View>
                                    <View style={{ flexDirection: "column", left: 5 }}>
                                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#41d5fb" }}>From</Text>
                                        <Text style={{ color: "gray" }}>Eveready, Nakuru Kenya</Text>
                                        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>To</Text>
                                        <Text style={{ color: "black" }}>Westindies, Eldoret Kenya</Text>
                                    </View>

                                </View>
                                <View style={{
                                    marginTop: 5,
                                    flexDirection: "row"
                                }}>
                                    <Image source={require('./../assets/driver5.jpg')}
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
                                    }}>Victor Ankari {`\n`}
                                        <Text> <Icon name="star" />3.5</Text></Text>

                                    <Text style={{
                                        marginLeft: "5%",
                                        color: "#41d5fb",
                                        fontSize:10

                                    }}>Final fare {`\n`}
                                        <Text> ksh 7000</Text></Text>


                                        <Text style={{
                                        marginLeft: "10%",
                                        color: "#41d5fb",
                                        fontSize:10

                                    }}>You rated {`\n`}
                                        <Text> <Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></Text></Text>

                                </View>


                            </View>
                    </View>
                        :
                        <View>
                            <View style={{
                                marginTop: 10,
                                backgroundColor: "white",
                                borderRadius: 10,
                                marginHorizontal: 10,
                                padding: 10
                            }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: "gray" }}>Today 10:30am</Text>
                                    <Text style={{ marginLeft: "40%", color: "gray" }}>15/05/2022</Text>
                                </View>
                                <View style={{
                                    marginTop: 5,
                                    flexDirection: "row"
                                }}>
                                    <View style={{ flexDirection: "column" }}>
                                        <Icon name="circle" color={"#41d5fb"} style={{ top: 3 }} />
                                        <Text style={{ color: "#41d5fb", textAlign: "center" }}>*{`\n`}*{`\n`}*</Text>
                                        <Text style={{ color: "black", textAlign: "center" }}>*{`\n`}*</Text>
                                        <Icon name="square-full" color={"black"} style={{ top: 0 }} />
                                    </View>
                                    <View style={{ flexDirection: "column", left: 5 }}>
                                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#41d5fb" }}>From</Text>
                                        <Text style={{ color: "gray" }}>Eveready, Nakuru Kenya</Text>
                                        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>To</Text>
                                        <Text style={{ color: "black" }}>Cosite, Nyahururu Kenya</Text>
                                    </View>

                                </View>
                                <View style={{
                                    marginTop: 5,
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

                                    <Text style={{
                                        marginLeft: "5%",
                                        color: "#41d5fb",
                                        fontSize:10

                                    }}>Final fare {`\n`}
                                        <Text> ksh 2000</Text></Text>


                                        <Text style={{
                                        marginLeft: "10%",
                                        color: "#41d5fb",
                                        fontSize:10

                                    }}>ETA {`\n`}
                                        <Text> 13:45pm</Text></Text>

                                </View>


                            </View>
                        </View>
                }

            </ScrollView>
        </SafeAreaView>

    )
}

export default Mydrives;