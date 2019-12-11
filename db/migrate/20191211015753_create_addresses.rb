class CreateAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :addresses do |t|
      t.integer :business_id, null: false
      t.string :address_first
      t.string :address_second
      t.string :street
      t.string :city
      t.string :state
      t.integer :zip
      t.float :lat
      t.float :lng

      t.timestamps
    end
    add_index :addresses, :business_id, unique: true
  end
end
