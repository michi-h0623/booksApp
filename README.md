# booksApp

## 前提条件

React Native公式docsの環境構築手順が完了していること
参考：<https://reactnative.dev/docs/next/environment-setup#development-os>

## 動作確認済み環境

Xcode: Version 13.4
Android Studio: Android Studio Chipmunk | 2021.2.1 Build #AI-212.5712.43.2112.8512546, built on April 29, 2022
VSCode: バージョン: 1.67.2 (Universal)
React Native: 0.68.2

## 開始方法

### ライブラリのインストール

ターミナルにて、以下を実行

```bash
yarn setup
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

### エラーで起動しない場合

ターミナルにて、Metro Bundlerを起動してから、以下を実行

```bash
yarn refresh
```

その後、「Androidの開始」または「iOSの開始」の手順を実施する

## 使用APIについて

使用するAPIは、Google Books APIs
<https://developers.google.com/books>

(カテゴリ別、キーワードなし新着別に取得するAPIがないため、キーワード検索でカテゴリとして振る舞うようにする)

## 工夫した点

読みやすいコードとなるよう、記述に気をつけた。
