
### JavaScript编码规范

#### 空格

[必要的]以下几种情况不需要空格：

- 对象的属性名后
- 一元运算符与操作对象之间
- 函数调用括号前
- 无论是函数声明还是函数表达式，'('前不要空格
- 数组的'['后和']'前
- 对象的'{'后和'}'前
- 运算符'('后和')'前

[必要的]以下几种情况需要空格：

- 二元运算符前后
- 三元运算符'?:'前后
- 代码块'{'前
- 下列关键字前：else, while, catch, finally
- 下列关键字后：if, else, for, while, do, switch, case, try, catch, finally, with, return, typeof
- 单行注释'//'后（若单行注释和代码同行，则'//'前也需要），多行注释'*'后
- 对象的属性值前
- for循环，分号后留有一个空格，前置条件如果有多个，逗号后留一个空格
- 无论是函数声明还是函数表达式，'{'前一定要有空格
- 函数的参数之间

```javascript
// not good
var a = {
    b :1
};

// good
var a = {
    b: 1
};

// not good
++ x;
y ++;
z = x?1:2;

// good
++x;
y++;
z = x ? 1 : 2;

// not good
var a = [ 1, 2 ];

// good
var a = [1, 2];

// not good
var a = ( 1+2 )*3;

// good
var a = (1 + 2) * 3;

// no space before '(', one space before '{', one space between function parameters
var doSomething = function(a, b, c) {
    // do something
};

// no space before '('
doSomething(item);

// not good
for(i=0;i<6;i++){
    x++;
}

// good
for (i = 0; i < 6; i++) {
    x++;
}
```

#### 空行

[必要的]以下几种情况需要空行：

- 变量声明后（当变量声明在代码块的最后一行时，则无需空行）
- 注释前（当注释在代码块的第一行时，则无需空行）
- 代码块后（在函数调用、数组、对象中则无需空行）
- 文件最后保留一个空行

```javascript
// need blank line after variable declaration
var x = 1;

// not need blank line when variable declaration is last expression in the current block
if (x >= 1) {
    var y = x + 1;
}

var a = 2;

// need blank line before line comment
a++;

function b() {
    // not need blank line when comment is first line of block
    return a;
}

// need blank line after blocks
for (var i = 0; i < 2; i++) {
    if (true) {
        return false;
    }

    continue;
}

var obj = {
    foo: function() {
        return 1;
    },

    bar: function() {
        return 2;
    }
};

// not need blank line when in argument list, array, object
func(
    2,
    function() {
        a++;
    },
    3
);

var foo = [
    2,
    function() {
        a++;
    },
    3
];


var foo = {
    a: 2,
    b: function() {
        a++;
    },
    c: 3
};
```

#### 换行

[必要的]换行的地方，行末必须有','或者运算符；

[必要的]以下几种情况不需要换行：

- 下列关键字后：else, catch, finally
- 代码块'{'前

[必要的]以下几种情况需要换行：

- 代码块'{'后和'}'前
- 变量赋值后

```javascript
// not good
var a = {
    b: 1
    , c: 2
};

x = y
    ? 1 : 2;

// good
var a = {
    b: 1,
    c: 2
};

x = y ? 1 : 2;
x = y ?
    1 : 2;

// no need line break with 'else', 'catch', 'finally'
if (condition) {
    ...
} else {
    ...
}

try {
    ...
} catch (e) {
    ...
} finally {
    ...
}

// not good
function test()
{
    ...
}

// good
function test() {
    ...
}

// not good
var a, foo = 7, b,
    c, bar = 8;

// good
var a,
    foo = 7,
    b, c, bar = 8;
```

#### 单行注释

[必要的]双斜线后，必须跟一个空格；

[必要的]缩进与下一行代码保持一致；

[必要的]可位于一个代码行的末尾，与代码间隔一个空格。

```javascript
if (condition) {
    // if you made it here, then all security checks passed
    allowed();
}

var zhangsan = 'zhangsan'; // one space after code
```

#### 多行注释

[强烈推荐]最少三行, '*'后跟一个空格，具体参照下面写法；

[推荐]建议在以下情况下使用：

- 难于理解的代码段
- 可能存在错误的代码段
- 浏览器特殊的HACK代码
- 业务逻辑强相关的代码

```javascript
/*
 * one space after '*'
 */
var x = 1;
```

#### 引号

最外层统一使用单引号。

```javascript
// not good
var x = "test";

// good
var y = 'foo',
    z = '<div id="test"></div>';
```

