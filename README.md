# Team-Project-24

## Team members:
- Vinti Jain
- Abhishek Ganesan
- Sai Yashwanth Reddy Gunturu
- Jaineil Mandavia

## Detect-o-maly 

### Introduction

In today’s world, logs are everywhere, in all software systems. Software logs represent all states of the software. Splunk, an enterprise tool for distributed logging gives Logging-as-a-Service. Our project is an abstraction on top of this. We try to build an anomaly detector using ML models which are trained on log data. 

### Abstract

A ML-based intelligent parser that parses the `.log` data into human-readable format and furthermore detects anomalies based on all log data. For the scope of this project, we take HDFS logs datase provided by Logpai[https://github.com/logpai], train our model, and for every new block of HDFS log, we predict if it's normal or anomalous in nature based on the time and events that happen on the block of HDFS. 

### Approach
- We assume that the dataset is already labelled based on our classification target as normal or anomalous.
- We train the Classification models using the data of 100,000 rows in HDFS logs and their corresponding labels. 
- We fit the model on new incoming logs and predict our targget labels. We accept this `.log` data as an file input on a simple UI.
- Based on the classification result, if the log is anomalous, we create a dashboard event.
- We also provide a downloadable `.csv` with the target labels for the file which needed to be classified.

### Dataset

- Logpai - https://github.com/logpai/loglizer

### Persona

- All enterprise software companies can use this product to get a prediction on their incoming logs before actual anomalous issues occur with the software.
