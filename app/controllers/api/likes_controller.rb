class Api::LikesController < ApplicationController
    before_action :ensure_logged_in, only: [:show, :create, :destroy]

    def index
        @likes = Like.where(likable_id: params[:video_id])
        render :index
    end

    def create
        @like = Like.new(like_params)
        @user_like = Like.find_by(user_id: params[:like][:user_id], likable_id: params[:like][:likable_id])
        if !@user_like
            if @like.save
                render :show
            end
        elsif @user_like
            @user_like.destroy
            @like.save
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