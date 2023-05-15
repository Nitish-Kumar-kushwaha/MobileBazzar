import { Container, FormLabel, Form } from "react-bootstrap"

import { useState } from "react"

const Price = () => {

    const [price, setPrice] = useState('');

    const handleChange = (event: any): any => {
        setPrice(event.target.value);
        console.log (event.target.value)
    }
    return (<>
        <Container>
            <Form.Range min={1000} max={100000} onChange={handleChange} />
            <span>{ price}</span>
        </Container>
    </>)
}

export default Price;