require_relative '../setup'

puts "Exercise 1"
puts "----------"


store = Store.create(name: "burnaby", annual_revenue: 300000, mens_apparel:true, womens_apparel:true)
store = Store.create(name: "richmond", annual_revenue: 1260000, mens_apparel: false, womens_apparel: true)
store = Store.create(name: "gastown", annual_revenue: 190000, mens_apparel: true, mens_apparel:true)

@count_store = Store.count
# puts @count_store