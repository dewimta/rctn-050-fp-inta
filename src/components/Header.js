import Search from './Search'
import { Navbar, Container } from 'react-bootstrap';

export default function Header () {

    return(
        <div>
            <Navbar bg="dark" variant="dark" style={{borderRadius:"5px"}}>
                <Container>
                <Navbar.Brand href="/home">FinProH8</Navbar.Brand>
                <Search onSearch={onSearch} />
                </Container>
            </Navbar>
        </div>
    )
}