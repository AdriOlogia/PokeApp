import axios from 'axios'
import react from 'react';

export const PokemonsApi =  async ( setLoading ) => {

    try {
                
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=50`);
    
        const data = response.data;

        const finalArray = data.results.map( item => item.name )
        
        return finalArray
        
    } catch (error) {

        console.log('error pokeapi', error)        
    }
    finally {
        setLoading( false )
    }

}

export default PokemonsApi;