const sampleListings = [
    {
        hotelName: "Krishna Boys Hostel",
        hostelDescription:
          "A comfortable and affordable boys' hostel located near major educational institutions, providing top-notch facilities with a homely atmosphere.",
        image: {
        filename :"listingimage",
        url :"https://media.istockphoto.com/id/1253810426/photo/empty-room-for-a-cheap-hostel-with-bunk-beds.jpg?s=2048x2048&w=is&k=20&c=BBYva2kFzqxcvrBf9Qje9Pb71k_Yq2n7bVKFNh--WZo="
        },
        price: 7500,
        location: "Indore",
        country: "India",
        contact:{
        phone: "+91-9876543210",  // Added phone number
        email: "contact@krishna-hostel.com"
        }
      },
      {
        hotelName: "Laxmi Girls Hostel",
        hostelDescription:
          "A safe and secure girls' hostel offering modern amenities, located in a prime area. Ideal for female students and working professionals.",
          image: {
            filename :"listingimage",
          url : "https://images.unsplash.com/photo-1709805619372-40de3f158e83?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        price: 7200,
        location: "Bhopal",
        country: "India",
        contact:{
        phone: "+91-9123456789",  // Added phone number
        email: "contact@laxmi-hostel.com"
        }
      },
      {
        hotelName: "Shivaji Boys Hostel",
        hostelDescription:
          "An ideal accommodation for students and young professionals, offering excellent facilities and a disciplined environment.",
          image: {
            filename :"listingimage",
          url : "https://media.istockphoto.com/id/1464143895/photo/hostel-dormitory-beds-at-cheap-room.jpg?s=2048x2048&w=is&k=20&c=KTe6Gxh9fE06uw4BFtrjsRdaWtToBXsjGJcTpXnJruA=",
          },
          price: 6000,
        location: "Pune",
        country: "India",
        phone: "+91-9988776655",  // Added phone number
        email: "contact@shivaji-hostel.com"
      },
      {
        hotelName: "Saraswati Girls Hostel",
        hostelDescription:
          "A top-rated girls' hostel that offers safety, security, and comfort for students pursuing higher education, with all essential facilities.",
          image: {
            filename :"listingimage",
            url : "https://media.istockphoto.com/id/1396391190/photo/bright-white-modern-interior-with-dual-layered-bunk-bed-grey-curtain-and-travel-suitcase-in.jpg?s=2048x2048&w=is&k=20&c=DPRJAjcB867_3hlgbTNsBDupreKcnfx7Ey8RAD7LP-M=",
          },
            price: 9500,
        location: "Delhi",
        country: "India",
        contact:{
        phone: "+91-9988776655",  // Added phone number
        email: "contact@SaraswatiGirlsHostel.com"
        }
      },
      {
        hotelName: "Vivekananda Boys Hostel",
        hostelDescription:
          "Located near top colleges, this boys' hostel offers a disciplined environment with modern amenities for a comfortable stay.",
          image: {
            filename :"listingimage",
            url : "https://media.istockphoto.com/id/478713668/photo/small-hostel-room-with-bunk-beds.jpg?s=2048x2048&w=is&k=20&c=OVcWG7zOw_t104Xz4g8OymR38ssClo-mgivZQJPLkzo=",
          },
            price: 4500,
        location: "Chennai",
        country: "India",
        contact:{
        phone: "+91-8765432109",
        email: "contact@Vivekananda Boys Hostel.com"
        }
      },
      {
        hotelName: "Radha Girls Hostel",
        hostelDescription:
          "A well-maintained girls' hostel offering safe and clean accommodations with proximity to educational institutions and city amenities.",
          image: {
            filename :"listingimage",
           url : "https://media.istockphoto.com/id/179810656/photo/hotel-bedroom.jpg?s=2048x2048&w=is&k=20&c=2J8E-G-G9BlxNG0xIiB9ruiQXzu9ifwYDs_Lai-_pT8=",
          },   
        price: 8050,
        location: "Mumbai",
        country: "India",
        contact:{
        phone: "+91-9345678901",
        email: "contact@Radha-GirlsHostel.com"
        }
      },
     {
      hotelName: "Bharati Boys Hostel",
      hostelDescription:
        "This hostel provides an enriching atmosphere for male students, offering excellent study spaces and nutritious meals, perfect for academic-focused living.",
        image: {
          filename :"listingimage",
          url : "https://media.istockphoto.com/id/1478366472/photo/cheap-hostel-room-with-wooden-bunk-beds.jpg?s=2048x2048&w=is&k=20&c=yqGXIMDOlCVf49C4HwUQ3bMlDise5wdV1_Wv_yfbbN4=",
        },
          price: 2050,
      location: "Bangalore",
      country: "India",
      contact:{
      phone: "+91-9988772233",
      email: "contact@BharatiBoysHostel.com"
      }
    },
    {
      hotelName: "Durga Girls Hostel",
      hostelDescription:
        "Located near prestigious institutions, this girls' hostel is renowned for its safety, cleanliness, and the well-being of its residents.",
        image: {
          filename :"listingimage",
      url : "https://media.istockphoto.com/id/2155571824/photo/vintage-colonial-red-brick-building-balcony-corridor.jpg?s=612x612&w=is&k=20&c=msF37SOVwsG4xALcafybPNNIPv2vAEN4wjxidfty6N4=",
        }, 
     price: 9000,
      location: "Kolkata",
      country: "India",
      contact:{
      phoner: "+91-9123456677",
      email: "contact@DurgaGirlsHostel.com"
      }
    },
    {
      hotelName: "Aryabhata Boys Hostel",
      hostelDescription:
        "A technologically equipped boys' hostel, offering residents the perfect environment to focus on studies while staying connected to modern conveniences.",
        image: {
          filename :"listingimage",
       url :  "https://media.istockphoto.com/id/1303062085/photo/the-apartment-night-view-with-japanese-text-fire-hydrant.jpg?s=2048x2048&w=is&k=20&c=mcxYUojfEvDKmp6dj7wx0TjeopReO0VtBb66wp-o5Ks=",
        },
       price: 8350,
      location: "Hyderabad",
      country: "India",
      contact:{
      phone: "+91-9876543210",  // Added phone number
      email: "contact@Aryabhata-BoysHostel.com"
      }
    },
    {
      hotelName: "Meera Girls Hostel",
      hostelDescription:
        "With modern infrastructure and round-the-clock security, this hostel provides a peaceful environment for female students looking to excel in their studies.",
        image: {
          filename :"listingimage",
          url : "https://media.istockphoto.com/id/1731530956/photo/the-old-house.jpg?s=2048x2048&w=is&k=20&c=e0Yx1piM6tJZPDXZLR_8LH4PdPPH0hPRx2WpUPxzlVM=",
        },
     price: 6950,
      location: "Jaipur",
      country: "India",
      contact:{
      phone: "+91-9876543210",  // Added phone number
      email: "contact@MeeraGirlsHostel.com"
      }
      
      
    },
    {
      hotelName: "Tagore Boys Hostel",
      hostelDescription:
        "A hostel dedicated to fostering a community of students, encouraging collaboration and personal growth, with easy access to campus and recreational facilities.",
        image: {
          filename :"listingimage",
          url :  "https://media.istockphoto.com/id/2151001467/photo/view-of-the-residential-building-at-night-bengaluru-india.jpg?s=2048x2048&w=is&k=20&c=x5mpWPc2FeZH-bH7ZmBlgsTbjQSOvWlANlLgrY_Bl0k=",
        },
          price: 8700,
      location: "Ahmedabad",
      country: "India",
      contact:{
      phoneNumber: "+91-9876543210",  // Added phone number
      email: "contact@TagoreBoysHostel.com"
      }
    },
    {
      hotelName: "Parvati Girls Hostel",
      hostelDescription:
        "Offering state-of-the-art facilities, this girls' hostel focuses on providing a secure, welcoming environment where students can focus on their academic goals.",
        image: {
          filename :"listingimage",
          url : "https://media.istockphoto.com/id/1396391190/photo/bright-white-modern-interior-with-dual-layered-bunk-bed-grey-curtain-and-travel-suitcase-in.jpg?s=2048x2048&w=is&k=20&c=DPRJAjcB867_3hlgbTNsBDupreKcnfx7Ey8RAD7LP-M=",
        },
          price: 7600,
      location: "Lucknow",
      country: "India",
      contact:{
      phone: "+91-9876543210",  // Added phone number
      email: "contact@ParvatiGirlsHostel.com"
      }
    },
    {
        hotelName: "Raman Boys Hostel",
        hostelDescription:
          "An affordable boys' hostel offering a conducive environment for students, equipped with modern amenities and study spaces.",
          image: {
            filename :"listingimage",
        url:    "https://media.istockphoto.com/id/2151001467/photo/view-of-the-residential-building-at-night-bengaluru-india.jpg?s=612x612&w=is&k=20&c=7f5tef_-wIVK2C-WkX0IcjUaUaJiZWTFvmmCfhFcLpI=",
          },
        price: 5000,
        location: "Patna",
        country: "India",
        contact:{
        phone: "+91-9876543210",  // Added phone number
        email: "contact@RamanBoysHostel.com"
        }
      },
      {
        hotelName: "Sarojini Girls Hostel",
        hostelDescription:
          "A highly reputed girls' hostel known for its safety measures, homely environment, and proximity to universities and colleges.",
          image: {
            filename :"listingimage",
            url:  "https://media.istockphoto.com/id/1208846281/photo/flats-and-apartments-at-dusk-real-estate-and-property.jpg?s=612x612&w=is&k=20&c=nJFN1TYF6uddSSmXIpRkfSyCryk6z5JCzyUCadNL2PY=",
          },
         price: 6500,
        location: "Varanasi",
        country: "India",
        contact:{
        phone: "+91-9876543210",  // Added phone number
      email: "contact@SarojiniGirlsHostel.com"
        }
      },
      {
        hotelName: "Bhagat Singh Boys Hostel",
        hostelDescription:
          "Offering spacious rooms and a peaceful environment, this boys' hostel is perfect for students who need a quiet space to focus on their studies.",
          image: {
            filename :"listingimage",
            url: "https://media.istockphoto.com/id/1365872575/photo/condominium-roma.jpg?s=612x612&w=is&k=20&c=ugkxsliVRRJ7zEtqQqrlHiyLykoxpYOyFTvk6VC-5G8=",
          },
            price: 7000,
        location: "Raipur",
        country: "India",
        contact:{
        phone: "+91-9876543210",  // Added phone number
      email: "contact@BhagatSinghBoysHostel.com"
        }
      },
    {
      hotelName: "Indira Girls Hostel",
      hostelDescription:
        "This well-maintained girls' hostel provides all essential amenities and a comfortable living space for female students and professionals.",
        image: {
          filename :"listingimage",
         url: "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
        },
         price: 9800,
      location: "Surat",
      country: "India",
      contact:{
       phone: "+91-9345678901",
      email: "contact@IndiraGirls-Hostel.com"
      }
    },
    {
        hotelName: "Rajiv Gandhi Boys Hostel",
        hostelDescription:
          "This centrally located boys' hostel offers an excellent balance of affordability and convenience, with access to all city amenities.",
          image: {
            filename :"listingimage",
            url: "https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kb29yfGVufDB8fDB8fHww",
          },     
       price: 9850,
        location: "Nagpur",
        country: "India",
        contact:{
         phone: "+91-9345678901",
        email: "contact@Rajiv-GandhiHostel.com"
        }
      },
    {
        hotelName: "Tagore Co-ed Hostel",
        hostelDescription:
          "A co-ed hostel with modern facilities, offering a diverse and inclusive environment for both boys and girls, located close to major educational institutions.",
          image: {
            filename :"listingimage",
          url: "https://media.istockphoto.com/id/1807513596/photo/arriving-at-my-room.jpg?s=2048x2048&w=is&k=20&c=2ilQZqBP3LAUj9qBHEOCysbZ-vWB_n3ZYSDW777n48g=",
          },
          price: 4040,
        location: "Delhi",
        country: "India",
        contact:{
        phone: "+91-9988772233",
        email: "contact@TagoreHostel.com"
        }
        
      },
      {
        hotelName: "Vivekananda Boys Hostel",
        hostelDescription:
          "This hostel provides a safe and comfortable space for boys, with excellent study areas and recreational facilities.",
          image: {
            filename :"listingimage",
          url: "https://media.istockphoto.com/id/1025268270/photo/modern-apartment-building-exterior-retro-colors-stylization.jpg?s=2048x2048&w=is&k=20&c=oBv-dN7M13faNEvJPj7L0co8lNpUDTiCnsz7EnJr1cs=",
          },
          price: 8900,
        location: "Bangalore",
        country: "India",
        contact:{
        phone: "+91-9988772233",
        email: "contact@VivekanandaHostel.com"
        }
      },
      {
        hotelName: "Annapurna Girls Hostel",
        hostelDescription:
          "A well-known girls' hostel that ensures safety, a homely atmosphere, and a peaceful living environment for female students.",
          image: {
            filename :"listingimage",
         url : "https://media.istockphoto.com/id/1807513596/photo/arriving-at-my-room.jpg?s=2048x2048&w=is&k=20&c=2ilQZqBP3LAUj9qBHEOCysbZ-vWB_n3ZYSDW777n48g=",
          },
         price: 10000,
        location: "Hyderabad",
        country: "India",
        contact:{
        phone: "+91-9988772233",
        email: "contact@AnnapurnaHostel.com"
        }
      },
      {
        hotelName: "Ashoka Co-ed Residency",
        hostelDescription:
          "A premium co-ed hostel designed for comfort and convenience, offering high-quality services and an active social community for students.",
          image: {
            filename :"listingimage",
            url : "https://media.istockphoto.com/id/1025268270/photo/modern-apartment-building-exterior-retro-colors-stylization.jpg?s=2048x2048&w=is&k=20&c=oBv-dN7M13faNEvJPj7L0co8lNpUDTiCnsz7EnJr1cs=",
          },
            price: 8600,
        location: "Mumbai",
        country: "India",
        contact:{
        phone: "+91-9988772233",
        email: "contact@AshokaResidency.com"
        }
        
      },
      {
        hotelName: "Kaveri Girls Hostel",
        hostelDescription:
          "Located near major colleges, this girls' hostel offers secure and comfortable living arrangements, with 24/7 security and modern amenities.",
          image: {
            filename :"listingimage",
            url : "https://media.istockphoto.com/id/182872781/photo/campus.jpg?s=612x612&w=is&k=20&c=zjU1rTGCtKYTLDFjiwLZUEvZnrzjCTowU2HYb3LSezw=",
          },
        price: 9000,
        location: "Chennai",
        country: "India",
        contact:{
        phone: "+91-9988772233",
        email: "contact@Kaveri-Girls-Hostel.com"
        }
      },
      {
        hotelName: "Nalanda Co-ed Hostel",
        hostelDescription:
          "Offering a blend of modern amenities and traditional values, this co-ed hostel fosters a positive atmosphere for collaborative learning and personal growth.",
          image: {
            filename :"listingimage",
           url : "https://media.istockphoto.com/id/1807513596/photo/arriving-at-my-room.jpg?s=2048x2048&w=is&k=20&c=2ilQZqBP3LAUj9qBHEOCysbZ-vWB_n3ZYSDW777n48g=",
          },
        price: 7650,
        location: "Pune",
        country: "India",
        contact:{
        phone: "+91-9988772233",
        email: "contact@Nalanda-coed.com"
        }
      },
      {
        hotelName: "Aravali Boys Hostel",
        hostelDescription:
          "An affordable boys' hostel known for its disciplined atmosphere, large study halls, and proximity to local colleges and universities.",
          image: {
            filename :"listingimage",
            url : "https://media.istockphoto.com/id/1576016214/photo/modern-beach-huts.jpg?s=2048x2048&w=is&k=20&c=wh8RYmH_fq8XxWd_6ve-ZY3Fi5QJRPLvvLa7GzAZwzs=",
          },
            price: 8700,
        location: "Jaipur",
        country: "India",
        contact:{
        phone: "+91-9988772233",
        email: "contact@Aravali.com"
        }
      },
      {
        hotelName: "Shakti Girls Hostel",
        hostelDescription:
          "Offering a nurturing environment, this girls' hostel is highly regarded for its safety, cleanliness, and supportive staff.",
          image: {
            filename :"listingimage",
          url : "https://media.istockphoto.com/id/1025268270/photo/modern-apartment-building-exterior-retro-colors-stylization.jpg?s=2048x2048&w=is&k=20&c=oBv-dN7M13faNEvJPj7L0co8lNpUDTiCnsz7EnJr1cs=",
        },
          price: 5420,
        location: "Lucknow",
        country: "India",
        contact:{
        phone: "+91-9988772233",
        email: "contact@shaktigirlshostel.com"
        }
      },
      {
        hotelName: "Chandragupta Co-ed Hostel",
        hostelDescription:
          "This co-ed hostel offers a vibrant atmosphere with a focus on both academic and personal development, fostering strong student interactions.",
          image: {
            filename :"listingimage",
            url :  "https://media.istockphoto.com/id/1576016214/photo/modern-beach-huts.jpg?s=2048x2048&w=is&k=20&c=wh8RYmH_fq8XxWd_6ve-ZY3Fi5QJRPLvvLa7GzAZwzs=",
          },
           price: 8200,
        location: "Bhopal",
        country: "India",
        contact:{
        phone: "+91-9988772233",
        email: "contact@Chandragupta.com"
        }
      },
      {
        hotelName: "Kamala Nehru Girls Hostel",
        hostelDescription:
          "A premier girls' hostel known for its friendly environment, excellent services, and close proximity to academic centers.",
          image: {
            filename :"listingimage",
            url : "https://media.istockphoto.com/id/1459028240/photo/large-windows-and-spacious-office-with-desks-and-green-plants-behind.jpg?s=2048x2048&w=is&k=20&c=cgjuVnc8hqSnIi2RMquIRD1a_1Naks_RyT1mZBOSE50=",
          },
            price: 4300,
        location: "Indore",
        country: "India",
        contact:{
        phone: "+91-9876543210",  // Added phone number
        email: "contact@KamalaNehruGirlsHostel.com"
        }
      }
  ];
  
  module.exports = { data: sampleListings };