
### Html编码规范

#### HTML5 doctype

[必要的]在页面开头使用这个简单地doctype来启用标准模式，使其在每个浏览器中尽可能一致的展现；

[强烈推荐]虽然doctype不区分大小写，但是按照惯例，doctype大写。

``` html
<!DOCTYPE html>
<html>
    ...
</html>
```

#### IE兼容模式

[必要的]需要考虑IE时，用 <meta> 标签可以指定页面应该用什么版本的IE来渲染；

``` html
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    </head>
    ...
</html>
```

#### 引入CSS, JS

[强烈推荐]根据HTML5规范, 通常在引入CSS和JS时不需要指明 type，因为 text/css 和 text/javascript 分别是他们的默认值。

```html
<!-- External CSS -->
<link rel="stylesheet" href="code_guide.css">

<!-- In-document CSS -->
<style>
    ...
</style>

<!-- External JS -->
<script src="code_guide.js"></script>

<!-- In-document JS -->
<script>
    ...
</script>
```

#### boolean属性

[强烈推荐]boolean属性指不需要声明取值的属性，XHTML需要每个属性声明取值，但是HTML5并不需要；
[强烈推荐]boolean属性的存在表示取值为true，不存在则表示取值为false。

```html
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
    <option value="1" selected>1</option>
</select>
```

#### 语义化

[强烈推荐]尽量使用语义化的标签，在HTML 5出来之前，我们用div来表示页面章节，但是这些div都没有实际意义。（即使我们用css样式的id和class形容这块内容的意义）。这些标签只是我们提供给浏览器的指令，只是定义一个网页的某些部分。但现在，那些之前没“意义”的标签因为因为html5的出现消失了，这就是我们平时说的“语义”。

```html
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Sample page</title>
        <link rel="stylesheet" href="code_guide.css" />
    </head>
    <body>
        <section id="page">
            <header id="header">
            页头
            </header>
            <section id="body">
            主体
            </section>
            <footer id="footer">
            页尾
            </footer>
        </section>
        <script src="code_guide.js"></script>
        <script>
        // 你的代码
        </script>
    </body>
</html>
```

#### 减少标签数量

[必要的]在编写HTML代码时，需要尽量避免多余的父节点同时遵循元素嵌套规则；

[推荐]很多时候，需要通过迭代和重构来使HTML变得更少。

```html
<!-- Not well -->
<span class="avatar">
    <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
```

#### 实用高于完美

[推荐]尽量遵循HTML标准和语义，但是不应该以浪费实用性作为代价；

[推荐]任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。
