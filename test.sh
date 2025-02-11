#!/bin/bash
# 这是一个多功能脚本

# 定义变量
user=$(whoami)
date=$(date +"%Y-%m-%d")

# 函数示例
welcome() {
  echo "Welcome, $user! Today is $date"
}


# 主逻辑
welcome

read -p "傻: " num
if [ $num -gt 10 ]; then
  echo "$num is greater than 10"
else
  echo "$num is 10 or less"
fi

# 遍历文件
for file in *.json; do
  echo "Found text file: $file"
done


