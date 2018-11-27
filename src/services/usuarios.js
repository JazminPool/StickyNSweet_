const URL = "http://localhost:2500/api/"

export function createUser(data)
{
console.log("Funcion create ",data);
return fetch(URL +'usuarios/create',{
    method: 'POST',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        Nombre: data.Nombre,
        Apellidos: data.Apellidos,
        Direccion: data.Direccion,
        Sexo: data.Sexo,
        Edad: data.fechaNacimiento,
        Correo: data.Correo,
        Pass: data.Pass,
        file: data.file
    })
})
.then(res => res.json())
.then(json => json)
}