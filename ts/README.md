## TypeScript 学习

### 1. 安装

```shell
# 安装typescript
npm install -g typescript

# 查看版本
tsc -v

# ts转换为js
tsc app.ts
```

### 2. tsconfig

#### 2.1 为什么使用tsconfig

使用命令比较麻烦, 使用 `tsconfig.json` 文件后不需要手动输入配置, 方便团队协作.

```shell
# 直接使用命令
#  参数介绍
#  --outFile // 编译后生成的文件名称
#  --target  // 指定ECMAScript目标版本
#  --module  // 指定生成哪个模块系统代码
#  index.ts  // 源文件
tsc --outFile leo.js --target es3 --module amd index.ts
```

#### 2.2 使用tsconfig

**1.初始化**

```shell
# 初始化后默认创建文件: tsconfig-default.json
$ tsc --init                                   

Created a new tsconfig.json with:                                                                                       
                                                                                                                     TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```