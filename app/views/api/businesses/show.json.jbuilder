json.set! @business.id do
  json.partial! '/api/businesses/business', business: @business
  json.address @address, :address_first, :address_second, :street, :city, :state, :zip, :lat, :lng
  json.hour @hour, :hours_mon, :hours_tue, :hours_wed, :hours_thu, :hours_fri, :hours_sat, :hours_sun
end
