<template>
    <div 
        :class="MenuObj" 
        :menuData="menuData"
        @click="downMenu" 
        @mouseleave="slideMenu">
        {{menuData.type}}
        <i :class="iObj"></i>
        <ul 
            class="MenuItem" 
            v-show="MenuState">
            <template v-for="(item, index) in menuData.menuList">
                <li :key="index"
                    @click="getItem(menuData.type, item)">
                    {{item}}
                </li>
            </template>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Menu',
    props: {
        menuData: Object
    },
    data(){
        return {
            MenuObj: {
                Menu: true,
                MenuActive: false,
            },
            iObj: {
                'el-icon-caret-bottom': true,
                IActive: false,
            },
            MenuState: false,
        }
    },
    methods: {
        downMenu(){
            this.MenuState = true;
            this.MenuObj.MenuActive = true;
            this.iObj.IActive = true;
        },
        slideMenu(){
            this.MenuState = false;
            this.MenuObj.MenuActive = false;
            this.iObj.IActive = false;
        },
        getItem(type, item){
            let obj = { type, 'product': item }
            //console.log(obj);
            return obj;
        }
    }
}
</script>

<style lang="less" scoped>
.Menu{
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    .MenuItem{
        position: absolute;
        top: 100%;
        left: 0;
        width: calc(100% * 2);
        z-index: 999;
        li{
            padding: 10px 20px;
            background: #000;
            color: #fff;
        }
        li:hover{
            text-decoration: #fff underline;
        }
    }
    .IActive{
        color: #fff;
    }

}

.MenuActive{
    background: #000;
    color: #fff;
}

</style>


