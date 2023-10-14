# 查看npm的软链接并删除之

```shell
npm ls -g
// @angrychocobo/echo-ui@0.0.5 -> ./../../../Users/chocobo/Documents/projects/echo-ui  这样的就是npm link软链接
// @vue/cli@4.5.15 这样的是非软链接的npm包

npm unlink @angrychocobo/echo-ui -g
```
