import store from '@/store/index.js'
import axios from 'axios'

export function getUsers(page, filter = '') {
    let params = {
        'page': page
    }
    if (filter.length > 0) {
        params.first_name = filter
    }
    axios
        .get('api/users', {
            params
        })
        .then((response) => {
            store.state.views.users.list.total = response.data.total
            store.state.views.users.list.perPage = response.data.per_page
            store.state.views.users.list.currentPage = response.data.page
            store.state.views.users.list.rows = response.data.data
        })
        .catch((error) => {
            console.log(error)
        })
}