<template>
  <div class="confirm">
    <div class="confirm-order">
      <div class="contact-warp">
        <div class="contact">
          <span>王先生</span>
          <i>13883423756</i>
        </div>
        <div class="address">四川省 成都市 武侯区 贵溪街道 天府三街118号天合凯旋广场</div>
        <p class="line"></p>
        <div class="icon">
          <van-icon name="arrow"
                    color="#8F959A" />
        </div>
      </div>
      <div class="order-shop">
        <div class="item-header">
          <div class="shop-avatar"></div>
          <div class="shop-name">奔跑的蜗牛</div>
          <div class="right">
            <van-icon name="arrow"
                      size=".14rem" />
          </div>
        </div>
        <div class="desc">
          <div class="desc-img"></div>
          <div class="desc-info">
            <div class="text">极米100英寸 16:10 电动幕布(静音调控 家庭高清影院哈哈哈哈哈哈哈哈</div>
            <div class="price"><span>￥</span>499<span>.00</span></div>
            <div class="inventory">库存：123</div>
          </div>
        </div>
        <div class="count">
          <span>购买数量</span>
          <div>
            <van-stepper v-model="num"
                         integer
                         input-width=".37rem" />
          </div>
        </div>
        <div class="method">
          <span>配送方式</span>
          <i>包邮</i>
        </div>
        <div class="clc">
          <span>共1件</span>
          <i>小计：</i>
          <em>￥79.00</em>
        </div>
      </div>
      <!-- 占位 -->
      <div class="footer-flag"></div>
      <div class="order-footer">
        <span>￥<i>79</i>.00</span>
        <button>提交订单</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data () {
    return {
      num: 1
    }
  },
  components: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.confirm-order {
  height: 100%;
  background: #f6f7fa;
  display: flex;
  flex-direction: column;
  .contact-warp {
    height: 0.97rem;
    padding-top: 0.1rem;
    margin-bottom: 0.1rem;
    background: #fff;
    position: relative;
    .contact {
      margin-bottom: 8px;
      padding: 0 0.2rem;
      span {
        font-size: 0.16rem;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        margin-right: 8px;
      }
      i {
        font-size: 0.12rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(144, 144, 144, 1);
      }
    }
    .address {
      font-size: 0.14rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      line-height: 0.24rem;
      padding-left: 0.2rem;
      padding-right: 0.4rem;
    }
    .line {
      position: absolute;
      bottom: 0;
      width: 4rem;
      height: 3px;
      background: url(../../assets/images/line.png) no-repeat center;
      background-size: 100% 100%;
    }
    .icon {
      position: absolute;
      right: 0.2rem;
      top: 0;
      bottom: 0;
      margin: auto 0;
      width: 0.2rem;
      height: 0.2rem;
    }
  }
  .order-shop {
    flex: 1;
    width: 100%;
    background: #fff;
    padding: 0 0.2rem;
    .item-header {
      height: 0.4rem;
      border-bottom: 1px solid #f1f4fb;
      display: flex;
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
          font-size: 0.18rem;
          font-family: Helvetica-Bold, Helvetica;
          font-weight: bold;
          color: rgba(250, 100, 0, 1);
          span {
            font-size: 0.12rem;
          }
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
    .count,
    .method {
      margin-top: 0.1rem;
      height: 0.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(144, 144, 144, 1);
      }
      i {
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
    }
    .clc {
      margin-top: 0.1rem;
      height: 0.4rem;
      display: flex;
      justify-content: flex-end;
      span {
        font-size: 0.12rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #909090;
        margin-right: 0.1rem;
      }
      i {
        font-size: 0.12rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
      em {
        color: #fb6f00;
      }
    }
  }
}
.footer-flag {
  height: 0.5rem;
}
.order-footer {
  position: fixed;
  width: 100%;
  height: 0.5rem;
  bottom: 0;
  padding: 0 0.2rem;
  border-top: 1px solid #eaeef6;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 0.12rem;
    font-family: Helvetica;
    color: rgba(250, 100, 0, 1);
    i {
      font-size: 0.24rem;
    }
  }
  button {
    width: 1.45rem;
    height: 0.4rem;
    background: rgba(250, 100, 0, 1);
    border-radius: 0.2rem;
    line-height: 0.4rem;
    text-align: center;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #fff;
  }
}
</style>
