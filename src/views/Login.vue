<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
                <pre>
                    name: fants
                    password: fants
                </pre>
                <form action="">
                    <div class="form-group">
                        <label for="" class="control-label">用户名</label>
                        <input type="text" class="form-control" v-model="formData.name">
                    </div>
                    <div class="form-group">
                        <label for="" class="control-label">密码</label>
                        <input type="password" class="form-control" v-model="formData.password">
                    </div>
                    <button type="button" class="btn btn-primary" @click="dataSubmit">提交</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                password: ''
            }
        }
    },
    methods: {
        dataSubmit() {
            if (this.formData.name == 'fants' && this.formData.password == 'fants') {
                // get user info 
                if (true) {
                    localStorage.setItem('token', 123456);
                    this.$router.push('/dashboard');
                }
            } else {
                alert('name or password is incorrect!');
            }
        }
    }
}
</script>

<style>

</style>
