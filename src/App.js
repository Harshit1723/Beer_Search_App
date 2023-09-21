import React,{useState,useEffect} from 'react';
import './App.css';

const App = () => {
  const [beers,setBeers] = useState([]);
  const[searchTerm,setSearchTerm] =useState("");

  useEffect(() => {
    const Data = async() => {
      try{
        const reuslt =  await fetch("https://api.punkapi.com/v2/beers");
        const data = await reuslt.json();

        setBeers(data);
      }catch(error) {
        console.log(error);
      }
    }

    Data();
  },[]);

  const SearchedBeer = beers.filter((beer) => beer.name.toLowerCase().includes(searchTerm.toLowerCase()));
  

  return(
    <div>

    <div className='searching'>
    <input type="text" placeholder='Search beers...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
   
    </div>

     <div className='beer'>
      {SearchedBeer.map((beer) => (

        

<div key={beer.id} className='beer-item'>
           <h3 className="text-xl font-semibold">{beer.name}</h3>
           
          <img  src={beer.image_url} alt={beer.name} className='beer-image'/>
          <p className="text-gray-600">{beer.tagline}</p>
          </div>


        

        
      ))}
      </div>
    </div>
  );
}

export default App;