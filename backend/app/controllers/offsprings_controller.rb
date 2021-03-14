class OffspringsController < ApplicationController
  def index
    @offsprings = Offspring.all
    render json: @offsprings, status: 200
  end

  def show
    @offspring = Offspring.find(params[:id])
    render json: @offspring, status: 200
  end

  def create
    @offspring = Offspring.create(offspring_params)
    render json: @offspring, status: 200
  end

  def update
    @offspring = Offspring.find(params[:id])
    if @offspring.update(offspring_params)
      render json: @offspring, status: 200
    end
  end

  def destroy
    @offspring = Offspring.find(params[:id])
    if @offspring.destroy
      render json: {offspringId: @offspring.id}, status: 200
    end
  end

  private
  def offspring_params
    params.require(:offspring).permit(:year, :sex, :sire)
  end
end
