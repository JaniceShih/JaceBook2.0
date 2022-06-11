class Api::FriendsController < ApplicationController

    def index
        @friends = Friend.all
        render :index
    end

    def create
        @friend = Friend.new(friend_params)

        if @friend.save
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def update
        @friend = Friend.find(params[:id])

        if @friend.update(friend_params)
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
            
    end

    def destroy
        @friend = Friend.find_by(id: params[:id])
        if @friend
            @friend.destroy
            render json: {}
        else
            render json: ["Not your friend!"], status: 404
        end
    end

    private

    def friend_params
        params.require(:friend).permit(:user_id, :friend_id, :status)
    end
    
end
