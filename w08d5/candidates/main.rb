require 'pp'
require './candidates'
require './filters'

arr = qualified_candidates(@candidates)

def qualified_ids(arr)
  ids = []
  arr.each do |item|  
    ids.push(item[:id])
  end
  return ids
end

puts qualified_ids(arr)

# TEST 
# puts ruby_python?({
#     id: 7,
#     years_of_experience: 1,
#     github_points: 145,
#     languages: ['JavaScript', 'Ruby', 'Go', 'Erlang'],
#     date_applied: 15.days.ago.to_date,
#     age: 19
#   })