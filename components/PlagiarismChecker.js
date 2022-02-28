import {useContext} from "react";
import {AppContext} from "../utils/app-context";
import {PlagiarismCheckIcon} from "./svg";
import TabButton from "./TabButton";
import displayResult from "../utils/displayResult";
import axios from "axios";


export default function PlagiarismChecker(props){

    const {text} = useContext(AppContext);

    const handleClick = () => {

        if(text.length < 20)
            return alert('please enter at least 20 characters');

        else if (text.length > 1500)
            return alert('maximum of 1500 characters allowed');

        const formData = new FormData();
        formData.append('key', '48fb83fa9be9d9b3542a4d4039762fbe');
        formData.append('data', text);

        const url = 'https://www.check-plagiarism.com/apis/checkPlag';
        axios.post(url, formData)
            .then(response => {
                displayResult(plagCheckerResult(response.data))
                console.log(response)
            })
            .catch(error => console.log("an Error occurred:", error.response));
    }

    return(
        <TabButton onClick={handleClick} icon={<PlagiarismCheckIcon />} text="Plagiarism Check" />
    )

}

function plagCheckerResult(data){

    return(
        <div className="absolute text-black top-0 left-0 w-screen h-screen bg-gray-100" id="modalResult">
            <div className="wrapper">
                <h1 className="text-3xl font-bold">Plagiarism Result</h1>
                <h2>Hello World</h2>
            </div>
        </div>
    )
}