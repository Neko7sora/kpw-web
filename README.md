# かめぱわぁ～るど Web サイト

かめぱわぁ～るど Web サイト

## 開発

Node.js 24 LTS（24.15.0 以上）と npm 12.2.1 以上、Python 3.12 以上が必要です。
依存関係は npm workspaces で管理し、リポジトリ直下で次を実行します。

```sh
npm ci
npm run install:next
npm run dev
```

`install:next` は Hugo、MkDocs と関連する Python パッケージをインストールし、
ドキュメント用 JavaScript / CSS を生成します。
Python パッケージはリポジトリ内の `.venv` にインストールします。
開発・ビルド時にはこの環境を自動で使用するため、仮想環境の有効化や PATH の追加は不要です。

```sh
npm run build:minify
npm test
npm run test --workspace=html-minifier
```

Tailwind CSS 4 の対応ブラウザーは Safari 16.4 以上、Chrome 111 以上、Firefox 128 以上です。

Discord CDN の画像を取得できない場合は同梱アイコンを使用し、
ホームページの動画を取得できない場合は動画を省略してビルドを続行します。

## NOTICES AND INFORMATION

バージョンによっては使用・開発上の注意点などが記載されたドキュメントを同封しています。

詳細は KamePowerWorld の `www.kamesuta.com` リポジトリ直下にある `NOTICE.md` からご確認いただけます。
