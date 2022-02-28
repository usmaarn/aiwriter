import Layouts from '../components/layouts/index'
import AppContextProvider from "../utils/app-context";
import '../styles/globals.css'


function MyApp ({ Component, pageProps }){

        return (
            <AppContextProvider>
                <Layouts>
                    <Component {...pageProps} />
                </Layouts>
            </AppContextProvider>
        )
}


export default MyApp;
