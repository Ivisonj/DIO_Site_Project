import { Link } from "react-router-dom";

import bannerImage from '../../assets/banner.png';
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex= {1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={50} nome="Ivison Joel" image="https://avatars.githubusercontent.com/u/115274427?s=400&u=b50c66a0e071ab1ae68b3ec21e50b6e3eedd89a3&v=4"/>
                    <UserInfo percentual={10} nome="Ivison Joel" image="https://avatars.githubusercontent.com/u/115274427?s=400&u=b50c66a0e071ab1ae68b3ec21e50b6e3eedd89a3&v=4"/>
                    <UserInfo percentual={90} nome="Ivison Joel" image="https://avatars.githubusercontent.com/u/115274427?s=400&u=b50c66a0e071ab1ae68b3ec21e50b6e3eedd89a3&v=4"/>
                    <UserInfo percentual={70} nome="Ivison Joel" image="https://avatars.githubusercontent.com/u/115274427?s=400&u=b50c66a0e071ab1ae68b3ec21e50b6e3eedd89a3&v=4"/>
                    <UserInfo percentual={20} nome="Ivison Joel" image="https://avatars.githubusercontent.com/u/115274427?s=400&u=b50c66a0e071ab1ae68b3ec21e50b6e3eedd89a3&v=4"/>
                </Column>
                
            </Container>
    </>)
}

export { Feed }