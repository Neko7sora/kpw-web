# 開発の流れ

## Branch

- `develop` : 開発版

## 必要環境

- Node.js v16+
- pnpm v7+
- pip

コマンドを使える必要があります。

- `pnpm i` : 必要なライブラリを全てインストール(hugo,mkdocs もインストールされます)

### `cd path/root/hugo`

- `pnpm run start` : プレビューサーバーを起動
- `pnpm run build` : 静的エクスポート
- `pnpm run lint` : コードの校正

### `cd path/docs/mkdocs`

- `mkdocs serve` : プレビューサーバーを起動
- `mkdocs build` : 静的エクスポート

## lint

自動で校正されるようになっています。

また、VS Code は、保存時に .md は lint されるように設定しています。

## Git

push 時に GitHub Actions にてトリガーで lint が Run します。

## Deploy

GitHub に push した際、この repository と連携している Cloudflare Pages プロジェクト上で、
自動でビルドが走り deploy されます。
また push 時に GitHub Actions によって lint が走ります。

## Flow

- `develop`

## バージョンアップ

null
