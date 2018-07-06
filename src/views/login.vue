<template>
  <div class="login">
    <div class="demo-ruleForm">
        <div class="manage_tip">
        <p>vue管理后台</p>
      </div>
      <el-form :model="userinfo" status-icon :rules="rules" ref="userLogin" class="formbody">
        <el-form-item label="" prop="username">
          <el-input v-model="userinfo.username" auto-complete="off">
            <img slot="prefix" src="../assets/username.png" alt="">
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="pwd">
          <el-input type="password" v-model="userinfo.pwd" auto-complete="off">
            <img slot="prefix" src="../assets/password.png" alt="">
          </el-input>
        </el-form-item>
        <div>
          <el-button type="primary" @click="submitForm">登录</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </div>
      </el-form>
      </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: "Login",
  data() {
    return {
      userinfo: {
        username: "",
        pwd: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.userLogin.validate(valid => {
        if (valid) {
          Ajax({
            url: "/api/login",
            data: this.userinfo,
            success: result => {
              Cookies.set("token", result.token, { path: "/" });
              Cookies.set("name", result.role, { path: "/" });
              this.$store.commit("setUsername", result.role, { root: true });
              this.$router.push("/home");
            },
            error: error => {
              this.$message.error(error || "登录失败");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.userLogin.resetFields();
    }
  }
};
</script>

<style lang="less">
.login {
  width: 100vw;
  height: 100vh;
  background-color: #324057;
  display: flex;
  justify-content: center;
  .demo-ruleForm {
    width: 400px;
    margin-top: 20vh;
    text-align: center;
  }
  .formbody {
    background-color: #fff;
    border-radius: 6px;
    padding: 60px 30px 50px;
    .el-form-item {
      margin-bottom: 32px;
    }
    .el-input__prefix {
      top: 5px;
    }
  }
  .manage_tip {
    p {
      font-size: 34px;
      color: #fff;
    }
  }
}
</style>