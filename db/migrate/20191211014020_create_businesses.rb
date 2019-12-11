class CreateBusinesses < ActiveRecord::Migration[6.0]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :phone

      t.timestamps
    end
    add_index :businesses, :name, unique: true
  end
end
