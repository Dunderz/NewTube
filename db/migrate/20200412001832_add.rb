class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :author_id, :integer
  end
end
