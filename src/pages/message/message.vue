<template>
  <div class="message">
    <!-- // 0 待支付 1-已支付（代发货） -1 退款申请中 -2 退款中 -3 退款交易完成 2 已发货 3 交易成功 99 全部订单 -->
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoading"
              :immediate-check="false">
      <div :class="i==msgList.length-1 ? 'msg-item msg-item-nomargin' : 'msg-item'"
           v-for="(item, i) in msgList"
           :key="item.id">
        <div class="item-header">
          <p class="fahuo"
             v-if="item.status==1">
            <span>你有订单需发货</span>
          </p>
          <p class="tuihuo"
             v-else-if="item.status==-1">
            <span>有买家找你退货</span>
          </p>
          <p class="normal"
             v-else>
            <span>订单</span>
          </p>
          <div class="status"
               v-if="item.status==1 || item.status==-1">
            <span>待处理</span>
          </div>
          <div class="status"
               v-else-if="item.status==3">交易成功</div>
          <div class="status"
               v-else-if="item.status==-3">退货完成</div>
        </div>
        <div class="desc">
          <div class="desc-img">
            <img :src="item.productImage" />
          </div>
          <div class="desc-info">
            <div class="text">{{item.productTitle}}</div>
            <div class="price">
              <span>￥{{item.payPrice}}</span>
              <i>数量：{{item.number}}</i>
            </div>
            <div class="address">
              <div class="name">
                <span>{{item.name}}</span>
                <i>{{item.phone}}</i>
              </div>
              <div class="addressDesc">{{item.province}} {{item.city}} {{item.area}} {{item.address}}</div>
            </div>
          </div>
        </div>
        <div class="edit-btn">
          <div class="refund"
               v-if="item.status==1">确认发货</div>
          <div class="refund"
               v-else-if="item.status==-1">确认退货</div>
          <div class="refund"
               v-else-if="item.status==-3 || item.status==3">删除订单</div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "",
  data () {
    return {
      msgList: [],
      page: 1,
      total: 10,
      loading: false,
      finished: false
    }
  },
  components: {},
  methods: {
    ...mapGetters(['getMerId']),
    ...mapMutations(['setBackName']),
    getMsgList (params, page = 1) {
      this.$http.getMerMessage(params).then(resp => {
        this.loading = true
        if (resp.code === 1) {
          let list = resp.data.order
          this.msgList = page == 1 ? list : this.msgList.concat(list)
          this.msgList = this.msgList.filter(item => item.status != 0 || new Date().valueOf() - item.createTime * 1000 < 10 * 60 * 1000)
          console.log(this.msgList)
        }
        let { total } = resp.data
        if (this.total >= total) {
          this.finished = true
        }
        this.loading = false
      })
    },
    onLoading () {
      console.log(1)

      this.page = this.page + 1
      this.total = this.total + 10
      let data = {
        merId: this.getMerId(),
        page: this.page
      }
      this.getMsgList(data, this.page)
    }
  },
  mounted () {
    this.setBackName('shop-management')
    let data = { merId: this.getMerId() }
    this.getMsgList(data)
  },
}
</script>

<style lang="scss" scoped>
.message {
  height: 100%;
  background: #f8f9fc;
  overflow-x: hidden;
  overflow-y: auto;
  .msg-item {
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
      p {
        span {
          font-size: 0.15rem;
          font-family: PingFangTC-Regular, PingFangTC;
          font-weight: 400;
          color: rgba(74, 74, 74, 1);
        }
      }
      .fahuo {
        span::before {
          content: "";
          display: inline-block;
          width: 0.12rem;
          height: 0.12rem;
          margin-right: 5px;
          background: url(../../assets/images/fahuo.png) no-repeat center;
          background-size: 100% 100%;
        }
      }
      .tuihuo {
        span::before {
          content: "";
          display: inline-block;
          width: 0.12rem;
          height: 0.12rem;
          margin-right: 5px;
          background: url(../../assets/images/tuihuo.png) no-repeat center;
          background-size: 100% 100%;
        }
      }
      .status {
        position: absolute;
        height: 0.21rem;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto 0;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000;
        span {
          font-family: PingFangSC-Semibold, PingFang SC;
          font-size: 0.15rem;
          font-weight: 600;
          color: #fc6060;
        }
      }
    }
    .desc {
      display: flex;
      margin-top: 0.2rem;
      padding-bottom: 0.2rem;
      border-bottom: 1px solid rgba(241, 244, 251, 1);
      .desc-img {
        min-width: 1.1rem;
        min-height: 1.1rem;
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
          margin-top: 0.04rem;
          font-size: 0.15rem;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 0.21rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .price {
          font-size: 0.12rem;
          margin-bottom: 0.15rem;
          span {
            font-family: Helvetica-Bold, Helvetica;
            font-weight: bold;
            color: rgba(250, 100, 0, 1);
            margin-right: 0.2rem;
          }
          i {
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(144, 144, 144, 1);
          }
        }
        .address {
          .name {
            font-size: 0.12rem;
            font-family: PingFangSC-Semibold, PingFang SC;
            span {
              font-weight: 600;
              color: rgba(0, 0, 0, 1);
              margin-right: 0.1rem;
            }
            i {
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(144, 144, 144, 1);
            }
          }
          .addressDesc {
            margin-top: 5px;
            font-size: 0.1rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
          }
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
      }
    }
  }
  .msg-item-nomargin {
    margin-bottom: 0;
  }
}
</style>
