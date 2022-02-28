import {GrammarCheckIcon} from "./svg";
import TabButton from "./TabButton";
import {useContext} from "react";
import {AppContext} from "../utils/app-context";

const axios = require("axios").default;


export default function GrammarChecker(props){

    const {text} = useContext(AppContext);

    const handleClick = () => {
        const options = {
            method: 'GET',
            url: 'https://bing-spell-check2.p.rapidapi.com/spellcheck',
            params: {mode: 'spell', text},
            headers: {
                'x-rapidapi-host': 'bing-spell-check2.p.rapidapi.com',
                'x-rapidapi-key': '8ca3470770msh84552714ddb2840p12c0adjsn217a227460f8'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    return(
        <TabButton onClick={handleClick} icon={<GrammarCheckIcon />} text="Grammar Check" />
    )
}