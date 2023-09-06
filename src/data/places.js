const places = [
  {
    id: "1",
    placeName: "Bengalore",
    description:
      "The Silicon Valley of India, where dreams are nurtured, ideas take flight, and the future is built one innovation at a time.",
    image: "bengalore",
    hotels: [
      {
        id:"BH1",
        name: "The Oberoi, Bangalore",
        rating: "9.8",
        stars: 5,
        description: "Delux Room | 2 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "720",
        amount: "6000",
        isOffer: true,
        offer:
          "Get  INR 536 Cashback to Card on payments via credit/debit cards",
        image: "/bengalore/oberoi.jpg",
      },
      {
        id:"BH2",
        name: "Taj West End",
        rating: "9.5",
        stars: 5,
        description: "Delux Room | 2 Queen bed | Living Room | Private Pool",
        breakfast: true,
        cancellationPolicy: false,
        taxAmount: "499",
        amount: "4500",
        isOffer: false,
        image: "/bengalore/Taj-west-end.jpg",
      },
      {
        id:"BH3",
        name: "The Leela Palace Bangalore",
        rating: "9.7",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed | 1 Kitchen",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "459",
        amount: "5300",
        isOffer: false,
        image: "/bengalore/The-leela-palace.png",
      },
      {
        id:"BH4",
        name: "ITC Gardenia, Bengaluru",
        rating: "9.0",
        stars: 4,
        description: "Delux Room | 1 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "710",
        amount: "5259",
        isOffer: true,
        offer: "Get 20% off on Deluxe Rooms",
        image: "/bengalore/itc-gardenia.jpg",
      },
      {
        id:"BH5",
        name: "The Ritz-Carlton, Bangalore",
        rating: "9.3",
        stars: 4,
        description: "Delux Room | 2 Queen bed ",
        breakfast: false,
        cancellationPolicy: false,
        taxAmount: "256",
        amount: "4500",
        isOffer: false,
        image: "/bengalore/ritz.jpeg",
      },
      {
        id:"BH6",
        name: "JW Marriott Hotel Bengaluru",
        rating: "9.0",
        stars: 4,
        description: "Delux Room | 2 Twin bed ",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "359",
        amount: "3800",
        isOffer: true,
        offer: "Get 10% off on Deluxe Rooms",
        image: "/bengalore/jw-marriott.jpg",
      },
      {
        id:"BH7",
        name: "Shangri-La Hotel",
        rating: "9.7",
        stars: 3,
        description: "Delux Room | 2 Queen bed | Living Room",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "600",
        amount: "4200",
        isOffer: false,
        image: "/bengalore/shangri.jpg",
      },
      {
        id:"BH8",
        name: "The Lalit Ashok",
        rating: "9.4",
        stars: 3,
        description: "Super Delux Room | 2 Queen bed ",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "540",
        amount: "4560",
        isOffer: false,
        image: "/bengalore/the-lalit-ashok.jpg",
      },
      {
        id:"BH9",
        name: "Conrad Bengaluru",
        rating: "9.4",
        stars: 5,
        description: "Super Delux Room | 1 Queen bed ",
        breakfast: true,
        cancellationPolicy: false,
        taxAmount: "345",
        amount: "6300",
        isOffer: true,
        image: "/bengalore/conrad.jpg",
        offer:
          "Get 30% OFF on your first booking with us",
      },
      {
        id:"BH10",
        name: "Sheraton Grand Bangalore Hotel",
        rating: "9.2",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed | BathTub",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "550",
        amount: "5800",
        isOffer: false,
        image: "/bengalore/sheraton-grand.jpg",
      },
    ],
  },
  {
    id: "2",
    placeName: "Chennai",
    description:"The city where tradition meets modernity, creating a vibrant tapestry of culture, history, and progress.",
    image: "chennai",
    hotels: [
      {
        id:"CH1",
        name: "Hyatt Regency Chennai",
        rating: "9.5",
        stars: 5,
        description: "Delux Room | 2 Queen bed | Living Room | Private Pool",
        breakfast: true,
        cancellationPolicy: false,
        taxAmount: "499",
        amount: "4500",
        isOffer: false,
        image: "/chennai/hyatt.jpg",
      },
      {
        id:"CH2",
        name: "The Accord Metropolitan",
        rating: "9.8",
        stars: 5,
        description: "Delux Room | 2 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "720",
        amount: "6000",
        isOffer: true,
        offer:
          "Get  INR 536 Cashback to Card on payments via credit/debit cards",
        image: "/chennai/the-accord-metropolitan.jpg",
      },
      {
        id:"CH3",
        name: "Radisson Blu Hotel Chennai City Centre",
        rating: "9.7",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed | 1 Kitchen",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "459",
        amount: "5300",
        isOffer: false,
        image: "/chennai/radisson.jpg",
      },
      {
        id:"CH4",
        name: "ITC Grand Chola, a Luxury Collection Hotel",
        rating: "9.0",
        stars: 4,
        description: "Delux Room | 1 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "710",
        amount: "5259",
        isOffer: true,
        offer: "Get 20% off on Deluxe Rooms",
        image: "/chennai/itc.png",
      },
      {
        id:"CH5",
        name: "Novotel Chennai OMR - An AccorHotels Brand",
        rating: "9.3",
        stars: 3,
        description: "Delux Room | 2 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "256",
        amount: "4500",
        isOffer: false,
        image: "/chennai/novotel.jpg",
      },
      {
        id:"CH6",
        name: "Ibis Chennai OMR - An AccorHotels Brand",
        rating: "9.0",
        stars: 4,
        description: "Delux Room | 2 Twin bed ",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "359",
        amount: "3800",
        isOffer: true,
        offer: "Get 10% off on Deluxe Rooms",
        image: "/chennai/ibis.jpg",
      },
      {
        id:"CH7",
        name: "Holiday Inn",
        rating: "9.7",
        stars: 3,
        description: "Delux Room | 2 Queen bed | Living Room",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "600",
        amount: "4200",
        isOffer: false,
        image: "/chennai/holiday-inn.jpeg",
      },
      {
        id:"CH8",
        name: "Courtyard by Marriott Chennai",
        rating: "9.4",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed ",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "540",
        amount: "4560",
        isOffer: false,
        image: "/chennai/courtyard.jpg",
      },
      {
        id:"CH9",
        name: "Trident, Chennai",
        rating: "9.4",
        stars: 3,
        description: "Super Delux Room | 1 Queen bed ",
        breakfast: true,
        cancellationPolicy: false,
        taxAmount: "345",
        amount: "6300",
        isOffer: true,
        image: "/chennai/trident.jpg",
        offer:
          "Get 30% OFF on your first booking with us",
      },
      {
        id:"CH10",
        name: "The Gateway Hotel IT Expressway Chennai",
        rating: "9.2",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed | BathTub",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "550",
        amount: "5800",
        isOffer: false,
        image: "/chennai/vivvanta.jpg",
      },
    ],
  },
  {
    id: "3",
    placeName: "Delhi",
    description:"The capital of India, is a city that encapsulates the essence of the nation. It is a vibrant tapestry of history, culture, and diversity",
    image: "delhi",
    hotels: [
      {
        id:"DH1",
        name: "The Leela Palace",
        rating: "9.5",
        stars: 5,
        description: "Delux Room | 2 Queen bed | Living Room | Private Pool",
        breakfast: true,
        cancellationPolicy: false,
        taxAmount: "499",
        amount: "4500",
        isOffer: false,
        image: "/delhi/the-leela-palace-new.jpg",
      },
      {
        id:"DH2",
        name: "Taj Mahal Hotel",
        rating: "9.8",
        stars: 5,
        description: "Delux Room | 2 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "720",
        amount: "6000",
        isOffer: true,
        offer:
          "Get  INR 536 Cashback to Card on payments via credit/debit cards",
        image: "/delhi/tajmahalhotel.jpg",
      },
      {
        id:"DH3",
        name: "The Oberoi, New Delhi",
        rating: "9.7",
        stars: 4,
        description: "Super Delux Room | 2 Queen bed | 1 Kitchen",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "459",
        amount: "5300",
        isOffer: false,
        image: "/delhi/oberoi.jpg",
      },
      {
        id:"DH4",
        name: "ITC Maurya",
        rating: "9.0",
        stars: 4,
        description: "Delux Room | 1 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "710",
        amount: "5259",
        isOffer: true,
        offer: "Get 20% off on Deluxe Rooms",
        image: "/delhi/maurya.jpg",
      },
      {
        id:"DH5",
        name: "The Imperial",
        rating: "9.3",
        stars: 3,
        description: "Delux Room | 2 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "256",
        amount: "4500",
        isOffer: false,
        image: "/delhi/imperial.jpg",
      },
      {
        id:"DH6",
        name: "JW Marriott Hotel New Delhi Aerocity",
        rating: "9.0",
        stars: 5,
        description: "Delux Room | 2 Twin bed ",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "359",
        amount: "3800",
        isOffer: true,
        offer: "Get 10% off on Deluxe Rooms",
        image: "/delhi/jw-marriot.jpg",
      },
      {
        id:"DH7",
        name: "Shangri-La's - Eros Hotel",
        rating: "9.7",
        stars: 3,
        description: "Delux Room | 2 Queen bed | Living Room",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "600",
        amount: "4200",
        isOffer: false,
        image: "/delhi/shangri.jpg",
      },
      {
        id:"DH8",
        name: "The Claridges",
        rating: "9.4",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed ",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "540",
        amount: "4560",
        isOffer: false,
        image: "/delhi/claridges.jpg",
      },
      {
        id:"DH9",
        name: "Hyatt Regency Delhi",
        rating: "9.4",
        stars: 5,
        description: "Super Delux Room | 1 Queen bed ",
        breakfast: true,
        cancellationPolicy: false,
        taxAmount: "345",
        amount: "6300",
        isOffer: true,
        image: "/delhi/hyatt-regency-delhi.jpg",
        offer:
          "Get 30% OFF on your first booking with us",
      },
      {
        id:"DH10",
        name: "The Taj Palace",
        rating: "9.2",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed | BathTub",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "550",
        amount: "5800",
        isOffer: false,
        image: "/delhi/tajpalace.webp",
      },
    ],
  },
  {
    id: "4",
    placeName: "Hydrabad",
    description:"The City of Pearls, is a captivating blend of tradition and modernity. It exudes a charm that is as timeless as its historic monuments and as vibrant as its bustling markets.",
    image: "hydrabad",
    hotels: [
      {
        id:"HH1",
        name: "Taj Falaknuma Palace",
        rating: "9.5",
        stars: 5,
        description: "Delux Room | 2 Queen bed | Living Room | Private Pool",
        breakfast: true,
        cancellationPolicy: false,
        taxAmount: "499",
        amount: "4500",
        isOffer: false,
        image: "/hydrabad/falaknuma.jpg",
      },
      {
        id:"HH2",
        name: "Park Hyatt Hyderabad",
        rating: "9.8",
        stars: 4,
        description: "Delux Room | 2 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "720",
        amount: "6000",
        isOffer: true,
        offer:
          "Get  INR 536 Cashback to Card on payments via credit/debit cards",
        image: "/hydrabad/park-hyatt-hyderabad.jpg",
      },
      {
        id:"HH3",
        name: "Trident Hyderabad",
        rating: "9.7",
        stars: 4,
        description: "Super Delux Room | 2 Queen bed | 1 Kitchen",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "459",
        amount: "5300",
        isOffer: false,
        image: "/hydrabad/trident-hyderabad.jpg",
      },
      {
        id:"HH4",
        name: "ITC Kakatiya",
        rating: "9.0",
        stars: 4,
        description: "Delux Room | 1 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "710",
        amount: "5259",
        isOffer: true,
        offer: "Get 20% off on Deluxe Rooms",
        image: "/hydrabad/itc.jpg",
      },
      {
        id:"HH5",
        name: "Novotel Hyderabad Convention Centre",
        rating: "9.3",
        stars: 3,
        description: "Delux Room | 2 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "256",
        amount: "4500",
        isOffer: false,
        image: "/hydrabad/novotel.jpg",
      },
      {
        id:"HH6",
        name: "The Golkonda Hotel",
        rating: "9.0",
        stars: 4,
        description: "Delux Room | 2 Twin bed ",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "359",
        amount: "3800",
        isOffer: true,
        offer: "Get 10% off on Deluxe Rooms",
        image: "/hydrabad/golkonda.jpg",
      },
      {
        id:"HH7",
        name: "Radisson Blu Plaza Hotel",
        rating: "9.7",
        stars: 3,
        description: "Delux Room | 2 Queen bed | Living Room",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "600",
        amount: "4200",
        isOffer: false,
        image: "/hydrabad/radisson.jpg",
      },
      {
        id:"HH8",
        name: "Taj Krishna",
        rating: "9.4",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed ",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "540",
        amount: "4560",
        isOffer: false,
        image: "/hydrabad/tajkrishna.jpg",
      },
      {
        id:"HH9",
        name: "The Westin Hyderabad Mindspace",
        rating: "9.4",
        stars: 5,
        description: "Super Delux Room | 1 Queen bed ",
        breakfast: true,
        cancellationPolicy: false,
        taxAmount: "345",
        amount: "6300",
        isOffer: true,
        image: "/hydrabad/westin.jpg",
        offer:
          "Get 30% OFF on your first booking with us",
      },
      {
        id:"HH10",
        name: "Courtyard by Marriott Hyderabad",
        rating: "9.2",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed | BathTub",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "550",
        amount: "5800",
        isOffer: false,
        image: "/hydrabad/courtyard.jpg",
      },
    ],
  },
  {
    id: "5",
    placeName: "Jaipur",
    description:"The Pink City, is a kaleidoscope of colors, history, and royal splendor. With its magnificent palaces, grand forts, and vibrant bazaars.",
    image: "jaipur",
    hotels: [
      {
        id:"JH1",
        name: "Rambagh Palace",
        rating: "9.5",
        stars: 5,
        description: "Delux Room | 2 Queen bed | Living Room | Private Pool",
        breakfast: true,
        cancellationPolicy: false,
        taxAmount: "499",
        amount: "4500",
        isOffer: false,
        image: "/jaipur/rambagh.jpg",
      },
      {
        id:"JH2",
        name: "Radisson Jaipur City Center",
        rating: "9.8",
        stars: 5,
        description: "Delux Room | 2 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "720",
        amount: "6000",
        isOffer: true,
        offer:
          "Get  INR 536 Cashback to Card on payments via credit/debit cards",
        image: "/jaipur/radisson.jpg",
      },
      {
        id:"JH3",
        name: "Taj Jai Mahal Palace",
        rating: "9.7",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed | 1 Kitchen",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "459",
        amount: "5300",
        isOffer: false,
        image: "/jaipur/tajjai.jpg",
      },
      {
        id:"JH4",
        name: "The Oberoi Rajvilas",
        rating: "9.0",
        stars: 4,
        description: "Delux Room | 1 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "710",
        amount: "5259",
        isOffer: true,
        offer: "Get 20% off on Deluxe Rooms",
        image: "/jaipur/oberoi.webp",
      },
      {
        id:"JH5",
        name: "Fairmont Jaipur",
        rating: "9.3",
        stars: 4,
        description: "Delux Room | 2 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "256",
        amount: "4500",
        isOffer: false,
        image: "/jaipur/fairmont.jpg",
      },
      {
        id:"JH6",
        name: "Trident Jaipur",
        rating: "9.0",
        stars: 4,
        description: "Delux Room | 2 Twin bed ",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "359",
        amount: "3800",
        isOffer: true,
        offer: "Get 10% off on Deluxe Rooms",
        image: "/jaipur/trident.jpg",
      },
      {
        id:"JH7",
        name: "Samode Haveli",
        rating: "9.7",
        stars: 5,
        description: "Delux Room | 2 Queen bed | Living Room",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "600",
        amount: "4200",
        isOffer: false,
        image: "/jaipur/samode.jpg",
      },
      {
        id:"JH8",
        name: "ITC Rajputana",
        rating: "9.4",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed ",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "540",
        amount: "4560",
        isOffer: false,
        image: "/jaipur/itc.jpg",
      },
      {
        id:"JH9",
        name: "Alila Fort Bishangarh",
        rating: "9.4",
        stars: 5,
        description: "Super Delux Room | 1 Queen bed ",
        breakfast: true,
        cancellationPolicy: false,
        taxAmount: "345",
        amount: "6300",
        isOffer: true,
        image: "/jaipur/alila.jpg",
        offer:
          "Get 30% OFF on your first booking with us",
      },
      {
        id:"JH10",
        name: "Jaipur Marriott Hotel",
        rating: "9.2",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed | BathTub",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "550",
        amount: "5800",
        isOffer: false,
        image: "/jaipur/marriott.jpg",
      },
    ],
  },
  {
    id: "6",
    placeName: "Kolkata",
    description:"The City of Joy, is an enchanting symphony of art, intellect, and cultural diversity. It is a city that pulsates with life, captivating you with its vibrant festivals.",
    image: "kolkata",
    hotels: [
      {
        id:"KH1",
        name: "The Oberoi Grand",
        rating: "9.5",
        stars: 5,
        description: "Delux Room | 2 Queen bed | Living Room | Private Pool",
        breakfast: true,
        cancellationPolicy: false,
        taxAmount: "499",
        amount: "4500",
        isOffer: false,
        image: "/kolkata/oberoi.jpg",
      },
      {
        id:"KH2",
        name: "Taj Bengal",
        rating: "9.8",
        stars: 5,
        description: "Delux Room | 2 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "720",
        amount: "6000",
        isOffer: true,
        offer:
          "Get  INR 536 Cashback to Card on payments via credit/debit cards",
        image: "/kolkata/taj.jpg",
      },
      {
        id:"KH3",
        name: "ITC Sonar",
        rating: "9.7",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed | 1 Kitchen",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "459",
        amount: "5300",
        isOffer: false,
        image: "/kolkata/itc.jpg",
      },
      {
        id:"KH4",
        name: "JW Marriott Hotel Kolkata",
        rating: "9.0",
        stars: 3,
        description: "Delux Room | 1 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "710",
        amount: "5259",
        isOffer: true,
        offer: "Get 20% off on Deluxe Rooms",
        image: "/kolkata/marriott.jpg",
      },
      {
        id:"KH5",
        name: "The Lalit Great Eastern Kolkata",
        rating: "9.3",
        stars: 4,
        description: "Delux Room | 2 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "256",
        amount: "4500",
        isOffer: false,
        image: "/kolkata/lalit.jpg",
      },
      {
        id:"KH6",
        name: "Hyatt Regency Kolkata",
        rating: "9.0",
        stars: 4,
        description: "Delux Room | 2 Twin bed ",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "359",
        amount: "3800",
        isOffer: true,
        offer: "Get 10% off on Deluxe Rooms",
        image: "/kolkata/hyatt.jpg",
      },
      {
        id:"KH7",
        name: "Swissotel Kolkata",
        rating: "9.7",
        stars: 5,
        description: "Delux Room | 2 Queen bed | Living Room",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "600",
        amount: "4200",
        isOffer: false,
        image: "/kolkata/swiss.jpg",
      },
      {
        id:"KH8",
        name: "Novotel Kolkata Hotel & Residences",
        rating: "9.4",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed ",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "540",
        amount: "4560",
        isOffer: false,
        image: "/kolkata/novotel.jpg",
      },
      {
        id:"KH9",
        name: "The Park Kolkata",
        rating: "9.4",
        stars: 5,
        description: "Super Delux Room | 1 Queen bed ",
        breakfast: true,
        cancellationPolicy: false,
        taxAmount: "345",
        amount: "6300",
        isOffer: true,
        image: "/kolkata/park.jpg",
        offer:
          "Get 30% OFF on your first booking with us",
      },
      {
        id:"KH10",
        name: "Floatel Hotel",
        rating: "9.2",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed | BathTub",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "550",
        amount: "5800",
        isOffer: false,
        image: "/kolkata/floatel.jpg",
      },
    ],
  },
  {
    id: "7",
    placeName: "Mumbai",
    description:"The City of Joy, is an enchanting symphony of art, intellect, and cultural diversity. It is a city that pulsates with life, captivating you with its vibrant festivals.",
    image: "mumbai",
    hotels: [
      {
        id:"MH1",
        name: "The Taj Mahal Palace",
        rating: "9.5",
        stars: 5,
        description: "Delux Room | 2 Queen bed | Living Room | Private Pool",
        breakfast: true,
        cancellationPolicy: false,
        taxAmount: "499",
        amount: "4500",
        isOffer: false,
        image: "/mumbai/taj.jpg",
      },
      {
        id:"MH2",
        name: "The Oberoi Mumbai",
        rating: "9.8",
        stars: 5,
        description: "Delux Room | 2 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "720",
        amount: "6000",
        isOffer: true,
        offer:
          "Get  INR 536 Cashback to Card on payments via credit/debit cards",
        image: "/mumbai/oberoi.jpg",
      },
      {
        id:"MH3",
        name: "Trident, Nariman Point",
        rating: "9.7",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed | 1 Kitchen",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "459",
        amount: "5300",
        isOffer: false,
        image: "/mumbai/trident.jpg",
      },
      {
        id:"MH4",
        name: "JW Marriott Mumbai Juhu",
        rating: "9.0",
        stars: 4,
        description: "Delux Room | 1 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "710",
        amount: "5259",
        isOffer: true,
        offer: "Get 20% off on Deluxe Rooms",
        image: "/mumbai/jw.jpg",
      },
      {
        id:"MH5",
        name: "ITC Grand Central",
        rating: "9.3",
        stars: 4,
        description: "Delux Room | 2 Queen bed ",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "256",
        amount: "4500",
        isOffer: false,
        image: "/mumbai/itc.jpg",
      },
      {
        id:"MH6",
        name: "Grand Hyatt Mumbai Hotel & Residences",
        rating: "9.0",
        stars: 4,
        description: "Delux Room | 2 Twin bed ",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "359",
        amount: "3800",
        isOffer: true,
        offer: "Get 10% off on Deluxe Rooms",
        image: "/mumbai/hyatt.jpg",
      },
      {
        id:"MH7",
        name: "The Leela Mumbai",
        rating: "9.7",
        stars: 5,
        description: "Delux Room | 2 Queen bed | Living Room",
        breakfast: false,
        cancellationPolicy: true,
        taxAmount: "600",
        amount: "4200",
        isOffer: false,
        image: "/mumbai/leela.jpg",
      },
      {
        id:"MH8",
        name: "The St. Regis Mumbai",
        rating: "9.4",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed ",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "540",
        amount: "4560",
        isOffer: false,
        image: "/mumbai/st.jpg",
      },
      {
        id:"MH9",
        name: "Four Seasons Hotel Mumbai",
        rating: "9.4",
        stars: 5,
        description: "Super Delux Room | 1 Queen bed ",
        breakfast: true,
        cancellationPolicy: false,
        taxAmount: "345",
        amount: "6300",
        isOffer: true,
        image: "/mumbai/seasons.jpg",
        offer:
          "Get 30% OFF on your first booking with us",
      },
      {
        id:"MH10",
        name: "The Westin Mumbai Garden City",
        rating: "9.2",
        stars: 5,
        description: "Super Delux Room | 2 Queen bed | BathTub",
        breakfast: true,
        cancellationPolicy: true,
        taxAmount: "550",
        amount: "5800",
        isOffer: false,
        image: "/mumbai/westin.jpg",
      },
    ],
  },

];

export default places;
