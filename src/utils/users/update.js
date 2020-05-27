import store from '@/store/index.js'
import axios from 'axios'

export function updateUser (item) {
    axios
        .put('api/users/' + item.id, item)
        .then((response) => {
            if (response.status === 200) {
                store.state.views.users.info = 'notifications.updated'
            }
        })
        .catch((error) => {
            console.log(error)
        })
}