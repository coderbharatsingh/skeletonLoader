<template>
    <div>
        <b-row class="mb-5">
            <b-col :style="{ width: '150px', 'flex-grow': 'unset' }">
                <Skeleton type="circle" width="100px" height="100px" animation="fade" />
            </b-col>
            <b-col class="align-self-center">
                <Skeleton width="100%" height="15px" :rounded="true" animation="fade" />
                <Skeleton width="100%" height="15px" :rounded="true" animation="fade" />
                <Skeleton width="80%" height="15px" :rounded="true" animation="fade" />
            </b-col>
        </b-row>
        <div class="mb-5">
            <Skeleton width="90%" height="400px" :rounded="true" animation="fade" />
        </div>

        <Skeleton width="80%" height="15px" :rounded="true" animation="fade" />
        <Skeleton width="100%" height="15px" :rounded="true" animation="fade" />
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
