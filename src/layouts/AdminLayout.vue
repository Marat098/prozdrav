<template>
    <nav>
        <div class="logo-name">
            <div class="logo-image">
                <img src="images/logo.png" alt="">
            </div>

            <span class="logo_name">CodingLab</span>
        </div>

        <div class="menu-items">
            <ul class="nav-links">
                <li><a href="#">
                    <i class="uil uil-estate"></i>
                    <span class="link-name">Города</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-files-landscapes"></i>
                    <span class="link-name">Статьи</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-chart"></i>
                    <span class="link-name">Болезни</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-thumbs-up"></i>
                    <span class="link-name">Врачи</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-comments"></i>
                    <span class="link-name">Клиники</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-share"></i>
                    <span class="link-name">Процедуры</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-share"></i>
                    <span class="link-name">Диагностики</span>
                </a></li>
                <li><a href="#">
                    <i class="uil uil-share"></i>
                    <span class="link-name">Акции</span>
                </a></li>
            </ul>
            
            <ul class="logout-mode">
                <li><a href="#">
                    <i class="uil uil-signout"></i>
                    <span class="link-name">Logout</span>
                </a></li>
            </ul>
        </div>
    </nav>

    <section class="dashboard">
        <div class="top">
            <i class="uil uil-bars sidebar-toggle"></i>
        </div>
        <div class="admin-content">
            <router-view></router-view>
        </div>

    </section>
</template>
<script>
export default {
    mounted (){
      this.$nextTick(function () {
        const body = document.querySelector("body");
        let sidebar = body.querySelector("nav");
        let sidebarToggle = body.querySelector(".sidebar-toggle");

        let getMode = localStorage.getItem("mode");
        if(getMode && getMode ==="dark"){
            body.classList.toggle("dark");
        }

        let getStatus = localStorage.getItem("status");
        if(getStatus && getStatus ==="close"){
            sidebar.classList.toggle("close");
        }

        sidebarToggle.addEventListener("click", () => {
            sidebar.classList.toggle("close");
            if(sidebar.classList.contains("close")){
                localStorage.setItem("status", "close");
            }else{
                localStorage.setItem("status", "open");
            }
        })
    })
      
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
/* ===== Google Font Import - Poppins ===== */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body{
    min-height: 100vh;
    background-color: $--primary-color;
}
/* === Custom Scroll Bar CSS === */
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-track {
    background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
    background: $--primary-color;
    border-radius: 12px;
    transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
    background: #0b3cc1;
}

body.dark::-webkit-scrollbar-thumb:hover,
body.dark .activity-data::-webkit-scrollbar-thumb:hover{
    background: #3A3B3C;
}

nav{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    padding: 10px 14px;
    background-color: $--panel-color;
    border-right: 1px solid $--border-color;
    transition: $--tran-05;
}
nav.close{
    width: 73px;
}
nav .logo-name{
    display: flex;
    align-items: center;
}
nav .logo-image{
    display: flex;
    justify-content: center;
    min-width: 45px;
}
nav .logo-image img{
    width: 40px;
    object-fit: cover;
    border-radius: 50%;
}

nav .logo-name .logo_name{
    font-size: 18px;
    font-weight: 600;
    color: $--text-color;
    margin-left: 14px;
    transition: $--tran-05;
}
nav.close .logo_name{
    opacity: 0;
    pointer-events: none;
}
nav .menu-items{
    margin-top: 40px;
    height: calc(100% - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y  : auto;
    overflow-x: hidden;
}
.menu-items li{
    list-style: none;
}
.menu-items li a{
    display: flex;
    align-items: center;
    height: 35px;
    text-decoration: none;
    position: relative;
}
.nav-links li a:hover:before{
    content: "";
    position: absolute;
    left: -7px;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background-color: $--primary-color;
}
body.dark li a:hover:before{
    background-color: $--text-color;
}
.menu-items li a i{
    font-size: 20px;
    min-width: 45px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $--black-light-color;
}
.menu-items li a .link-name{
    font-size: 14px;
    font-weight: 400;
    color: $--black-light-color;    
    transition: $--tran-05;
}
nav.close li a .link-name{
    opacity: 0;
    pointer-events: none;
}
.nav-links li a:hover i,
.nav-links li a:hover .link-name{
    color: $--primary-color;
}
.menu-items .logout-mode{
    padding-top: 10px;
    border-top: 1px solid $--border-color;
}
.menu-items .mode{
    display: flex;
    align-items: center;
    white-space: nowrap;
}
.menu-items .mode-toggle{
    position: absolute;
    right: 14px;
    height: 50px;
    min-width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.mode-toggle .switch{
    position: relative;
    display: inline-block;
    height: 22px;
    width: 40px;
    border-radius: 25px;
    background-color: $--toggle-color;
}
.switch:before{
    content: "";
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    height: 15px;
    width: 15px;
    background-color: $--panel-color;
    border-radius: 50%;
    transition: $--tran-03;
}
body.dark .switch:before{
    left: 20px;
}

.dashboard{
    position: relative;
    left: 250px;
    background-color: $--panel-color;
    min-height: 100vh;
    width: calc(100% - 250px);
    padding: 10px 14px;
    transition: $--tran-05;
}
nav.close ~ .dashboard{
    left: 73px;
    width: calc(100% - 73px);
}
.dashboard .top{
    position: fixed;
    top: 0;
    left: 250px;
    display: flex;
    width: calc(100% - 250px);
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px;
    background-color: $--panel-color;
    transition: $--tran-05;
    z-index: 10;
}
nav.close ~ .dashboard .top{
    left: 73px;
    width: calc(100% - 73px);
}
.dashboard .top .sidebar-toggle{
    font-size: 26px;
    color: $--text-color;
    cursor: pointer;
}
.dashboard .top .search-box{
    position: relative;
    height: 45px;
    max-width: 600px;
    width: 100%;
    margin: 0 30px;
}
.top .search-box input{
    position: absolute;
    border: 1px solid $--border-color;
    background-color: $--panel-color;
    padding: 0 25px 0 50px;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    color: $--text-color;
    font-size: 15px;
    font-weight: 400;
    outline: none;
}
.top .search-box i{
    position: absolute;
    left: 15px;
    font-size: 22px;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    color: $--black-light-color;
}
.top img{
    width: 40px;
    border-radius: 50%;
}

@media (max-width: 1000px) {
    nav{
        width: 73px;
    }
    nav.close{
        width: 250px;
    }
    nav .logo_name{
        opacity: 0;
        pointer-events: none;
    }
    nav.close .logo_name{
        opacity: 1;
        pointer-events: auto;
    }
    nav li a .link-name{
        opacity: 0;
        pointer-events: none;
    }
    nav.close li a .link-name{
        opacity: 1;
        pointer-events: auto;
    }
    nav ~ .dashboard{
        left: 73px;
        width: calc(100% - 73px);
    }
    nav.close ~ .dashboard{
        left: 250px;
        width: calc(100% - 250px);
    }
    nav ~ .dashboard .top{
        left: 73px;
        width: calc(100% - 73px);
    }
    nav.close ~ .dashboard .top{
        left: 250px;
        width: calc(100% - 250px);
    }
}

// @media (max-width: 500px) {
//     .dashboard .top .sidebar-toggle{
//         display: none;
//     }
// }

</style>