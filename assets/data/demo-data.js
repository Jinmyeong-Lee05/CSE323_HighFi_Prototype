// Fictional sample content for UI demonstration. NOT official degree or faculty records.
// CourseCompass high-fidelity front-end prototype.
// All people, course relationships, changes and probabilities below are demonstration data.
const courses = {
  CSE101:{name:'Introduction to Computers',credits:3,category:'Core',prereqs:[],semester:'Fall / Spring',prob:94,description:'Foundational computing concepts and problem solving.'},
  CSE114:{name:'Introduction to Object-Oriented Programming',credits:4,category:'Core',prereqs:['CSE101'],semester:'Fall / Spring',prob:86,description:'Introduction to programming using object-oriented techniques.'},
  CSE214:{name:'Data Structures',credits:3,category:'Core',prereqs:['CSE114'],semester:'Fall / Spring',prob:78,description:'Arrays, lists, trees, searching, sorting, and algorithmic problem solving.'},
  CSE220:{name:'Systems Fundamentals I',credits:3,category:'Core',prereqs:['CSE214'],semester:'Fall',prob:67,description:'Core ideas in computer organization and low-level programming.'},
  CSE320:{name:'Systems Fundamentals II',credits:3,category:'Core',prereqs:['CSE220'],semester:'Spring',prob:57,description:'Advanced systems programming and operating systems concepts.'},
  CSE300:{name:'Technical Communications',credits:3,category:'Core',prereqs:[],semester:'Fall / Spring',prob:92,description:'Technical writing and communication for computing professionals.'},
  CSE312:{name:'Legal and Social Issues in Computing',credits:3,category:'Core',prereqs:[],semester:'Fall / Spring',prob:90,description:'Ethical, legal, and social issues affecting computer science.'},
  CSE316:{name:'Fundamentals of Software Development',credits:3,category:'Elective',prereqs:['CSE214'],semester:'Spring',prob:73,description:'Practical software development, web applications, and testing.'},
  CSE331:{name:'Computer Security Fundamentals',credits:3,category:'Specialization',prereqs:['CSE214'],semester:'Fall',prob:82,description:'Security foundations, cryptography, networks, and defensive design.'},
  CSE380:{name:'Computer Game Programming',credits:3,category:'Specialization',prereqs:['CSE214'],semester:'Fall',prob:62,description:'Introduction to real-time interactive games and game architectures.'},
  CSE381:{name:'Advanced Game Programming',credits:3,category:'Specialization',prereqs:['CSE380'],semester:'Spring',prob:52,description:'Extended game systems and interactive design techniques.'},
  CSE382:{name:'Game Development Project',credits:3,category:'Specialization',prereqs:['CSE381'],semester:'Spring',prob:46,description:'Team-based design and implementation of a game project.'},
  AMS310:{name:'Survey of Probability and Statistics',credits:3,category:'Related',prereqs:[],semester:'Fall / Spring',prob:81,description:'Probability, statistical methods and interpretation.'},
  BUS215:{name:'Introduction to Business',credits:3,category:'Related',prereqs:[],semester:'Fall / Spring',prob:76,description:'Business principles and organizational foundations.'}
};
const faculty=[
 {id:1,name:'Dr. Kyung Choi',initials:'KC',role:'CS Department Coordinator',department:'Computer Science',email:'coordinator-cs@example.edu',phone:'+82 (0)32-000-0001',office:'Academic Building · Room 412',hours:'Tuesday 14:00–16:00 · By appointment'},
 {id:2,name:'Dr. Sarah Kim',initials:'SK',role:'Associate Professor',department:'Computer Science',email:'sarah.kim@example.edu',phone:'+82 (0)32-000-0002',office:'Academic Building · Room 407',hours:'Thursday 10:00–12:00'},
 {id:3,name:'Dr. Daniel Lee',initials:'DL',role:'Assistant Professor',department:'Business Management',email:'daniel.lee@example.edu',phone:'+82 (0)32-000-0003',office:'Academic Building · Room 320',hours:'Monday 13:00–15:00'},
 {id:4,name:'Dr. Mina Park',initials:'MP',role:'Department Advisor',department:'Applied Mathematics',email:'mina.park@example.edu',phone:'+82 (0)32-000-0004',office:'Academic Building · Room 508',hours:'Wednesday 15:00–17:00'}
];
const news=[
 {id:1,title:'Curriculum update: Computer Science specialization',tag:'Curriculum',date:'Oct 28, 2026',desc:'Review a sample update to the Computer Science course sequence for future academic planning.',body:'This is a demonstration curriculum notice. In a production release, this page would link to the verified department announcement and identify the effective catalog year, impacted prerequisites and advising contacts.'},
 {id:2,title:'Academic advising appointments for Spring 2027',tag:'Advising',date:'Oct 20, 2026',desc:'Prepare your semester plan and consult your department coordinator.',body:'This demonstration advising announcement explains how students could review their planned courses before requesting a meeting with a coordinator.'},
 {id:3,title:'Course offering information is now available',tag:'Courses',date:'Oct 14, 2026',desc:'Explore example course availability and compare possible schedules.',body:'Course availability and predicted probabilities displayed in this prototype are illustrative only, not connected to university enrollment systems.'}
];
