class FamiliesController < ApplicationController

  def index
    @athlete = Athlete.find(params[:athlete_id])
    @families = @athlete.families
    render json: @families
  end

  def create
    @family = Family.new(family_params)
    @athlete = Athlete.find(params[:athlete_id])
      if @family.save
        render json: {
        athlete: @athlete
      }
      else
        render status: 500,
          json: {
          error: @family.errors
        }
      end
  end

  def show
    @family = Family.find(params[:id])
      render json: {
        "family": @family
      }
  end

  def update
    @family = Family.find(params[:id])
    @athlete = Athlete.find(params[:athlete_id])
      if @family.update(family_params)
        render json: {
          family: @family
        }
      else
        render status: 500,
          json: {
          error: @family.errors
        }
      end
  end

  def destroy
    @family = Family.find(params[:id])
    @athlete = @familiy.athlete
    if @family.delete
     render json: {
      message: "Deleted Family"
     }
    else
      render status: 500,
        json: {
          error: "Could not delete family"
        }
    end
  end

  private
    def family_params
      params.require(:family).permit(:name, :school, :team, :relationship)
      .merge(:athlete_id => Athlete.find(params[:athlete_id]).id)
  end
end
