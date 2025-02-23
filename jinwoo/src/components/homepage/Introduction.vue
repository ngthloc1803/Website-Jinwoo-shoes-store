<template>
    <div class="slider">
        <div class="list-intro" :style="{ left: `-${currentIndex * 100}%` }">
            <div class="item" v-for="(slider, index) in sliders" :key="index">
                <img :src="slider.img" alt=""/>
            </div>
        </div>
        <div class="button-next-and-prev">
            <button @click="prevSlide">
                <i class="fa fa-angle-left" style="font-size:36px"></i>
            </button>
            <button @click="nextSlide">
                <i class="fa fa-angle-right" style="font-size:36px"></i>

            </button>
        </div>

        <div class="dots">
            <li v-for="(slider,index) in sliders" :key="index"
                :class="{active: index === currentIndex}"
                @click="goToSlide(index)">
            </li>
            
        </div>
    </div>
        
</template>

<script>
export default {
    name: "IntroductionSection",
    data() {
        return {
            sliders: [
                {img:require('@/assets/background_intro/1.png'),
                
                },
                {img:require('@/assets/background_intro/2.png')

                },
                {img:require('@/assets/background_intro/3.png'),

                },
                {img:require('@/assets/background_intro/4.png'),

                },
                {img:require('@/assets/background_intro/5.png'),

                },
            ],
            currentIndex: 0,
            interval: null
        };
    },
    methods: {
        nextSlide(){
            this.currentIndex = (this.currentIndex + 1) % this.sliders.length;
        },
        prevSlide(){
            this.currentIndex = (this.currentIndex - 1 + this.sliders.length) % this.sliders.length;
        },
        goToSlide(index) {
            this.currentIndex = index;
        },
        startAutoSlide(){
            this.interval = setInterval(this.nextSlide, 5000);
        },
        stopAutoSlide(){
            clearInterval(this.interval);
        }
    },
    mounted(){
        this.startAutoSlide();
    },
    beforeMount(){
        this.stopAutoSlide();
    }
};
</script>

<style scoped>
.slider {
    position: relative;
    width: 100vw;
    max-width: 100vw;
    height: 800px;
    overflow-x: hidden;
    overflow-y: hidden;
    
}
.list-intro{
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    transition: left 0.5s ease-in-out;
    height: 100%;
}

.item{
    flex: 0 0 100vw;
    width: 100%;
    height: 100%;
}

.list-intro img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1920/720;
    object-fit: cover;
}

.button-next-and-prev{
    position: absolute;
    top: 45%;
    left: 5%;
    display: flex;
    width: 90%;
    justify-content: space-between;
    transform: translateY(-50%);

}
.button-next-and-prev button {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background-color: darkgray ;
    font-family: monospace;
}
.button-next-and-prev button:hover {
    background-color: yellow;
}

.dots{
    position: absolute;
    left: 0;
    bottom: 10%;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}
.dots li {
    list-style: none;
    width: 10px;
    height: 10px;
    background-color: #fff ;
    margin: 20px;
    border-radius: 20px ;
    cursor: pointer;
}

.dots li.active {   
    width: 30px;   
}
</style>
