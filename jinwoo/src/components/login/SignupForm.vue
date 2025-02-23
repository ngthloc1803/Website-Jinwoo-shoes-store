<template>
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-26">
						Đăng ký
					</span>
					<span class="login100-form-title p-b-48">
						<img src="jinwoo_title.png" alt="title">
					</span>

                    <div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input class="input100" type="name" v-model="name" placeholder="Họ và tên">
						<span class="focus-input100" data-placeholder="Email"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input class="input100" type="email" name="email" placeholder="Email">
						<span class="focus-input100" data-placeholder="Email"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<!-- <span class="btn-show-pass" @click="showpassword">
							{{ passwordFieldType1 === 'password' ? '👁 Hiện' : ' 👁 Ẩn' }}
						</span> -->
						<input class="input100" :type="passwordFieldType1" v-model="password" placeholder="Mật khẩu">
						<span class="focus-input100" data-placeholder="Password"></span>
					</div>

                    <div class="wrap-input100 validate-input" data-validate="Enter password">
						<!-- <span class="btn-show-pass" @click="showrepassword">
							{{ passwordFieldType2 === 'password' ? '👁 Hiện' : ' 👁 Ẩn' }}
						</span> -->
						<input class="input100" type="password" v-model="confirmedpasswordpassword" placeholder="Nhập lại mật khẩu">
						<span class="focus-input100" data-placeholder="Password"></span>
					</div>

                    <div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input class="input100" type="number" name="phone" placeholder="Số điện thoại">
						<span class="focus-input100" data-placeholder="#555555"></span>
					</div>


					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn">
								Sign Up
							</button>
						</div>
					</div>

					<div class="text-center p-t-115">
						<a class="txt2" href="/login">
							Log in
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name : "LoginForm",
	data () {
		return {
			password: "",
            confirmedpassword:"",
			passwordFieldType1: "password",
            passwordFieldType2: "password",
		}
	},
	methods : {
		showpassword () {
			this.passwordFieldType1 = this.passwordFieldType1 === "password" ? "text" : "password";
        },
        showrepassword () {
			this.passwordFieldType2 = this.passwordFieldType2 === "password" ? "text" : "password";
        },
	}
}
</script>

<style scoped>
.limiter {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}
.container-login100{
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 15px;
	background: rgb(73, 73, 73);
}

.wrap-login100{
	background-color: #ffffff;
	width: 390px;
	border-radius: 10px ;
	overflow: hidden;
	padding: 77px 55px 33px 55px;
	-webkit-box-shadow: 0 5px 10px 0 rgba(12, 12, 12, 0.1)

}
.p-b-26 {
    padding-bottom: 26px;
	
}

.login100-form{
	width: 100%;
	

}
.login100-form-title {
    display: block;
    font-family: Poppins-Bold;
    font-size: 30px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
}
/* 
input::-ms-reveal,
input::-ms-clear {
    display: none;
} */


.wrap-input100 {
    width: 100%;
    position: relative;
    border-bottom: 2px solid #adadad;
    margin-bottom: 37px;
	
}

.validate-input {
    position: relative;
}
.input100 {
    font-family: Poppins-Regular;
    font-size: 15px;
    color: #555555;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 45px;
    background: transparent;
    padding: 0 5px;
}
input {
    outline: none;
    border: none;
}
.focus-input100 {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
}
.container-login100-form-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 13px;
	
}
.wrap-login100-form-btn {
    width: 100%;
    display: block;
    position: relative;
    z-index: 1;
    border-radius: 25px;
    overflow: hidden;
    margin: 0 auto;
}
.login100-form-bgbtn {
    position: absolute;
    z-index: -1;
    width: 300%;
    height: 100%;
    background: #a64bf4;
    background: -webkit-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
    background: -o-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
    background: -moz-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
    background: linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
    top: 0;
    left: -100%;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}
.login100-form-btn {
    font-family: Poppins-Medium;
    font-size: 15px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 50px;
}
button {
    outline: none !important;
    border: none;
    background: transparent;
	cursor: pointer;
}
img {
	width:50%;
}
.p-t-115 {
    padding-top: 115px;
}
.text-center {
    text-align: center;
}
.btn-show-pass:hover {
    color: #6a7dfe;
    color: -webkit-linear-gradient(left, #21d4fd, #b721ff);
    color: -o-linear-gradient(left, #21d4fd, #b721ff);
    color: -moz-linear-gradient(left, #21d4fd, #b721ff);
    color: linear-gradient(left, #21d4fd, #b721ff);
}
.btn-show-pass {
    font-size: 15px;
    color: #999999;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex
;
    align-items: center;
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    padding-right: 5px;
    cursor: pointer;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}
</style>