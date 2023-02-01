
### JavaScript 编码规范 - ESNext

#### 前言

本文档仅包含新特性部分。基础部分参考[JavaScript 编码规范]()。

在使用各种基于 ECMAScript 扩展的语言时(如 JSX、TypeScript 等)，适用的部分也应尽量遵循本文档的约定。

<p class="tip">
   [必要的]在使用vue、react等的项目中，尽量使用ESNext的语法。
</p>

#### 空格

[必要的]使用 `generator` 时，`*` 前面不允许有空格，`*` 后面必须有一个空格。

```javascript
// good
function* caller() {
    yield 'a';
    yield* callee();
    yield 'd';
}

// bad
function * caller() {
    yield 'a';
    yield *callee();
    yield 'd';
}
```

#### 语句

[必要的]类声明结束不允许添加分号。

解释：

与函数声明保持一致。

[推荐]类成员定义中，方法定义后不允许添加分号，成员属性定义后必须添加分号。



```javascript
// good
class Foo {
    foo = 3;

    bar() {

    }
}

// bad
class Foo {
    foo = 3

    bar() {

    }
}
```

[推荐]`export` 语句后，不允许出现表示空语句的分号。

解释：

`export` 关键字不影响后续语句类型。

示例：

```javascript
// good
export function foo() {
}

export default function bar() {
}


// bad
export function foo() {
};

export default function bar() {
};
```

[强烈推荐]属性装饰器后，可以不加分号的场景，不允许加分号。

解释：

只有一种场景是必须加分号的：当属性 `key` 是 `computed property key` 时，其装饰器必须加分号，否则修饰 `key` 的 `[]` 会做为之前表达式的 `property accessor`。

上面描述的场景，装饰器后需要加分号。其余场景下的属性装饰器后不允许加分号。

```javascript
// good
class Foo {
    @log('INFO')
    bar() {

    }

    @log('INFO');
    ['bar' + 2]() {

    }
}

// bad
class Foo {
    @log('INFO');
    bar() {

    }

    @log('INFO')
    ['bar' + 2]() {

    }
}
```


[强烈推荐]箭头函数的参数只有一个，并且不包含解构时，参数部分的括号必须省略。

```javascript
// good
list.map(item => item * 2);

// good
let fetchName = async id => {
    let user = await request(`users/${id}`);
    return user.fullName;
};

// bad
list.map((item) => item * 2);

// bad
let fetchName = async (id) => {
    let user = await request(`users/${id}`);
    return user.fullName;
};
```

[强烈推荐]箭头函数的函数体只有一个单行表达式语句，且作为返回值时，省略 `{}` 和 `return`。

[强烈推荐]如果单个表达式过长，可以使用 `()` 进行包裹。

[强烈推荐]箭头函数的函数体只有一个 `Object Literal`，且作为返回值时，使用 `()` 包裹。

```javascript
// good
list.map(item => item * 2);

let foo = () => (
    condition
        ? returnValueA()
        : returnValueB()
);

// bad
list.map(item => {
    return item * 2;
});

// good
list.map(item => ({name: item[0], email: item[1]}));
```

[强烈推荐]解构多个变量时，如果超过行长度限制，每个解构的变量必须单独一行。

解释：

太多的变量解构会让一行的代码非常长，极有可能超过单行长度控制，使代码可读性下降。

```javascript
// good
let {
    name: personName,
    email: personEmail,
    sex: personSex,
    age: personAge
} = person;

// bad
let {name: personName, email: personEmail,
    sex: personSex, age: personAge
} = person;
```


#### 变量

[必要的]使用 `let` 和 `const` 定义变量，不使用 `var`。

解释：

使用 `let` 和 `const` 定义时，变量作用域范围更明确。

```javascript
// good
for (let i = 0; i < 10; i++) {

}

// bad
for (var i = 0; i < 10; i++) {

}
```



#### 解构

[必要的]不要使用3层及以上的解构,尽量使用解构减少中间变量，仅定义一个变量时不允许使用解构。

解释：

过多层次的解构会让代码变得难以阅读。

