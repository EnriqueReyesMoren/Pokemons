import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useInput from "../hooks/useInput";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 5px;
  padding: 10px 20px;
  background-color: ${props => props.btnType === 'primary' ? 'rgb(100,100,220)' : props.btnType === 'danger' ? 'red' : 'grey'};
  cursor: pointer;
  color: white;
  border-radius: 10px;
  box-shadow:none;
  border:none;

`




const PokemonsArea = () => {
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

  async function fetchSearch (){
    setPoke(arr)
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

  const nameSort = () => {
    setPoke([...poke].sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
    console.log(arr)
  }

  const experienceSort = () => {
    setPoke([...poke].sort((a, b) => a.base_experience > b.base_experience ? -1 : a.base_experience < b.base_experience ? 1 : 0))
  }

  const popSort = () => {
    setPoke([...poke].sort((a, b) => a.id > b.id ? -1 : a.id < b.id ? 1 : 0))
  }
    return (
        <div>
            <section className="causes-area">
            
                <div className="container">
                
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="section-heading blog-heading text-center">
                                
                                <h2 className="section__title">Find you Pokemon</h2>
                                <p className="section__meta">Clic on search</p>
                            </div>

                            
                                
        <form onChange={submitSearch} onSubmit={submitSearch} className="search-bar">
	<input type="text" name="search" pattern=".*\S.*" required {...searchInput}/>
	<button class="search-btn" type="submit">
		<span>Search</span>
	</button>
        </form>
               <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <StyledButton onClick={nameSort} btnType='primary'>Sort by name</StyledButton>
                <StyledButton onClick={popSort} btnType='primary'>Sort by Id</StyledButton>
                <StyledButton onClick={experienceSort} btnType='primary'>Sort by Experience</StyledButton>
                </div>
                               
                        </div>
                    </div>
                    <div className="row blog-content-wrap">
                    { load ? (
          <p>Loading...</p>
        ) : (
             poke.map((img, i) => (


                        <div className="col-lg-4">
                            <div className="blog-content box">
                                <div className="blog-item blog-item1">
                                    <div className="blog-img">
                                        <img src={img.sprites.front_default} alt="" />
                                    </div>
                                    <div id="bar1" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="23"></span>
                                    </div>
                                    <div className="blog-inner-content">
                                        <small>N°00{img.id}</small>
                                        <h3 className="blog__title"><a href="/causes-detail">{img.name}</a>
                                        </h3>
                                        <p className="theme-btn" style={{backgroundColor:"red"}}>{img.types[0].type.name}</p>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Experience: <span>{img.base_experience}</span></li>
                                            <li><i className="fa fa-line-chart"></i> Game Index: <span>{img.game_indices[0].game_index}</span></li>
                                        </ul>
                                        <div style={{display:"flex", justifyContent:"space-between"}}>
                                        <Link to={`pokemons/${img.id}`} className="theme-btn">View details</Link>
                                        <i className="fav-button"></i>
                                         <span className="fav-span">liked!</span>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                          ))
        
        
                    )}
                        
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PokemonsArea;
