import ReactDOM from "react-dom";
import {Modal, useMantineTheme} from "@mantine/core";
import {useState} from "react";

function CustomModal(props){

    const theme = useMantineTheme();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false)
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(document.getElementById('modalRoot'))
        }, 2000)
    }

    return(
        <Modal
            opened={open}
            onClose={handleClose}
            title="Plagiarism Result"
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.95}
        >
            {props.children}
        </Modal>
    )
}


export default function displayResult(result){
    ReactDOM.render(
        <CustomModal>{result}</CustomModal>,
        document.getElementById('modalRoot')
    );
}