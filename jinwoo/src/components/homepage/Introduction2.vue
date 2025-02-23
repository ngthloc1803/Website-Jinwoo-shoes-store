<template>
    <div class="container-introduction2">
        <div class="items moving">
            <img class="img-fluid mx-auto" loading="lazy" src="https://file.hstatic.net/1000366086/file/policies_icon_1__1_.png" alt="">
            <ul>
                <h3>Miễn phí vận chuyển</h3>
                <p>Đơn hàng từng 600k</p>
            </ul>
        </div>
        <div class="items promotion">
            <img class="img-fluid mx-auto" loading="lazy" src="https://file.hstatic.net/1000366086/file/policies_icon_2__1_.png"  alt="">
            <ul>
                <h3>Ưu đãi hấp dẫn</h3>
                <p>Nhiều quà khuyến mãi</p>
            </ul>
        </div>
        <div class="items genuine">
            <img class="img-fluid mx-auto" loading="lazy" src="https://file.hstatic.net/1000366086/file/policies_icon_3__1_.png"  alt="">
            <ul>
                <h3>100% Chính hãng</h3>
                <p>Đảm bảo chất lương</p>
            </ul>
        </div>
        <div class="items hotline">
            <img class="img-fluid mx-auto" loading="lazy" src="https://file.hstatic.net/1000366086/file/policies_icon_4__1_.png"  alt="">
            <ul>
                <h3>Hotline: 1900 1900</h3>
                <p>Gọi ngay để mua hàng nhanh hơn</p>
            </ul>
        </div>
    </div>
    
</template>

<script>
export default{
    name: "IntroductionSection2"
}
</script>

<style scope>
.container-introduction2{
    display: flex;
    justify-content: space-evenly;
    padding: 3rem 1rem ;

}
.items{
    display: flex;
    align-items: center;
    gap: -4rem;
}
.items img {
   width: 50px;
   height: 50px;
}
.items ul{
    list-style: none;
    font-family: 'Mulish',sans-serif;
    margin: 0;
    justify-items: flex-start;
    align-items: center;
    align-content: center;
}
.items h3{
    font-size: 16px;
    font-weight: bold;
}
.items p{
    font-size: 14px;
}

</style>