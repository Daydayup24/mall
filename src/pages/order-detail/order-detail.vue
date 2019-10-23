<template>
  <div class="order-detail">
    <div class="info-img img-daifahuo"
         v-if="false"></div>
    <div class="info-img img-yifahuo"
         v-else-if="false"></div>
    <div class="info-img img-success"
         v-else></div>
    <div class="user-info">
      <p class="user">收货人：王先生</p>
      <p class="tel">13883423756</p>
      <p class="address">地址：四川省 成都市 锦江区 爵板街1号附1号泰丰嘉裕</p>
    </div>
    <div class="margin"></div>
    <div class="shop-info">
      <div class="item-header">
        <div class="shop-avatar"></div>
        <div class="shop-name">奔跑的蜗牛</div>
        <div class="right">
          <van-icon name="arrow"
                    size=".14rem" />
        </div>
        <div class="status status-going"
             v-if="false">配送中</div>
        <div class="status status-success"
             v-else-if="true">交易成功</div>
      </div>
      <div class="desc">
        <div class="desc-img"></div>
        <div class="desc-info">
          <div class="text">极米100英寸 16:10 电动幕布(静音调控 家庭高清影院哈哈哈哈哈哈哈哈</div>
          <div class="price">￥79.00</div>
          <div class="inventory">库存：123</div>
        </div>
      </div>
      <div class="true-price">
        <span>实付金额</span>
        <span>￥<i>79</i>.00</span>
      </div>
    </div>
    <div class="margin"></div>
    <div class="order-info-warp">
      <div class="order-info">
        <p>
          <span>订单编号</span>
          <span>607595137412500886</span>
        </p>
        <p>
          <span>购买时间</span>
          <span>2019-10-21 10:20:34</span>
        </p>
        <p v-if="true">
          <span>发货时间</span>
          <span>2019-10-21 14:20:34</span>
        </p>
        <p v-if="true">
          <span>成交时间</span>
          <span>2019-10-24 14:20:34</span>
        </p>
      </div>
    </div>
    <!-- 占位 -->
    <div class="footer-flag"></div>
    <div class="order-footer order-footer-daifahuo"
         v-if="true">
      <button @click="show1=true">退款</button>
    </div>
    <div class="order-footer order-footer-yiifahuo"
         v-else-if="false">
      <button>退款</button>
      <button @click="show=true">确认收货</button>
    </div>
    <!-- 弹框 -->
    <div class="dialog-confirm"
         v-show="show">
      <div class="t-title">
        <button class="close"
                @click="show = false">
          <van-icon name="cross"
                    size=".14rem" />
        </button>
        <span>确认收货</span>
      </div>
      <div class="content">
        <p>成功收到商品，并确认收货！</p>
      </div>
      <div class="ok-btn"
           @click="show = false">确 认</div>
    </div>
    <van-overlay :show="show" />
    <!-- 弹框 -->
    <div class="dialog-refund"
         v-show="show1">
      <div class="t-title">
        <button class="close"
                @click="show1 = false">
          <van-icon name="cross"
                    size=".14rem" />
        </button>
        <span>退款申请</span>
      </div>
      <div class="content">
        <div class="select1">
          <h3 :class="1==1 ? 'select' : 'no-select'">我要退款（无需退货）</h3>
          <p>没收到货，或与卖家协商同意不用退货只退款</p>
        </div>
        <div class="select2">
          <h3 :class="1==1 ? 'no-select' : 'select'">我要退货退款</h3>
          <p>已收到货，需要退还收到的货物</p>
        </div>
      </div>
      <div class="ok-btn"
           @click="show1 = false">确 认</div>
    </div>
    <van-overlay :show="show1" />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data () {
    return {
      show: false, // 确认收货弹框
      show1: false // 退款申请弹框
    }
  },
  components: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.order-detail {
  height: 100%;
  overflow: hidden auto;
  .img-daifahuo {
    background: url(../../assets/images/daifahuo.png) no-repeat center;
  }
  .img-yifahuo {
    background: url(../../assets/images/yifahuo.png) no-repeat center;
  }
  .img-success {
    background: url(../../assets/images/success.png) no-repeat center;
  }
  .info-img {
    width: 3.75rem;
    height: 1.25rem;
    background-size: 100% 100%;
  }
  .user-info {
    width: 100%;
    height: 0.97rem;
    padding: 0.15rem 0.2rem;
    margin-bottom: 0.1rem;
    overflow: hidden;
    .user {
      height: 0.28rem;
      line-height: 0.28rem;
    }
    .user::before {
      content: "";
      float: left;
      margin-top: 0.08rem;
      margin-right: 0.05rem;
      width: 0.15rem;
      height: 0.12rem;
      background: url(../../assets/images/cart.png) no-repeat center;
      background-size: 100% 100%;
    }
    .tel {
      padding-left: 0.2rem;
      margin-bottom: 2px;
    }
    .address {
      padding-left: 0.2rem;
      font-size: 0.12rem;
      font-weight: 400;
      color: rgba(144, 144, 144, 1);
    }
  }
  .shop-info {
    width: 100%;
    height: 2.34rem;
    padding: 0 0.2rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.1rem;
    .item-header {
      height: 0.4rem;
      border-bottom: 1px solid #f1f4fb;
      display: flex;
      position: relative;
      align-items: center;
      .shop-avatar {
        width: 0.24rem;
        height: 0.24rem;
        border-radius: 5px;
        margin-right: 0.16rem;
        background: yellow;
      }
      .shop-name {
        font-size: 0.15rem;
        font-family: Helvetica, PingFangTC-Regular, PingFangTC;
        font-weight: 400;
        color: rgba(74, 74, 74, 1);
        margin-right: 2px;
      }
      .right {
        width: 0.14rem;
        height: 0.14rem;
      }
      .status {
        position: absolute;
        height: 0.21rem;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto 0;
        font-size: 0.15rem;
        font-weight: 600;
      }
      .status-going {
        color: #6dd400;
      }
      .status-success {
        font-weight: 400;
      }
    }
    .desc {
      display: flex;
      margin-top: 0.2rem;
      padding-bottom: 0.2rem;
      border-bottom: 1px solid rgba(241, 244, 251, 1);
      .desc-img {
        width: 1.1rem;
        height: 1.1rem;
        margin-right: 0.2rem;
        background: #f89;
      }
      .desc-info {
        .text {
          width: 2.05rem;
          height: 0.42rem;
          margin-top: 0.04rem;
          margin-bottom: 0.23rem;
          font-size: 0.15rem;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 0.21rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .price {
          font-size: 0.15rem;
          font-family: Helvetica;
        }
        .inventory {
          margin-top: 0.02rem;
          font-size: 0.12rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(144, 144, 144, 1);
        }
      }
    }
    .true-price {
      width: 100%;
      height: 0.42rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span:nth-child(1) {
        font-size: 0.12rem;
        font-family: PingFangTC-Regular, PingFangTC;
        color: rgba(74, 74, 74, 1);
      }
      span:nth-child(2) {
        font-size: 0.12rem;
        font-family: Helvetica-Bold, Helvetica;
        color: rgba(250, 100, 0, 1);
        font-weight: bold;
        i {
          font-size: 0.18rem;
        }
      }
    }
  }
  .order-info-warp {
    .order-info {
      // height: 1rem;
      padding: 0.2rem 0.2rem 0;
      p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 0.2rem;
        line-height: 0.2rem;
        margin-bottom: 0.2rem;
        span:nth-child(1) {
          font-family: PingFangSC-Regular, PingFang SC;
          color: rgba(144, 144, 144, 1);
        }
        span:nth-child(2) {
          font-family: HelveticaNeue-Bold, HelveticaNeue;
          font-weight: bold;
        }
      }
    }
  }
  .footer-flag {
    height: 0.5rem;
  }
  .order-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.5rem;
    display: flex;
    align-items: center;
    background: #fff;
    border-top: 1px solid #eaeef6;
    button {
      width: 1.45rem;
      height: 0.4rem;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.2rem;
      border: 1px solid rgba(151, 151, 151, 1);
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
    }
  }
  .order-footer-daifahuo {
    justify-content: center;
  }
  .order-footer-yiifahuo {
    justify-content: space-around;
    button:nth-child(2) {
      background: #ffd200;
      border: 0;
    }
  }
}
.margin {
  height: 0.1rem;
  background: #f7f8fb;
}
.dialog-confirm {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 0 0.18rem;
  width: 3.15rem;
  height: 2.55rem;
  background: #fff;
  border-radius: 0.15rem;
  .t-title {
    height: 0.48rem;
    text-align: center;
    line-height: 0.48rem;
    position: relative;
    button {
      position: absolute;
      left: 0;
      top: 0.18rem;
      height: 0.14rem;
      .van-icon {
        display: block;
      }
    }
    span {
      font-size: 0.16rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
    }
  }
  .content {
    width: 2.59rem;
    height: 0.37rem;
    position: absolute;
    left: 0.28rem;
    top: 0.85rem;
    line-height: 0.23rem;
    p {
      height: 100%;
      font-weight: 400;
      color: rgba(144, 144, 144, 1);
      text-align: center;
    }
  }
  .ok-btn {
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 2.55rem;
    height: 0.6rem;
    text-align: center;
    background: rgba(0, 0, 0, 1);
    border-radius: 0.3rem;
    border: 4px solid rgba(255, 210, 0, 1);
    line-height: 0.56rem;
    font-size: 16px;
    font-weight: 600;
    color: rgba(255, 210, 0, 1);
  }
}
.dialog-refund {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 0 0.18rem;
  width: 3.15rem;
  height: 3.3rem;
  background: #fff;
  border-radius: 0.15rem;
  .t-title {
    height: 0.48rem;
    text-align: center;
    line-height: 0.48rem;
    position: relative;
    button {
      position: absolute;
      left: 0;
      top: 0.18rem;
      height: 0.14rem;
      .van-icon {
        display: block;
      }
    }
    span {
      font-size: 0.16rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
    }
  }
  .content {
    width: 2.75rem;
    height: 1.64rem;
    position: absolute;
    left: 0.2rem;
    top: 0.48rem;
    padding-top: 0.27rem;
    .select1 {
      margin-bottom: 0.3rem;
    }
    h3 {
      font-size: 0.15rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      height: 0.21rem;
    }
    h3.select::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: 0.18rem;
      height: 0.18rem;
      border-radius: 50%;
      background: url(../../assets/images/yixuanze.png) no-repeat center;
      background-size: 100% 100%;
      margin-right: 0.1rem;
    }
    h3.no-select::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: 0.18rem;
      height: 0.18rem;
      border-radius: 50%;
      background: url(../../assets/images/weixuanze.png) no-repeat center;
      background-size: 100% 100%;
      margin-right: 0.1rem;
    }
    p {
      margin-top: 2px;
      margin-left: 0.28rem;
      font-size: 0.12rem;
      font-family: PingFangSC-Regular, PingFang SC;
      color: rgba(144, 144, 144, 1);
      height: 0.17rem;
      line-height: 0.17rem;
    }
  }
  .ok-btn {
    position: absolute;
    bottom: 0.35rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 2.55rem;
    height: 0.6rem;
    text-align: center;
    background: rgba(0, 0, 0, 1);
    border-radius: 0.3rem;
    border: 4px solid rgba(255, 210, 0, 1);
    line-height: 0.56rem;
    font-size: 16px;
    font-weight: 600;
    color: rgba(255, 210, 0, 1);
  }
}
</style>
