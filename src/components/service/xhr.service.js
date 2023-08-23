import axios from 'axios';
import { toast } from 'react-toastify';

export default {
    get: axios.get,
    put: axios.put,
    post: axios.post,
    delete: axios.delete,
    //setToken: setToken
}