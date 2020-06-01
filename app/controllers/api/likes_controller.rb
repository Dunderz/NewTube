class Api::LikesController < ApplicationController
    before_action :ensure_logged_in, only: [:show, :create, :destroy]

    def index
        @likes = Like.where(likable_id: params[:video_id])
        render :index
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
        @like = Like.find_by(user_id: params[:id])
        @like.destroy
    end

    private 

    def like_params
        params.require(:like).permit(:user_id, :likable_type, :likable_id, :value)
    end
end