```javascript
// bad
let {documentElement: {firstElementChild: {nextSibling}}} = window;

// good
[x, y] = [y, x];

// bad
let temp = x;
x = y;
y = temp;

// good
let len = myString.length;

// bad
let {length: len} = myString;
```

[强烈推荐]如果不节省编写时产生的中间变量，解构表达式 `=` 号右边不允许是 `ObjectLiteral` 和 `ArrayLiteral`。

解释：

在这种场景下，使用解构将降低代码可读性，通常也并无收益。

示例：

```javascript
// good
let {first: firstName, last: lastName} = person;
let one = 1;
let two = 2;

// bad
let [one, two] = [1, 2];
```

#### 剩余运算符
[推荐]使用剩余运算符时，剩余运算符之前的所有元素必需具名。

解释：

剩余运算符之前的元素省略名称可能带来较大的程序阅读障碍。如果仅仅为了取数组后几项，请使用 `slice` 方法。

示例：

```javascript
// good
let [one, two, ...anyOther] = myArray;
let other = myArray.slice(3);

// bad
let [,,, ...other] = myArray;
```



#### 模板字符串

[强烈推荐]字符串内变量替换时，不要使用 `2` 次及以上的函数调用。

解释：

在变量替换符内有太多的函数调用等复杂语法会导致可读性下降。

```javascript
// good
let fullName = getFullName(getFirstName(), getLastName());
let s = `Hello ${fullName}`;

// bad
let s = `Hello ${getFullName(getFirstName(), getLastName())}`;
```



#### 函数

[推荐]使用变量默认语法代替基于条件判断的默认值声明。

解释：

添加默认值有助于引擎的优化。


```javascript
// good
function foo(text = 'hello') {
}

// bad
function foo(text) {
    text = text || 'hello';
}
```

[推荐]不要使用 `arguments` 对象，应使用 `...args` 代替。

示例：

```javascript
// good
function foo(...args) {
    console.log(args.join(''));
}

// bad
function foo() {
    console.log([].join.call(arguments));
}
```

#### 箭头函数

[必要的]一个函数被设计为需要 `call` 和 `apply` 的时候，不能是箭头函数。

解释：

箭头函数会强制绑定当前环境下的 `this`。



#### 对象

[推荐]定义对象时，如果所有键均指向同名变量，则所有键都使用缩写；如果有一个键无法指向同名变量，则所有键都不使用缩写。

解释：

目的在于保持所有键值对声明的一致性。

```javascript
// good
let foo = {x, y, z};

let foo2 = {
    x: 1,
    y: 2,
    z: z
};


// bad
let foo = {
    x: x,
    y: y,
    z: z
};

let foo2 = {
    x: 1,
    y: 2,
    z
};
```

[强烈推荐]定义方法时使用 `MethodDefinition` 语法，不使用 `PropertyName: FunctionExpression` 语法。

解释：

`MethodDefinition` 语法更清晰简洁。

示例：

```javascript
// good
let foo = {
    bar(x, y) {
        return x + y;
    }
};

// bad
let foo = {
    bar: function (x, y) {
        return x + y;
    }
};
```

[强烈推荐]使用 `Object.keys` 或 `Object.entries` 进行对象遍历。

解释：

不建议使用 `for .. in` 进行对象的遍历，以避免遗漏 `hasOwnProperty` 产生的错误。

```javascript
// good
for (let key of Object.keys(foo)) {
    let value = foo[key];
}

// good
for (let [key, value] of Object.entries(foo)) {
    // ...
}
```

[推荐] 定义对象的方法不应使用箭头函数。

解释：

箭头函数将 `this` 绑定到当前环境，在 `obj.method()` 调用时容易导致不期待的 `this`。除非明确需要绑定 `this`，否则不应使用箭头函数。

```javascript
// good
let foo = {
    bar(x, y) {
        return x + y;
    }
};

// bad
let foo = {
    bar: (x, y) => x + y
};
```


[推荐]尽量使用计算属性键在一个完整的字面量中完整地定义一个对象，避免对象定义后直接增加对象属性。

