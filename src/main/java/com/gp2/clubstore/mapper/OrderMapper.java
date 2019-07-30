package com.gp2.clubstore.mapper;

import com.gp2.clubstore.pojo.Order;
import org.springframework.stereotype.Repository;

@Repository("orderMapper")
public interface OrderMapper {
    Integer insert(Order order);
    Order queryOrder(Integer id);
}
