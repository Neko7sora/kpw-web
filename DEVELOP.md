# 開発の流れ

## Branch

- `develop` : 開発版

## Node.js

コマンドを使える必要があります。

- `pnpm i` : 必要なライブラリを全てインストール(hugo もインストールされます)
- `pnpm run start` : プレビューサーバーを起動
- `pnpm run build` : 静的エクスポート
- `pnpm run lint` : コードや Markdown の校正
- `pnpm hugo new <posts/my-first-post.md>`: <content/posts/my-first-post.md> の作成 (archtypes/default.md を元に作成)

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
