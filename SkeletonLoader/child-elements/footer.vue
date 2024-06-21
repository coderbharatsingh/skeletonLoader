<template>
    <b-row>
        <b-col md="4" class="mb-4 mb-md-0" v-for="(val, key) in (new Array(3).fill(undefined))" :key="key">
            <div class="pb-3">
                <Skeleton width="70%" height="25px" animation="fade" />
            </div>
            <Skeleton width="100%" height="15px" animation="fade" />
            <Skeleton width="50%" height="15px" animation="fade" />
            <Skeleton width="30%" height="15px" animation="fade" />
        </b-col>
    </b-row>
</template>

<script>
import Skeleton from 'skeleton-loader-vue';

export default {
    components: {
        Skeleton,
    },
    data() {
        return {
        }
    },
    methods: {
        screenWidth() {
            return this.$data.$screenSize.width;
        }
    }
}
</script>
