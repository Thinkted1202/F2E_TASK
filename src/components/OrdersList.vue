<template>
<div>
	<ul>
		<li class="orders" v-for="(order, key) in orders_list" v-bind:key="order.key">
			<div><i>|</i>{{order.type}}</div>
			<ul class="orders_list"  :class="order.class_name">
				<li v-for="item in order.content" v-bind:key="item.class_name">
					<img  :src="item.logo" :alt="item.name" />
					<div class="content" >
						<div class="out_flex">
							<div class="status">{{item.status.type}}</div>
							<div class="date">預定日期 : {{item.date}}</div>
						</div>
						<div class="content_name">{{item.name}}</div>
					</div>
					<i>></i>
				</li>
			</ul>
		</li>
	</ul>
</div>
</template>

<script>
export default {
	name: "OrdersList",
	data:function(){
		return 	{
			orders:[
					{
						type:'進行中',
						class_name:'active',
						content :''
					},{
						type:'已完成',
						class_name:'complete',
						content :''
					}
				]
			}
	},
	computed:{
		orders_list:function(){
			this.orders[0].content = this.$store.getters.getSortByDate('getActiveList')
			this.orders[1].content = this.$store.getters.getSortByDate('getCompleteList')
			return this.orders
		}
	}
};
</script>

<style scoped>

	ul > li.orders{
		display: block;
		background: #F5F5F5;
		width:100%;
		margin:0px;
	}

	li.orders > div{
		font-weight:bold;
		font-size:20px;
		height:70px;
		line-height:70px;
		margin-left:10px;
	}

	li.orders > div > i{
		font-weight:bold;
		font-size:20px;
		color:#1EA249;
		padding:5px;
	}

	ul.orders_list {
		display: block;
		padding:0px;
		background: #FFFFFF;
	}

	ul.orders_list > li {
		display:flex;
		flex-direction: row;
		align-items:center;
		border: 1px solid #E6E6E6;
		height:auto;
		padding:20px;
	}

	ul.orders_list > li > * {
		padding: 10px 10px;
	}

	ul.orders_list > li > div {
		width:100%;
	}

	ul.orders_list > li > img{
		width:100px;
		height:100px;
	}

	ul.orders_list > li > i {
		font-weight:bold;
		font-size:30px;
	}

	.content {
		margin:10px;
		font-size:20px;
	}

	.content > .content_name {
		padding:5px;
	}

	.content > .out_flex {
		display:flex;
		flex-direction: row;
		font-weight:bold;
	}

	.content > .out_flex > div{
		flex: 1;
		padding:5px;
	}
	.active .content > .out_flex > div.status{
		color:#1E9D4A;
	}

	.complete {
		color:#000000;
	}
	.complete img {
		-webkit-filter:grayscale(1);
	}
	.complete .content > .out_flex > div.date {
		display:none;
	}
</style>