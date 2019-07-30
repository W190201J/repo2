package com.gp2.clubstore.mapper;

import com.gp2.clubstore.pojo.Product;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("productMapper")
public interface ProductMapper {
    Product queryById(Integer id);

    List<Product> queryByCategory(String category);

    List<Product> queryByBrand(String brand);

    List<Product> queryNew();
}
