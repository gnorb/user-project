<template>
    <b-row>
        <b-col>
            <b-row>
                <b-col cols="12">
                    <h1>{{ $t('views.users.create.header') }}</h1>
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
import Form from './Form'
export default {
    name: 'Create',
    components: {
        Form
    },
    data () {
        return {
            item: {
                first_name: '',
                last_name: '',
                avatar: 'https://www.w3schools.com/w3images/avatar2.png'
            }
        }
    },
    beforeDestroy() {
        this.$store.state.views.users.info = ''
    },
    computed: {
        info: function () {
            return this.$store.state.views.users.info
        }
    }
}
</script>
