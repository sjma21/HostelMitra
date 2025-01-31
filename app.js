if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash =  require("connect-flash");
const Review = require("./models/review.js");
const cookie = require("express-session/session/cookie.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const multer = require('multer');
const {storage} = require("./cloudConfig.js");
const upload = multer({ storage});


const userRouter = require("./models/user.js");
const { isLoggedIn, saveRedirectUrl,isOwner , isReviewAuthor} = require("./middleware.js");


const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding.js");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({accessToken : mapToken});

// const MONGO_URL = "mongodb://127.0.0.1:27017/HostelMitra";
const dbUrl = process.env.ATLASDB_URL

const authRoutes = require('./routes/auth');







// const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const User = require('./models/User'); // Your User model
const sendWelcomeEmail = require('./utils/mailer'); // Email utility

passport.use(new GoogleStrategy({
    clientID: '231860362805-jqt3jbbs7fe0umsau4q15ttjcg4tjqjq.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'https://hostelmitra.onrender.com/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        user = await User.findOne({ email: profile.emails[0].value });
        if (!user) {
          user = await User.create({
            googleId: profile.id,
            email: profile.emails[0].value,
            firstName: profile.name?.givenName || 'Google User',
            lastName: profile.name?.familyName || '',
            username: profile.emails[0].value.split('@')[0]
          });
          sendWelcomeEmail(user.email); // Send welcome email for new users
        }
      }

      done(null, user);
    } catch (error) {
      done(error, null);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});



main().then(()=>{
    console.log("Connected to db");
}).catch(err=>{
   console.log(err);
});
async function main(){
    await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname , "public")));


const store = MongoStore.create({
    mongoUrl : dbUrl,
    crypto : {
        secret : process.env.SECRET
    },
    touchAfter : 24 * 3600,
})

store.on("error", ()=>{
    console.log("Error in Mongo Session store" , err);
})
const sessionOptions = {
    store,
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
    }

};


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

app.use(authRoutes);

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currUser = req.user;
    next();
});


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next);
    };
}



app.get("/", async(req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/homepage.ejs" , {allListings});
})

// search
app.get("/search", async (req, res) => {
    const { location, name } = req.query;  // Get query params from URL
    let filter = {};  // Initialize filter object

    // Build filter for location and name
    if (location) {
        filter.location = { $regex: `^${location}$`, $options: 'i' };  // Search for full location match
    }
    if (name) {
        filter.hotelName = { $regex: `^${name}$`, $options: 'i' };  // Search for full name match
    }

    // Fetch listings that match the filter
    const filteredListings = await Listing.find(filter);

    // Render the search results page with the filtered listings
    res.render("listings/searchResults.ejs", { filteredListings, location, name });
});
    
 
    



// Index Route
app.get("/listings", async (req, res) => {
    const filter = req.query.filter;
    let allListings;

    switch (filter) {
        case "price-low":
            allListings = await Listing.find().sort({ price: 1 }); // Low to High
            break;
        case "price-high":
            allListings = await Listing.find().sort({ price: -1 }); // High to Low
            break;
      
        
        case "single-room":
            allListings = await Listing.find({ roomType: "single" }); // Filter single rooms
            break;
        case "shared-room":
            allListings = await Listing.find({ roomType: "shared" }); // Filter shared rooms
            break;
      case "girls-only":
      allListings = await Listing.find({ hostelType: "girls-only" });
      break;
     case "boys-only":
      allListings = await Listing.find({ hostelType: "boys-only" });
      break;
      case "coed":
      allListings = await Listing.find({ hostelType: "coed" });
      break;
        default:
            allListings = await Listing.find(); // Show all listings if no filter
    }

    res.render("listings/index", { allListings, filter });
});


app.get("/about",(req,res)=>{
 
    res.render("listings/team.ejs");
});

app.get("/contact", (req,res)=>{
    res.render("listings/contact.ejs");
})
app.get("/privacy", (req,res)=>{
    res.render("listings/privacy.ejs");
})

// New Route:
app.get("/listings/new",isLoggedIn, (req,res)=>{
   
    res.render("listings/new.ejs");
})

// Show route:
app.get("/listings/:id", async(req,res)=>{
    let {id} = req.params;
    const listing =  await Listing.findById(id)
    .populate({path : "reviews",

        populate:{
            path : "author",
        },
    })
    .populate("owner");
    const { filter } = req.query;
     console.log(filter);
    if(!listing){
        req.flash('error', 'The hostel listing you are trying to access has been deleted or does not exist.');
        res.redirect("/listings");
    }
    console.log(listing);
    
    res.render("listings/show.ejs", {listing});
})









