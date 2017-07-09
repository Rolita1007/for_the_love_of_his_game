class CreateAthletes < ActiveRecord::Migration[5.1]
  def change
    create_table :athletes do |t|
      t.string :name
      t.string :school
      t.integer :jeresey_number
      t.string :position
      t.integer :class_of
      t.string :team

      t.timestamps
    end
  end
end
