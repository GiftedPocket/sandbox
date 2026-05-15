declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
  }
}

import type {} from 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    /** true のときだけリンク一覧のドロップダウンとラベル解決の対象。一覧ページ本体には付けない。 */
    navLink?: boolean;
    /** 一覧・選択肢に出す短文（省略時は route の name を表示）。 */
    navLabel?: string;
  }
}
