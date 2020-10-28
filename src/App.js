import React, { useEffect, useState } from 'react';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import useInput from "./hooks/useInput";

function App() {
  
  const [result, setResult] = useState([]);
  const [poke, setPoke] = useState([]);
  const [load, setLoad] = useState('true');
  const [searchOn, setSearchOn] = useState(false)
  const searchInput = useInput("")

  const arr = [];

  async function fetchPokemons (){
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
      .then((response) => response.json())
      .then((data) => setResult(
        data.results.map((item) => {
          fetch(item.url)
            .then((response) => response.json())
            .then((allpokemon) => arr.push(allpokemon));
            setPoke(arr);
        }),
      ));
  }
  
  useEffect(() => {
  fetchPokemons()
  }, []);

   setTimeout(() => {
     setLoad(false);
     console.log(poke)
   }, 1000);

   function submitSearch(e){
    e.preventDefault()
    setSearchOn(true)
    setPoke(poke.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
                                  pokemon.types[0].type.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
                                  pokemon.abilities[0].ability.name.toLowerCase().includes(searchInput.value.toLowerCase())))
    if (searchInput.value === "") fetchPokemons()
  }
 
  return (
    <div className="App">
      
      <form onChange={submitSearch} onSubmit={submitSearch} className="search">
        <input type="text" className="searchTerm" placeholder="Busca a tu Pokemon favorito" {...searchInput}/>
        <button className="searchButton" onClick={fetchPokemons}>Clear</button>
        </form>
       <div className='pokegallery'>
        

       

        { load ? (
          <p>Loading...</p>
        ) : (

          

         poke.map((img, i) => (
            <div id={img.id} key={img.id}>

              <div className='card' style={{ width: '10rem', height: '15rem', backgroundColor: '#F2F2F2' }}>
                <img  src={img.sprites.front_default} alt='pokemon' />
                <div >
                  <small>N°00{img.id}</small>
                  <h5 >{img.name}</h5>
                  <h6>{img.types[0].type.name}</h6>
                  <h6>{img.abilities[0].ability.name}</h6>

                </div>
              </div>


            </div>
          ))
        
        
)}


</div>
    </div>
  );
}

export default App;