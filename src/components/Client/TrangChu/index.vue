<template>
    <div class="account-banner">
        <div class="account-card">
            <div class="card">
                <div class="account-card__header">
                    <img src="../../../assets/image/star-top.png" alt="">
                    <span>TOP NẠP THẺ THÁNG 8</span>
                </div>
                <div class="account-card__body">
                    <ul class="account-list">
                        <li class="account-list__item">
                            <p></p>
                            <span>****25668987...</span>
                            <label>
                                4.550.000
                                <sup>đ</sup>
                            </label>
                        </li>
                        <li class="account-list__item">
                            <p></p>
                            <span>****25668987...</span>
                            <label>
                                4.550.000
                                <sup>đ</sup>
                            </label>
                        </li>
                        <li class="account-list__item">
                            <p></p>
                            <span>****25668987...</span>
                            <label>
                                4.550.000
                                <sup>đ</sup>
                            </label>
                        </li>
                        <li class="account-list__item">
                            <p>4</p>
                            <span>****25668987...</span>
                            <label>
                                4.550.000
                                <sup>đ</sup>
                            </label>
                        </li>
                        <li class="account-list__item">
                            <p>5</p>
                            <span>****25668987...</span>
                            <label>
                                4.550.000
                                <sup>đ</sup>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="account-card__footer">
                    <a href="/nap-tien">
                        <div class="btn">Nạp thẻ ngay</div>
                    </a>
                </div>
            </div>
        </div>
        <div class="banner-swiper">
            <Swiper :modules="[Autoplay, Pagination, Navigation]" :loop="true"
                :autoplay="{ delay: 3000, disableOnInteraction: false }" :pagination="{ clickable: true }"
                :navigation="{ nextEl: '.banner-next', prevEl: '.banner-prev' }">
                <SwiperSlide>
                    <a href="#" class="Banner1">
                        <img src="../../../assets/image/banner.png" alt="">
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#" class="Banner2">
                        <img src="../../../assets/image/banner.png" alt="">
                    </a>
                </SwiperSlide>
                <div class="banner-prev"></div>
                <div class="banner-next"></div>
            </Swiper>
        </div>
    </div>
</template>
<script setup>
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
</script>
<style>
.account-banner {
    margin-top: 16px !important;
    padding-bottom: 12px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    margin: 0 -15px;
}

.account-card {
    margin-top: 16px;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}

.account-card__header {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 16px;
}

.account-card__header img {
    padding-right: 5px;
}

.account-card__header span {
    color: #1B1D29;
    font-size: 16px;
    font-weight: 700;
}

.account-card__body {
    margin-top: 16px;
}

.account-list {
    position: relative;
    margin-bottom: 12px;
}

.account-list__item {
    height: 30px;
    position: relative;
    margin-bottom: 8px;
    padding: 0 15px;
}

.account-list__item:nth-child(-n+3) p:first-child {
    background-image: url(../../../assets/image/star.png);
    float: left;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    display: inline-block;
    text-align: center;
    width: 26px;
    height: 26px;
    line-height: 26px;
    border-radius: 50%;
}

.account-list__item:nth-child(n+4) p:first-child {
    float: left;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    display: inline-block;
    text-align: center;
    width: 26px;
    height: 26px;
    line-height: 26px;
    border-radius: 50%;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
}

.account-list__item span {
    margin: 0 110px 0 35px;
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    color: #414141;
    display: block;
    height: 26px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.account-list__item label {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    width: 118px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    white-space: nowrap;
    font-weight: 400;
    font-size: 14px;
    color: #414141;
    border-radius: 4px;
}

.account-list__item label sup {
    position: relative;
    top: -0.5em;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
}

.account-card__footer {
    padding: 0 15px;
}

.account-card__footer a div {
    padding: 8px 16px;
    color: #fff;
    text-align: center;
    margin-bottom: 12px;
}

.banner-swiper {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}

.banner-swiper .swiper-slide {
    position: relative;
    padding-bottom: 40%;
    border-radius: 100%;
}

.banner-swiper .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    border-radius: 12px;
    z-index: 100;
}

.banner-prev {
    display: none;
    position: absolute;
    top: 48%;
    left: 0;
    width: 40px;
    height: 40px;
    background-image: url(../../../assets/svg/navigation-swiper.svg);
    background-color: rgba(220, 222, 233, 0.5);
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0 100% 100% 0;
    cursor: pointer;
    z-index: 10;
    visibility: visible;
}

.banner-next {
    display: none;
    position: absolute;
    top: 48%;
    right: 0;
    width: 40px;
    height: 40px;
    background-image: url(../../../assets/svg/navigation-swiper.svg);
    background-color: rgba(220, 222, 233, 0.5);
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0 100% 100% 0;
    cursor: pointer;
    z-index: 10;
    visibility: visible;
    transform: rotate(-180deg);
}

.banner-swiper .swiper-pagination {
    left: 50%;
    transform: translate(-50%);
    bottom: 4px;
}

.banner-swiper .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
    width: 16px;
    height: 8px;
    border-radius: 100px;
    background: var(--primary-color);
    transition: .2s;
}

.banner-swiper .swiper-pagination .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: #FFFFFF;
    opacity: 1;
    transition: .2s;
    border: none;
    margin: 0 4px;
}


/* Giao diện PC tương đương với lg trong Tailwind */
@media (min-width: 1024px) {
    .account-card {
        margin-top: 0;
        flex: 0 0 25%;
        max-width: 25%;
    }

    .account-list__item {
        height: 40px;
        margin-bottom: 12px;
    }

    .banner-swiper {
        flex: 0 0 75%;
        max-width: 75%;
    }

    .account-banner {
        flex-direction: unset;
    }

    .banner-prev {
        display: block;
    }

    .banner-next {
        display: block;
    }
}
</style>