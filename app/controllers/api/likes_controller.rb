class Api::LikesController < ApplicationController
    before_action :require_logged_in, only: [:show, :create, :destroy]
end