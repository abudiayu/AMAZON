import "./index.css"
import './App.css';
import Routing from "./Router";
import { auth } from "./Utility/firebase";
import { Type } from "./Utility/action.type";
import { useContext, useEffect } from "react";
import { DataContext } from "./components/DataProvider/DataProvider";

function App() {

// sign OUt Functionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

  const [{user},dispatch] = useContext(DataContext);
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:Type.SET_USER,
          user:authUser,
        });
      }else{
        dispatch({
          type:Type.SET_USER,
          user:null,
        });
      }
    })
  }, []);
    

  return (
    <>
      <Routing/>
    </>
  );
}

export default App;
