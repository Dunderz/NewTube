class Api::LikesController < ApplicationController
    before_action :ensure_logged_in, only: [:show, :create, :destroy]

    def index
        if params[:comment_id]
            @likes = Like.where(likable_id: params[:comment_id])
            render :index
        else
            @likes = Like.where(likable_id: params[:video_id])
            render :index
        end
    end

    def create
        @like = Like.new(like_params)
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        @like.destroy
    end

    private 

    def like_params
        params.require(:like).permit(:user_id, :likable_type, :likable_id, :value)
    end
end