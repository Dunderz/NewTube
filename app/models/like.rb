# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  is_like    :boolean          not null
#  video_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord
    validates :is_like, presence: true
    
    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id

    belongs_to :video,
        class_name: :Video,
        foreign_key: :video_id
end
