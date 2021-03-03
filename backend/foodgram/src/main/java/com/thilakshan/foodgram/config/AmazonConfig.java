package com.thilakshan.foodgram.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AmazonConfig {

    @Bean
    public AmazonS3 s3(){
        AWSCredentials awsCredentials = new BasicAWSCredentials(
                "AKIAITX4WLGFJW7JDGIA",
                "0w2zcdBSXvMZdvwL6D21wdSXze7daEn2HcSSlVpA"
        );
        return AmazonS3ClientBuilder.
                standard().
                withRegion("us-east-2").
                withCredentials(new AWSStaticCredentialsProvider(awsCredentials)).
                build();
    }
}
