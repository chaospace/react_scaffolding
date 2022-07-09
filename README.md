# 리액트 프로젝트 scaffolding

리액트 기반 플젝 베이스 제공

- 주요환경
  - webpack5.x
  - react18.x
  - typescript
  - svgr
  - storybook
  - scss
  - style-component
  - jest
  - axios
  - style-lint
  - eslint
  - prettier

## webpack 주요 설정 정리

**eslint&prettier**

- yarn add -D eslint-config-prettier eslint-plugin-pretier
  - config-prettier : ESLint의 formatting 관련 설정 중 Prettier와 충돌하는 부분 비활성화.
  - plugin-prettier : Prettier에서 인식하는 코드상의 포맷 오류를 ESLint 오류로 출력
- yarn add -D eslint-plugin-react eslint-plugin-react-hooks

**react-fast-refresh**

- yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
- yarn add -D type-fest
  - typescript프로젝트일 경우 설치

<details>
<summary>webpack 적용 예시( wepback-dev-server )</summary>

```js
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    hot: true
  }
};
```

</details>

<details>
<summary>babel-loader 설정</summary>

```js
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean)
            }
          }
        ]
      }
    ]
  },
  plugins: [isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean)
};
```

</details>
