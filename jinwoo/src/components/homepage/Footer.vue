<template>
    <footer>
        <div class="container-footer">
            <div class="info-jinwoo" >
                <img src="@/assets/JINWOO.png" alt="logo-home">
                <h4>Công Ty Cổ Phần Giày Dép Jinwoo</h4>
                <p>Địa chỉ trụ sở: 36/9 Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh, Việt Nam           </p>
                <p>Địa chỉ liên hệ: 9-11 Đường 59A, Phường Thạnh Mỹ Lợi, TP. Thủ Đức, TP. Hồ Chí Minh, Việt Nam               </p>
                <p>Hotline: 1900 1900</p>
                <p>Email: jinwoostore2002@gmail.com</p>
                <p>© 2019 - 2022. Golden Summer Fashion Co Ltd. All rights reserved                </p>

            </div>

            <div class="info-support">
                <h4>HỖ TRỢ KHÁCH hàng </h4>
                <p>Quy định chung </p>
                <p>Chính sách thanh toán  </p>
                <p>Chính sách giao hàng </p>
                <p>Chính sách đổi trả</p>
                <p>Chính sách bảo hành </p>
                <p>Chính sách bảo mật</p>
            </div>

            <div class="info-guide">
                <h4>VỀ GOSUMO</h4>
                <p>Giới thiệu Gosumo</p>
                <p>Thông tin liên hệ</p>
                <p>Hướng dẫn chọn size</p>
                <p>Hệ thống cửa hàng</p>
            </div>

            <div class="info-promotion">
                <h3>Nhận Thông Tin Ưu Đãi Từ JINWOO </h3>
                <form @submit.prevent="submitEmail">
                    <div class="input-group">
                    <input type="email" class="mail-input" placeholder="Nhập địa chỉ email" v-model="email"   required>
                    <div class="input-group-btn btn-action">
                        <button type="submit" value="đăng ký" >Đăng ký</button>
                    </div>
                </div>
                </form>
                <div class="media">
                    <span class="media-icon"><a href="https://www.facebook.com/d.beckben/" target="_blank"><i class="fa fa-facebook-square" style="font-size:36px"></i></a></span>
                    <span class="media-icon"><a href="https://www.instagram.com/d.beckben/" target="_blank"><i class="fa fa-instagram" style="font-size:36px"></i></a></span>
                    <span class="media-icon"><a href="#"><i class="fa fa-twitter" style="font-size:36px"></i></a></span>
                </div>
            </div>

        </div>
    </footer>
</template>

<script>
export default{
    name: "FooterComponent",
    data(){
        return {
            email: "",

        };
    },
    methods: {
        submitEmail(event){
            if(!this.email.trim()){
                event.target.querySelector("input").reportValidity(); 
            }
            else {
                alert("Đăng ký thành công với email: " + this.email);
            }
        },
        
    },
};
</script>

<style scoped>
footer{
    box-sizing: border-box;
    background-color: black;
    color: white;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    
}

.container-footer {
    display: flex;
    justify-content: space-around;
    align-items: top;
    padding: 50px 20px;
    list-style: none;
    
}

.info-jinwoo, .info-support, .info-guide, .info-promotion{
    text-align: justify;
}
.info-promotion .input-group{
    display: flex;
    align-items: center;
    border: 2px solid white;
    max-width: 500px;
    background-color: white;
    border-radius: 50px;
    outline: none;
    overflow: hidden;
    width: 100%;
}

.info-promotion .mail-input{
    padding: 10px;
    font-size: 16px ;
    border: none;
    outline: none;
    flex: 1;
    width: 250px;
    
}

.info-promotion .btn-action button {
    background-color: rgb(51, 47, 47);
    color: #fff;
    border: none;
    padding: 12px 20px;
    cursor: pointer;
    transition: 0.3 ease-in-out;
    white-space: nowrap;
    border-radius: 50px;
}
.info-promotion .btn-action button:hover{
    background-color:rgb(92, 89, 89);
}

.media{
    display:flex;
    gap: 30px;
    padding: 20px;
}

.media-icon i{
    color: white;
}

.info-jinwoo img{
    width: 300px;
}

.media .media-icon i:hover{
    color: yellow;
}
.error-message {
    color: red;
    margin-top: 5px;
}

</style>