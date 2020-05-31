class ChangeLikesModel < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :likable_type, :string, null: false
    add_column :likes, :likable_id, :integer, null: false
  end
end
