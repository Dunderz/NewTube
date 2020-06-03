class Api::SubscriptionsController < ApplicationController

    def index
        if params[:status] == "self-subscriptions"
            @subscribers = Subscription.where(subscriber_id: params[:user_id])
            render :index
            return
        end

        @subscribers = Subscription.where(channel_id: params[:user_id])
        render :index
    end

    def create
        @subscription = Subscription.new(subscription_params)
        if @subscription.save
            render :show
        else
            render json: subscription.errors.full_messages, status: 401 
        end
    end

    def destroy
        @subscription = Subscription.find(params[:id])
        @subscription.destroy
        render :show
    end

    private

    def subscription_params
        params.require(:subscription).permit(:subscriber_id, :channel_id)
    end


end