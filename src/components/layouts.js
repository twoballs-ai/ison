import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Header from './basicComponents/header/Header';
import Menu from './basicComponents/menu/Menu';
import Main from './basicComponents/main/Main';
import './layout.css';

function Layout(props) {
    return (
        <>
<Container disableGutters sx= {{ maxWidth:'100%'  }} maxWidth={false} className="container">
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <Header title="My header" subtitle="subtitle2" />
                    <Menu />
                    <Main />
                </Box>
            </Container>
        </>
    );
}

export default Layout