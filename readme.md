# 使用文档

#### 前提

此为 cli 命令行工具，调用远程仓库 [front-react-frame](https://github.com/1045757307/front-react-frame.git) 来实现框架搭建，想要使用本框架，需保证 node 版本高于 v12，否则可能无法正常运行。

#### 安装方法

- 使用 npx 安装

```
npx create-react-frame
```

- 使用 npm 或者 yarn 安装
  无论使用 npm 或者 yarn，都需要先安装 create-react-frame，可全局安装，也可安装到你得某个项目文件件

```
npm install create-react-frame --global
yarn add  create-react-frame --global

// 安装成功后直接使用create-react-frame创建项目
create-react-frame
```

#### 创建项目时需根据提示输入相关内容

1. 创建的目录名称(必填)
2. 开发环境接口服务代理（选填），不填则为默认内容
3. 项目名称（选填），不填则为默认内容
4. 用户信息接口地址（选填），不填则为默认内容
5. 菜单接口地址（选填），不填则为默认内容

创建完成后打开该项目根据用户手册的提示即可开始使用
