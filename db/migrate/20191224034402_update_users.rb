class UpdateUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :role, :string, default: 'User', null: false
  end
end
