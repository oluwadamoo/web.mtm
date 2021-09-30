import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { popularProducts } from '../data'
import Product from './Product'


//Styles.........
const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap:wrap;
justify-content: space-between;
`

// Styles End...............


const Products = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("https://mythriftmall-api.herokuapp.com/api/products/")
                setProducts(res.data)
                console.log(res.data)
            } catch (e) {
                console.log(e)
            }
        }
        fetchProducts()
    }, [])
    return (
        <Container>
            {products.length > 0 && products.map(item => (
                <Product item={item} key={item._id} />
            ))}
        </Container>
    )
}

export default Products
