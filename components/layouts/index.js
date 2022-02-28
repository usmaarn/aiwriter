import Navbar from './Navbar'
import Footer from './Footer'


const layouts = ({ children }) => {
    return (
        <div className="bg-gray-200 dark:bg-slate-900 dark:text-gray-50 p-5 w-full h-full">
            <Navbar/>
            { children }
            <Footer/>
        </div>
    );
}

export default layouts;