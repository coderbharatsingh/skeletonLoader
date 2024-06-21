<template>
    <b-row class="margin-1">
        <b-col v-for="(val, key) in (new Array(size).fill(undefined))" :key="key">
            <Skeleton width="100%" :height="height" animation="fade" />
        </b-col>
    </b-row>
</template>

<script>
import Skeleton from 'skeleton-loader-vue';

export default {
    props: {
        height: {
            type: String,
            default: '100px',
        },
        size: {
            type: Number,
            default: 4
        }
    },
    components: {
        Skeleton
    },
}
</script>
