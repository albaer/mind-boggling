require 'byebug'

class Solver
	def initialize
		@path = []
		@target= ["K", "A", "B"]
		@directions = [-5, -4, -3, -1, 1, 3, 4, 5]
		@board = [ "F", "Z", "K", "L",
						   "T", "A", "K", "B",
						   "N", "A", "Z", "A",
						   "B", "Q", "R", "K" ]
	end

	def solve!
		@board.each_with_index do |letter, position|
			find_word(position) if letter == @target.first
			break if finished?
		end
		@path.length == 0 ? "no word" : @path
	end

	def find_word(position, target_letter_index=0)
		p @path
		return false if @path.include?(position)  #so the same position can't be in the path twice
		@path << position 												#pushes position in to path
		return true if finished? 									#stops if the path is complete
																							#if path isn't complete and position is valid...
		@directions.each do |direction| 					#look at each of the adjacent cells
			next if position_invalid?(position + direction) #make sure the position is on the board
			if @board[position + direction] == @target[target_letter_index + 1] #look ahead to see if there is a match
				return true if find_word(position + direction, target_letter_index + 1)
			end
		end

		@path.pop
		return false
	end

	def position_invalid?(position)
		!(0..15).to_a.include?(position)
	end

	def finished?
		@path.length == @target.length
	end
end

boggle = Solver.new
p boggle.solve!



