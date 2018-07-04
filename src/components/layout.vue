<template>
    <el-container>
        <el-aside width="200px">
            <commonMenu />
        </el-aside>
        <el-container>
            <el-header>
                <commonHeader />
            </el-header>
            <el-main>
                <router-view/>
            </el-main>
            <el-footer>
                <commonFooter />
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
import { mapGetters } from 'vuex';
import CommonHeader from "./commonHeader";
import CommonMenu from "./commonMenu";
import CommonFooter from "./commonFooter";

export default {
    name: 'App',
    components: { CommonHeader, CommonMenu, CommonFooter },
}
</script>