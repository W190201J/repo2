package com.gp2.clubstore.pojo;

import lombok.Data;

import java.util.List;

@Data
public class Order {
    private List<Item> items;
}
