<template>
    <div>
        <!-- 快捷导航  -->
        <div class="bdr-bottom stage-top-four">
            <ul class="stage-top-list clearfix">
                <li class="clearfix">
                    <a href="javascript:;">
                        <img src="//gfs13.gomein.net.cn/T1_nWvBgdv1RCvBVdK.png" alt="">
                    </a>
                    <a href="javascript:;">查配送</a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="//gfs13.gomein.net.cn/T1_nWvBgdv1RCvBVdK.png" alt="">
                    </a>
                    <a href="javascript:;">查配送</a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="//gfs13.gomein.net.cn/T1_nWvBgdv1RCvBVdK.png" alt="">
                    </a>
                    <a href="javascript:;">查配送</a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="//gfs13.gomein.net.cn/T1_nWvBgdv1RCvBVdK.png" alt="">
                    </a>
                    <a href="javascript:;">查配送</a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="//gfs13.gomein.net.cn/T1_nWvBgdv1RCvBVdK.png" alt="">
                    </a>
                    <a href="javascript:;">查配送送送</a>
                </li>
            </ul>
        </div>
        <!-- 商品 -->
        <div class="stage-sale clearfix">
            <a href="javascript:;">
                <img src="//gfs12.gomein.net.cn/T1dg_vB_Cj1RCvBVdK.jpg" alt="">
            </a>
            <a href="javascript:;">
                <img src="//gfs12.gomein.net.cn/T129VvB_h_1RCvBVdK.jpg" alt="">
            </a>
            <a href="javascript:;">
                <img src="//gfs12.gomein.net.cn/T129VvB_h_1RCvBVdK.jpg" alt="">
            </a>
        </div>
        <!-- 新品推荐 -->
        <ul class="stage-goods-list">
            <li class="clearfix">
                <a href="javascript:;" >
                    <div class="stage-goods-img">
                        <img src="//gfs13.gomein.net.cn/T1_nWvBgdv1RCvBVdK.png" alt="">
                    </div>
                    <div class="stage-goods-info">
                        <div>冰箱清洗冰箱清洗冰箱清洗冰箱清洗冰箱清洗冰箱清洗</div>
                        <div>
                            的发送到发送到发斯蒂芬斯蒂芬地方都是的发送到发送到山东师范颠倒是非似懂非懂是
                        </div>
                        <div>￥&nbsp;228.00</div>
                    </div>
                </a>
            </li>
            <li class="clearfix">
                <a href="javascript:;" >
                    <div class="stage-goods-img">
                        <img src="//gfs13.gomein.net.cn/T1_nWvBgdv1RCvBVdK.png" alt="">
                    </div>
                    <div class="stage-goods-info">
                        <div>冰箱清洗冰箱清洗冰箱清洗冰箱清洗冰箱清洗冰箱清洗</div>
                        <div>
                            的发送到发送到发斯蒂芬斯蒂芬地方都是的发送到发送到山东师范颠倒是非似懂非懂是
                        </div>
                        <div>￥&nbsp;228.00</div>
                    </div>
                </a>
            </li>
        </ul>
    </div>

</template>
<script> 
  import Naver from './pages/public/naver.vue';
export default {
  components: {
    Naver
  }
}
</script>
<style lang="less">
    /* @import './css/reset.css'; */
    .mixinfont (@font){
        font-size: @font; 
        [data-dpr="2"] & { font-size: @font * 2; } 
        [data-dpr="3"] & { font-size: @font * 3; } 
     }

     .px2rem(@name,@px){
        @{name}: (@px/75)*1rem;
     }
    .px2remall(@name,@px1,@px2){
            @{name}: (@px1/75)*1rem (@px2/75)*1rem;
    }





    /* 顶部导航 */
    .stage-top-list{
        background:#fff;
        padding: (23/75)*1rem 0 (23/75)*1rem (13/75)*1rem;
        li{
            float:left;
            width: (144/75)*1rem;
            margin: (19/75)*1rem 0 0;
            text-align:center;
            overflow:hidden;
            a:nth-child(1){
                width: (100/75)*1rem;
                display:block;
                margin: 0 auto;
                img{
                    width:100%;
                }
            }
            a{
                font-family: 'PingFangSC-Regular', sans-serif;
                .mixinfont(13px);
                color: #333;
                line-height: (63/75)*1rem;
            }   
        }
    }
    .stage-top-three{
        .stage-top-list{
            padding-left:(29/75)*1rem;
        }
        li{
            margin: (19/75)*1rem (43/75)*1rem 0;
        }
    }
    .stage-top-four{
        .stage-top-list{
            padding-left:(29/75)*1rem;
        }
        li{
            margin: (19/75)*1rem (13/75)*1rem 0;
        }
    }
    /*商品*/
    .stage-sale{
        padding: (20/75)*1rem 0;
        background: #f3f5f7;
        a{
            float:left;
            width: 50%;
            height: (250/75)*1rem;
            img{
                width: 100%;
                height:100%;
            }
        }
        a:nth-child(1){
            height: (500/75)*1rem;
        }
    }
    /* 新品推荐 */
    .stage-goods-list{
        background:#fff;
        padding: 0 0 (30/75)*1rem (30/75)*1rem;
        .stage-goods-img{
            float:left;
            width:(198/75)*1rem;
            height:(200/75)*1rem;
            img{
                height:100%;
                width:100%;
            }
        }
        .stage-goods-info{
            float:right;
            width: (458/75)*1rem;
            .mixinfont(14px);
            line-height:(34/75)*1rem;
            padding:0 (34/75)*1rem 0 0;
            font-family: 'PingFangSC-Regular',sans-serif;
            color: #333333;
            position:relative;
            div:nth-child(1) {
                line-height:(38/75)*1rem;
                padding-bottom: (9/75)*1rem;
                height:(38/75)*1rem;
                white-space:nowrap;
                text-overflow:ellipsis;
                overflow:hidden;
            }
            div:nth-child(2) {
                color:#999;
                height:(68/75)*1rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;  
            }
            div:nth-child(3) {
                padding-top:(46/75)*1rem;
                color: #FF4B41;
                .mixinfont(16px);
                line-height:(40/75)*1rem;
                padding-bottom: (28/75)*1rem;
            }
        }
        .stage-goods-info:after{
            display: block;
            font-size: 0;
            content: " ";
            clear: both;
            height: 1px;
            background: #f3f3f3;
            left:0;
            bottom: -1px;
        }
    }
</style>