package com.gp2.clubstore.service.impl;

import com.gp2.clubstore.mapper.AccountMapper;
import com.gp2.clubstore.mapper.OrderMapper;
import com.gp2.clubstore.mapper.ProductMapper;
import com.gp2.clubstore.mapper.SoldMapper;
import com.gp2.clubstore.pojo.Item;
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
        return productMapper.queryByColumn("category", category);
    }

    @Override
    public List<Product> queryByBrand(String brand) {
        return productMapper.queryByColumn("brand", brand);
    }

    @Override
    public List<Product> queryNew(Integer num) {
        return productMapper.queryNew(num);
    }

    @Override
    public String queryAddress(Integer id) {
        return accountMapper.queryAddress(id);
    }

    @Override
    public Integer insertItem(Item item) {
        if (orderMapper.queryOrder(item.getId(), item.getProductId()) != null)
            return orderMapper.updateItem(item);
        else
            return orderMapper.insertItem(item);
    }

    @Override
    public List<Item> queryOrder(Integer id) {
        return orderMapper.queryOrder(id);
    }

    @Override
    public List<Product> queryHot(Integer num) {
        return soldMapper.queryHot(num);
    }

    @Override
    public Integer updateSoldNum(Integer num, Integer id) {
        return soldMapper.updateSoldNum(num, id);
    }

    @Override
    public Integer insertSoldNum(Integer num, Integer id) {
        return soldMapper.insertSoldNum(num, id);
    }

    @Override
    public Integer querySoldById(Integer id) {
        return soldMapper.querySoldById(id);
    }

    public Integer changeSoldNum(Integer num, Integer id) {
        if (querySoldById(id) == null)
            return insertSoldNum(num, id);
        else
            return updateSoldNum(num, id);
    }
}
