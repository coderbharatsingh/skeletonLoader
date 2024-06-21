<template>
    <b-row class="margin-1">
        <b-col md="6">
            <div class="pb-5">
                <Skeleton width="70%" height="20px" animation="fade" />
                <Skeleton width="100%" height="20px" animation="fade" />
                <Skeleton width="30%" height="20px" animation="fade" />
            </div>
            <div class="pb-5">
                <Skeleton width="100%" height="15px" animation="fade" />
                <Skeleton width="70%" height="15px" animation="fade" />
            </div>
            <Skeleton width="40%" height="15px" animation="fade" />
        </b-col>
        <b-col md="5" class="ml-auto mt-md-0 mt-5">
            <Skeleton width="100%" height="250px" animation="fade" />
        </b-col>
    </b-row>
</template>

<script>
import Skeleton from 'skeleton-loader-vue';

export default {
    components: {
        Skeleton
    },
}
</script>
