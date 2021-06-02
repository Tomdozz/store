<template>
    <button @click="onClick" class="save-button">
        <slot>Button</slot>
    </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');

.save-button {
    display: inline-block;
    padding: 0.40em 1.8em;
    border: 0.1em solid rgba(0, 0, 0, 0.515);
    margin: 0 0.4em 0.4em 0;
    border-radius: 0.92rem;
    text-decoration: none;
    box-sizing: border-box;
    color: black;
    text-align: center;
    transition: all 0.2s;
    font-family: 'Montserrat', sans-serif;
}

.save-button:hover{
    border-radius: 0.52rem;
    color:#000000;
    background-color: rgba(0,0,0,0.2);
}
</style>