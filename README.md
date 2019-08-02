>前端页面不会写啊

# 篮球俱乐部

## 俱乐部商城
### 商城后台
#### Todo
- [x] 订单插入逻辑
- [x] 订单查询逻辑
- [x] 热销商品逻辑
- [x] 商品尺码处理
- [x] 合并id,category,brand的控制器
- [x] Mapper.xml指定ResultType
- [x] 切换到dev分支进行开发
- [x] 收集商品信息
- [ ] ~~订单信息增加mongodb接口~~
- [ ] ~~redis缓存最新与最热产品~~
- [ ] 根据前端需求优化后台逻辑
#### 测试用表

##### 商品表

```sql
create table product
(
    id          int auto_increment
        primary key,
    name        varchar(30)  null,
    category    varchar(30)  null,
    price       float        null,
    option_     varchar(10)  null,
    description varchar(100) null,
    picture     varchar(100) null,
    brand       varchar(30)  null,
    newDate     date         null
);

/*数据正在更新中*/
```

##### 账号表

```sql
create table account
(
    id      int auto_increment
        primary key,
    address varchar(30) null
);

INSERT INTO test.account (id, address) VALUES (1, 'adsf');
INSERT INTO test.account (id, address) VALUES (3, 'sfdgsdfg');
```

##### 订单表

```sql
create table order_
(
    id         int null,
    userId     int null,
    productId  int null,
    productNum int null,
    constraint order__ibfk_1
        foreign key (userId) references account (id),
    constraint order__ibfk_2
        foreign key (productId) references product (id)
);

create index productId
    on order_ (productId);

create index userId
    on order_ (userId);

INSERT INTO test.order_ (id, userId, productId, productNum) VALUES (3, 1, 1, 5);
INSERT INTO test.order_ (id, userId, productId, productNum) VALUES (3, 1, 2, 3);
```

##### 商品成交统计表

```sql
create table sold
(
    productID int null,
    soldNum   int null,
    constraint sold_ibfk_1
        foreign key (productID) references product (id)
);

create index productID
    on sold (productID);

INSERT INTO test.sold (productID, soldNum) VALUES (1, 23);
INSERT INTO test.sold (productID, soldNum) VALUES (2, 4);
```

#### 已实现api

##### 商品模块

* 根据id查询商品`/api/product/id/{id}`
* 根据品牌，分类查询商品，查询最新，最热商品`/product/{column}/{value}`

eg:

分类：`/api/product/category/basketball`

品牌:`/api/product/brand/Nike`

最热五件:`/api/product/hot/5`

最新五件:`/api/product/new/5`

##### 账号模块

* 根据id获得地址`/api/account/address/{id}`

##### 订单模块

* 插入项目`/api/order/insertItem`
* 根据id查询订单`/api/order/query/{id}`

##### 成交统计模块

* 商品成交后加入统计`/api/sold/{id}/{num}`

### 商城界面
#### ToDo
- [x] 下载界面代码
- [x] 静态资源部署至nginx
- [ ] 替换页面元素
- [ ] 各个事件的js函数