import axios from 'axios';

// Se estiver usando emulador no celular, trocar localhost pelo ip da máquina
// adb reverse tcp:3333 tcp:3333 se estiver com genymotion
// posso usar 10.0.3.2
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;