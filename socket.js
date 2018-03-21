sockets: {
  '130' (body) {
    this.eqSendCmd = '130'
    console.log('本地单付配药页面放入注射器等指令已发送到底层成功130')
  },
  '0' (body) {
    console.log('本地单付配药页面监听sockets')
    console.log('本地单付配药页面此时接收的状态：', body)
    switch (true) {
      case /^0\d+$/i.test(body): console.log('机器出故障0，请检修')
        this.$message.error('机器故障，请检修，然后重新初始化或重启机器')
        // this.$router.push('/')
        break
      case /^20$/i.test(body): console.log('注射器放入有问题，请检查')
        this.$message.warning('注射器放入有问题，请检查')
        this.screenLoading = false
        break
      case /^21$/i.test(body): console.log('西林瓶放入有问题，请检查')
        this.$message.warning('西林瓶放入有问题，请检查')
        this.screenLoading = false
        break
      case /^25$/i.test(body): console.log('母液袋放入有问题，请检查')
        this.$message.warning('母液袋放入有问题，请检查')
        this.screenLoading = false
        break
      case /^111$/i.test(body): console.log('配药成功')
        this.isSuccessDispense = true
        if (this.dispenseRes && this.isSuccessDispense) {
          // 做动画特效
          this.screenLoading = false
          if (this.msgContent) {
            this.msgContent = false
            this.$message({
              type: 'success',
              message: '配药成功',
              onClose: () => {
                this.active = 1
                this.activeBtn = 1
                this.eqActiveClass = 'eq-start'
                this.isReturn = true
                // 向父组件传值，以便锁住菜单栏
                this.$emit('handleDisabled', false)
                // this.showEquipmentIcon = false
                // this.injectorValue = null
                // this.suctionValue = null
                // this.percentValue = null
              }
            })
          }
        } else {
          this.screenLoading = false
          // this.$message({
          //   message: '配药失败，请重新配药',
          //   type: 'error',
          //   onClose: () => {
          //     this.$router.replace({ path: '/' })
          //   }
          // })
          // console.log('后台配药失败，反馈失败')
        }
        break
      default: console.log('配药中，请稍后')
        break
    }
  }
}