<template>
    <div class="navbar">
        <ul class="d-flex w-100 justify-content-between align-items-center">
            <li><Skeleton :width="screenWidth() > 515 ? '100px' : '50px'" height="40px" animation="fade" /></li>
            <li><Skeleton width="100px" height="20px" animation="fade" v-if="screenWidth() > 991" /></li>
            <li><Skeleton :width="screenWidth() > 1060 ? '500px' : (screenWidth() > 750 ? '400px' : '200px')" height="40px" animation="fade" /></li>
            <li><Skeleton width="100px" height="20px" animation="fade" v-if="screenWidth() > 991" /></li>
            <li><Skeleton :width="screenWidth() > 515 ? '100px' : '50px'" height="40px" animation="fade" /></li>
        </ul>
    </div>
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
