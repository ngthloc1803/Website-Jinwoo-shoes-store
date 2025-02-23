<template>
    <HeaderComponent/>
    
    <div class="container-login">
        <SignupForm/>
    </div>


    <FooterComponent/>
</template>

<script>
    import FooterComponent from '../components/homepage/Footer.vue';
    import HeaderComponent from '../components/homepage/Header.vue';
    import SignupForm from '../components/login/SignupForm.vue';

    export default{
        components: {
            HeaderComponent,  FooterComponent, SignupForm
        },
        name:"LoginPage",
    };
</script>

<style>
.container-login{
    padding: 0;
    background-color: gray ;
}
</style>

