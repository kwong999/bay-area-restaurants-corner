class CreateRates < ActiveRecord::Migration[6.0]
  def change
    create_table :rates do |t|
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.float :rating, null: false

      t.timestamps
    end
    add_index :rates, [:user_id]
    add_index :rates, [:business_id]
    add_index :rates, [:user_id, :business_id], unique: true
  end
end
