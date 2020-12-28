<template>
	<div class="Option">
		<div v-for="(item, index) in list" :key="index">
			<div class="list-option">
				<div>
					{{ item.name }}
					<span v-if="item.sign == 'vuex'">{{ count }}</span>
				</div>
				<div>
					<van-button type="primary" size="small" @click="Controller(item.sign)">确认</van-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import {
		Component,
		Vue,
		Watch
	} from "vue-property-decorator";
	@Component({})
	export default class Option extends Vue {
		/* data */
		date: any = "";
		count: any = "";
		list = [{
				name: "vuex测试",
				sign: "vuex"
			},
			{
				name: "util测试",
				sign: "util"
			},
			{
				name: "单元测试",
				sign: "unitTest"
			},
			{
				name: "post请求测试",
				sign: "requestPost"
			},
			{
				name: "keepalive测试",
				sign: "keepalive"
			},
			{
				name: "返回监听",
				sign: "backlisten"
			},
			{
				name: "预渲染",
				sign: "preRendered"
			}
		];
		imgList = {
			file: ""
		};
		/* watch */
		@Watch("count")
		onChildChanged(val: string, oldVal: string) {
			if (val !== oldVal) {
				console.log(val);
			}
		}
		/* methods */
		Controller(name: string) {
			switch (name) {
				case "vuex":
					this.$store.dispatch("increAdd");
					this.count = this.$store.state.score;
					break;
				case "util":
					this.$util.method1();
					break;
				case "unitTest":
					this.$router.push("/unit/add");
					break;
				case "requestPost":
					this.$Request
						.requestPost({}, this.$api.app.loanHomePage)
						.then((res: any) => {
							console.log(res);
						})
						.catch((err: any) => {
							console.log(err);
						});
					break;
				case "keepalive":
					this.$router.push({
						path: "/demo/keeplive/a/"
					});
					break;
				case "backlisten":
					this.$router.push({
						path: "/demo/backListen"
					});
					break;
				case "preRendered":
					this.$router.push({
						path: "/demo/preRendered"
					});
					break;
				default:
					break;
			}
		}
		/* mounted */
		mounted() {
			this.count = this.$store.state.score;
		}
	}
</script>
<style lang="scss" scoped>
	.Option {
		padding-top: 20px;
	}

	.list-option {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 80%;
		margin-left: 10%;
		margin-top: 10px;
		font-size: 14px;
	}
</style>
