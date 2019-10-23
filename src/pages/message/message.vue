<template>
  <div class="message">
    <div class="msg-item">
      <div class="item-header">
        <p class="fahuo">
          <span>你有订单需发货</span>
        </p>
        <div class="status">待处理</div>
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
             v-if="true">确认发货</div>
        <div class="refund"
             v-else-if="false">
          <button>确认退货</button>
        </div>
      </div>
    </div>
    <div class="msg-item">
      <div class="item-header">
        <p class="tuihuo">
          <span>有买家找你退货</span>
        </p>
        <div class="status">待处理</div>
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
             v-if="false">确认发货</div>
        <div class="refund"
             v-else-if="true">
          <button>确认退货</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data () {
    return {}
  },
  components: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.message {
  height: 100%;
  background: #f8f9fc;
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
      .fahuo {
        span {
          font-size: .15rem;
          font-family: PingFangTC-Regular, PingFangTC;
          font-weight: 400;
          color: rgba(74, 74, 74, 1);
        }
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
        span {
          font-size: .15rem;
          font-family: PingFangTC-Regular, PingFangTC;
          font-weight: 400;
          color: rgba(74, 74, 74, 1);
        }
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
        font-size: 0.15rem;
        font-weight: 600;
        color: #fc6060;
      }
      .status-loading {
        color: rgba(252, 96, 96, 1);
      }
      .status-going {
        color: #6dd400;
      }
      .status-del {
        width: 0.26rem;
        height: 0.26rem;
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
      }
    }
  }
}
</style>
