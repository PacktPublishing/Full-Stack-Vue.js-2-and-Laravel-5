<template>
    <div>
        <p :class="{ contracted: contracted }">
            <slot></slot>
        </p>
        <button v-if="contracted" class="more" @click="contracted = false">+ More</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                contracted: true
            }
        }
    }
</script>
<style>
    p {
        white-space: pre-wrap;
    }

    .contracted {
        height: 250px;
        overflow: hidden;
    }

    button.more {
        background: transparent;
        border: 0;
        color: #008489;
        padding: 0;
        font-size: 17px;
    }

    button.more:hover, .about button.more:focus, .about button.more:active {
        text-decoration: underline;
        outline: none;
    }
</style>
