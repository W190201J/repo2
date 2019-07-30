package com.gp2.clubstore.pojo;

import lombok.Data;

@Data
public class Item {
    private Integer userId;
    private Integer orderId;
    private Integer productId;
    private Integer productNum;
}
