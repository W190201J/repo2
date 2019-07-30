package com.gp2.clubstore.service.impl;

import com.gp2.clubstore.mapper.AccountMapper;
import com.gp2.clubstore.mapper.OrderMapper;
import com.gp2.clubstore.mapper.ProductMapper;
import com.gp2.clubstore.mapper.SoldMapper;
import com.gp2.clubstore.pojo.Order;
import com.gp2.clubstore.pojo.Product;
import com.gp2.clubstore.service.IStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("storeService")
public class StoreService implements IStoreService {
    @Autowired
    private AccountMapper accountMapper;
    @Autowired
    private OrderMapper orderMapper;
    @Autowired
    private ProductMapper productMapper;
    @Autowired
    private SoldMapper soldMapper;

    @Override
    public Product queryById(Integer id) {
        return productMapper.queryById(id);
    }

    @Override
    public List<Product> queryByCategory(String category) {
        return productMapper.queryByCategory(category);
    }

    @Override
    public List<Product> queryByBrand(String brand) {
        return productMapper.queryByBrand(brand);
    }

    @Override
    public List<Product> queryNew() {
        return productMapper.queryNew();
    }

    @Override
    public String queryAddress(Integer id) {
        return accountMapper.queryAddress(id);
    }

    @Override
    public Integer insert(Order order) {
        return orderMapper.insert(order);
    }

    @Override
    public Order queryOrder(Integer id) {
        return orderMapper.queryOrder(id);
    }

    @Override
    public List<Product> queryHot() {
        return soldMapper.queryHot();
    }
}
