import type {App} from 'vue'
import {DRow} from "@/components/row-col/DRow";
import {DCol} from "@/components/row-col/DCol";

export default {
  install: (app: App) => {
    app.component('DRow', DRow)
    app.component('DCol', DCol)
  }
}

export {DRow}
export {DCol}
