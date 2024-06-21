<template>
    <div class="skeleton-list">
        <b-row>
            <b-col v-for="(val, key) in (new Array(size).fill(undefined))" :key="key">
                <div class="skeleton-list-media">
                    <div class="img-list">
                        <template v-for="(val, index) in product_images">
                            <Skeleton type="circle" animation="fade" :key="index" />
                        </template>
                    </div>

                    <div class="skeleton-body">
                        <Skeleton width="100%" height="15px" animation="fade" />
                        <Skeleton width="80%" height="30px" animation="fade" />
                        <Skeleton width="40%" height="15px" animation="fade" />
                        <Skeleton width="100%" height="30px" animation="fade" />                               
                    </div>
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
