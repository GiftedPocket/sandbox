# sandbox

Torch／Gifted Pocket 向けの小さな **Router リンク集** SPA です。**SQLite は使いません**（依存・設定・データファイルはありません）。

- 画面上のリストは **`routes.ts` に書いたVue Routerだけ** がソースです。**保存や API はありません**。`meta.navLink: true` のルートだけが一覧に並び、その行クリックで**遷移**します。
- 一覧ページ **`links`** には `meta.navLink` を付けないでください（でないと自分自身だけが増え続けます）。デモ用に <strong><code>/hello</code></strong>（<code>name: 'hello'</code>）を置いています。

見た目は **サイバーパンク調のダーク SF** で、テキスト・アクセントの**コントラストを強め**にしています。

## 必要環境

- Node.js **22.x**（`.nvmrc` 参照）

## インストールと起動

```bash
npm install
npm run dev
```

`npm run dev` では Quasar（Vite）と、`npm start` と同じ **`express` 静的サーバ**が **8787** で同時起動します（本番相当の動きの確認用）。

## 本番

```bash
npm run build
NODE_ENV=production npm start
```

`NODE_ENV=production` で `dist/spa` を **`express.static`** で同じポートから返します。

### 環境変数

| 変数 | 意味 |
| --- | --- |
| `SANDBOX_API_PORT` | サーバポート（既定 8787） |

### ルートを一覧に出すには

1. `src/router/routes.ts` にコンポーネント付きの子ルートを足す。
2. そのルートへ `meta: { navLink: true, navLabel: '見出し' }`（`navLabel` は任意）を書く。
3. ブラウザで `/#/links` を開き、リンク一覧から遷移する。

## lint / format

```bash
npm run lint
npm run format
```

## Quasar

設定は [`quasar.config.ts`](https://v2.quasar.dev/quasar-cli-vite/quasar-config-file)
