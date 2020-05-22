class Api::CommentsController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index
        @comments = Comment.where(video_id: params[:video_id])
        render :index
    end

    def create
        
    end

    def destroy

    end

    private

    def comment_params
        params.require(:comment).permit(:body, :video_id)
    end
end