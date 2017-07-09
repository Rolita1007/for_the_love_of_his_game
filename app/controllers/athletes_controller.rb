class AthletesController < ApplicationController

def index
  @athletes = Athlete.all
  render json: @athletes
end

def create
  @athlete = Athlete.create!(athlete_params)
  redirect_to athlete_path(@athlete)
end

def show
  @athlete = Athlete.find(params{:id})
  render json: @athlete
end

def update
  @athlete = Athletes.find(params{:id})
  @athlete.update!(athlete_params)
  redirect_to athlete_path(@athlete)
end

def delete
  @athlete = Athlete.find(params[:id])
  @artist.delete
  redirect_to athlete_path
end

private

def athlete_params
  params.require(:athlete)
  .permit(:name, :school, :jersey_number, :position, :class_of, :team)

end

end




