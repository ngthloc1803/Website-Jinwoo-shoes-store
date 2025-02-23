<template>
    <div class="container-hot-product">
        <div style="color:aliceblue">
            <H1>- Sản phẩm nổi bật -</H1>
        </div>
        <swiper 
        :modules="modules"
        :slides-per-view="5"
        :space-around="30"
        :navigation="true"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000 }"
        :loop="true"
        class="product-wrapper">
            <swiper-slide v-for="(product,index) in products" :key="index" class="product-item">
                    <a href="#" class="product-link">
                        <img :src="getImageUrl(product.img)" alt="card image" class="product-image">
                        <p class="product-brand">{{product.brand}}</p>
                        <h3 class="product-name-">{{ product.name }}</h3>
                        <h5 class="product-price">${{ product.price.toFixed(2) }}</h5>
                    </a>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { onMounted, ref } from "vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import axios from "axios";

export default {
    name :"introduction3_hotproduct",
    components:{
        Swiper, SwiperSlide
    },
    setup() {
        const products = ref([]);
        const modules = ref([Navigation, Pagination, Autoplay]);

        const fetchProducts = async () => {
            try {
                const response = await axios.get("/api/products");
                products.value = response.data;
            } catch (error) {
                console.log ("Lỗi lấy sản phẩm: ", error);
            }
        }


        onMounted(fetchProducts);

        return { 
            modules,
            products,
            
        };
    },
    methods: {
        getImageUrl(imagePath) {
            return require(`@/assets/${imagePath}`);
        }
}

   
};

</script>

<style scoped>
.container-hot-product {
    padding: 10px 0;
    background-color: rgb(0, 0, 0) ;
    margin: 10px 0;
    min-height: 10rem;
}


:deep(.swiper-slide) {
    
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px; /* Bo góc */
    transition: transform 0.5s ease-in-out;
    gap: 10px;

}

:deep(.swiper-button-prev)::after, 
:deep(.swiper-button-next)::after {
    
    font-size: 30px;
    
    
}

:deep(.swiper-button-prev), 
:deep(.swiper-button-next) {
    position: absolute;
    border-radius: 50%;
    background-color: aliceblue;
    color: black;
    padding: 10px;
    opacity: 50%;
    font-size: 20px;
    width:30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    
}
:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
    background-color: rgba(251, 255, 0, 0.8); 
}
:deep(.swiper-button-prev) {
    left: 40px;  
}

/* Dịch nút Next vào bên trong */
:deep(.swiper-button-next) {
    right: 40px;  
}
:deep(.swiper-pagination){
    padding: 10px;
}
:deep(.swiper-pagination-bullet){
    width: 12px;
    height: 12px;
    background-color: aliceblue;
    transition: all 0.3s ease-in-out;
    margin: 0 9px;

}

.product-wrapper {
    width: auto;
    height: 50%;
    padding: 30px ;
    justify-content: space-between;
    display: flex;
}

.product-link{
    display: block;
    text-decoration: none;
    padding: 20px;
    text-align: left;
    color: black;
    background-color: white;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    border-radius: 10px;


}


.product-link .product-image {
    
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
    border-radius: 10px;
    

}



.product-item .product-link .product-brand {
    font-size: 16px;

}
.product-item .product-link .product-price {
    color: rgb(207, 46, 46);

}

.product-list .product-item .product-link:hover img {
    transition: all 0.2s ease-in-out  ;
    transform: scale(0.7);
    
}
</style>