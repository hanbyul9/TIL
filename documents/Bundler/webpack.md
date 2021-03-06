# Webpack

웹팩: 프로젝트 구조 분석 -> 자바스크립트 모듈/에셋 찾고 -> 브라우저에서 이용할 수 있도록 번들로 묶고 패킹하는 `Module Bundler`다.

## grunt, gulp 등 빌드도구와의 차이점
- grunt/gulp
    + 정해진 경로에서 구성과 일치하는 파일을 찾는다.
    + 따라서 구성 파일에서 이러한 파일을 변환, 조합, minify 하는 작업이나 단계 지정해야 함
- 웹팩
    + 프로젝트 전체를 한 단위로 분석
    + 지정한 메인 파일에서 시작해 js의 require과 import문을 참고해 프로젝트의 모든 의존성을 조사하고 로더를 이용해 처리한 후 번들로 묶은 js파일 생성

## 시작하기
웹팩을 프로젝트 의존성으로 추가
```
npm install --save-dev webpack
```

## webpack 3.0.0
```js
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Enable HMR
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/, // CSS 파일을 js 모듈 안에서 import하기 위해서 씀. Asset관리
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};

```

## Refer
Pro-react책 부록 A 웹팩
