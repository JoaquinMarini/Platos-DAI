import React, { useContext } from "react"

export const initialState = {
    platoSeleccionado: {},
    menu: []
};

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
        case ActionTypes.SetMenu:
            return {
                ...state,
                menu: [...state.menu, action.value]
            };
        case ActionTypes.DeleteMenu:
                let newMenu = state.menu.filter(plato => plato?.id!=action.value?.id)
                return {
                    ...state,
                    menu: newMenu
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