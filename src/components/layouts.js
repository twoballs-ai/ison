import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './basicComponents/header/Header';
import Menu from './basicComponents/menu/Menu';
import Main from './basicComponents/main/Main';
import './layout.css';

function Layout(props) {
    return (
        <>

                    <CssBaseline />
                    <Header title="My header" subtitle="subtitle2" />
                    <Menu />
                    <Main />
             
            
        </>
    );
}

export default Layout