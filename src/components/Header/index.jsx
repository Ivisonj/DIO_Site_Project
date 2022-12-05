import React from 'react';
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';

import { 
    BuscarInputContainer,
    Container,
    Input, 
    Menu, 
    MenuRight, 
    Row,  
    UserPicture,  
    Wrapper 

} from './styles';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da dio" />
                {autenticado ? ( <>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu> Live Code </Menu>
                    <Menu> Global </Menu>
                </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/115274427?s=400&u=b50c66a0e071ab1ae68b3ec21e50b6e3eedd89a3&v=4"/>
                ) : (
                    <>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }

/*<Row>
<MenuRight href="#">Home</MenuRight>
<Button title="Entrar"/>
<Button title="Cadastrar"/>
</Row>*/