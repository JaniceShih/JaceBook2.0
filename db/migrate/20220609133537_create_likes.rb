class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.string  :like_type, null: false
      t.bigint :like_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :likes, [:like_id, :like_type]
    add_index :likes, :user_id
  end
end
