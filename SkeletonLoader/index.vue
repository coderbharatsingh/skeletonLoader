<template>
    <div :class="`skeleton-ui ${className || ''}`">
        <template>
            <component :is="Skeleton" v-bind="{ productImage, cardClassName, height, size: getSizeFromBreakpoints() }"></component>
        </template>
    </div>
</template>

<script>
import ChildElements from './child-elements/index.js';
import "./style.scss";

export default {
    props: {
        className: String,
        type: String,
        type_sm: String,
        type_md: String,
        type_lg: String,
        type_xl: String,
        productImage: Number,
        productCard: Number,
        cardClassName: String,
        height: String,
        breakpoints: String | Array | Object
    },
    components: {
    },
    data() {
        return {
            Skeleton: ChildElements.getByType(this.type)
        }
    },
    methods: {
        getSizeFromBreakpoints() {
            const deviceWidth = this.$data.$screenSize.width;
            const breakpoints = this.breakpoints;
            let size = 4;
            if(typeof breakpoints === 'string') {
                return parseInt(breakpoints);
            } else if(typeof breakpoints === 'number') {
                return breakpoints;
            } else if(typeof breakpoints === 'object') {
                const sizes = Array.isArray(breakpoints) ? [1199.98, 991.98, 767.98, 575.98] : Object.keys(breakpoints).reverse();
                if(sizes.length > 0) {
                    const values = Array.isArray(breakpoints) ? breakpoints : Object.values(breakpoints).reverse();
                    for(let i = 0; i < sizes.length; i++) {
                        if(typeof values[i] === 'undefined') {
                            return values[i - 1];
                        } else if(deviceWidth >= sizes[i]) {
                            return values[i];
                        }
                    }

                    return values[values.length - 1];
                }
            }

            return 4;
        }
    }
}
</script>

<style scoped>
</style>
