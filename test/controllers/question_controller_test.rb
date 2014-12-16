require 'test_helper'

class QuestionControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get rand" do
    get :rand
    assert_response :success
  end

end
