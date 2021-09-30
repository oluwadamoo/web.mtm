import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.2);
z-index:3;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`
const Title = styled.h3`
font-size: 20;
text-align: center;
color: #323233
`
const IconContainer = styled.div`
display: flex;
width: 90%;
height: 90%;
align-items: center;
justify-content: center;

`

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 300px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

&:hover ${Info}{
opacity: 1;
}
`

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`

const Image = styled.img`
height: 75%;
z-index: 2;
`


const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin:10px;
transition: all 0.5s ease;

&:hover{
    background-color:#e9f5f5;
    transform: scale(1.1) 
}
`


const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.image} />

            <Info>
                <Link to={`products/${item._id}`} style={{ color: "inherit", textDecoration: "none" }}>
                    <IconContainer>
                        <Icon>
                            <ShoppingCartOutlined />
                        </Icon>
                        <Icon>
                            <SearchOutlined />
                        </Icon>
                        <Icon>
                            <FavoriteBorderOutlined />
                        </Icon>
                    </IconContainer>
                    <Title>{item.title}</Title>
                </Link>
            </Info>
        </Container>
    )
}

export default Product
