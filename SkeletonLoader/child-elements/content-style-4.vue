<template>
    <div class="margin-1 header-skelaton mb-4">
        <Skeleton width="50%" height="25px" animation="fade" />
        <Skeleton width="10%" height="30px" animation="fade" />
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
