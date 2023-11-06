---
category: Python
---
# 4.1 函数的定义 & 调用 & 返回值

## 函数

数学定义

* y=f(x) ，y是x的函数，x是自变量。y=f(x0, x1, ..., xn)

Python函数

* 由若干语句组成的语句块、函数名称、参数列表构成，它是组织代码的最小单元
* 完成一定的功能

函数的作用

* 结构化编程对代码的最基本的封装，一般按照功能组织一段代码
* 封装的目的为了复用，减少冗余代码
* 代码更加简洁美观、可读易懂

函数的分类

* 内建函数，如max()、reversed()等
* 库函数，如math.ceil()等
* 自定义函数，使用def关键字定义

## 函数定义

```python
def 函数名(参数列表):
	函数体（代码块）
	[return 返回值]
```

* 函数名就是标识符，命名要求一样
* 语句块必须缩进，约定4个空格
* Python的函数若没有return语句，会隐式返回一个None值
* 定义中的参数列表称为形式参数，只是一种符号表达（标识符），简称形参

## 函数调用

* 函数定义，只是声明了一个函数，它不能被执行，需要调用执行
* 调用的方式，就是函数名后加上小括号，如有必要在括号内填写上参数
* 调用时写的参数是实际参数，是实实在在传入的值，简称实参

```python
def add(x, y): # 函数定义
	result = x + y # 函数体
	return result # 返回值

out = add(4,5) # 函数调用，可能有返回值，使用变量接收这个返回值
print(out) # print函数加上括号也是调用
```

上面代码解释：

* 定义一个函数add，及函数名是add，能接受2个参数
* 该函数计算的结果，通过返回值返回，需要return语句
* 调用时，通过函数名add后加2个参数，返回值可使用变量接收
* 函数名也是标识符
* 返回值也是值
* 定义需要在调用前，也就是说调用时，已经被定义过了，否则抛NameError异常
* 函数是可调用的对象，callable(add)返回True

## 函数返回值

* Python 函数使用 return 语句返回“返回值”
* 所有函数都有返回值，如果没有return语句，隐式调用return None
* return 语句并不一定是函数的语句块的最后一条语句
* 一个函数可以存在多个return语句，但是只有一条可以被执行。如果没有一条return语句被执行到，隐式调用return None
* 如果有必要，可以显示调用return None，可以简写为return
* 如果函数执行了return语句，函数就会返回，当前被执行的return语句之后的其它语句就不会被执行了
* 返回值的作用：结束函数调用、返回“返回值”

* 函数不能同时返回多个值
* return 1, 3, 5 看似返回多个值，隐式的被python封装成了一个元组
* x, y, z = showlist() 使用解构提取返回值更为方便
