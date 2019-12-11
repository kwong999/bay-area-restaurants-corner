class CreateHours < ActiveRecord::Migration[6.0]
  def change
    create_table :hours do |t|
      t.integer :business_id, null: false
      t.string :hours_mon
      t.string :hours_tue
      t.string :hours_wed
      t.string :hours_thu
      t.string :hours_fri
      t.string :hours_sat
      t.string :hours_sun
      t.timestamps
    end
    add_index :hours, :business_id, unique: true
  end
end
