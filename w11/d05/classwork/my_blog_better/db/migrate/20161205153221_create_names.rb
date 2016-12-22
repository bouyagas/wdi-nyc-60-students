class CreateNames < ActiveRecord::Migration[5.0]
  def change
    create_table :names do |t|
      t.string :avatar
      t.integer :serial
      t.string :skill

      t.timestamps
    end
  end
end
