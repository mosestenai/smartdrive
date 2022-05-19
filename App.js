import React, { useEffect ,useState} from "react";
import * as SQLite from 'expo-sqlite';
import HandleRedirection from "./handle";



const db = SQLite.openDatabase('db.Userdbs') // returns Database object


const App = () => {

     const [display, setdisplay] = useState(false);
     
 useEffect(() => {
    CreateTableUser();
    
   
 }, []); 
 
      //function to create table if does not exist
    const CreateTableUser = () =>{
   db.transaction(tx => {
         tx.executeSql(
             'CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT,username TEXT,phone TEXT, type TEXT,longitude TEXT,latitude TEXT)'
         )
        
      setdisplay(true)
     })
}
    


     
     return (
          display?
          <HandleRedirection/>:null
     );
};

export default App;
