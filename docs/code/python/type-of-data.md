---
category: Python
---

# 2.3 Python数据类型

## 内建常用数据类型

* 数值型
  * int、float、complex、bool
* 序列 sequence
  * 字符串 str、字节序列 bytes、bytearray
  * 列表 list、元组 tuple

* 键值对
  * 集合 set、字典 dict

## 类型转换

* int、float、complex、bool 也可以当做内建函数对数据进行类型转换
* int(x) 返回一个整数
* float(x) 返回一个浮点数
* complex(x)、complex(x,y) 返回一个复数
* bool(x) 返回布尔值，前面讲过False等价的对象

## 封装和解构

### 基本概念

```python
t1 = 1, 2
print(type(t1)) # 什么类型, tuple

t2 = (1, 2)
print(type(t2))
```

Python等式右侧出现逗号分隔的多值的时候，就会将这几个值封装到元组中。这种操作称为封装packing。

```python
x, y = (1, 2)
print(x) # 1
print(y) # 2
```

Python 中等式右侧是一个容器类型，左侧是逗号分隔的多个标识符，将右侧容器中数据的一个个和左侧
标识符一一对应。这种操作称为解构 unpacking。

从 Python3 开始，对解构做了很大的改进，现在用起来已经非常的方便快捷。

封装和解构是非常方便的提取数据的方法，在 Python、JavaScript 等语言中应用极广。

```python
# 交换数据
x = 4
y = 5
t = x
x = y
y = t

# 封装和解构，交换
x = 10
y = 11
x, y = y, x
```

### 简单解构

```python
# 左右个数相同  ,必须相等
a,b = 1,2
a,b = (1,2)
a,b = [1,2]
a,b = [10,20]
a,b = {10,20} # 非线性结构
a,b = {'a':10,'b':20} # 非线性结构也可以解构
[a,b] = (1,2)
[a,b] = 10,20
(a,b) = {30,40}
```

### 剩余变量解构

在 Python3.0 中增加了剩余变量解构（rest）。

```python
a, *rest, b = [1, 2, 3, 4, 5]
print(a, b)
print(type(rest), rest) # <class 'list'> [2, 3, 4]
```

标识符 rest 将尽可能收集剩余的数据组成一个列表。

```python
a, *_, b = [1, 2, 3, 4, 5]
print(_) # 在IPython中实验，_是最后一个输出值，这里将把它覆盖
_, *b, _ = [1, 2, 3]
print(_) # 第一个_是什么
print(b) # 是什么
print(_) # 第二个_是什么
```

_ 是合法的标识符，这里它没有什么可读性，它在这里的作用就是表示不关心这个变量的值，我不想要。有人把它称作 丢弃(Throwaway)变量。

## 线性数据结构

线性表

* 线性表（简称表），是一种抽象的数学概念，是一组元素的序列的抽象，它由有穷个元素组成（0
  个或任意个）
* 顺序表：使用一大块连续的内存顺序存储表中的元素，这样实现的表称为顺序表，或称连续表
  * 在顺序表中，元素的关系使用顺序表的存储顺序自然地表示
* 链接表：在存储空间中将分散存储的元素链接起来，这种实现称为链接表，简称链表

列表如同地铁站排好的队伍，有序，可以插队、离队，可以索引。

链表如同操场上手拉手的小朋友，有序但排列随意。或者可以想象成一串带线的珠子，随意盘放在桌上。也可以离队、插队，也可以索引。