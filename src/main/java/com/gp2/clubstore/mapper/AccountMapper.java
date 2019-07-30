package com.gp2.clubstore.mapper;

import org.springframework.stereotype.Repository;

@Repository("accountMapper")
public interface AccountMapper {
    String queryAddress(Integer id);
}
