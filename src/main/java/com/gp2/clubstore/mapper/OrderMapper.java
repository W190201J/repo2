package com.gp2.clubstore.mapper;

import com.gp2.clubstore.pojo.Item;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("orderMapper")
public interface OrderMapper {

    Integer insertItem(Item item);

    Integer updateItem(Item item);

    List<Item> queryOrder(Integer id);

    Item queryOrder(Integer id, Integer productId);
}
