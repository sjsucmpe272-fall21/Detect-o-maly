# Team-Project-24

# Team members:
- Vinti Jain
- Abhishek Ganesan
- Sai Yashwanth Reddy Gunturu
- Jaineil Mandavia

## Idea 1 - Image Forgery Detection 

### Introduction

In today’s world, digital images are widely used in various domains such as: newspapers, scientific journals, magazines, and many other fields. Unfortunately, today’s digital technology made it easy for digital images to be forged due to the availability of the low-cost photo editing software like Adobe Photoshop. Thus, in order to recover people’s trust towards digital images, it is important to develop new trustworthy techniques for digital images forgery detection.

### Abstract

We will be developing a fake image detection model where the acquisition method is based on convolutional neural network (CNN) for automatic learning and identifying independent presentations from coloured RGB input images. Perform feature engineering (feature extraction and feature selection) instead of statistical observations and methods.

### Approach
- Image input: User inputs image through the front-end
- Image processing: 
  - Training and Testing:
        Training input is labelled
        For every forged image, identify the part from where it is forged, and create samples (having at-least 25% of both forged and un-forged part)
        For pristine images, take patches randomly but about equal number as that of forged samples
        The labelled images are given as input to the CNN for its training
  - Actual software:
The image to be tested is given as input, divided into patches and sent to CNN for a result on ‘forged’ or ‘unforged’ tags per patch.
If the percentage of forged patches cross a certain value then the whole image is forged otherwise it is considered unforged.

### Persona

People who want to make sure a picture they are posting or forwarding on social media or any communication platform is not forged.

### Datasets

https://www.kaggle.com/sophatvathana/casia-dataset

## Idea 2 - Visualize: Neural Networks

### Introduction

With this rise of Deep Learning and Neural Networks dictating a lot of Artificial Intelligence within all sectors -- healthcare, medicine, physics, engineering, autonomous vehicles and computer science, the ability to develop niche models which cater to your data and your use-case has become of quintissential importance. With the number of people without a Computer Science background looking to break into the Artificial Intelligence game, it looks like a great time to build a No Code solution for building Neural Networks and enabling Deep Learning at scale. This empowers people to break into Deep Learning without the need of any complex Math or having super compute power.

### Abstract

Our proposal is based on implementing a GUI toolkit which allows designing, training, building and delivering the final model via email of any Neural Network architecture using intuitive elements, which can then be used for integrating in any project. 

### Approach

- We shall leverage Python's deep learning warchest, TensorFlow to build the models on the backend based on the data passed on the GUI. This will be encapsulated as a Flask app and hosted on AWS. 
- Furthermore, we shall take advantage of free tier Cloud Computing tools like Kaggle and AWS Lambda to train our models on the fly, thereby taking away the need for need for compute power for the client.
- We shall use libraries like D3.js on the frontend to build interactive UI and design a good UX.

### Persona

Public seeking to play around or build deep learning models for their personal/professional projects and want to avoid the math or the computational needs involved while doing it.

## Idea 3 - Improving Intrusion Detection in Software Defined Networks

### Introduction

Intrusion detection systems (IDSs) are an essential cog of the network security suite that can defend the SDN from malicious intrusions and anomalous traffic. Generative adversarial networks can be used to generate more adversarial data examples that can evade the current IDS systems. We plan on training a new ML based IDS system using both preexisting attack datasets and the adversarial attacks from GAN so that the new presented IDS can detect both normal and adversarial attacks.

### Abstract

Generative Adversarial Networks (GAN) have been able to generate striking results in various domains. This generation capability can be tapped by networks to gain a deep understanding of data distribution. Data distribution consists of regular data and anomalies, with anomalies occurring less frequently, creating imbalanced datasets. The capabilities that generative adversarial networks offer can be leveraged to examine these anomalies and help alleviate the challenges that imbalanced datasets pose by creating synthetic anomalies. This anomaly generation can be specifically beneficial in domains that have costly data creation processes as well as inherently imbalanced datasets. One of the domains that fit this description is the intrusion detection domain.

In recent years, Software Defined Networking (SDN) has emerged to become one of the promising solutions for the future Internet. With the logical centralization of controllers and a global network overview, SDN brings us a chance to strengthen our network security. However, SDN also brings us a dangerous increase in potential threats.

This approach proposes the use of GAN to generate adversarial attacks and to deploy the same in an SDN environment.

### Approach

For a connection to be established between two hosts at first the flow tables in the switches between the hosts must be filled with appropriate flow rules, for this to happen first after receiving a connection request the controller fills the switches between the hosts with the flow rules. Once the connection is established we can generate files for the connection and use them to detect whether the connection is malicious or not.
For the GAN to generate adversarial attacks we first train the discriminator with the pre-existing NSL-KDD dataset, we can train the generator using the pre-trained discriminator which can determine whether the tuple given by the generator is from the actual dataset or somewhere else. To determine the nature of the connection we can use a neural network that can be pre-trained using the NSL-KDD dataset. We can use relu activation functions for the inner hidden layers and sigmoid activation function for the output layer because it is a binary classification problem.

### Persona

Any network provider looking to make their network more secure.

### Datasets

https://www.kaggle.com/hassan06/nslkdd

## Idea 4 - Face Mask Detection in Public Places

### Introduction

With the advent of COVID-19, the utility of face masks for personal and public health has become a necessity. The CDC has a research[https://www.cdc.gov/coronavirus/2019-ncov/science/science-briefs/masking-science-sars-cov2.html#:~:text=A%20study%20of%20an%20outbreak,70%25%20reduced%20risk.] stating that the use of face masks reduces the risk of being infected by COVID-19 by 70%. This number alone states the paramount importance of wearing masks in public places. 

### Abstract

We are proposing a CNN based Neural Network model which identifies faces with and without masks to mimic a biometric system for public safety.

  1. The Face Mask Detection System can be used at airports to detect travelers without masks.
  2. Using Face Mask Detection System, Hospitals can monitor if their staff is wearing masks during their shift or not.
  3. The Face Mask Detection System can be used at office premises to detect if employees are maintaining safety standards at work.
  4. Any public setting which might require a face mask

### Approach

We present a model to segment images using Convolution Neural Network that detects if a person wears mask. SVM object detector is used to identify the face area from the image. Filters are used in different layers. Output of previous layers serve as input for next layer. Our Face Mask Detection model will classify the face ‘with mask’ or ‘without mask’. 

### Persona

Any government authority looking to enforce the wearing of masks in any locality or closed environment.

### Datasets

https://www.kaggle.com/omkargurav/face-mask-dataset
