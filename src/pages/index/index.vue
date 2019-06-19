<template>
    <div>        
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="精华" name="good" />
            <el-tab-pane label="工作" name="job" />
            <el-tab-pane label="角色管理" name="third" />
            <el-tab-pane label="定时任务补偿" name="fourth" />
        </el-tabs>
        {{JSON.stringify(topicList)}}
    </div>
</template>

<script>
    import { get } from '@/utils/http'
    export default {
        data() {
            return {
                activeName: 'job',
                limit: 40,
                page: 1,
                topicList: []
            }
        },
        created () {
            this.getList()
        },
        methods: {
            getList() {
                const param = {
                    tab: this.activeName,
                    mdrender: true,
                    limit: this.limit,
                    page: this.page
                }
                get({
                    url: "https://cnodejs.org/api/v1/topics",
                    query: param,
                }).then((data) => {
                    this.topicList = data.data
                })
            },
            handleClick(id) {
                this.getList()
                
            }
        },
    }
</script>

<style scoped>

</style>
