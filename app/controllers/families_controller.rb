class FamiliesController < ApplicationController

  def index
    @families = Family.all
    render json: @families
  end

  def create
    @athlete = Athlete.find(params[:athlete_id])
    @family = @athlete.family.new(family_params)
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
        family: @family
      }
  end

  def update
    @athlete = Athlete.find(params[:athlete_id])
    @family = Family.find(params[:id])
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
    @athlete = @familiy.athlete
    @family = Family.find(params[:id])
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
