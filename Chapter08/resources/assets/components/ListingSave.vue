<template>
    <div class="listing-save" @click.stop="toggleSaved()">
        <button v-if="button">
            <i :class="classes"></i>
            {{ message }}
        </button>
        <i v-else :class="classes"></i>
    </div>
</template>
<script>
    export default {
        props: [ 'id', 'button' ],
        methods: {
            toggleSaved() {
                this.$store.commit('toggleSaved', this.id);
            }
        },
        computed: {
            isListingSaved() {
                return this.$store.state.saved.find(saved => saved === this.id);
            },
            classes() {
                let saved = this.isListingSaved;
                return {
                    'fa': true,
                    'fa-lg': true,
                    'fa-heart': saved,
                    'fa-heart-o': !saved
                }
            },
            message() {
                return this.isListingSaved ? 'Saved' : 'Save';
            }
        }
    }
</script>
<style>
    .listing-save {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }

    .listing-save .fa-heart-o {
        color: #ffffff;
    }

    .listing-save .fa-heart {
        color: #ff5a5f;
    }

    .listing-save i {
        padding-right: 4px;
    }

    .listing-save button .fa-heart-o {
        color: #808080;
    }
</style>
