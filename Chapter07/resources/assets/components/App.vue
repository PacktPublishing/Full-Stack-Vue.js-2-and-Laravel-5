<template>
    <div>
        <div id="toolbar">
            <router-link :to="{ name: 'home' }">
                <img class="icon" src="/images/logo.png">
                <h1>vuebnb</h1>
            </router-link>
        </div>
        <router-view></router-view>
        <custom-footer></custom-footer>
    </div>
</template>
<script>
    import CustomFooter from './CustomFooter.vue';

    export default {
        components: {
            CustomFooter
        }
    }
</script>
<style>
    #toolbar {
        border-bottom: 1px solid #e4e4e4;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    }

    #toolbar a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    #toolbar .icon {
        height: 34px;
        padding: 16px 12px 16px 24px;
        display: inline-block;
    }

    #toolbar h1 {
        color: #4fc08d;
        display: inline-block;
        font-size: 28px;
        margin: 0;
    }
</style>
