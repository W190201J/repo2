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
- [ ] 订单信息增加mongodb接口
- [ ] redis缓存最新与最热产品
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

INSERT INTO test.product (id, name, category, price, option_, description, picture, brand, newDate) VALUES (1, '篮球', '球类', 300, 'x', '没有描述', '图片', 'Nike', '2019-07-17');
INSERT INTO test.product (id, name, category, price, option_, description, picture, brand, newDate) VALUES (2, '秋衣', '衣服', 400, 'y', 'meiyou', 'mt', 'ln', '2019-07-11');
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

* 根据id查询商品`/product/id/{id}`
* 根据品牌，分类查询商品，查询最新，最热商品`/product/{column}/{value}`

eg:

分类：`/product/category/basketball`

品牌:`/product/brand/Nike`

最热五件:`/product/hot/5`

最新五件:`/product/new/5`

##### 账号模块

* 根据id获得地址`/account/address/{id}`

##### 订单模块

* 插入项目`/order/insertItem`
* 根据id查询订单`/order/query/{id}`

##### 成交统计模块

* 商品成交后加入统计`/sold/{id}/{num}`

### 商城界面
#### ToDo
- [ ] 下载界面代码
- [ ] 静态资源部署至nginx