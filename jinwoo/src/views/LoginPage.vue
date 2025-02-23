<template>
    <HeaderComponent/>
    
    <div class="container-login">
        <LoginForm/>
    </div>


    <FooterComponent/>
</template>

<script>
    import FooterComponent from '../components/homepage/Footer.vue';
    import HeaderComponent from '../components/homepage/Header.vue';
    import LoginForm from '../components/login/LoginForm.vue';

    export default{
        components: {
            HeaderComponent,  FooterComponent, LoginForm
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

