# == Schema Information
#
# Table name: subscriptions
#
#  id            :bigint           not null, primary key
#  channel_id    :integer          not null
#  subscriber_id :integer          not null
#
class Subscription < ApplicationRecord 
    belongs_to :subscription,
        foreign_key: :channel_id,
        class_name: :User

    belongs_to :subscriber,
        foreign_key: :subscriber_id,
        class_name: :User
end
