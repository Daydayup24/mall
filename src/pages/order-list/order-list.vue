<template>
  <div class="order-list">
    <div class="nav">
      <div class="search">
        <van-search class="v-search"
                    placeholder="搜索"
                    v-model="value"
                    shape="round" />
      </div>
      <div class="tab">
        <van-tabs v-model="active"
                  type="line"
                  :border="false"
                  title-active-color="#F7B500"
                  title-inactive-color="#909090"
                  color="#F7B500"
                  line-width=".2rem">
          <van-tab title="全部">
            <div class="list">
              <div class="list-item"
                   v-for="i in 10"
                   :key="i">
                <div class="item-header">
                  <div class="shop-avatar"></div>
                  <div class="shop-name">奔跑的蜗牛</div>
                  <div class="right">
                    <van-icon name="arrow"
                              size=".14rem" />
                  </div>
                  <div class="status status-loading"
                       v-if="false">待发货</div>
                  <div class="status status-going"
                       v-else-if="false">配送中</div>
                  <div class="status status-del"
                       v-else></div>
                </div>
                <div class="desc">
                  <div class="desc-img"></div>
                  <div class="desc-info">
                    <div class="text">极米100英寸 16:10 电动幕布(静音调控 家庭高清影院哈哈哈哈哈哈哈哈</div>
                    <div class="price"><span>￥</span>499<span>.00</span></div>
                    <div class="inventory">库存：123</div>
                  </div>
                </div>
                <div class="edit-btn">
                  <div class="refund"
                       v-if="false">我要退款</div>
                  <div class="refund"
                       v-else-if="false">
                    <button>我要退款</button>
                    <span>|</span>
                    <button>确认收货</button>
                  </div>
                  <div class="refund" v-else></div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="待发货">待发货</van-tab>
          <van-tab title="待收货">待收货</van-tab>
          <van-tab title="已完成">已完成</van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="address-btn">收货地址</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data () {
    return {
      value: '',
      active: 0
    }
  },
  components: {},
  methods: {}
}
</script>

<style lang="scss">
.tab {
  .van-tabs__wrap {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 9;
  }
}
</style>
<style lang="scss" scoped>
.order-list {
  height: 100%;
  background: #f7f8fb;
  .nav {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .search {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 9;
      height: 0.44rem;
      .v-search {
        height: 100%;
        padding-top: 0;
        padding-bottom: 6px;
      }
    }
    .tab {
      flex: 1;
      overflow: hidden auto;
      .list {
        height: 100%;
        .list-item {
          width: 100%;
          height: 2.32rem;
          padding: 0 0.2rem;
          display: flex;
          flex-direction: column;
          margin-bottom: 0.1rem;
          background: #fff;
          .item-header {
            height: 0.4rem;
            border-bottom: 1px solid #f1f4fb;
            display: flex;
            align-items: center;
            position: relative;
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
            .status-loading {
              color: rgba(252, 96, 96, 1);
            }
            .status-going {
              color: #6dd400;
            }
            .status-del {
              width: .26rem;
              height: .26rem;
              background: url(../../assets/images/delete.png) no-repeat center;
              background-size: 100% 100%;
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
          .edit-btn {
            width: 100%;
            height: 0.4rem;
            .refund {
              width: 100%;
              height: 100%;
              text-align: center;
              line-height: 0.4rem;
              font-weight: 600;
              color: rgba(0, 0, 0, 1);
              button {
                width: 47%;
                line-height: 0.4rem;
                text-align: center;
                font-weight: 600;
              }
              button:nth-child(3) {
                color: #f7b500;
              }
              span {
                font-size: 12px;
                font-weight: 100;
              }
            }
          }
        }
      }
    }
  }
}
.address-btn {
  position: fixed;
  top: 0.12rem;
  right: 0.2rem;
  font-weight: 400;
}
</style>
