import {
    earthquake,
    forestfire,
    cloud,
    flood,
    kalesh,
    earthquake1,
    flood1,
    tsunami,
    drought1,
    wildfires, cyclone, landslide, avalanche, pandemic, hurricane, manmade, earthquake2, earthquake3, earthquake4
} from "./images/index";

export const disasters =[
    "Earthquake", "Tsunami", "Flood", "Cyclone", "Wildfire", "Drought", "Land Slide", "Avalanche", "Pandemic", "Hurricane", "Manmade"
]

export const cities = [
  "Agra", "Ahmedabad", "Ajmer", "Aligarh", "Allahabad", "Ambattur", "Amravati", "Amritsar", "Asansol", "Aurangabad",
  "Bangalore", "Bareilly", "Belgaum", "Bhavnagar", "Bhilai", "Bhiwandi", "Bhopal", "Bhubaneswar", "Bhavnagar", "Bikaner",
  "Bilaspur", "Chandigarh", "Chennai", "Coimbatore", "Cuttack", "Dehradun", "Delhi", "Dhanbad", "Durgapur", "Faridabad",
  "Firozabad", "Gandhinagar", "Ghaziabad", "Gorakhpur", "Gulbarga", "Guntur", "Gurgaon", "Guwahati", "Haora", "Hubli-Dharwad",
  "Hyderabad", "Indore", "Jabalpur", "Jaipur", "Jalandhar", "Jamnagar", "Jamshedpur", "Jhansi", "Jodhpur", "Kalyan", "Kanpur",
  "Kochi", "Kolkata", "Kota", "Kozhikode", "Lucknow", "Ludhiana", "Madurai", "Malegaon", "Mangalore", "Meerut", "Moradabad",
  "Mumbai", "Mysore", "Nagpur", "Nanded", "Nashik", "Nellore", "Noida", "Patna", "Pimpri-Chinchwad", "Pune", "Raipur", "Rajkot",
  "Ranchi", "Salem", "Sangli", "Siliguri", "Srinagar", "Surat", "Thane", "Thiruvananthapuram", "Thrissur", "Tiruchirappalli",
  "Tirunelveli", "Ujjain", "Vadodara", "Varanasi", "Vasai-Virar", "Vijayawada", "Visakhapatnam", "Warangal",
  "Ahmednagar", "Akola", "Alappuzha", "Alwar", "Angul", "Anantapur", "Arrah", "Aurangabad", "Avadi", "Bally", "Baranagar",
  "Barasat", "Bardhaman", "Bareilly", "Barrackpur", "Begusarai", "Belgaum", "Bharatpur", "Bhatpara", "Bhavnagar", "Bhilai",
  "Bhimavaram", "Bhind", "Bhusawal", "Bidar", "Bihar Sharif", "Bijapur", "Bikaner", "Bilaspur", "Bokaro Steel City",
  "Bongaigaon", "Bulandshahr", "Burhanpur", "Chandannagar", "Chandrapur", "Chapra", "Chas", "Chittorgarh", "Cuddalore",
  "Damoh", "Danapur", "Darbhanga", "Darjeeling", "Dehri", "Deoghar", "Dewas", "Dharmavaram", "Dhanbad", "Dhule", "Dibrugarh",
  "Dindigul", "Durg", "Eluru", "Erode", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gandhidham", "Gandhinagar",
  "Gaya", "Godhra", "Gopalpur", "Gorakhpur", "Gudivada", "Gulbarga", "Guna", "Guntakal", "Guntur", "Guwahati", "Gwalior", "Haldia",
  "Haldwani", "Hazaribagh", "Hindupur", "Hinganghat", "Hospet", "Hosur", "Howrah", "Hubli", "Ichalkaranji", "Imphal", "Indore",
  "Jabalpur", "Jaipur", "Jalandhar", "Jalgaon", "Jalna", "Jammu", "Jamnagar", "Jamshedpur", "Jhansi", "Jhunjhunu", "Jodhpur",
  "Junagadh", "Kadapa", "Kakinada", "Kalyan", "Kamarhati", "Kanpur", "Karaikudi", "Karawal Nagar", "Karimnagar", "Karnal",
  "Katihar", "Katni", "Kavali", "Khammam", "Khandwa", "Khanna", "Kharagpur", "Kharar", "Khopoli", "Kishanganj", "Kochi",
  "Kolar", "Kolhapur", "Kollam", "Korba", "Kota", "Kottayam", "Kozhikode", "Kulti", "Kurnool", "Latur", "Loni", "Lucknow",
  "Ludhiana", "Machilipatnam", "Madanapalle", "Madhyamgram", "Madurai", "Mahbubnagar", "Mahesana", "Makrana", "Malegaon",
  "Mangalore", "Mango", "Mathura", "Mau", "Medinipur", "Meerut", "Mehsana", "Mira-Bhayandar", "Mirzapur", "Moradabad",
  "Morena", "Motihari", "Munger", "Muzaffarpur", "Mysore", "Nadiad", "Nagercoil", "Nagpur", "Naihati", "Nalgonda", "Nanded",
  "Nangloi Jat", "Navghar", "Navi Mumbai", "Nellore", "New Delhi", "Nizamabad", "Noida", "North Dumdum", "Ongole", "Orai",
  "Ozhukarai", "Pali", "Pallavaram", "Panchkula", "Panihati", "Panipat", "Panvel", "Parbhani", "Patiala", "Patna",
  "Phagwara", "Phusro", "Pimpri", "Pondicherry", "Proddatur", "Pudukkottai", "Pune", "Purnia", "Raebareli", "Raichur",
  "Raiganj", "Raipur", "Rajahmundry", "Rajapalayam", "Rajkot", "Rajpur Sonarpur", "Rampur", "Ranchi", "Ratlam", "Raurkela",
  "Rewa", "Rohtak", "Rourkela", "Sagar", "Saharanpur", "Sambalpur", "Sangli", "Satara", "Satna", "Secunderabad", "Serampore",
  "Shahjahanpur", "Shimla", "Shivpuri", "Sikar", "Silchar", "Siliguri", "Singrauli", "Sirsa", "Siwan", "Solapur", "Sonipat",
  "South Dumdum", "Sri Ganganagar", "Srinagar", "Surat", "Surendranagar", "Tadepalligudem", "Tadipatri", "Tenali", "Thane",
  "Thanjavur", "Thiruvananthapuram", "Thrissur", "Tiruchirappalli", "Tirunelveli", "Tirupati", "Tiruppur", "Tiruvottiyur",
  "Tonk", "Tumkur", "Udaipur", "Udupi", "Ujjain", "Ulhasnagar", "Uluberia", "Unnao", "Vadodara", "Vellore", "Vijayawada",
  "Visakhapatnam", "Vizianagaram", "Warangal", "Yamunanagar", "Yavatmal",
];

