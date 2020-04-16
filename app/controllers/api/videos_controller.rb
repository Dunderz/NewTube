class Api::VideosController < ApplicationController
    def index
        @videos = Video.all
        render :index
    end

    def show
        @video = Video.find(params[:id])
        render :show
    end

    def create
        @video = Video.new(video_params)
        if @video.save
            render :index
        else
            render json: video.errors.full_messages, status: 401
        end
    end

    def video_params
        params.require(:video).permit(:title)
    end
end