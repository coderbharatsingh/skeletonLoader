<template>
    <div class="margin-1">
        <b-row>
            <b-col v-for="(val, key) in (new Array(size).fill(undefined))" :key="key">
                <div class="mb-5">
                    <Skeleton width="65%" height="12px" animation="fade" />
                    <Skeleton width="90%" height="15px" :rounded="true" animation="fade" />
                </div>
                <div class="mb-5">
                    <Skeleton width="40%" height="12px" animation="fade" />
                    <Skeleton width="20%" height="18px" :rounded="true" animation="fade" />
                </div>
                <div class="mb-5">
                    <Skeleton width="55%" height="12px" :rounded="true" animation="fade" />
                    <Skeleton width="85%" height="12px" animation="fade" />
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Skeleton from 'skeleton-loader-vue';

export default {
    props: {
        productImage: {
            type: Number,
            default: 3
        },
        size: {
            type: Number,
            default: 4
        }
    },
    components: {
        Skeleton
    },
    data() {
        return {
            product_images: new Array(this.productImage).fill(undefined),
        }
    }
}
</script>
