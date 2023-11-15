import { createApp } from 'vue'				// Импорт метода для создания приложения
import App from '@/App.vue'					// Импорт главного компонента
import 'bootstrap/dist/css/bootstrap.css'	// Подключение Bootstrap

const app = createApp(App);					// Создание экземпляра приложения
app.mount('#app');							// Привязка экземпляра приложения к странице HTML