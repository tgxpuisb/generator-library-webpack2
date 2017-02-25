## generator-library-webpack2

> a generator use webpack2 to bundle the library
> 一个使用webpack2来打包library库的生成器工具

> it's very simple, only can bundle javascript so far (will support to bundle "less-file" soon)
> user can add other functions by self
> 它目前还比较简单,只支持打包javascript (以后会支持less)
> 用户可以自己去添加额外的功能

### how to use

> it base on yeoman, so we will install yo first
> use yarn or npm to install

```
npm install -g yo
npm install -g generator-library-webpack2

// then run yo library-webpack2 in your project

yo library-webpack2

// at last install dependencies

npm install

```

> run `npm run dev` can into the development model
> 使用 `npm run dev` 进入开发者模式
> and run `npm run build` can build this library
> 使用 `npm run build` 打包模块(没错,就是这么简单粗暴)
