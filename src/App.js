import {useState, useEffect} from 'react';
import './App.css';
import FBfeed from './components/Images/index';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetchAPI()
  },[]);

  const fetchAPI = ()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => setProducts(res.products))
  }

  if(!products.length){
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      {
        products.map((item)=>{
          return <FBfeed image={item.images} title={item.title} description={item.description} img={item.thumbnail}/> 
        })
      }
    </div>
  );
}

export default App;
