import spoonClient from './spoonClient';




export const buscarPlato = async (comida) => {
    console.log(comida)
    return spoonClient
    .get(`recipes/complexSearch?apiKey=5fbfaca6af9949e48de98190593f70f9&query=${comida}`, 
      
    )
        .then(async(res) => {
        const info=res.data.results

        return info
    })
    .catch((e) => {
      console.log(`register error`, e.response);
      throw "error" //propagar error
    });
};