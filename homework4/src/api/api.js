import axios from "axios";

class ApiUsers {
   getUsers () {
    return axios.get('https://jsonplaceholder.typicode.com/users')
   }

}

export default ApiUsers;