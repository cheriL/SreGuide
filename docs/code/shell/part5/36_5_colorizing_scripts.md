---
author: LinuxStory
category: Linux
tag:
  - Bash
---
# echo命令

* -e 使转义符生效 如:  解释\t \n含义
* -n 不换行输出

### 字颜色：30—–37 

echo -e “\033[30m 黑色字 \033[0m” 

echo -e “\033[31m 红色字 \033[0m” 

echo -e “\033[32m 绿色字 \033[0m” 

echo -e “\033[33m 黄色字 \033[0m” 

echo -e “\033[34m 蓝色字 \033[0m” 

echo -e “\033[35m 紫色字 \033[0m” 

echo -e “\033[36m 天蓝字 \033[0m” 

echo -e “\033[37m 白色字 \033[0m”



### 字背景颜色范围：40—–47 

echo -e “\033[40;37m 黑底白字 \033[0m” 

echo -e “\033[41;37m 红底白字 \033[0m” 

echo -e “\033[42;37m 绿底白字 \033[0m” 

echo -e “\033[43;37m 黄底白字 \033[0m” 

echo -e “\033[44;37m 蓝底白字 \033[0m” 

echo -e “\033[45;37m 紫底白字 \033[0m” 

echo -e “\033[46;37m 天蓝底白字 \033[0m” 

echo -e “\033[47;30m 白底黑字 \033[0m”