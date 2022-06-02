# String.replace

## 从哪里学到的

vue 的 emit 函数实现中，为 emit 传入一个 event 的字符串，如 `emit("hello-world")`，实际上是去该 component 上匹配对应的 `onHelloWorld`，这里可以使用正则实现

## 语法

你可以指定一个函数作为第二个参数。在这种情况下，当匹配执行后，该函数就会执行。 函数的返回值作为替换字符串。 (注意：上面提到的特殊替换参数在这里不能被使用。) 另外要注意的是，如果第一个参数是正则表达式，并且其为全局匹配模式，那么这个方法将被多次调用，每次匹配都会被调用。

## 例子

```ts
const camelize = (str: string) =>
  str.replace(/-(\w)/, (_, target: string) => {
    return capitalize(target);
  });
```
