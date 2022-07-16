require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'
require_relative './exercise_5'

puts "Exercise 6"
puts "----------"

# Your code goes here ...
@store1.employees.create(first_name: "Khurram", last_name: "Virani", hourly_rate: 70)
@store1.employees.create(first_name: "aa", last_name: "aa", hourly_rate: 60)

@store2.employees.create(first_name: "bb", last_name: "b", hourly_rate: 50)
@store2.employees.create(first_name: "cc", last_name: "c", hourly_rate: 40)


## why not being added?
@store4.employees.create(first_name: "dd", last_name: "d", hourly_rate: 80)
@store5.employees.create(first_name: "ee", last_name: "e", hourly_rate: 90)
@store6.employees.create(first_name: "ff", last_name: "f", hourly_rate: 100)
