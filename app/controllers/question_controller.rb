class QuestionController < ApplicationController
  def index
  	@question = find_random
  end

  def random
  	json_reponse = find_random
  	respond_to do |format|
	  format.json { render :json => json_reponse }
	end
  end

  private
  	def find_random
  		question = Question.offset(rand(Question.count)).first
	  	title = question["title"]
	  	content = question["content"]
	  	answer = question["answer"]
	  	JSON.generate({"title" => title, "content" => content, "answer" => answer})
  	end
end
