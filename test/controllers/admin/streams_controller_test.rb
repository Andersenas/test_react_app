require 'test_helper'

class Admin::StreamsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admin_streams_index_url
    assert_response :success
  end

end
