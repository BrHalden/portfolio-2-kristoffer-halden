export const projects = [
    {
        projectName: 'Game list',
        pojectContext: 'JavaScript Frameworks Course Assignment',
        introText: 'During this project, we learned to use React to build our webpages, and implement react-bootstrap to style the app. ',
        bulkText: 'The project was alot of understanding and learning, The react way of writing code was totally new to me, so I was learning it all from scratch, we had alot of tutorials both on Moodle (school lesson platform) and in classes. In classes we built a to-do app from scratch, with each lesson using the different componens,  covering each aspect of what we were supposed to understand and learn. Folder managing and understanding where everything should be and what files depend upon others becomes very difficult to manage if there isnt a proper folder hierarchy in place.  Using React generate alot of files, but then again all the files are reuseable and easy to use multiple times in the App. Something I grew very fond of duing this project was the Route, and the way it makes life very much easier when navigating pages an information. Having the opportunity to just reload the content of the container instead of refreshing the entire page and loading a different URL all together, makes the page seem way more responsive. The react-bootstrap styling makes poject way easier to handle sinc they have set rules and values. It leaves the project less adjustable, but then again shaves off alot of the time it takes to set up a totally new and well functioning stylesheet. And most of their classes and components have a good look to them, so its usually easier to make something presentable with react-bootstrap implemented.',
        processText: 'Since I wasnt vey steady on react from beforehand, I was trying to follow the instructions as closely as possible, to make sure my product turned out as intended by teachers. I looked at the react-bootstrap documentation and found the Card compoenent would be the best one to display all the information that was required to be contained in each intem on the page; name, image, rating and release date. I had some trouble getting the information from the fetch and feed them to my inividual items. So I had to tak a step back and read a bit about how react does these things, with props understood, the poblem made sense and I was able to move on. The building of the components and implementing them in the app went pretty smooth from there. I found that when working with so many dependable files, it is aslo a vital part of the process to have a clear plan of how the project shoul be structured before starting out. After I had made many of the components and connected them together, I was thinking there would be more structure to the project if I added a layout.js, to have somewhere to make the Route and connect all the elements. and when redirecting and moving files around to new folders, I found myself using alot of time on work that easily could have ben prevented if the structure was carefully planned from the start.',
        conclutionText: 'This project was very usefull when learning React, since it was proctical all throughout. We made working and useful examples every lesson. with making and testing all the components. This makes the app understandable and digestable in a smart way. I will continue to make my websites in react in the future because of this project.',
        image1: '',
        image2: '',
        imageCarousel: [
            '',
            '',
            '',
            ''
        ],
        id: '1'
    },
    {
        projectName: 'Game Of Thrones Borad Game',
        pojectContext: 'Semester Project end of first year',
        introText: 'This project was a trial in JavaScript coding, when we were tasked to make a boargame with moveable pieces, and a character select screen.',
        bulkText: 'This poject had three stages, or three pages that should take you from start to end of the game. First page beeing character select, where two player should be able to choose each their character or house from the Game of Thrones universe. Then porceed to the main part of the game with was the game itself. The game was supposed to be a snakes and ladders version, with at least 5 traps, these traps could be both positives or negatives in the lines of: “Move forward two paces”. The turns should shift between the players and they should move along the drawn HTML canvas accoring to the value they rolled on a dice. The player that finished the game first, should be sent through to an end screen that presented the victor, and offered rematch or restart. So this project was about both managing drawing in canvas, using js to manage and update data properly. ',
        processText: 'This project was a 5 week process. First steps was making a making a simple prototype that would take a location into count and then make it move in a coordinate system according to a number recieved from a dice. I had a difficult time during this part of the project, it was a bit outside my field of knowledge at the time, so I truggled to make sense of it all. And the logic behind how I was supposed to keep information while updating and switching turns between the players. After a while I got eveything to work, but then something went wrong only if one player hit 6 on the dice, while hitting a trap, the other player would recieve the bonus/liablility from the trap. This problem left me to redo my whole boardgame code multiple times to hav the traps trigge at the correct time and be recieved by the correct player. The API Data request only happened at the first page, then I passed it thorugh after filtering out the unneccosary Data. From character select, I only pass over the houses that the players choose, through local storage, and then pull them back out on the next page and use them to draw the board pieces. To the last page, I only pass the winner\'s data, to credit the winner. But they the winner is passed as winner, so that the local storage still keeps the player one and two data, to make it very easy to engage a rematch with the same choices.',
        conclutionText: 'I felt like this Project was a trial in js coding. Many things that had to work, and work together for the game to run. It was way outside my skill range in JavaScript, and kept challenging me every day for 5 weeks, and even tho I dint reach the goal with my amibitions with the design, I mastered and made sense of alot of the JavaScipt language. I\'m way more free to write and create code I would like to make, and then actually produce the necassary code and implement it in a webpage than I was before this task.',
        image1: '',
        image2: '',
        imageCarousel: [
            '',
            '',
            '',
            ''
        ],
        id: '2'
    },
    {
        projectName: 'Deity Design',
        pojectContext: 'Module Assignment Design 2',
        introText: 'For one of the projects, I would like to retouch a older project with my current knowledge, and try to make it look and feel better. I chose an older module assignment in design 2 we made about textures.',
        bulkText: '',
        processText: '',
        conclustionText: '',
        image1: '',
        image2: '',
        imageCarousel: [
            '',
            '',
            '',
            ''
        ],
        id: '3'
    }
];
export const CV = {
    name: 'Kristoffer Bråthen Halden',
    adress: 'Vikens gate 16 5057 Bergen',
    mobile: '94195061',
    email: 'kris-b.h@hotmail.com',
    born: '6. April 1995',
    CVExperiences: [
        {
            title: 'Personal Support',
            duration: 'November 2019 - Still Employed',
            employer: 'Bergen Kommune',
            details: 'Supporting individuals with certain difficulties, like Socializing, echonomy, acitvizing, mental issues, etc.'
        },
        {
            title: 'Receptionist and Resturantassisant',
            duration: 'June 2019 - August 2019',
            employer: 'Gol Campingsenter',
            details: 'Full time summerjob, various tasks around the facility both in the kitchen, resturant and in the reception.'
        },
        {
            title: 'After School Program',
            duration: 'June 2012 - Still employed',
            employer: 'Gol Idrettsfritidsordning - IFO',
            details: 'On and off work when available. Tasks vary from food making to schedule planning. But the main part is making sure the children are active, well fed and socialized in the hours after school.'
        },
        {
            title: 'Kindergarden substitute',
            duration: 'February 2016 - Juli 2016',
            employer: 'Gol Barnehager',
            details: 'On-call substitute for several kindergardens.'
        },
        {
            title: 'Initial compulsory military service',
            duration: 'January 2015 - January 2016',
            employer: 'Norwegian Armed Forces',
            details: 'Basic training in the Royal Norwegian Navy, with further further enducation within th Meic field. Employment at nursery.'
        },
        {
            title: 'Waitor',
            duration: 'September 2012 - March 2013',
            employer: 'Storefjell Hotell Gol',
            details: 'Part time, Waiting tables and cleaning dishes at a five-star mountain hotell.'
        },
        {
            title: 'Baker\'s assistant',
            duration: 'June 2012 - March 2012',
            employer: 'Gol bakeri og konditori',
            details: 'Summerjob working in production department at bakery. Making and shaping of certain types of pastry.'
        }
    ],
    CVEducations: [
        {
            title: 'Front-end Developer',
            school: 'Noroff',
            duration: 'August 2018 - Ongoing',
            details: 'FEU1, FEU2'
        },
        {
            title: 'Teacher',
            school: 'NLA Breistein',
            duration: 'August 2016 - June 2017(not completed)',
            details: 'Naturfag 5.-10. Klasse'
        },
        {
            title: 'Medier og Kommunikasjon',
            school: 'Gol videregående Skule',
            duration: 'August 2011 - June 2014',
            details: '1MKA, 2MKA, 3MKA'
        }
    ],
    courses: [
        {
            title: 'Life Saving course in water',
            supplier: 'Bergen Kommune',
            details: 'Life saving course with focus on rescuing drowned patients, from recuing out of water to delivering to Ambulance(with CPR).',
        },
        {
            title: 'Advanced Frist Aid',
            supplier: 'Norwegian Armed Forces',
            details: '2 months of full time courses and excerises to achieve level 3. first aid withing the Norwegian Armed Forces.',
        }
    ],
    languages: [
        'Norwegian', 'English' 
    ],
    technicalSkills: [
        'JavaScript', 'HTML', 'CSS/SCSS', 'React', 'Bootstrap', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD'
    ]
}
export const aboutInfo = {
    name: 'Kristoffer Bråthen Halden',
    age: 25,
    city: 'Bergen',
    adress: 'Vikens Gate 16',
    origin: 'Gol',
    job: 'Personal Support',
    education: 'Front-end Development - Noroff',
}