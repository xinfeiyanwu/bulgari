<template>
    <div class="Laction" :InputSpan="InputSpan" :_height="_height" :isDisable="isDisable" :_offset="_offset">
        <el-row 
            type="flex"
            justify="center"
            class="addressSel">
            <el-col class="custom" :span="InputSpan" :offset="_offset">
                <select v-model="customValue" :style="{height: _height}">
                    <option
                        v-for="item in customList"
                        :key="item.value"
                        :disabled="isDisable && item.value == 0"
                        :value="item.value">
                        {{item.name}}
                    </option>
                </select>
            </el-col>
            <el-col id="city" :span="InputSpan" :offset="1">
                <select v-model="cityValue" :style="{height: _height}">    
                    <option
                        v-for="item in cityList"
                        :key="item.value"
                        :value="item.value">
                        {{item.name}}
                    </option>
                </select>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import '../../mock/footerSelection/customList.js'
import '../../mock/footerSelection/cityList.js'
export default {
    name: 'Location',
    props: {
        InputSpan: {
            type: Number,
            default: 5
        },
        _height: {
            type: String,
            default: '40px'
        },
        isDisable: {
            type: Boolean,
            default: false
        },
        _offset: {
            type: Number,
            default: 0
        }
    },
    data(){
        return {
            customList: [
                {name: '全部国家', value:0},
            ],
            customValue: 0,
            cityList: [
                {name: '全部城市', value:0},
            ],
            cityValue: 0,
        }
    },
    created(){
        this.$Axios.get('/customList')
            .then((response) => {
                let data = response.data;
                this.customList = [...this.customList, ...data];
                //console.log( this.customList)
            })
    },
    methods: {
    },
    watch: {
        customValue: function(){
           this.$Axios.get('/cityList')
            .then((response) => {
                this.cityList.splice(1,this.cityList.length-1);
                let data = response.data;
                this.cityList=[...this.cityList, ...data];
                //console.log( this.cityList)
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .addressSel{
        select{
            width: 100%;
        }
        select, option{font-size: 20px;cursor: pointer;}
    }
</style>


