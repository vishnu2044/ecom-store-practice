import React, { useState } from 'react'
import {phonesData} from './product.data';
import {Card, Button} from 'react-bootstrap';


const Product = () => {
    const [items, setItems] = useState(phonesData)
    const decQty = (id) =>{
        const newItem = items.map((item)=>
        item.id===id && item.quantity >1 ? {...item, quantity:item.quantity-1}:item
        );
        setItems(newItem);
    }

    const incQty = (id) =>{
        const newItem = items.map((item)=>
        item.id===id ? {...item, quantity:item.quantity+1}:item
        );
        setItems(newItem);


    }

  return (
    <div className=''>
        <h3 className='bg-info text-white'>products</h3>
        <div>
        {items.map((item)=>(
            <div className='d-inline-flex'>
                <Card key={item.id} style={{ width: '15rem' }} className='shadow p-3 m-2 bg-body-tertiary rounded'>
                    <Card.Img style={{ height: '15rem' }} variant="top" src={require(`./assets/${item.image}.jpg`)}  />

                    <Card.Body>
                        <Card.Title className='text-success'>{item.model}</Card.Title>
                        <Card.Text>{item.desc}</Card.Text>
                        <h6>Price: ₹ {item.price}</h6>
                        <div>
                            <p>quantity
                            <Button onClick={()=>decQty(item.id)} className='m-1' varant="warning">-</Button>
                            {item.quantity}
                            <Button onClick={()=> incQty(item.id)} className='m-1' varant="warning">+</Button>
                            </p>
        
        
                        </div>
                        <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                </Card>
            </div>
        ))}
        </div>
       
    </div>
  )
}

export default Product;
;