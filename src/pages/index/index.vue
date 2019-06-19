<template>
    <div>        
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="全部" name="all" />
            <el-tab-pane label="精华" name="good" />
            <el-tab-pane label="分享" name="share" />
            <el-tab-pane label="问答" name="ask" />
            <el-tab-pane label="招聘" name="job" />
            <el-tab-pane label="客户端测试" name="test" />
        </el-tabs>
        <div>
            <ul class="list">
                <li v-for = "item in topicList">
                    <div class="count">
                        <!-- 头像 -->
                        <el-image
                        style="width: 50px"
                        :src="item.author.avatar_url"
                        class="left"></el-image>
                        <!-- 点击数 -->
                        <div class="left" style="width : 100px;text-align:center;">
                            <span>{{item.reply_count}}</span>/<span>{{item.visit_count}}</span>
                        </div>
                        <!-- 图标 -->
                        <div class="left">
                            <el-tag type="success" size="mini">{{item.top}}</el-tag>
                        </div>
                        <!-- 标题 -->
                        <div class="left">
                            <el-link>{{item.title}}</el-link>
                        </div>
                        <!-- 时间 -->
                        <div class="right">
                            <el-link :underline="false">{{item.last_reply_at}}</el-link>
                        </div>
                    </div>
                     <el-divider></el-divider>
                </li>
            </ul>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import { get } from '@/utils/http'
    export default {
        data() {
            return {
                activeName: 'all',
                limit: 20,
                page: 1,
                topicList: [],
                fits: ["scale-down"],
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
                    console.log(this.topicList)
                })
            },
            handleClick(id) {
                this.getList()
                
            }
        },
    }
</script>

<style scoped>
    .list > li {
        height: 60px;
        list-style: none;
        margin-left: -39px;
        display: flex;
        flex-direction: column;
    }
    .count {
        display: flex;
        flex-direction: row;
        height: 60px;
    }
    .left {
        margin :auto 0 auto 10px;
    }
    .right {
        margin :auto;
        margin-right: 10px;
    }
    .el-divider {
        margin :0;
    }
</style>
