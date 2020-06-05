# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  video_id   :integer          not null
#  user_id    :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  username   :string
#
class Comment < ApplicationRecord
    validates :body, presence: true, length: {minimum: 1}
    validates :video_id, presence: true
    validates :user_id, presence: true
    validates :username, presence: true
    
    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id

    belongs_to :video,
        class_name: :Video,
        foreign_key: :video_id

    belongs_to :commentable, polymorphic: true

    has_many :comments, as: :commentable

    has_many :likes,
        as: :likable
end
