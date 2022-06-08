class Api::PostsController < ApplicationController

    skip_before_action :verify_authenticity_token
  
      def index
          @posts = Post.all
          render :index
      end
  
      def show
          @post = Post.find_by(id: params[:id])
          render :show
      end
  
      def create
          
          @post = Post.new(post_params)       
          if @post.save!
              render :show
          else
              redner json: @post.errors.full_messages, status: 422
          end
      end
  
      def update
          @post = Post.find(params[:id])
      
          if @post.update(post_params)
            render :show
          else
            render json: @post.errors.full_messages, status: 422
          end
        end
  
      def destroy 
          @post = Post.find(params[:id])
  
          if @post.destroy
            render :show
          else
            render json: @post.errors.full_messages, status: 422
          end
  
      end
  
      private
      def post_params
        params.require(:post).permit(:body, :photo, :user_id)
      end
  end