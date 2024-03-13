import {Project} from '../model/project'

// Array of SSD projects
export const PROJECTS: Project[] = [
    {
      "id": 1,
      "title": "React Calculator",
      "slug": "react-calculator",
      "excerpt": "React Calculator where math meets React for seamless and user-friendly numerical computations.",
      "body": "<p>React Calculator is interactive user interface for performing mathematical calculations. Integrating state management within React, a calculator project can efficiently handle user input, update display elements, and execute precise mathematical operations.</p>",
      "url": null,
      "published_date": null,
      "image": null,
      // "image"  : "calculator.jpg" ,   
      "thumb": null,
      "category_id": 2,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 2, "slug": "front-end", "name": "Front End", "color": "Blue" },
      "tags": [
        {"id":5,"name":"React","slug":"react","color": "DeepPink" },
        {"id":3,"name":"CSS","slug":"css","color": "Purple"}
      ]
    },
    {
      "id": 2,
      "title": "SSD Yearbook",
      "slug": "ssd-yearbook",
      "excerpt": "Embarking on an immersive Angular, SSD Yearbook serves as a centralized showcase for projects accomplished within the software development program.",
      "body": "<p>The SSD Yearbook serves as a dynamic portfolio with filtering functionality, which offers a detailed overview of each project's objectives, technologies used, and notable achievements.</p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": 2,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 2, "slug": "front-end", "name": "Front End","color": "Blue" },
      "tags": [
        {"id":9,"name":"Angular","slug":"angular","color": "Peru"},
      ]
    },
    {
      "id": 3,
      "title": "Movie Mania",
      "slug": "react-movie-mania",
      "excerpt": "Exploring Movies with TMDB and Unleashing the Magic of React for an Immersive and Enchanting Movie Experience.",
      "body": "<p>Movie project is created with React and Redux. Established the Redux store, the states are available globally and action efficiently. Axios is integrated to Fetch and facilitate API requests to TMDB and populate the Redux store. React Router is implemented for navigation between different movie views while ensuring a cohesive flow within the application. Visual aesthetics is enhanced the with CSS styles.</p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": 2,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 2, "slug": "front-end", "name": "Front End","color": "Blue"},
      "tags": [
        {"id":5,"name":"React","slug":"react","color": "DeepPink"},
        {"id":3,"name":"CSS","slug":"css","color": "Purple"}
      ]
    },
    {
      "id": 4,
      "title": "Bubble Tea Website",
      "slug": "bubble-tea-website",
      "excerpt": "Experience the world of Bubble Tea like never before with our captivating website, meticulously crafted using C# and SQL.",
      "body": "<p>Explore a diverse menu of tantalizing flavors, customize desired blend, and indulge in a seamless ordering experience as the SQL database ensures accurate and efficient processing of the Bubble Tea preferences, bringing a taste of innovation to customers.</p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": 2,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category":   { "id": 3, "slug": "full-stack", "name": "Full Stack","color": "Green"},
      "tags": [
        {"id":1,"name":"SQL","slug":"sql","color": "Orange"},
        {"id":7,"name":"C#","slug":"csharp","color": "Crimson"},
      ]
    },
    {
      "id": 5,
      "title": "JavaScript Game",
      "slug": "javascript-game",
      "excerpt": "Come Explore Hi-Low game with the use of Javascript and predict whether the next randomly generated number will be higher or lower.",
      "body": "<p>The Hi-Low World game is a one or two player game with three difficulty range (Easy 1-1024, Medium 1-2048, Hard 1-4096). The objective of this game is to guess a secret number in as few guesses as possible. The secret number is generated within the predefined range by computer in one player mode or entered by the other player.</p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": 2,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 2, "slug": "front-end", "name": "Front End","color": "Blue"},
      "tags": [
        {"id":2,"name":"Javascript","slug":"javascript","color": "CornFlowerBlue"},
        {"id":3,"name":"CSS","slug":"css","color": "Purple"},
        {"id":6,"name":"HTML","slug":"html","color": "YellowGreen"}
      ]
    },
    {
      "id": 6,
      "title": "Express Billing",
      "slug": "express-billing",
      "excerpt": "Powered by Node.js and Express, businesses efficiently publish bills for customers while ensuring secure user authentication through Passport.",
      "body": "<p>Leveraging the efficiency and flexibility of MongoDB, the application stores and manages data with ease, ensuring a scalable and reliable foundation for billing information. This dynamic combination of Node.js, Express, Passport, and MongoDB creates a comprehensive platform, providing businesses and customers with a feature-rich experience in accessing, managing, and interacting with billing data, fostering efficiency and security in every transaction.</p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": 3,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 3, "slug": "full-stack", "name": "Full Stack","color": "Green"}
      ,
      "tags": [
        {"id":4,"name":"Node.js","slug":"nodejs","color": "Indigo"},
        {"id":8,"name":"Mongo","slug":"mongo","color": "Orchid"},
      ]
    },
    {
      "id": 7,
      "title": "Car Ownership Database ",
      "slug": "car-ownership-database ",
      "excerpt": "The car ownership database utilizing SQL Server and C# seamlessly manage and organize essential information related to vehicle ownership for enhanced efficiency and data integrity.",
      "body": "<p>The car ownership database is a console application that interacts with the Car Ownership Database using Entity Framework. The application provides menu options for listing all cars, listing car details, adding a new car, updating car information, and deleting a car.</p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": 1,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category":   { "id": 1, "slug": "back-end", "name": "Back End","color": "Red"},
      "tags": [
        {"id":1,"name":"SQL","slug":"sql","color": "Orange"},
        {"id":7,"name":"C#","slug":"csharp","color": "Crimson"},
      ]
    },
    {
      "id": 8,
      "title": "Industry Project",
      "slug": "industry-project",
      "excerpt": "Coming soon",
      "body": "<p>Coming soon</p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": 3,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 3, "slug": "full-stack", "name": "Full Stack","color": "Green"},
      "tags": [
        {"id":1,"name":"SQL","slug":"sql","color": "Orange"},
        {"id":7,"name":"C#","slug":"csharp","color": "Crimson"},
      ]
    }
  ]
  