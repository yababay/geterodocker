package ru.yababay.hello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HelloApplication {

  @RequestMapping("/hello")
  public String home() {
    return "Hello from Java!";
  }

  public static void main(String[] args) {
    SpringApplication.run(HelloApplication.class, args);
  }

}
