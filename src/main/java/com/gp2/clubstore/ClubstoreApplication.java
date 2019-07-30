package com.gp2.clubstore;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.gp2.clubstore.mapper")
public class ClubstoreApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClubstoreApplication.class, args);
    }

}
