<template>
    <header>
        <nav class="nav-container">
            <div class="left-section">
                <div class="logopage">
                    <a href="/">
                        <img alt="Vue logo" src="@/assets/JINWOO.png">
                    </a>
                </div>
            </div>

            <div class="center-section">
                <ul class="menu">
                    <li>
                        <a href="#">Giới thiệu</a>
                    </li>
                    <li>
                        <a href="#">Nike</a>
                        <ul class="dropdown">
                            <li><a href="#">Air Force 1</a></li>
                            <li><a href="#">Air Jordan</a></li>
                            <li><a href="#">Dunk</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Adidas</a>
                        <ul class="dropdown">
                            <li><a href="#">Original</a></li>
                            <li><a href="#">Neo</a></li>
                            <li><a href="#">Stan Smith</a></li>
                            <li><a href="#">Samba</a></li>
                        </ul>
                    </li>
                        
                    <li>
                        <a href="#">Giày da</a>
                        <ul class="dropdown">
                            <li><a href="#">Oxford</a></li>
                            <li><a href="#">Derby </a></li>
                            <li><a href="#">Giày lười Loafer</a></li>
                            <li><a href="#">Chelsea Boot</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Sport</a>
                        <ul class="dropdown">
                            <li><a href="#">Bóng đá</a></li>
                            <li><a href="#">Bóng chuyền</a></li>
                            <li><a href="#">Tennis</a></li>
                            <li><a href="#">Pickleball</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Sale</a></li>
                </ul>
            </div>
            
            <div class="right-section">
                <div class="icons">
                    <span class="icon"><i class="fa fa-search"></i></span>
                    <div class="user-menu">
                        <span class="icon"><i class="fa fa-user"></i> </span>
                        <div class="user-dropdown">
                            <a href="/login">Đăng nhập</a>
                            <a href="/sign-up">Đăng ký</a>
                        </div>
                    </div>
                    <span class="icon cart">
                        <i class="fa fa-shopping-cart"></i>
                    </span>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
};
</script>

<style scoped>
/* Header */
header {
    box-sizing: border-box;
    background-color: black;
    color: white;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
    left: 0;
    height: 10rem;
    
}

/* Flexbox cho header */
.nav-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
}

/* Phần giữ chỗ bên trái */
.left-section {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    width: 15%;
}

.logopage img {
    max-width: 250px;
    height: auto;
}

.center-section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
}

.menu {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 30px;
    width: 100%;
    padding: 0;
    position: relative;
}
.menu li {
    position: relative;
}

.menu li a{
    position: relative;
    display: flex;
    padding: 5px 10px;
    font-size: 16px;
    text-transform: uppercase;
    color: white;
    text-decoration: none;

}
.menu li a:hover {
    background-color: yellow;
    color: black;
    border-radius: 20px ;
    border: none;
}

.dropdown{
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 200px; /* Độ rộng dropdown */
    background-color: black; /* Nền đen */
    padding: 10px 0; /* Thêm padding để nhìn đẹp hơn */
    border-radius: 5px; /* Bo góc */
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
    z-index: 1000;
    list-style: none   ;
    

}
.dropdown li {
    width: 100%;
    padding: 10px;
}

.dropdown li a {
    color: white;
    display: block;
    text-decoration: none;
    text-align: left;

}

.dropdown li a:hover {
    background-color: yellow;
    color: black;
    border: none;
    border-radius: 0px ;
    width: 100%;
}
.menu li:hover .dropdown {
    display: block;
    background-color: black;
    
}

/* Biểu tượng bên phải */
.right-section {
    display: flex;
    justify-content: flex-end;
    width: 15%;
    padding: 0 20px;
}
.icons {
    display: flex;
    align-items: center;
    gap: 30px;
}

/* Căn chỉnh icon */
.icon {
    font-size: 22px;
    color: white;
    cursor: pointer;
    transition: 0.3s;
    
}

.icon:hover {
    color: yellow;
}




.user-menu{
    position: relative;
    display: flex;
    justify-content: center;
}

.user-dropdown{
    position: absolute;
    display: none ;
    top:120%;
    color: #ffffff;
    background-color: #969494;
    padding: 10px 0;
    text-align: center;
    border-radius: 10px;
    width: 120px;
    justify-items: center;
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);

    transition: .5s ease-in-out;
    
}

.user-dropdown::before {
    content: "";
    position: absolute;
    top: -8px; 
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #969494; /* Màu của dropdown */
}

.user-menu:hover .user-dropdown {
    display: block;
}
.user-dropdown a{
    display: block;
    text-decoration: none;
    font-size: 14px;
    padding: 10px;
    color: #fff
}
.user-dropdown a:hover {
    background-color: yellow;
    color: black;
    border-radius: 10px;
    width: 90px;
}
/* Responsive */
@media (max-width: 768px) {
    .logopage img {
        max-width: 80px;
    }
    .icon {
        font-size: 18px;
    }
}
</style>


<!-- Import Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
