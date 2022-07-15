const fs = require('fs/promises');

const employees = [
    {
        location: 'Main Hall 214',
        phone: '406-683-7049',
        email: 'suzanne.forrester@umwestern.edu',
        name: 'Suzanne Forrester',
        title: 'Academic Advisor',
        department: 'ACADEMIC ADVISING CENTER STAFF'
    },
    {
        location: 'Main Hall 214',
        phone: '406-683-7050',
        email: 'Jennifer.Fox@umwestern.edu',
        name: 'Jennifer Fox',
        title: 'Academic Advisor',
        department: 'ACADEMIC ADVISING CENTER STAFF'
    },
    {
        location: 'Main Hall 211',
        phone: '406-683-7115',
        email: 'johnny.maclean@umwestern.edu',
        name: 'Johnny MacLean',
        title: 'Provost and Vice Chancellor for Academic Affairs',
        department: 'ACADEMIC AFFAIRS'
    },
    {
        location: 'Main Hall 211',
        phone: '(406) 683-7115',
        email: 'molly.ruud@umwestern.edu',
        name: 'Molly Ruud',
        title: 'Provost’s Assistant',
        department: 'ACADEMIC AFFAIRS'
    },
    {
        location: 'Short Administration Building',
        phone: '406-683-7450',
        email: 'matt.allen@umwestern.edu',
        name: 'Matt Allen',
        title: 'Senior Director of Enrollment Management',
        department: 'ADMISSIONS STAFF'
    },
    {
        location: 'Short Administration Building',
        phone: '406-683-7331',
        email: 'janet.jones@umwestern.edu',
        name: 'Janet Jones',
        title: 'Admissions Evaluator',
        department: 'ADMISSIONS STAFF'
    },
    {
        location: 'Short Administration Building',
        phone: '406-683-7453',
        email: 'christina.stokes@umwestern.edu',
        name: 'Chrissy Stokes',
        title: 'Admissions Representative',
        department: 'ADMISSIONS STAFF'
    },
    {
        location: 'Short Administration Building',
        phone: '406-683-7451',
        email: 'augustina.wofford@umwestern.edu',
        name: 'Augustina Wofford',
        title: 'Admissions Representative',
        department: 'ADMISSIONS STAFF'
    },
    {
        location: 'Short Administration Building',
        phone: '406-683-7331',
        email: 'leslie.ferguson@umwestern.edu',
        name: 'Leslie Ferguson',
        title: 'Admissions Office Manager',
        department: 'ADMISSIONS STAFF'
    },
    {
        location: 'The University of Montana Western Foundation and Alumni Office in the Roe House',
        phone: '(406) 683-7305',
        email: 'roxanne.engellant@umwestern.edu',
        name: 'Roxanne Engellant',
        title: 'Director of UMW Foundation and Alumni Engagement',
        department: 'ALUMNI / FOUNDATION'
    },
    {
        location: 'Roe House',
        phone: '(406) 683-7306',
        email: 'kelly.allen@umwestern.edu',
        name: 'Kelly Allen',
        title: 'Accounting Analyst',
        department: 'ALUMNI / FOUNDATION'
    },
    {
        location: 'SUB Basement',
        phone: '(406) 683-7211',
        email: 'keeley.fitzgerald@umwestern.edu',
        name: 'Keeley Fitzgerald',
        title: 'Office Manager',
        department: 'ASUMW'
    },
    {
        location: 'SUB Basement',
        phone: '406-683-7614',
        email: '',
        name: 'Activities Director ASUMW',
        title: '',
        department: 'ASUMW'
    },
    {
        location: 'SUB Basement',
        phone: '406-683-7611',
        email: '',
        name: 'President ASUMW',
        title: '',
        department: 'ASUMW'
    },
    {
        location: 'SUB Basement',
        phone: '406-683-7611',
        email: '',
        name: 'Vice President ASUMW',
        title: '',
        department: 'ASUMW'
    },
    {
        location: '',
        phone: '406-683-7391',
        email: 'michael.feuling@umwestern.edu',
        name: 'Michael Feuling',
        title: 'Athletic Director',
        department: 'ATHLETICS FACULTY'
    },
    {
        location: 'BARC 213',
        phone: '(406) 683-7001',
        email: 'john.robbins1@umwestern.edu',
        name: 'JT Robbins',
        title: 'Head Rodeo Coach',
        department: 'ATHLETICS FACULTY'
    },
    {
        location: 'BARC 216',
        phone: '(406) 683-7341',
        email: 'michael.larsen1@umwestern.edu',
        name: 'Mike Larsen',
        title: 'Head Men’s Basketball Coach',
        department: 'ATHLETICS FACULTY'
    },
    {
        location: 'BARC 218',
        phone: '',
        email: 'patrick.jensen@umwestern.edu',
        name: 'Patrick Jensen',
        title: 'Assistant Men’s Basketball Coach',
        department: 'ATHLETICS FACULTY'
    },
    {
        location: 'BARC 210',
        phone: '(406) 683-7421',
        email: 'ryan.nourse@umwestern.edu',
        name: 'Ryan Nourse',
        title: 'Head Football Coach',
        department: 'ATHLETICS FACULTY'
    },
    {
        location: 'BARC',
        phone: '406-683-7346',
        email: 'Dylan.Ramsey@umwestern.edu',
        name: 'Dylan Ramsey',
        title: 'Asst Football Coach/Football',
        department: 'ATHLETICS FACULTY'
    },
    {
        location: 'BARC 212',
        phone: '(406) 683-7346',
        email: 'jed.heffernan@umwestern.edu',
        name: 'Jed Heffernan',
        title: 'Assistant Coach – Defensive Line – Football',
        department: 'ATHLETICS FACULTY'
    },
    {
        location: 'BARC 211',
        phone: '(406) 683-7345',
        email: 'rob.goode@umwestern.edu',
        name: 'Rob Goode',
        title: 'Defensive Coordinator\nLinebackers\nStrength and Conditioning',
        department: 'ATHLETICS FACULTY'
    },
    {
        location: 'BARC 217',
        phone: '(406) 683-7317',
        email: 'lindsay.woolley@umwestern.edu',
        name: 'Lindsay Woolley',
        title: 'Head Women’s Basketball Coach',
        department: 'ATHLETICS FACULTY'
    },
    {
        location: 'BARC',
        phone: '',
        email: 'tori.anderson@umwestern.edu',
        name: 'Tori Anderson',
        title: 'Asst Women’s Basketball Coach/Athletics',
        department: 'ATHLETICS FACULTY'
    },
    {
        location: 'BARC 215',
        phone: '406-683-7444',
        email: 'katherine.lovett@umwestern.edu',
        name: 'Katie Lovett',
        title: 'Head Volleyball Coach',
        department: 'ATHLETICS FACULTY'
    },
    {
        location: 'BARC 214',
        phone: '(406) 683-7418',
        email: 'dylan.zitzer@umwestern.edu',
        name: 'Dylan Zitzer',
        title: 'Head Coach Cross Country\nIndoor and Outdoor Track',
        department: 'ATHLETICS FACULTY'
    },
    {
        location: 'patricia.obenauer@umwestern.edu',
        phone: '406-683-7220',
        email: '',
        name: 'Patricia Mock',
        title: 'Cheer Coach',
        department: 'ATHLETICS FACULTY'
    },
    {
        location: 'BARC',
        phone: '406-683-7318',
        email: 'Russ.Richardson@umwestern.edu',
        name: 'Russ Richardson EdD., ATC-L',
        title: 'Head Athletic Trainer',
        department: 'ATHLETICS FACULTY'
    },
    {
        location: 'BARC 221',
        phone: '(406) 683-7386',
        email: 'zachary.mccarthy@umwestern.edu',
        name: 'Zachary McCarthy',
        title: 'Athletic Trainer',
        department: 'ATHLETICS FACULTY'
    },
    {
        location: 'BARC 116',
        phone: '(406) 683-7220',
        email: 'gary.stilley@umwestern.edu',
        name: 'Gary Stilley',
        title: 'Head Custodian',
        department: 'ATHLETICS FACULTY'
    },
    {
        location: 'Block Hall 320',
        phone: '406-683-7254',
        email: 'michael.morrow@umwestern.edu',
        name: 'Michael Morrow, Ph.D',
        title: 'Professor',
        department: 'BIOLOGY FACULTY'
    },
    {
        location: 'Block Hall 318',
        phone: '406-683-7264',
        email: 'wendy.ridenour@umwestern.edu',
        name: 'Wendy Ridenour, Ph.D',
        title: 'Associate Professor of Ecology',
        department: 'BIOLOGY FACULTY'
    },
    {
        location: 'Block Hall 319',
        phone: '406-683-7041',
        email: 'mike.gilbert@umwestern.edu',
        name: 'Michael Gilbert, Ph.D',
        title: 'Professor',
        department: 'BIOLOGY FACULTY'
    },
    {
        location: 'Block Hall Basement B1',
        phone: '406-683-7321',
        email: 'jack.kirkley@umwestern.edu',
        name: 'Jack Kirkley, Ph.D',
        title: 'Emeritus Professor of Biology',
        department: 'BIOLOGY FACULTY'
    },
    {
        location: 'Block Hall 321',
        phone: '406-683-7076',
        email: 'michelle.anderson@umwestern.edu',
        name: 'Michelle Anderson, Ph.D.',
        title: 'Professor',
        department: 'BIOLOGY FACULTY'
    },
    {
        location: 'Block Hall 322',
        phone: '406-683-7358',
        email: 'karl.ulrich@umwestern.edu',
        name: 'Karl Ulrich, Ph.D.',
        title: 'Professor',
        department: 'BIOLOGY FACULTY'
    },
    {
        location: 'Block Hall 221',
        phone: '406-683-7261',
        email: 'ana.ebeling@umwestern.edu',
        name: 'Ana Ebeling',
        title: 'Instructor',
        department: 'BIOLOGY FACULTY'
    },
    {
        location: 'Block Hall 323',
        phone: '',
        email: 'bradley.wood@umwestern.edu',
        name: 'Bradley Wood, Ph.D.',
        title: 'Assistant Professor',
        department: 'BIOLOGY FACULTY'
    },
    {
        location: 'Birch Creek Center',
        phone: '',
        email: 'birchcreek@umwestern.edu',
        name: 'Emma Chmara',
        title: 'Education Coordinator',
        department: 'BIRCH CREEK CENTER STAFF'
    },
    {
        location: 'Birch Creek Center',
        phone: '',
        email: 'kelsie.field@umwestern.edu',
        name: 'Kelsie Field',
        title: 'Education Coordinator',
        department: 'BIRCH CREEK CENTER STAFF'
    },
    {
        location: 'Birch Creek Center',
        phone: '',
        email: 'birchcreek@umwestern.edu',
        name: 'Ian Decker',
        title: 'Site Supervisor and Educator',
        department: 'BIRCH CREEK CENTER STAFF'
    },
    {
        location: 'Birch Creek Center',
        phone: '',
        email: 'birchcreek@umwestern.edu',
        name: 'Jorden Hobbs',
        title: 'Culinary Supervisor',
        department: 'BIRCH CREEK CENTER STAFF'
    },
    {
        location: 'Birch Creek Center',
        phone: '',
        email: 'birchcreek@umwestern.edu',
        name: 'Mike Felo',
        title: 'Culinary Specialist',
        department: 'BIRCH CREEK CENTER STAFF'
    },
    {
        location: 'Business & Technology 206',
        phone: '406-683-7178',
        email: 'brian.england@umwestern.edu',
        name: 'Brian England',
        title: 'Assistant Professor',
        department: 'BUSINESS & TECHNOLOGY FACULTY'
    },
    {
        location: 'Business & Technology Building 213',
        phone: '406-683-7271',
        email: 'doug.daenzer@umwestern.edu',
        name: 'Doug Daenzer',
        title: 'Instructor',
        department: 'BUSINESS & TECHNOLOGY FACULTY'
    },
    {
        location: 'Business and Technology Building',
        phone: '406-683-7404',
        email: 'kevin.engellant@umwestern.edu',
        name: 'Kevin Engellant',
        title: 'Professor',
        department: 'BUSINESS & TECHNOLOGY FACULTY'
    },
    {
        location: 'Business & Technology Building',
        phone: '406-683-7208',
        email: 'christian.gilde@umwestern.edu',
        name: 'Christian Gilde',
        title: 'Professor',
        department: 'BUSINESS & TECHNOLOGY FACULTY'
    },
    {
        location: 'Business & Technology Building 212',
        phone: '406-683-7203',
        email: 'denise.holland@umwestern.edu',
        name: 'Denise Holland',
        title: 'Professor',
        department: 'BUSINESS & TECHNOLOGY FACULTY'
    },
    {
        location: 'Business & Technology Building 206',
        phone: '406-683-7403',
        email: 'cecil.jones@umwestern.edu',
        name: 'W. Cecil Jones',
        title: 'Professor',
        department: 'BUSINESS & TECHNOLOGY FACULTY'
    },
    {
        location: 'Business & Technology Building 211',
        phone: '406-683-7205',
        email: 'leeann.jenne@umwestern.edu',
        name: 'Lee Ann Jenne',
        title: 'Instructor',
        department: 'BUSINESS & TECHNOLOGY FACULTY'
    },
    {
        location: 'Business & Technology Building 210',
        phone: '406-683-7204',
        email: 'debbie.huber@umwestern.edu',
        name: 'Debbie Huber',
        title: 'Instructor',
        department: 'BUSINESS & TECHNOLOGY FACULTY'
    },
    {
        location: 'Business & Technology Building 209',
        phone: '406-683-7183',
        email: 'kurt.steadman@umwestern.edu',
        name: 'Kurt Steadman',
        title: 'Professor',
        department: 'BUSINESS & TECHNOLOGY FACULTY'
    },
    {
        location: 'Business & Technology Building 208',
        phone: '406-683-7537',
        email: 'rocky.crandell@umwestern.edu',
        name: 'Rocky Crandell',
        title: 'Instructor',
        department: 'BUSINESS & TECHNOLOGY FACULTY'
    },
    {
        location: 'Business & Technology 217B',
        phone: '406-683-7207',
        email: 'will.shirley@umwestern.edu',
        name: 'Will Shirley',
        title: 'Instructor',
        department: 'BUSINESS & TECHNOLOGY FACULTY'
    },
]

// Add an id# to each obj
employees.forEach((el, i) => el.id = i + 1);

// Create column labels
// id, location, phone, email, name, title, department
const csvString = [
    [
        "id",
        "location",
        "phone",
        "email",
        "name",
        "title",
        "department"
    ],
    // Create an array for each employee
    ...employees.map(item => [
        item.id,
        item.location,
        item.phone,
        item.email,
        item.name,
        item.title,
        item.department
    ])
    // Format the info with commas and line breaks
].map(e => e.join(","))
    .join("\n");
;

// Export data to text file
fs.writeFile('umw-employees-data-csv.txt', csvString);