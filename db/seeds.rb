# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Business.delete_all
Address.delete_all
Hour.delete_all
Comment.delete_all
Rate.delete_all


admin1 = User.create!({ username: ENV['ADMIN_AC'], password: ENV['ADMIN_PW'], role: 'Admin' })
u1 = User.create!({ username: ENV['DB_SEED_U1'], password: ENV['DB_SEED_P1'] })
u2 = User.create!({ username: ENV['DB_SEED_U2'], password: ENV['DB_SEED_P2'] })
u3 = User.create!({ username: ENV['DB_SEED_U3'], password: ENV['DB_SEED_P3'] })
u4 = User.create!({ username: ENV['DB_SEED_U4'], password: ENV['DB_SEED_P4'] })
u5 = User.create!({ username: ENV['DB_SEED_U5'], password: ENV['DB_SEED_P5'] })
u6 = User.create!({ username: ENV['DB_SEED_U6'], password: ENV['DB_SEED_P6'] })
u7 = User.create!({ username: ENV['DB_SEED_U7'], password: ENV['DB_SEED_P7'] })
u8 = User.create!({ username: ENV['DB_SEED_U8'], password: ENV['DB_SEED_P8'] })
u9 = User.create!({ username: ENV['DB_SEED_U9'], password: ENV['DB_SEED_P9'] })
u10 = User.create!({ username: ENV['DB_SEED_U10'], password: ENV['DB_SEED_P10'] })

b1 = Business.create!({
  name: "McDonald's",
  description: "Fast food restaurant",
  phone: "5108873021"
})

a1 = Address.create!({
  business_id: b1.id,
  address_first: "2299",
  address_second: "",
  street: "W Tennyson Rd",
  city: "Hayward",
  state: "CA",
  zip: "94545",
  lat: 37.6313705, 
  lng: -122.0964926
})

h1 = Hour.create!({
  business_id: b1.id,
  hours_mon: "0500-0200",
  hours_tue: "0500-0200",
  hours_wed: "0500-0200",
  hours_thu: "0500-0200",
  hours_fri: "0000-0000",
  hours_sat: "0000-0000",
  hours_sun: "0500-0200"
})

b2 = Business.create!({
  name: "Jack in the Box",
  description: "Fast food restaurant",
  phone: "5108765475"
})

a2 = Address.create!({
  business_id: b2.id,
  address_first: "25198",
  address_second: "",
  street: "Hesperian Blvd",
  city: "Hayward",
  state: "CA",
  zip: "94545",
  lat: 37.6440016,
  lng: -122.1043556
})

h2 = Hour.create!({
  business_id: b2.id,
  hours_mon: "0000-0000",
  hours_tue: "0000-0000",
  hours_wed: "0000-0000",
  hours_thu: "0000-0000",
  hours_fri: "0000-0000",
  hours_sat: "0000-0000",
  hours_sun: "0000-0000"
})

b3 = Business.create!({
  name: "Olive Garden Italian Restaurant",
  description: "Italian restaurant",
  phone: "5107826385"
})

a3 = Address.create!({
  business_id: b3.id,
  address_first: "24688",
  address_second: "",
  street: "Hesperian Blvd",
  city: "Hayward",
  state: "CA",
  zip: "94545",
  lat: 37.6478222,
  lng: -122.1065811
})

h3 = Hour.create!({
  business_id: b3.id,
  hours_mon: "1100-2200",
  hours_tue: "1100-2200",
  hours_wed: "1100-2200",
  hours_thu: "1100-2200",
  hours_fri: "1100-2300",
  hours_sat: "1100-2300",
  hours_sun: "1100-2200"
})

b4 = Business.create!({
  name: "Buffalo Wild Wings",
  description: "Chicken Wings",
  phone: "5107826733"
})

a4 = Address.create!({
  business_id: b4.id,
  address_first: "24542",
  address_second: "",
  street: "Hesperian Blvd",
  city: "Hayward",
  state: "CA",
  zip: "94545",
  lat: 37.650047, 
  lng: -122.1076861
})

