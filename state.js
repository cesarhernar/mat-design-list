let initialState = {
  advocates: [
    {
      name: "Jim E.",
      headshot: "https://s3-us-west-2.amazonaws.com/psq2-media/prod/profilepictures/0ec02661-b444-4ec3-bae4-7c94336b1fa9.jpg", 
      company: "Purple Squirrel",
      logo: "https://media.purplesquirrel.io/companypictures/bc628043-7b2f-45a7-91bd-538f8c67b4bf.png",
      position: "COO & Co-Founder",
      reviews: 55,
      rating: 4.5,
      showFullBio: false,
      aboutFirstHalf: "Purple Squirrel levels the playing field for people who don't have a great professional network in a ",
      aboutSecondHalf: "job market where \"it's all about who you know\".  Feel free to book an engagement with me if you have any questions about how we can help you or if you'd just like to take Purple Squirrel for a test drive.",
      available: {
        fee: "Free",
        time: "30 min"
      }
    },
      {
      name: "Jon S.",
      company: "Purple Squirrel",
      logo: "https://media.purplesquirrel.io/companypictures/bc628043-7b2f-45a7-91bd-538f8c67b4bf.png",
      headshot: "https://s3-us-west-2.amazonaws.com/psq2-media/prod/profilepictures/c9d1c887-9649-46c5-865f-c3e2b7868046.jpg",
      position: "Strategy & Consulting",
      reviews: 54,
      rating: 4.5,
      showFullBio: false,
      aboutFirstHalf: "My name is Jon Silber and I'm the CEO and co-founder of Purple Squirrel. Thanks for joining our ",
      aboutSecondHalf: "job market where \"it's all about who you know\".  Feel free to book an engagement with me if you have any questions about how we can help you or if you'd just like to take Purple Squirrel for a test drive.",
      available: {
        fee: "Free",
        time: "30 min"
      }
    },
    {
      name: "Genia A.",
      company: "Forrester Research",
      headshot: "https://s3-us-west-2.amazonaws.com/psq2-media/prod/profilepictures/1b88cb5e-d99d-4d65-869e-19333491a4db.jpg",
      logo: "https://media.purplesquirrel.io/companypictures/8b259b91-bfff-434c-8b8e-57d5ec68d577.png",
      position: "COO & Co-Founder",
      reviews: undefined,
      rating: undefined,
      showFullBio: false,
      aboutFirstHalf: "I've been in sales/account management at Forrester for more than five years. I manage emerging ",
      aboutSecondHalf: "technology vendor accounts (<50 M – 1B in revenue). Work closely with CEO's, CMO's, and Product Marketing Managers to leverage Forrester's research, advisory, and consulting services.",
      available: {
        fee: "$5",
        time: "30 min"
      }
    },
    {
      name: "Katie P.",
      company: "Salesforce",
      headshot: "https://s3-us-west-2.amazonaws.com/psq2-media/prod/profilepictures/d7e6f3a6-9076-4710-af5d-54d3f74becfc.jpg",
      logo: "https://media.purplesquirrel.io/companypictures/675ea1e5-4b12-4863-a24a-13d514c86a9f.png",
      position: "Sales",
      reviews: 3,
      rating: 5,
      showFullBio: false,
      aboutFirstHalf: "I've been working in the enterprise division at Salesforce for over a year and have already referred ",
      aboutSecondHalf: "others into the sales organization and other departments. I have helped guide them through the interview process and provided coaching and recommendations based on my experience. Always happy to help other great candidates join the team!",
      available: {
        fee: "$20",
        time: "30 min"
      }
    },
    {
      name: "Myron N.",
      company: "Facebook",
      headshot: "https://s3-us-west-2.amazonaws.com/psq2-media/prod/profilepictures/d2396ece-f4ae-4aec-a3f9-dfd4d871cd61.jpg",
      logo: "https://media.purplesquirrel.io/companypictures/cc1d99e0-f234-40a0-9fdf-92e91757190c.png",
      position: "Finance & Accounting",
      reviews: 1,
      rating: 5,
      showFullBio: false,
      aboutFirstHalf: "I’ve was the manager of Business Operations - Platform & New Revenue Initiatives at Facebook for 3 ",
      aboutSecondHalf: "years and was on Google’s Global Business Strategy team before that (and functioned as an investor and investment banker prior to that).  I'm happy to share my experience working at Facebook and Google, provide resume critiques, interview advice, and introductions to former colleagues. ",
      available: {
        fee: "$40",
        time: "30 min"
      }
    },
    {
      name: "Brian R.",
      company: "OneLogin",
      headshot: "https://s3-us-west-2.amazonaws.com/psq2-media/prod/profilepictures/f93ec752-5d1d-470b-a929-4bfcb2b2c4f6.jpg",
      logo: "https://media.purplesquirrel.io/companypictures/4429169e-0159-4e1b-ab5e-055928746eee.png",
      position: "Sales",
      reviews: 1,
      rating: 5,
      showFullBio: false,
      aboutFirstHalf: "OneLogin is a great place to work, builds a great product, and business is booming! Last quarter was ",
      aboutSecondHalf: `the strongest quarter in the company's history. I work with exceptionally talented people in a highly collaborative environment. The company treats its employees very well, with lots of great perks (good benefits, free lunches, lots of social activities) and a very open management team that's transparent about the direction of the company. As someone who was referred into the company, I am happy to offer the same help to other qualified job seekers looking to get their foot in the door.`,
      available: {
        fee: "$1",
        time: "30 min"
      }
    },
    {
      name: "Charles S.",
      company: "Equinix",
      headshot: "https://s3-us-west-2.amazonaws.com/psq2-media/prod/profilepictures/ca4cddee-7f5b-4ec4-aabb-0269444d47fe.jpg",
      logo: "https://media.purplesquirrel.io/companypictures/33c6c76a-8c69-4156-a563-c7bcf0f48a93.png",
      position: "Operations Manager",
      reviews: undefined,
      rating: undefined,
      showFullBio: false,
      aboutFirstHalf: "",
      aboutSecondHalf: "",
      available: {
        fee: "$20",
        time: "30 min"
      }
    },
    {
      name: "Hondo K.",
      company: "Gerson Lehrman Group",
      headshot: "https://s3-us-west-2.amazonaws.com/psq2-media/prod/profilepictures/2ad2909f-3483-4545-818f-f6d15d465f6e.jpg",
      logo: "https://media.purplesquirrel.io/companypictures/302568fe-c5ec-4ec5-8c8e-316581d5a261.png",
      position: "Strategy & Consulting",
      reviews: undefined,
      rating: undefined,
      showFullBio: false,
      aboutFirstHalf: "I've been working as a Senior Associate for NY based Hedge Funds and have referred others into the ",
      aboutSecondHalf: "company. I have helped guide them through the interview process and am always happy to help great candidates join our team.",
      available: {
        fee: "$20",
        time: "30 min"
      }
    },
    {
      name: "Adam L.",
      company: "Gerson Lehrman Group",
      headshot: "https://s3-us-west-2.amazonaws.com/psq2-media/prod/profilepictures/50e6cca0-bbf3-481c-865a-94a6bd54f0e9.jpg",
      logo: "https://media.purplesquirrel.io/companypictures/302568fe-c5ec-4ec5-8c8e-316581d5a261.png",
      position: "Strategy & Consulting",
      reviews: undefined,
      rating: undefined,
      showFullBio: false,
      aboutFirstHalf: "My name is Adam LaPlaca and I've worked with GLG for a little over a year now. I recently graduated ",
      aboutSecondHalf: `and went through the job application process during my senior year. I can help you to better understand how GLG differentiates itself and how you should think about differentiating yourself through your GLG interviews.`,
      available: {
        fee: "$20",
        time: "30 min"
      }
    }
  ],
  totalAdvocates: 994
};

export default initialState;