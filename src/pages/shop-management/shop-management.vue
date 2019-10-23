<template>
  <div class="shopList">
    <div class="none"
         v-if="false">
      <div class="img">
        <div class="logo"></div>
        <p>你还没有上架任何商品！</p>
      </div>
      <button class="upLoad">立即上架</button>
    </div>
    <div class="list"
         v-else>
      <div class="list-item">
        <div class="desc">
          <div class="desc-img"></div>
          <div class="desc-info">
            <div class="text">极米100英寸 16:10 电动幕布(静音调控 家庭高清影院哈哈哈哈哈哈哈哈</div>
            <div class="price"><span>￥</span>499<span>.00</span></div>
            <div class="inventory">库存：123</div>
          </div>
        </div>
        <div class="edit-btn">
          <div class="btn share">
            <span>分享</span>
          </div>
          <div class="btn edit">
            <span>编辑</span>
          </div>
          <div class="btn del">
            <span>删除</span>
          </div>
        </div>
      </div>
      <div class="list-item">
        <div class="desc">
          <div class="desc-img"></div>
          <div class="desc-info">
            <div class="text">极米100英寸 16:10 电动幕布(静音调控 家庭高清影院哈哈哈哈哈哈哈哈</div>
            <div class="price"><span>￥</span>499<span>.00</span></div>
            <div class="inventory">库存：123</div>
          </div>
        </div>
        <div class="edit-btn">
          <div class="btn share">
            <span>分享</span>
          </div>
          <div class="btn edit">
            <span>编辑</span>
          </div>
          <div class="btn del">
            <span>删除</span>
          </div>
        </div>
      </div>
      <div class="list-item">
        <div class="desc">
          <div class="desc-img"></div>
          <div class="desc-info">
            <div class="text">极米100英寸 16:10 电动幕布(静音调控 家庭高清影院哈哈哈哈哈哈哈哈</div>
            <div class="price"><span>￥</span>499<span>.00</span></div>
            <div class="inventory">库存：123</div>
          </div>
        </div>
        <div class="edit-btn">
          <div class="btn share">
            <span>分享</span>
          </div>
          <div class="btn edit">
            <span>编辑</span>
          </div>
          <div class="btn del">
            <span>删除</span>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-msg">
      <van-goods-action-icon class="msg"
                             info="0" />
    </div>
    <div class="l-footer">
      <button class="btn-upload">继续上架</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  name: "",
  data () {
    return {
      userId: this.$store.state.user.userId,
      merId: this.$store.state.user.merId
    }
  },
  components: {},
  methods: {},
  mounted () {
    let params = {
      merId: this.merId
    }
    //   this.$http.getMerchantsShopList(params).then(resp => {
    //     console.log(resp)
    //   })
    fetch('http://192.168.0.13:8090/content/api/merchant-product').then(resp => {
      console.log(resp)
    })
  }
}
</script>

<style lang="scss" scoped>
.shopList {
  height: 100%;
  .none {
    height: 100%;
    position: relative;
    .img {
      position: absolute;
      top: 1.1rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 1.86rem;
      height: 1.79rem;
      .logo {
        width: 100%;
        height: 1.29rem;
        background: url(../../assets/images/none.png) no-repeat center;
        background-size: 100% 100%;
        margin-bottom: .3rem;
      }
      p {
        text-align: center;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
      }
    }
    .upLoad {
      position: absolute;
      bottom: 1.8rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 2.55rem;
      height: 0.6rem;
      background: rgba(0, 0, 0, 1);
      border-radius: 0.3rem;
      border: 4px solid rgba(255, 210, 0, 1);
      font-size: 0.16rem;
      font-weight: 600;
      color: rgba(255, 210, 0, 1);
      text-align: center;
      line-height: 0.6rem;
    }
  }

  .list {
    height: 100%;
    .list-item {
      width: 100%;
      height: 1.91rem;
      padding: 0.2rem 0.2rem 0;
      display: flex;
      flex-direction: column;
      margin-bottom: 0.1rem;
      .desc {
        display: flex;
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
        flex: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .btn {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 0.2rem;
          border-right: 1px solid rgba(216, 216, 216, 1);
          span {
            font-size: 0.14rem;
            font-weight: 400;
            color: rgba(144, 144, 144, 1);
          }
          span::before {
            content: "";
            display: inline-block;
            width: 0.12rem;
            height: 0.12rem;
            margin-right: 0.04rem;
          }
        }
        .btn:nth-child(1) {
          span::before {
            background: url(../../assets/images/share.png) no-repeat center;
            background-size: 100% 100%;
          }
        }
        .btn:nth-child(2) {
          span::before {
            background: url(../../assets/images/edit.png) no-repeat center;
            background-size: 100% 100%;
          }
        }
        .btn:nth-child(3) {
          border-right: 0;
          span {
            color: rgba(252, 96, 96, 1);
          }
          span::before {
            width: 0.12rem;
            height: 0.13rem;
            background: url(../../assets/images/del.png) no-repeat center;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
  .l-footer {
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    height: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    .btn-upload {
      width: 2.87rem;
      height: 0.4rem;
      background: rgba(255, 210, 0, 1);
      border-radius: 0.2rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
      text-align: center;
      line-height: 0.4rem;
      cursor: pointer;
    }
  }
}
.btn-msg {
  position: absolute;
  width: 0.21rem;
  height: 0.23rem;
  top: 0.11rem;
  right: 0.2rem;
  .msg {
    min-width: initial;
    width: 100%;
    height: 100%;
    background: url(../../assets/images/btn_msg.png) no-repeat center;
    background-size: 100% 100%;
  }
}
</style>
