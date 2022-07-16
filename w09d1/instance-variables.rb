class Person

  attr_reader :name
  attr_writer :name 
  
  def initialize(name)
    @name = name
  end

end

# =========== REFACTORED ============= #
# # getter method (access)
#   def name() 
#     @name
#   end

# # setter method   
#   def name =(value)
#     @name = value
#   end 
# =========== REFACTORED ============= #

p = Person.new('L. Ron')
puts p.name