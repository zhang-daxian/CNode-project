<template>
  <div id="app">
    <el-menu	
			:default-active="activeIndex"	
			background-color="#545c64"	
			text-color="#fff"	
			active-text-color="#409EFF"
			class="el-menu-demo navigation"
			mode="horizontal"
            router
			@select="handleSelect">
			<el-menu-item index="index">
				首页
			</el-menu-item>
			<el-menu-item index="novice">
				新手入门
			</el-menu-item>
			<el-menu-item index="api">
			    API
			</el-menu-item>
			<el-menu-item index="about">
				关于
			</el-menu-item>
			<el-menu-item index="landing">
				登陆
			</el-menu-item>
		</el-menu>	
  </div>
</template>

<script>

export default {
  name: 'header',
  data() {
    return {
      activeIndex: "1"
    }
  },
  methods: {
    handleSelect (id) {
      console.log(id)
    }
  }
}
</script>

<style>
</style>
