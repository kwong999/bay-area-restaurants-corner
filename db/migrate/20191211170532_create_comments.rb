class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.string :body, null: false

      t.timestamps
    end
    add_index :comments, [:user_id]
    add_index :comments, [:business_id]
    add_index :comments, [:user_id, :business_id], unique: true
  end
end
