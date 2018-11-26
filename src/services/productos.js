const URL = 'http://localhost:2500/api/'

export function getProduct()
{
    console.log('funcion getproduct');
    return fetch (URL + 'productos/lista',{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({

        })
    }).then(res => res.json())
  .then(json => json.Data)
}