<template>
  <div class="detail">
    <div class="detail-main">
      <!-- 图片预览 -->
      <van-image-preview v-model="show"
                         :images="swiperList"
                         @change="onChange"
                         :startPosition="startPosition">
      </van-image-preview>
      <!-- 轮播 -->
      <van-swipe indicator-color="white"
                 style="height: 3.75rem;">
        <van-swipe-item v-for="(item, i) in swiperList"
                        :key="i"
                        @click="previewImage(i)">
          <img :src="item"
               class="swiper-img" />
        </van-swipe-item>
      </van-swipe>
      <div class="info">
        <div class="info-top">
          <div class="price">￥<span>{{information.price && information.price.split('.')[0]}}</span>.{{information.price && information.price.split('.')[1]}}</div>
          <div class="inventory">库存：{{information.number == 0 ? '不限量' : information.number}}</div>
        </div>
        <div class="info-title">{{information.title}}</div>
        <div class="explain">
          <p>请相信一分钱一分货的道理</p>
          <p>我们能做到的是坚持好品质<br />
            用好品质来让亲们切身体验到我们是真的实惠</p>
          <p>定制宝贝每个阶段发货时间不一样，具体咨询客服！</p>
          <p>关于退换货：签收48小时内退换</p>
          <p>喜欢退换拖延、中差评威胁、吹毛求疵者将被限制购买！</p>
          <p>尊重是相互的，美更体现在言行，感谢支持！</p>
        </div>
      </div>
    </div>
    <div class="d-footer">

      <!-- <div class="btn-mer"
           v-if="$store.state.user.merId"> -->
      <div class="btn-mer"
           v-if="false">
        <button class="btn-edit"
                @click="editShop">编辑商品</button>
        <button class="btn-share"
                @click="copyUrl">分享商品</button>
      </div>
      <button class="btn-buy"
              v-else
              @click="buy">立即购买</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapMutations } from 'vuex'

export default {
  name: "",
  data () {
    return {
      swiperList: [],
      show: false,
      startPosition: 0,
      information: '',
      id: ''
    }
  },
  components: {},
  methods: {
    ...mapMutations(['setProductId', 'setBackName']),
    copyUrl () {
      this.$copyText(location.href).then((e) => {
        // success
        console.log(e)
        this.$toast.success('链接已成功复制到粘贴板')
      }, (err) => {
        // fail
        console.log(err)
      })
    },
    previewImage (index) {
      this.startPosition = index
      this.show = true
    },
    onChange (index) {
      this.index = index
    },
    editShop () {
      this.$router.push({
        name: 'shop-upload',
        params: {
          id: this.id
        }
      })
    },
    buy () {
      this.$router.push({
        name: 'confirm-order',
        params: {
          id: this.id
        }
      })
    },
    init (newVal, oldVa) {
      this.id = newVal.params.id
      this.getDetail()
    },
    getDetail () {
      this.$http.getShopDetail({ productId: this.id }).then(resp => {
        let { data } = resp
        this.information = data
        this.swiperList = data.image
      })
    }
  },
  mounted () {
    this.setBackName('message')
    console.log(this.$router)
    this.id = this.$route.params.id;
    this.getDetail()
    this.setProductId(this.id)
  },
  watch: {
    $route: "init"
  },
  beforeRouteLeave (to, from, next) {
    if (to.name !== 'confirm-order') {
      this.setProductId('')
    }
    next()
  }
}
</script>

<style lang="scss" scoped>
.swiper-img {
  width: 100%;
  height: 100%;
}

.detail {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .detail-main {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    .info {
      padding: 0 0.2rem;
      .info-top {
        height: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
          font-size: 0.12rem;
          font-family: Helvetica-Bold, Helvetica;
          font-weight: bold;
          color: rgba(250, 100, 0, 1);
          span {
            font-size: 0.18rem;
          }
        }
        .inventory {
          font-size: 0.12rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(144, 144, 144, 1);
        }
      }
      .info-title {
        height: 0.44rem;
        font-size: 0.16rem;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        line-height: 0.22rem;
        margin-bottom: 0.15rem;
      }
      .explain {
        p {
          font-size: 0.14rem;
          font-weight: 400;
          color: rgba(144, 144, 144, 1);
          margin-bottom: 0.24rem;
        }
      }
    }
  }
  .d-footer {
    height: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    .btn-buy {
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
    .btn-mer {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      padding: 0 0.28rem;
      align-items: center;
      button {
        width: 1.45rem;
        height: 0.4rem;
        border-radius: 0.2rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
      }
      .btn-edit {
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(151, 151, 151, 1);
      }
      .btn-share {
        background: rgba(255, 210, 0, 1);
      }
    }
  }
}
</style>
