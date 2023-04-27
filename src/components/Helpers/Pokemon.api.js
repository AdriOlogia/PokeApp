export const PokemonsApi =  async () => {

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/?limit=50`;
    
        const resulApi = await fetch(url);
    
        const data = await resulApi.json();

        const finalArray = data.results.map( item => item.name )
        
        return finalArray
        
    } catch (error) {

        console.log('error pokeapi', error)        
    }

}

export default PokemonsApi;