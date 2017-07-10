class AthletesController < ApplicationController

def index
  @athletes = Athlete.all
  render json: @athletes
end

def create
  @athlete = Athlete.new(athlete_params)

  if @athlete.save
    redirect_to athlete_path(@athlete)
  else
    render status: 500,
           json: {
            error: @athlete.errors
           }
  end
end

def show
  @athlete = Athlete.find(params[:id])
  render json: {
         athlete: @athlete
  }
end

def update
  @athlete = Athlete.find(params[:id])

  if @athlete.update(athlete_params)
     redirect_to athlete_path(@athlete)
  else
    render status: 500,
           json: {
            error: @athlete.errors
           }
  end
end

def delete
  @athletes = Athlete.find(params[:id])

  if @athletes.delete
     redirect_to athlete_path, :method => :get
  else
    render status: 500,
           json: {
            error: "Could not delete Athlete"
           }
  end
end

  private

  def athlete_params
    params.require(:athlete)
    .permit(:name, :school, :jersey_number, :position, :class_of, :team)
  end
end