h4 = Hour.create!({
  business_id: b4.id,
  hours_mon: "1100-1400",
  hours_tue: "1100-1400",
  hours_wed: "1100-1400",
  hours_thu: "1100-1400",
  hours_fri: "1100-1400",
  hours_sat: "0900-1400",
  hours_sun: "0900-1400"
})

b5 = Business.create!({
  name: "Applebee's Grill Bar",
  description: "American restaurant",
  phone: "5107826400"
})

a5 = Address.create!({
  business_id: b5.id,
  address_first: "24041",
  address_second: "",
  street: "Southland Dr",
  city: "Hayward",
  state: "CA",
  zip: "94545",
  lat: 37.6543319, 
  lng: -122.1057123
})

h5 = Hour.create!({
  business_id: b5.id,
  hours_mon: "1100-0000",
  hours_tue: "1100-0000",
  hours_wed: "1100-0000",
  hours_thu: "1100-0000",
  hours_fri: "1100-0000",
  hours_sat: "1100-0000",
  hours_sun: "1100-0000"
})

b6 = Business.create!({
  name: "Panera Bread",
  description: "Sandwich Store, Bakery",
  phone: "5107320279"
})

a6 = Address.create!({
  business_id: b6.id,
  address_first: "24133",
  address_second: "",
  street: "Southland Dr",
  city: "Hayward",
  state: "CA",
  zip: "94545",
  lat: 37.6537968, 
  lng: -122.1053962
})

h6 = Hour.create!({
  business_id: b6.id,
  hours_mon: "0600-2130",
  hours_tue: "0600-2130",
  hours_wed: "0600-2130",
  hours_thu: "0600-2130",
  hours_fri: "0600-2200",
  hours_sat: "0600-2200",
  hours_sun: "0700-2100"
})

b7 = Business.create!({
  name: "Panda Express",
  description: "Chinese restaurant",
  phone: "5107326834"
})

a7 = Address.create!({
  business_id: b7.id,
  address_first: "24387",
  address_second: "",
  street: "Southland Dr",
  city: "Hayward",
  state: "CA",
  zip: "94545",
  lat: 37.6524929, 
  lng: -122.104328
})

h7 = Hour.create!({
  business_id: b7.id,
  hours_mon: "1000-2130",
  hours_tue: "1000-2130",
  hours_wed: "-",
  hours_thu: "1000-2130",
  hours_fri: "1000-2130",
  hours_sat: "1030-2130",
  hours_sun: "1100-2130"
})

b8 = Business.create!({
  name: "Tomodachi Sushi Bistro Restaurant",
  description: "Japanese restaurant, Sushi Bars",
  phone: "5109403800"
})

a8 = Address.create!({
  business_id: b8.id,
  address_first: "24123",
  address_second: "",
  street: "Hesperian Blvd",
  city: "Hayward",
  state: "CA",
  zip: "94545",
  lat: 37.6515681, 
  lng: -122.10985
})

h8 = Hour.create!({
  business_id: b8.id,
  hours_mon: "1130-1430, 1730-2130",
  hours_tue: "1130-1430, 1730-2130",
  hours_wed: "1130-1430, 1730-2130",
  hours_thu: "1130-1430, 1730-2130",
  hours_fri: "1130-1430, 1730-2200",
  hours_sat: "1130-1430, 1700-2200",
  hours_sun: "1730-2130"
})

b9 = Business.create!({
  name: "Starbucks",
  description: "Coffee Shop",
  phone: "5102939044"
})

a9 = Address.create!({
  business_id: b9.id,
  address_first: "23948",
  address_second: "",
  street: "Hesperian Blvd",
  city: "Hayward",
  state: "CA",
  zip: "94541",
  lat: 37.6541461, 
  lng: -122.1103261
})

