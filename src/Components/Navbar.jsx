import { useContext } from 'react'
import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Container = styled.div`
height: 60px;
${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.div`
font-size: 14px;
cursor: pointer;

${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
border: .5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px
`

const Input = styled.input`
border: none;

${mobile({ width: "50px" })}
`
const Center = styled.div`
flex: 1;
text-align: center;
`

const Logo = styled.h1`
font-weight: bold;

${mobile({ fontSize: "24px" })}
`
const Right = styled.div`
flex: 1;
display:flex;
align-items: center;
justify-content: flex-end;

${mobile({ justifyContent: "center", flex: "2" })}
`

const MenuItem = styled.div`
font-size: 40;
cursor: pointer;
margin-left: 25px;

${mobile({ fontSize: "12px", marginLeft: "10px" })}
`



const Navbar = () => {

    // const [cart, setCart] = useState({})
    // useEffect(() => {
    //     const getCart = () => {

    //     }
    // })
    const { user } = useContext(AuthContext)
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="search..." />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>


                <Center>
                    <Link to='/' style={{ textDecoration: "none", color: "inherit" }}><Logo>MTM</Logo></Link>
                </Center>
                <Right>
                    {
                        user ?

                            <MenuItem onClick={logout}>LOGOUT</MenuItem> :
                            <>
                                <Link to='/register' style={{ textDecoration: "none", color: "inherit" }}> <MenuItem>REGISTER</MenuItem></Link>
                                <Link to='/login' style={{ textDecoration: "none", color: "inherit" }}><MenuItem>LOGIN</MenuItem></Link>
                            </>
                    }
                    <MenuItem>
                        <Badge badgeContent={3} color="primary">
                            <Link to='/cart' style={{ textDecoration: "none", color: "inherit" }}> <ShoppingCartOutlined /> </Link>
                        </Badge>
                    </MenuItem>

                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
