class Api::CommentsController < ApplicationController
    before_action :ensure_logged_in, only: [:create]

    def index
        @comments = Comment.where(video_id: params[:video_id])
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy

    end

    private

    def comment_params
        params.require(:comment).permit(:body, :video_id, :user_id, :username)
    end
end