import axios from 'axios'

export const PokemonsApi =  async ( cantidad = 51 ) => {

    try {                
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${cantidad}`);
    
        const data = response.data;
        
        const finalArray = data.results.map( item => item.name )

        return {
            DataResult : data,
            finalArray: finalArray,
        }
        
    } catch (error) {
        console.log('error pokeapi', error)        
    }
}

export const PokeSprites = async ( pokeName, setSprites ) => {
    try {        
        const DataPokeApi = await PokemonsApi()

        const ResultsPokeApi = DataPokeApi.DataResult.results.filter( item => item.name === pokeName )

        const urlPokemonSelected = await axios.get(`${ResultsPokeApi[0].url}`)

        const pokeSprites = await urlPokemonSelected.data.sprites

        setSprites( pokeSprites )
        
    } catch (error) {
        console.log("Error en los sprites")
    }
}