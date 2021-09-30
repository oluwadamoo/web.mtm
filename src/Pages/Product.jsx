import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router'
import { Add, Remove } from '@material-ui/icons'
import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import NewsLetter from '../Components/NewsLetter'
import { mobile } from '../responsive'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

const Container = styled.div`

`

const Wrapper = styled.div`
padding: 50px;
display: flex;

${mobile({ padding: "10px", flexDirection: "column" })}
`

const ImageContainer = styled.div`
flex: 1;
`


const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;

${mobile({ height: "40vh" })}
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;

${mobile({ padding: "10px" })}
`


const Title = styled.h1`
font-weight: 200;
`


const Description = styled.p`
margin: 20px 0px
`

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;

${mobile({ width: "100%" })}
`

const Filter = styled.div`
display: flex;
align-items: center;
`

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
margin: 0px 5px;
cursor: pointer;
`

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`


const FilterSizeOption = styled.option``


const AddContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
align-items: center;

${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;

`

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}
`

const Product = () => {
    const params = useParams()
    const [product, setProduct] = useState({})
    const [amount, setAmount] = useState(0)
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`https://mythriftmall-api.herokuapp.com/api/products/find/${params.id}`)
                setProduct(res.data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchProduct()
    }, [params])


    const headers = {
        "token": "Bearer " + user?.accessToken
    }
    const data = {
        userId: user._id,
        products: [
            {
                productId: params.id,
                quantity: amount
            }
        ]
    }

    const history = useHistory()

    const addToCart = async () => {
        if (!user) {
            return history.push('/login')
        }
        try {
            const isCart = await axios.get(`https://mythriftmall-api.herokuapp.com/api/cart/find/${user._id}`, { headers: headers })
            console.log(isCart)
            console.log(data)
            if (isCart.data !== null) {
                const res = await axios.put(`https://mythriftmall-api.herokuapp.com/api/cart/${isCart._id}`, data, {
                    headers: headers
                })
                console.log(res)
            } else {
                const res = await axios.post('https://mythriftmall-api.herokuapp.com/api/cart/', data, {
                    headers: headers
                })
                console.log(res)
            }

        } catch (e) {
            console.log(e)
        }
    }
    return (
        <Container>
            <Announcement />
            <Navbar />

            <Wrapper>
                <ImageContainer>
                    <Image src={product?.image} />
                </ImageContainer>

                <InfoContainer>
                    <Title>{product.title}</Title>

                    <Description>{product.description}
                    </Description>
                    <Price>N {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color={product.color} />
                            {/* <FilterColor color="darkblue" />
                            <FilterColor color="gray" /> */}
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>{product.size}</FilterSizeOption>
                                {/* <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption> */}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => amount > 0 && setAmount(amount - 1)} style={{ cursor: "pointer" }} />
                            <Amount>{amount}</Amount>
                            <Add onClick={() => setAmount(amount + 1)} style={{ cursor: "pointer" }} />
                        </AmountContainer>
                        <Button onClick={addToCart}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product
