<template>
	<div class="container" id="app">
		<div class="heading">
		</div>
		<OrdersList/>
	</div>
</template>

<script>
import OrdersList from "./components/OrdersList.vue";

export default {
  name: "App",
  components: {
	OrdersList
  }
};
</script>

<style>
html {
	margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
}

html * {
	#border: 1px solid #FF0000;
}

#app {
	background-color: #FFF;
	padding: 20px;
	color: #000000;
}

.container {
	max-width:768px;
	margin: 0 auto;
}
</style>
