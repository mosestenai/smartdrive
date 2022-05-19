import React, { useEffect, useState } from "react";
import * as SQLite from 'expo-sqlite';
import Spinner from 'react-native-loading-spinner-overlay';
import { StatusBar } from "react-native";
import { BallIndicator } from 'react-native-indicators';
import Welcome from "./src/overview/welcome";
import Navigation from "./src/overview/nav";

const db = SQLite.openDatabase('db.Userdbs') // returns Database object

StatusBar.setBackgroundColor("white");


const HandleRedirection = () => {
    const [display, setdisplay] = useState(false);
    const [progress, setprogress] = useState(true);


    useEffect(() => {
        CheckUser;
    }, []);


    const CheckUser =
        db.transaction(tx => {
            // sending 4 arguments in executeSql
            tx.executeSql('SELECT * FROM User', null, // passing sql query and parameters:null
                // success callback which sends two things Transaction object and ResultSet Object
                (txObj, { rows: { _array } }) => {
                    if (!_array[0]?.email) {
                        setdisplay(true)
                        setprogress(false);
                    } else {
                        setdisplay(false);
                        setprogress(false);
                    }
                },
                // failure callback which sends two things Transaction object and Error
                (txObj, error) => console.log('Error ', error)
            ) // end executeSQL
        }) // end transaction





    return (progress ?
        <Spinner
            visible={true}
            color='#41d5fb'
            size={70}
            customIndicator={<BallIndicator color='#41d5fb' />}
        /> :
        display ? <Welcome /> : <Navigation />
    );
};

export default HandleRedirection;
