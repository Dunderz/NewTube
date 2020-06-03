class Api::VideosController < ApplicationController
    def index
        @videos = Video.all
        
        render :index
    end

    def show
        @video = Video.find(params[:id])

        @video.views += 1
        @video.save

        render :show
    end

    def create
        @video = Video.new(video_params)
        @video.views = 0
        if @video.save
            render :show
        else
            render json: video.errors.full_messages, status: 401
        end
    end

    def search
        @videos = Video.where('lower(title) LIKE lower(?)', "%#{params[:result]}%")
        render :index
    end

    def video_params
        params.require(:video).permit(:title, :video, :author_id, :thumbnail, :description)
    end
end