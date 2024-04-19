import axios from 'axios'

export default class DataService {
    baseUrl = 'http://localhost:8000';
    get(url, callback) {
        axios.get(this.baseUrl + url)
            .then(function (response) {
                console.log(response);
                callback(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}