package com.gp2.clubstore.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Data
public class Product {
    private Integer id;
    private String name;
    private String category;
    private String brand;
    private Float price;
    private String[] option;
    private String description;
    private String picture;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date newDate;
}
