<template>
    <header class="header">
        <nav class="header">
            <div class="container c-container header-container">
                <div class="box-logo">
                    <router-link to="/">
                        <img src="../../../assets/svg/logo.svg" alt="">
                    </router-link>
                </div>
                <div class="box-actions">
                    <div class="box-menu c-mr-16">
                        <div class="box-menu-bar">
                            <div class="box-icon brs-8 c-mr-8">
                                <img src="../../../assets/svg/menu.svg" alt="">
                            </div>
                            <span class="box-icon-text lh-40 fw-700">Danh mục</span>
                        </div>
                        <div class="menu-list">
                            <div class="menu-category">
                                <div class="container c-container">
                                    <ul style="display: flex; justify-content: space-between; padding: 0; margin: auto;">
                                        <li class="w-100 c-px-4">
                                            <router-link to="/">
                                                <div class="c-p-8 brs-8" style="display: flex; justify-content:center; white-space: nowrap;">
                                                    <div>
                                                        <img src="../../../assets/image/home.png" alt="" class="c-pr-4">
                                                    </div>
                                                    <span class="fw-500 fz-15 lh-24">Trang chủ</span>
                                                </div>
                                            </router-link>
                                        </li>
                                        <li class="w-100 c-px-4">
                                            <router-link to="/">
                                                <div class="c-p-8 brs-8" style="display: flex; justify-content:center; white-space: nowrap;">
                                                    <div>
                                                        <img src="../../../assets/image/charge.png" alt="" class="c-pr-4">
                                                    </div>
                                                    <span class="fw-500 fz-15 lh-24">Nạp tiền</span>
                                                </div>
                                            </router-link>
                                        </li>
                                        <li class="w-100 c-px-4">
                                            <router-link to="/">
                                                <div class="c-p-8 brs-8" style="display: flex; justify-content:center; white-space: nowrap;">
                                                    <div>
                                                        <img src="../../../assets/image/buy-acc.png" alt="" class="c-pr-4">
                                                    </div>
                                                    <span class="fw-500 fz-15 lh-24">Mua Acc</span>
                                                </div>
                                            </router-link>
                                        </li>
                                        <li class="w-100 c-px-4">
                                            <router-link to="/">
                                                <div class="c-p-8 brs-8" style="display: flex; justify-content:center; white-space: nowrap;">
                                                    <div>
                                                        <img src="../../../assets/image/service.png" alt="" class="c-pr-4">
                                                    </div>
                                                    <span class="fw-500 fz-15 lh-24">Dịch vụ</span>
                                                </div>
                                            </router-link>
                                        </li>
                                        <li class="w-100 c-px-4">
                                            <router-link to="/">
                                                <div class="c-p-8 brs-8" style="display: flex; justify-content:center; white-space: nowrap;">
                                                    <div>
                                                        <img src="../../../assets/image/news.png" alt="" class="c-pr-4">
                                                    </div>
                                                    <span class="fw-500 fz-15 lh-24">Tin tức</span>
                                                </div>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-view box-menu-bar">
                        <div class="box-icon brs-8 c-mr-8">
                            <img src="../../../assets/image/viewed.png" alt="" style="filter: invert(80%);">
                        </div>
                        <span class="box-icon-text lh-40 fw-700">Đã xem</span>
                    </div>
                </div>
                <div class="box-search">
                    <form action="" class="form-search" id="formSearchHeader">
                        <input type="search" placeholder="Tìm kiếm" class="has-submit" id="search-header-input">
                        <button type="submit"></button>
                    </form>

                </div>
                <div class="box-user">
                    <a href="btn primary handle-recharge-modal" class="">Nạp tiền</a>
                </div>
            </div>
        </nav>
    </header>
</template>
<script setup>
import '../../../assets/css/header.css';
</script>
<style></style>