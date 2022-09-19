import spoonClient from './spoonClient';


export const infoPlato = async (id) =>{
    console.log(id)
    res = spoonClient
    .get (`recipes/${id}/information?includeNutrition=false`,
    )
    .then(async(res) => {
    console.log(res.json())
    return 
})
.catch((e) => {
  console.log(`register error`, e.response);
  throw "error" //propagar error
});
} 