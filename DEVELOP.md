# 開発者向け情報

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

## Deploy

GitHub `develop` ブランチに push されると、自動で GitHub Actions 上でビルドが走り GitHub Pages に deploy されます。

## Flow

- `develop` - デフォルトブランチです。Pull Request は原則、このブランチに向けて送ってください。
- `future/{branch_title_name}` - 機能追加系
- `hotfix/{branch_title_name}` - ホットフィックス系 本番で起きている不具合など、すぐに修正したいもの

## バージョンアップ

未定
