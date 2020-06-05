class AddPolymorphicComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :commentable_type, :string, null: false
    add_column :comments, :commentable_id, :integer, null: false
  end
end
