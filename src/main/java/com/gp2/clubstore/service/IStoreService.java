package com.gp2.clubstore.service;

import com.gp2.clubstore.pojo.Order;
import com.gp2.clubstore.pojo.Product;

import java.util.List;

public interface IStoreService {
    //service of Product
    Product queryById(Integer id);

    List<Product> queryByCategory(String category);

    List<Product> queryByBrand(String brand);

    List<Product> queryNew();

    //service for Account
    String queryAddress(Integer id);

    //Service for Order
    Integer insert(Order order);
    Order queryOrder(Integer id);

    //Service for Sold
    List<Product> queryHot();
}
