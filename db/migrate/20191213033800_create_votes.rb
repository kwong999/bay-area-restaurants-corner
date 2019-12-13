class CreateVotes < ActiveRecord::Migration[6.0]
  def change
    create_table :votes do |t|
      t.integer :user_id, null: false
      t.integer :comment_id, null: false
      t.integer :voting, null: false
      t.timestamps
    end
    add_index :votes, [:user_id, :comment_id], unique: true
  end
end
