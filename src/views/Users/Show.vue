<template>
    <b-row v-if="item">
        <b-col>
            <b-row>
                <b-col cols="12">
                    <h1>{{ $t('views.users.show.header') }}</h1>
                </b-col>
            </b-row>
            <b-row class="mt-3 mb-3">
                <b-col cols="8">
                    <b-card class="h-100">
                        <p><b>{{ $t('views.users.object.first_name') }}:</b> {{ item.first_name }}</p>
                        <p><b>{{ $t('views.users.object.last_name') }}:</b> {{ item.last_name }}</p>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card class="h-100">
                        <img :src="item.avatar" class="big-avatar">
                    </b-card>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
import { getUser } from '@/utils/users/single'
export default {
    name: 'Show',
    created () {
        getUser(parseInt(this.$route.params.id))
    },
    computed: {
        item: function () {
            return this.$store.state.views.users.item
        }
    }
}
</script>