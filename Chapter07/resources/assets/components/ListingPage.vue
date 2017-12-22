<template>
    <div>
        <header-image v-if="images[0]" :image-url="images[0]" @header-clicked="openModal"></header-image>
        <div class="listing-container">
            <div class="heading">
                <h1>{{ title }}</h1>
                <p>{{ address }}</p>
            </div>
            <hr>
            <div class="about">
                <h3>About this listing</h3>
                <expandable-text>{{ about }}</expandable-text>
            </div>
            <div class="lists">
                <feature-list title="Amenities" :items="amenities">
                    <template slot-scope="amenity">
                        <i class="fa fa-lg" :class="amenity.icon"></i>
                        <span>{{ amenity.title }}</span>
                    </template>
                </feature-list>
                <feature-list title="Prices" :items="prices">
                    <template slot-scope="price">
                        {{ price.title }}: <strong>{{ price.value }}</strong>
                    </template>
                </feature-list>
            </div>
        </div>
        <modal-window ref="imagemodal">
            <image-carousel :images="images"></image-carousel>
        </modal-window>
    </div>
</template>
<script>
    import routeMixin from '../js/route-mixin';
    import { populateAmenitiesAndPrices } from '../js/helpers';

    import ImageCarousel from './ImageCarousel.vue';
    import ModalWindow from './ModalWindow.vue';
    import FeatureList from './FeatureList.vue';
    import HeaderImage from './HeaderImage.vue';
    import ExpandableText from './ExpandableText.vue';

    export default {
        mixins: [ routeMixin ],
        data() {
            return {
                title: null,
                about: null,
                address: null,
                amenities: [],
                prices: [],
                images: []
            }
        },
        components: {
            ImageCarousel,
            ModalWindow,
            FeatureList,
            HeaderImage,
            ExpandableText
        },
        methods: {
            assignData({ listing }) {
                Object.assign(this.$data, populateAmenitiesAndPrices(listing));
            },
            openModal() {
                this.$refs.imagemodal.modalOpen = true;
            }
        }
    }
</script>
<style>
    .about {
        margin: 2em 0;
    }

    .about h3 {
        font-size: 22px;
    }
</style>
