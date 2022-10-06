const fetcch = require('node-fecth');
const login = async() =>{
    const tokenResponse = await fetch('https://dev.stedi.me/login',{
        method: 'POST',
        body:JSON.stringify({
          userName: "scmurdock@gmail.com",
          password:"Passw0rd"
        })

    })
};