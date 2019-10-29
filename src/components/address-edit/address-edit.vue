<template>
  <div class="address-edit">
    <form>
      <div class="form-item">
        <label for="consignee">收货人</label>
        <input type="text"
               id="consignee"
               placeholder="请输入收货人"
               v-model="private_consignee"
               @focus="consigneeNull=false" />
        <i v-show="consigneeNull">请输入收货人!</i>
      </div>
      <div class="form-item">
        <label for="tel">手机号</label>
        <input type="number"
               id="tel"
               placeholder="请输入手机号"
               v-model="private_tel"
               @focus="telNull=false; telError=false" />
        <i v-show="telNull">请输入手机号!</i>
        <i v-show="telError">手机号格式错误!</i>
      </div>
      <div class="form-item">
        <label for="address">所在地区</label>
        <input type="text"
               id="address"
               placeholder="&gt;"
               readonly
               @click="show=true;addressNull=false"
               v-model="private_address" />
        <i v-show="addressNull">请选择所在地区!</i>
      </div>
      <div class="form-item">
        <label for="detail-address">详细地址</label>
        <input type="text"
               id="detail-address"
               placeholder="如道路、门牌号、小区、楼栋号、单元室等"
               v-model="private_detail_address" />
      </div>
    </form>
    <div :class="private_isDefault ? 'set-default default-true' : 'set-default'">
      <span>设为默认</span>
      <i @click="default_switch"><em></em></i>
    </div>
    <button class="ok-btn"
            @click="confirmAdd"
            v-if="action == 0">确认新增</button>
    <button class="ok-btn"
            @click="confirmModify(addressId)"
            v-else>确认修改</button>
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
import { mapMutations } from 'vuex'

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
    },
    isDefault: {
      type: Boolean,
      default: false
    },
    addressId: {
      type: String,
      default: ''
    },
    param: {
      default: ''
    },
    action: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      areaList,
      show: false,
      province: '',
      city: '',
      area: '',
      private_isDefault: this.isDefault,
      private_consignee: this.consignee,
      private_tel: this.tel,
      private_address: this.address,
      private_detail_address: this.detail_address,
      consigneeNull: false,
      telNull: false,
      telError: false,
      addressNull: false
    }
  },
  methods: {
    ...mapMutations(['setBackName']),
    onCancel () {
      this.show = false
    },
    default_switch () {
      this.private_isDefault = !this.private_isDefault
    },
    onConfirm (data) {
      this.province = data[0].name
      this.city = data[1].name
      this.area = data[2].name
      let val = ''
      this.private_address = data.forEach(item => {
        val = val + item.name + ' '
      })
      this.private_address = val
      this.show = false
    },
    submitForm (data) {
      let telReg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
      let flag = true
      if (this.private_consignee == '') {
        this.consigneeNull = true
        flag = false
      }
      if (this.private_tel == '') {
        this.telNull = true
        flag = false
      } else if (!telReg.test(this.private_tel)) {
        this.telError = true
        flag = false
      }
      if (this.private_address == '') {
        this.addressNull = true
        flag = false
      }
      if (!flag) { //验证未通过
        return null
      }

      this.$http.addAddress(data).then(resp => {
        // 判断是否是从确认订单页面跳转过来的
        if (this.param.act === 'buy') {
          this.$router.push({
            name: 'confirm-order',
            params: {
              id: this.act.id
            }
          })
        }

        this.$router.push('/my-address')
      })
    },
    confirmAdd () {
      let data = {
        userId: this.$store.state.userId,
        name: this.private_consignee,
        phone: this.private_tel,
        province: this.province,
        city: this.city,
        area: this.area,
        address: this.private_detail_address,
        default: this.private_isDefault === true ? 1 : 0
      }
      this.submitForm(data)
    },
    confirmModify (addressId) {
      let data = {
        userId: this.$store.state.userId,
        name: this.private_consignee,
        phone: this.private_tel,
        province: this.private_address.split(' ')[0],
        city: this.private_address.split(' ')[1],
        area: this.private_address.split(' ')[2],
        address: this.private_detail_address,
        default: this.private_isDefault === true ? 1 : 0,
        addressId
      }
      this.submitForm(data)
    }
  },
  mounted () {
    this.setBackName('my-address')
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
      position: relative;
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
      i {
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 0.12rem;
        color: #ee0a24;
      }
      i::before {
        content: "";
        display: inline-block;
        width: 0.12rem;
        height: 0.12rem;
        vertical-align: middle;
        margin-right: 2px;
        background: url(../../assets/images/tuihuo.png) no-repeat center;
        background-size: 100% 100%;
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
      background: #bcbcbc;
      border-radius: 2px;
      position: relative;
      em {
        position: absolute;
        top: -4px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #bcbcbc;
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
