class AddFamilyToAthletes < ActiveRecord::Migration[5.1]
  def change
    add_reference :athletes, :family, foreign_key: true
  end
end
