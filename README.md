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
