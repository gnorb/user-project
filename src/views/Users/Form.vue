<template>
    <b-row>
        <b-col order-md="2" cols="12" md="4">
            <b-card class="h-100 mb-3">
                <img :src="item.avatar" class="big-avatar">
                <b-button v-if="!avatarChange" variant="outline-primary" class="w-100 mt-3 formButton avatarButton" @click="editAvatar()">
                    <font-awesome-icon icon="camera" /> {{ $t('views.users.update.avatarChange') }}
                </b-button>
                <input v-else type="text" class="form-control" v-model="item.avatar">
            </b-card>
        </b-col>
        <b-col cols="12" md="8" order-md="1">
            <b-card class="h-100 mb-3">
                <b-row>
                    <b-col>
                        <label>{{ $t('views.users.object.first_name') }}:</label>
                        <b-form-input v-model="item.first_name" :placeholder="$t('views.users.object.first_name')"></b-form-input>
                    </b-col>
                    <b-col>
                        <label>{{ $t('views.users.object.last_name') }}:</label>
                        <b-form-input v-model="item.last_name" :placeholder="$t('views.users.object.last_name')"></b-form-input>
                    </b-col>
                </b-row>
                <b-btn @click="send()" class="formButton sendButton" variant="success">
                    <span v-if="item.id">{{ $t('views.users.update.updateObject') }}</span>
                    <span v-else>{{ $t('views.users.create.createObject') }}</span>
                </b-btn>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
import { updateUser } from '../../utils/users/update'
import { createUser } from '../../utils/users/create'
export default {
    name: 'Form',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            avatarChange: false
        }
    },
    methods: {
        editAvatar () {
            this.avatarChange = true
        },
        send () {
            if (this.item.id) {
                updateUser(this.item)
            } else {
                createUser(this.item)
            }
        }
    }
}
</script>
