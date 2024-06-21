<template>
    <div>
        <Skeleton height="15px" width="25%" animation="fade" />
        <Skeleton height="15px" width="90%" animation="fade" />
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
