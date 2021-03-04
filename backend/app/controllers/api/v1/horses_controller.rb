class Api::V1::HorsesController < ApplicationController
  def index
    @horses = Horse.all
    render json: @horses, status: 200
  end

  def show
    @horse = Horse.find(params[:id])
    render json: @horse, status: 200
  end

  def create
    @horse = Horse.create(horse_params)
    render json :@horse, status: 200
  end

  def update
    @horse = Horse.find(params[:id])
    @horse.update(horse_params)
    render json: @horse, status: 200
  end

  def destroy
    @horse = Horse.find(params[:id])
    @horse.delete
    render json: (horseId: @horse.id)
  end

  private
  def horse_params
    params.require(:horse).permit(:barn_name, :registered_name, :sire, :dam, :dob, :color, :pattern_type, :pedigree, :photo)
  end

end
