<template>
  <div class="modify-address">
    <address-edit :action="action"
                  :consignee="consignee"
                  :tel="tel"
                  :address="address"
                  :detail_address="detail_address"
                  :isDefault="isDefault"
                  :addressId="addressId" />
  </div>
</template>

<script type="text/ecmascript-6">
import AddressEdit from '@/components/address-edit/address-edit'

export default {
  name: "",
  data () {
    return {
      action: 1, //代表修改
      consignee: '',
      tel: '',
      address: '',
      detail_address: '',
      isDefault: false,
      addressId: ''
    }
  },
  components: {
    AddressEdit
  },
  methods: {},
  created () {
    let { area } = this.$route.params
    this.consignee = area.name
    this.tel = area.phone
    this.address = `${area.province} ${area.city} ${area.area}`
    this.detail_address = area.address
    this.addressId = area.id
    this.isDefault = area.default == 1 ? true : false
  },
  beforeRouteEnter (to, from, next) {
    // if (!to.params.area) {
    //   next('/404')
    // }
    next()
  }
}
</script>

<style lang="scss" scoped>
.modify-address {
  height: 100%;
}
</style>
