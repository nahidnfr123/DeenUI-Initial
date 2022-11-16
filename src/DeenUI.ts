import type {App} from 'vue'
import {components} from "@/components";


const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component);
  });
  // app.component('DRow', DRow)
  // app.component('DCol', DCol)
}

// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use({install})
// }

export default {
  version: '2.15.11',
  // locale: locale.use,
  // i18n: locale.i18n,
  install,
  ...components
}
