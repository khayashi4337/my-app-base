# my_app_base

このアプリケーションは JHipster 6.10.1 を使用して生成されました。ドキュメントとヘルプは次の場所にあります。[https://www.jhipster.tech/documentation-archive/v6.10.1](https://www.jhipster.tech/documentation-archive/v6.10.1).

※docker で、mysql と kafka を立ち上げておいてください。

## 開発

このプロジェクトをビルドする前に、マシンに次の依存関係をインストールして構成する必要があります。

1. [Node.js][]: Node を使用して開発用 Web サーバーを実行し、プロジェクトをビルドします。
   システムに応じて、ソースから、または事前にパッケージ化されたバンドルとしてノードをインストールできます。

Node をインストールすると、次のコマンドを実行して開発ツールをインストールできるようになります。
このコマンドは、依存関係が変更されたときにのみ実行する必要があります[package.json](package.json).

```
npm install
```

ビルドに、 npm スクリプトと [Webpack][] を使います。.

2 つの個別のターミナルで次のコマンドを実行して、ブラウザーで至福の開発体験を作成します。
ハードドライブ上のファイルが変更されると自動更新されます。

```


./gradlew -x webpack

npm start
```

Npm は、このアプリケーションで使用される CSS および JavaScript の依存関係の管理にも使用されます。 依存関係は次の方法でアップグレードできます
新しいバージョンを指定する[package.json](package.json). You can also run `npm update` and `npm install` to manage dependencies.
コマンドに `help`フラグを追加して、それを使用する方法を確認. For example, `npm help update`.

`npm run`コマンドは、このプロジェクトで実行できるすべてのスクリプトをリストします。

#### インストールしたもの

```
yarn add react-sidenav react-icons-kit styled-components
yarn add @fluentui/react
```

### PWA Support

PWA とは、「Progressive Web Apps」の略称で、モバイル向け Web サイトをスマートフォン向けアプリのように使えるようにする仕組みです。
JHipster は PWA（Progressive Web App）サポートを同梱しています, デフォルトではオフになっています。 One of the main components of a PWA is a service worker.

Service Worker の初期化コードはデフォルトでコメント化されています。To enable it, uncomment the following code in `src/main/webapp/index.html`:

```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').then(function () {
      console.log('Service Worker Registered');
    });
  }
</script>
```

Note: [Workbox](https://developers.google.com/web/tools/workbox/) powers JHipster's service worker. `service-worker.js` ファイルを自動生成します。

### 依存関係の管理

たとえば、[Leaflet] ライブラリをアプリケーションのランタイム依存関係として追加するには、次のコマンドを実行します。:

```
npm install --save --save-exact leaflet
```

TypeScript の型定義を利用するには [DefinitelyTyped][] repository in development, 次のコマンドを実行します:

```
npm install --save-dev --save-exact @types/leaflet
```

次に、ライブラリのインストール手順で指定された JS および CSS ファイルをインポートして、[Webpack][]がそれらを認識できるようにします:
Note: There are still a few other things remaining to do for Leaflet that we won't detail here.

JHipster を使用して開発する方法の詳細については[Using JHipster in development][].

### openapi-generator を使用して API ファースト開発を行う

[OpenAPI-Generator]()はこのアプリケーション用に構成されています。 `src/main/resources/swagger/api.yml`から API コードを生成できます。 definition file by running:

```bash
./gradlew openApiGenerate
```

次に、生成されたデリゲートクラスを `@Service` クラスで実装します。

`api.yml`定義ファイルを編集するには, [Swagger-Editor]()などのツールを使用できます. 次のコマンドを実行して、Docker を使用して swagger-editor のローカルインスタンスを起動します。 `docker-compose -f src/main/docker/swagger-editor.yml up -d`. そのエディタのリンクはこちらです [http://localhost:7742](http://localhost:7742).

Refer to [Doing API-First development][] for more details.

## 本番用構築

### Packaging as jar

最終的な jar ファイルを作成して最適化するには the my_app_base application for production, run:

```


./gradlew -Pprod clean bootJar

```

これにより、クライアントの CSS ファイルと JavaScript ファイルが連結および縮小されます。 It will also modify `index.html` so it references these new files.
すべてが確実に機能するように, run:

```


java -jar build/libs/*.jar

```

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

Refer to [Using JHipster in production][] for more details.

### WAR ファイルにする方法

アプリケーションサーバーにデプロイするために、アプリケーションを war としてパッケージ化するには, run:

```
./gradlew -Pprod -Pwar clean bootWar
```

## Testing

アプリケーションのテストを起動するには, run:

```
./gradlew test integrationTest jacocoTestReport
```

### クライアントテスト

単体テストは [Jest][] と [Jasmine][]にて記載しています. 格納場所は [src/test/javascript/](src/test/javascript/) and can be run with:

```
npm test
```

詳細は, refer to the [Running tests page][].

### コード品質

Sonar はコード品質の分析に使用されます. You can start a local Sonar server (accessible on http://localhost:9001) with:

```
docker-compose -f src/main/docker/sonar.yml up -d
```

You can run a Sonar analysis with using the [sonar-scanner](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner) or by using the gradle plugin.

Then, run a Sonar analysis:

```
./gradlew -Pprod clean check jacocoTestReport sonarqube
```

For more information, refer to the [Code quality page][].

## Docker を使用して開発を簡素化する (optional)

Docker を使用して JHipster 開発エクスペリエンスを向上させることができます. いくつかの docker-compose 構成が [src/main/docker](src/main/docker) folder to launch required third party services.

※サーバを実行する前に、mysql と kafka のサーバを起動しておいてください。

### mysql

たとえば、Docker コンテナーで mysql データベースを起動するには:

```
docker-compose -f src/main/docker/mysql.yml up -d
```

停止してコンテナを削除するには、次のコマンドを実行します。:

```
docker-compose -f src/main/docker/mysql.yml down
```

### kafka

```
docker-compose -f src/main/docker/kafka.yml up -d
```

停止してコンテナを削除するには、次のコマンドを実行します。:

```
docker-compose -f src/main/docker/kafka.yml down
```

アプリケーションとそれに依存するすべてのサービスを完全にドッキングすることもできます。
To achieve this, 最初に実行して、アプリの Docker イメージを作成します:

```
./gradlew bootJar -Pprod jibDockerBuild
```

Then run:

```
docker-compose -f src/main/docker/app.yml up -d
```

詳細については、 [Using Docker and Docker-Compose][], このページには、docker-compose サブジェネレーターに関する情報も含まれています (`jhipster docker-compose`), 1 つまたは複数の JHipster アプリケーションの Docker 構成を生成できます。

# サーバサイドカスタマイズ

パスの設定

## 継続的インテグレーション（オプション）

プロジェクトの CI を構成するには, run the ci-cd sub-generator (`jhipster ci-cd`), これにより、多くの継続的インテグレーションシステムの構成ファイルを生成できます。 Consult the [Setting up Continuous Integration][] page for more information.

[jhipster homepage and latest documentation]: https://www.jhipster.tech
[jhipster 6.10.1 archive]: https://www.jhipster.tech/documentation-archive/v6.10.1
[using jhipster in development]: https://www.jhipster.tech/documentation-archive/v6.10.1/development/
[using docker and docker-compose]: https://www.jhipster.tech/documentation-archive/v6.10.1/docker-compose
[using jhipster in production]: https://www.jhipster.tech/documentation-archive/v6.10.1/production/
[running tests page]: https://www.jhipster.tech/documentation-archive/v6.10.1/running-tests/
[code quality page]: https://www.jhipster.tech/documentation-archive/v6.10.1/code-quality/
[setting up continuous integration]: https://www.jhipster.tech/documentation-archive/v6.10.1/setting-up-ci/
[node.js]: https://nodejs.org/
[yarn]: https://yarnpkg.org/
[webpack]: https://webpack.github.io/
[angular cli]: https://cli.angular.io/
[browsersync]: https://www.browsersync.io/
[jest]: https://facebook.github.io/jest/
[jasmine]: https://jasmine.github.io/2.0/introduction.html
[protractor]: https://angular.github.io/protractor/
[leaflet]: https://leafletjs.com/
[definitelytyped]: https://definitelytyped.org/
[openapi-generator]: https://openapi-generator.tech
[swagger-editor]: https://editor.swagger.io
[doing api-first development]: https://www.jhipster.tech/documentation-archive/v6.10.1/doing-api-first-development/
