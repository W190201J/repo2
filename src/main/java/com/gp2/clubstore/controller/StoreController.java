package com.gp2.clubstore.controller;

import com.gp2.clubstore.pojo.Item;
import com.gp2.clubstore.pojo.Product;
import com.gp2.clubstore.service.impl.StoreService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class StoreController {
    @Resource(name = "storeService")
    private StoreService service;

    //商品模块
    @GetMapping("/product/id/{id}")
    public ResponseEntity<?> queryById(@PathVariable("id") Integer id) {
        Product product = service.queryById(id);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else
            return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/product/{column}/{value}")
    public ResponseEntity<?> queryProduct
            (@PathVariable("column") String column,
             @PathVariable("value") String value) {
        List<Product> products = null;
        switch (column) {
            case "category": {
                products = service.queryByCategory(value);
                break;
            }
            case "brand": {
                products = service.queryByBrand(value);
                break;
            }
            case "new": {
                try {
                    products = service.queryNew(Integer.parseInt(value));
                } catch (NumberFormatException ignored) {
                }
                break;
            }
            case "hot": {
                try {
                    products = service.queryHot(Integer.parseInt(value));
                } catch (NumberFormatException ignored) {
                }
            }
        }
        if (products == null || products.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        else
            return new ResponseEntity<>(products, HttpStatus.OK);
    }

    //账号模块
    @GetMapping("/account/address/{id}")
    public ResponseEntity<?> queryAddress(@PathVariable("id") Integer id) {
        String address = service.queryAddress(id);
        if (address == null || address.length() == 0)
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        else
            return new ResponseEntity<>(address, HttpStatus.OK);
    }

    //订单模块
    @PostMapping("/order/insertItem")
    public ResponseEntity<?> insertItem(Item item) {
        int status = service.insertItem(item);
        if (status > 0)
            return new ResponseEntity<>(HttpStatus.CREATED);
        else
            return new ResponseEntity<>(HttpStatus.SERVICE_UNAVAILABLE);
    }

    @GetMapping("/order/query/{id}")
    public ResponseEntity<?> queryOrder(@PathVariable("id") Integer id) {
        List<Item> order = service.queryOrder(id);
        if (order == null || order.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        else
            return new ResponseEntity<>(order, HttpStatus.OK);
    }

    //成交统计模块
    @PutMapping("/sold/{id}/{num}")
    public ResponseEntity<?> changeSoldNum(
            @PathVariable("num") Integer num,
            @PathVariable("id") Integer id) {
        int status = service.changeSoldNum(num,id);
        if (status > 0)
            return new ResponseEntity<>(HttpStatus.CREATED);
        else
            return new ResponseEntity<>(HttpStatus.SERVICE_UNAVAILABLE);
    }
}
