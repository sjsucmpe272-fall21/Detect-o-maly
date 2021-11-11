# Team-Project-24

# Team members:
- Vinti Jain
- Abhishek Ganesan
- Sai Yashwanth Reddy Gunturu
- Jaineil Mandavia

## Detect-o-maly 

### Introduction

In today’s world, logs are everywhere, in all software systems. Software logs represent all states of the software. Especially errors. Splunk, an enterprise tool for distributed logging gives Logging-as-a-Service. However, Splunk can not do anomaly detection on these logs. The idea lies in this problem.

### Abstract

A ML-based intelligent parser that detects log anomalies based on all log data. Furthermore, this parser also converts these anomlaies into events on a Splunk-like dashboard. To narrow the scope of what we can consider as logs, we shall focus on text logs.

### Approach
- Collect data for both normal logs and logs which have issues in them. 
- Apply a different classification techniques on new incoming logs.
- Based on the classification result, if the log is anomalous, we create a Splunk-like dashboard event.

### Dataset
Logpai - https://github.com/logpai/loghub

### Persona

- All enterprise software companies can use this product to get a prediction on their incoming logs before actual issues occur with the software because of any anomaly.
