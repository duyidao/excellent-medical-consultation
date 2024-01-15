<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MySvgIcon from "@/components/MySvgIcon.vue";
import MyNavBar from "@/components/MyNavBar.vue";
import MyRadioBtn from "@/components/MyRadioBtn.vue";
import { getPatientList, addPatient, editPatient, delPatient } from '@/services/user'
import type { PatientList, Patient } from '@/types/user'
import { onMounted, ref, computed } from 'vue'
import { nameRules, idCardRules } from '@/utils/rules/index'
import type { FormInstance } from 'vant';
import { showConfirmDialog, showSuccessToast } from 'vant';

// 页面初始化加载数据
const list = ref<PatientList>([])
const loadList = async () => {
    const res = await getPatientList()
    list.value = res.data
}
onMounted(() => {
    loadList()
})

const options = ref([
    {
        label: '男',
        value: 1
    },
    {
        label: '女',
        value: 2
    },
])

// 表单数据（单独拎出来，后续可以重置使用）
const insetForm: Patient = {
    name: '',
    idCard: '',
    gender: 1,
    defaultFlag: 0
}

// 打开侧滑栏
const show = ref(false)
const showPopup = (item: Patient) => {
    show.value = true
    if (item) {
        // 如果点的是编辑，解构出后台需要的数据
        const { id, gender, name, idCard, defaultFlag } = item
        formData.value = { id, gender, name, idCard, defaultFlag }
    } else {
        // 如果点的是新增，则清空之前的值
        formData.value = { ...insetForm }
    }
}

// 表单
const formData = ref<Patient>({
    ...insetForm
})
// 默认选框数据计算
const defaultFlag = computed({
    get() {
        return formData.value.defaultFlag === 0 ? false : true
    },
    set(val) {
        formData.value.defaultFlag = val ? 1 : 0
    }
})

// 点击表单返回按钮
const backFn = () => {
    show.value = false
}

const form = ref<FormInstance>()
// 点击提交按钮
const onSubmit = async () => {
    await form.value?.validate()
    // 身份证倒数第二位，单数是男，双数是女
    const gender = +formData.value.idCard.slice(-2, -1) % 2
    if (gender !== formData.value.gender) {
        await showConfirmDialog({
            title: '温馨提示',
            message: '填写的性别和身份证号中的不一致\n您确认提交吗？'
        })
    }

    if (formData.value.id) {
        // 编辑患者
        await editPatient(formData.value)
        showSuccessToast('编辑成功')
    } else {
        // 添加患者
        await addPatient(formData.value)
        showSuccessToast('添加成功')
    }
    loadList()
    backFn()
}

// 点击删除按钮
const onRemove = async () => {
    if (formData.value.id) {
    await showConfirmDialog({
      title: '温馨提示',
      message: `您确认要删除 ${formData.value.name} 患者信息吗 ？`
    })
    await delPatient(formData.value.id)
    show.value = false
    loadList()
    showSuccessToast('删除成功')
  }
}
</script>

<template>
    <div class="patient-page">
        <MyNavBar title="家庭档案"></MyNavBar>
        <div class="patient-list">
            <div class="patient-item"
                v-for="item in list"
                :key="item.id">
                <div class="info">
                    <span class="name">{{ item.name }}</span>
                    <span class="id">{{ item.idCard.replace(/^(.{6}).+(.{4})$/, '\$1********\$2') }}</span>
                    <span>{{ item.genderValue }}</span>
                    <span>{{ item.age }}岁</span>
                </div>
                <div class="icon"
                    @click="showPopup(item)">
                    <MySvgIcon class="cp-icon"
                        name="user-edit" />
                </div>
                <div class="tag"
                    v-if="item.defaultFlag === 1">默认</div>
            </div>
            <div class="patient-add"
                v-if="list.length < 7"
                @click="showPopup">
                <MySvgIcon name="user-add" />
                <p>添加患者</p>
            </div>
            <div class="patient-tip">最多可添加 6 人</div>
        </div>

        <!-- 侧边栏 -->
        <van-popup v-model:show="show"
            position="right">
            <MyNavBar :title="formData.id ? '编辑患者' : '添加患者'"
                :back="backFn"
                right-text="保存"
                @clickRight="onSubmit"></MyNavBar>

            <van-form autocomplete="off"
                ref="form">
                <van-field v-model="formData.name"
                    label="真实姓名"
                    :rules="nameRules"
                    placeholder="请输入真实姓名" />
                <van-field v-model="formData.idCard"
                    label="身份证号"
                    :rules="idCardRules"
                    placeholder="请输入身份证号" />
                <van-field label="性别"
                    class="pb4">
                    <!-- 单选按钮组件 -->
                    <template #input>
                        <MyRadioBtn :options="options"
                            v-model="formData.gender" />
                    </template>
                </van-field>
                <van-field label="默认就诊人">
                    <template #input>
                        <van-checkbox v-model="defaultFlag"
                            :icon-size="18"
                            round />
                    </template>
                </van-field>
            </van-form>
            <van-action-bar v-if="formData.id">
                <van-action-bar-button @click="onRemove">删除</van-action-bar-button>
            </van-action-bar>
        </van-popup>
    </div>
</template>

<style lang="scss" scoped>
.patient-page {
    padding: 46px 0 80px;

    :deep() {
        .van-popup {
            width: 80%;
            height: 100%;
            padding-top: 50px;
        }
    }
}

.patient-list {
    padding: 15px;
}

.patient-item {
    display: flex;
    align-items: center;
    padding: 15px;
    background-color: var(--cp-bg);
    border-radius: 8px;
    margin-bottom: 15px;
    position: relative;
    border: 1px solid var(--cp-bg);
    transition: all 0.3s;
    overflow: hidden;

    .info {
        display: flex;
        flex-wrap: wrap;
        flex: 1;

        span {
            color: var(--cp-tip);
            margin-right: 20px;
            line-height: 30px;

            &.name {
                font-size: 16px;
                color: var(--cp-text1);
                width: 80px;
                margin-right: 0;
            }

            &.id {
                color: var(--cp-text2);
                width: 180px;
            }
        }
    }

    .icon {
        color: var(--cp-tag);
        width: 20px;
        text-align: center;
    }

    .tag {
        position: absolute;
        right: 60px;
        top: 21px;
        width: 30px;
        height: 16px;
        font-size: 10px;
        color: #fff;
        background-color: var(--cp-primary);
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &.selected {
        border-color: var(--cp-primary);
        background-color: var(--cp-plain);

        .icon {
            color: var(--cp-primary);
        }
    }
}

.patient-add {
    background-color: var(--cp-bg);
    color: var(--cp-primary);
    text-align: center;
    padding: 15px 0;
    border-radius: 8px;

    .cp-icon {
        font-size: 24px;
    }
}

.patient-tip {
    color: var(--cp-tag);
    padding: 12px 0;
}

.pb4 {
    padding-bottom: 4px;
}

// 底部操作栏
.van-action-bar {
    padding: 0 10px;
    margin-bottom: 10px;

    .van-button {
        color: var(--cp-price);
        background-color: var(--cp-bg);
    }
}
</style>
