const axios = require('axios');

let url = "http://localhost:3000/submit"

async function main(){

for(let i=0;i<500;i++){
    const response = await axios.post(url, {
        "problemId": i,
        "code": "hello world",
        "language": "Text"
      });
}

}



main();