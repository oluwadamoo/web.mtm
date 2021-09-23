import { Facebook, Instagram, MailOutline, Phone, Room, WhatsApp } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

import { mobile } from '../responsive'

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
flex: 1;
display:flex;
flex-direction: column;
padding: 20px;
`

const Logo = styled.h1``


const Description = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;

${mobile({ display: "none" })}
`
const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap
`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px
`

const Right = styled.div`
flex: 1;
padding: 20px;

${mobile({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.img`
width: 100%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>MTM</Logo>
                <Description>
                    There are Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Assumenda possimus nesciunt quo harum vel provident.
                    A, est. Ea pariatur, est cum ad consectetur cumque, repellendus eaque,
                    aut obcaecati ex quisquam!
                </Description>

                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="25D366">
                        <WhatsApp />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>

                <Title>Contact</Title>

                <ContactItem>
                    <Room style={{ marginRight: "10px" }} />22 Address, Bariga</ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} />081 44 222 53</ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} />contact@mtm.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