// Create Route:
app.post("/listings",isLoggedIn,upload.single('listing[image]'), async(req,res)=>{

    let response = await geocodingClient.forwardGeocode({
        query : req.body.listing.location,
        limit : 1,
    })
    .send();
    let url = req.file.path;
    let filename = req.file.filename;

  
   const newListing =  new Listing(req.body.listing);
   console.log(req.user);
   newListing.owner = req.user._id;
   newListing.image = {url , filename};
   newListing.geometry = response.body.features[0].geometry;
   let savedListing = await newListing.save();
   console.log(savedListing);
   req.flash('success', 'New Hostel added successfully!');
   res.redirect("/listings");    
})



// Edit Route:

app.get("/listings/:id/edit", isLoggedIn,isOwner,async(req,res)=>{
    let {id} = req.params;
    const listing =  await Listing.findById(id);
    if(!listing){
        req.flash('error', 'The hostel listing you are trying to access has been deleted or does not exist.');
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs", {listing});
});


//Update Route:
app.put("/listings/:id",isLoggedIn,isOwner,upload.single('listing[image]'), async(req,res)=>{
    let {id} = req.params;
    let listing =  await  Listing.findByIdAndUpdate(id , {...req.body.listing});

    if( typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename};
    await listing.save();
    }
   req.flash('success', 'Hostel listing updated successfully!');
   res.redirect(`/listings/${id}`);

})


//Delete Route:
app.delete("/listings/:id", isLoggedIn,isOwner,async(req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash('success', 'Hostel removed from the platform.');
    res.redirect("/listings");
})

// REviews post routes:
app.post("/listings/:id/reviews",isLoggedIn,async(req,res)=>{
   let listing = await Listing.findById(req.params.id);
   let newReview = new Review(req.body.review);
   newReview.author = req.user._id;
   console.log(newReview);
   listing.reviews.push(newReview);

  await  newReview.save();
  await  listing.save();
  req.flash('success', 'Your review has been posted successfully.');
res.redirect(`/listings/${listing._id}`);
})

// Delete Review Route:
app.delete("/listings/:id/reviews/:reviewId",isLoggedIn, isReviewAuthor , async(req,res)=>{
    let {id , reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId} });
   await  Review.findByIdAndDelete(reviewId);
   req.flash('success', 'Your Review has been removed successfully!');
   res.redirect(`/listings/${id}`);
});



app.get("/signup" , async(req,res)=>{
    res.render("users/signUp.ejs");
})

app.post("/signup", wrapAsync(async (req, res) => {
    try {
        const { username, email, password, firstName, lastName, phoneNumber } = req.body;
        const newUser = new User({ username, email, firstName, lastName, phoneNumber });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err)=>{
            if(err){
                return next(err);
            }
            req.flash('success', 'Welcome to HostelMitra! Your account has been created.');
            res.redirect("/listings");
        })
        
    } catch (e) {
        // Handle different error cases and flash user-friendly error messages
        if (e.name === 'UserExistsError') {
            req.flash('error', 'Username is already taken. Please try a different one.');
        } else if (e.name === 'ValidationError') {
            req.flash('error', 'Please fill all required fields correctly.');
        } else {
            req.flash('error', 'Something went wrong, please try again.');
        }
        res.redirect("/signup");
    }
}));


app.get("/login" , (req,res)=>{
    res.render("users/login.ejs");
})

app.post('/login', saveRedirectUrl,passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true  // This will set the error flash message
}), (req, res) => {
    req.flash('success', 'Welcome back to HostelMitra!');  // Set success flash message
    let redirect = res.locals.redirectUrl || "/listings"; 
    res.redirect(redirect);
});



// google login:

// app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
//     (req, res) => {
//         res.redirect('/');
//     }
// );
// Route to handle comparison


// Comparison route
app.get("/compare", async (req, res) => {
    try {
        // Directly use req.query.hostelIds since it's already an array
        const hostelIds = req.query.hostelIds;

        // Log to confirm hostelIds contents
        console.log("Parsed hostelIds:", hostelIds);

        if (!hostelIds || hostelIds.length < 2) {
            req.flash("error", "Please select at least two hostels to compare.");
            return res.redirect("/listings");
        }

        const hostels = await Listing.find({ _id: { $in: hostelIds } }).populate("owner");

        if (hostels.length < 2) {
            req.flash("error", "Unable to fetch the selected hostels for comparison.");
            return res.redirect("/listings");
        }

        // Determine the recommended hostel based on price
        const recommendedHostel = hostels.reduce((prev, curr) => (prev.price < curr.price ? prev : curr), hostels[0]);

        res.render("listings/compare", { hostels, recommendedHostel });
    } catch (err) {
        console.error("Error fetching hostels:", err);
        req.flash("error", "Error fetching hostels.");
        res.redirect("/listings");
    }
});




// User Dashboard Route






app.get("/logout" , (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success" , "You are logged out now!");
        res.redirect("/listings");
    })
})




app.listen(8080,()=>{
    console.log("Server is listening to port 8080");
})