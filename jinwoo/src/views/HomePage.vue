<template>
    <HeaderComponent/>
    
    <div class="container-homepage">
        <Introduction/>
        <Introduction2/>
        <Introduction3_hotproduct/>
    </div>


    <FooterComponent/>
</template>

<script>
    import HeaderComponent from '../components/homepage/Header.vue';
    import FooterComponent from '../components/homepage/Footer.vue';
    import Introduction from '../components/homepage/Introduction.vue';
    import Introduction2 from '../components/homepage/Introduction2.vue';
    import Introduction3_hotproduct from '../components/homepage/Introduction3_hotproduct.vue';

    export default{
        components: {
            HeaderComponent, Introduction, FooterComponent, Introduction2, Introduction3_hotproduct
        },
        name:"HomePage",
    };
</script>

<style>
#app {
    font-family: 'Sarabun', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;

}

.container-homepage {
    height: auto;
    width: 100vw;

    
}
</style>

