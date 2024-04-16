import './App.css';
import { useState, useEffect } from 'react';
import { api } from './api/api';
import CartProduct from './cartProduct';

interface Products {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
}

function App() {
  const [productList, setProductList] = useState<Products[]>([]);


  useEffect(() => {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    try{
      const products = await api.getProducts();
    setProductList(products.products);
    }catch (error) {
      console.error("Erro ao obter produtos:", error)
    }
    
  } 

  

  return (
    <>
      {productList.map(product => (
        <div>
           <CartProduct name={product.name} brand={product.brand} description={product.description} price={product.price}/>
        </div>
      
      ))}
    </>
  );
}

export default App;
