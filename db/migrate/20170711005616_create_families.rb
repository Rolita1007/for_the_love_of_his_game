class CreateFamilies < ActiveRecord::Migration[5.1]
  def change
    create_table :families do |t|
      t.string :name
      t.string :school
      t.string :team
      t.string :relationship
      t.references :athlete, foreign_key: true

      t.timestamps
    end
  end
end
