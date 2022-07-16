require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'
require_relative './exercise_5'
require_relative './exercise_6'

puts "Exercise 7"
puts "----------"

# Your code goes here ...

  def ask(store_name) # handles asking, answering, checking all at once 
    puts "What is the store name?"  
    input = gets.chomp
    store = Store.create(name: input, annual_revenue: , mens_apparel:, womens_apparel:)

  end  