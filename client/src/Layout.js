import Navbar from "./Navbar";
import Home from "./Home";

const Layout = (props) => {

    return (
        <>
            <Navbar user={props.user} onLogout={props.onLogout}/>
            <Home user={props.user} />
        </>
    );
}

export default Layout;