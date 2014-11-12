class CreateStats < ActiveRecord::Migration
  def change
    create_table :stats do |t|
      t.integer :total_time
      t.references :game
      t.references :player
      t.timestamps
    end
  end
end
