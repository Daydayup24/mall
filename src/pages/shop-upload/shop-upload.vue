<template>
  <div class="shop-upload">
    <div class="sc title">
      <p>标题</p>
      <input type="text"
             placeholder="请输入标题"
             value="SANDRO ALLEN" />
    </div>
    <div class="sc price">
      <p>价格</p>
      <input type="number"
             placeholder="￥0.00" />
    </div>
    <div class="sc inventory">
      <p>库存(<span>数字“0”表示不限量)</span></p>
      <input type="number"
             placeholder="0" />
    </div>
    <div class="sc desc">
      <p>商品描述</p>
      <textarea placeholder="请输入商品描述"></textarea>
    </div>
    <div class="up-footer">
      <van-uploader v-model="fileList"
                    multiple
                    :max-count="5"
                    preview-size=".6rem" />
    </div>
    <button class="btn-upload"
            @click="show = true">发布商品</button>
    <!-- 弹框 -->
    <div class="dialog" v-show="show">
      <div class="t-title">
        <button class="close" @click="show = false">
          <van-icon name="cross"
                    size=".14rem" />
        </button>
        <span>发布成功</span>
      </div>
      <div class="content">
        <p>发布成功，该商品在审核通过后即可分享给好友购买！</p>
        <p>审核期间将不可分享，不可编辑！</p>
      </div>
      <div class="ok-btn" @click="show = false">确 认</div>
    </div>
    <van-overlay :show="show" />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data () {
    return {
      fileList: [],
      show: false
    }
  },
  components: {},
  methods: {
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
    p {
      font-size: 0.12rem;
      font-weight: 400;
      margin-bottom: 0.1rem;
    }
    input {
      height: 0.2rem;
      line-height: 0.2rem;
      font-size: 0.15rem;
      font-weight: 600;
      border: 0;
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
