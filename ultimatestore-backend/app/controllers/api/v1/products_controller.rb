class Api::V1::ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]

  def index
    if params[:q]
      @products = Product.where('title LIKE ?', "%" + params[:q] + "%")
    else
      @products = Product.all
    end

    render json: @products, status: 200
  end

  def show
    render json: @product, status: 200
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      render json: @product, status: 200, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def update
    if @product.update(product_params)
      render json: @product, status: 200
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @product.destroy
    render json: @product, status: 200
  end

  private
    def set_product
      @product = Product.find(params[:id])
    end

    def product_params
      params.require(:product).permit(:title, :price, :description, :image, :q)
    end
end
