<template>
    <b-row>
        <b-col>
            <b-row>
                <b-col cols="12">
                    <h1>{{ $t('views.users.list.header') }}</h1>
                </b-col>
            </b-row>
            <b-card class="mt-3 mb-3">
                <b-row>
                    <b-col cols="12">
                        <b-row>
                            <b-col cols="12" sm="6">
                                <div class="filter-input">
                                    <input v-model.lazy="filter"
                                                  v-debounce="delay"
                                                  :placeholder="$t('views.users.list.filter')"
                                    />
                                    <font-awesome-icon icon="search" />
                                </div>
                            </b-col>
                            <b-col  cols="12" sm="6">
                                <b-btn variant="success" class="redirectButton float-right" @click="addUser()">
                                    <font-awesome-icon icon="plus" />{{$t('views.users.list.addUser')}}
                                </b-btn>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="12">
                        <hr>
                    </b-col>
                    <b-col cols="12" style="overflow-x: scroll">
                        <b-alert :show="info.length > 0" @dismissed="$store.state.views.users.info = ''" variant="success" dismissible>{{ $t(info) }}</b-alert>
                        <table class="w-100 table-list">
                            <tr>
                                <th></th>
                                <th>{{ $t('views.users.list.fullName') }}</th>
                                <th>{{ $t('views.users.list.action') }}</th>
                            </tr>
                            <template v-for="(item, index) in rows">
                                <tr v-bind:key="'item-' + index">
                                    <td width="100">
                                        <img :src="item.avatar" class="avatar-container" @click="showUser(item.id)" style="cursor: pointer;">
                                    </td>
                                    <td>
                                        <span @click="showUser(item.id)" style="cursor: pointer;">
                                            {{ item.first_name }} {{ item.last_name }}
                                        </span>
                                    </td>
                                    <td width="130">
                                        <div class="mr-3 float-left" style="cursor: pointer" @click="editUser(item.id)">
                                            <font-awesome-icon icon="edit" />
                                        </div>
                                        <div class="float-left" style="cursor: pointer" @click="removeUser(item.id)">
                                            <font-awesome-icon icon="trash" />
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </table>
                    </b-col>
                </b-row>
            </b-card>
            <b-row>
                <b-col cols="12">
                    <b-pagination
                            v-model="page"
                            :total-rows="total"
                            :per-page="perPage"
                    ></b-pagination>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
import debounce from 'v-debounce'
import { getUsers } from '@/utils/users/list'
import { removeUser } from '../../utils/users/remove'

export default {
    name: 'List',
    data () {
        return {
            page: 1,
            filter: '',
            delay: 1000
        }
    },
    computed: {
        rows: function () {
            return this.$store.state.views.users.list.rows
        },
        perPage: function () {
            return this.$store.state.views.users.list.perPage
        },
        total: function () {
            return this.$store.state.views.users.list.total
        },
        currentPage: function () {
            return this.$store.state.views.users.list.currentPage
        },
        info: function () {
            return this.$store.state.views.users.info
        }
    },
    directives: {
        debounce
    },
    watch: {
        'page': function (val) {
            if (val !== this.currentPage) {
                getUsers(val, this.filter)
            }
        },
        'currentPage': function (val) {
            this.page = val
        },
        'filter': function () {
            getUsers(this.currentPage, this.filter)
        }
    },
    mounted () {
        // laravel echo for Users entity
    },
    created () {
        getUsers(1, this.filter)
    },
    beforeDestroy() {
        this.$store.state.views.users.info = ''
    },
    methods: {
        addUser () {
            this.$router.push({ name: 'UserCreate' })
        },
        editUser (id) {
            this.$router.push({ name: 'UserUpdate', params: { id: id } })
        },
        showUser (id) {
            this.$router.push({ name: 'UserShow', params: { id: id } })
        },
        removeUser (id) {
            removeUser (id)
        }
    }
}
</script>