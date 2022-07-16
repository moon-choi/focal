require './candidates'

def find(id, candidates)
  candidates.find { |el| el.id == id ? el : nil } 
end

def experienced?(candidate)
  candidate[:years_of_experience] >= 2 
end

def github?(candidate)
  candidate[:github_points] >= 100 
end

def ruby_python?(candidate) 
  candidate[:languages].include?('Ruby') ||  candidate[:languages].include?('Python')
end

def last_15_days?(candidate) 
  candidate[:date_applied] > 15.days.ago.to_date 
end

def age_over_17?(candidate) 
  candidate[:age] > 17
end

def qualified_candidates(candidates)
  qualified = []
  candidates.each do |candidate|  
    if experienced?(candidate) && github?(candidate) && ruby_python?(candidate) && age_over_17?(candidate) && last_15_days?(candidate)
    qualified.push(candidate)  
    end
  end
  return qualified
end  