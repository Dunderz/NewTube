class Subscription < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :channel_id, null: false
      t.integer :subscriber_id, null: false
    end
    add_index :subscriptions, [:subscriber_id, :channel_id], unique: true
  end
end
