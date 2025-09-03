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
    </div>
</template>
<script setup>

</script>
<style>
.account-banner {
    margin-top: 16px !important;
    padding-bottom: 12px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
}

.account-card {
    flex: 0 0 25%;
    max-width: 25%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}

.card {
    height: 368.59px;
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
    height: 40px;
    position: relative;
    margin-bottom: 12px;
    padding: 0 15px;
}

.account-list__item:nth-child(-n+3) p:first-child {
    background: url(../../../assets/image/star.png);
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
</style>