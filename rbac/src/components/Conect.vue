<template>
    <el-container >
        <el-header align='center' lineHeight=''>
            1601N班管理系统
     </el-header>
        <el-container>
             <el-aside>
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>
                <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-edit"></i>
                            <span slot="title">成绩单管理</span>
                        </template>
                        <router-link v-if="accessList.indexOf('view')!=-1" to="/content/view" tag="div">
                            <el-menu-item index="1-1">查看成绩单</el-menu-item>
                        </router-link> 
                        <router-link v-if="accessList.indexOf('modify')!=-1" to="/content/modify" tag="div">
                            <el-menu-item index="1-2">修改成绩单</el-menu-item>
                        </router-link>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span slot="title">综合积分管理</span>
                        </template>
                        <router-link v-if="accessList.indexOf('checkin')!=-1" to="/content/checkin" tag="div">
                            <el-menu-item index="2-1">点名 </el-menu-item>
                        </router-link> 
                        <router-link v-if="accessList.indexOf('query')!=-1" to="/content/query" tag="div">
                            <el-menu-item index="2-2">查看综合积分 </el-menu-item>
                        </router-link>    
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span slot="title">管理员</span>
                        </template>
                        <router-link v-if="accessList.indexOf('delete')!=-1" to="/content/delete" tag="div">
                            <el-menu-item index="3-1">删除用户</el-menu-item>
                        </router-link> 
                        <router-link v-if="accessList.indexOf('admin')!=-1" to="/content/admin" tag="div">
                            <el-menu-item index="3-2">分配权限 </el-menu-item>
                        </router-link>  
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>    
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      accessList: []
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    // 从缓存中获取权限列表
    let accessList = window.sessionStorage.getItem("accessList");
    if (accessList) {
      accessList = JSON.parse(accessList);
    } else {
      accessList = [];
    }
    this.accessList = accessList;
  }
};
</script>

<style lang="scss" scoped>
</style>


