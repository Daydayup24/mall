<template>
  <div class="detail">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="info">
      <div class="info-top">
        <div class="price">￥<span>499</span>.00</div>
        <div class="inventory">库存：123</div>
      </div>
      <div class="info-title">SANDRO ALLEN 2019新款秋冬双面绒毛呢外套女装短款羊毛大衣宽松</div>
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
    <div class="d-footer">
      <button class="btn-buy"
              v-if="false">立即购买</button>
      <div class="btn-mer"
           v-else>
        <button class="btn-edit">编辑商品</button>
        <button class="btn-share">分享商品</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'

export default {
  name: "",
  data () {
    return {}
  },
  components: {},
  methods: {},
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
    mySwiper.pagination.$el.addClass('my-pagination')
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 3.75rem;
  height: 3.75rem;
}
.detail {
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
  .d-footer {
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
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
