# frozen_string_literal: true
class Admin::StreamsController < AdminController

  def index
    @streams = Stream.all
  end

  def show
    @stream = Stream.find(params[:id]) rescue nil
  end

  def edit
    @stream = Stream.find(params[:id]) rescue nil
  end

  def update

    begin
      @stream = Stream.find(params[:id])
    rescue ActiveRecord::RecordNotFound => e
      @streams = Stream.all
      render :index
    end

    @stream.name = params['name']
    @stream.url = params['url']
    @stream.type_platform = params['type_platform']
    @stream.show = params['show']

    if @stream.save
      @streams = Stream.all
      render :index
    else
      render :edit
    end
  end

  def new; end

  def create

    @stream = Stream.new
    @stream.name = params['name']
    @stream.url = params['url']
    @stream.type_platform = params['type_platform']
    @stream.show = params['show']

    if @stream.save
      @streams = Stream.all
      render :index
    else
      render :new
    end
  end
  
  def destroy
    @stream = Stream.destroy(params[:id])

    if @stream.delete
      @streams = Stream.all
      render :index
    else
      render :new
    end
  end



end
