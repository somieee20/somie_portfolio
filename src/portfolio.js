/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Somie",
  title: "Hi all, I'm Usama",
  subTitle: emoji(
    "An ardent Full Stack & AI Developer 🚀 having an experience of developing Artificially Intelligent Web and Mobile applications with JavaScript, Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1lBKq8gvj9NCsyAr73zipQYh3Y03HduPg/view?usp=share_link-0;", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/somieee20",
  linkedin: "https://www.linkedin.com/in/somieee20/",
  gmail: "usamasom99@hotmail.com",
  gitlab: "https://gitlab.com/somieee20",
  instagram: "https://www.instagram.com/somie.20/",
  kaggle: "https://www.kaggle.com/somieeee",
  twitter: "https://twitter.com/somieee20",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Design, develop, and implement novel computer version algorithms for unique use cases using deep learning frameworks such as TensorFlow, Keras, PyTorch, Caffe etc."),
    emoji("⚡ Develop interactive Frontend / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean / DockerHub / Azure"),
    emoji("⚡ Aid in development of complex machine learning models using ANN to maximize predictive branding"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Intern",
      company: "Neurog",
      companylogo: require("./assets/images/Neurog.png"),
      date: "Jul 2022 - Sep 2022",
      desc: "Neurog is an artificial intelligence research & development company based in Pakistan, UAE, and Australia.",
      descBullets: [
        "Worked on developing an intelligent parking management system as a service-based product using IoT devices",
        "Used python technologies that include PyTorch, Keras, Matplotlib, SciPy, TensorFlow, and Chainer.",
        "Tested models: YOLO Family, RCNN Family, HOG and SPP-net for object detection with Deep-Sort for object tracking",
        "Deployed the product on various parking areas and achieved an accuracy of 97.5%"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National University of Computer and Emerging Sciences",
      logo: require("./assets/images/uni logo.png"),
      subHeader: "Bachelor of Science in Artificial Intelligence",
      duration: "September 2019 - Present",
      desc: "Participated in the research of NLP techniques (LSTM) and published 1 paper.",
      descBullets: [
        "Dean's List Spring 2020 - 2nd Semester",
        "Courses: Computer Vision, Natural Language Procesing, Artificial Neural Networks, Machine Learning, Data Structures, Artificial Intelligence, DevOps, Programming for AI, Object Oriented Programming, Design & Analysis of Algorithms.",
        "Secretary General - Fast Artificial Intelligence and Data Science Society"
      ]
    },
    {
      schoolName: "Fauji Fertilizer Higher Secondary School - FGS",
      logo: require("./assets/images/FGS.png"),
      subHeader: "O/A Levels - Cambridge",
      duration: "September 2014 - July 2019",
      desc: "Top Scoring Computer Science student for O/A Levels & Best Athlete winner for 4 straight years 2015-2019",
      descBullets: [
      "A* in Computer Science (A Levels)", 
      "3A* 3A 2B in O Levels", 
      "Best Badminton Player 2016-2019", 
      "Deputy Head Boy"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Neurog.png"),
      projectName: "AI Based Parking Management System",
      projectDesc: "Artificially intelligent parking management system that tracks parking spaces in real-time provinding space reservation, driver info and other facilities.",
      footerLink: [
        {
          name: "Project",
          url: "https://gitlab.com/Maria786/parking-lot-monitoring-system/-/tree/main"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified - Cloud Practitioner",
      subtitle:
        "Completed my first foundational certification from AWS Academy as a Cloud Practitioner - Foundational.",
      image: require("./assets/images/AWS.png"),
      imageAlt: "Certification Badge",
      footerLink: [
        {
          name: "Certification",
          url: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
        },
        {
          name: "Certification Badge",
          url: "https://www.credly.com/badges/13276efc-5de9-41db-9137-a08422e0a7d9"
        }
      ]
    },
    {
      title: "2nd Position in Artificial Intelligence Competition SOFTEC'22",
      subtitle:
        "Developed an AI model using Machine Learning and Deep Learning techniques to predict Readmission for Heart Failure patients using a given dataset.",
      image: require("./assets/images/softech.png"),
      imageAlt: "Softech Competition Logo",
      footerLink: [
        {
          name: "Rules",
          url: "https://softecnu.org/competitions/1"
        },
        {
          name: "Competition",
          url: "https://www.kaggle.com/competitions/aic-softec22-predict-readmission-for-heart-failure"
        },
        {
          name: "Proposed Solution",
          url: "https://www.kaggle.com/code/somieeee/softec-aic-956-2022"
        }
        
      ]
    },

    {
      title: "1st Position in MLH - 2022 Season",
      subtitle: "Performed data visualization using Python, Tableau and Sisense on pandemic data to classify trends of rising pandemic outbreak based on geo-location and created a mobile application that monitored nearby vaccine stations and informed the users about the availability of vaccine in the stations",
      image: require("./assets/images/MLH.jpg"),
      imageAlt: "Certification Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Competition",
          url: "https://mlh.io/seasons/2022/events"
        },
        {
          name: "Standings",
          url: "https://mlh.io/standings/na-2022"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@somie.20/containerd-for-your-compatibility-b0dd2c0e7aa0",
      title: "Containerd for your Compatibility",
      description:
        "A container runtime is essentially a component that mounts the container and interacts with the OS Kernel to begin the ‘containerization process’."
    },
    {
      url: "https://medium.com/@somie.20/sigstore-sign-differently-5d49e1f4e4b4",
      title: "Sigstore — Sign differently",
      description:
        "Sigstore enables program developers to safely sign programming antiques, for example, coding artifacts, code pictures, parallels, bill of material manifests and that’s just the beginning."
    },
    {
      url: "https://medium.com/@somie.20/amazon-web-services-aws-is-the-worlds-most-comprehensive-and-broadly-adopted-cloud-platform-f2b327f026b2",
      title: "Finch: An Open-Source Client for Container Development",
      description:
        "Finch is another command line client for building, running, and distributing Linux containers."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3367295432",
  email_address: "usamasom99@hotmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
