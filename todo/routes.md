路由结构

首页 /

- GET 方式 获取数据库所有数据
- POST 方式 提交新的 todo 项 需要拿到 POST 的内容

删除 /delete/xxxxxx

- GET 方式 根据 URL 连接后面的 parms 参数找到要删除哪一个文档 需要\_id

更新 /edit/xxxxxx

- POST 方式 需要拿两个数据 一个是修改哪一个文档 另一个是修改之后的新内容

完成 /finish/xxxxx

- GET 方式就行了 因为是否完成是个布尔值 只需要反转就行不需要再传新的数据 需要根据 id 确定更新哪一个
