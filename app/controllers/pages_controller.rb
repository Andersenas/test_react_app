class PagesController < ApplicationController
  def index
  end

  def twitch_streams
    @streams = Stream.where(type_platform: 'twitch').where(show: true)
    render json: { data: @streams }
  end

  def youtube_streams
    @streams = Stream.where(type_platform: 'youtube').where(show: true)
    render json: { data: @streams }
  end
end
