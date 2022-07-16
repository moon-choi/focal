require 'active_support/all'

class Question # class should be always singular!
  def initialize
    @num1 = rand(20) # short form for 0 - 20
    @num2 = rand(20)
    @answer = @num1 + @num2
  end

  def ask(player) # handles asking, answering, checking all at once 
    puts "#{player.name}: What is #{@num1} + #{@num2} equal to?"  
    curr_input = gets.chomp.to_i
      if curr_input != @answer
        player.lose_points() ## can omit () when there is no argument.
        puts "#{player.name}: Seriously! No!"
      else
        puts "#{player.name}: YES! You are correct."
      end
  end
end