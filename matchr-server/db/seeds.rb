User.destroy_all

puts "🫡 Seeding users..."

User.create([
    {
      first_name: "Jean",
      gender: "Male",
      age: "28",
      location: "Sunset-District",
      interest_1: "hiking",
      interest_2: "biking",
      interest_3: "drinking",
      profile_photo_link: "https://images.unsplash.com/photo-1535745318714-da922ca9cc81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      email: "jean@gmail.com",
      password: "jean123"
    },
    {
      first_name: "Levi",
      gender: "Male",
      age: "26",
      location: "Russian Hill",
      interest_1: "gaming",
      interest_2: "cooking",
      interest_3: "pottery",
      profile_photo_link: "https://images.unsplash.com/photo-1577760960310-c49bbb09161e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      email: "levi@gmail.com",
      password: "levi123"
    },
    {
      first_name: "Santiago",
      gender: "Male",
      age: "25",
      location: "Mission-District",
      interest_1: "drinking",
      interest_2: "concerts",
      interest_3: "baking",
      profile_photo_link: "https://images.unsplash.com/photo-1583071299210-c6c113f4ac91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
      email: "santi@gmail.com",
      password: "santi123"
    },
    {
      first_name: "Xavier",
      gender: "Male",
      age: "27",
      location: "Nopa",
      interest_1: "gardening",
      interest_2: "pottery",
      interest_3: "biking",
      profile_photo_link: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      email: "xaxi@gmail.com",
      password: "xavi123"
    },
    {
      first_name: "Joe",
      gender: "Male",
      age: "31",
      location: "Marina-District",
      interest_1: "hiking",
      interest_2: "concerts",
      interest_3: "cooking",
      profile_photo_link: "https://64.media.tumblr.com/0a2803262eff5568d912acbae2a7bc6b/052ef890e2d5760d-bc/s540x810/ef20620013c4d693b4c8e01019cc19ca6d87b06b.jpg",
      email: "joe@gmail.com",
      password: "joe123"
    },
    {
      first_name: "Daniela",
      gender: "Female",
      age: "28",
      location: "Nopa",
      interest_1: "baking",
      interest_2: "gardening",
      interest_3: "drinking",
      profile_photo_link: "https://images.unsplash.com/photo-1530047198515-516ff90fc4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      email: "dani@gmail.com",
      password: "dani123"
    },
    {
      first_name: "Naomi",
      gender: "Female",
      age: "27",
      location: "Marina-District",
      interest_1: "drinking",
      interest_2: "pilates",
      interest_3: "hiking",
      profile_photo_link: "https://images.unsplash.com/photo-1620613908146-bb9a8bbb7eca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
      email: "naomi@gmail.com",
      password: "naomi123"
    },
    {
      first_name: "Maya",
      gender: "Female",
      age: "26",
      location: "North Beach",
      interest_1: "pilates",
      interest_2: "concerts",
      interest_3: "gaming",
      profile_photo_link: "https://images.unsplash.com/photo-1512361436605-a484bdb34b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      email: "maya@gmail.com",
      password: "maya123"
    },
    {
      first_name: "Taylor",
      gender: "Female",
      age: "32",
      location: "Pacific Heights",
      interest_1: "concerts",
      interest_2: "baking",
      interest_3: "pottery",
      profile_photo_link: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2020-04-28-at-11-38-08-1588070299.png",
      email: "taylor@gmail.com",
      password: "taylor123"
    },
    {
      first_name: "Cecilia",
      gender: "Female",
      age: "26",
      location: "Richmond-District",
      interest_1: "drinking",
      interest_2: "cooking",
      interest_3: "biking",
      profile_photo_link: "https://images.unsplash.com/photo-1624610261765-1649f2536026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      email: "ceci@gmail.com",
      password: "ceci123"
    }
])


puts "Done seeding! 😁"