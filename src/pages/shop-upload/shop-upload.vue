<template>
  <div class="shop-upload">
    <div class="sc title">
      <p>标题</p>
      <input type="text"
             placeholder="请输入标题"
             v-model="title"
             @focus="titleNull=false" />
      <i v-show="titleNull">请输入标题!</i>
    </div>
    <div class="sc price">
      <p>价格</p>
      <input type="number"
             placeholder="￥0.00"
             v-model="price"
             @focus="priceNull=false" />
      <i v-show="priceNull">请输入价格!</i>
    </div>
    <div class="sc inventory">
      <p>库存(<span>数字“0”表示不限量)</span></p>
      <input type="number"
             placeholder="0"
             v-model="number" />
    </div>
    <div class="sc desc">
      <p>商品描述</p>
      <textarea placeholder="请输入商品描述"
                v-model="describe"></textarea>
    </div>
    <div class="up-footer">
      <van-uploader v-model="imageUpload"
                    multiple
                    :max-count="5"
                    preview-size=".6rem"
                    :after-read="afterRead" />
    </div>
    <button class="btn-upload"
            @click="upload">发布商品</button>
    <!-- 弹框 -->
    <div class="dialog"
         v-show="show">
      <div class="t-title">
        <button class="close"
                @click="show = false">
          <van-icon name="cross"
                    size=".14rem" />
        </button>
        <span>发布成功</span>
      </div>
      <div class="content">
        <p>发布成功，该商品在审核通过后即可分享给好友购买！</p>
        <p>审核期间将不可分享，不可编辑！</p>
      </div>
      <div class="ok-btn"
           @click="show = false;$router.push('/shop-management')">确 认</div>
    </div>
    <van-overlay :show="show" />
  </div>
</template>

<script type="text/ecmascript-6">
import { mapMutations } from 'vuex'

export default {
  name: "",
  data () {
    return {
      show: false,
      titleNull: false,
      priceNull: false,
      title: '',
      price: '',
      number: 0,
      numberType: '',
      describe: '',
      imageUpload: [],
      productId: '',
      backName: ''
    }
  },
  components: {},
  methods: {
    ...mapMutations(['setBackName', 'setProductId']),
    upload () {
      if (this.title === '') {
        this.titleNull = true
      }
      if (this.price === '') {
        this.priceNull = true
      } else {
        let data = {
          merId: 1,
          title: this.title,
          price: this.price,
          number: this.number,
          numberType: this.number == 0 ? 1 : 2,
          describe: this.describe,
          imageUpload: this.imageUpload
        }
        // 有productId是修改，没有则是新增
        if (this.productId) {
          data.productId = this.productId
        }
        this.$http.uploadShop(data).then(resp => {
          this.show = true
        })
      }
    },
    afterRead (file) {
      // console.log(this.imageUpload)
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.backName == 'detail') {
        this.setProductId(this.$route.params.id)
      }
      this.setBackName(this.backName)
    })
  },
  beforeRouteEnter (to, from, next) {
    let { id } = to.params
    if (id) {
      let data = {
        productId: id
      }
      next(vm => {
        vm.backName = from.name
        vm.$http.getShopDetail(data).then(resp => {
          let { data } = resp
          vm.title = data.title
          vm.price = data.price
          vm.number = data.number
          vm.describe = data.describe
          let { image } = data
          let img = []
          image.forEach(item => {
            img.push({ url: item })
          })
          vm.imageUpload = img
          vm.productId = id
        })
      })
    }
    next()
  }
}
</script>

<style lang="scss" scoped>
.shop-upload {
  background: #f6f7fa;
  height: 100%;
  display: flex;
  flex-direction: column;
  .sc {
    width: 100%;
    height: 0.7rem;
    background: #fff;
    padding: 0.1rem 0.2rem 0;
    margin-bottom: 0.05rem;
    position: relative;
    p {
      font-size: 0.12rem;
      font-weight: 400;
      margin-bottom: 0.1rem;
    }
    input {
      width: 100%;
      height: 0.2rem;
      line-height: 0.2rem;
      font-size: 0.15rem;
      font-weight: 600;
      border: 0;
    }
    i {
      position: absolute;
      right: 0.2rem;
      font-size: 0.12rem;
      color: #ee0a24;
    }
    i::before {
      content: "";
      display: inline-block;
      width: 0.1rem;
      height: 0.1rem;
      vertical-align: middle;
      margin-right: 2px;
      background: url(../../assets/images/tuihuo.png) no-repeat center;
      background-size: 100% 100%;
    }
  }
  .title {
    p {
      color: rgba(247, 181, 0, 1);
    }
    input {
      color: rgba(0, 0, 0, 1);
    }
  }
  .price {
    p {
      color: rgba(144, 144, 144, 1);
    }
    input {
      color: rgba(144, 144, 144, 1);
    }
    input::before {
      content: "￥";
      display: inline;
    }
  }
  .inventory {
    p {
      color: rgba(144, 144, 144, 1);
      span {
        color: #fc6060;
      }
    }
    input {
      color: rgba(144, 144, 144, 1);
    }
  }
  .desc {
    flex: 1;
    display: flex;
    flex-direction: column;
    p {
      color: rgba(144, 144, 144, 1);
    }
    textarea {
      flex: 1;
      width: 100%;
      border: 0;
    }
  }
  .up-footer {
    width: 100%;
    height: 1rem;
    padding: 0.2rem 0.15rem 0.2rem 0.2rem;
    background: #fff;
  }
}
.btn-upload {
  position: fixed;
  top: 1px;
  right: 0.13rem;
  width: 0.96rem;
  height: 0.41rem;
  background: rgba(0, 0, 0, 1);
  border-radius: 0.25rem;
  border: 2px solid rgba(255, 210, 0, 1);
  line-height: 0.37rem;
  font-weight: 600;
  color: rgba(255, 210, 0, 1);
  text-align: center;
}
.dialog {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 0 0.18rem;
  width: 3.15rem;
  height: 2.98rem;
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
    height: 0.92rem;
    position: absolute;
    left: 0.28rem;
    top: 0.7rem;
    line-height: 0.23rem;
    p {
      font-weight: 400;
      color: rgba(144, 144, 144, 1);
    }
    p:nth-child(1) {
      margin-bottom: 0.23rem;
    }
  }
  .ok-btn {
    position: absolute;
    top: 2.01rem;
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
