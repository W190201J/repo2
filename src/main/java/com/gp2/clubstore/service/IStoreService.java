package com.gp2.clubstore.service;

import com.gp2.clubstore.pojo.Item;
import com.gp2.clubstore.pojo.Product;

import java.util.List;

public interface IStoreService {
    //service of Product
    Product queryById(Integer id);

    List<Product> queryByCategory(String category);

    List<Product> queryByBrand(String brand);

    List<Product> queryNew(Integer num);

    //service for Account
    String queryAddress(Integer id);

    //Service for Order
    Integer insertItem(Item item);

    List<Item> queryOrder(Integer id);

    //Service for Sold
    List<Product> queryHot(Integer num);
    Integer updateSoldNum(Integer num, Integer id);
    Integer insertSoldNum(Integer num, Integer id);
    Integer querySoldById(Integer id);
}
