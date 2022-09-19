### _**Courses**_

1. [A Practical Introduction to Cloud Computing](https://cognizant.udemy.com/course/introduction-cloud-computing/learn/)
2. [Introduction to Cloud Computing](https://cognizant.udemy.com/course/introduction-to-cloud-computing/learn)

### _**Documentations**_

1. [AWS IOT](https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html)

## **A Practical Introduction to Cloud Computing**

[Files](/Cognizant/IOT%20Engineer/Practical-Intro-to-Cloud-slides/)

### **_Traditional Deployment models_**

- On Premises Solution (CPE - Customer Premises Equipment)

  - All equipment in the building
  - Owned by us
  - Is CapEx
  - Takes About a week to deploy
  - Technology upgrades requires new equipments
  - Everything is our responsibility

- Colocation or 'Colo' services

  - Colo is a data center location where owner rents out the facility
  - Owner provides power,cooling and physical security
  - Customer responsbilities are server, storage and networking equipment
  - Independent colo providers offer customers multiple network connectivity options through a choice of network service providers
  - Our equipment within colo facility is CapEx
  - Monthly colo hosting fees are OpEx
  - Takes About a week to deploy
  - Technology upgrades requires new equipments
  - Redundancy for hardware is on u, power and cooling is on facility

### **_Data Center Tiers_**

| Tier | Downtime(%) | Annual Downtime(hrs) |                                          Extras                                           |
| :--: | :---------: | :------------------: | :---------------------------------------------------------------------------------------: |
|  1   |    99.67    |         28.8         |                                             -                                             |
|  2   |    99.75    |         22.0         |                  Some Redundancy in Power, One path of power in cooling                   |
|  3   |    99.98    |         1.6          | Multi power &Cooling path, Needs 4 generates then have 5 (N+1), Sustain 72hr power outage |
|  4   |    99.99    |         .04          |                                             -                                             |

### **_Server Virtualization_**

- It allows for resource pooling (multiple customers share same underlying server hardware)
- Main enablers of Cloud Computing

**Before Virtualization**

![Before Virtualization](./Pictures/Before%20Virutalization.PNG)

Each server has seperate CPU, RAM and NIC(Network Interface Card)etc., but the utilization would be only 15%. And each consume power, space and cooling (Costly Expenses)

**After Virtualization**

![After Virutalization](./Pictures/After%20Virutalization.PNG)

A single server takes cares of the different virutal machines where each has seperate server running. They are taken care by the Hypervisor

### **_Types of Hypervisors_**

**Type 1**

Directly run on the system hardware.

![Type 1](./Pictures/After%20Virutalization.PNG)

**Type 2**

Runs on top of a host OS

![Type 2](./Pictures/Type%202%20Hypervisor.PNG)

### **_Cloud Computing_**

    Cloud Computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources that can be rapidly provisioned and released with minimal management effort or service provider interaction.

- On demand Self Service(Without requiring human interaction)

- Rapidly Elasticity (Can be scaled outward and inward whenever we need)

- Broad Network access (available over the network and accessed through standard mechanisms)

- Resource Pooling (multiple customers share same underlying server hardware)(For Storage and also for Network and Services)

- Measured Service(Metering capability)(Only OpEx cost)

### **_Cloud Service Models_**

- IaaS (Infrastructure)
- PaaS (Platform)
- SaaS (Software)
- XaaS (Anything)

### **_Management and Access_**

![Data Center](./Pictures/Data%20Center.PNG)

**On Premise**

Everything needs to be taken care by us

**Colo**

Network and Facility will be taken care by Provider and We can access from Network level

**IaaS**

Until Operating System Provider Manages. Accessed on OS level

**PaaS**

Until Custom Environment(A layer added above OS and below Application) Provider manages. Accessed on the Custom Environment level

**SaaS**

Everything is taken care by Provider and accessed on the application level

### **_IaaS_**

- Has control over OS, Storage and Deployed applications

- Networks Options Offered network options for shared and dedicated firewalls and load balancers

- Storage Options Offered local hard drivers in server, external SAN or NAS storage and may be able to install their own physical storage system

- Management Options Offered through standard remote management methods

- Application Options may be Offered some applications such as Antivirus, Microsoft SQL

- _Possibily_ limited control of networking componenets

- 3 Flavours : VM shared, VM dedicated, Dedicated bare-metal

**VM shared**

    Least expensive, shared physical machines

**VM dedicated**

    More expensive than shared, Dedicated physical machine

**Dedicated Bare-Metal Servers**

    Customer gets access on Compute level, Provider takes responsibility until compute level.

### **_PaaS_**

- Has control over deployed applications and possibly config settings for the application hosting environment

### **_SaaS_**

- Applications are accessible from various devices such as web browsers or program interface(e.g Gmail,MS Office)

- We don't manage anything with an exception of limited user-specific application config settings

### **_RPO & RTO_**

- RPO : Recovery Point Objective (When you lost all new data since the last backup was taken)

- RTO : Recovery Time Objective (Time would take to deploy the infrastructure in the new location and restore the data)

### **_XaaS_**

- DaaS (Desktop as a Service)
- DRaaS (Disaster Recovery as a Service)
- Baas (Backup as a Service)
- Storage as a Service
- etc.,

### **_Cloud Deployment Models_**

- Public Cloud (Open use by anyone)
- Private Cloud (Exclusive use by a single organization)
- Community Cloud (Exclusive for a specific community)
- Hybrid Cloud (Private cloud may 'cloud burst' into public cloud for additional capacity when required)

## **Introduction to Cloud Computing**

Same Info as the first course but in a summary

## **_AWS IOT_**

[Files](/Cognizant/IOT%20Engineer/Files/AWS%20IOT.pdf)

### **What is an IOT**

- AWS IoT provides the cloud services that connect your IoT devices to other devices and AWS cloud services

- AWS IoT provides device software that can help you integrate your IoT devices into AWS IoT-based solutions

_AWS IOT Supporting Protocols_

- MQTT (Message Queuing and telementary)
- MQTT over WSS (WebSockets Secure)
- HTTPS (Hypertext Transfer Protocol - Secure)
- LoRaWAN (Long Range Wide Area Network)

_Access for AWS IOT_

- AWS IoT Device SDKs
- AWS IoT Core for LoRaWAN
- AWS Command Line Interface(AWS CLI)
- AWS IoT API
- AWS SDKs

#### **What IOT Can Do?**

Examples:

Iot In Industry

- to build Predictive Quality models
- to support Predictive maintainance

in Industrial operations

Iot In Home Automation

- to connect home devices
- home security and monitoring

#### **How IOT Works?**

![Iot Universe](/Cognizant/IOT%20Engineer/Pictures/iot-universe.png)

- Apps gives the end user access to the Iot devices and features provided by the cloud services

- Cloud services are distributed, large-scale data storage and processing services that are connected to the internet

- Communication : Devices communicate to cloud services through various protocols and technologies(wifi, LoRaWAN, etc.,)

- Devices are a type of hardware which manages the interface and communications(Arduino, Amazon sidewalk devices, etc.,)

- Interface is a component which connects the device to the physical world
  - User interfaces: Input- Keypad, Output- Monitor
    - Components allows user and devices to communicate with each other
  - Sensors: Humidity sensor, temperature sensor
    - Components that measures something in the physical world in a way which the devices can understand
  - Actuators: Stepper motor, relays
    - Components that is used to control something in the physical world

_AWS IoT services overview_

![Architecture Diagram](./Pictures/Aws%20Iot%20architecture%20diagram.png)

- _Device Software_

  Provided to support Iot Devices

  - AWS IoT Device SDKs - to efficiently connect your devices to AWS Iot

  - AWS Device Tester - test automation tool for microcontrollers (For FreeRTOS and AWS Iot Greengrass)

  - AWS Express Link - powers a range of hardware modules developed and offered by AWS Partners

  - AWS Iot Greengrass - extends AWS IoT to edge devices so they can act locally on the data they generate and use the cloud for management, analytics, and durable storage

  - Free RTOS - an open source, real-time operating system for microcontrollers that lets you include small, low-power edge devices in your IoT solution

- _AWS IOT Control Services_

  Connect to the AWS Iot services to manage the devices

  - AWS Iot Core - enables connected devices to securely interact with cloud applications and other devices

  - AWS Iot Core Device Advisor - for validating IoT devices during device software development

  - AWS Iot Device Defender - continuously audits your IoT configurations to make sure that they aren’t deviating from security best practices

  - AWS Iot Device Management - to track, monitor, and manage the plethora of connected devices that make up your device fleets

- _AWS Iot Data Services_

  Analyze the data from the devices in your IoT solution and take appropriate action by using the following AWS IoT services

  - Amazon Kinesis Video Streams - allows you to stream live video from devices to the AWS Cloud

  - Amazon Kinesis Video Streams with WebRTC - to securely live stream media or perform two-way audio or video interaction between any camera IoT device and WebRTC-compliant mobile or web players

  - AWS Iot Events - detects and responds to events from IoT sensors and applications

  - AWS IoT FleetWise - use to collect and transfer vehicle data to the cloud in near-real time

  - AWS IoT SiteWise - collects, stores, organizes, and monitors data passed from industrial equipment

  - AWS IoT TwinMaker - creates digital visualizations using measurements and analysis (builds operational digital twins of physical and digital systems)

_AWS Iot Core Services_
