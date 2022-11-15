import type {App} from 'vue'
import {DRow} from "@/components/DRow/index";
import {DCol} from "@/components/DCol/index";

// const components = [
//   DRow,
//   DCol
// ]

const install = (app: App) => {
  // components.forEach(component => {
  //   app.component(component, component);
  // });
  app.component('DRow', DRow)
  app.component('DCol', DCol)
}

// if (typeof window !== 'undefined' && window?.Vue) {
//   install(window?.Vue);
// }

export default {
  version: '2.15.11',
  // locale: locale.use,
  // i18n: locale.i18n,
  install,
  DRow,
  DCol
}
