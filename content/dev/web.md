---
title: "Web"
description: "Webサイトの作り方"
date: 2022-04-22T19:11:17+09:00
lastmod: 2022-04-22T19:11:17+09:00
draft: false
images: []
---

## Web サイトの作り方～！

### 1. サイトを Fork する

- ↓ にクリックしてリポジトリのコピーをする

  [https://github.com/KamePowerWorld/www.kamesuta.com/fork](https://github.com/KamePowerWorld/www.kamesuta.com/fork)

### 2. ローカルでテストする

- ローカルで ↓ を**参考にして**、Node.js LTS を入れて`corepack enable pnpm && pnpm`する

  [https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b](https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b)

  [https://zenn.dev/nkys39/articles/install-nodejs-win10](https://zenn.dev/nkys39/articles/install-nodejs-win10)

  [https://nodejs.org/ja/](https://nodejs.org/ja/)

- コマンドでローカルサーバーを立ち上げる

  コマンド:

  ```bash
  pnpm start
  ```

### 3. HTML や markdown などのコードを編集し、[2]で立ち上げたローカルサーバーのプレビューで変更を確認する

- ブラウザでプレビューを見る

  プレビュー:

  ```bash
  http://localhost:1313/
  ```

### 4. ↓ の手順でプルリクエストを作成する

[https://futureys.tokyo/lets-create-pull-request-on-github/](https://futureys.tokyo/lets-create-pull-request-on-github/)

### 5 承認すれば変更がサーバーに反映される～

やった～！！

## 仕様書

参考までに

### Hugo

[https://gohugo.io/](https://gohugo.io/)

### Theme

KamePowerWorld Website

#### Theme-base

[https://github.com/h-enk/hyas](https://github.com/h-enk/hyas)
※破壊的変更をおこなったため、ドキュメントとは違う動作がします。

## 依存関係

[https://github.com/KamePowerWorld/www.kamesuta.com/network/dependencies](https://github.com/KamePowerWorld/www.kamesuta.com/network/dependencies)

## Lighthouse

比較してみた

### Numa-Lab サイト

![image](https://user-images.githubusercontent.com/75793267/164002488-e4b72223-c60c-4bfd-bcb2-a4f8099177ce.png)

### KamePowerWorld サイト

![image](https://user-images.githubusercontent.com/75793267/164420361-da158fdd-4b41-41f4-9d7b-4837300f144c.png)
