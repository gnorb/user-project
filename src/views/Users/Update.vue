<template>
    <b-row v-if="item">
        <b-col>
            <b-row>
                <b-col cols="12">
                    <h1>{{ $t('views.users.update.header') }}</h1>
                </b-col>
                <b-col cols="12">
                    <b-alert :show="info.length > 0" @dismissed="$store.state.views.users.info = ''" variant="success" dismissible>{{ $t(info) }}</b-alert>
                </b-col>
            </b-row>
            <Form :item="item"></Form>
        </b-col>
    </b-row>
</template>

<script>
import { getUser } from '@/utils/users/single'
import Form from './Form'
export default {
    name: 'Update',
    components: {
        Form
    },
    created () {
        getUser(parseInt(this.$route.params.id))
    },
    beforeDestroy() {
        this.$store.state.views.users.info = ''
    },
    computed: {
        item: function () {
            return this.$store.state.views.users.item
        },
        info: function () {
            return this.$store.state.views.users.info
        }
    }
}
</script>
