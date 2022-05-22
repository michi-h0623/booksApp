# booksApp

## 前提条件

React Native公式docsの環境構築手順が完了していること
参考：<https://reactnative.dev/docs/next/environment-setup#development-os>

## 開始方法

### ライブラリのインストール

ターミナルにて、以下を実行

```bash
yarn
```

### Metro Bundlerの起動

ターミナルにて、以下を実行

```bash
yarn start
```

### Androidの開始

ターミナルにて、Metro Bundlerを起動してから、以下を実行
(事前に任意のAVDを作成しておく)
参考：<https://developer.android.com/studio/run/managing-avds?hl=ja#createavd>

```bash
yarn android
```

### iOSの開始

ターミナルにて、Metro Bundlerを起動してから、以下を実行

```bash
yarn ios
```

## 使用APIについて

使用するAPIは、Google Books APIs
<https://developers.google.com/books>

(カテゴリ別、キーワードなし新着別に取得するAPIがないため、キーワード検索でカテゴリとして振る舞うようにする)

IT
<https://www.googleapis.com/books/v1/volumes?q=IT&langRestrict=ja&maxResults=10&orderBy=newest&printType=books&projection=lite&showPreorders=true>

アート
<https://www.googleapis.com/books/v1/volumes?q=アート&langRestrict=ja&maxResults=10&orderBy=newest&printType=books&projection=lite&showPreorders=true>

旅行
<https://www.googleapis.com/books/v1/volumes?q=旅行&langRestrict=ja&maxResults=10&orderBy=newest&printType=books&projection=lite&showPreorders=true>
