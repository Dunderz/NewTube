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
#
class Comment < ApplicationRecord
    validates :body, presence: true

    belongs_to :user
    belongs_to :video
end
