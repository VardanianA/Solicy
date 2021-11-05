import React, { useState } from 'react';
import '../App.css';

export const MyContext = React.createContext();

const Context = (props) => {
    const [data, setData] = useState(['', '', '']);

    return (
        <MyContext.Provider value={{ data, setData }}>
            <div className="App">
                {props.children}
            </div>
        </MyContext.Provider>
    )
}

export default Context;
