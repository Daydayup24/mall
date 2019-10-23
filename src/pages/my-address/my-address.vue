<template>
  <div class="my-address">
    <div class="address-list">
      <div class="list-item">
        <div class="contact">
          <span>王先生</span>
          <i>13883423756</i>
        </div>
        <div :class="1==1 ? 'default-address' : 'address'">四川省 成都市 武侯区 贵溪街道 天府三街118号天合凯旋广场</div>
        <div class="icon">
          <van-icon name="arrow"
                    color="#8F959A" />
        </div>
      </div>
    </div>
    <div class="address-add">新增地址</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data () {
    return {}
  },
  components: {},
  methods: {},
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.my-address {
  height: 100%;
  background: #f7f8fb;
  .address-list {
    background: #fff;
    .list-item {
      height: 0.97rem;
      border-bottom: 1px solid #f7f8fb;
      padding: 0.1rem 0.6rem 0 0.2rem;
      position: relative;
      .contact {
        margin-bottom: 8px;
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
      .address,
      .default-address {
        font-size: 0.14rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        line-height: 0.2rem;
      }
      .default-address::before {
        content: "默认";
        font-size: 0.1rem;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        background: #ffd200;
        padding: 0 4px;
        margin-right: 4px;
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
  }
}
.address-add {
  position: fixed;
  top: 0.12rem;
  right: 0.2rem;
  font-weight: 400;
}
</style>
