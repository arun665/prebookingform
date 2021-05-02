import logo from './logo.svg';
import './App.css';
import Header from "./components/header.js";
import Loader from "./components/loader.js";
import {Provider} from "react-redux";
import store from './redux/Store.js';

function App() {
  return (<>
  <Provider store={store}>
  
   <Header/>
</Provider>
</>  );
}

export default App;
