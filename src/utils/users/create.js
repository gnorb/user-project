import store from '@/store/index.js'
import axios from 'axios'

export function createUser (item) {
    axios
        .post('api/users', item)
        .then((response) => {
            if (response.status === 201) {
                store.state.views.users.info = 'notifications.created'
            }
        })
        .catch((error) => {
            console.log(error)
        })
}