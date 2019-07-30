package com.gp2.clubstore.controller;

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


    @GetMapping("/product/id/{id}")
    public ResponseEntity<?> queryById(@PathVariable("id") Integer id) {
        Product product = service.queryById(id);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else
            return new ResponseEntity<>(product, HttpStatus.OK);
    }


    @GetMapping("/product/{category}")
    public ResponseEntity<?> queryByCategory(@PathVariable("category") String category) {
        List<Product> products = service.queryByCategory(category);
        if (products == null || products.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        else
            return new ResponseEntity<>(products, HttpStatus.OK);
    }


    @GetMapping("/product/{brand}")
    public ResponseEntity<?> queryByBrand(@PathVariable("brand") String brand) {
        List<Product> products = service.queryByCategory(brand);
        if (products == null || products.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        else
            return new ResponseEntity<>(products, HttpStatus.OK);

    }


    @GetMapping("/product/new")
    public ResponseEntity<?> queryNew() {
        List<Product> products = service.queryNew();
        if (products == null || products.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        else
            return new ResponseEntity<>(products, HttpStatus.OK);
    }


    @GetMapping("/account/address")
    public ResponseEntity<?> queryAddress(Integer id) {
        String address = service.queryAddress(id);
        if (address==null||address.length()==0)
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        else
            return new ResponseEntity<>(address, HttpStatus.OK);
    }

    /*ToDo 订单插入逻辑*/

    /*Todo 订单查询逻辑*/

    /*ToDo 热销商品逻辑*/

    /*ToDo 商品尺码的处理*/

    /*Todo 合并id,category,brand的控制器*/

    /*ToDo Mapper.xml指定ResultType*/
}
