<template>
  <div class="">
    <address-edit />
  </div>
</template>

<script type="text/ecmascript-6">
import AddressEdit from '@/components/address-edit/address-edit'

export default {
  name: "",
  data () {
    return {
    }
  },
  components: {
    AddressEdit
  },
  methods: {
    telChange (val) {
      this.tel = val
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
