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
                  line-width=".2rem"
                  :swipe-threshold="5"
                  @change="onTabChange">
          <van-tab title="全部">
            <van-list v-model="loading"
                      :finished="finished"
                      finished-text="没有更多了"
                      @load="onLoading">
              <div class="list">
                <div class="list-item"
                     v-for="item in orderList"
                     :key="item.id">
                  <div class="item-header">
                    <!-- <div class="shop-avatar"></div> -->
                    <div class="shop-name">奔跑的蜗牛</div>
                    <div class="right">
                      <van-icon name="arrow"
                                size=".14rem" />
                    </div>
                    <!-- // 0 待支付 1-已支付（代发货） -1 退货申请中 -2 退货中 -3 退货交易完成 2 已发货 3 交易成功 99 全部订单 -->
                    <div class="status status-loading status-del"
                         v-if="item.status == 0">待支付<span></span></div>
                    <div class="status status-loading"
                         v-else-if="item.status==1">待发货</div>
                    <div class="status status-going"
                         v-else-if="item.status==2">配送中</div>
                    <div class="status status-del"
                         v-else-if="item.status==3">交易完成<span></span></div>
                    <div class="status status-going"
                         v-else-if="item.status==-1">退货申请中</div>
                    <div class="status status-going"
                         v-else-if="item.status==-2">退货中</div>
                    <div class="status status-del"
                         v-else-if="item.status==-3">退货完成<span></span></div>
                  </div>
                  <div class="desc">
                    <div class="desc-img">
                      <img src="http://img.alicdn.com/bao/uploaded/i1/1727046883/O1CN01MtFGP720iSdAihvQ6_!!0-item_pic.jpg_600x600q90.jpg" />
                    </div>
                    <div class="desc-info">
                      <div class="text">{{item.productTitle}}</div>
                      <div class="price"><span>￥</span>499<span>.00</span></div>
                      <div class="inventory">数量：{{item.number}}</div>
                    </div>
                  </div>
                  <div class="edit-btn">
                    <div class="refund"
                         v-if="item.status==3 || item.status==1">我要退款</div>
                    <div class="refund"
                         v-else-if="item.status==2">
                      <button>我要退款</button>
                      <span>|</span>
                      <button>确认收货</button>
                    </div>
                    <div class="refund"
                         v-else-if="item.status==0">
                      <button>立即支付</button>
                    </div>
                    <div class="refund"
                         v-else></div>
                  </div>
                </div>
              </div>
            </van-list>

          </van-tab>
          <van-tab title="待支付">
            <van-list v-model="loading"
                      :finished="finished"
                      finished-text="没有更多了"
                      @load="onLoading">
              <div class="list">
                <div class="list-item"
                     v-for="item in orderList"
                     :key="item.id">
                  <div class="item-header">
                    <!-- <div class="shop-avatar"></div> -->
                    <div class="shop-name">奔跑的蜗牛</div>
                    <div class="right">
                      <van-icon name="arrow"
                                size=".14rem" />
                    </div>
                    <!-- // 0 待支付 1-已支付（代发货） -1 退货申请中 -2 退货中 -3 退货交易完成 2 已发货 3 交易成功 99 全部订单 -->
                    <div class="status status-loading status-del"
                         v-if="item.status == 0">待支付<span></span></div>
                    <div class="status status-loading"
                         v-else-if="item.status==1">待发货</div>
                    <div class="status status-going"
                         v-else-if="item.status==2">配送中</div>
                    <div class="status status-del"
                         v-else-if="item.status==3">交易完成<span></span></div>
                    <div class="status status-going"
                         v-else-if="item.status==-1">退货申请中</div>
                    <div class="status status-going"
                         v-else-if="item.status==-2">退货中</div>
                    <div class="status status-del"
                         v-else-if="item.status==-3">退货完成<span></span></div>
                  </div>
                  <div class="desc">
                    <div class="desc-img">
                      <img src="http://img.alicdn.com/bao/uploaded/i1/1727046883/O1CN01MtFGP720iSdAihvQ6_!!0-item_pic.jpg_600x600q90.jpg" />
                    </div>
                    <div class="desc-info">
                      <div class="text">{{item.productTitle}}</div>
                      <div class="price"><span>￥</span>499<span>.00</span></div>
                      <div class="inventory">数量：{{item.number}}</div>
                    </div>
                  </div>
                  <div class="edit-btn">
                    <div class="refund"
                         v-if="item.status==3 || item.status==1">我要退款</div>
                    <div class="refund"
                         v-else-if="item.status==2">
                      <button>我要退款</button>
                      <span>|</span>
                      <button>确认收货</button>
                    </div>
                    <div class="refund"
                         v-else-if="item.status==0">
                      <button>立即支付</button>
                    </div>
                    <div class="refund"
                         v-else></div>
                  </div>
                </div>
              </div>
            </van-list>
          </van-tab>
          <van-tab title="待发货">
            <van-list v-model="loading"
                      :finished="finished"
                      finished-text="没有更多了"
                      @load="onLoading">
              <div class="list">
                <div class="list-item"
                     v-for="item in orderList"
                     :key="item.id">
                  <div class="item-header">
                    <!-- <div class="shop-avatar"></div> -->
                    <div class="shop-name">奔跑的蜗牛</div>
                    <div class="right">
                      <van-icon name="arrow"
                                size=".14rem" />
                    </div>
                    <!-- // 0 待支付 1-已支付（代发货） -1 退货申请中 -2 退货中 -3 退货交易完成 2 已发货 3 交易成功 99 全部订单 -->
                    <div class="status status-loading status-del"
                         v-if="item.status == 0">待支付<span></span></div>
                    <div class="status status-loading"
                         v-else-if="item.status==1">待发货</div>
                    <div class="status status-going"
                         v-else-if="item.status==2">配送中</div>
                    <div class="status status-del"
                         v-else-if="item.status==3">交易完成<span></span></div>
                    <div class="status status-going"
                         v-else-if="item.status==-1">退货申请中</div>
                    <div class="status status-going"
                         v-else-if="item.status==-2">退货中</div>
                    <div class="status status-del"
                         v-else-if="item.status==-3">退货完成<span></span></div>
                  </div>
                  <div class="desc">
                    <div class="desc-img">
                      <img src="http://img.alicdn.com/bao/uploaded/i1/1727046883/O1CN01MtFGP720iSdAihvQ6_!!0-item_pic.jpg_600x600q90.jpg" />
                    </div>
                    <div class="desc-info">
                      <div class="text">{{item.productTitle}}</div>
                      <div class="price"><span>￥</span>499<span>.00</span></div>
                      <div class="inventory">数量：{{item.number}}</div>
                    </div>
                  </div>
                  <div class="edit-btn">
                    <div class="refund"
                         v-if="item.status==3 || item.status==1">我要退款</div>
                    <div class="refund"
                         v-else-if="item.status==2">
                      <button>我要退款</button>
                      <span>|</span>
                      <button>确认收货</button>
                    </div>
                    <div class="refund"
                         v-else-if="item.status==0">
                      <button>立即支付</button>
                    </div>
                    <div class="refund"
                         v-else></div>
                  </div>
                </div>
              </div>
            </van-list>
          </van-tab>
          <van-tab title="待收货">
            <van-list v-model="loading"
                      :finished="finished"
                      finished-text="没有更多了"
                      @load="onLoading">
              <div class="list">
                <div class="list-item"
                     v-for="item in orderList"
                     :key="item.id">
                  <div class="item-header">
                    <!-- <div class="shop-avatar"></div> -->
                    <div class="shop-name">奔跑的蜗牛</div>
                    <div class="right">
                      <van-icon name="arrow"
                                size=".14rem" />
                    </div>
                    <!-- // 0 待支付 1-已支付（代发货） -1 退货申请中 -2 退货中 -3 退货交易完成 2 已发货 3 交易成功 99 全部订单 -->
                    <div class="status status-loading status-del"
                         v-if="item.status == 0">待支付<span></span></div>
                    <div class="status status-loading"
                         v-else-if="item.status==1">待发货</div>
                    <div class="status status-going"
                         v-else-if="item.status==2">配送中</div>
                    <div class="status status-del"
                         v-else-if="item.status==3">交易完成<span></span></div>
                    <div class="status status-going"
                         v-else-if="item.status==-1">退货申请中</div>
                    <div class="status status-going"
                         v-else-if="item.status==-2">退货中</div>
                    <div class="status status-del"
                         v-else-if="item.status==-3">退货完成<span></span></div>
                  </div>
                  <div class="desc">
                    <div class="desc-img">
                      <img src="http://img.alicdn.com/bao/uploaded/i1/1727046883/O1CN01MtFGP720iSdAihvQ6_!!0-item_pic.jpg_600x600q90.jpg" />
                    </div>
                    <div class="desc-info">
                      <div class="text">{{item.productTitle}}</div>
                      <div class="price"><span>￥</span>499<span>.00</span></div>
                      <div class="inventory">数量：{{item.number}}</div>
                    </div>
                  </div>
                  <div class="edit-btn">
                    <div class="refund"
                         v-if="item.status==3 || item.status==1">我要退款</div>
                    <div class="refund"
                         v-else-if="item.status==2">
                      <button>我要退款</button>
                      <span>|</span>
                      <button>确认收货</button>
                    </div>
                    <div class="refund"
                         v-else-if="item.status==0">
                      <button>立即支付</button>
                    </div>
                    <div class="refund"
                         v-else></div>
                  </div>
                </div>
              </div>
            </van-list>
          </van-tab>
          <van-tab title="退货订单">
            <van-list v-model="loading"
                      :finished="finished"
                      finished-text="没有更多了"
                      @load="onLoading">
              <div class="list">
                <div class="list-item"
                     v-for="item in orderList"
                     :key="item.id">
                  <div class="item-header">
                    <!-- <div class="shop-avatar"></div> -->
                    <div class="shop-name">奔跑的蜗牛</div>
                    <div class="right">
                      <van-icon name="arrow"
                                size=".14rem" />
                    </div>
                    <!-- // 0 待支付 1-已支付（代发货） -1 退货申请中 -2 退货中 -3 退货交易完成 2 已发货 3 交易成功 99 全部订单 -->
                    <div class="status status-loading status-del"
                         v-if="item.status == 0">待支付<span></span></div>
                    <div class="status status-loading"
                         v-else-if="item.status==1">待发货</div>
                    <div class="status status-going"
                         v-else-if="item.status==2">配送中</div>
                    <div class="status status-del"
                         v-else-if="item.status==3">交易完成<span></span></div>
                    <div class="status status-going"
                         v-else-if="item.status==-1">退货申请中</div>
                    <div class="status status-going"
                         v-else-if="item.status==-2">退货中</div>
                    <div class="status status-del"
                         v-else-if="item.status==-3">退货完成<span></span></div>
                  </div>
                  <div class="desc">
                    <div class="desc-img">
                      <img src="http://img.alicdn.com/bao/uploaded/i1/1727046883/O1CN01MtFGP720iSdAihvQ6_!!0-item_pic.jpg_600x600q90.jpg" />
                    </div>
                    <div class="desc-info">
                      <div class="text">{{item.productTitle}}</div>
                      <div class="price"><span>￥</span>499<span>.00</span></div>
                      <div class="inventory">数量：{{item.number}}</div>
                    </div>
                  </div>
                  <div class="edit-btn">
                    <div class="refund"
                         v-if="item.status==3 || item.status==1">我要退款</div>
                    <div class="refund"
                         v-else-if="item.status==2">
                      <button>我要退款</button>
                      <span>|</span>
                      <button>确认收货</button>
                    </div>
                    <div class="refund"
                         v-else-if="item.status==0">
                      <button>立即支付</button>
                    </div>
                    <div class="refund"
                         v-else></div>
                  </div>
                </div>
              </div>
            </van-list>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="address-btn"
         @click="$router.push('/my-address')">收货地址</div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'

