class AddViewsToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :views, :integer, null: false
    add_column :videos, :description, :string
  end
end
