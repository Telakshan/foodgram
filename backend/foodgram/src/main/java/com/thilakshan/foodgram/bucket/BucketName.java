package com.thilakshan.foodgram.bucket;

public enum BucketName {

    PROFILE_IMAGE("foodgram-telak");

    private final String bucketName;


    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }
}
