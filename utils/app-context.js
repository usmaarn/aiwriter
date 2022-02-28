import React from "react";


export const AppContext = React.createContext();

export default class AppContextProvider extends React.Component {

    constructor(props){
        super(props);
        this.state = {openModal: false, text: '',}
    }

    setText = (data) => this.setState({text: data});

    render() {
        return(
            <AppContext.Provider value={{
                ...this.state,
                setText: this.setText,
            }}>

                {this.props.children}

            </AppContext.Provider>
        )
    }

}