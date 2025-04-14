<template>
    <div class="fixed inset-0 flex items-center justify-center" style="
            background: linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%),
                linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), #fff;
        ">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div
            class="max-w-md w-full mx-auto p-6 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg border border-gray-200 relative z-10">
            <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">
                Login
            </h2>
            <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                    <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <input id="username" type="text" v-model="username"
                        class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 placeholder-gray-700"
                        required />
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input id="password" type="password" v-model="password"
                        class="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 placeholder-gray-700"
                        required />
                </div>
                <div v-if="error" class="text-red-600 text-sm">{{ error }}</div>
                <button type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200">
                    Sign In
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { errorMessages } from "vue/compiler-sfc";

export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: "",
            error: "",
            authUsername: import.meta.env.VITE_AUTH_USERNAME,
            authPassword: import.meta.env.VITE_AUTH_PASSWORD,
        };
    },
    props: ['isAuthenticated'],
    methods: {
        handleSubmit() {
            if (
                this.username === this.authUsername &&
                this.password === this.authPassword
            ) {
                localStorage.setItem("auth_token", "authenticated");
                localStorage.setItem(
                    "auth_timestamp",
                    new Date().getTime().toString()
                );
                this.$emit('auth-change', true);
                this.error = "";
            } else {
                this.error = "Invalid username or password";
            }
        },
    },
};
</script>
