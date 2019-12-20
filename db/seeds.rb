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

u1 = User.create!({
  username: ENV['DB_SEED_U1'],
  password: ENV['DB_SEED_P1']
})

u2 = User.create!({
  username: ENV['DB_SEED_U2'],
  password: ENV['DB_SEED_P2']
})

u3 = User.create!({
  username: ENV['DB_SEED_U3'],
  password: ENV['DB_SEED_P3']
})

u4 = User.create!({
  username: ENV['DB_SEED_U4'],
  password: ENV['DB_SEED_P4']
})

b1 = Business.create!({
  name: "McDonald's",
  description: "Fast food restaurant",
  phone: "5108873021"
})

a1 = Address.create!({
  business_id: b1.id,
  address_first: "2299 W",
  address_second: "",
  street: "Tennyson Rd",
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
  lng:  -122.1065811
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

c1 = Comment.create!({
  user_id: u2.id,
  business_id: b1.id,
  body: 'Pretty Good'
})

c2 = Comment.create!({
  user_id: u2.id,
  business_id: b2.id,
  body: 'A bit expensive'
})

c3 = Comment.create!({
  user_id: u3.id,
  business_id: b1.id,
  body: 'Better than I expect'
})

c4 = Comment.create!({
  user_id: u2.id,
  business_id: b3.id,
  body: 'Very Good'
})

c5 = Comment.create!({
  user_id: u4.id,
  business_id: b1.id,
  body: 'Not bad'
})

r1 = Rate.create!({
  user_id: u2.id,
  business_id: b1.id,
  rating: 3.0
})

r2 = Rate.create!({
  user_id: u2.id,
  business_id: b2.id,
  rating: 2.5
})

r3 = Rate.create!({
  user_id: u3.id,
  business_id: b1.id,
  rating: 4.0
})

r4 = Rate.create!({
  user_id: u2.id,
  business_id: b3.id,
  rating: 4.0
})

c4 = Comment.create!({
  user_id: u3.id,
  business_id: b2.id,
  body: 'Excellent'
})

r4 = Rate.create!({
  user_id: u3.id,
  business_id: b2.id,
  rating: 5.0
})

v1 = Vote.create!({
  user_id: u2.id,
  comment_id: c1.id,
  voting: 1
})

v2 = Vote.create!({
  user_id: u2.id,
  comment_id: c4.id,
  voting: -1
})

v3 = Vote.create!({
  user_id: u3.id,
  comment_id: c1.id,
  voting: 1
})

v4 = Vote.create!({
  user_id: u3.id,
  comment_id: c4.id,
  voting: 1
})

v5 = Vote.create!({
  user_id: u2.id,
  comment_id: c3.id,
  voting: 1
})