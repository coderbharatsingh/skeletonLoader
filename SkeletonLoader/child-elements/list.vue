<template>
    <div class="skeleton-list">
        <div class="row m-0">
            <template v-for="(val, key) in items">
                <div :class="cardClassName || 'col-12'" :key="key">
                    <div class="skeleton-list-media row-list">
                        <div class="img-list-view ">
                            <template v-for="(val, index) in product_images">
                                <Skeleton type="circle" :key="index" animation="fade" />
                            </template>
                        </div>

                        <div class="skeleton-body">
                            <Skeleton width="100%"  height="15px" animation="fade" />
                            <Skeleton width="80%" height="15px" animation="fade" />
                            <Skeleton width="40%" height="15px" animation="fade" />
                        </div>
                        
                    </div>
                </div>
            </template>
        </div>
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
        cardClassName: String,
    },
    components: {
        Skeleton
    },
    computed: {
        items() {
            const deviceWidth = this.$data.$screenSize.width;
            const device_resolution = deviceWidth < 576 ? 1 : (deviceWidth < 768 ? 2 : (deviceWidth < 992 ? 3 : (deviceWidth < 1200 ? 4 : 5 )));
            return device_resolution < 4 ? device_resolution : 4;
        }
    },
    data() {
        return {
            product_images: new Array(this.productImage).fill(undefined),
        }
    }
}
</script>
