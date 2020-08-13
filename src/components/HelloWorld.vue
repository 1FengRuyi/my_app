<!-- <template>
  <div>
    <!-- <mt-button @click.native="handleClick">我是按钮</mt-button>
		<div>
		      <van-button type="default">默认按钮</van-button>
		      <van-button type="primary">主要按钮</van-button>
		      <van-button type="info">信息按钮</van-button>
		      <van-button type="warning">警告按钮</van-button>
		      <van-button type="danger">危险按钮</van-button>
		    </div>
  </div>
</template>

<script>
 import {Button} from 'vant'	
export default {
  data() {
    return {};
  },
   components:{
        [Button.name]: Button
      },
  methods: {
    handleClick: function () {
      this.$toast("Hello world!");
    },
  },
};
</script>

<style scoped>
</style>