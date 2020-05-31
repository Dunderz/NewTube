# == Schema Information
#
# Table name: likes
#
#  id           :bigint           not null, primary key
#  video_id     :integer          not null
#  user_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  likable_type :string           not null
#  likable_id   :integer          not null
#  value        :string           not null
#
class Like < ApplicationRecord
    validates :user_id, :likable_id, :likable_type, presence: true
    validates :value, presence: true
    
    belongs_to :likable, polymorphic: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    def num_likes
        
    end 
end