#### 变量命名

[强烈推荐]标准变量与函数名采用驼峰式命名（考虑到后台接口返回的数据，某些对象的属性可不遵循此项）
[必要的]常量全大写，用下划线连接
[强烈推荐]构造函数，大写第一个字母
[强烈推荐]jquery对象必须以'$'开头命名

```javascript
var thisIsMyName;
var MAX_COUNT = 10;

function Person(name) {
    this.name = name;
}

// not good
var body = $('body');

// good
var $body = $('body');
```

#### 变量声明

[强烈推荐]一个函数作用域中所有的变量声明尽量提到函数首部，用一个var声明，不允许出现两个连续的var声明。

```javascript
function doSomethingWithItems(items) {
    // use one var
    var value = 10,
        result = value + 10,
        i,
        len;

    for (i = 0, len = items.length; i < len; i++) {
        result += 10;
    }
}
```

#### 括号

[强烈推荐]下列关键字后必须有大括号（即使代码块的内容只有一行）：if, else, for, while, do, switch, try, catch, finally, with。
```javascript
// not good
if (condition)
    doSomething();

// good
if (condition) {
    doSomething();
}
```

#### null

[强烈推荐]适用场景：

- 初始化一个将来可能被赋值为对象的变量
- 与已经初始化的变量做比较
- 作为一个参数为对象的函数的调用传参
- 作为一个返回对象的函数的返回值

[强烈推荐]不适用场景：

- 不要用null来判断函数调用时有无传参
- 不要与未初始化的变量做比较

```javascript
// not good
function test(a, b) {
    if (b === null) {
        // not mean b is not supply
        ...
    }
}

var a;

if (a === null) {
    ...
}

// good
var a = null;

if (a === null) {
    ...
}
```

#### undefined

[必要的]不要直接使用undefined进行变量判断,使用typeof和字符串'undefined'对变量进行判断。

```javascript
// not good
if (person === undefined) {
    ...
}

// good
if (typeof person === 'undefined') {
    ...
}
```

#### jshint

[必要的]不要在同个作用域下声明同名变量；

[必要的]不要使用未声明的变量

[强烈推荐]不要声明了变量却不使用；

[强烈推荐]不要在应该做比较的地方做赋值；

[强烈推荐]用'===', '!=='代替'==', '!='；

[强烈推荐]不要在内置对象的原型上添加方法，如Array, Date；

[强烈推荐]不要在内层作用域的代码里声明了变量，之后却访问到了外层作用域的同名变量；

[强烈推荐]变量不要先使用后声明；

[强烈推荐]不要使用多余的括号；

[推荐]for-in里要有hasOwnProperty的判断；

[推荐]debugger不要出现在提交的代码里,console也一样；

[推荐]数组中不要存在空元素；

[推荐]不要在循环内部声明函数；

[推荐]不要像这样使用构造函数，例：new function () { ... }, new Object；

```javascript
// not good
if (a == 1) {
    a++;
}

// good
if (a === 1) {
    a++;
}

// good
for (key in obj) {
    if (obj.hasOwnProperty(key)) {
        // be sure that obj[key] belongs to the object and was not inherited
        console.log(obj[key]);
    }
}

// not good
Array.prototype.count = function(value) {
    return 4;
};

// not good
var x = 1;

function test() {
    if (true) {
        var x = 0;
    }

    x += 1;
}

// not good
function test() {
    console.log(x);

    var x = 1;
}

// not good
new Person();

// good
var person = new Person();

// not good
delete(obj.attr);

// good
delete obj.attr;

// not good
if (a = 10) {
    a++;
}

// not good
var a = [1, , , 2, 3];

// not good
var nums = [];

for (var i = 0; i < 10; i++) {
    (function(i) {
        nums[i] = function(j) {
            return i + j;
        };
    }(i));
}

// not good
var singleton = new function() {
    var privateVar;

    this.publicMethod = function() {
        privateVar = 1;
    };

    this.publicMethod2 = function() {
        privateVar = 2;
    };
};
```

#### 杂项

[推荐]对上下文this的引用只能使用'_this', 'that', 'self'其中一个来命名；

[必要的]行尾不要有空白字符；

[必要的]不允许有空的代码块。

```javascript
// not good
var a   = 1;

function Person() {
    // not good
    var me = this;

    // good
    var _this = this;

    // good
    var that = this;

    // good
    var self = this;
}

// not good with empty block
if (condition) {

}
```
