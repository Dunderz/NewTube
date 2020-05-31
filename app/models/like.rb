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
    validates :user_id, :likable_id, :likable_type, presence: true
    validates :is_like, inclusion: { in: [true, false] }
    
    belongs_to :likable, polymorphic: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
