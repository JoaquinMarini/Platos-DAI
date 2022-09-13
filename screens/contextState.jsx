import React, { Component, useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, InlineImage, TouchableOpacity, TextInput, Button, Alert} from 'react-native';

//FIJARSE BIEN LOS EXPORTS!!!!!!!!!!
/*
const contextState = ({ navigation }) => {

    const initialState = {
        loading:true,
        user:{token: 'a'}
    }




    const ActionTypes = {
        setUser: 'SET_USER'
    }



    const reducer = (state = {}, action) => {
           switch(action.type){
            case ActionTypes.setUser:
                return {
                    ...state, 
                    user: action.value,
                }
           
           default: return state;
                }
    }

}

    const initialContext = {
        contextState: initialState,
        setContextState: () => {}
    };




const Cont = React.createContext(initialContext);

    function ContextProvider ({children, initial = initialState}){
        const [state,dispatch] =React.useReducer=(reducer,initial);

        const contextState = state;
        const setContextState = dispatch;

        return <Cont.Provider  value={{contextState, setContextState}} > {children} </Cont.Provider>
    }
export const useContextState = () => useContext(cont);



export default contextState;
*/