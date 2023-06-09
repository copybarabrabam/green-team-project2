
import ReactSwitch from "react-switch";
import { createContext, useState } from 'react';
import { useSelector } from "react-redux";
import { Navbar, Container, Nav, Badge } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"


export const ThemeContext = createContext(null);

export default function Nav_Dark() {
  let navigate = useNavigate();

  let state = useSelector((state) => state);
  
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
 
 
    <div className='Nav_Theme'>
      <Navbar >
        <Container>
          <Navbar.Brand href="/" className='Nav_Toggletheme'>npm</Navbar.Brand>
          <Nav>
            <div className="Nav_Switch">
              
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} className='mt-2' />
            </div>
            <Nav.Link onClick={() => { navigate('/class') }} className='Nav_Toggletheme'>강의</Nav.Link>
            <Nav.Link onClick={() => { navigate('/reference') }} className='Nav_Toggletheme'>레퍼런스</Nav.Link>
            <Nav.Link onClick={() => { navigate(`${state.login.isLogin ? '/checkout' : '/login'}`)}} className='Nav_Toggletheme'>
              {state.login.isLogin ? '로그아웃' : '로그인'}</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }} className='Nav_Toggletheme'>
              장바구니<Badge className='ms-2' bg="secondary">0</Badge></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>




  );
}
