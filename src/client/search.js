import react, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image ,StatusBar} from "react-native";
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

StatusBar.setBackgroundColor("#41d5fb")

const Search = () => {

    const [hint, sethint] = useState('');
    
    const navigation = useNavigation();
    const onChangeSearch = query => sethint(query);

    const search = () => {

    }

    return (
        <SafeAreaView>

            <View>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={hint}
                    onIconPress={search}
                    style={{ marginTop: 30, width: "90%", marginHorizontal: 15 }}
                    onSubmitEditing={search}
                />
                <Text style={{
                    marginTop: 20,
                    marginHorizontal: 10,
                    fontWeight: "bold"
                }}>Suggested drivers</Text>
            </View>
            <ScrollView>
                <TouchableOpacity
                onPress={()=>navigation.navigate("viewdriver")}
                    style={{
                        flexDirection: "row",
                        marginHorizontal:10,
                        borderRadius:10,
                        marginTop: 20,
                        backgroundColor: "#41d5fb",
                        padding: 10
                    }}
                >

                    <Image source={require('./../assets/driver3.jpg')} style={{
                        height: 80,
                        width: 80,
                        borderRadius: 50
                    }
                    } />
                    <View style={{flexDirection:"column"}}>
                    <Text style={{
                        color:"white",
                        marginLeft:10,
                        marginTop:10,
                        fontSize:16,
                        fontWeight:"bold"
                    }}>
                        Gael Ankin
                    </Text>
                    <Text style={{
                        color:"white",
                        marginLeft:10,
                        marginTop:5,
                        fontSize:10,
                        fontWeight:"bold"
                    }}>
                        One way driver to Nakuru
                    </Text>
                    </View>
                    <View style={{
                        flexDirection:"column",
                        left:35,
                        marginTop:20,
                    }}>
                        <Text style={{color:"white",fontSize:10}} >Ksh 2000/</Text>
                        <Text style={{color:"white"}}>200km</Text>

                    </View>
                   

                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        marginHorizontal:10,
                        borderRadius:10,
                        marginTop: 20,
                        backgroundColor: "silver",
                        padding: 10
                    }}
                >

                    <Image source={require('./../assets/driver4.jpg')} style={{
                        height: 80,
                        width: 80,
                        borderRadius: 50
                    }
                    } />
                    <View style={{flexDirection:"column"}}>
                    <Text style={{
                        color:"white",
                        marginLeft:10,
                        marginTop:10,
                        fontSize:16,
                        fontWeight:"bold"
                    }}>
                        Victor Ankari
                    </Text>
                    <Text style={{
                        color:"white",
                        marginLeft:10,
                        marginTop:5,
                        fontSize:10,
                        fontWeight:"bold"
                    }}>
                       Any route driver 
                    </Text>
                    </View>
                    <View style={{
                        flexDirection:"column",
                        left:50,
                        marginTop:20,
                    }}>
                        <Text style={{color:"white",fontSize:10}} >Ksh 1000/</Text>
                        <Text style={{color:"white"}}>50km</Text>

                    </View>
                   

                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        marginHorizontal:10,
                        borderRadius:10,
                        marginTop: 20,
                        backgroundColor: "silver",
                        padding: 10
                    }}
                >

                    <Image source={require('./../assets/driver1.jpg')} style={{
                        height: 80,
                        width: 80,
                        borderRadius: 50
                    }
                    } />
                    <View style={{flexDirection:"column"}}>
                    <Text style={{
                        color:"white",
                        marginLeft:10,
                        marginTop:10,
                        fontSize:16,
                        fontWeight:"bold"
                    }}>
                        Jim cryer
                    </Text>
                    <Text style={{
                        color:"white",
                        marginLeft:10,
                        marginTop:5,
                        fontSize:10,
                        fontWeight:"bold"
                    }}>
                        two way driver to Mombasa
                    </Text>
                    </View>
                    <View style={{
                        flexDirection:"column",
                        left:30,
                        marginTop:20,
                    }}>
                        <Text style={{color:"white",fontSize:10}} >Ksh 2000/</Text>
                        <Text style={{color:"white"}}>100km</Text>

                    </View>
                   

                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        marginHorizontal:10,
                        borderRadius:10,
                        marginTop: 20,
                        backgroundColor: "silver",
                        padding: 10,
                        marginBottom:150
                    }}
                >

                    <Image source={require('./../assets/driver4.jpg')} style={{
                        height: 80,
                        width: 80,
                        borderRadius: 50
                    }
                    } />
                    <View style={{flexDirection:"column"}}>
                    <Text style={{
                        color:"white",
                        marginLeft:10,
                        marginTop:10,
                        fontSize:16,
                        fontWeight:"bold"
                    }}>
                        Peter  Mwangi
                    </Text>
                    <Text style={{
                        color:"white",
                        marginLeft:10,
                        marginTop:5,
                        fontSize:10,
                        fontWeight:"bold"
                    }}>
                        two way driver to Nairobi
                    </Text>
                    </View>
                    <View style={{
                        flexDirection:"column",
                        left:35,
                        marginTop:20,
                    }}>
                        <Text style={{color:"white",fontSize:10}} >Ksh 1800/</Text>
                        <Text style={{color:"white"}}>200km</Text>

                    </View>
                   

                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>

    )

}

export default Search;