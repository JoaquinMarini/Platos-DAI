import spoonClient from './spoonClient';


export const detallePlato = async (id) =>{
    console.log(id)
    return spoonClient
    .get (`recipes/${id}/information?includeNutrition=false`,
    )
    const info=res.data.results
    .then(async(res) => {
    
    return info
})
.catch((e) => {
  console.log(`register error`, e.response);
  throw "error" //propagar error
});
} 