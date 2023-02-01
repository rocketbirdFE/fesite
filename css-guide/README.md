### Css编码规范

#### 命名

[必要的] 类名使用小写字母，以中划线分隔
[必要的] id采用驼峰式命名

```css
/* class */
.element-content {
    ...
}

/* id */
#myDialog {
    ...
}
```

#### 分号

[必要的]每个属性声明末尾都要加分号。

```css
.element {
    width: 20px;
    height: 20px;

    background-color: red;
}
```

#### 空格

[强烈推荐]以下几种情况不需要空格：

- 属性名后
- 多个规则的分隔符','前
- !important '!'后
- 属性值中'('后和')'前
- 行末不要有多余的空格

[强烈推荐]以下几种情况需要空格：

- 属性值前
- 选择器'>', '+', '~'前后
- '{'前
- !important '!'前
- 属性值中的','后
- 注释'/*'后和'*/'前

```css
/* not good */
.element {
    color :red! important;
    background-color: rgba(0,0,0,.5);
}

/* good */
.element {
    color: red !important;
    background-color: rgba(0, 0, 0, .5);
}

/* not good */
.element ,
.dialog{
    ...
}

/* good */
.element,
.dialog {

}

/* not good */
.element>.dialog{
    ...
}

/* good */
.element > .dialog{
    ...
}

/* not good */
.element{
    ...
}

/* good */
.element {
    ...
}
```

#### 空行

[强烈推荐]以下几种情况需要空行：

- 文件最后保留一个空行
- '}'后最好跟一个空行，包括scss中嵌套的规则
- 属性之间需要适当的空行，具体见属性声明顺序

```css
/* not good */
.element {
    ...
}
.dialog {
    color: red;
    &:after {
        ...
    }
}

/* good */
.element {
    ...
}

.dialog {
    color: red;

    &:after {
        ...
    }
}
```

#### 换行

[推荐]以下几种情况不需要换行：

- '{'前

以下几种情况需要换行：

- '{'后和'}'前
- 每个属性独占一行
- 多个规则的分隔符','后

```css
/* not good */
.element
{color: red; background-color: black;}

/* good */
.element {
    color: red;
    background-color: black;
}

/* not good */
.element, .dialog {
    ...
}

/* good */
.element,
.dialog {
    ...
}
```

#### 注释

[必要的]注释统一用'/**/'，具体参照下面的写法；

[强烈推荐]缩进与下一行代码保持一致；

[强烈推荐]可位于一个代码行的末尾，与代码间隔一个空格。

```css
/* Modal header */
.modal-header {
    ...
}

/*
 * Modal header
 */
.modal-header {
    ...
}

.modal-header {
    /* 50px */
    width: 50px;

    color: red; /* color red */
}
```


#### 属性声明顺序

[推荐]相关的属性声明建议按下边的顺序做分组处理，组之间需要有一个空行。

```css
.declaration-order {
    display: block;
    float: right;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

    border: 1px solid #e5e5e5;
    border-radius: 3px;
    width: 100px;
    height: 100px;

    font: normal 13px "Helvetica Neue", sans-serif;
    line-height: 1.5;
    text-align: center;

    color: #333;
    background-color: #f5f5f5;

    opacity: 1;
}
```

#### 颜色

[强烈推荐]颜色16进制用小写字母；

[强烈推荐]颜色16进制尽量用简写。
```css
/* not good */
.element {
    color: #ABCDEF;
    background-color: #001122;
}

/* good */
.element {
    color: #abcdef;
    background-color: #012;
}
```

#### 属性简写

[推荐]属性简写需要你非常清楚属性值的正确顺序，而且在大多数情况下并不需要设置属性简写中包含的所有值，所以建议尽量分开声明会更加清晰；

[推荐]margin 和 padding 相反，需要使用简写；

常见的属性简写包括：

- font
- background
- transition
- animation

```css
/* not good */
.element {
    transition: opacity 1s linear 2s;
}

/* good */
.element {
    transition-delay: 2s;
    transition-timing-function: linear;
    transition-duration: 1s;
    transition-property: opacity;
}
```

#### 媒体查询

[推荐]尽量将媒体查询的规则靠近与他们相关的规则，不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部，这样做只会让大家以后更容易忘记他们。
```css
.element {
    ...
}

.element-avatar{
    ...
}

@media (min-width: 480px) {
    .element {
        ...
    }

    .element-avatar {
        ...
    }
}
```

#### 杂项

[必要的]不允许有空的规则；

[强烈推荐]尽量少用'*'选择器。

[强烈推荐]选择器不要超过4层；

[强烈推荐]元素选择器用小写字母；

[推荐]去掉小数点前面的0；

[推荐]去掉数字中不必要的小数点和末尾的0；

[推荐]属性值'0'后面不要加单位；

[推荐]无前缀的标准属性应该写在有前缀的属性后面；

[推荐]不要在一个文件里出现两个相同的规则；

[推荐]用 border: 0; 代替 border: none;；

[推荐]发布的代码中不要有 @import；