解释：

在一个完整的字面量中声明所有的键值，而不需要将代码分散开来，有助于提升代码可读性。

示例：

```javascript
// good
const MY_KEY = 'bar';
let foo = {
    [MY_KEY + 'Hash']: 123
};

// bad
const MY_KEY = 'bar';
let foo = {};
foo[MY_KEY + 'Hash'] = 123;
```





#### 类

[推荐]使用 `class` 关键字定义一个类。

解释：

直接使用 `class` 定义类更清晰。不要再使用 `function` 和 `prototype` 形式的定义。

```javascript
// good
class TextNode {
    constructor(value, engine) {
        this.value = value;
        this.engine = engine;
    }

    clone() {
        return this;
    }
}

// bad
function TextNode(value, engine) {
    this.value = value;
    this.engine = engine;
}

TextNode.prototype.clone = function () {
    return this;
};
```

[推荐]使用 `super` 访问父类成员，而非父类的 `prototype`。

解释：

使用 `super` 和 `super.foo` 可以快速访问父类成员，而不必硬编码父类模块而导致修改和维护的不便，同时更节省代码。

```javascript
// good
class TextNode extends Node {
    constructor(value, engine) {
        super(value);
        this.engine = engine;
    }

    setNodeValue(value) {
        super.setNodeValue(value);
        this.textContent = value;
    }
}

// bad
class TextNode extends Node {
    constructor(value, engine) {
        Node.apply(this, arguments);
        this.engine = engine;
    }

    setNodeValue(value) {
        Node.prototype.setNodeValue.call(this, value);
        this.textContent = value;
    }
}
```



#### 模块

[推荐]`export` 与内容定义放在一起。

解释：

何处声明要导出的东西，就在何处使用 `export` 关键字，不在声明后再统一导出。

示例：

```javascript
// good
export function foo() {
}

export const bar = 3;


// bad
function foo() {
}

const bar = 3;

export {foo};
export {bar};
```

[推荐]相互之间无关联的内容使用命名导出。

解释：

举个例子，工具对象中的各个方法，相互之间并没有强关联，通常外部会选择几个使用，则应该使用命名导出。

简而言之，当一个模块只扮演命名空间的作用时，使用命名导出。

[强烈推荐]所有 `import` 语句写在模块开始处。

示例：

```javascript
// good
import {bar} from './bar';

function foo() {
    bar.work();
}

// bad
function foo() {
    import {bar} from './bar';
    bar.work();
}
```

#### 集合

[推荐]对数组进行连接操作时，使用数组展开语法。

解释：

用数组展开代替 `concat` 方法，数组展开对 `Iterable` 有更好的兼容性。

示例：

```javascript
// good
let foo = [...foo, newValue];
let bar = [...bar, ...newValues];

// bad
let foo = foo.concat(newValue);
let bar = bar.concat(newValues);
```

[推荐]不要使用数组展开进行数组的复制操作。

解释：

使用数组展开语法进行复制，代码可读性较差。推荐使用 `Array.from` 方法进行复制操作。

示例：

```javascript
// good
let otherArr = Array.from(arr);

// bad
let otherArr = [...arr];
```

[推荐]尽可能使用 `for .. of` 进行遍历。

解释：

使用 `for .. of` 可以更好地接受任何的 `Iterable` 对象，如 `Map#values` 生成的迭代器，使得方法的通用性更强。

以下情况除外：

- 遍历确实成为了性能瓶颈，需要使用原生 `for` 循环提升性能。
- 需要遍历过程中的索引。

[必要的] 当键值有可能不是字符串时，必须使用 `Map`；当元素有可能不是字符串时，必须使用 `Set`。

解释：

使用普通 Object，对非字符串类型的 `key`，需要自己实现序列化。并且运行过程中的对象变化难以通知 Object。

[必要的]需要一个不可重复的集合时，应使用 `Set`。

解释：

不要使用 `{foo: true}` 这样的普通 `Object`。

示例：

```javascript
// good
let members = new Set(['one', 'two', 'three']);

// bad
let members = {
    one: true,
    two: true,
    three: true
};
```

