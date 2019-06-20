<template>
    <div>        
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="全部" name="all" />
            <el-tab-pane label="精华" name="good" />
            <el-tab-pane label="分享" name="share" />
            <el-tab-pane label="问答" name="ask" />
            <el-tab-pane label="招聘" name="job" />
            <el-tab-pane label="客户端测试" name="dev" />
        </el-tabs>
        <div>
            <ul class="list">
                <li v-for="(item, index) in topicList" :key="index">
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
                        <el-tag type="success" v-if="item.top" class="put_top">置顶&nbsp;</el-tag>
                        <el-tag v-else-if="item.good" class="put_good">精华&nbsp;</el-tag>
                        <el-tag v-else-if="item.tab === 'share'" class="topiclist-tab">分享&nbsp;</el-tag>
                        <el-tag v-else-if="item.tab === 'ask'" class="topiclist-tab">问答&nbsp;</el-tag>
                        <el-tag v-else-if="item.tab === 'job'" class="topiclist-tab">工作&nbsp;</el-tag>
                        <el-tag v-else-if="item.tab === 'dev'" class="topiclist-tab">测试&nbsp;</el-tag>
                        <span v-else></span>
                            <!-- <el-tag type="success" size="mini">{{item.top}}</el-tag> -->
                        </div>
                        <!-- 标题 -->
                        <div class="left title" @click="jumpDetails(item.id)">
                            <el-link>{{item.title}}</el-link>
                        </div>
                        <!-- 时间 -->
                        <div class="right" @click="jumpDetails(item.id)">
                            <el-link :underline="false">{{item.last_reply_at | fromNow}}</el-link>
                        </div>
                    </div>
                     <el-divider />

                </li>
            </ul>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="400"
                :page-size="limit"
                :current-page.sync="page"
                @current-change="handlePageChange"
                />
        </div>
    </div>
</template>

<script>
    import { get, post } from '@/utils/http'
    import { fromNow } from '@/filters/index'
    export default {
        data() {
            return {
                activeName: 'all',
                limit: 40,
                page: 1,
                topicList: [],
            }
        },
        created () {
            this.getList()
            this.getTopic()
        },
        filters: {
            fromNow
        },
        methods: {
            getTopic () {
                console.log(ceshi)
                post({
                    url: 'https://api.sunnyshining.xyz/api/article/getArticleList',
                    query: {
                        pageNum: 1,
                        pageSize: 10
                    }
                }).then((data) => {
                    console.log(data)
                })
            },
            getList(page, activeName) {
                page = page || this.page
                const param = {
                    tab: this.activeName,
                    mdrender: true,
                    limit: this.limit,
                    page
                }
                get({
                    url: "topics",
                    query: param,
                }).then((data) => {
                    this.topicList = data.data
                    this.page = page
                    // console.log(this.topicList)
                })
            },
            handleClick(tab) {
                this.getList()
            },
            handlePageChange(page) {
                this.getList(page)
            },
            jumpDetails(eventId) {
                this.$router.push(`/details?eventId=${eventId}`)
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
    .title {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .el-divider {
        margin :0;
    }
</style>
