require_relative './question' 
require_relative './player'

#require_relative: actually runs the file and initialize it. 
#require: only pulls the file. 

class Game
  def initialize
    @player1 = Player.new('moon')
    @player2 = Player.new('choi')
    @curr_player = @player1
    # @players = [@player1, @player2] 
    # not needed because we have change_player method
  end

  def change_player      
    if @curr_player == @player1
      @curr_player = @player2
    else
      @curr_player = @player1
    end  
  end

  def end_game
    if @player1.points == 0 || @player2.points == 0
      return true ## true means ending the game
    end
    return false
  end
  
  def who_won 
    if @player1.points == 0 
      return @player2
    elsif @player2.points == 0
      return @player1  
    end  
  end

  def play_game
    while !end_game do
      question = Question.new
      question.ask(@curr_player)
      puts "#{@player1.name}: #{@player1.points}/3 vs #{@player2.name}: #{@player2.points}/3 "
      puts "------- NEW TURN ------"
      change_player
    end
    winner = who_won
    puts "#{winner.name} wins with a score of #{winner.points}/3"

    puts "------- GAME OVER ------"
    puts "Good bye!"

  end  
end