[推荐]当需要遍历功能时，使用 `Map` 和 `Set`。

解释：

`Map` 和 `Set` 是可遍历对象，能够方便地使用 `for...of` 遍历。不要使用使用普通 Object。

示例：

```javascript
// good
let membersAge = new Map([
    ['one', 10],
    ['two', 20],
    ['three', 30]
]);
for (let [key, value] of map) {
}

// bad
let membersAge = {
    one: 10,
    two: 20,
    three: 30
};
for (let key in membersAge) {
    if (membersAge.hasOwnProperty(key)) {
        let value = membersAge[key];
    }
}
```

[推荐]程序运行过程中有添加或移除元素的操作时，使用 `Map` 和 `Set`。

解释：

使用 `Map` 和 `Set`，程序的可理解性更好；普通 Object 的语义更倾向于表达固定的结构。

示例：

```javascript
// good
let membersAge = new Map();
membersAge.set('one', 10);
membersAge.set('two', 20);
membersAge.set('three', 30);
membersAge.delete('one');

// bad
let membersAge = {};
membersAge.one = 10;
membersAge.two = 20;
membersAge.three = 30;
delete membersAge['one'];
```




#### 异步

[强烈推荐]回调函数的嵌套不得超过3层。

解释：

深层次的回调函数的嵌套会让代码变得难以阅读。


```javascript
// bad
getUser(userId, function (user) {
    validateUser(user, function (isValid) {
        if (isValid) {
            saveReport(report, user, function () {
                notice('Saved!');
            });
        }
    });
});
```

[强烈推荐]使用 `Promise` 代替 `callback`。

解释：

相比 `callback`，使用 `Promise` 能够使复杂异步过程的代码更清晰。


```javascript
// good
let user;
getUser(userId)
    .then(function (userObj) {
        user = userObj;
        return validateUser(user);
    })
    .then(function (isValid) {
        if (isValid) {
            return saveReport(report, user);
        }

        return Promise.reject('Invalid!');
    })
    .then(
        function () {
            notice('Saved!');
        },
        function (message) {
            notice(message);
        }
    );
```

[强烈推荐]不允许直接扩展 `Promise` 对象的 `prototype`。

解释：

理由和 **不允许修改和扩展任何原生对象和宿主对象的原型** 是一样的。如果想要使用更方便，可以用 utility 函数的形式。

[强烈推荐]不得为了编写的方便，将可以并行的IO过程串行化。

解释：

并行 IO 消耗时间约等于 IO 时间最大的那个过程，串行的话消耗时间将是所有过程的时间之和。

示例：

```javascript
requestData().then(function (data) {
    renderTags(data.tags);
    renderArticles(data.articles);
});

// good
async function requestData() {
    const [tags, articles] = await Promise.all([
        requestTags(),
        requestArticles()
    ]);
    return {tags, articles};
}

// bad
async function requestData() {
    let tags = await requestTags();
    let articles = await requestArticles();

    return Promise.resolve({tags, articles});
}
```

[强烈推荐]使用 `async/await` 代替 `generator` + `co`。

解释：

使用语言自身的能力可以使代码更清晰，也无需引入 `co` 库。

```javascript
addReport(report, userId).then(
    function () {
        notice('Saved!');
    },
    function (message) {
        notice(message);
    }
);

// good
async function addReport(report, userId) {
    let user = await getUser(userId);
    let isValid = await validateUser(user);

    if (isValid) {
        let savePromise = saveReport(report, user);
        return savePromise();
    }

    return Promise.reject('Invalid');
}

// bad
function addReport(report, userId) {
    return co(function* () {
        let user = yield getUser(userId);
        let isValid = yield validateUser(user);

        if (isValid) {
            let savePromise = saveReport(report, user);
            return savePromise();
        }

        return Promise.reject('Invalid');
    });
}
```

#### 运行环境

[推荐]持续跟进与关注运行环境对语言特性的支持程度。

解释：

[查看环境对语言特性的支持程度](https://kangax.github.io/compat-table/es6/)
