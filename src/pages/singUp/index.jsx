import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, LeftColumn, RightColumn, Title, Wrapper, TitleCadastre, SubTitleCadastre, Row, CriarText, FazerLogin, Link  } from './styles';

const schema = yup.object({
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
}).required();

const SingUp = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = date => console.log(date);

    const handleClickSignIn = () => {
        navigate('/login')
    }
   
    return (<>
       <Header/>
         < Container>
            <LeftColumn>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias 
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </LeftColumn>
            <RightColumn>
                <Wrapper>
                    <TitleCadastre>Comece agora grátis</TitleCadastre>
                    <SubTitleCadastre>Crie sua conta e make the chance._</SubTitleCadastre>
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="Nome" errorMessage={errors?.nome?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Password" type="password" leftIcon={<MdLock />} />
                            <Button onClick={handleClickSignIn} title="Criar minha conta" variant="secondary" type="submit" />
                    </form>    
                    <Row>
                        <CriarText>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as políticas de Privacidade
                            e os Termos de Uso da Dio.
                        </CriarText>
                    </Row>
                    <Row>
                        <FazerLogin>Já tenho conta. <Link href="/login">Fazer login</Link></FazerLogin>
                    </Row>
                </Wrapper>
            </RightColumn>
         </Container>
     
    </>)
}
   

export { SingUp }