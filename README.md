# Community Church Builder
---
## Front-End Technical Challenge

#### Continous Deployment Here: https://moviegoer.netlify.com/

#### Requirements

1. Node
2. npm or yarn 

#### Installation 


To get the project up and running on your local machine, complete the following steps:
1. Download and install Node: https://nodejs.org/
2. Clone this repo ```https://github.com/CookieMonsta89/TechnicalChallenge```
3. Open terminal and cd into project folder
4. Install project dependencies: ```npm i``` or ```npm install```
5. Start the development environment: ```npm run start```
6. Open your browser and visit http://localhost3000
---

#### Built with 
* react
* styled-components
* font-awesome
* axios
* react-router
* react-router-dom
* react-browser-router
---

#### Questions to Keep In Mind
##### What design patterns did you use?
* One thing that I like to do when building react apps is to keep the App.js as clean as possible. I rendered two components on the App.js. I then managed state from the Homeview.js and the MovieDetails.js. Keeping state on these two components made managing props to their children fairly simple. If one or two more views were added, I could have managed state with redux or hooks. 
* I decided to make the entire application responsive with percentage based styling as well as media breakpoints. 

##### How would you test your application?
* The application can be tested by interacting with it and using react dev tools in order to see the flow of the data and props. You could also use Jest(SnapShot Testing) in order to test components.
##### How do you manage/store application state?
* Due to the size of the application being on the smaller side, I decided to use component state and react props in order to manage the state. 

##### What ways could you structure the code to make it easy to understand and maintain?
* As the application files are currently structured, it should be understandable to a developer jumping into the project. I left a number of comments where I thought someone may be confused or where I thought needed more explanation. I try to structure the component much like a tree. At the top, you have App.js. Below that, you have the single and home view and those components branch off into smaller folders.  

##### What other considerations and tradeoffs did you make when building the application?
* The first thing I considered was the size of the application. This would then determine whether or not I felt I needed help managing state from something like redux and hooks. I then consider how many views there will be. I then break those views down into separate components. Using Redux would give every component access to the state that it needs but the size of the application didn't warrant using redux so managing from two parent component sufficed.  If not structured correctly, prop-drilling can lead to issues such as memory leaks but luckily I managed to plan ahead.  

#### Author
[**Joseph Stanfield**](https://github.com/CookieMonsta89)

---

#### Credits

##### Third-Party API
* TMDB: https://www.themoviedb.org/
---


