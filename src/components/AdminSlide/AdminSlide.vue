<template>
    <div>
        <el-row class="tac">
            <el-col >
                <el-menu
                default-active="3"
                class="el-menu-vertical "
                router
                @open="handleOpen"
                @close="handleClose"
                background-color="#35585a"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="/AdminInfo">
                    <i class="el-icon-edit"></i>
                    <span slot="title">修改为父的个人信息</span>
                </el-menu-item>
                <el-menu-item index="/AdminArticleWrite" >
                    <i class="el-icon-document"></i>
                    <span slot="title">写文章</span>
                </el-menu-item>
                <el-menu-item index="/AdminArticleList">
                    <i class="el-icon-setting"></i>
                    <span slot="title">文章列表</span>
                </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'AdminSlide',

  data () {
    return {
    }
  },

  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>

</style>
