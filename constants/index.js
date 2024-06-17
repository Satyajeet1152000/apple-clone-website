import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = [
    {
      main: {name: "Store", href:"/store"},
      sub: {
        "Shop": [
          {name: "Shop the Latest", href: "/store"},
          {name: "Mac", href: "/store/buy-mac"}, 
          {name: "iPad", href: "/store/buy-ipad"}, 
          {name: "iPhone", href: "/store/buy-iphone"}, 
          {name: "Apple Watch", href: "/store/buy-watch"}, 
          {name: "Apple Vision Pro", href: "/store/buy-vision"},
          {name: "Accessories", href: ""},
        ],
        "Quick Links": [
          {name: "Find a Store", href: ""},
          {name: "Order Status", href: ""},
          {name: "Apple Trade In", href: ""},
          {name: "Financing", href: ""},
        ],
        "Shop Spacial Stores": [
          {name: "Certified Refurbished", href: ""},
          {name: "Education", href: ""},
          {name: "Business", href: ""},
          {name: "Veteran & Military", href: ""},
          {name: "Government", href: ""},
        ]
      }
    }, 
    {
      main: {name:"Mac", href: "/mac"},
      sub: {
        "Eplore Mac":[
          {name: "Explore All Mac", href:""},
          {name: "MacBook Air", href:""},
          {name: "MacBook Pro", href:""},
          {name: "iMac", href:""},
          {name: "Mac mini", href:""},
          {name: "Mac Studio", href:""},
          {name: "Mac Pro", href:""},
          {name: "Displays", href:""},
        ],
        "Shop Mac":[
          {name: "Shop Mac", href:""},
          {name: "Mac Accessories", href:""},
          {name: "Apple Trade in", href:""},
          {name: "Financing", href:""},
        ],
        "More from Mac":[
          {name: "Mac Support", href:""},
          {name: "Applecare+ for Mac", href:""},
          {name: "macOS Sonoma", href:""},
          {name: "Apps by Apple", href:""},
          {name: "Continuity", href:""},
          {name: "iCloud+", href:""},
          {name: "Mac for Business", href:""},
          {name: "Education", href:""},
        ],
      }
    }, 
    {
      main: {name:"iPad", href: "/ipad"},
      sub: {
        "Explore iPad":[
          {name: "Explore All iPad", href:""},
          {name: "iPad Pro", href:""},
          {name: "iPad Air", href:""},
          {name: "iPad", href:""},
          {name: "iPad Mini", href:""},
          {name: "Apple Pencil", href:""},
          {name: "Keyboards", href:""},
        ],
        "Shop iPad":[
          {name: "Shop iPad", href:""},
          {name: "iPad Accessories", href:""},
          {name: "Apple Trade in", href:""},
          {name: "Financing", href:""},
        ],
        "More from iPad":[
          {name: "iPad Support", href:""},
          {name: "AppleCare+ for iPad", href:""},
          {name: "iPadOS 17", href:""},
          {name: "Apps by Apple", href:""},
          {name: "iCloud+", href:""},
          {name: "Education", href:""},
        ],
      }
    }, 
    {
      main: {name:"iPhone", href: "/iphone"},
      sub: {
        "Explore iPhone":[
          {name: "Explore All iPhone", href:""},
          {name: "iPhone 15 Pro", href:""},
          {name: "iPhone 15", href:""},
          {name: "iPhone 14", href:""},
          {name: "iPhone 13", href:""},
          {name: "iPhone SE", href:""},
        ],
        "Shop iPhone":[
          {name: "Shop iPhone", href:""},
          {name: "iPhone Accessories", href:""},
          {name: "Apple Trade In", href:""},
          {name: "Carrier Deals at Apple", href:""},
          {name: "Financing", href:""},
        ],
        "More from iPhone":[
          {name: "iPhone Support", href:""},
          {name: "Applecare+ for iPhone", href:""},
          {name: "iOS 17", href:""},
          {name: "Apps by Apple", href:""},
          {name: "iPhone Privacy", href:""},
          {name: "iCloud+", href:""},
          {name: "Wallet, Pay, Card", href:""},
          {name: "Siri", href:""},
        ],
      }
    }, 
    {
      main: {name:"Watch", href: "/watch"},
      sub: {
        "Explore Watch":[
          {name: "Explore All Apple Watch", href:""},
          {name: "Apple Watch Series 9", href:""},
          {name: "Apple Watch Ultra 9", href:""},
          {name: "Apple Watch SE", href:""},
          {name: "Apple Watch Nike", href:""},
          {name: "Apple Watch Hermés", href:""},
        ],
        "Shop Watch":[
          {name: "Shop Apple Watch", href:""},
          {name: "Apple Watch Studio", href:""},
          {name: "Apple Watch Bands", href:""},
          {name: "Apple Watch Accessories", href:""},
          {name: "Apple Trade In", href:""},
          {name: "Financing", href:""},
        ],
        "More from Watch":[
          {name: "Apple Watch Support", href:""},
          {name: "AppleCare+", href:""},
          {name: "watchOS10", href:""},
          {name: "Apps by Apple", href:""},
          {name: "Apple Fitness+", href:""},
        ],
      }
    }, 
    {
      main: {name:"Vision", href: "/vision"},
      sub: {
        "Explore Vision":[
          {name: "Explore Apple Vision Pro", href:""},
        ],
        "Shop Vision":[
          {name: "Shop Apple Vision Pro", href:""},
          {name: "Apple Vision Pro Accessories", href:""},
          {name: "Book a Demo", href:""},
          {name: "Financing", href:""},
        ],
        "More from Watch":[
          {name: "Apple Vision Pro Support", href:""},
          {name: "AppleCare+", href:""},
        ],
      }
    }, 
    {
      main: {name:"AirPods", href: "/airpods"},
      sub: {
        "Explore Airpods":[
          {name: "Explore All AirPods", href:""},
          {name: "AirPods Pro 2nd generation", href:""},
          {name: "AirPods 2nd generation", href:""},
          {name: "AirPods 3rd generation", href:""},
          {name: "AirPods Max", href:""},
        ],
        "Shop AirPods":[
          {name: "Shop AirPods", href:""},
          {name: "AirPods Accessories", href:""},
        ],
        "More From AirPods":[
          {name: "AirPods Support", href:""},
          {name: "AppleCare+ for Headphones", href:""},
          {name: "Apple Music", href:""},
        ],
      }
    }, 
    {
      main: {name:"Tv & Home", href: "/tv"},
      sub: {
        "Explore TV & Home":[
          {name: "Explore TV & Home", href:""},
          {name: "Apple TV 4K", href:""},
          {name: "HomePod", href:""},
          {name: "Home mini", href:""},
        ],
        "Shop TV & Home":[
          {name: "Shop Apple TV 4K", href:""},
          {name: "Shop HomePod", href:""},
          {name: "Shop HomePod mini", href:""},
          {name: "Shop Siri Remote", href:""},
          {name: "TV & Home Accessories", href:""},
        ],
        "More from TV & Home":[
          {name: "Apple TV Support", href:""},
          {name: "HomePod Support", href:""},
          {name: "AppleCare+", href:""},
          {name: "Apple TV app", href:""},
          {name: "Apple TV+", href:""},
          {name: "Home app", href:""},
          {name: "Apple Music", href:""},
          {name: "Siri", href:""},
          {name: "AirPlay", href:""},
        ],
      }
    }, 
    {
      main: {name:"Entertainment", href: "/entertainment"},
      sub: {
        "Explore Entertainment":[
          {name: "Explore Entertainment", href:""},
          {name: "Apple One", href:""},
          {name: "Apple TV+", href:""},
          {name: "Apple Music", href:""},
          {name: "Apple Arcade", href:""},
          {name: "Apple Fitness+", href:""},
          {name: "Apple News+", href:""},
          {name: "Apple Podcasts", href:""},
          {name: "Apple Books", href:""},
          {name: "Apple Store", href:""},
        ],
        "Support":[
          {name: "Apple TV+ Support", href:""},
          {name: "Apple Music Support", href:""},
        ],
      }
    }, 
    {
      main: {name:"Accessories", href: ""},
      sub: {
      "Shop Accesories":[
          {name: "Shop All Accessories", href:""},
          {name: "Mac", href:""},
          {name: "iPad", href:""},
          {name: "iPhone", href:""},
          {name: "Apple Watch", href:""},
          {name: "Apple Vision Pro", href:""},
          {name: "AirPods", href:""},
          {name: "AirPods", href:""},
          {name: "TV & Homes", href:""},
        ],
      "Explore Accessories":[
          {name: "Made by Apple", href:""},
          {name: "Beats by Dr. Dre", href:""},
          {name: "AirTag", href:""},
        ],
      }
    }, 
    {
      main: {name:"Support", href: ""},
      sub: {
        "Explore Support":[
          {name: "iPhone", href:""},
          {name: "Mac", href:""},
          {name: "iPad", href:""},
          {name: "Watch", href:""},
          {name: "Apple Vision Pro", href:""},
          {name: "AirPods", href:""},
          {name: "Music", href:""},
          {name: "TV", href:""},
        ],
        "Get Help":[
          {name: "Community", href:""},
          {name: "Check Coverage", href:""},
          {name: "Repair", href:""},
          {name: "Contact Us", href:""},
        ],
        "Helpful Topics":[
          {name: "Get AppleCare+", href:""},
          {name: "Apple ID & Password", href:""},
          {name: "Billing & Subscription", href:""},
          {name: "Find My", href:""},
          {name: "Accessibility", href:""},
        ],
      }
    }
  ];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Enter A17 Pro.",
        "Game‑changing chip.",
        "Groundbreaking performance.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Titanium.", "So strong. So light. So Pro."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "iPhone 15 Pro Max has the",
        "longest optical zoom in",
        "iPhone ever. Far out.",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["All-new Action button.", "What will yours do?."],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = {
    "Shop and Learn": [
      {name: "Store", href: ""}, 
      {name: "Max", href: ""}, 
      {name: "iPad", href: ""}, 
      {name: "iPhone", href: ""}, 
      {name: "Watch", href: ""}, 
      {name: "Vision", href: ""},
      {name: "AirPods", href: ""},
      {name: "TV & Home", href: ""},
      {name: "AirTag", href: ""},
      {name: "Accessories", href: ""},
      {name: "Gift Cards", href: ""},
    ],
    "Apple Wallet": [
      {name: "Wallet", href: ""},
      {name: "Apple Card", href: ""},
      {name: "Apple Pay", href: ""},
      {name: "Apple Cash", href: ""},
    ],
    "Account": [
      {name: "Manage Your Apple ID", href: ""},
      {name: "Apple Store Account", href: ""},
      {name: "iCloud.com", href: ""},
    ],
    "Entertainment": [
      {name: "Apple One", href: ""},
      {name: "Apple TV+", href: ""},
      {name: "Apple Music", href: ""},
      {name: "Apple Arcade", href: ""},
      {name: "Apple Fitness+", href: ""},
      {name: "Apple News+", href: ""},
      {name: "Apple Podcasts", href: ""},
      {name: "Apple Books", href: ""},
      {name: "Apple Store", href: ""},
    ],
    "Apple Store": [
      {name: "Find a Store", href: ""},
      {name: "Genius Bar", href: ""},
      {name: "Today at Apple", href: ""},
      {name: "Group Reservations", href: ""},
      {name: "Apple Camp", href: ""},
      {name: "Apple Store App", href: ""},
      {name: "Certified Refurbished", href: ""},
      {name: "Apple Trade In", href: ""},
      {name: "Financing", href: ""},
      {name: "Carrier Deals at Apple", href: ""},
      {name: "Order Status", href: ""},
      {name: "Shopping Help", href: ""},
    ],
    "For Business": [
      {name: "Apple and Business", href: ""},
      {name: "Shop for Business", href: ""},
    ],
    "For Education": [
      {name: "Apple and Education", href: ""},
      {name: "Shop for K-12", href: ""},
      {name: "Shop for College", href: ""},
    ],
    "For Healthcare": [
      {name: "Apple in Healthcare", href: ""},
      {name: "Health on Apple Watch", href: ""},
      {name: "Health Reacords on iPhone", href: ""},
    ],
    "For Government": [
      {name: "Shop for Government", href: ""},
      {name: "Shop for Veterans and Military", href: ""},
    ],
    "Apple Values": [
      {name: "Accessibility", href: ""},
      {name: "Education", href: ""},
      {name: "Encironment", href: ""},
      {name: "Inclusion and Diversity", href: ""},
      {name: "Privacy", href: ""},
      {name: "Racial Equity and Justice", href: ""},
      {name: "Supply Chain", href: ""},
    ],
    "About Apple": [
      {name: "Newsroom", href: ""},
      {name: "Apple Leadership", href: ""},
      {name: "Career Opportunities", href: ""},
      {name: "Investors", href: ""},
      {name: "Ethics & Compliance", href: ""},
      {name: "Events", href: ""},
      {name: "Contact Apple", href: ""},
    ],
  };