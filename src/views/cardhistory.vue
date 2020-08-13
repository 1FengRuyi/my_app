<template>
  <div id="container" style="width:100%;height:100%"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    var isWeixn = this.is_weixn();
    if (isWeixn) {
      this.getCity();
    }
  },
  methods: {
    getCity() {
      map.init().then(BMap => {
        const locationCity = new BMap.Geolocation();
        var that = this;
        locationCity.getCurrentPosition(  
   function     getinfo(options){
                let city = options.address.city;    //此处拿到位置相关信息
                that.LocationCity = city;
                console.log(options)
              },
              function (e){
                that.LocationCity = '定位失败';
                console.log('定位失败')
              },
              {provider: 'baidu'}
            )
          })
    },
}
};
</script>
