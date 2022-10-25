import React, {useState} from 'react';

const NameContext = React.createContext({
    activeName:"",
    setActiveName:()=>{}
})



function NameContextProvider(props) {
    const [activeName, setActiveName] = useState('Jem');
    const cartProviderValue = {
        activeName,
        setActiveName
    }
    return (
        <NameContext.Provider value={cartProviderValue}>
            {props.children}
        </NameContext.Provider>
    )
}

export {NameContext, NameContextProvider};