<template>
  <div class="address-edit">
    <form>
      <div class="form-item">
        <label for="consignee">收货人</label>
        <input type="text"
               id="consignee"
               placeholder="请输入收货人" />
      </div>
      <div class="form-item">
        <label for="tel">手机号</label>
        <input type="number"
               id="tel"
               placeholder="请输入手机号"
               v-model="private_tel" />
      </div>
      <div class="form-item">
        <label for="address">所在地区</label>
        <input type="text"
               id="address"
               placeholder="&gt;"
               readonly
               @click="show=true"
               v-model="addressVal" />

      </div>
      <div class="form-item">
        <label for="detail-address">详细地址</label>
        <input type="text"
               id="detail-address"
               placeholder="如道路、门牌号、小区、楼栋号、单元室等" />
      </div>
    </form>
    <div :class="1==-1 ? 'set-default' : 'set-default default-true'">
      <span>设为默认</span>
      <i><em></em></i>
    </div>
    <button class="ok-btn">确认新增</button>
    <div class="area-list"
         v-show="show">
      <van-area :area-list="areaList"
                @cancel="onCancel"
                @confirm="onConfirm" />
    </div>
    <van-overlay :show="show" />
  </div>
</template>

<script type="text/ecmascript-6">
import areaList from '@/data/area'

export default {
  name: "AddressEdit",
  props: {
    consignee: {
      type: String,
      default: ''
    },
    tel: {
      type: [Number, String],
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    detail_address: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      areaList,
      show: false,
      addressVal: '',
      private_consignee: this.consignee,
      private_tel: this.tel,
      private_address: this.address,
      private_detail_address: this.detail_address,
    }
  },
  methods: {
    onCancel () {
      this.show = false
    },
    onConfirm (data) {
      console.log(data)
      let val = ''
      this.addressVal = data.forEach(item => {
        val = val + item.name + ' '
      })
      console.log(val)
      this.addressVal = val
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
#address::-webkit-input-placeholder {
  font-size: 0.16rem;
}
.area-list {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}
.address-edit {
  height: 100%;
  form {
    height: 2.8rem;
    padding: 0.3rem 0.2rem 0;
    .form-item {
      height: 0.6rem;
      display: flex;
      align-items: center;
      label {
        font-size: 0.15rem;
        font-family: PingFangSC-Regular, PingFang SC;
        width: 1rem;
      }
      input {
        flex: 1;
        font-size: 0.15rem;
        font-family: Helvetica, PingFangSC-Regular, PingFang SC;
        height: 100%;
        border: 0;
        border-bottom: 1px solid #f1f4fb;
        text-align: right;
      }
      input:focus {
        border-bottom: 1px solid #ffd200;
      }
    }
  }
  .set-default {
    height: 0.3rem;
    margin-top: 0.4rem;
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    i {
      width: 26px;
      height: 4px;
      background: #BCBCBC;
      border-radius:2px;
      position: relative;
      em {
        position: absolute;
        top: -4px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #BCBCBC;
      }
    }
  }
  .default-true {
    i {
      background: #ffd200;
      em {
        background: #ffd200;
        right: 0;
      }
    }
  }
}
.ok-btn {
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 2.55rem;
  height: 0.6rem;
  background: rgba(0, 0, 0, 1);
  border-radius: 0.3rem;
  border: 4px solid rgba(255, 210, 0, 1);
  font-size: 0.16rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(255, 210, 0, 1);
}
</style>
