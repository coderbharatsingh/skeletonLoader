<template>
    <b-row class="margin-1">
        <b-col v-for="(val, key) in (new Array(size).fill(undefined))" :key="key">
            <Skeleton width="60%" height="20px" animation="fade" />
            <Skeleton width="100%" height="20px" animation="fade" />
            <Skeleton width="70%" height="20px" animation="fade" />
            <Skeleton width="90%" height="15px" animation="fade" />
            <Skeleton width="50%" height="15px" animation="fade" />
            <Skeleton width="30%" height="15px" animation="fade" />
        </b-col>
    </b-row>
</template>

<script>
import Skeleton from 'skeleton-loader-vue';

export default {
    props: {
        height: {
            type: String,
            default: '150px',
        },
        size: {
            type: Number,
            default: 3
        }
    },
    components: {
        Skeleton
    },
}
</script>
