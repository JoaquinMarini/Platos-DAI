import React, { useContext } from "react"

export const initialState = {
    platoSeleccionado: {},
    menu: [],
    price: 0,
    healthScore: 0
};
let veganCounter=0;
let nonVeganCounter=0;

export const ActionTypes = {
    SetPlatoSeleccionado: "SET_PLATO_SELECCIONADO",
    AddMenu: "ADD_MENU",
    DeleteMenu: "DELETE_MENU"
};

export const reducer = (state = {}, action) => {
    switch (action.type){
        case ActionTypes.SetPlatoSeleccionado:
            return{
                ...state,
                platoSeleccionado: action.value
            };
        case ActionTypes.AddMenu:
            console.log(action.value.vegan)
            if(action.value.vegan=="SI"){
                if(veganCounter<2){
                    veganCounter++
                    return {
                        ...state,
                        menu: [...state.menu, action.value],
                        healthScore: state.healthScore + action.value.healthScore,
                        price: state.price + action.value.pricePerServing
                        
                    };
                }else{
                    console.log("No se pueden agregar mas de dos platos veganos")
                }
            }
            else{
                if(nonVeganCounter<2){
                    nonVeganCounter++
                    return {
                        ...state,
                        menu: [...state.menu, action.value],
                        healthScore: state.healthScore + action.value.healthScore,
                        price: state.price + action.value.pricePerServing
                    };
                }else{
                    console.log("No se pueden agregar mas de dos platos no veganos")
                    
                }
            }
            return {
                ...state
            };
        case ActionTypes.DeleteMenu:
            if(action.value.vegan=="SI") veganCounter--
            else nonVeganCounter--
            let newMenu = state.menu.filter(plato => plato?.id!=action.value?.id)
            return {
                ...state,
                menu: [...newMenu],
                healthScore: state.healthScore - action.value.healthScore,
                price: state.price - action.value.pricePerServing
            };
    }
}

export const initialContext = {
    constextState: initialState,
    setContextState: () => {},
};

const Cont = React.createContext(initialContext);

export function ContextProvider({ children, initial = initialState}) {
    const [state, dispatch] = React.useReducer(reducer, initial);

    const contextState = state;
    const setContextState = dispatch;

    return <Cont.Provider value={{contextState, setContextState}}>{children}</Cont.Provider>
}

export const useContextState = () => useContext(Cont)