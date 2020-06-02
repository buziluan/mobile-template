<template>
    <div class="home">
        <van-button type="primary" @click="handleClickTest">默认按钮</van-button>
        <van-overlay :show="isShow"></van-overlay>
    </div>
</template>

<script>
    import {Button, Overlay} from "vant"

    export default {
        name: 'Home',
        components: {VanButton: Button, VanOverlay: Overlay},
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            handleClickTest() {
                // this.isShow = true
                this.$toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                });
            }
        }
    }
</script>
