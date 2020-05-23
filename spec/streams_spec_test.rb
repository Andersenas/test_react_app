require 'rspec'

require_relative 'streams_controller.rb'

describe Admin::StreamsController do
  it "assigns @stream" do
    stream = Stream.create
    get :index
    expect(assigns(:streams)).to eq([stream])
  end

  it "renders the index template" do
    get :index
    expect(response).to render_template("index")
  end
end

