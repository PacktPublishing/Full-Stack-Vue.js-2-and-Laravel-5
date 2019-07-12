<template>
    <div class="home-container">
        <div v-for="(group, country) in listing_groups" class="listing-summary-group">
            <h1>Places in {{ country }}</h1>
            <div class="listing-summaries">
                <listing-summary
                    v-for="listing in group"
                    :key="listing.id"
                    :listing="listing">
                </listing-summary>
            </div>
        </div>
    </div>
</template>

<script>
    import { groupByCountry } from "../js/helpers";
    import ListingSummary from './ListingSummary.vue';
    import axios from 'axios';
    import routeMixin from '../js/route-mixin';

    let serverData = JSON.parse(window.vuebnb_server_data);
    let listing_groups = groupByCountry(serverData.listings);

    export default {
        mixins: [routeMixin],
        data() {
            return {
                listing_groups: []
            };
        },
        methods: {
            assignData({listings}) {
                this.listing_groups = groupByCountry(listings);
            }
        },
        components: {
            ListingSummary
        }
    }
</script>

<style>
    .listing-summary-group {
        padding-bottom: 20px;
    }

    .listing-summaries {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow: hidden;
    }

    .listing-summaries > .listing-summary {
        margin-right: 15px;
    }

    .listing-summaries > .listing-summary:last-child {
        margin-right: 0;
    }
</style>