const URL = 'http://localhost:2500/api/'

export function getSize()
{
    console.log("funcion get para tamaños");
    return fetch(URL+'tam/lista',{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
        })
    })
    .then(res => res.json())
    .then(json => json.Data)
}