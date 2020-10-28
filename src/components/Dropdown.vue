<template>
    <select name='dropdown' id="dropdown" v-model="selectedOption" @chage="optionChanged">
        <option value=option1>Option1</option>
        <option value=option2>Option2</option>
        <option value=option3>Option3</option>
    </select>
</template>

<script>
    export default {
        name: "Dropdown",


        data: function (){
            return {
                selectedOption: null,
            }
        },

        methods: {
            optionChanged: function () {
                this.$emit('update:option', this.selectOption);
            }
        }
    }
</script>

<style scoped>

</style>
