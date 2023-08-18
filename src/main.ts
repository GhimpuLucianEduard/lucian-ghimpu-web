import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './styles/index.css';
import 'highlight.js/styles/vs2015.css';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import ts from 'highlight.js/lib/languages/typescript';
import hljsVuePlugin from '@highlightjs/vue-plugin';

hljs.registerLanguage('json', json);
hljs.registerLanguage('typescript', ts);

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(hljsVuePlugin);

app.mount('#app');
