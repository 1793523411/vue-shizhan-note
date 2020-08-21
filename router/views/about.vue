<template>
    <div>
        <h1>介绍页</h1>
        <button @click="handleRouter">跳转到 user</button>
    </div>
</template>
<script>
    export default {
        methods: {
            handleRouter () {
                this.$router.push('/user/123');
                this.$router.replace('/user/123')
                this.$router.go(-1)
                this.$router.go(2)
            }
        }
    }
</script>