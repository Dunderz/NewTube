class RemoveIsLikeFromLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :is_like
    add_column :likes, :value, :string, null: false
  end
end
