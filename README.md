# 😴 Sleep Quality Tracker
Your accurate way to understand sleep, one night at a time.
![daaaa](https://user-images.githubusercontent.com/77998447/182266634-53457110-5603-4b27-a9cc-ce760a88ac6b.png)
## Description

### Overview
This online tool allows users to enter, view, and analyze sleep data to reach conclusions on sleep management. This project wants to make accurate, useful descriptions of sleeping habits accessible to everyone.

### Method
In order to process and generate accurate conclusions for users, the app relies on user input. Such as:
* (HOS) Hours of sleep
* (MOD) Mood in which user woke up in
* (SNR) Snoring?
* (TIM) Time took to fall asleep
* (WOA) Amount of interruptions during sleep
Manual user input data allows for accurate interpretations on quality of sleep. Mood after sleep cannot be determined by sensors or cameras, but only our brain knows it. Some data like snoring, hours of sleep, and amount of interruptions during sleep can be predicted with current technologies; but for this approach, we'll use manual input.

### Algorithm
The basic logic behind this platform is solely driven by peer-reviewed research studies on the topic. Each user input is given a score (from 0 to 10) to determine the severity of the variable or the option selected for it. Each variable (examples listed above) is given a weight on the total quality score (detemined by research studies). Weights represent the variable's importance on determining quality of sleep. Currently the following are set:
```
* HOS = 10%
* MOD = 50%
* SNR = 5%
* TIM = 25%
* WOA = 10%
```

### Sources
As mentioned, we used research studies in order to determine importance of variables on overal quality of sleep. They are listed below:
* https://www.merckmanuals.com/professional/neurologic-disorders/sleep-and-wakefulness-disorders/snoring
* https://jcsm.aasm.org/doi/full/10.5664/jcsm.5498
* https://mental.jmir.org/2019/3/e12613
* https://www.jneurosci.org/content/34/44/14571?utm_content=bufferbca87&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer
* https://www.nature.com/articles/s41539-019-0055-z#:~:text=This%20study%20found%20that%20longer,variance%20in%20overall%20grade%20performance.

## Getting Started

### Dependencies

* NodeJS v18.3.0
* React v18.2.0
* React-dom v18.2.0
* React-router-dom v6.3.0
* React-scripts v5.0.1
* Web Vitals v^2.1.4

### Installing

* Install repo into desired directory
* On terminal, find main project folder
* Run ``` npm start ``` to launch project

### Executing program

* Run on terminal as mentioned before
* In future releases, users will be able to reach platform through website domain

## Authors

Sebastian Lopez
* Twitter: [@7Po42AQPJUu7vc](https://twitter.com/7Po42AQPJUu7vc)
* Instagram: [@nseedm](https://instagram.com/nseedm)
* Reddit: [@sebastianlop1](https://www.reddit.com/user/sebastianlop1)
* Discord: [@sed#8354]()

## Version History

* 0.1
    * Initial Release

## Acknowledgments

* [Mythreya](https://github.com/mythreya75)
