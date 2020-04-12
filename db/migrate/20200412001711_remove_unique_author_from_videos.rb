class RemoveUniqueAuthorFromVideos < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :author_id, :integer
  end
end
