# Web サイトの作り方

参考程度にしてください！

!!! attention
    `www.kamesuta.com/` ルートパスの Web サイトの作り方を記載しています。

    このページに記載されている方法は、`www.kamesuta.com/docs` パスの作り方より高度です。

!!! danger
    Git Repo: https://github.com/KamePowerWorld/www.kamesuta.com

    このリポジトリに不注意で誤ったコミットすると、`www.kamesuta.com/docs` パスに影響を及ぼします。

## 1. サイトを Fork する

- ↓ にクリックしてリポジトリのコピーをする

  [https://github.com/KamePowerWorld/www.kamesuta.com/fork](https://github.com/KamePowerWorld/www.kamesuta.com/fork)

## 2. ローカルでテストする

- ローカルで ↓ を**参考にして**、Node.js LTS を入れて`corepack enable pnpm && pnpm`する

  [https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b](https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b)

  [https://zenn.dev/nkys39/articles/install-nodejs-win10](https://zenn.dev/nkys39/articles/install-nodejs-win10)

  [https://nodejs.org/ja/](https://nodejs.org/ja/)

- コマンドでローカルサーバーを立ち上げる

  コマンド:

  ```bash
  pnpm start
  ```

## 3. HTML や markdown などのコードを編集し、[2]で立ち上げたローカルサーバーのプレビューで変更を確認する

- ブラウザでプレビューを見る

  プレビュー:

  ```bash
  http://localhost:1313/
  ```

## 4. ↓ の手順でプルリクエストを作成する

[https://futureys.tokyo/lets-create-pull-request-on-github/](https://futureys.tokyo/lets-create-pull-request-on-github/)

## 5 承認すれば変更がサーバーに反映される～

やった～！！

## 仕様書

参考までに

### Hugo (`/` ルートパス)

[https://gohugo.io/](https://gohugo.io/)

依存関係

[https://github.com/KamePowerWorld/www.kamesuta.com/network/dependencies](https://github.com/KamePowerWorld/www.kamesuta.com/network/dependencies)


### Material for MkDocs (`/docs` パス)

[https://squidfunk.github.io/mkdocs-material/](https://squidfunk.github.io/mkdocs-material/)
