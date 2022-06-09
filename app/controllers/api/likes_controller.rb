class Api::LikesController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        @likes = Like.all
        render :index
    end

    def show
        @like = Like.find_by(id: params[:id])
        render :show
    end

    def create
        @like = Like.new(like_params)       
        if @like.save!
            render :show
        else
            redner json: @like.errors.full_messages, status: 422
        end
    end

    def update
        @like = Like.find(params[:id])
    
        if @like.update(like_params)
          render :show
        else
          render json: @like.errors.full_messages, status: 422
        end
      end

    def destroy 
        @like = Like.find(params[:id])

        if @like.destroy
          render :show
        else
          render json: @like.errors.full_messages, status: 422
        end

    end

    private
    def like_params
      params.require(:like).permit(:like_id, :like_type, :user_id)
    end


end
