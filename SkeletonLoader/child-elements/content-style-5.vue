<template>
    <div>
        <div class="mb-5">
            <Skeleton width="100%" height="15px" :rounded="true" animation="fade" />
            <Skeleton width="100%" height="15px" :rounded="true" animation="fade" />
            <Skeleton width="80%" height="15px" :rounded="true" animation="fade" />
        </div>
        <div class="mb-5">
            <Skeleton width="90%" height="300px" :rounded="true" animation="fade" />
        </div>
        <div class="mb-5">
            <Skeleton width="80%" height="15px" :rounded="true" animation="fade" />
            <Skeleton width="100%" height="15px" :rounded="true" animation="fade" />
        </div>
    </div>
</template>

<script>
import Skeleton from 'skeleton-loader-vue';

export default {
    components: {
        Skeleton
    },
}
</script>
