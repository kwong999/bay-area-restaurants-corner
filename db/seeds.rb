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

u1 = User.create!({
  username: ENV['DB_SEED_U1'],
  password: ENV['DB_SEED_P1']
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
  lat: 37.631372, 
  lng: -122.096493
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

