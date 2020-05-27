import store from '@/store/index.js'
import axios from 'axios'

export function removeUser (id) {
    axios
        .delete('api/users/' + id)
        .then((response) => {
            if (response.status === 204) {
                store.state.views.users.info = 'notifications.removed'
            }
        })
        .catch((error) => {
            console.log(error)
        })
}