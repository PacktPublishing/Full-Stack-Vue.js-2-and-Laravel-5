<template>
    <div>
        <hr>
        <div class="list">
            <div class="title"><strong>{{ title }}</strong></div>
            <div class="content">
                <div class="list-item" v-for="item in items">
                    <slot v-bind="item"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['title', 'items']
    }
</script>
<style>
    hr {
        border: 0;
        border-top: 1px solid #dce0e0;
    }
    .list {
        display: flex;
        flex-wrap: nowrap;
        margin: 2em 0;
    }

    .list .title {
        flex: 1 1 25%;
    }

    .list .content {
        flex: 1 1 75%;
        display: flex;
        flex-wrap: wrap;
    }

    .list .list-item {
        flex: 0 0 50%;
        margin-bottom: 16px;
    }

    .list .list-item > i {
        width: 35px;
    }

    @media (max-width: 743px) {
        .list .title {
            flex: 1 1 33%;
        }

        .list .content {
            flex: 1 1 67%;
        }

        .list .list-item {
            flex: 0 0 100%;
        }

    }
</style>