export const Storydetail=[
    {
        id:1,
        type:'Earthquake',
        place:'China',
        author:'Ching chang chung aiii',
        mainimage:earthquake,
        images: [earthquake1, earthquake, earthquake2, earthquake3, earthquake4],
        title:'Earthquake in China',
        date:'12-09-2016',
        para1:'China, situated in a seismically active region, has undergone a transformative journey in earthquake preparedness. The 2008 Sichuan earthquake, a tragic turning point, prompted significant advancements. The China Earthquake Administration (CEA) established a comprehensive monitoring system, utilizing cutting-edge technology to detect seismic activities promptly. Rigorous building codes were enforced, emphasizing earthquake-resistant structures to minimize damage and casualties.\n' +
            '\n' +
            'Communities actively engage in emergency drills, fostering a culture of preparedness. The resilience of the Chinese people shines through their united response to seismic challenges. ',
        para2:'Beyond national borders, China participates in global collaborations, contributing expertise to international efforts in disaster risk reduction.\n' +
            '\n' +
            'This commitment to seismic resilience reflects a nation dedicated to protecting its citizens. As earthquakes persist as a formidable force, China\'s proactive measures and collaborative spirit exemplify a model for mitigating risks and enhancing societal resilience in the face of natural disasters.'
    }
]

export const categoryStory=[
    {
        id:1,
        image:earthquake,
        title:'Earthquake in China',
        date:'12-09-2016',
        type:'Earthquake',
        link:''
    },
]

export const Story=[
    {
        id:1,
        image:earthquake,
        title:'Earthquake in China',
        date:'12-09-2016',
        link:''
    },
    {
        id:2,
        image:forestfire,
        title:'Floods in Mumbai',
        date:'15-10-2019',
        link:''
    },
    {
        id:3,
        image:cloud,
        title:'Floods in kedarnath',
        date:'01-01-2023',
        link:''
    },
    {
        id:4,
        image:flood,
        title:'Earthquake in Japan',
        date:'30-11-2020',
        link:''
    },
    {
        id:5,
        image:kalesh,
        title:'Cyclone in Vizag',
        date:'30-09-2014',
        link:''
    },
]

export const category=[
    {
        id:1,
        image:earthquake1,
        title:'Earthquake',
        type:'Earthquake',
        number:28,
    },
    {
        id:2,
        image:flood1,
        title:'Floods',
        type:'Floods',
        number:39,
    },
    {
        id:3,
        image:tsunami,
        title:'Tsunami',
        type:'Tsunami',
        number:18,
    },
    {
        id:4,
        image:drought1,
        title:'Drought',
        type:'Drought',
        number:11,
    },
    {
        id:5,
        image:wildfires,
        title:'Wildfires',
        type:'Wildfires',
        number:13,
    },
    {
        id:6,
        image:cyclone,
        title:'Cyclone',
        type:'Cyclone',
        number:15,
    },
    {
        id:7,
        image:landslide,
        title:'Land Slide',
        type:'Land Slide',
        number:19,
    },
    {
        id:8,
        image:avalanche,
        title:'Avalanche',
        type:'Avalanche',
        number:21,
    },
    {
        id:9,
        image:pandemic,
        title:'Pandemic',
        type:'Pandemic',
        number:3,
    },
    {
        id:10,
        image:hurricane,
        title:'Hurricane',
        type:'Hurricane',
        number:6,
    },
    {
        id:11,
        image:manmade,
        title:'Manmade Disaster',
        type:'Manmade Disaster',
        number:79,
    }
]