h9 = Hour.create!({
  business_id: b9.id,
  hours_mon: "0400-2100",
  hours_tue: "0400-2100",
  hours_wed: "-",
  hours_thu: "0400-2100",
  hours_fri: "0400-2200",
  hours_sat: "0400-2100",
  hours_sun: "0530-2030"
})

b10 = Business.create!({
  name: "Taco Bell",
  description: "Fast food restaurant",
  phone: "5108877785"
})

a10 = Address.create!({
  business_id: b10.id,
  address_first: "215",
  address_second: "",
  street: "W Jackson St",
  city: "Hayward",
  state: "CA",
  zip: "94544",
  lat: 37.6527456, 
  lng: -122.0899949
})

h10 = Hour.create!({
  business_id: b10.id,
  hours_mon: "0000-0000",
  hours_tue: "0000-0000",
  hours_wed: "-",
  hours_thu: "0000-0000",
  hours_fri: "0000-0000",
  hours_sat: "0000-0000",
  hours_sun: "0000-0000"
})

b11 = Business.create!({
  name: "Eon Coffee",
  description: "Coffee Shop",
  phone: "5102640507"
})

a11 = Address.create!({
  business_id: b11.id,
  address_first: "24970",
  address_second: "",
  street: "Hesperian Blvd",
  city: "Hayward",
  state: "CA",
  zip: "94545",
  lat: 37.645344, 
  lng: -122.1048349
})

h11 = Hour.create!({
  business_id: b11.id,
  hours_mon: "0600-2100",
  hours_tue: "0600-2100",
  hours_wed: "0600-2100",
  hours_thu: "0600-2100",
  hours_fri: "0600-2100",
  hours_sat: "0700-2000",
  hours_sun: "0800-1900"
})

b12 = Business.create!({
  name: "Hayward Black Bear Diner",
  description: "American restaurant",
  phone: "5106709100"
})

a12 = Address.create!({
  business_id: b12.id,
  address_first: "25202",
  address_second: "",
  street: "Hesperian Blvd",
  city: "Hayward",
  state: "CA",
  zip: "94545",
  lat: 37.6436057,
  lng: -122.1041147
})

h12 = Hour.create!({
  business_id: b12.id,
  hours_mon: "0600-2200",
  hours_tue: "0600-2200",
  hours_wed: "0600-2200",
  hours_thu: "0600-2200",
  hours_fri: "0600-23100",
  hours_sat: "0600-23100",
  hours_sun: "0600-2200"
})

b13 = Business.create!({
  name: "Chef Teriyaki",
  description: "Japanese restaurant, Sushi Bars",
  phone: "5103988885"
})

a13 = Address.create!({
  business_id: b13.id,
  address_first: "26960",
  address_second: "",
  street: "Hesperian Blvd",
  city: "Hayward",
  state: "CA",
  zip: "94545",
  lat: 37.6336612,
  lng: -122.0981267
})

h13 = Hour.create!({
  business_id: b13.id,
  hours_mon: "1030-2100",
  hours_tue: "1030-2100",
  hours_wed: "1030-2100",
  hours_thu: "1030-2100",
  hours_fri: "1030-2100",
  hours_sat: "1030-2100",
  hours_sun: "1130-2100"
})

b14 = Business.create!({
  name: "Burger King",
  description: "Fast food restaurant",
  phone: "5108871980"
})

a14 = Address.create!({
  business_id: b14.id,
  address_first: "26251",
  address_second: "",
  street: "Hesperian Blvd",
  city: "Hayward",
  state: "CA",
  zip: "94545",
  lat: 37.6379561, 
  lng: -122.1013628
})

h14 = Hour.create!({
  business_id: b14.id,
  hours_mon: "0500-0030",
  hours_tue: "0500-0030",
  hours_wed: "0500-0030",
  hours_thu: "0500-0030",
  hours_fri: "0500-0459",
  hours_sat: "0500-0459",
  hours_sun: "0500-0030"
})

