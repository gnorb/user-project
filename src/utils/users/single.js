import store from '@/store/index.js'
import axios from 'axios'

export function getUser(id) {
    axios
        .get('api/users/' + id)
        .then((response) => {
            store.state.views.users.item = response.data.data
        })
        .catch((error) => {
            console.log(error)
        })
}