<template>
    <div>
        <h1>{{msg}}</h1>
        <!-- 新增特性 -->
        <p><input type="text" @keydown.enter="addFeature"></p>
        <!-- ts 特性列表 -->
        <ul>
            <li v-for="feature in features" :key="feature">{{feature.name}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator'
import {Feature} from '@/types'
import { getFeatures } from "@/api/feature"

// 装饰器
@Component
export default class Hello extends Vue {
    // 属性 data
    // features = ['类型的注解','编译型语言']
    // features: string[] = ['类型的注解','编译型语言'];
    // features: string[] = [];

    features: Feature[] = [];


    // 括号中的配置是给 Vue 的
    // 变量附近的配置是给 TS 的
    @Prop({type: String, required: true}) 
    msg!: string



    // 函数直接作为事件回调
    addFeature(e:KeyboardEvent){
        // target 类型 EventTarget
        const inp=e.target as HTMLInputElement
        this.features.push({id:this.features.length + 1,name:inp.value})
        inp.value=""
    }

    // 如果和生命周期钩子同名，就是生命周期
    created(){
        // getFeatures().then(res =>{
        //     this.features=res.data
        // });
        this.$axios.get<Feature[]>('/api/list')
        
        // this.features=[{id:1,name:'类型的注解'}];

    }
}
</script>

<style scoped>

</style>