b15 = Business.create!({
  name: "Taco Bell",
  description: "Fast food restaurant",
  phone: "5107840416"
})

a15 = Address.create!({
  business_id: b15.id,
  address_first: "27316",
  address_second: "",
  street: "Hesperian Blvd",
  city: "Hayward",
  state: "CA",
  zip: "94545",
  lat: 37.6318796, 
  lng: -122.0958287
})

h15 = Hour.create!({
  business_id: b15.id,
  hours_mon: "0700-0100",
  hours_tue: "0700-2000",
  hours_wed: "0700-0100",
  hours_thu: "0700-0100",
  hours_fri: "0700-0100",
  hours_sat: "0700-0100",
  hours_sun: "0700-0100"
})

b16 = Business.create!({
  name: "Dairy Belle Freeze",
  description: "American restaurant",
  phone: "5107831393"
})

a16 = Address.create!({
  business_id: b16.id,
  address_first: "2285",
  address_second: "",
  street: "Tennyson Rd",
  city: "Hayward",
  state: "CA",
  zip: "94545",
  lat: 37.6315185, 
  lng: -122.0958287
})

h16 = Hour.create!({
  business_id: b16.id,
  hours_mon: "1000-2230",
  hours_tue: "1000-2230",
  hours_wed: "1000-2230",
  hours_thu: "1000-2230",
  hours_fri: "1000-2230",
  hours_sat: "1000-2100",
  hours_sun: "1000-2200"
})

b17 = Business.create!({
  name: "Carl's Jr.",
  description: "Fast food restaurant",
  phone: "5107863440"
})

a17 = Address.create!({
  business_id: b17.id,
  address_first: "27467",
  address_second: "",
  street: "Hesperian Blvd",
  city: "Hayward",
  state: "CA",
  zip: "94545",
  lat: 37.6299412, 
  lng: -122.096559
})

h17 = Hour.create!({
  business_id: b17.id,
  hours_mon: "0000-0000",
  hours_tue: "0000-0000",
  hours_wed: "0000-0000",
  hours_thu: "0000-0000",
  hours_fri: "0000-0000",
  hours_sat: "0000-0000",
  hours_sun: "0000-0000"
})

b18 = Business.create!({
  name: "Phở Tỷ #II",
  description: "Vietnamese restaurant",
  phone: "5107839888"
})

a18 = Address.create!({
  business_id: b18.id,
  address_first: "27461",
  address_second: "",
  street: "Hesperian Blvd",
  city: "Hayward",
  state: "CA",
  zip: "94545",
  lat: 37.6296428, 
  lng: -122.0971926
})

h18 = Hour.create!({
  business_id: b18.id,
  hours_mon: "0900-2000",
  hours_tue: "0900-2000",
  hours_wed: "0900-2000",
  hours_thu: "0900-2000",
  hours_fri: "0900-2000",
  hours_sat: "0900-2000",
  hours_sun: "0900-2000"
})

b19 = Business.create!({
  name: "Subway",
  description: "Sandwiches",
  phone: "5107827852"
})

a19 = Address.create!({
  business_id: b19.id,
  address_first: "520",
  address_second: "",
  street: "W Tennyson Rd",
  city: "Hayward",
  state: "CA",
  zip: "94544",
  lat: 37.6321355, 
  lng: -122.0672471
})

h19 = Hour.create!({
  business_id: b19.id,
  hours_mon: "0700-2100",
  hours_tue: "0700-2100",
  hours_wed: "0700-2100",
  hours_thu: "0700-2100",
  hours_fri: "0700-2100",
  hours_sat: "0800-2100",
  hours_sun: "0900-2100"
})

b20 = Business.create!({
  name: "KFC",
  description: "Fast food restaurant, Chicken Wings",
  phone: "5107834338"
})

a20 = Address.create!({
  business_id: b20.id,
  address_first: "1299",
  address_second: "",
  street: "W Jackson St",
  city: "Hayward",
  state: "CA",
  zip: "94544",
  lat: 37.6316379, 
  lng: -122.0790381
})

