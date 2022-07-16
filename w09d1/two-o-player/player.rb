class Player
  attr_reader :name, :points 
  #player.name would work due to this. 

  def initialize(name)
    @name = name
    @points = 3   
  end

  def lose_points()
    @points -= 1
  end
end  

# Player class should read a name, and lose the points and that's all it has to do.