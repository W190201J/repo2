package com.gp2.clubstore.mapper;

import com.gp2.clubstore.pojo.Product;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("productMapper")
public interface ProductMapper {
    @Select("select * from test.product where id=#{id}")
    @Results(id = "productMap",value = {
            @Result(column = "option_",property = "option")
    })
    Product queryById(@Param("id") Integer id);

    @Select("select * from test.product order by newDate limit #{num}")
    @ResultMap("productMap")
    List<Product> queryNew(@Param("num") Integer num);

    @Select("select * from test.product where ${column}=#{value}")
    @ResultMap("productMap")
    List<Product> queryByColumn
            (@Param("column") String column,@Param("value") String value);
}
