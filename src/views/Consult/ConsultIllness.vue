<script setup lang="ts">
import MySvgIcon from '@/components/MySvgIcon.vue';
import MyNavBar from '@/components/MyNavBar.vue';
import type { ConsultIllness } from '@/types/consult'
import { computed, ref } from 'vue'
import { IllnessTime } from '@/enums'
import MyRadioBtn from '@/components/MyRadioBtn.vue';
import MyUploadImg from '@/components/MyUploadImg.vue';
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { useConsultStore } from '@/stores'

// 数据枚举
const timeOptions = [
    { label: '一周内', value: IllnessTime.Week },
    { label: '一月内', value: IllnessTime.Month },
    { label: '半年内', value: IllnessTime.HalfYear },
    { label: '大于半年', value: IllnessTime.More }
]
const flagOptions = [
    { label: '就诊过', value: 1 },
    { label: '没就诊过', value: 0 }
]
const form = ref<ConsultIllness>({
    illnessDesc: '',
    illnessTime: undefined,
    consultFlag: undefined,
    pictures: []
})

// 是否下一步按钮可用
const disabled = computed(
    () =>
        !form.value.illnessDesc ||
        form.value.illnessTime === undefined ||
        form.value.consultFlag === undefined
)

// 点击下一步按钮
const store = useConsultStore()
const router = useRouter()
const next = () => {
    if (!form.value.illnessDesc) return showToast('请输入病情描述')
    if (form.value.illnessTime === undefined) return showToast('请选择症状持续时间')
    if (form.value.consultFlag === undefined) return showToast('请选择是否已经就诊')
    store.setIllness(form.value)
    // 跳转档案管理，需要根据 isChange 实现选择功能
    router.push('/user/patient?isChange=1')
}
</script>

<template>
    <div class="consult-illness-page">
        <MyNavBar title="图文问诊" />
        <!-- 医生提示 -->
        <div class="illness-tip van-hairline--bottom">
            <img class="img"
                src="@/assets/avatar-doctor.svg" />
            <div class="info">
                <p class="tit">在线医生</p>
                <p class="tip">
                    请描述你的疾病或症状、是否用药、就诊经历，需要我听过什么样的帮助
                </p>
                <p class="safe">
                    <MySvgIcon name="consult-safe" /><span>内容仅医生可见</span>
                </p>
            </div>
        </div>
        <!-- 收集信息 -->
        <div class="illness-form">
            <van-field type="textarea"
                rows="3"
                placeholder="请详细描述您的病情，病情描述不能为空"
                v-model="form.illnessDesc"></van-field>
            <div class="item">
                <p>本次患病多久了？</p>
                <MyRadioBtn :options="timeOptions"
                    v-model="form.illnessTime" />
            </div>
            <div class="item">
                <p>此次病情是否去医院就诊过？</p>
                <MyRadioBtn :options="flagOptions"
                    v-model="form.consultFlag" />
            </div>
            <!-- 图片 -->
            <MyUploadImg v-model="form.pictures" />
        </div>
        <van-button :class="{ disabled }"
            @click="next"
            type="primary"
            block
            round>下一步</van-button>
    </div>
</template>

<style lang="scss" scoped>
.consult-illness-page {
    padding-top: 46px;
}

.illness-tip {
    display: flex;
    padding: 15px;

    .img {
        width: 52px;
        height: 52px;
        border-radius: 4px;
        overflow: hidden;
        margin-top: 10px;
    }

    .info {
        flex: 1;
        padding-left: 12px;

        .tit {
            font-size: 16px;
            margin-bottom: 5px;
        }

        .tip {
            padding: 12px;
            background: var(--cp-bg);
            color: var(--cp-text3);
            font-size: 13px;
            margin-bottom: 10px;
        }

        .safe {
            font-size: 10px;
            color: var(--cp-text3);
            display: flex;
            align-items: center;

            .MySvgIcon {
                font-size: 12px;
                margin-right: 2px;
            }
        }
    }
}

.illness-form {
    padding: 15px;

    .van-field {
        padding: 0;

        &::after {
            border-bottom: none;
        }
    }

    .item {
        >p {
            color: var(--cp-text3);
            padding: 15px 0;
        }
    }
}

.van-button {
    font-size: 16px;
    margin-bottom: 30px;

    &.disabled {
        opacity: 1;
        background: #fafafa;
        color: #d9dbde;
        border: #fafafa;
    }
}</style>
