# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  author_id   :integer
#  views       :integer          not null
#  description :string
#
class Video < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :views, presence: true
    validates :author_id, presence: true

    has_one_attached :video
    has_one_attached :thumbnail

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User

    has_many :likes,
        as: :likable,
        dependent: :destroy

    has_many :comments,
        foreign_key: :video_id,
        class_name: :Comment,
        dependent: :destroy

    # has_many :likes,
    #     foreign_key: :video_id,
    #     class_name: :Like
end