h20 = Hour.create!({
  business_id: b20.id,
  hours_mon: "1000-2200",
  hours_tue: "1000-2200",
  hours_wed: "1000-2200",
  hours_thu: "1000-2200",
  hours_fri: "1000-2200",
  hours_sat: "1000-2200",
  hours_sun: "1000-2200"
})

b21 = Business.create!({
  name: "Jack in the Box",
  description: "Fast food restaurant",
  phone: "5108870733
"
})

a21 = Address.create!({
  business_id: b21.id,
  address_first: "1075",
  address_second: "",
  street: "W Tennyson Rd",
  city: "Hayward",
  state: "CA",
  zip: "94544",
  lat: 37.6316656, 
  lng: -122.0748934
})

h21 = Hour.create!({
  business_id: b21.id,
  hours_mon: "0000-0000",
  hours_tue: "0000-0000",
  hours_wed: "0000-0000",
  hours_thu: "0000-0000",
  hours_fri: "0000-0000",
  hours_sat: "0000-0000",
  hours_sun: "0000-0000"
})

b22 = Business.create!({
  name: "La Placita",
  description: "Mexican restaurant",
  phone: "5107840583"
})

a22 = Address.create!({
  business_id: b22.id,
  address_first: "27548",
  address_second: "",
  street: "Tampa Ave",
  city: "Hayward",
  state: "CA",
  zip: "94544",
  lat: 37.6319746,
  lng: -122.0753447
})

h22 = Hour.create!({
  business_id: b22.id,
  hours_mon: "0800-2100",
  hours_tue: "0800-2100",
  hours_wed: "0800-2100",
  hours_thu: "0800-2100",
  hours_fri: "0800-2100",
  hours_sat: "0600-2100",
  hours_sun: "0700-2100"
})

b23 = Business.create!({
  name: "Taqueria Eduardo II",
  description: "Mexican restaurant",
  phone: "5107320254"
})

a23 = Address.create!({
  business_id: b23.id,
  address_first: "1104",
  address_second: "",
  street: "W Tennyson Rd",
  city: "Hayward",
  state: "CA",
  zip: "94544",
  lat: 37.6308562,
  lng: -122.0761708
})

h23 = Hour.create!({
  business_id: b23.id,
  hours_mon: "0900-2200",
  hours_tue: "0900-2200",
  hours_wed: "0900-2200",
  hours_thu: "0900-2200",
  hours_fri: "0800-2200",
  hours_sat: "0800-2200",
  hours_sun: "0900-2200"
})

b24 = Business.create!({
  name: "Sofias Restaurant",
  description: "Mexican restaurant",
  phone: "5107800818"
})

a24 = Address.create!({
  business_id: b24.id,
  address_first: "1162",
  address_second: "",
  street: "W Tennyson Rd",
  city: "Hayward",
  state: "CA",
  zip: "94544",
  lat: 37.6302036, 
  lng: -122.0764357
})

h24 = Hour.create!({
  business_id: b24.id,
  hours_mon: "0730-2130",
  hours_tue: "0730-2130",
  hours_wed: "0730-2130",
  hours_thu: "0730-2130",
  hours_fri: "0730-2230",
  hours_sat: "0730-2315",
  hours_sun: "0730-2130"
})

b25 = Business.create!({
  name: "Don Polvoron Bakery",
  description: "Bakery",
  phone: "5108872102"
})

a25 = Address.create!({
  business_id: b25.id,
  address_first: "669",
  address_second: "",
  street: "W Tennyson Rd",
  city: "Hayward",
  state: "CA",
  zip: "94544",
  lat: 37.6320575, 
  lng: -122.0684756
})

