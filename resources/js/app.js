import './bootstrap';
import { createApp } from 'vue';
import Welcome from './components/Welcome.vue';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(Welcome);

const toastOptions = {
    position: "top-right",
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
};

app.use(Toast, toastOptions);
app.mount('#app');
