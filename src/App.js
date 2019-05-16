import React from 'react'
import './App.css'
import {Provider} from 'react-redux'
import store from './redux/redux-store'
import MainContainer from './components/Main/MainContainer'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <MainContainer/>
            </div>
        </Provider>
    );
}

export default App;