h25 = Hour.create!({
  business_id: b25.id,
  hours_mon: "0500-2100",
  hours_tue: "0500-2100",
  hours_wed: "0500-2100",
  hours_thu: "0500-2100",
  hours_fri: "0500-2100",
  hours_sat: "0500-2100",
  hours_sun: "0600-2000"
})

b26 = Business.create!({
  name: "New York Pizza",
  description: "Pizza",
  phone: "5107863165"
})

a26 = Address.create!({
  business_id: b26.id,
  address_first: "665",
  address_second: "",
  street: "W Tennyson Rd",
  city: "Hayward",
  state: "CA",
  zip: "94544",
  lat: 37.6324929, 
  lng: -122.0685386
})

h26 = Hour.create!({
  business_id: b26.id,
  hours_mon: "1000-2300",
  hours_tue: "1000-2300",
  hours_wed: "1000-2300",
  hours_thu: "1000-2300",
  hours_fri: "1000-0000",
  hours_sat: "1000-0000",
  hours_sun: "1000-2300"
})

b27 = Business.create!({
  name: "Taqueria Arandas",
  description: "Mexican restaurant",
  phone: "5107832779"
})

a27 = Address.create!({
  business_id: b27.id,
  address_first: "512",
  address_second: "",
  street: "Tennyson Rd",
  city: "Hayward",
  state: "CA",
  zip: "94544",
  lat: 37.6320256, 
  lng: -122.0670493
})

h27 = Hour.create!({
  business_id: b27.id,
  hours_mon: "1100-2030",
  hours_tue: "1000-2030",
  hours_wed: "1000-2030",
  hours_thu: "1000-2030",
  hours_fri: "1000-2030",
  hours_sat: "0900-2030",
  hours_sun: "0900-2030"
})

b28 = Business.create!({
  name: "Little Caesars Pizza",
  description: "Pizza",
  phone: "5107854884"
})

a28 = Address.create!({
  business_id: b28.id,
  address_first: "338",
  address_second: "",
  street: "W Tennyson Rd",
  city: "Hayward",
  state: "CA",
  zip: "94544",
  lat: 37.6328305, 
  lng: -122.0653025
})

h28 = Hour.create!({
  business_id: b28.id,
  hours_mon: "1030-2200",
  hours_tue: "1030-2200",
  hours_wed: "1030-2200",
  hours_thu: "1030-2200",
  hours_fri: "1030-2300",
  hours_sat: "1030-2300",
  hours_sun: "1030-2200"
})

b29 = Business.create!({
  name: "Edna's Donuts By George",
  description: "Donuts",
  phone: "5107833355"
})

a29 = Address.create!({
  business_id: b29.id,
  address_first: "113",
  address_second: "",
  street: "W Tennyson Rd",
  city: "Hayward",
  state: "CA",
  zip: "94544",
  lat: 37.6340058, 
  lng: -122.064636
})

h29 = Hour.create!({
  business_id: b29.id,
  hours_mon: "0530-1700",
  hours_tue: "0530-1700",
  hours_wed: "0530-1700",
  hours_thu: "0530-1700",
  hours_fri: "0530-1700",
  hours_sat: "0530-1700",
  hours_sun: "0530-1700"
})

b30 = Business.create!({
  name: "Cecil's Famous Burgers",
  description: "Burgers",
  phone: "5107822655"
})

a30 = Address.create!({
  business_id: b30.id,
  address_first: "547",
  address_second: "",
  street: "Tennyson Rd",
  city: "Hayward",
  state: "CA",
  zip: "94544",
  lat: 37.6326459, 
  lng: -122.0675455
})

h30 = Hour.create!({
  business_id: b30.id,
  hours_mon: "1000-2130",
  hours_tue: "1000-2130",
  hours_wed: "1000-2130",
  hours_thu: "1000-2130",
  hours_fri: "1000-2130",
  hours_sat: "1000-2130",
  hours_sun: "1100-2145"
})

