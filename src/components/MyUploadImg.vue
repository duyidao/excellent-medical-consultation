<script setup lang="ts">
import type { UploaderAfterRead, UploaderFileListItem } from 'vant/lib/uploader/types'
import { computed } from 'vue'
import { uploadImage } from '@/services/consult'
import type { Image } from '../types/consult.d.ts';

const props = defineProps<{
    modelValue?: Image[]
}>()
const emit = defineEmits<{
    (e: 'update:modelValue', value: Image[]): void
}>()

const fileList = computed(() => {
    return props.modelValue
})

const onAfterRead: UploaderAfterRead = (item) => {
    if (Array.isArray(item)) return
    if (!item.file) return
    // 开始上传
    item.status = 'uploading'
    item.message = '上传中...'
    uploadImage(item.file)
        .then((res) => {
            item.status = 'done'
            item.message = undefined
            item.url = res.data.url
            emit('update:modelValue', [res.data, ...props.modelValue as Image[]])
        })
        .catch(() => {
            item.status = 'failed'
            item.message = '上传失败'
        })
}

const onDeleteImg = (item: UploaderFileListItem) => {
    // 删除图片
    emit('update:modelValue', props.modelValue!.filter((pic) => pic.url !== item.url))
}
</script>

<template>
    <div class="illness-img">
        <!-- 配置文字和图标，配置最多数量和最大体积 -->
        <van-uploader :after-read="onAfterRead"
            @delete="onDeleteImg"
            v-model="fileList"
            max-count="9"
            :max-size="5 * 1024 * 1024"
            upload-icon="photo-o"
            upload-text="上传图片"></van-uploader>
        <p class="tip">上传内容仅医生可见,最多9张图,最大5MB</p>
    </div>
</template>

<style lang="scss" scoped>
.illness-img {
    padding-top: 16px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;

    .tip {
        font-size: 12px;
        color: var(--cp-tip);
    }

    ::v-deep() {
        .van-uploader {
            &__preview {
                &-delete {
                    left: -6px;
                    top: -6px;
                    border-radius: 50%;
                    background-color: var(--cp-primary);
                    width: 20px;
                    height: 20px;

                    &-icon {
                        transform: scale(0.9) translate(-22%, 22%);
                    }
                }

                &-image {
                    border-radius: 8px;
                    overflow: hidden;
                }
            }

            &__upload {
                border-radius: 8px;
            }

            &__upload-icon {
                color: var(--cp-text3);
            }
        }
    }
}
</style>