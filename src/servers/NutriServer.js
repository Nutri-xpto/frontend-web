import axios from 'axios';

export const registerNutri = values => {
    console.log(values);
    let baseURL = 'http://localhost:8080'
    axios.post(baseURL, values).then( (resp) => console.log(resp));
}