c1 = Comment.create!({ user_id: u2.id, business_id: b1.id, body: 'Pretty Good' })
c2 = Comment.create!({ user_id: u2.id, business_id: b2.id, body: 'A bit expensive' })
c3 = Comment.create!({ user_id: u2.id, business_id: b3.id, body: 'Better than I expect' })
c4 = Comment.create!({ user_id: u2.id, business_id: b4.id, body: 'Fair price' })
c5 = Comment.create!({ user_id: u2.id, business_id: b5.id, body: 'Recommend' })
c6 = Comment.create!({ user_id: u3.id, business_id: b1.id, body: 'Food are cold' })
c7 = Comment.create!({ user_id: u3.id, business_id: b2.id, body: 'No fresh' })
c8 = Comment.create!({ user_id: u3.id, business_id: b3.id, body: 'Good service' })
c9 = Comment.create!({ user_id: u4.id, business_id: b1.id, body: 'Food quality needs improvement' })
c10 = Comment.create!({ user_id: u4.id, business_id: b2.id, body: 'Queue too long' })

r1 = Rate.create!({ user_id: u2.id, business_id: b1.id, rating: 3.0 })
r2 = Rate.create!({ user_id: u2.id, business_id: b2.id, rating: 2.5 })
r3 = Rate.create!({ user_id: u2.id, business_id: b3.id, rating: 3.5 })
r4 = Rate.create!({ user_id: u2.id, business_id: b4.id, rating: 3.0 })
r5 = Rate.create!({ user_id: u2.id, business_id: b5.id, rating: 4.0 })
r6 = Rate.create!({ user_id: u3.id, business_id: b1.id, rating: 2.0 })
r7 = Rate.create!({ user_id: u3.id, business_id: b2.id, rating: 2.0 })
r8 = Rate.create!({ user_id: u3.id, business_id: b3.id, rating: 4.0 })
r9 = Rate.create!({ user_id: u4.id, business_id: b1.id, rating: 1.0 })
r10 = Rate.create!({ user_id: u4.id, business_id: b2.id, rating: 2.5 })

v1 = Vote.create!({ user_id: u2.id, comment_id: c1.id, voting: 1 })
v2 = Vote.create!({ user_id: u2.id, comment_id: c2.id, voting: 1 })
v3 = Vote.create!({ user_id: u2.id, comment_id: c3.id, voting: 1 })
v4 = Vote.create!({ user_id: u2.id, comment_id: c4.id, voting: 1 })
v5 = Vote.create!({ user_id: u2.id, comment_id: c5.id, voting: 1 })
v6 = Vote.create!({ user_id: u2.id, comment_id: c6.id, voting: -1 })
v7 = Vote.create!({ user_id: u2.id, comment_id: c7.id, voting: -1 })
v8 = Vote.create!({ user_id: u2.id, comment_id: c8.id, voting: 1 })
v9 = Vote.create!({ user_id: u2.id, comment_id: c9.id, voting: -1 })
v10 = Vote.create!({ user_id: u2.id, comment_id: c10.id, voting: -1 })
v11 = Vote.create!({ user_id: u3.id, comment_id: c1.id, voting: -1 })
v12 = Vote.create!({ user_id: u3.id, comment_id: c6.id, voting: 1 })
v13 = Vote.create!({ user_id: u3.id, comment_id: c8.id, voting: 1 })
v14 = Vote.create!({ user_id: u4.id, comment_id: c1.id, voting: -1 })
v15 = Vote.create!({ user_id: u4.id, comment_id: c9.id, voting: 1 })
v16 = Vote.create!({ user_id: u4.id, comment_id: c10.id, voting: 1 })
v17 = Vote.create!({ user_id: u5.id, comment_id: c1.id, voting: -1 })
v18 = Vote.create!({ user_id: u6.id, comment_id: c1.id, voting: -1 })
v19 = Vote.create!({ user_id: u7.id, comment_id: c1.id, voting: -1 })
v20 = Vote.create!({ user_id: u8.id, comment_id: c1.id, voting: -1 })