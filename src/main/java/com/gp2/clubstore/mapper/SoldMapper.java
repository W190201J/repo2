package com.gp2.clubstore.mapper;

import com.gp2.clubstore.pojo.Product;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository("soldMapper")
public interface SoldMapper {
    List<Product> queryHot();
}
