class Api::CommentsController < ApplicationController

    skip_before_action :verify_authenticity_token
  
      def index
          @comments = Comment.all
          render :index
      end
  
      def show
          @comment = Comment.find_by(id: params[:id])
          render :show
      end
  
      def create
          @comment = Comment.new(comment_params)       
          if @comment.save!
              render :show
          else
              redner json: @comment.errors.full_messages, status: 422
          end
      end
  
      def update
          @comment = Comment.find(params[:id])
      
          if @comment.update(comment_params)
            render :show
          else
            render json: @comment.errors.full_messages, status: 422
          end
        end
  
      def destroy 
          @comment = Comment.find(params[:id])
  
          if @comment.destroy
            render :show
          else
            render json: @comment.errors.full_messages, status: 422
          end
  
      end
  
      private
      def comment_params
        params.require(:comment).permit(:body, :user_id, :post_id)
      end
  end