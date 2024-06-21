<template>
    <div class="margin-1">
        <Skeleton width="100%" height="15px" animation="fade" />
        <Skeleton width="30%" height="20px" animation="fade" />
        <Skeleton width="100%" height="20px" animation="fade" />
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
