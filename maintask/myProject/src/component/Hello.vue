<template>
    <div id="Hello">
        <h1>I am a title.</h1>
        <a> written by {{ author }}</a>
    </div>
</template>

<script >
    export default {
        data () {
            return {
                author: "June"
            }
        }
    }
</script>