## RT

当你在vscode中单步调试时候，总是会进入vue的响应式代码中，还在蛋疼地跳出当前函数吗？

```diff
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:9999/#/antdv",
      "webRoot": "${workspaceFolder}",
+      "skipFiles": ["<node_internals>/**", "/**/@vue/**/*.js"]
    }
  ]
}
```
skipFiles的[文档](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)，使用了 [glob pattern](https://en.wikipedia.org/wiki/Glob_(programming)) 进行文件匹配
