<template>
    <div>
        <!-- 头部 -->
        <div class="top">
            <div class="top-top">
                <!-- 图标 -->
                <div class="left">
                <el-tag type="success" v-if="details.top" class="put_top">置顶&nbsp;</el-tag>
                <el-tag v-else-if="details.good" class="put_good">精华&nbsp;</el-tag>
                <el-tag v-else-if="details.tab === 'share'" class="topiclist-tab">分享&nbsp;</el-tag>
                <el-tag v-else-if="details.tab === 'ask'" class="topiclist-tab">问答&nbsp;</el-tag>
                <el-tag v-else-if="details.tab === 'job'" class="topiclist-tab">工作&nbsp;</el-tag>
                <el-tag v-else-if="details.tab === 'dev'" class="topiclist-tab">测试&nbsp;</el-tag>
                <span v-else></span>
                    <!-- <el-tag type="success" size="mini">{{item.top}}</el-tag> -->
                </div>
                <div>
                    <h2>{{details.title}}</h2>
                </div>
            </div>
            <div class="top-bottom">
                <span>·发布于&nbsp;{{details.create_at | fromNow}}</span>
                <span>·作者&nbsp;{{details.author.loginname}}</span>
                <span>·{{details.visit_count}}&nbsp;次浏览</span>
                <span v-if="details.tab === 'share'" class="topiclist-tab">·来自于&nbsp;分享</span>
                <span v-else-if="details.tab === 'ask'" class="topiclist-tab">·来自于&nbsp;问答</span>
                <span v-else-if="details.tab === 'job'" class="topiclist-tab">·来自于&nbsp;工作</span>
                <span v-else-if="details.tab === 'dev'" class="topiclist-tab">·来自于&nbsp;测试</span>
                <span v-else></span>
            </div>
            <el-divider />
        </div>
        <!-- 中部插入html -->
        <div v-html="details.content" />
        <!-- 下部回复 -->
        <div class="middle">
            <span>{{details.reply_count}}回复</span>
        </div>
        
    </div>
      
</template>

<script>
    import { get } from '@/utils/http'
    import { fromNow } from '@/filters/index'

    export default {
        data() {
            return {
                details:{},
            }
        },
        created () {
            this.getList()
        },
        methods: {
            getList() {
                const param = {
                    mdrender: true,
                }
                get({
                    url: `topic/${this.$route.query.eventId}`,
                    query: param,
                }).then((data) => {
                    this.details = data.data
                    console.log(this.details)
                })
            },
        },
        filters: {
            fromNow
        }
    }
</script>

<style>
    .top {
        height: 88px;
    }
    .top-top {
        display: flex;
        flex-direction: row;
        height: 32px;
        margin: 10px 5px;
    }
    .top-top>div>h2 {
        margin-top: 0px;
    }
    .top-bottom {
        margin: 10px 0px 0px 5px;
    }
    .top-bottom>span {
        margin-right: 5px;
    }
    .middle {
        margin: 10px 0px;
    }
</style>