export default {
  name: "",
  data () {
    return {
      value: '',
      active: 0,
      orderList: [],
      page: 1,
      type: 99, // 99完成  1待发货  2待收货  3已完成  -99退货订单
      total: 10,
      loading: false,
      finished: false,
      isEnd: false
    }
  },
  components: {},
  methods: {
    ...mapGetters(['getUserId']),
    getOrderList (params, page = 1) {
      this.loading = true
      this.$http.getOrderList(params).then(resp => {
        if (resp.code === 1) {
          let list = resp.data.order
          this.orderList = page == 1 ? list : [...this.orderList, list]
          let { total } = resp.data
          if (this.total >= total) {
            this.finished = true
          }
        }
        this.loading = false
      })
    },
    onLoading () {
      let data = {
        userId: this.getUserId(),
        type: this.type
      }
      this.page = this.page + 1
      this.total = this.total + 10
      this.getOrderList(data, this.page)
    },
    onTabChange (index) {
      console.log(index)
      switch (index) {
        case 1:
          this.type = 0 //待支付
          break
        case 2:
          this.type = 1 //待发货
          break
        case 3:
          this.type = 2 //待收货
          break
        case 4:
          this.type = -2 //退货订单
          break
        default:
          this.type = 99 // 全部
          break
      }
      this.page = 1
      this.total = 10
      let data = {
        userId: this.getUserId(),
        type: this.type
      }
      this.getOrderList(data)
    }
  },
  mounted () {
    let data = {
      userId: this.getUserId()
    }
    this.getOrderList(data)
  }
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
              height: 100%;
              top: 0;
              bottom: 0;
              right: 0;
              margin: auto 0;
              font-size: 0.15rem;
              font-weight: 600;
              display: flex;
              align-items: center;
              span {
                display: inline-block;
                width: 0.26rem;
                height: 0.26rem;
                background: url(../../assets/images/delete.png) no-repeat center;
                background-size: 100% 100%;
                margin-left: 4px;
              }
            }
            .status-loading {
              color: rgba(252, 96, 96, 1);
            }
            .status-going {
              color: #ff976a;
            }
            .status-del {
              color: #6dd400;
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
              img {
                width: 100%;
                height: 100%;
              }
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
        .list-item:nth-last-child(1) {
          margin-bottom: 0;
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
