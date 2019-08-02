package com.gp2.clubstore.pojo;

import lombok.Data;

import java.util.HashMap;

@Data
public class MongoOrder {
    private Integer orderId;
    private Integer userId;
    private HashMap<Integer,Integer> items;
}
